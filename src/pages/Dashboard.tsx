import { Button } from "@/components/ui/button";
import { MetricCard } from "@/components/MetricCard";
import { ChartCard } from "@/components/ChartCard";
import { FilterModal } from "@/components/FilterModal";
import { Filter, Plus, BarChart3, Zap } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Partner Journey Dashboard</h1>
          <p className="text-muted-foreground">Track conversation insights and opportunity performance</p>
        </div>
        <div className="flex items-center gap-3">
          <Button 
            onClick={() => navigate('/analysis-canvas')}
            variant="outline" 
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <BarChart3 className="w-4 h-4 mr-2" />
            Analysis Canvas
          </Button>
          <Button 
            onClick={() => navigate('/reports')}
            variant="outline"
          >
            Export Report
          </Button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Filter className="w-4 h-4" />
          <span className="text-sm">Filters:</span>
        </div>
        <Button 
          onClick={() => setIsFilterOpen(true)}
          variant="ghost" 
          size="sm" 
          className="text-muted-foreground hover:text-foreground"
        >
          <Plus className="w-4 h-4 mr-1" />
          Add Filters
        </Button>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Total Conversations"
          value="5"
          description="Parsed transcripts analyzed"
          change="+12.5%"
          changeType="increase"
          iconColor="blue"
        />
        <MetricCard
          title="Opportunities Captured"
          value="2"
          description="Successful conversions"
          change="+8.3%"
          changeType="increase"
          iconColor="green"
        />
        <MetricCard
          title="Conversion Rate"
          value="66.7%"
          description="Serve to capture"
          change="+2.1%"
          changeType="increase"
          iconColor="purple"
        />
        <MetricCard
          title="Active Teams"
          value="12"
          description="Contributing to pipeline"
          change="No change"
          changeType="neutral"
          iconColor="orange"
        />
      </div>

      {/* AI Insights */}
      <div className="bg-card rounded-xl p-6 border border-border">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">AI Insights Enabled</h3>
              <p className="text-sm text-muted-foreground">
                Advanced analysis active: Sentiment, objections, topics, talking points, and conversion patterns
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
            <Zap className="w-4 h-4" />
            Live Processing
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <ChartCard title="Conversion Funnel" className="lg:col-span-1">
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-muted-foreground">Conversations</span>
                <span className="text-sm font-medium">5</span>
              </div>
              <div className="w-full bg-primary rounded-full h-3"></div>
            </div>
            <div className="pt-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-muted-foreground">Opportunities Served</span>
                <span className="text-sm font-medium">3 (60.0%)</span>
              </div>
              <div className="w-3/5 bg-muted rounded-full h-3"></div>
            </div>
          </div>
        </ChartCard>

        <ChartCard title="Regional Performance" showToggle className="lg:col-span-1">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-16 bg-primary rounded"></div>
              <div>
                <div className="text-sm font-medium">2</div>
                <div className="text-xs text-muted-foreground">Region A</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-12 bg-primary/60 rounded"></div>
              <div>
                <div className="text-sm font-medium">1.5</div>
                <div className="text-xs text-muted-foreground">Region B</div>
              </div>
            </div>
          </div>
        </ChartCard>

        <ChartCard title="Property Type Distribution" showToggle className="lg:col-span-1">
          <div className="flex items-center justify-center">
            <div className="relative w-32 h-32">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="hsl(var(--atlas-green))"
                  strokeWidth="3"
                  strokeDasharray="60, 100"
                />
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="3"
                  strokeDasharray="40, 100"
                  strokeDashoffset="-60"
                />
              </svg>
            </div>
          </div>
        </ChartCard>
      </div>

      <FilterModal open={isFilterOpen} onOpenChange={setIsFilterOpen} />
    </div>
  );
}