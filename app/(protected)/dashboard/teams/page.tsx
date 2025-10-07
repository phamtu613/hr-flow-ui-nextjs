import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TEAM_TABLE_COLUMNS } from "@/constants";
import { DATA_TABLE_TEAM } from "@/constants/data-mockup";
import { TeamMember } from "@/types";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import Image from "next/image";

const getRoleButton = (role: TeamMember["role"]) => {
  switch (role) {
    case "team-leader":
      return (
        <Button className="w-40 py-5" variant="default" size="sm">
          Team leader
        </Button>
      );
    case "member":
      return (
        <Button className="w-40 py-5" variant="outline" size="sm">
          Member
        </Button>
      );
    case "pm":
      return (
        <Button className="w-40 py-5" variant="success" size="sm">
          Project manager
        </Button>
      );
    default:
      return null;
  }
};

export default function TeamPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Team Members</h1>
      <Table>
        <TableHeader>
          <TableRow>
            {TEAM_TABLE_COLUMNS.map((column) => (
              <TableHead
                key={column.key}
                className={`${column.width || ""} ${
                  column.align === "center"
                    ? "text-center"
                    : column.align === "right"
                    ? "text-right"
                    : ""
                }`}
              >
                {column.label}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {DATA_TABLE_TEAM.map((member) => (
            <TableRow key={member.id}>
              <TableCell className="py-3">
                <Avatar>
                  <AvatarImage
                    width={40}
                    height={40}
                    src={member.avatar}
                    alt={`${member.firstName} ${member.lastName} avatar`}
                  />
                  <AvatarFallback>
                    <Image
                      src="/avatar_01.svg"
                      alt="Avatar"
                      width={40}
                      height={40}
                      className="rounded-full filter grayscale"
                    />
                  </AvatarFallback>
                </Avatar>
              </TableCell>
              <TableCell className="py-3">{member.firstName}</TableCell>
              <TableCell className="py-3">{member.lastName}</TableCell>
              <TableCell className="text-center py-3">
                {getRoleButton(member.role)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
