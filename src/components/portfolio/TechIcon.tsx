import type { LucideProps } from 'lucide-react';
import { TechIconMap } from '@/lib/portfolio-data';

interface TechIconProps extends LucideProps {
  name: keyof typeof TechIconMap;
}

export function TechIcon({ name, className, ...props }: TechIconProps) {
  const IconComponent = TechIconMap[name];

  if (!IconComponent) {
    // Fallback icon or null if no icon found
    const FallbackIcon = TechIconMap['React']; // Default to React icon or any other
    return <FallbackIcon className={className} {...props} />;
  }

  return <IconComponent className={className} {...props} />;
}
