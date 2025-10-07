import { ROUTES } from "@/constants";
import {
  ChartPie,
  PartyPopper,
  Star,
  User,
  UserRoundCheck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import DashboardCard from "./dashboard-card";

export function TotalEmployeesCard() {
  return (
    <DashboardCard title="Total employees">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <User className="h-6 w-6" />
          <div className="text-5xl font-bold">100</div>
        </div>
        <div>
          <Link
            className="uppercase inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 text-xs py-2 px-3 tracking-normal"
            href={ROUTES.EMPLOYEES}
          >
            View all
          </Link>
        </div>
      </div>
    </DashboardCard>
  );
}

export function EmployeesPresentCard() {
  return (
    <DashboardCard
      title="Employees present"
      footer={
        <span className="text-xs text-green-500 flex gap-1 items-center">
          <UserRoundCheck className="h-4 w-4" />
          80% of employees are present
        </span>
      }
    >
      <div className="flex gap-2 items-center">
        <UserRoundCheck className="h-6 w-6" />
        <div className="text-5xl font-bold">80</div>
      </div>
    </DashboardCard>
  );
}

export function EmployeeOfMonthCard() {
  return (
    <DashboardCard
      title="Employee of the month"
      variant="highlight"
      footer={
        <div className="flex gap-2 items-center text-xs text-muted-foreground">
          <PartyPopper className="h-4 w-4 text-primary" />
          <span>Congratulations, Colin!</span>
        </div>
      }
    >
      <div className="flex gap-2 items-center">
        <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
          <Image
            alt="Employee of the month avatar"
            loading="lazy"
            width={40}
            height={40}
            src="/cm.jpg"
            className="rounded-full"
          />
        </span>
        <span className="text-2xl font-semibold">Colin Murray!</span>
      </div>
    </DashboardCard>
  );
}

export function TotalTeamsCard() {
  return (
    <DashboardCard title="Total teams">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <User className="h-6 w-6" />
          <div className="text-5xl font-bold">10</div>
        </div>
        <div>
          <Link
            className="uppercase inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 text-xs py-2 px-3 tracking-normal"
            href={ROUTES.TEAMS}
          >
            View all
          </Link>
        </div>
      </div>
    </DashboardCard>
  );
}

export function TeamLeadersCard() {
  return (
    <DashboardCard title="Team leaders" icon={Star} iconColor="text-amber-300">
      <div className="flex items-center gap-x-3 flex-wrap">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <Image
            key={i}
            src={`/avatar_0${i}.svg`}
            alt="Avatar"
            width={40}
            height={40}
            className="rounded-full"
          />
        ))}
      </div>
    </DashboardCard>
  );
}

export function TeamDistributionCard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DashboardCard
      title="Team distribution"
      icon={ChartPie}
      iconColor="text-amber-300"
    >
      <div className="h-32 w-full">{children}</div>
    </DashboardCard>
  );
}
