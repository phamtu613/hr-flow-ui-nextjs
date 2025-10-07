import React from "react";

interface IconProps {
  icon: React.ComponentType<{ className?: string }>;
  className?: string;
}

export default function Icon({
  icon: IconComponent,
  className = "size-6",
}: IconProps) {
  return <IconComponent className={className} />;
}
