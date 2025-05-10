import type { SVGProps } from 'react';

export function PakistanFlagIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600" width="30" height="20" {...props}>
      <rect width="900" height="600" fill="#006600"/>
      <rect width="225" height="600" fill="#FFF"/>
      <circle cx="562.5" cy="300" r="135" fill="#FFF"/>
      <circle cx="600" cy="270" r="108" fill="#006600"/>
      <polygon points="705,150 721.301,200.663 777.553,200.663 733.126,231.325 749.427,281.987 705,251.325 660.573,281.987 676.874,231.325 632.447,200.663 688.699,200.663" fill="#FFF"/>
    </svg>
  );
}
