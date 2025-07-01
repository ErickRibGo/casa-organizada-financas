import { Header } from "@/components/Header";
import { DashboardStats } from "@/components/DashboardStats";
import { ExpenseChart } from "@/components/ExpenseChart";
import { FamilyChart } from "@/components/FamilyChart";
import { RecentTransactions } from "@/components/RecentTransactions";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-6 py-8">
        <div className="space-y-8">
          {/* Welcome Section */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Bem-vindo ao seu controle financeiro familiar
            </h2>
            <p className="text-muted-foreground">
              Acompanhe as finanças da sua família de forma simples e organizada.
            </p>
          </div>

          {/* Stats Cards */}
          <DashboardStats />

          {/* Charts Section */}
          <div className="grid gap-6 md:grid-cols-2">
            <ExpenseChart />
            <FamilyChart />
          </div>

          {/* Recent Transactions */}
          <RecentTransactions />
        </div>
      </main>
    </div>
  );
}