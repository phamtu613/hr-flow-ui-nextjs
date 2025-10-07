import { ROUTES } from "@/constants";
import { Users } from "lucide-react";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href={ROUTES.HOME} className="flex items-center gap-2">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
        <Users className="h-6 w-6 text-primary-foreground" />
      </div>
      <span className="text-xl font-bold text-foreground">HRFlow</span>
    </Link>
  );
}
