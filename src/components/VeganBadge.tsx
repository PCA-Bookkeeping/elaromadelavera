import { Leaf } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

interface VeganBadgeProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function VeganBadge({ size = "md", className = "" }: VeganBadgeProps) {
  const { t } = useLanguage();

  const sizes = {
    sm: "text-[10px] px-2 py-0.5 gap-1",
    md: "text-xs px-3 py-1.5 gap-1.5",
    lg: "text-sm px-4 py-2 gap-2",
  };

  const iconSizes = { sm: "h-3 w-3", md: "h-3.5 w-3.5", lg: "h-4 w-4" };

  return (
    <span className={`inline-flex items-center bg-primary/10 text-primary font-semibold rounded-full ${sizes[size]} ${className}`}>
      <Leaf className={iconSizes[size]} />
      {t("badge.vegan")}
    </span>
  );
}
