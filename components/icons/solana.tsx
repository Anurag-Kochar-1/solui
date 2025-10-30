import type { SVGProps } from "react";

const Solana = (props: SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 36 36">
      <g fill="none">
        <circle fill="#181E33" cx="18" cy="18" r="18" />
        <path
          d="M3.9 14.355a.785.785 0 0 1 .554-.23h19.153c.35 0 .525.423.277.67l-3.783 3.784a.785.785 0 0 1-.555.23H.393a.392.392 0 0 1-.277-.67l3.783-3.784z"
          fill="url(#sol__a)"
          transform="translate(6 9)"
        />
        <path
          d="M3.9.23c.15-.146.35-.23.554-.23h19.153c.35 0 .525.422.277.67l-3.783 3.783a.785.785 0 0 1-.555.23H.393a.392.392 0 0 1-.277-.67L3.899.229z"
          fill="url(#sol__b)"
          transform="translate(6 9)"
        />
        <path
          d="M20.1 7.247a.785.785 0 0 0-.554-.23H.393a.392.392 0 0 0-.277.67l3.783 3.784c.145.145.344.23.555.23h19.153c.35 0 .525-.423.277-.67l-3.783-3.784z"
          fill="url(#sol__c)"
          transform="translate(6 9)"
        />
      </g>
    </svg>
  );
  
  export { Solana };
  