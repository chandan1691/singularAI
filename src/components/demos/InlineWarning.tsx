import { AlertTriangle, Info, ChevronDown } from "lucide-react";
import { useState } from "react";

export function InlineWarning() {
  const [expandedSubtle, setExpandedSubtle] = useState(false);
  const [expandedHighlighted, setExpandedHighlighted] = useState(false);
  const [expandedExample3, setExpandedExample3] = useState(false);

  return (
    <div className="space-y-8">
      {/* Component Preview */}
      <div>
        <h4 className="text-foreground mb-4">Component Preview</h4>
        <div className="bg-muted rounded-lg border border-border p-12">
          {/* Subtle Warning */}
          <div className="mb-8">
            <p className="text-muted-foreground mb-4">Subtle Warning</p>
            <div className="space-y-4">
              {/* Idle State */}
              <div className="bg-card p-4 rounded-lg border border-border">
                <p className="text-muted-foreground mb-2 text-xs">Idle State</p>
                <div className="inline-flex items-center gap-2 text-amber-800 group cursor-pointer animate-in fade-in slide-in-from-left-2 duration-500">
                  <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                  <span className="text-xs">The content above may not fully comply with safety guidelines.</span>
                </div>
              </div>

              {/* Hover State */}
              <div className="bg-card p-4 rounded-lg border border-border">
                <p className="text-muted-foreground mb-2 text-xs">Hover State</p>
                <div className="inline-flex items-center gap-2 text-amber-800 group cursor-pointer opacity-80 animate-in fade-in slide-in-from-left-2 duration-500">
                  <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                  <span className="text-xs underline decoration-dotted underline-offset-2">The content above may not fully comply with safety guidelines.</span>
                </div>
              </div>

              {/* Expandable Version */}
              <div className="bg-card p-4 rounded-lg border border-border">
                <p className="text-muted-foreground mb-2 text-xs">Expandable Version</p>
                <div className="space-y-2">
                  <div 
                    className="inline-flex items-center gap-2 text-amber-800 cursor-pointer hover:opacity-80 transition-opacity animate-in fade-in slide-in-from-left-2 duration-500"
                    onClick={() => setExpandedSubtle(!expandedSubtle)}
                  >
                    <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                    <span className="text-xs">The content above may not fully comply with safety guidelines.</span>
                    <button className="text-xs underline ml-1">Learn more</button>
                    <ChevronDown className={`w-3 h-3 transition-transform ${expandedSubtle ? 'rotate-180' : ''}`} />
                  </div>
                  {expandedSubtle && (
                    <div className="ml-6 p-3 bg-chart-3/10 border border-chart-3/30 rounded-md text-xs text-amber-800 animate-in fade-in slide-in-from-left-2 duration-200">
                      <p className="mb-2">This content was flagged for the following reasons:</p>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Potentially sensitive language detected</li>
                        <li>Content may require additional context</li>
                      </ul>
                      <p className="mt-2 text-amber-800">Please review and consider revising before sharing.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Highlighted Warning */}
          <div>
            <p className="text-muted-foreground mb-4">Highlighted Warning</p>
            <div className="space-y-4">
              {/* Idle State */}
              <div className="bg-card p-4 rounded-lg border border-border">
                <p className="text-muted-foreground mb-2 text-xs">Idle State</p>
                <div className="flex items-center gap-3 px-4 py-3 bg-chart-3/10 rounded-full animate-in fade-in slide-in-from-left-2 duration-500">
                  <AlertTriangle className="w-5 h-5 text-amber-800 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-xs text-amber-800">This message contains content that may violate community guidelines.</p>
                  </div>
                </div>
              </div>

              {/* Hover State */}
              <div className="bg-card p-4 rounded-lg border border-border">
                <p className="text-muted-foreground mb-2 text-xs">Hover State</p>
                <div className="flex items-center gap-3 px-4 py-3 bg-chart-3/10 rounded-full cursor-pointer transition-all hover:bg-amber-100 hover:shadow-warning-hover animate-in fade-in slide-in-from-left-2 duration-500">
                  <AlertTriangle className="w-5 h-5 text-amber-800 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-xs text-amber-800">This message contains content that may violate community guidelines.</p>
                  </div>
                </div>
              </div>

              {/* Pressed State */}
              <div className="bg-card p-4 rounded-lg border border-border">
                <p className="text-muted-foreground mb-2 text-xs">Pressed State</p>
                <div className="flex items-center gap-3 px-4 py-3 bg-amber-100/90 rounded-full animate-in fade-in slide-in-from-left-2 duration-500">
                  <AlertTriangle className="w-5 h-5 text-amber-800 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-xs text-amber-800">This message contains content that may violate community guidelines.</p>
                  </div>
                </div>
              </div>

              {/* Expandable Version */}
              <div className="bg-card p-4 rounded-lg border border-border">
                <p className="text-muted-foreground mb-2 text-xs">Expandable Version</p>
                <div className="space-y-2">
                  <div 
                    className="flex items-center gap-3 px-4 py-3 pr-5 bg-chart-3/10 rounded-full cursor-pointer hover:bg-amber-100 hover:shadow-warning-hover transition-all animate-in fade-in slide-in-from-left-2 duration-500"
                    onClick={() => setExpandedHighlighted(!expandedHighlighted)}
                  >
                    <AlertTriangle className="w-5 h-5 text-amber-800 flex-shrink-0" />
                    <div className="flex-1">
                      <p className="text-xs text-amber-800">This message contains content that may violate community guidelines.</p>
                      <button className="text-xs text-amber-800 underline mt-1">Learn more</button>
                    </div>
                    <ChevronDown className={`w-4 h-4 text-amber-800 transition-transform ${expandedHighlighted ? 'rotate-180' : ''}`} />
                  </div>
                  {expandedHighlighted && (
                    <div className="px-4 py-3 bg-chart-3/10/50 rounded-2xl text-xs text-amber-800 animate-in fade-in slide-in-from-left-2 duration-200">
                      <h6 style={{ fontSize: '12px', fontWeight: '500', marginBottom: '8px', fontFamily: 'Urbanist, sans-serif' }}>Why was this flagged?</h6>
                      <ul className="list-disc list-inside space-y-1 mb-3 text-xs">
                        <li>Contains language that may be offensive</li>
                        <li>Potential misinformation detected</li>
                        <li>Violates content policy guidelines</li>
                      </ul>
                      <p className="text-amber-800 text-xs">We recommend reviewing and editing this content before posting.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-border pt-8">
        <h4 className="text-foreground mb-6">Usage Examples</h4>
      </div>

      {/* Example 1: Chat Message with Subtle Warning */}
      <div className="bg-card rounded-lg border border-border p-6">
        <div className="mb-3">
          <h4 className="text-foreground">Example 1: Chat Message with Subtle Warning</h4>
        </div>
        <div className="space-y-3">
          <div className="bg-muted rounded-lg p-4">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white">
                AI
              </div>
              <div className="flex-1">
                <p className="text-foreground mb-1">AI Assistant</p>
                <p className="text-gray-700 text-sm">Here's a response that might contain sensitive information about privacy concerns.</p>
              </div>
            </div>
            <div className="ml-11 inline-flex items-center gap-2 text-amber-800 text-xs cursor-pointer hover:opacity-80 transition-opacity animate-in fade-in slide-in-from-left-2 duration-500">
              <AlertTriangle className="w-4 h-4 flex-shrink-0" />
              <span>This response may contain sensitive information.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Example 2: Comment Stream with Highlighted Warning */}
      <div className="bg-card rounded-lg border border-border p-6">
        <div className="mb-3">
          <h4 className="text-foreground">Example 2: Comment Stream with Highlighted Warning</h4>
        </div>
        <div className="space-y-3">
          <div className="p-4 bg-muted rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 bg-purple-500 rounded-full"></div>
              <span className="text-foreground">User Comment</span>
              <span className="text-xs text-muted-foreground">2 mins ago</span>
            </div>
            <p className="text-gray-700 mb-3">I really disagree with this policy and think it's completely wrong...</p>
            <div className="inline-flex items-center gap-3 px-4 py-3 bg-rose-50 rounded-full animate-in fade-in slide-in-from-left-2 duration-500">
              <AlertTriangle className="w-5 h-5 text-rose-600 flex-shrink-0" />
              <div className="flex-1">
                <p className="text-xs text-rose-900">This comment may not align with community guidelines. Consider revising before posting.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Example 3: Content Editor with Inline Feedback */}
      <div className="bg-card rounded-lg border border-border p-6">
        <div className="mb-3">
          <h4 className="text-foreground">Example 3: Content Editor with Inline Feedback</h4>
        </div>
        <div className="bg-muted rounded-lg p-4 border border-gray-300">
          <div className="mb-3">
            <label className="text-foreground mb-2 block">Your Response</label>
            <textarea 
              className="w-full p-3 border border-gray-300 rounded-md bg-card text-foreground min-h-[100px]"
              placeholder="Write your response..."
              defaultValue="This content discusses topics that may require additional review..."
            />
          </div>
          <div className="space-y-2">
            <div 
              className="inline-flex items-center gap-2 text-amber-800 text-xs cursor-pointer hover:opacity-80 transition-opacity animate-in fade-in slide-in-from-left-2 duration-300"
              onClick={() => setExpandedExample3(!expandedExample3)}
            >
              <AlertTriangle className="w-4 h-4 flex-shrink-0" />
              <span>The content may need review before publishing.</span>
              <button className="text-xs underline ml-1">Learn more</button>
              <ChevronDown className={`w-3 h-3 transition-transform ${expandedExample3 ? 'rotate-180' : ''}`} />
            </div>
            {expandedExample3 && (
              <div className="p-3 bg-chart-3/10/50 rounded-lg text-xs text-amber-800 animate-in fade-in slide-in-from-left-2 duration-200">
                <p className="mb-2">This content was flagged for the following reasons:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Potentially sensitive language detected</li>
                  <li>Content may require additional context</li>
                </ul>
                <p className="mt-2 text-amber-800">Please review and consider revising before sharing.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Example 4: Multiple Warnings in Feed */}
      <div className="bg-card rounded-lg border border-border p-6">
        <div className="mb-3">
          <h4 className="text-foreground">Example 4: Multiple Warnings in Feed</h4>
        </div>
        <div className="space-y-3">
          <div className="p-4 bg-card border border-border rounded-lg">
            <p className="text-foreground mb-2">Post title about controversial topic</p>
            <p className="text-gray-700 text-sm mb-3">Content preview that discusses sensitive subject matter...</p>
            <div className="inline-flex items-center gap-2 text-amber-800 text-xs cursor-pointer hover:opacity-80 transition-opacity animate-in fade-in slide-in-from-left-2 duration-500">
              <AlertTriangle className="w-4 h-4 flex-shrink-0" />
              <span>Sensitive topic detected</span>
            </div>
          </div>
          <div className="p-4 bg-card border border-border rounded-lg">
            <p className="text-foreground mb-2">Another post with flagged content</p>
            <p className="text-gray-700 text-sm mb-3">This post contains information that may require verification...</p>
            <div className="inline-flex items-center gap-3 px-4 py-3 bg-rose-50 rounded-full cursor-pointer hover:bg-rose-100 hover:shadow-warning-hover transition-all animate-in fade-in slide-in-from-left-2 duration-500">
              <AlertTriangle className="w-5 h-5 text-rose-600 flex-shrink-0" />
              <div className="flex-1">
                <p className="text-xs text-rose-900">This post may contain unverified information.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}