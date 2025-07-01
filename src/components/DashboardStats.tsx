import { FinancialCard } from "@/components/ui/financial-card";
import { getTotalIncome, getTotalExpenses, mockBudgets } from "@/lib/mockData";

export function DashboardStats() {
  const totalIncome = getTotalIncome();
  const totalExpenses = getTotalExpenses();
  const balance = totalIncome - totalExpenses;
  
  // Calculate budget status
  const totalBudgeted = mockBudgets.reduce((sum, budget) => sum + budget.amount, 0);
  const totalSpent = mockBudgets.reduce((sum, budget) => sum + budget.spent, 0);
  const budgetUsagePercentage = totalBudgeted > 0 ? (totalSpent / totalBudgeted) * 100 : 0;

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <FinancialCard
        title="Receita Total"
        value={totalIncome}
        subtitle="Este mês"
        variant="success"
        icon={<span className="text-success">↗️</span>}
      />
      
      <FinancialCard
        title="Gastos Totais"
        value={totalExpenses}
        subtitle="Este mês"
        variant="destructive"
        icon={<span className="text-destructive">↘️</span>}
      />
      
      <FinancialCard
        title="Saldo Atual"
        value={balance}
        subtitle={balance >= 0 ? "Positivo" : "Negativo"}
        variant={balance >= 0 ? "success" : "destructive"}
        icon={<span>{balance >= 0 ? "✅" : "⚠️"}</span>}
      />
      
      <FinancialCard
        title="Orçamento"
        value={`${budgetUsagePercentage.toFixed(0)}%`}
        subtitle={`R$ ${totalSpent.toLocaleString('pt-BR')} de R$ ${totalBudgeted.toLocaleString('pt-BR')}`}
        variant={budgetUsagePercentage > 90 ? "warning" : budgetUsagePercentage > 100 ? "destructive" : "default"}
        icon={<span>{budgetUsagePercentage > 90 ? "⚠️" : "📊"}</span>}
      />
    </div>
  );
}