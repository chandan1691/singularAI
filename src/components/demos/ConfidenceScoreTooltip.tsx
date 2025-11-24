import { Info, AlertCircle, CheckCircle2, TrendingUp } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";

export function ConfidenceScoreTooltip() {
  return (
    <div className="space-y-8">
      {/* Component Preview */}
      <div>
        <h4 className="text-foreground mb-4">Component Preview</h4>
        <div className="bg-muted rounded-lg border border-border p-12">
          {/* Large Size */}
          <div className="mb-8">
            <p className="text-muted-foreground mb-3">Large</p>
            <div className="flex items-center gap-4 flex-wrap">
              {/* High Confidence */}
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button 
                      className="group inline-flex items-center gap-2 px-3 py-3 rounded-full text-green-900 border border-green-400/50 hover:opacity-90 transition-all bg-positive-green"
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      <span>High Confidence</span>
                      <Info className="w-4 h-4 opacity-60" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent className="text-white border-green-400/60 p-3 max-w-xs [&_svg]:fill-green-500" style={{ background: 'linear-gradient(93.54deg, #4FDD39 0.05%, #8BE07E 99.99%)' }}>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 mb-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-green-900" />
                        <h6 style={{ color: 'white', fontSize: '18px', fontWeight: '500', lineHeight: '1.4', fontFamily: 'Urbanist, sans-serif' }}>94% Confidence Score</h6>
                      </div>
                      <p className="text-green-900">
                        This result is highly reliable based on strong matching criteria and historical accuracy.
                      </p>
                    </div>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              {/* Medium Confidence */}
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button 
                      className="group inline-flex items-center gap-2 px-3 py-3 rounded-full text-orange-900 border border-orange-400/50 hover:opacity-90 transition-all"
                      style={{ background: 'linear-gradient(93.54deg, #FF7935 0.05%, #F5A57C 99.99%)' }}
                    >
                      <TrendingUp className="w-4 h-4" />
                      <span>Medium Confidence</span>
                      <Info className="w-4 h-4 opacity-60" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent className="text-white border-orange-400/60 p-3 max-w-xs [&_svg]:fill-orange-500" style={{ background: 'linear-gradient(93.54deg, #FF7935 0.05%, #F5A57C 99.99%)' }}>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 mb-1">
                        <TrendingUp className="w-3.5 h-3.5 text-orange-900" />
                        <h6 style={{ color: 'white', fontSize: '18px', fontWeight: '500', lineHeight: '1.4', fontFamily: 'Urbanist, sans-serif' }}>68% Confidence Score</h6>
                      </div>
                      <p className="text-orange-900">
                        This result is fairly reliable. Consider reviewing for accuracy in critical applications.
                      </p>
                    </div>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              {/* Low Confidence */}
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button 
                      className="group inline-flex items-center gap-2 px-3 py-3 rounded-full text-pink-900 border border-pink-400/50 hover:opacity-90 transition-all"
                      style={{ background: 'linear-gradient(93.54deg, #FF3879 0.05%, #F57EA5 99.99%)' }}
                    >
                      <AlertCircle className="w-4 h-4" />
                      <span>Low Confidence</span>
                      <Info className="w-4 h-4 opacity-60" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent className="text-white border-pink-400/60 p-3 max-w-xs [&_svg]:fill-pink-500" style={{ background: 'linear-gradient(93.54deg, #FF3879 0.05%, #F57EA5 99.99%)' }}>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 mb-1">
                        <AlertCircle className="w-3.5 h-3.5 text-foreground" />
                        <h6 style={{ color: 'white', fontSize: '18px', fontWeight: '500', lineHeight: '1.4', fontFamily: 'Urbanist, sans-serif' }}>42% Confidence Score</h6>
                      </div>
                      <p className="text-foreground">
                        This result has lower reliability. Manual verification is recommended.
                      </p>
                    </div>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>

          {/* Medium Size */}
          <div className="mb-8">
            <p className="text-muted-foreground mb-3">Medium</p>
            <div className="flex items-center gap-3 flex-wrap">
              {/* High Confidence */}
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button 
                      className="group inline-flex items-center gap-1.5 px-2 py-2 rounded-full text-green-900 border border-green-400/50 hover:opacity-90 transition-all bg-positive-green"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>94%</span>
                      <Info className="w-3.5 h-3.5 opacity-60" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent className="text-white border-green-400/60 p-2.5 max-w-xs [&_svg]:fill-green-500" style={{ background: 'linear-gradient(93.54deg, #4FDD39 0.05%, #8BE07E 99.99%)' }}>
                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3 h-3 text-green-900" />
                        <h6 className="text-white text-xs">High Confidence (94%)</h6>
                      </div>
                      <p className="text-green-900">
                        Strong matching criteria
                      </p>
                    </div>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              {/* Medium Confidence */}
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button 
                      className="group inline-flex items-center gap-1.5 px-2 py-2 rounded-full text-orange-900 border border-orange-400/50 hover:opacity-90 transition-all"
                      style={{ background: 'linear-gradient(93.54deg, #FF7935 0.05%, #F5A57C 99.99%)' }}
                    >
                      <TrendingUp className="w-3.5 h-3.5" />
                      <span>68%</span>
                      <Info className="w-3.5 h-3.5 opacity-60" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent className="text-white border-orange-400/60 p-2.5 max-w-xs [&_svg]:fill-orange-500" style={{ background: 'linear-gradient(93.54deg, #FF7935 0.05%, #F5A57C 99.99%)' }}>
                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5">
                        <TrendingUp className="w-3 h-3 text-orange-900" />
                        <h6 className="text-white text-xs">Medium Confidence (68%)</h6>
                      </div>
                      <p className="text-orange-900">
                        Review recommended
                      </p>
                    </div>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              {/* Low Confidence */}
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button 
                      className="group inline-flex items-center gap-1.5 px-2 py-2 rounded-full text-pink-900 border border-pink-400/50 hover:opacity-90 transition-all"
                      style={{ background: 'linear-gradient(93.54deg, #FF3879 0.05%, #F57EA5 99.99%)' }}
                    >
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>42%</span>
                      <Info className="w-3.5 h-3.5 opacity-60" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent className="text-white border-pink-400/60 p-2.5 max-w-xs [&_svg]:fill-pink-500" style={{ background: 'linear-gradient(93.54deg, #FF3879 0.05%, #F57EA5 99.99%)' }}>
                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5">
                        <AlertCircle className="w-3 h-3 text-foreground" />
                        <h6 className="text-white text-xs">Low Confidence (42%)</h6>
                      </div>
                      <p className="text-foreground">
                        Verification needed
                      </p>
                    </div>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>

          {/* Small Size */}
          <div>
            <p className="text-muted-foreground mb-3">Small</p>
            <div className="flex items-center gap-2 flex-wrap">
              {/* High Confidence */}
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button 
                      className="inline-flex items-center gap-1 px-1 py-1 rounded-full text-green-900 border border-green-400/50 hover:opacity-90 transition-all bg-positive-green"
                    >
                      <CheckCircle2 className="w-3 h-3" />
                      <span className="text-xs">94%</span>
                      <Info className="w-3 h-3 opacity-60" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent className="text-white border-green-400/60 p-2 max-w-[200px] [&_svg]:fill-green-500" style={{ background: 'linear-gradient(93.54deg, #4FDD39 0.05%, #8BE07E 99.99%)' }}>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-2.5 h-2.5 text-green-900" />
                      <span className="text-xs">High (94%)</span>
                    </div>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              {/* Medium Confidence */}
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button 
                      className="inline-flex items-center gap-1 px-1 py-1 rounded-full text-orange-900 border border-orange-400/50 hover:opacity-90 transition-all"
                      style={{ background: 'linear-gradient(93.54deg, #FF7935 0.05%, #F5A57C 99.99%)' }}
                    >
                      <TrendingUp className="w-3 h-3" />
                      <span className="text-xs">68%</span>
                      <Info className="w-3 h-3 opacity-60" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent className="text-white border-orange-400/60 p-2 max-w-[200px] [&_svg]:fill-orange-500" style={{ background: 'linear-gradient(93.54deg, #FF7935 0.05%, #F5A57C 99.99%)' }}>
                    <div className="flex items-center gap-1.5">
                      <TrendingUp className="w-2.5 h-2.5 text-orange-900" />
                      <span className="text-xs">Medium (68%)</span>
                    </div>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              {/* Low Confidence */}
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button 
                      className="inline-flex items-center gap-1 px-1 py-1 rounded-full text-pink-900 border border-pink-400/50 hover:opacity-90 transition-all"
                      style={{ background: 'linear-gradient(93.54deg, #FF3879 0.05%, #F57EA5 99.99%)' }}
                    >
                      <AlertCircle className="w-3 h-3" />
                      <span className="text-xs">42%</span>
                      <Info className="w-3 h-3 opacity-60" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent className="text-white border-pink-400/60 p-2 max-w-[200px] [&_svg]:fill-pink-500" style={{ background: 'linear-gradient(93.54deg, #FF3879 0.05%, #F57EA5 99.99%)' }}>
                    <div className="flex items-center gap-1.5">
                      <AlertCircle className="w-2.5 h-2.5 text-foreground" />
                      <span className="text-xs">Low (42%)</span>
                    </div>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-border pt-8">
        <h4 className="text-foreground mb-6">Usage Examples</h4>
      </div>

      {/* Example 1: Translation Quality Score - Large */}
      <div className="bg-card rounded-lg border border-border p-6 space-y-4">
        <div className="mb-3">
          <h4 className="text-foreground">Example 1: Translation Quality Score (Large)</h4>
        </div>
        <div className="space-y-3">
          <div className="p-4 bg-muted rounded-lg">
            <div className="flex items-center justify-between mb-3">
              <span className="text-foreground">English to Spanish</span>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button 
                      className="group inline-flex items-center gap-2 px-3 py-3 rounded-full text-green-900 border border-green-400/50 hover:opacity-90 transition-all bg-positive-green"
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Translation Score</span>
                      <Info className="w-4 h-4 opacity-60" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent className="text-white border-green-400/60 p-3 max-w-xs [&_svg]:fill-green-500" style={{ background: 'linear-gradient(93.54deg, #4FDD39 0.05%, #8BE07E 99.99%)' }}>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 mb-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-green-900" />
                        <h6 style={{ color: 'white', fontSize: '18px', fontWeight: '500', lineHeight: '1.4', fontFamily: 'Urbanist, sans-serif' }}>97% Translation Quality</h6>
                      </div>
                      <p className="text-green-900">
                        High accuracy translation with proper context and grammar. Verified by native speakers.
                      </p>
                    </div>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <p className="text-muted-foreground">Original: "Welcome to our platform"</p>
            <p className="text-foreground">Translated: "Bienvenido a nuestra plataforma"</p>
          </div>
        </div>
        <div className="text-xs text-muted-foreground bg-muted p-3 rounded-md">
          <strong>Note:</strong> Hover over the translation score button to see detailed quality metrics.
        </div>
      </div>

      {/* Example 2: Search Results with Relevance Tooltips - Medium */}
      <div className="bg-card rounded-lg border border-border p-6">
        <div className="mb-3">
          <h4 className="text-foreground">Example 2: Search Results Relevance (Medium)</h4>
        </div>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
            <div className="flex-1">
              <span className="text-foreground">AI Pattern Design System Guide</span>
              <p className="text-xs text-muted-foreground mt-1">Comprehensive guide for AI UI patterns</p>
            </div>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button 
                    className="group inline-flex items-center gap-1.5 px-2 py-2 rounded-full text-foreground border border-primary/50 hover:opacity-90 transition-all"
                    className="bg-primary"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>96%</span>
                    <Info className="w-3.5 h-3.5 opacity-60" />
                  </button>
                </TooltipTrigger>
                <TooltipContent className="bg-primary text-white border-primary/60 p-2.5 max-w-xs [&_svg]:fill-primary">
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3 h-3 text-primary-foreground" />
                      <span className="font-medium">High Relevance (96%)</span>
                    </div>
                    <p className="text-primary-foreground">
                      Strong keyword match and high user engagement
                    </p>
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>

          <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
            <div className="flex-1">
              <span className="text-foreground">Component Library Overview</span>
              <p className="text-xs text-muted-foreground mt-1">Introduction to component architecture</p>
            </div>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button 
                    className="group inline-flex items-center gap-1.5 px-2 py-2 rounded-full text-accent-foreground border border-accent/50 hover:opacity-90 transition-all"
                    className="bg-accent"
                  >
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>72%</span>
                    <Info className="w-3.5 h-3.5 opacity-60" />
                  </button>
                </TooltipTrigger>
                <TooltipContent className="bg-accent text-white border-accent/60 p-2.5 max-w-xs [&_svg]:fill-accent">
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5">
                      <TrendingUp className="w-3 h-3 text-accent-foreground" />
                      <span className="font-medium">Medium Relevance (72%)</span>
                    </div>
                    <p className="text-accent-foreground">
                      Partial keyword match, related content
                    </p>
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>

          <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
            <div className="flex-1">
              <span className="text-foreground">UI Design Basics</span>
              <p className="text-xs text-muted-foreground mt-1">Fundamental principles of interface design</p>
            </div>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button 
                    className="group inline-flex items-center gap-1.5 px-2 py-2 rounded-full text-foreground border border-chart-3/50 hover:opacity-90 transition-all"
                    className="bg-chart-3"
                  >
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>45%</span>
                    <Info className="w-3.5 h-3.5 opacity-60" />
                  </button>
                </TooltipTrigger>
                <TooltipContent className="bg-chart-3 text-white border-chart-3/60 p-2.5 max-w-xs [&_svg]:fill-chart-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5">
                      <AlertCircle className="w-3 h-3 text-foreground" />
                      <span className="font-medium">Low Relevance (45%)</span>
                    </div>
                    <p className="text-foreground">
                      Limited match to search query
                    </p>
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </div>

      {/* Example 3: Data Classification Table - Small */}
      <div className="bg-card rounded-lg border border-border p-6">
        <div className="mb-3">
          <h4 className="text-foreground">Example 3: Classification Confidence Table (Small)</h4>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left py-2 text-foreground">Document Name</th>
                <th className="text-left py-2 text-foreground">Category</th>
                <th className="text-center py-2 text-foreground">Confidence</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100">
                <td className="py-3 text-foreground">Product_Spec_2024.pdf</td>
                <td className="py-3 text-muted-foreground">Technical Documentation</td>
                <td className="py-3 text-center">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <button 
                          className="inline-flex items-center gap-1 px-1 py-1 rounded-full text-foreground border border-primary/50 hover:opacity-90 transition-all"
                          className="bg-primary"
                        >
                          <CheckCircle2 className="w-3 h-3" />
                          <span className="text-xs">94%</span>
                          <Info className="w-3 h-3 opacity-60" />
                        </button>
                      </TooltipTrigger>
                      <TooltipContent className="text-white border-green-400/60 p-2 max-w-[200px] [&_svg]:fill-green-500" style={{ background: 'linear-gradient(93.54deg, #4FDD39 0.05%, #8BE07E 99.99%)' }}>
                        <div className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-2.5 h-2.5 text-green-900" />
                          <span className="text-xs">High (94%)</span>
                        </div>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 text-foreground">Meeting_Notes_Q1.docx</td>
                <td className="py-3 text-muted-foreground">Meeting Minutes</td>
                <td className="py-3 text-center">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <button 
                          className="inline-flex items-center gap-1 px-1 py-1 rounded-full text-accent-foreground border border-accent/50 hover:opacity-90 transition-all"
                          className="bg-accent"
                        >
                          <TrendingUp className="w-3 h-3" />
                          <span className="text-xs">71%</span>
                          <Info className="w-3 h-3 opacity-60" />
                        </button>
                      </TooltipTrigger>
                      <TooltipContent className="text-white border-orange-400/60 p-2 max-w-[200px] [&_svg]:fill-orange-500" style={{ background: 'linear-gradient(93.54deg, #FF7935 0.05%, #F5A57C 99.99%)' }}>
                        <div className="flex items-center gap-1.5">
                          <TrendingUp className="w-2.5 h-2.5 text-orange-900" />
                          <span className="text-xs">Medium (71%)</span>
                        </div>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 text-foreground">Misc_Notes.txt</td>
                <td className="py-3 text-muted-foreground">Uncategorized</td>
                <td className="py-3 text-center">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <button 
                          className="inline-flex items-center gap-1 px-1 py-1 rounded-full text-foreground border border-chart-3/50 hover:opacity-90 transition-all"
                          className="bg-chart-3"
                        >
                          <AlertCircle className="w-3 h-3" />
                          <span className="text-xs">38%</span>
                          <Info className="w-3 h-3 opacity-60" />
                        </button>
                      </TooltipTrigger>
                      <TooltipContent className="text-white border-pink-400/60 p-2 max-w-[200px] [&_svg]:fill-pink-500" style={{ background: 'linear-gradient(93.54deg, #FF3879 0.05%, #F57EA5 99.99%)' }}>
                        <div className="flex items-center gap-1.5">
                          <AlertCircle className="w-2.5 h-2.5 text-foreground" />
                          <span className="text-xs">Low (38%)</span>
                        </div>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Example 4: AI-Powered Sentiment Analysis - Mixed */}
      <div className="bg-card rounded-lg border border-border p-6">
        <div className="mb-3">
          <h4 className="text-foreground">Example 4: Sentiment Analysis Dashboard (Mixed Sizes)</h4>
        </div>
        <div className="space-y-4">
          <div className="p-4 bg-muted rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-foreground">"This product exceeded my expectations!"</span>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button 
                      className="inline-flex items-center gap-2 px-3 py-3 rounded-full text-foreground border border-primary/50 hover:opacity-90 transition-all"
                      className="bg-primary"
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Positive</span>
                      <Info className="w-4 h-4 opacity-60" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent className="text-white border-green-400/60 p-3 max-w-xs [&_svg]:fill-green-500" style={{ background: 'linear-gradient(93.54deg, #4FDD39 0.05%, #8BE07E 99.99%)' }}>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 mb-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-green-900" />
                        <h6 style={{ color: 'white', fontSize: '18px', fontWeight: '500', lineHeight: '1.4', fontFamily: 'Urbanist, sans-serif' }}>92% Positive Sentiment</h6>
                      </div>
                      <p className="text-green-900">
                        Strong positive indicators detected: "exceeded", "expectations". No negative qualifiers found.
                      </p>
                    </div>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>

          <div className="p-4 bg-muted rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-foreground">"The product is okay, nothing special."</span>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button 
                      className="inline-flex items-center gap-1.5 px-2 py-2 rounded-full text-accent-foreground border border-accent/50 hover:opacity-90 transition-all"
                      className="bg-accent"
                    >
                      <TrendingUp className="w-3.5 h-3.5" />
                      <span>Neutral</span>
                      <Info className="w-3.5 h-3.5 opacity-60" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent className="text-white border-orange-400/60 p-2.5 max-w-xs [&_svg]:fill-orange-500" style={{ background: 'linear-gradient(93.54deg, #FF7935 0.05%, #F5A57C 99.99%)' }}>
                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5">
                        <TrendingUp className="w-3 h-3 text-orange-900" />
                        <span className="font-medium">65% Neutral Sentiment</span>
                      </div>
                      <p className="text-orange-900">
                        Mixed indicators with neutral language
                      </p>
                    </div>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>

          <div className="p-4 bg-muted rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-foreground">"Disappointed with the quality."</span>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button 
                      className="inline-flex items-center gap-1.5 px-2 py-2 rounded-full text-foreground border border-chart-3/50 hover:opacity-90 transition-all"
                      className="bg-chart-3"
                    >
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>Negative</span>
                      <Info className="w-3.5 h-3.5 opacity-60" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent className="text-white border-pink-400/60 p-2.5 max-w-xs [&_svg]:fill-pink-500" style={{ background: 'linear-gradient(93.54deg, #FF3879 0.05%, #F57EA5 99.99%)' }}>
                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5">
                        <AlertCircle className="w-3 h-3 text-foreground" />
                        <span className="font-medium">88% Negative Sentiment</span>
                      </div>
                      <p className="text-foreground">
                        Clear negative sentiment detected
                      </p>
                    </div>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}