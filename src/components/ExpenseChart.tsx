import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { mockTransactions, getCategoryById } from "@/lib/mockData";

export function ExpenseChart() {
  // Group expenses by category
  const expenseData = mockTransactions
    .filter(transaction => transaction.type === 'expense')
    .reduce((acc, transaction) => {
      const category = getCategoryById(transaction.categoryId);
      if (!category) return acc;
      
      const existing = acc.find(item => item.name === category.name);
      if (existing) {
        existing.value += Math.abs(transaction.amount);
      } else {
        acc.push({
          name: category.name,
          value: Math.abs(transaction.amount),
          color: category.color,
          icon: category.icon
        });
      }
      return acc;
    }, [] as Array<{ name: string; value: number; color: string; icon: string }>);

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-card border border-border rounded-lg p-3 shadow-lg">
          <p className="font-medium flex items-center gap-2">
            <span>{data.icon}</span>
            {data.name}
          </p>
          <p className="text-sm text-muted-foreground">
            {data.value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          🥧 Gastos por Categoria
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={expenseData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={2}
                dataKey="value"
              >
                {expenseData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
              <Legend 
                formatter={(value, entry: any) => (
                  <span className="text-sm flex items-center gap-1">
                    <span>{entry.payload.icon}</span>
                    {value}
                  </span>
                )}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}