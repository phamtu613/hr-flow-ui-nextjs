import {
  EmployeeOfMonthCard,
  EmployeesPresentCard,
  TeamDistributionCard,
  TeamLeadersCard,
  TotalEmployeesCard,
  TotalTeamsCard,
} from "@/app/(protected)/dashboard/_components/dashboard-cards";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import EmployeeWorkLocationChart from "./_components/employee-work-location-chart";
import SupportTicketsChart from "./_components/support-tickets-chart";
import TeamDistributionPieChart from "./_components/team-distribution-pie-chart";

export default function DashboardPage() {
  return (
    <div>
      <Tabs defaultValue="employees-stats" className="w-full">
        <TabsList>
          <TabsTrigger value="employees-stats">Employees stats</TabsTrigger>
          <TabsTrigger value="teams-stats">Teams stats</TabsTrigger>
        </TabsList>
        <TabsContent value="employees-stats">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-6">
            <TotalEmployeesCard />
            <EmployeesPresentCard />
            <EmployeeOfMonthCard />
          </div>
          <EmployeeWorkLocationChart />
        </TabsContent>
        <TabsContent value="teams-stats">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-6">
            <TotalTeamsCard />
            <TeamLeadersCard />
            <TeamDistributionCard>
              <TeamDistributionPieChart />
            </TeamDistributionCard>
          </div>
          <SupportTicketsChart />
        </TabsContent>
      </Tabs>
    </div>
  );
}
