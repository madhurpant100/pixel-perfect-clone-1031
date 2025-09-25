import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, BarChart3, Paperclip, Send, Sparkles } from "lucide-react";

export default function AskAI() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto">
          <Sparkles className="w-10 h-10 text-primary-foreground" />
        </div>
        <div>
          <h1 className="text-4xl font-bold text-foreground mb-2">Ask Atlas AI</h1>
          <p className="text-xl text-muted-foreground">Your conversational data insights partner</p>
        </div>
      </div>

      {/* Chat Input */}
      <div className="w-full max-w-2xl space-y-4">
        <div className="relative">
          <Input
            placeholder="Ask anything or @mention a Space..."
            className="w-full h-14 pl-4 pr-14 text-base rounded-xl border-border bg-card"
          />
          <Button
            size="sm"
            className="absolute right-2 top-2 h-10 w-10 rounded-lg bg-primary hover:bg-primary/90"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-center gap-4">
          <Button
            variant="outline"
            className="h-10 px-4 text-sm font-medium bg-card hover:bg-accent"
          >
            <Search className="w-4 h-4 mr-2" />
            Deep Research
          </Button>
          <Button
            variant="outline"
            className="h-10 px-4 text-sm font-medium bg-card hover:bg-accent"
          >
            <BarChart3 className="w-4 h-4 mr-2" />
            Comparative Analysis
          </Button>
          <Button
            variant="outline"
            className="h-10 px-4 text-sm font-medium bg-card hover:bg-accent"
          >
            <Paperclip className="w-4 h-4 mr-2" />
            Attach File
          </Button>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="text-center max-w-2xl">
        <p className="text-sm text-muted-foreground">
          Atlas AI can make mistakes. Consider checking important information.
        </p>
      </div>
    </div>
  );
}