"use client";

import { useEffect, useState, useMemo } from "react";
import dayjs from "dayjs";
import { motion } from "framer-motion";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

const HELIUS_KEY = process.env.NEXT_PUBLIC_HELIUS_API_KEY!;

function LoadingSkeleton() {
  const fakeWeeks = Array.from({ length: 53 }).map(() =>
    Array.from({ length: 7 })
  );

  return (
    <div className="overflow-x-auto pb-2">
      <div className="inline-flex gap-[3px]">
        {fakeWeeks.map((week, col) => (
          <div key={col} className="flex flex-col gap-[3px]">
            {week.map((_, row) => (
              <motion.div
                key={row}
                initial={{ opacity: 0.4 }}
                animate={{ opacity: 1 }}
                transition={{
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 1.2,
                  delay: col * 0.05,
                }}
                className="w-3 h-3 rounded-xs dark:bg-neutral-800 bg-neutral-200"
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

type DayActivity = {
  date: string;
  count: number;
  txs: string[];
};

export function WalletActivityHeatmap({ address }: { address: string }) {
  const [activity, setActivity] = useState<DayActivity[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if(!address) return;
    async function fetchYearActivity() {
      setLoading(true);

      const startOfYear = dayjs().startOf("year").unix();
      const activityMap: Record<string, { count: number; txs: string[] }> = {};

      let before: string | undefined = undefined;
      let stop = false;

      while(!stop) {
        const url: string = `https://api.helius.xyz/v0/addresses/${address}/transactions?api-key=${HELIUS_KEY}&${before ? `&before=${before}` : ""}`;
        const res: Response = await fetch(url);
        const data: any = await res.json();

        if(!Array.isArray(data) || data.length === 0) break;

        for(const tx of data) {
          if(tx.timestamp < startOfYear) {
            stop = true;
            break;
          }

          const date = dayjs.unix(tx.timestamp).format("YYYY-MM-DD");
          if(!activityMap[date]) activityMap[date] = { count: 0, txs: [] };

          activityMap[date].count++;
          activityMap[date].txs.push(tx.signature);
        }

        if(stop) break;

        before = data[data.length - 1]?.signature;
        if(!before) break;
      }

      const yearDays: DayActivity[] = [];
      const start = dayjs().startOf("year");
      const end = dayjs().endOf("year");
      let cursor = start;

      while(cursor.isBefore(end) || cursor.isSame(end)) {
        const dateStr = cursor.format("YYYY-MM-DD");
        yearDays.push({
          date: dateStr,
          count: activityMap[dateStr]?.count || 0,
          txs: activityMap[dateStr]?.txs || [],
        });
        cursor = cursor.add(1, "day");
      }

      setActivity(yearDays);
      setLoading(false);
    }

    fetchYearActivity();
  }, [address]);

  const weeks = useMemo(() => {
    if(activity.length === 0) return [];
    const weeks: (DayActivity | null)[][] = [];
    let currentWeek: (DayActivity | null)[] = [];

    const jan1Day = dayjs().startOf("year").day();
    for(let i = 0; i < jan1Day; i++) currentWeek.push(null);

    activity.forEach((day) => {
      currentWeek.push(day);
      if(currentWeek.length === 7) {
        weeks.push(currentWeek);
        currentWeek = [];
      }
    });

    if(currentWeek.length > 0) {
      while(currentWeek.length < 7) currentWeek.push(null);
      weeks.push(currentWeek);
    }
    return weeks;
  }, [activity]);

  const getColor = (count: number) => {
    if(count === 0) return "dark:bg-neutral-800 bg-neutral-200";
    if(count < 3) return "bg-purple-700";
    if(count < 6) return "bg-purple-600";
    return "bg-purple-400";
  };

  const tileVariants = {
    hidden: { opacity: 0, scale: 0.4 },
    visible: (col: number) => ({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.25, delay: col * 0.05 },
    }),
  };

  return (
    <TooltipProvider>
      {loading ? (
        <LoadingSkeleton />
      ) : (
        <div className="overflow-x-auto pb-2">
          <div className="inline-flex gap-[3px]">
            {weeks.map((week, col) => (
              <div key={col} className="flex flex-col gap-[3px]">
                {week.map((day, row) =>
                  day ? (
                    <Tooltip key={row}>
                      <TooltipTrigger asChild>
                        <motion.div
                          custom={col}
                          variants={tileVariants}
                          initial="hidden"
                          animate="visible"
                          className={`w-3 h-3 rounded-xs ${getColor(day.count)} cursor-pointer`}
                        />
                      </TooltipTrigger>
                      <TooltipContent className="text-xs p-2 max-w-2xl">
                        <p className="font-medium mb-1">{day.date}</p>
                        <p className="opacity-75 mb-2">{day.count} transactions</p>
                        <ScrollArea className="max-h-72 p-1 flex flex-col gap-1 overflow-auto">
                          {day.txs.map((sig, idx) => (
                            <div key={idx} className="flex items-center justify-between rounded px-1 py-0.5">
                              <p className="truncate text-[10px] max-w-[140px]">{sig}</p>
                              <a href={`https://solscan.io/tx/${sig}`} target="_blank" rel="noopener noreferrer">
                                <Button variant="secondary" size="sm" className="h-5 px-2 text-[10px]">
                                  View
                                </Button>
                              </a>
                            </div>
                          ))}
                        </ScrollArea>
                      </TooltipContent>
                    </Tooltip>
                  ) : (
                    <div key={row} className="w-3 h-3 rounded-xs dark:bg-neutral-900 bg-neutral-300 opacity-30" />
                  )
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </TooltipProvider>
  );
}