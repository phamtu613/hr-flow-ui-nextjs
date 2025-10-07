import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import React from "react";

interface DashboardCardProps {
  title: string;
  icon?: LucideIcon;
  iconColor?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
  variant?: "default" | "primary" | "highlight";
}

export default function DashboardCard({
  title,
  icon: Icon,
  iconColor,
  children,
  footer,
  className,
  variant = "default",
}: DashboardCardProps) {
  const variantClasses = {
    default: "border-border",
    primary: "border-primary",
    highlight: "border-primary bg-primary/5",
  };

  return (
    <div
      className={cn(
        "rounded-lg border bg-card text-card-foreground shadow-sm h-full flex flex-col",
        variantClasses[variant],
        className
      )}
    >
      <div className="flex items-center justify-between p-6 pb-2">
        <h3 className="font-semibold tracking-tight text-base">{title}</h3>
        {Icon && <Icon className={cn("h-5 w-5", iconColor)} />}
      </div>

      <div className="flex-1 p-6 pt-0">{children}</div>

      {footer && <div className="p-6 pt-0 mt-auto">{footer}</div>}
    </div>
  );
}
