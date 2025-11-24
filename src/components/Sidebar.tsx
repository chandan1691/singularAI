import React, { useState } from "react";
import { ScrollArea } from "./ui/scroll-area";
import { Input } from "./ui/input";
import { Switch } from "./ui/switch";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { 
  Search,
  Menu,
  Image,
  Mic,
  ClipboardList,
  Shield,
  Info,
  FileText,
  Loader2,
  MessageCircle,
  Brain,
  Sparkles,
  FileOutput,
  AlertCircle,
  RefreshCw,
  Lightbulb,
  User,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Moon,
  Sun,
  Clock
} from "lucide-react";
import type { Category, ComponentVariant } from "../App";

interface SidebarProps {
  categories: Category[];
  selectedVariant: ComponentVariant;
  onSelectVariant: (variant: ComponentVariant) => void;
}

const categoryIcons: Record<string, React.ReactNode> = {
  'AI search': <Search className="w-4 h-4" />,
  'AI visual output': <Image className="w-4 h-4" />,
  'Voice + audio AI': <Mic className="w-4 h-4" />,
  'Task delegation to AI': <ClipboardList className="w-4 h-4" />,
  'AI content moderation & safety': <Shield className="w-4 h-4" />,
  'AI status indicator': <Info className="w-4 h-4" />,
  'Automatic text simplification': <FileText className="w-4 h-4" />,
  'AI processing feedback': <Loader2 className="w-4 h-4" />,
  'Conversational interaction': <MessageCircle className="w-4 h-4" />,
  'AI confidence / uncertainty': <Brain className="w-4 h-4" />,
  'Inline AI assist': <Sparkles className="w-4 h-4" />,
  'AI generation results': <FileOutput className="w-4 h-4" />,
  'AI error handling': <AlertCircle className="w-4 h-4" />,
  'Multi-turn refinement': <RefreshCw className="w-4 h-4" />,
  'AI explainability': <Lightbulb className="w-4 h-4" />,
  'AI personalization': <User className="w-4 h-4" />,
};

