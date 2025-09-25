import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, Check } from "lucide-react";
import { useState } from "react";

interface FilterOption {
  id: string;
  label: string;
  selected: boolean;
}

interface FilterCategory {
  title: string;
  options: FilterOption[];
}

interface FilterModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function FilterModal({ open, onOpenChange }: FilterModalProps) {
  const [filters, setFilters] = useState<FilterCategory[]>([
    {
      title: "Region",
      options: [
        { id: "north-america", label: "North America", selected: true },
        { id: "europe", label: "Europe", selected: true },
        { id: "asia-pacific", label: "Asia Pacific", selected: false },
        { id: "latin-america", label: "Latin America", selected: false },
      ]
    },
    {
      title: "Product",
      options: [
        { id: "accelerator", label: "Accelerator", selected: true },
        { id: "enterprise", label: "Enterprise", selected: false },
        { id: "starter", label: "Starter", selected: false },
        { id: "professional", label: "Professional", selected: false },
      ]
    },
    {
      title: "Status",
      options: [
        { id: "active", label: "Active", selected: true },
        { id: "inactive", label: "Inactive", selected: false },
        { id: "pending", label: "Pending", selected: true },
        { id: "completed", label: "Completed", selected: false },
      ]
    }
  ]);

  const toggleOption = (categoryIndex: number, optionIndex: number) => {
    const newFilters = [...filters];
    newFilters[categoryIndex].options[optionIndex].selected = 
      !newFilters[categoryIndex].options[optionIndex].selected;
    setFilters(newFilters);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-slate-900 text-white border-slate-700 max-w-md p-8">
        <DialogHeader className="flex flex-row items-center justify-between space-y-0 pb-6">
          <DialogTitle className="text-2xl font-semibold">Add Filters</DialogTitle>
          <Button
            onClick={() => onOpenChange(false)}
            variant="ghost"
            size="icon"
            className="text-white hover:bg-slate-800 h-6 w-6"
          >
            <X className="w-4 h-4" />
          </Button>
        </DialogHeader>

        <div className="space-y-8">
          {filters.map((category, categoryIndex) => (
            <div key={category.title}>
              <h3 className="text-lg font-medium text-white mb-4">{category.title}</h3>
              <div className="grid grid-cols-2 gap-3">
                {category.options.map((option, optionIndex) => (
                  <Button
                    key={option.id}
                    onClick={() => toggleOption(categoryIndex, optionIndex)}
                    variant="outline"
                    className={`
                      h-12 px-4 text-left justify-between rounded-lg border-2 transition-all
                      ${option.selected 
                        ? "border-blue-500 bg-blue-500/10 text-white" 
                        : "border-slate-600 bg-slate-800/50 text-slate-300 hover:border-slate-500"
                      }
                    `}
                  >
                    <span className="text-sm font-medium">{option.label}</span>
                    {option.selected && (
                      <Check className="w-4 h-4 text-blue-400 ml-2 flex-shrink-0" />
                    )}
                  </Button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}