import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { BarChart3, PieChart } from "lucide-react";

interface ChartCardProps {
  title: string;
  children: ReactNode;
  showToggle?: boolean;
  className?: string;
}

export function ChartCard({ title, children, showToggle = false, className = "" }: ChartCardProps) {
  return (
    <div className={`bg-card rounded-xl p-6 border border-border ${className}`}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        {showToggle && (
          <div className="flex items-center gap-2">
            <Button
              variant="secondary"
              size="sm"
              className="h-8 px-3 bg-foreground text-background hover:bg-foreground/90"
            >
              <BarChart3 className="w-4 h-4 mr-1" />
              Bar
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="h-8 px-3 text-muted-foreground hover:text-foreground"
            >
              <PieChart className="w-4 h-4 mr-1" />
              Pie
            </Button>
          </div>
        )}
      </div>
      {children}
    </div>
  );
}