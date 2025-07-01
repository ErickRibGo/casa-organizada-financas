import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface FinancialCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  variant?: 'default' | 'success' | 'warning' | 'destructive';
  icon?: React.ReactNode;
  className?: string;
}

export function FinancialCard({ 
  title, 
  value, 
  subtitle, 
  variant = 'default', 
  icon,
  className 
}: FinancialCardProps) {
  return (
    <Card className={cn(
      "transition-all duration-200 hover:shadow-md",
      variant === 'success' && "border-success/20 bg-success-light/30",
      variant === 'warning' && "border-warning/20 bg-warning-light/30", 
      variant === 'destructive' && "border-destructive/20 bg-destructive/5",
      className
    )}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        {icon && (
          <div className={cn(
            "h-4 w-4",
            variant === 'success' && "text-success",
            variant === 'warning' && "text-warning",
            variant === 'destructive' && "text-destructive",
            variant === 'default' && "text-muted-foreground"
          )}>
            {icon}
          </div>
        )}
      </CardHeader>
      <CardContent>
        <div className={cn(
          "text-2xl font-bold",
          variant === 'success' && "text-success",
          variant === 'warning' && "text-warning",
          variant === 'destructive' && "text-destructive"
        )}>
          {typeof value === 'number' 
            ? value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
            : value
          }
        </div>
        {subtitle && (
          <p className="text-xs text-muted-foreground mt-1">
            {subtitle}
          </p>
        )}
      </CardContent>
    </Card>
  );
}