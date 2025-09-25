import { NavLink, useLocation } from "react-router-dom";
import { Home, Sparkles, BarChart3, FileText, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const navigationItems = [
  {
    section: "MAIN",
    items: [
      { name: "Dashboard", href: "/", icon: Home, description: "Overview & key metrics" },
      { name: "Ask AI", href: "/ask-ai", icon: Sparkles, description: "Conversational insights" },
    ],
  },
  {
    section: "TOOLS",
    items: [
      { name: "Analysis Canvas", href: "/analysis-canvas", icon: BarChart3, description: "Custom visualizations" },
      { name: "Reports", href: "/reports", icon: FileText, description: "Pre-built reports" },
    ],
  },
];

const quickStats = [
  { label: "Conversations", value: "200", color: "text-atlas-blue" },
  { label: "Opportunities", value: "59", color: "text-atlas-green" },
  { label: "Conversion", value: "4.9%", color: "text-atlas-purple" },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <div className="w-72 bg-card border-r border-border flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <BarChart3 className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-xl font-semibold text-foreground">Atlas</h1>
            <p className="text-sm text-muted-foreground">Partner Journey Insights</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 p-6">
        {navigationItems.map((section) => (
          <div key={section.section} className="mb-8">
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
              {section.section}
            </h3>
            <nav className="space-y-2">
              {section.items.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    className={cn(
                      "flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors",
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent"
                    )}
                  >
                    <item.icon className="w-4 h-4" />
                    <div>
                      <div className="font-medium">{item.name}</div>
                      <div className="text-xs opacity-75">{item.description}</div>
                    </div>
                  </NavLink>
                );
              })}
            </nav>
          </div>
        ))}

        {/* Quick Stats */}
        <div className="mt-8">
          <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
            QUICK STATS
          </h3>
          <div className="space-y-3">
            {quickStats.map((stat) => (
              <div key={stat.label} className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">{stat.label}</span>
                <span className={cn("text-sm font-semibold", stat.color)}>{stat.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Profile */}
      <div className="p-6 border-t border-border">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <span className="text-sm font-semibold text-primary-foreground">A</span>
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-foreground">Analytics Team</p>
            <p className="text-xs text-muted-foreground">Insights & Performance</p>
          </div>
        </div>
      </div>
    </div>
  );
}