import { cn } from "@/lib/utils";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  description: string;
  change: string;
  changeType: "increase" | "decrease" | "neutral";
  iconColor: "blue" | "green" | "purple" | "orange";
}

const iconColorClasses = {
  blue: "bg-metric-blue",
  green: "bg-metric-green", 
  purple: "bg-metric-purple",
  orange: "bg-metric-orange",
};

export function MetricCard({ title, value, description, change, changeType, iconColor }: MetricCardProps) {
  const TrendIcon = changeType === "increase" ? TrendingUp : changeType === "decrease" ? TrendingDown : Minus;
  
  return (
    <div className="bg-card rounded-xl p-6 border border-border">
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-sm text-muted-foreground mb-1">{title}</p>
          <p className="text-3xl font-bold text-foreground">{value}</p>
        </div>
        <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center", iconColorClasses[iconColor])}>
          <div className="w-6 h-6 bg-white/20 rounded" />
        </div>
      </div>
      
      <p className="text-sm text-muted-foreground mb-3">{description}</p>
      
      <div className="flex items-center gap-2">
        <TrendIcon className={cn(
          "w-4 h-4",
          changeType === "increase" ? "text-success" : 
          changeType === "decrease" ? "text-destructive" : 
          "text-muted-foreground"
        )} />
        <span className={cn(
          "text-sm font-medium",
          changeType === "increase" ? "text-success" : 
          changeType === "decrease" ? "text-destructive" : 
          "text-muted-foreground"
        )}>
          {change} vs last period
        </span>
      </div>
    </div>
  );
}