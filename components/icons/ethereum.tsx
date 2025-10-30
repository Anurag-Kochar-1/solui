import type { SVGProps } from "react";

const Ethereum = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 32 32"
  >
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#eth__a)" xlinkHref="#eth__b" />
      <use fill="#627EEA" xlinkHref="#eth__b" />
      <use
        fill="url(#eth__c)"
        style={{ mixBlendMode: 'soft-light' }}
        xlinkHref="#eth__b"
      />
      <circle cx="16" cy="15" r="14.5" stroke="#000" strokeOpacity=".097" />
      <g fillRule="nonzero">
        <use fill="#000" filter="url(#eth__d)" xlinkHref="#eth__e" />
        <use
          fill="#FFF"
          fill-opacity="0"
          fillRule="evenodd"
          xlinkHref="#eth__e"
        />
      </g>
      <g fill="#FFF" fillRule="nonzero" transform="translate(9 3)">
        <polygon fill-opacity=".602" points="7.498 0 7.498 8.87 14.995 12.22" />
        <polygon points="7.498 0 0 12.22 7.498 8.87" />
        <polygon
          fill-opacity=".602"
          points="7.498 17.968 7.498 23.995 15 13.616"
        />
        <polygon points="7.498 23.995 7.498 17.967 0 13.616" />
        <polygon
          fill-opacity=".2"
          points="7.498 16.573 14.995 12.22 7.498 8.872"
        />
        <polygon
          fill-opacity=".602"
          points="0 12.22 7.498 16.573 7.498 8.872"
        />
      </g>
    </g>
  </svg>
);

export { Ethereum };
