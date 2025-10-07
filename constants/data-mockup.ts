import { TeamMember } from "@/types";

export const PIPE_CHART_DATA = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

export const DATA_TABLE_TEAM: TeamMember[] = [
  {
    id: "1",
    avatar: "/avatar_01.svg",
    firstName: "John",
    lastName: "Doe",
    role: "team-leader",
    status: "active",
  },
  {
    id: "2",
    avatar: "/avatar_02.svg",
    firstName: "Alice",
    lastName: "Smith",
    role: "member",
    status: "active",
  },
  {
    id: "3",
    avatar: "/avatar_03.svg",
    firstName: "Michael",
    lastName: "Brown",
    role: "member",
    status: "active",
  },
  {
    id: "4",
    avatar: "/avatar_04.svg",
    firstName: "Emily",
    lastName: "Wilson",
    role: "pm",
    status: "inactive",
  },
  {
    id: "5",
    avatar: "/avatar_05.svg",
    firstName: "David",
    lastName: "Taylor",
    role: "member",
    status: "active",
  },
  {
    id: "6",
    avatar: "/avatar_06.svg",
    firstName: "Lisa",
    lastName: "Johnson",
    role: "team-leader",
    status: "active",
  },
];

export const ACCOUNT_OPTION_TYPE = [
  { value: "company", label: "company" },
  { value: "personal", label: "personal" },
];

export const BAR_CHART_DATA = [
  {
    name: "Jan",
    "Work from office": 4000,
    "Work from home": 2400,
    amt: 2400,
  },
  { name: "Feb", "Work from office": 3000, "Work from home": 1398, amt: 2210 },
  { name: "Mar", "Work from office": 2000, "Work from home": 9800, amt: 2290 },
  { name: "Apr", "Work from office": 2780, "Work from home": 3908, amt: 2000 },
  { name: "May", "Work from office": 1890, "Work from home": 4800, amt: 2181 },
  { name: "Jun", "Work from office": 2390, "Work from home": 3800, amt: 2500 },
  { name: "Jul", "Work from office": 3490, "Work from home": 4300, amt: 2100 },
  { name: "Aug", "Work from office": 3490, "Work from home": 4300, amt: 2100 },
  { name: "Sep", "Work from office": 3490, "Work from home": 4300, amt: 2100 },
  { name: "Oct", "Work from office": 3490, "Work from home": 4300, amt: 2100 },
  { name: "Nov", "Work from office": 3490, "Work from home": 4300, amt: 2100 },
  { name: "Dec", "Work from office": 3490, "Work from home": 4300, amt: 2100 },
];

export const LINE_CHART_DATA = [
  {
    name: "Jan",
    Delta: 4000,
    Alpha: 2400,
    Canary: 2400,
    amt: 2400,
  },
  { name: "Feb", Delta: 3000, Alpha: 1398, Canary: 2210 },
  { name: "Mar", Delta: 2000, Alpha: 9800, Canary: 2290 },
  { name: "Apr", Delta: 2780, Alpha: 3908, Canary: 2000 },
  { name: "May", Delta: 1890, Alpha: 4800, Canary: 2181 },
  { name: "Jun", Delta: 2390, Alpha: 3800, Canary: 2500 },
  { name: "Jul", Delta: 3490, Alpha: 4300, Canary: 2100 },
  { name: "Aug", Delta: 3490, Alpha: 4300, Canary: 2100 },
  { name: "Sep", Delta: 3490, Alpha: 4300, Canary: 2100 },
  { name: "Oct", Delta: 3490, Alpha: 4300, Canary: 2100 },
  { name: "Nov", Delta: 3490, Alpha: 4300, Canary: 2100 },
  { name: "Dec", Delta: 3490, Alpha: 4300, Canary: 2100 },
];
