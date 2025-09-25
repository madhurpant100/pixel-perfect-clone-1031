import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Download, TrendingUp, Users, Target, BarChart3 } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Reports() {
  const navigate = useNavigate();

  const reportTypes = [
    {
      title: "Executive Summary",
      description: "High-level overview of conversation performance and key metrics",
      time: "Est. 5 min to generate",
      icon: TrendingUp,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      action: "Generate"
    },
    {
      title: "Team Performance", 
      description: "Detailed breakdown of individual and team conversion rates",
      time: "Est. 8 min to generate",
      icon: Users,
      iconBg: "bg-green-100",
      iconColor: "text-green-600"
    },
    {
      title: "Opportunity Analysis",
      description: "Deep dive into opportunity types, objections, and success factors", 
      time: "Est. 12 min to generate",
      icon: Target,
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600"
    },
    {
      title: "Regional Insights",
      description: "Geographic performance comparison and market trends",
      time: "Est. 7 min to generate", 
      icon: BarChart3,
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate(-1)}
            className="hover:bg-accent"
          >
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Reports</h1>
            <p className="text-muted-foreground">Generate detailed insights and performance reports</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <Button variant="outline" className="bg-card hover:bg-accent">
            <Calendar className="w-4 h-4 mr-2" />
            Schedule Report
          </Button>
          <Button variant="outline" className="bg-card hover:bg-accent">
            <Download className="w-4 h-4 mr-2" />
            Export All
          </Button>
        </div>
      </div>

      {/* Report Types Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reportTypes.map((report, index) => (
          <div key={index} className="bg-card rounded-xl p-6 border border-border hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className={`w-12 h-12 rounded-xl ${report.iconBg} flex items-center justify-center`}>
                <report.icon className={`w-6 h-6 ${report.iconColor}`} />
              </div>
              {report.action && (
                <Button className="bg-primary hover:bg-primary/90">
                  {report.action}
                </Button>
              )}
            </div>
            
            <h3 className="text-lg font-semibold text-foreground mb-2">{report.title}</h3>
            <p className="text-sm text-muted-foreground mb-4">{report.description}</p>
            <p className="text-sm text-muted-foreground">{report.time}</p>
          </div>
        ))}
      </div>

      {/* Recent Reports Section */}
      <div className="bg-card rounded-xl border border-border">
        <div className="p-6 border-b border-border">
          <h3 className="text-lg font-semibold text-foreground">Recent Reports</h3>
        </div>
        
        <div className="p-8 text-center">
          <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center mx-auto mb-4">
            <BarChart3 className="w-8 h-8 text-muted-foreground" />
          </div>
          <p className="text-muted-foreground">No recent reports generated yet.</p>
        </div>
      </div>
    </div>
  );
}