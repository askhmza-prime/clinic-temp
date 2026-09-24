import Link from "next/link";
import { ArrowRight, LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  tag?: string;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  href,
  tag,
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group flex items-start gap-5 md:gap-7 py-7 border-t border-line first:border-t-0 md:first:border-t md:first:pt-0 hover:pl-2 transition-[padding] duration-200"
    >
      <div className="w-11 h-11 border border-ink/20 flex items-center justify-center text-ink flex-shrink-0 group-hover:border-iodine group-hover:text-iodine transition-colors duration-200">
        <Icon className="w-5 h-5" />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <h3 className="font-display text-xl font-medium text-ink">{title}</h3>
          {tag && (
            <span className="text-xs text-iodine border border-iodine/30 px-2 py-0.5">
              {tag}
            </span>
          )}
        </div>
        <p className="text-sm text-muted leading-relaxed mt-1.5 max-w-xl">
          {description}
        </p>
      </div>

      <ArrowRight className="w-4 h-4 text-ink/30 flex-shrink-0 mt-2 group-hover:text-iodine group-hover:translate-x-1 transition-all duration-200" />
    </Link>
  );
}
