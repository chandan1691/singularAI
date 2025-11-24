import { AlertCircle, RefreshCw, AlertTriangle } from "lucide-react";
import { useState } from "react";

export function FallbackMessageCard() {
  const [loadingSecondary, setLoadingSecondary] = useState(false);

  const handleRetry = () => {
    setLoadingSecondary(true);
    setTimeout(() => setLoadingSecondary(false), 2000);
  };

  return (
    <div className="space-y-8">
      {/* Component Preview */}
      <div>
        <h4 className="text-foreground mb-4">Component Preview</h4>
        <div className="bg-muted rounded-lg border border-border p-12">
          
          {/* Fallback Message Card */}
          <div>
            <p className="text-muted-foreground mb-6">Fallback Message Card</p>
            
            <div className="space-y-8">
              {/* Default Fallback Card */}
              <div>
                <p className="text-xs text-muted-foreground mb-4">FallbackCard/Default</p>
                <div className="space-y-4">
                  {/* Default */}
                  <div className="bg-card p-4 rounded-lg border border-border">
                    <p className="text-muted-foreground mb-3 text-xs">Default</p>
                    <div className="bg-card border border-border rounded-xl px-4 py-3 max-w-md animate-in fade-in slide-in-from-left-2 duration-500">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center bg-destructive/10 rounded-full">
                          <AlertTriangle className="w-5 h-5 text-destructive" />
                        </div>
                        <div className="flex-1 space-y-3">
                          <div>
                            <h5 className="text-foreground mb-1 text-base font-medium">AI couldn't generate a response.</h5>
                            <p className="text-xs text-muted-foreground">Refine your input or try again.</p>
                          </div>
                          <button 
                            className="inline-flex items-center gap-2 px-3 h-10 text-destructive-foreground rounded-full transition-all bg-destructive"
                            style={{
                              boxShadow: '0px 10px 10px rgba(0, 0, 0, 0.09), 0px 3px 6px rgba(0, 0, 0, 0.1)'
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.boxShadow = '0px 4px 6px rgba(0, 0, 0, 0.07), 0px 2px 4px rgba(0, 0, 0, 0.06)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.boxShadow = '0px 10px 10px rgba(0, 0, 0, 0.09), 0px 3px 6px rgba(0, 0, 0, 0.1)';
                            }}
                          >
                            <RefreshCw className="w-4 h-4" />
                            <span className="text-sm">Try Again</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Hover */}
                  <div className="bg-card p-4 rounded-lg border border-border">
                    <p className="text-muted-foreground mb-3 text-xs">Hover (4px elevation)</p>
                    <div className="bg-card border border-border rounded-xl px-4 py-3 max-w-md shadow-md transition-shadow animate-in fade-in slide-in-from-left-2 duration-500">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center bg-destructive/10 rounded-full">
                          <AlertTriangle className="w-5 h-5 text-destructive" />
                        </div>
                        <div className="flex-1 space-y-3">
                          <div>
                            <h5 className="text-foreground mb-1 text-base font-medium">AI couldn't generate a response.</h5>
                            <p className="text-xs text-muted-foreground">Refine your input or try again.</p>
                          </div>
                          <button 
                            className="inline-flex items-center gap-2 px-3 h-10 text-destructive-foreground rounded-full transition-all bg-destructive"
                            style={{
                              boxShadow: '0px 10px 10px rgba(0, 0, 0, 0.09), 0px 3px 6px rgba(0, 0, 0, 0.1)'
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.boxShadow = '0px 4px 6px rgba(0, 0, 0, 0.07), 0px 2px 4px rgba(0, 0, 0, 0.06)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.boxShadow = '0px 10px 10px rgba(0, 0, 0, 0.09), 0px 3px 6px rgba(0, 0, 0, 0.1)';
                            }}
                          >
                            <RefreshCw className="w-4 h-4" />
                            <span className="text-sm">Try Again</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Minimal Fallback Card */}
              <div>
                <p className="text-xs text-muted-foreground mb-4">FallbackCard/Minimal</p>
                <div className="space-y-4">
                  {/* Default */}
                  <div className="bg-card p-4 rounded-lg border border-border">
                    <p className="text-muted-foreground mb-3 text-xs">Default</p>
                    <div className="bg-card border border-border rounded-full p-2 max-w-md animate-in fade-in slide-in-from-left-2 duration-500">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center bg-destructive/10 rounded-full">
                          <AlertCircle className="w-5 h-5 text-destructive" />
                        </div>
                        <p className="text-[14px] leading-5 text-foreground">Unable to process request. Please try again later.</p>
                      </div>
                    </div>
                  </div>

                  {/* Hover */}
                  <div className="bg-card p-4 rounded-lg border border-border">
                    <p className="text-muted-foreground mb-3 text-xs">Hover (4px elevation)</p>
                    <div className="bg-card border border-border rounded-full p-2 max-w-md shadow-md transition-shadow animate-in fade-in slide-in-from-left-2 duration-500">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center bg-destructive/10 rounded-full">
                          <AlertCircle className="w-5 h-5 text-destructive" />
                        </div>
                        <p className="text-[14px] leading-5 text-foreground">Unable to process request. Please try again later.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Actionable Fallback Card */}
              <div>
                <p className="text-xs text-muted-foreground mb-4">FallbackCard/Actionable</p>
                <div className="space-y-4">
                  {/* Default */}
                  <div className="bg-card p-4 rounded-lg border border-border">
                    <p className="text-muted-foreground mb-3 text-xs">Default</p>
                    <div className="bg-card border border-border rounded-xl px-4 py-3 max-w-md animate-in fade-in slide-in-from-left-2 duration-500">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center bg-destructive/10 rounded-full">
                          <AlertTriangle className="w-5 h-5 text-destructive" />
                        </div>
                        <div className="flex-1 space-y-3">
                          <div>
                            <h5 className="text-foreground mb-1 text-base font-medium">AI service unavailable</h5>
                            <p className="text-xs text-muted-foreground">The AI model is temporarily offline. Here's what you can do:</p>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            <button 
                              className="inline-flex items-center gap-2 px-3 h-10 text-destructive-foreground rounded-full transition-all bg-destructive"
                              style={{
                                boxShadow: '0px 10px 10px rgba(0, 0, 0, 0.09), 0px 3px 6px rgba(0, 0, 0, 0.1)'
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.boxShadow = '0px 4px 6px rgba(0, 0, 0, 0.07), 0px 2px 4px rgba(0, 0, 0, 0.06)';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.boxShadow = '0px 10px 10px rgba(0, 0, 0, 0.09), 0px 3px 6px rgba(0, 0, 0, 0.1)';
                              }}
                            >
                              <RefreshCw className="w-4 h-4" />
                              <span className="text-sm">Retry</span>
                            </button>
                            <div 
                              className="inline-flex rounded-full p-[1px] transition-all bg-destructive"
                            >
                              <button 
                                className="inline-flex items-center gap-2 px-3 h-10 rounded-full transition-all bg-destructive/10 text-destructive"
                              >
                                <span className="text-sm">Use Manual Mode</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Hover */}
                  <div className="bg-card p-4 rounded-lg border border-border">
                    <p className="text-muted-foreground mb-3 text-xs">Hover (4px elevation)</p>
                    <div className="bg-card border border-border rounded-xl px-4 py-3 max-w-md shadow-md transition-shadow animate-in fade-in slide-in-from-left-2 duration-500">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center bg-destructive/10 rounded-full">
                          <AlertTriangle className="w-5 h-5 text-destructive" />
                        </div>
                        <div className="flex-1 space-y-3">
                          <div>
                            <h5 className="text-foreground mb-1 text-base font-medium">AI service unavailable</h5>
                            <p className="text-xs text-muted-foreground">The AI model is temporarily offline. Here's what you can do:</p>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            <button 
                              className="inline-flex items-center gap-2 px-3 h-10 text-destructive-foreground rounded-full transition-all bg-destructive"
                              style={{
                                boxShadow: '0px 10px 10px rgba(0, 0, 0, 0.09), 0px 3px 6px rgba(0, 0, 0, 0.1)'
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.boxShadow = '0px 4px 6px rgba(0, 0, 0, 0.07), 0px 2px 4px rgba(0, 0, 0, 0.06)';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.boxShadow = '0px 10px 10px rgba(0, 0, 0, 0.09), 0px 3px 6px rgba(0, 0, 0, 0.1)';
                              }}
                            >
                              <RefreshCw className="w-4 h-4" />
                              <span className="text-sm">Retry</span>
                            </button>
                            <div 
                              className="inline-flex rounded-full p-[1px] transition-all bg-destructive"
                            >
                              <button 
                                className="inline-flex items-center gap-2 px-3 h-10 rounded-full transition-all bg-destructive/10 text-destructive"
                              >
                                <span className="text-sm">Use Manual Mode</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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

      {/* Example 1: Content Generation Failure */}
      <div className="bg-card rounded-lg border border-border p-6">
        <div className="mb-3">
          <h4 className="text-foreground">Example 1: Content Generation Failure</h4>
        </div>
        <div className="bg-muted rounded-lg p-6 max-w-xl">
          <div className="bg-card border border-border rounded-xl px-4 py-3 shadow-sm">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center bg-destructive/10 rounded-full">
                <AlertTriangle className="w-5 h-5 text-destructive" />
              </div>
              <div className="flex-1 space-y-3">
                <div>
                  <h5 className="text-foreground mb-1 text-base font-medium">AI couldn't generate a response.</h5>
                  <p className="text-xs text-muted-foreground">Your request was too complex for the current model. Try breaking it into smaller parts or simplifying the prompt.</p>
                </div>
                <button 
                  onClick={handleRetry}
                  disabled={loadingSecondary}
                  className="inline-flex items-center gap-2 px-4 h-10 text-destructive-foreground rounded-full disabled:opacity-50 transition-all bg-destructive"
                  style={{
                    boxShadow: loadingSecondary ? 'none' : '0px 10px 10px rgba(0, 0, 0, 0.09), 0px 3px 6px rgba(0, 0, 0, 0.1)'
                  }}
                  onMouseEnter={(e) => {
                    if (!loadingSecondary) {
                      e.currentTarget.style.boxShadow = '0px 4px 6px rgba(0, 0, 0, 0.07), 0px 2px 4px rgba(0, 0, 0, 0.06)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!loadingSecondary) {
                      e.currentTarget.style.boxShadow = '0px 10px 10px rgba(0, 0, 0, 0.09), 0px 3px 6px rgba(0, 0, 0, 0.1)';
                    }
                  }}
                >
                  <RefreshCw className={`w-4 h-4 ${loadingSecondary ? 'animate-spin' : ''}`} />
                  <span className="text-sm">{loadingSecondary ? 'Retrying...' : 'Try Again'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Example 2: Service Unavailable */}
      <div className="bg-card rounded-lg border border-border p-6">
        <div className="mb-3">
          <h4 className="text-foreground">Example 2: AI Service Unavailable</h4>
        </div>
        <div className="bg-muted rounded-lg p-6">
          <div className="bg-card border border-border rounded-xl px-4 py-3 max-w-lg mx-auto">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center bg-destructive/10 rounded-full">
                <AlertTriangle className="w-5 h-5 text-destructive" />
              </div>
              <div className="flex-1 space-y-3">
                <div>
                  <h5 className="text-foreground mb-1 text-base font-medium">AI service temporarily unavailable</h5>
                  <p className="text-xs text-muted-foreground">We're experiencing high demand. Here's what you can do:</p>
                </div>
                <div className="flex flex-wrap items-center gap-2 w-full">
                  <div className="flex flex-wrap gap-2">
                    <button 
                      className="inline-flex items-center gap-2 px-4 h-10 text-destructive-foreground rounded-full transition-all bg-destructive"
                      style={{
                        boxShadow: '0px 10px 10px rgba(0, 0, 0, 0.09), 0px 3px 6px rgba(0, 0, 0, 0.1)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = '0px 4px 6px rgba(0, 0, 0, 0.07), 0px 2px 4px rgba(0, 0, 0, 0.06)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = '0px 10px 10px rgba(0, 0, 0, 0.09), 0px 3px 6px rgba(0, 0, 0, 0.1)';
                      }}
                    >
                      <RefreshCw className="w-4 h-4" />
                      <span className="text-sm">Retry</span>
                    </button>
                    <div 
                      className="inline-flex rounded-full p-[1px] transition-all bg-destructive"
                    >
                      <button 
                        className="inline-flex items-center gap-2 px-4 h-10 rounded-full transition-all bg-destructive/10 text-destructive"
                      >
                        <span className="text-sm">Save Draft</span>
                      </button>
                    </div>
                  </div>
                  <button 
                    className="ml-auto inline-flex items-center gap-1 text-sm font-medium text-destructive hover:text-destructive/80 transition-colors"
                  >
                    <span>Get Notified</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Example 3: Minimal Error Card */}
      <div className="bg-card rounded-lg border border-border p-6">
        <div className="mb-3">
          <h4 className="text-foreground">Example 3: Minimal Fallback in Sidebar</h4>
        </div>
        <div className="bg-muted rounded-lg p-6 max-w-sm">
          <div className="bg-card border border-border rounded-full p-2 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center bg-destructive/10 rounded-full">
                <AlertCircle className="w-5 h-5 text-destructive" />
              </div>
              <p className="text-[14px] leading-5 text-foreground">AI suggestions temporarily unavailable.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}