export function Sidebar({ categories, selectedVariant, onSelectVariant }: SidebarProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [recentSearches] = useState<string[]>(['AI chat bubbles', 'Loading states', 'Error handling']);
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set()
  );
  const searchInputRef = React.useRef<HTMLInputElement>(null);
  
  const toggleCategory = (categoryName: string) => {
    setExpandedCategories(prev => {
      const next = new Set(prev);
      if (next.has(categoryName)) {
        next.delete(categoryName);
      } else {
        next.add(categoryName);
      }
      return next;
    });
  };
  
  const filteredCategories = categories.map(category => ({
    ...category,
    components: category.components.map(component => ({
      ...component,
      variants: component.variants.filter(variant =>
        variant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        variant.useCase.toLowerCase().includes(searchQuery.toLowerCase()) ||
        component.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    })).filter(component => component.variants.length > 0)
  })).filter(category => category.components.length > 0);
  
  return (
    <div className={`flex flex-col h-screen p-4 pr-0 transition-all duration-300 ${
      isCollapsed ? 'w-20' : 'w-80'
    }`}>
      <div className={`backdrop-blur-xl border shadow-xl rounded-3xl flex-1 flex flex-col overflow-hidden relative transition-colors ${
        isDarkMode 
                    ? 'bg-gray-900/90 border-gray-700/60 text-white' 
          : 'bg-card/40 border-white/60 text-foreground'
      }`}>
        {!isCollapsed && (
          <>
            <div className="p-6 pb-4 shrink-0">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className={`p-2 rounded-lg transition-colors ${
                      isDarkMode 
                        ? 'bg-gray-800 hover:bg-gray-700' 
                        : 'bg-gray-900 hover:bg-gray-800'
                    }`}
                    title="Toggle menu"
                  >
                    <Menu className={`w-4 h-4 ${isDarkMode ? 'text-white' : 'text-white'}`} />
                  </button>
                  <div>
                    <h2 className={isDarkMode ? 'text-white' : 'text-foreground'}>Ada AI</h2>
                    <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-muted-foreground'}`}>V1.0</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsDarkMode(!isDarkMode)}
                    className={`relative flex items-center gap-0.5 p-0.5 rounded-full transition-all ${
                      isDarkMode 
                        ? 'bg-gray-200' 
                        : 'bg-gray-200'
                    }`}
                    style={{ width: '52px' }}
                  >
                    <div 
                      className={`absolute top-0.5 left-0.5 w-6 h-6 bg-card rounded-full shadow-sm transition-transform duration-300 ease-in-out ${
                        isDarkMode ? 'translate-x-[24px]' : 'translate-x-0'
                      }`}
                    />
                    <div className="relative z-10 flex items-center justify-center w-6 h-6">
                      <Sun className={`w-3.5 h-3.5 transition-colors ${
                        !isDarkMode ? 'text-gray-700' : 'text-gray-400'
                      }`} />
                    </div>
                    <div className="relative z-10 flex items-center justify-center w-6 h-6">
                      <Moon className={`w-3.5 h-3.5 transition-colors ${
                        isDarkMode ? 'text-gray-700' : 'text-gray-400'
                      }`} />
                    </div>
                  </button>
                </div>
              </div>
              
              <div className="relative">
                <Search className={`w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 ${isDarkMode ? 'text-muted-foreground' : 'text-gray-400'} pointer-events-none`} />
                <Input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search patterns..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                  onKeyDown={(e) => {
                    if ((e.metaKey || e.ctrlKey) && e.key === 'a') {
                      e.preventDefault();
                      e.currentTarget.select();
                    }
                  }}
                  className={`pl-9 backdrop-blur-sm rounded-full ${
                    isDarkMode 
                      ? 'bg-gray-800/60 border-gray-700/80 text-white placeholder:text-muted-foreground' 
                      : 'bg-card/60 border-white/80 text-foreground'
                  }`}
                />
                
                {/* Recent Searches */}
                {isSearchFocused && !searchQuery && (
                  <div className={`absolute top-full left-0 right-0 mt-2 p-3 rounded-2xl shadow-lg backdrop-blur-xl z-10 ${
                    isDarkMode ? 'bg-gray-800/95 border border-gray-700' : 'bg-card/95 border border-border'
                  }`}>
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="w-3 h-3 text-muted-foreground" />
                      <span className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-muted-foreground'}`}>Recent searches</span>
                    </div>
                    <div className="space-y-1">
                      {recentSearches.map((search, index) => (
                        <button
                          key={index}
                          onClick={() => setSearchQuery(search)}
                          className={`w-full text-left px-2 py-1.5 rounded-lg text-sm transition-colors ${
                            isDarkMode 
                              ? 'text-gray-300 hover:bg-gray-700' 
                              : 'text-gray-700 hover:bg-gray-100'
                          }`}
                        >
                          {search}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            <div className="flex-1 overflow-hidden px-4 rounded-[12px]">
              <ScrollArea className="h-full pr-3">
                <nav className="pb-4 pr-2">
                  {filteredCategories.length > 0 ? (
                    <div className="space-y-2">
                      {filteredCategories.map((category) => (
                        <div key={category.name}>
                          <button
                            onClick={() => toggleCategory(category.name)}
                            className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg transition-all text-left ${
                              isDarkMode 
                                ? 'text-gray-300 hover:bg-gray-800/50' 
                                : 'text-gray-700 hover:bg-card/50'
                            }`}
                          >
                            {categoryIcons[category.name] || <FileText className="w-4 h-4" />}
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <span className="flex-1 text-sm truncate overflow-hidden whitespace-nowrap text-[14px]">{category.name}</span>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>{category.name}</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                            {expandedCategories.has(category.name) ? (
                              <ChevronUp className="w-3 h-3" />
                            ) : (
                              <ChevronDown className="w-3 h-3" />
                            )}
                          </button>
                          
                          {expandedCategories.has(category.name) && (
                            <div className="mt-1 ml-6 space-y-1">
                              {category.components.map((component) => (
                                <div key={component.name}>
                                  {component.variants.map((variant) => (
                                    <button
                                      key={variant.name}
                                      onClick={() => onSelectVariant(variant)}
                                      className={`w-full text-left pl-3 pr-[28px] py-2 rounded-full transition-all flex items-start gap-2 text-sm ${
                                        selectedVariant.name === variant.name
                                          ? isDarkMode 
                                            ? 'bg-blue-600 text-white' 
                                            : 'bg-gray-900 text-white'
                                          : isDarkMode 
                                            ? 'text-gray-400 hover:bg-gray-800/50' 
                                            : 'text-muted-foreground hover:bg-card/50'
                                      }`}
                                    >
                                      <span className="flex-1">{variant.name}</span>
                                    </button>
                                  ))}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className={`text-center py-8 ${isDarkMode ? 'text-muted-foreground' : 'text-muted-foreground'}`}>
                      <p>No patterns found</p>
                    </div>
                  )}
                </nav>
              </ScrollArea>
            </div>
          </>
        )}
        
        {isCollapsed && (
          <div className="flex-1 flex flex-col items-center py-6 gap-2 overflow-y-auto">
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className={`p-2 rounded-lg transition-colors mb-4 ${
                isDarkMode 
                  ? 'bg-gray-800 hover:bg-gray-700' 
                  : 'bg-gray-900 hover:bg-gray-800'
              }`}
              title="Expand menu"
            >
              <Menu className={`w-4 h-4 ${isDarkMode ? 'text-white' : 'text-white'}`} />
            </button>
            {filteredCategories.slice(0, 10).map((category) => (
              <button
                key={category.name}
                className={`p-2 rounded-full transition-all ${
                  isDarkMode 
                            ? 'text-gray-300 hover:bg-gray-800/50' 
                                : 'text-gray-700 hover:bg-card/50'
                }`}
                title={category.name}
              >
                {categoryIcons[category.name] || <FileText className="w-4 h-4" />}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
