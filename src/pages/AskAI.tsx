import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Search, BarChart3, Paperclip, Send, Sparkles } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function AskAI() {
  const [message, setMessage] = useState("");
  const [selectedAction, setSelectedAction] = useState<string | null>(null);
  const { toast } = useToast();

  const handleSendMessage = () => {
    if (!message.trim()) return;
    
    toast({
      title: "Message sent!",
      description: `${selectedAction ? selectedAction + ': ' : ''}${message}`,
    });
    
    setMessage("");
    setSelectedAction(null);
  };

  const handleActionSelect = (action: string) => {
    setSelectedAction(selectedAction === action ? null : action);
    toast({
      title: `${action} ${selectedAction === action ? 'deselected' : 'selected'}`,
      description: selectedAction === action ? "Action cleared" : `Now using ${action} mode`,
    });
  };

  const handleFileAttach = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.multiple = true;
    input.onchange = (e) => {
      const files = (e.target as HTMLInputElement).files;
      if (files && files.length > 0) {
        toast({
          title: "Files selected",
          description: `${files.length} file(s) ready to attach`,
        });
      }
    };
    input.click();
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

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
      <div className="w-full max-w-3xl space-y-4">
        <div className="relative bg-card border border-border rounded-2xl p-4 shadow-sm">
          <Textarea
            placeholder="Ask anything or @mention a Space..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            className="min-h-[80px] border-0 bg-transparent resize-none text-base p-0 focus-visible:ring-0"
          />
          <Button
            onClick={handleSendMessage}
            disabled={!message.trim()}
            className="absolute bottom-4 right-4 h-10 w-10 rounded-full bg-primary hover:bg-primary/90 disabled:opacity-50"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-center gap-3">
          <Button
            onClick={() => handleActionSelect("Deep Research")}
            variant={selectedAction === "Deep Research" ? "default" : "outline"}
            className={`h-10 px-4 text-sm font-medium rounded-full ${
              selectedAction === "Deep Research" 
                ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                : "bg-card hover:bg-accent border-border"
            }`}
          >
            <Search className="w-4 h-4 mr-2" />
            Deep Research
          </Button>
          <Button
            onClick={() => handleActionSelect("Comparative Analysis")}
            variant={selectedAction === "Comparative Analysis" ? "default" : "outline"}
            className={`h-10 px-4 text-sm font-medium rounded-full ${
              selectedAction === "Comparative Analysis" 
                ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                : "bg-card hover:bg-accent border-border"
            }`}
          >
            <BarChart3 className="w-4 h-4 mr-2" />
            Comparative Analysis
          </Button>
          <Button
            onClick={handleFileAttach}
            variant="outline"
            className="h-10 px-4 text-sm font-medium rounded-full bg-card hover:bg-accent border-border"
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