import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { mockTransactions, getCategoryById, getMemberById } from "@/lib/mockData";

export function RecentTransactions() {
  // Get last 6 transactions
  const recentTransactions = mockTransactions
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 6);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          📝 Transações Recentes
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentTransactions.map((transaction) => {
            const category = getCategoryById(transaction.categoryId);
            const member = getMemberById(transaction.memberId);
            
            return (
              <div key={transaction.id} className="flex items-center justify-between py-2 border-b border-border last:border-b-0">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                    <span className="text-lg">{category?.icon}</span>
                  </div>
                  <div>
                    <p className="font-medium text-sm">{transaction.description}</p>
                    <div className="flex items-center gap-2">
                      <p className="text-xs text-muted-foreground">{member?.name}</p>
                      <span className="text-xs">•</span>
                      <p className="text-xs text-muted-foreground">{category?.name}</p>
                    </div>
                  </div>
                </div>
                
                <div className="text-right">
                  <Badge variant={transaction.type === 'income' ? 'default' : 'secondary'}>
                    <span className={transaction.type === 'income' ? 'text-success' : 'text-destructive'}>
                      {transaction.type === 'income' ? '+' : '-'}
                      {Math.abs(transaction.amount).toLocaleString('pt-BR', { 
                        style: 'currency', 
                        currency: 'BRL' 
                      })}
                    </span>
                  </Badge>
                  <p className="text-xs text-muted-foreground mt-1">
                    {new Date(transaction.date).toLocaleDateString('pt-BR')}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}