import type { SVGProps } from 'react';

export function UkFlagIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" width="30" height="15" {...props}>
      <clipPath id="t">
        <path d="M30,15 L30,0 L0,0 L0,15 Z"/>
      </clipPath>
      <path d="M0,0 L60,0 L60,30 L0,30 Z" fill="#00247d"/>
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
      <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#cf142b" strokeWidth="4"/>
      <path d="M30,0 L30,30 M0,15 L60,15" stroke="#fff" strokeWidth="10"/>
      <path d="M30,0 L30,30 M0,15 L60,15" stroke="#cf142b" strokeWidth="6"/>
    </svg>
  );
}
