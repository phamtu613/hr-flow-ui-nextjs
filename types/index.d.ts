export interface TeamMember {
  id: string;
  avatar: string;
  firstName: string;
  lastName: string;
  role: "team-leader" | "member" | "pm";
  status: "active" | "inactive";
}

export interface TableColumn {
  key: keyof TeamMember | "actions";
  label: string;
  width?: string;
  align?: "left" | "center" | "right";
}

export interface LegendPayload {
  value: string;
  color: string;
}

export interface CustomLegendProps {
  payload?: LegendPayload[];
}
