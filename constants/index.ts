import { TableColumn } from "@/types";
import { LayoutDashboard, Settings, User, Users, UserStar } from "lucide-react";

// Routes configuration
export const ROUTES = {
  HOME: "/",
  DASHBOARD: "/dashboard",
  TEAMS: "/dashboard/teams",
  EMPLOYEES: "/dashboard/employees",
  ACCOUNTS: "/dashboard/accounts",
  SETTINGS: "/dashboard/settings",
  LOGIN: "/login",
  SIGN_UP: "/sign-up",
} as const;

export const MENU_LIST = [
  { title: "My Dashboard", href: ROUTES.DASHBOARD, icon: LayoutDashboard },
  { title: "Teams", href: ROUTES.TEAMS, icon: Users },
  { title: "Employees", href: ROUTES.EMPLOYEES, icon: UserStar },
  { title: "Accounts", href: ROUTES.ACCOUNTS, icon: User },
  { title: "Settings", href: ROUTES.SETTINGS, icon: Settings },
];

export const TEAM_TABLE_COLUMNS: TableColumn[] = [
  { key: "avatar", label: "", width: "w-40", align: "center" },
  { key: "firstName", label: "First name", width: "w-[150px]" },
  { key: "lastName", label: "Last name", width: "w-[150px]" },
  { key: "actions", label: "Role", align: "center" },
];

export const PIPE_CHART_COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
