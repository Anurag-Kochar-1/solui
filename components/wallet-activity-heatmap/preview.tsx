"use client";
import { useEffect, useState, useMemo } from "react";
import dayjs from "dayjs";
import { motion } from "framer-motion";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

const randomData = [
    {
        "date": "2025-01-01",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-01-02",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-01-03",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-01-04",
        "count": 5,
        "txs": [
            "ikF4Hkiz...fxDm",
            "sErquWMF...QEXE",
            "FzzEdejo...NGKA",
            "PTtv1unq...Fadp",
            "SdH43twp...DYJC"
        ]
    },
    {
        "date": "2025-01-05",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-01-06",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-01-07",
        "count": 3,
        "txs": [
            "BwAoRwKz...p3iq",
            "kKzPL5Zk...wbkK",
            "YY1HB9HF...xx9a"
        ]
    },
    {
        "date": "2025-01-08",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-01-09",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-01-10",
        "count": 5,
        "txs": [
            "gepKR9Ku...W69K",
            "eg8RvEGj...duK1",
            "XZuh2K86...u5Ci",
            "gnpdbdC9...tnEs",
            "2kUuphfh...knW3"
        ]
    },
    {
        "date": "2025-01-11",
        "count": 7,
        "txs": [
            "6VRK4r5L...NzWw",
            "LeUdJP17...6AM4",
            "6SiRBVgf...ziYB",
            "okiXq8Cg...1UQ9",
            "DKhSAKMF...dAMP",
            "rk6kshye...QnFT",
            "Liu2o2Ye...H3fi"
        ]
    },
    {
        "date": "2025-01-12",
        "count": 3,
        "txs": [
            "tT6tFN2h...VmQp",
            "6kxiGtRr...dZdL",
            "KnuLUtvE...GUjS"
        ]
    },
    {
        "date": "2025-01-13",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-01-14",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-01-15",
        "count": 2,
        "txs": [
            "Ntts71Tr...mZWy",
            "3XxN1NCE...EAsy"
        ]
    },
    {
        "date": "2025-01-16",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-01-17",
        "count": 1,
        "txs": [
            "bRaoeSZZ...Q9wY"
        ]
    },
    {
        "date": "2025-01-18",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-01-19",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-01-20",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-01-21",
        "count": 2,
        "txs": [
            "zkUrnu8E...T4KP",
            "FGKGg5QF...prAc"
        ]
    },
    {
        "date": "2025-01-22",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-01-23",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-01-24",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-01-25",
        "count": 6,
        "txs": [
            "yBFD3Geg...2XVr",
            "FhYkQ4AQ...FbXM",
            "Q2kvFXtL...UcF9",
            "RKavgR4U...VUjV",
            "rJU2kwR2...hLhw",
            "B2JP58nY...5fZ8"
        ]
    },
    {
        "date": "2025-01-26",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-01-27",
        "count": 8,
        "txs": [
            "1vqeshoE...6jGX",
            "ebzw2jBp...Y6VB",
            "AX9hZWCF...7tYc",
            "USeZYJze...v6Br",
            "AaedQn5i...aiAB",
            "4k9jZQNL...NmJK",
            "9kbtWTvq...eNby",
            "k36swsRH...h5rC"
        ]
    },
    {
        "date": "2025-01-28",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-01-29",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-01-30",
        "count": 2,
        "txs": [
            "KF6GBuix...tTe2",
            "zo1u7gS4...5Pfq"
        ]
    },
    {
        "date": "2025-01-31",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-02-01",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-02-02",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-02-03",
        "count": 5,
        "txs": [
            "2N6EmCKh...BNxE",
            "Z8nRn9ui...HkA5",
            "JBzZHvXQ...MLRD",
            "5EekAvZb...A7qq",
            "qkkcsGH8...9noT"
        ]
    },
    {
        "date": "2025-02-04",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-02-05",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-02-06",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-02-07",
        "count": 3,
        "txs": [
            "WeCHjpWT...S7dN",
            "pMdcwqu6...fR6t",
            "t1GGtBGR...EBzx"
        ]
    },
    {
        "date": "2025-02-08",
        "count": 7,
        "txs": [
            "Krg8kAoi...fsde",
            "zhn1gq2X...RvFi",
            "q6vDMyd6...V4qg",
            "Zo6mq8BY...gLVj",
            "5i18HZ2R...BW2g",
            "ynjojL9k...DeJn",
            "DcYEBz47...H8rf"
        ]
    },
    {
        "date": "2025-02-09",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-02-10",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-02-11",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-02-12",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-02-13",
        "count": 3,
        "txs": [
            "MhgcBwsq...175n",
            "9BRyoqqY...4MKe",
            "FVFCFytY...McGf"
        ]
    },
    {
        "date": "2025-02-14",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-02-15",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-02-16",
        "count": 8,
        "txs": [
            "hVKWqLwE...pT4o",
            "H3qungG6...h4Ki",
            "yifeDXq7...csMX",
            "LkR8iwVB...58ai",
            "95xf7Ttc...xtkt",
            "jjo8WQfg...7u7a",
            "kmr7S3Yx...ZBaE",
            "3TH8rAXs...uz2c"
        ]
    },
    {
        "date": "2025-02-17",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-02-18",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-02-19",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-02-20",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-02-21",
        "count": 4,
        "txs": [
            "QDMKar7m...fsbe",
            "PWAAX1vd...GRNY",
            "Tbm9HY3C...2uea",
            "4ZNqnTsd...iJMA"
        ]
    },
    {
        "date": "2025-02-22",
        "count": 1,
        "txs": [
            "USCBkyXP...f6uc"
        ]
    },
    {
        "date": "2025-02-23",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-02-24",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-02-25",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-02-26",
        "count": 8,
        "txs": [
            "i6S8AkVF...nXj1",
            "BKAKRGPw...UKw7",
            "68cQQhD2...SgLS",
            "rd4VCDjE...uRUF",
            "XxiRds6b...sZS2",
            "QVk1xzzv...piZD",
            "4Vm5piu8...pEKW",
            "RPDmTaVv...sB5G"
        ]
    },
    {
        "date": "2025-02-27",
        "count": 4,
        "txs": [
            "8xaEfE7X...abLY",
            "c8Tuohxu...BrxT",
            "XxttiSm6...97qx",
            "FGM8bfVc...Sy1A"
        ]
    },
    {
        "date": "2025-02-28",
        "count": 2,
        "txs": [
            "QGgE7gQf...TUfg",
            "UjiPHePr...KPFL"
        ]
    },
    {
        "date": "2025-03-01",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-03-02",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-03-03",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-03-04",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-03-05",
        "count": 7,
        "txs": [
            "pHEXE9LU...Ckkt",
            "y6JWSTVa...n7Bw",
            "PcAmyV85...Cgh8",
            "ekxr4fMh...g1fr",
            "B8Vda76p...i11A",
            "4W5rVHeD...aeVM",
            "FdG6L4sk...aGHT"
        ]
    },
    {
        "date": "2025-03-06",
        "count": 8,
        "txs": [
            "Y1kWjucc...iHdA",
            "uc1t6BuB...izKW",
            "UtF9SFhR...jkp6",
            "p3zSdVJV...qS7W",
            "3HfRaUcb...J2YC",
            "D7mUD6ug...CaCT",
            "vsH1aAnE...mpKt",
            "cuksS56c...gqYj"
        ]
    },
    {
        "date": "2025-03-07",
        "count": 7,
        "txs": [
            "v6Ym8G1k...4PZJ",
            "7VTiNM5q...VUSs",
            "7dMy5dMG...1g7M",
            "TJVPVkws...H9GK",
            "CGCveioe...R4Na",
            "DGV4oXRK...RHaj",
            "6EAy4wtu...tch4"
        ]
    },
    {
        "date": "2025-03-08",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-03-09",
        "count": 8,
        "txs": [
            "oxpyZ4jr...nWkj",
            "JxXEjA29...VeyR",
            "UXpNm6AG...QPVf",
            "RgAmaoin...kF1G",
            "BJSjBvWU...TzX8",
            "QKybvocy...ZLAf",
            "JFjyNp3q...nfCz",
            "WSPjEPyB...2Y3Z"
        ]
    },
    {
        "date": "2025-03-10",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-03-11",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-03-12",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-03-13",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-03-14",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-03-15",
        "count": 1,
        "txs": [
            "x2ns2tqS...fMPu"
        ]
    },
    {
        "date": "2025-03-16",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-03-17",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-03-18",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-03-19",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-03-20",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-03-21",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-03-22",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-03-23",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-03-24",
        "count": 6,
        "txs": [
            "ByiJuzFJ...KyP2",
            "WAepED2n...xrzg",
            "BiavVtij...hNtt",
            "D5JG4b1A...2Lry",
            "YBE89Hpk...mNMb",
            "ApQgYUDo...kPJH"
        ]
    },
    {
        "date": "2025-03-25",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-03-26",
        "count": 1,
        "txs": [
            "fVqcyLp5...YpfX"
        ]
    },
    {
        "date": "2025-03-27",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-03-28",
        "count": 5,
        "txs": [
            "dzUPty1m...fJQ2",
            "SZVF6Xba...VKkB",
            "yVCMz677...1a9S",
            "j3ZcCNt4...EDMj",
            "d7o3ws6X...QL3v"
        ]
    },
    {
        "date": "2025-03-29",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-03-30",
        "count": 7,
        "txs": [
            "SgjUrTm6...MaUV",
            "Zoi92yPE...BeFy",
            "pLVNG7up...ViYt",
            "8856adph...DBq7",
            "QPVodGao...aeN8",
            "UGNz5p7S...Hwve",
            "WLVfv5dh...9Teq"
        ]
    },
    {
        "date": "2025-03-31",
        "count": 4,
        "txs": [
            "pwVETeJD...VtEi",
            "Yyq2ZcHc...RX47",
            "7rHFMBCw...Vzqe",
            "GBxKM3ts...wGFP"
        ]
    },
    {
        "date": "2025-04-01",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-04-02",
        "count": 5,
        "txs": [
            "FDJAjrS1...NY5U",
            "LkGsq5wV...nEto",
            "hC9VATxR...gZEv",
            "bu7Yefs5...QXrp",
            "jbxp4A4k...QSUs"
        ]
    },
    {
        "date": "2025-04-03",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-04-04",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-04-05",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-04-06",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-04-07",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-04-08",
        "count": 7,
        "txs": [
            "qT8eokSD...kY4f",
            "nX5aaVGx...yFPt",
            "SrmCArqX...P46N",
            "wqFVuekb...zeNG",
            "N5xfsFLi...Zozq",
            "UJnXXayj...TSBX",
            "9NVFPHXq...GyDt"
        ]
    },
    {
        "date": "2025-04-09",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-04-10",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-04-11",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-04-12",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-04-13",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-04-14",
        "count": 7,
        "txs": [
            "eiKce3bH...3n9e",
            "H8SqcvRX...nd38",
            "pFcuzNDn...zPi1",
            "ZnV6RNip...ZBdx",
            "BHPWvs56...XcTz",
            "thvFmtw9...SdWP",
            "bL2GCQdK...d7iG"
        ]
    },
    {
        "date": "2025-04-15",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-04-16",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-04-17",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-04-18",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-04-19",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-04-20",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-04-21",
        "count": 8,
        "txs": [
            "LJbPh7b9...NhNq",
            "z6RxZVvD...mmyz",
            "mqDLWRMs...o9Rm",
            "M8xJn2Mw...jMhS",
            "rf5qBtiL...cc1Z",
            "CZqYzJwA...Tjgq",
            "dt29c5xm...EeQQ",
            "5ua2paJ4...oN1H"
        ]
    },
    {
        "date": "2025-04-22",
        "count": 8,
        "txs": [
            "CqmAmQmZ...7FXn",
            "D6BSZiVi...NKT4",
            "8FS3XwJY...nygL",
            "a6L4cixg...Ab9P",
            "ULrrgiW7...74XV",
            "SjBb54ij...3kKS",
            "vY7CzWvr...NsLG",
            "dRmxhLeW...AeJV"
        ]
    },
    {
        "date": "2025-04-23",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-04-24",
        "count": 1,
        "txs": [
            "Vuo2uiY5...91Qc"
        ]
    },
    {
        "date": "2025-04-25",
        "count": 1,
        "txs": [
            "cRdr44GK...4oF3"
        ]
    },
    {
        "date": "2025-04-26",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-04-27",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-04-28",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-04-29",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-04-30",
        "count": 6,
        "txs": [
            "EvaNFXGq...VetQ",
            "Bns2Wk3h...qnAE",
            "72jm1uEh...NwHP",
            "hHXQJc4o...2dXF",
            "WRv9JFZF...fgsV",
            "ipxQNgPu...cqqm"
        ]
    },
    {
        "date": "2025-05-01",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-05-02",
        "count": 5,
        "txs": [
            "5iogDn7Y...Knrg",
            "Da7N7WKp...dg9d",
            "Rz4nsUkx...NXwC",
            "qxoGzWzR...3KHC",
            "11hoJqej...MWw1"
        ]
    },
    {
        "date": "2025-05-03",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-05-04",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-05-05",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-05-06",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-05-07",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-05-08",
        "count": 5,
        "txs": [
            "tj4wrCg3...M4kP",
            "xqYrX4Bn...PZWG",
            "jeA1Ehw5...1syX",
            "Z5U962HR...Z4MJ",
            "vEy9Ftn3...uMXw"
        ]
    },
    {
        "date": "2025-05-09",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-05-10",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-05-11",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-05-12",
        "count": 2,
        "txs": [
            "QNT5WYSH...C8py",
            "RYLJ9cjE...nPVk"
        ]
    },
    {
        "date": "2025-05-13",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-05-14",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-05-15",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-05-16",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-05-17",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-05-18",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-05-19",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-05-20",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-05-21",
        "count": 4,
        "txs": [
            "GrLa8924...fXPA",
            "SCWJvgcq...FbYq",
            "ZF2Lsmo7...XqfW",
            "aZL66Ew2...5URm"
        ]
    },
    {
        "date": "2025-05-22",
        "count": 1,
        "txs": [
            "qf42gvHt...DXdG"
        ]
    },
    {
        "date": "2025-05-23",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-05-24",
        "count": 6,
        "txs": [
            "TSDj7rTy...zZ1d",
            "BujxCyEk...K1Ze",
            "w1vkSZyg...qRJ6",
            "WLTjNRye...LWdd",
            "WjfPuHgc...TdGL",
            "hKaMEiXM...sruy"
        ]
    },
    {
        "date": "2025-05-25",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-05-26",
        "count": 7,
        "txs": [
            "SwvMHYqo...kthd",
            "EorszLCA...zVV7",
            "CEGAc2gw...XAo6",
            "Ua2rMWyU...WFzh",
            "LDbhh74K...NxCE",
            "K2eew4J5...eraH",
            "VHfu3bVh...eaFs"
        ]
    },
    {
        "date": "2025-05-27",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-05-28",
        "count": 2,
        "txs": [
            "kKhXqQCw...pPua",
            "Ts8HrTKS...ExZq"
        ]
    },
    {
        "date": "2025-05-29",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-05-30",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-05-31",
        "count": 7,
        "txs": [
            "Qn79Crwx...mkPw",
            "sPn541U2...dXzV",
            "fAqGKVtb...EtnY",
            "KvSTCAq9...z4TQ",
            "QCr51UKk...REEt",
            "MoP3BYia...PFMq",
            "UPe1TVaq...WJcd"
        ]
    },
    {
        "date": "2025-06-01",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-06-02",
        "count": 6,
        "txs": [
            "BbkQB7NY...NBGJ",
            "YDDhphL8...tXqo",
            "qmjQ1w7q...e6pR",
            "ikhdxLUR...595U",
            "JjDoA69F...Xr7o",
            "sBy5Y1gF...WRhW"
        ]
    },
    {
        "date": "2025-06-03",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-06-04",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-06-05",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-06-06",
        "count": 2,
        "txs": [
            "McYmbWH2...5sny",
            "rqtterCV...g6YF"
        ]
    },
    {
        "date": "2025-06-07",
        "count": 5,
        "txs": [
            "SDiiuWJ1...CkxS",
            "7og1S1iT...h1bD",
            "WErso6WE...osaH",
            "nxNpjj1c...fAVY",
            "i2EBrEVK...XTKD"
        ]
    },
    {
        "date": "2025-06-08",
        "count": 3,
        "txs": [
            "9FWgADbE...PCcy",
            "67yUj7q5...LoxD",
            "GwGbTkZF...cNS1"
        ]
    },
    {
        "date": "2025-06-09",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-06-10",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-06-11",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-06-12",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-06-13",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-06-14",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-06-15",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-06-16",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-06-17",
        "count": 1,
        "txs": [
            "ENfNKgzd...86XS"
        ]
    },
    {
        "date": "2025-06-18",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-06-19",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-06-20",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-06-21",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-06-22",
        "count": 3,
        "txs": [
            "PVv7429S...RyVY",
            "SfUmwLmy...P8ET",
            "aNmCaZjx...BuTy"
        ]
    },
    {
        "date": "2025-06-23",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-06-24",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-06-25",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-06-26",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-06-27",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-06-28",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-06-29",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-06-30",
        "count": 2,
        "txs": [
            "hnqEP9GG...Go84",
            "xs3uYU9m...yuDg"
        ]
    },
    {
        "date": "2025-07-01",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-07-02",
        "count": 5,
        "txs": [
            "TT3rxiA8...ySSW",
            "aYwBx4Dc...3gRz",
            "mmBV8efQ...qP4j",
            "cZ26k3F8...g6FJ",
            "7kCnt59M...u7VR"
        ]
    },
    {
        "date": "2025-07-03",
        "count": 8,
        "txs": [
            "dUSjPZen...apBY",
            "9njfhH2x...HY6v",
            "gnahEFUz...9ddz",
            "uUbnzKdY...J5in",
            "onm4zcUK...Ds9r",
            "YJ2a2MvH...Ycjf",
            "TCETNJKV...zNqd",
            "AAaz3Erk...ugSi"
        ]
    },
    {
        "date": "2025-07-04",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-07-05",
        "count": 3,
        "txs": [
            "FpAq3tAW...qW4g",
            "hZrH4MeA...cCdb",
            "sUS5Zs7S...LVWi"
        ]
    },
    {
        "date": "2025-07-06",
        "count": 4,
        "txs": [
            "Y1LvWxyj...q5je",
            "NnwVdqU3...BH8t",
            "HQojdFwy...ut8K",
            "oxiW9fnp...ByPr"
        ]
    },
    {
        "date": "2025-07-07",
        "count": 5,
        "txs": [
            "CCi8uvTi...EZjC",
            "q2qncvRh...krwD",
            "rqzJhA1s...UQc3",
            "fZKLDc2K...yvpS",
            "XkwrhRdc...HK4X"
        ]
    },
    {
        "date": "2025-07-08",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-07-09",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-07-10",
        "count": 5,
        "txs": [
            "JPLsmAqM...fL4X",
            "Bk9oLyDD...p2Q8",
            "NjiAUvDx...2Gvb",
            "wtkpFVAA...WSjL",
            "38Y9TKiv...z4mq"
        ]
    },
    {
        "date": "2025-07-11",
        "count": 2,
        "txs": [
            "FmDKQjNe...6UXU",
            "czpR57qQ...fkC7"
        ]
    },
    {
        "date": "2025-07-12",
        "count": 2,
        "txs": [
            "7CUqPb4r...4hyY",
            "tbVNUr3T...KPSS"
        ]
    },
    {
        "date": "2025-07-13",
        "count": 7,
        "txs": [
            "Jq5xxJks...Srx2",
            "X8HGZxBk...CfSG",
            "4N7bMn8X...ZeTX",
            "1VYNqo3j...TSdQ",
            "5xwYSB2F...1dmS",
            "6AX4qp28...37UF",
            "DHuQGX3H...ikJ4"
        ]
    },
    {
        "date": "2025-07-14",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-07-15",
        "count": 6,
        "txs": [
            "mPJ5u6NB...4Y2W",
            "N3s4VY3E...N5dx",
            "cMBYKeDh...uCUc",
            "58vXYLqA...BYwd",
            "N7pE9x1D...mBSh",
            "v2uuF2NY...ysHc"
        ]
    },
    {
        "date": "2025-07-16",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-07-17",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-07-18",
        "count": 2,
        "txs": [
            "cg3yrmKw...i1Fw",
            "EKeZqH3Z...6zgj"
        ]
    },
    {
        "date": "2025-07-19",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-07-20",
        "count": 2,
        "txs": [
            "9FsBF8qk...D2Dr",
            "tN4WY4gT...1zbw"
        ]
    },
    {
        "date": "2025-07-21",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-07-22",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-07-23",
        "count": 7,
        "txs": [
            "RgXwatJH...Hi9n",
            "mZUx8v5o...Y1Ga",
            "NMT4kyY4...gtMB",
            "WEe6dQX3...RYDA",
            "vq8MrThU...TKX1",
            "99yQrCxz...fqix",
            "5WB9iY34...Vsqu"
        ]
    },
    {
        "date": "2025-07-24",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-07-25",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-07-26",
        "count": 2,
        "txs": [
            "hBctDH54...xu5T",
            "uMuUJGWg...onaV"
        ]
    },
    {
        "date": "2025-07-27",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-07-28",
        "count": 6,
        "txs": [
            "8PBU5czB...Mejs",
            "3EWyVsfx...zkcN",
            "Kixovcad...iAqc",
            "oAMc3rpZ...L9Ty",
            "1eDAHRTX...CRbj",
            "zGaEogCJ...PALH"
        ]
    },
    {
        "date": "2025-07-29",
        "count": 6,
        "txs": [
            "CK9EH5PE...CUZk",
            "9me7yfJd...5HeH",
            "FHLmbCUV...MmFU",
            "DiqzRV9e...CcgG",
            "AoyAyCua...fcBX",
            "79YNdACn...pik2"
        ]
    },
    {
        "date": "2025-07-30",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-07-31",
        "count": 1,
        "txs": [
            "6gUBDuXR...LuVN"
        ]
    },
    {
        "date": "2025-08-01",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-08-02",
        "count": 6,
        "txs": [
            "P3xDeY8i...ded9",
            "y9UVGJLr...MSs4",
            "gBVv9Eqk...Bwb7",
            "xMp8jSog...GJux",
            "MUXzAvZN...iVRC",
            "bTPMmQBn...MCen"
        ]
    },
    {
        "date": "2025-08-03",
        "count": 4,
        "txs": [
            "34kySN66...XBrQ",
            "Qtbodnun...MjgV",
            "92SDNNRa...zv56",
            "jpmLcSHm...HwSF"
        ]
    },
    {
        "date": "2025-08-04",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-08-05",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-08-06",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-08-07",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-08-08",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-08-09",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-08-10",
        "count": 3,
        "txs": [
            "j9Eu9NuH...aswq",
            "ksQB3XJ2...e4EP",
            "8mA3JWQF...TEi8"
        ]
    },
    {
        "date": "2025-08-11",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-08-12",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-08-13",
        "count": 7,
        "txs": [
            "GxaDHkzq...F57H",
            "ukg592tL...3J6w",
            "tSoSqxpo...wfXf",
            "uQfnvsgs...294X",
            "mjDQcg4q...BK3U",
            "gzC32pF9...V5Br",
            "v9tpZdzx...aGPt"
        ]
    },
    {
        "date": "2025-08-14",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-08-15",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-08-16",
        "count": 3,
        "txs": [
            "xMAz6chq...zPHd",
            "WLrXMb2t...h2CY",
            "vi2n79hc...BPEG"
        ]
    },
    {
        "date": "2025-08-17",
        "count": 3,
        "txs": [
            "Lnop5fwG...KJv3",
            "DzwFkCip...cWFg",
            "fjAardSv...FwX1"
        ]
    },
    {
        "date": "2025-08-18",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-08-19",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-08-20",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-08-21",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-08-22",
        "count": 3,
        "txs": [
            "ZZaQcUdM...9Vkw",
            "A1AxvynG...46NW",
            "Z421eikY...Md2a"
        ]
    },
    {
        "date": "2025-08-23",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-08-24",
        "count": 5,
        "txs": [
            "DCikHvWV...3CbH",
            "aUkxiQDX...FFuA",
            "wR3T47Rn...VQBv",
            "XNnY4ap5...UHax",
            "ih8qYvqb...h2t4"
        ]
    },
    {
        "date": "2025-08-25",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-08-26",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-08-27",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-08-28",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-08-29",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-08-30",
        "count": 3,
        "txs": [
            "TLLXUxBT...xrNE",
            "SmQQx7bc...sGi7",
            "9i95yGJU...Gzv3"
        ]
    },
    {
        "date": "2025-08-31",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-09-01",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-09-02",
        "count": 7,
        "txs": [
            "yrZDD9pa...3FN1",
            "MpSbgqyK...C3Za",
            "X66snjyq...86Xu",
            "z1GKPxNR...Aay2",
            "9DC9BMHV...WERU",
            "rS556FRv...UAXo",
            "KYb7Jg5Y...FGVx"
        ]
    },
    {
        "date": "2025-09-03",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-09-04",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-09-05",
        "count": 8,
        "txs": [
            "TMGSWdVG...RPHD",
            "jLeL3DW3...ZfQJ",
            "keruNovm...P8sz",
            "qbDrMDbd...TYfa",
            "GnbExvNx...gYex",
            "HKaYuj7h...zWpY",
            "xNkYUngH...hXv6",
            "KGiimaH3...Rkdu"
        ]
    },
    {
        "date": "2025-09-06",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-09-07",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-09-08",
        "count": 3,
        "txs": [
            "Qr8Z92SU...UGoF",
            "ivJYY4LE...YNCr",
            "6AG5cQAP...Ve3m"
        ]
    },
    {
        "date": "2025-09-09",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-09-10",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-09-11",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-09-12",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-09-13",
        "count": 5,
        "txs": [
            "YmbgF4re...fZBK",
            "nE9R1sXx...6Muc",
            "ENzR3EwR...2GK4",
            "gFvW7Qnm...Q7eA",
            "CfL8szED...9ckg"
        ]
    },
    {
        "date": "2025-09-14",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-09-15",
        "count": 2,
        "txs": [
            "rEfnyUjK...vrXa",
            "T7gMfgKy...MP4w"
        ]
    },
    {
        "date": "2025-09-16",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-09-17",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-09-18",
        "count": 7,
        "txs": [
            "22VdVmn6...Vsz7",
            "kSpuWixr...a9Bg",
            "GS2mUJ4x...UaEj",
            "VsvaKbFx...L7kr",
            "9HdBL4HX...vWbj",
            "mpWemnr5...o92Y",
            "zXLoQ1L5...Xk4w"
        ]
    },
    {
        "date": "2025-09-19",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-09-20",
        "count": 4,
        "txs": [
            "Q17c8tm8...519u",
            "2ix9gHwt...mRBH",
            "eHNqAfrF...X7vL",
            "oyB4QHXY...v9fC"
        ]
    },
    {
        "date": "2025-09-21",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-09-22",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-09-23",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-09-24",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-09-25",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-09-26",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-09-27",
        "count": 5,
        "txs": [
            "pC5KvrrZ...NPGL",
            "jPNYJfNM...6chn",
            "N8SViU7q...MBN8",
            "RcLpwJni...fPwq",
            "kLx9A5va...SheX"
        ]
    },
    {
        "date": "2025-09-28",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-09-29",
        "count": 7,
        "txs": [
            "YVRfWkJr...Fxmz",
            "tZAum5hb...AHZs",
            "icF3PLjU...jUAL",
            "EkK6oLUM...vqFi",
            "YjrNiPrV...GryM",
            "K1gvcnpZ...tB1a",
            "EGmLAnHE...EEWD"
        ]
    },
    {
        "date": "2025-09-30",
        "count": 4,
        "txs": [
            "UKcZpWXe...sLMP",
            "Kwxy4eq5...sYcw",
            "oUx2eGCk...FYKX",
            "dEP5Zmom...dpab"
        ]
    },
    {
        "date": "2025-10-01",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-10-02",
        "count": 1,
        "txs": [
            "1d2Kyvc5...5jRk"
        ]
    },
    {
        "date": "2025-10-03",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-10-04",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-10-05",
        "count": 4,
        "txs": [
            "jgjxfyug...YPQo",
            "RND8Fqi7...JcyA",
            "74Sn6LV6...Tc66",
            "EzVkLvdF...E6iA"
        ]
    },
    {
        "date": "2025-10-06",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-10-07",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-10-08",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-10-09",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-10-10",
        "count": 5,
        "txs": [
            "5dKoBuDf...2xSc",
            "RECknBFb...r4Dh",
            "rBAak7kB...zaSS",
            "qRqrDXsR...VrK3",
            "pCoWAiaG...FgUz"
        ]
    },
    {
        "date": "2025-10-11",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-10-12",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-10-13",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-10-14",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-10-15",
        "count": 4,
        "txs": [
            "DRpj5tM9...SmNX",
            "akq5Kwej...GvAv",
            "FC59gXrD...gxVZ",
            "T2qxkQNf...PqF7"
        ]
    },
    {
        "date": "2025-10-16",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-10-17",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-10-18",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-10-19",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-10-20",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-10-21",
        "count": 8,
        "txs": [
            "fpTzXrso...WF7Z",
            "kqodByZp...G97o",
            "Yoe1xLk1...h48t",
            "9wX46d4e...JGF1",
            "7ae9626p...9Yat",
            "XHJ5H7LL...94Q7",
            "T15M95H9...XSda",
            "CwUGknAG...LBsb"
        ]
    },
    {
        "date": "2025-10-22",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-10-23",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-10-24",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-10-25",
        "count": 1,
        "txs": [
            "hyMF3HeU...4GXN"
        ]
    },
    {
        "date": "2025-10-26",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-10-27",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-10-28",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-10-29",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-10-30",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-10-31",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-11-01",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-11-02",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-11-03",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-11-04",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-11-05",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-11-06",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-11-07",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-11-08",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-11-09",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-11-10",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-11-11",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-11-12",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-11-13",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-11-14",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-11-15",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-11-16",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-11-17",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-11-18",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-11-19",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-11-20",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-11-21",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-11-22",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-11-23",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-11-24",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-11-25",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-11-26",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-11-27",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-11-28",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-11-29",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-11-30",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-12-01",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-12-02",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-12-03",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-12-04",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-12-05",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-12-06",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-12-07",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-12-08",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-12-09",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-12-10",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-12-11",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-12-12",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-12-13",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-12-14",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-12-15",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-12-16",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-12-17",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-12-18",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-12-19",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-12-20",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-12-21",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-12-22",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-12-23",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-12-24",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-12-25",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-12-26",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-12-27",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-12-28",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-12-29",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-12-30",
        "count": 0,
        "txs": []
    },
    {
        "date": "2025-12-31",
        "count": 0,
        "txs": []
    }
]

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

