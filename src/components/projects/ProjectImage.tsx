import { useState } from "react";
import { Image as ImageIcon, type LucideIcon } from "lucide-react";

export function ProjectImage({ src, alt, className, icon: Icon = ImageIcon }: { src: string; alt: string; className: string; icon?: LucideIcon }) {
  const [failed, setFailed] = useState(false);
  if (failed) return <div role="img" aria-label={alt} className={`${className} flex items-center justify-center overflow-hidden bg-primary/10 text-primary`}><div className="relative flex size-24 items-center justify-center"><span className="absolute inset-0 rounded-full border border-current/25 border-r-transparent" aria-hidden="true" /><Icon className="size-10" strokeWidth={1.5} aria-hidden="true" /></div></div>;
  return <img src={src} alt={alt} className={className} loading="lazy" onError={() => setFailed(true)} />;
}