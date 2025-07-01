import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { mockUser } from "@/lib/mockData";

export function Header() {
  return (
    <header className="bg-card border-b border-border px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">💰</span>
            </div>
            <h1 className="text-xl font-bold text-foreground">FamilyFinance</h1>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm">
            📊 Relatórios
          </Button>
          
          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="text-sm font-medium">{mockUser.name}</p>
              <p className="text-xs text-muted-foreground">{mockUser.email}</p>
            </div>
            <Avatar>
              <div className="h-full w-full bg-primary flex items-center justify-center text-primary-foreground font-semibold">
                {mockUser.name.charAt(0)}
              </div>
            </Avatar>
          </div>
        </div>
      </div>
    </header>
  );
}