// Generate random transaction signature
function generateRandomTxSignature(): string {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz123456789';
    const getRandomChars = (length: number) => {
        let result = '';
        for(let i = 0; i < length; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    };
    return `${getRandomChars(8)}...${getRandomChars(4)}`;
}

// Random activity data generator
function generateRandomActivityData(): DayActivity[] {
    const startOfYear = dayjs().startOf("year");
    const today = dayjs("2025-10-30"); // Fixed date: October 30, 2025
    const yearDays: DayActivity[] = [];

    let cursor = startOfYear;
    while(cursor.isBefore(today) || cursor.isSame(today, "day")) {
        const dateStr = cursor.format("YYYY-MM-DD");

        // Random chance of activity (30% of days have activity)
        const hasActivity = Math.random() < 0.3;
        let count = 0;
        let txs: string[] = [];

        if(hasActivity) {
            // Random transaction count between 1 and 8
            count = Math.floor(Math.random() * 8) + 1;

            // Generate random transaction signatures
            for(let i = 0; i < count; i++) {
                txs.push(generateRandomTxSignature());
            }
        }

        yearDays.push({
            date: dateStr,
            count,
            txs,
        });

        cursor = cursor.add(1, "day");
    }

    // Fill remaining days of the year with zero activity
    const endOfYear = dayjs().endOf("year");
    cursor = today.add(1, "day");
    while(cursor.isBefore(endOfYear) || cursor.isSame(endOfYear, "day")) {
        const dateStr = cursor.format("YYYY-MM-DD");
        yearDays.push({
            date: dateStr,
            count: 0,
            txs: [],
        });
        cursor = cursor.add(1, "day");
    }

    return yearDays;
}

export function WalletActivityHeatmap({ address }: { address: string }) {
    const [activity, setActivity] = useState<DayActivity[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if(!address) return;

        async function loadStaticData() {
            setLoading(true);
            await new Promise(resolve => setTimeout(resolve, 2000));
            setActivity(randomData);
            setLoading(false);
        }

        loadStaticData();
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
        if(count < 3) return "bg-purple-400";
        if(count < 6) return "bg-purple-600";
        return "bg-purple-700";
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
                                            <TooltipContent className="text-xs p-2 max-w-sm">
                                                {day.txs.length > 0 && (
                                                    <p className="text-destructive text-xs py-1"> ALERT: THIS IS DUMMY DATA FOR PREVIEW PURPOSES. USE IMPLEMENTATION CODE FOR REAL DATA. </p>
                                                )}
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