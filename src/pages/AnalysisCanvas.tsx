import { Button } from "@/components/ui/button";
import { ArrowLeft, Save, Share, RefreshCw, Plus, BarChart3, List } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AnalysisCanvas() {
  const navigate = useNavigate();

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
            <h1 className="text-3xl font-bold text-foreground">Analysis Canvas</h1>
            <p className="text-muted-foreground">Create custom visualizations and explore your data</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <Button variant="outline" className="bg-card hover:bg-accent">
            <Save className="w-4 h-4 mr-2" />
            Save Workspace
          </Button>
          <Button variant="outline" className="bg-card hover:bg-accent">
            <Share className="w-4 h-4 mr-2" />
            Share
          </Button>
          <Button variant="outline" className="bg-card hover:bg-accent">
            <RefreshCw className="w-4 h-4 mr-2" />
            Clear Canvas
          </Button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 text-muted-foreground">
          <span className="text-sm">Filters:</span>
        </div>
        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
          <Plus className="w-4 h-4 mr-1" />
          Add Filters
        </Button>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 min-h-[600px]">
        {/* Left Sidebar - Tools */}
        <div className="lg:col-span-1 space-y-4">
          <div className="bg-card rounded-xl p-6 border border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">Canvas Tools</h3>
            
            <div className="flex items-center gap-2 mb-4">
              <Button 
                size="sm" 
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <BarChart3 className="w-4 h-4" />
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                className="bg-card hover:bg-accent"
              >
                <List className="w-4 h-4" />
              </Button>
            </div>

            <Button className="w-full mb-4 bg-primary hover:bg-primary/90">
              <Plus className="w-4 h-4 mr-2" />
              Add Chart
            </Button>

            <Button variant="outline" className="w-full mb-6 bg-card hover:bg-accent">
              <BarChart3 className="w-4 h-4 mr-2" />
              Chart Templates
            </Button>

            <div>
              <h4 className="text-sm font-medium text-foreground mb-3">Active Charts</h4>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-1">0</div>
                <div className="text-sm text-muted-foreground">5 conversations loaded</div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Canvas Area */}
        <div className="lg:col-span-3">
          <div className="bg-card rounded-xl border border-border h-full min-h-[600px] flex flex-col items-center justify-center">
            <div className="text-center max-w-md">
              <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Plus className="w-10 h-10 text-primary" />
              </div>
              
              <h3 className="text-2xl font-semibold text-foreground mb-4">Your Canvas Awaits</h3>
              <p className="text-muted-foreground mb-8">
                Start building custom visualizations by adding charts to your canvas. 
                Drag, arrange, and analyze your data the way you want.
              </p>
              
              <Button className="bg-primary hover:bg-primary/90">
                <Plus className="w-4 h-4 mr-2" />
                Add Your First Chart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}