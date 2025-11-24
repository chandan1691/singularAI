import { AlertCircle, RefreshCw, X, AlertTriangle } from "lucide-react";
import { useState } from "react";

export function ErrorHandling() {
  const [loadingPrimary, setLoadingPrimary] = useState(false);
  const [loadingSecondary, setLoadingSecondary] = useState(false);

  const handleRetry = (type: string) => {
    if (type === 'primary') {
      setLoadingPrimary(true);
      setTimeout(() => setLoadingPrimary(false), 2000);
    } else {
      setLoadingSecondary(true);
      setTimeout(() => setLoadingSecondary(false), 2000);
    }
  };

  return (
    <div className="space-y-8">
      {/* Component Preview */}
      <div>
        <h4 className="text-foreground mb-4">Component Preview</h4>
        <div className="bg-muted rounded-lg border border-border p-12">
          
          {/* Error Button */}
          <div className="mb-12">
            <p className="text-muted-foreground mb-4">Error Button</p>
            <p className="text-xs text-muted-foreground mb-6">Label: Error button — "Model failed"</p>
            
            <div className="space-y-8">
              {/* Primary Retry */}
              <div>
                <p className="text-xs text-muted-foreground mb-4">ErrorButton/Primary</p>
                <div className="bg-card p-6 rounded-lg border border-border">
                  <div className="flex flex-wrap gap-6">
                    {/* Default */}
                    <div className="flex flex-col items-center gap-3">
                      <p className="text-muted-foreground text-xs">Default</p>
                      <button 
                        className="inline-flex items-center gap-2 px-3 h-10 text-white rounded-full transition-all animate-in fade-in slide-in-from-left-2 duration-500"
                        style={{
                          background: 'var(--destructive)',
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
                    </div>

                    {/* Hover */}
                    <div className="flex flex-col items-center gap-3">
                      <p className="text-muted-foreground text-xs">Hover</p>
                      <button 
                        className="inline-flex items-center gap-2 px-3 h-10 text-white rounded-full transition-all animate-in fade-in slide-in-from-left-2 duration-500"
                        style={{
                          background: 'var(--destructive)',
                          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.07), 0px 2px 4px rgba(0, 0, 0, 0.06)'
                        }}
                      >
                        <RefreshCw className="w-4 h-4" />
                        <span className="text-sm">Retry</span>
                      </button>
                    </div>

                    {/* Pressed */}
                    <div className="flex flex-col items-center gap-3">
                      <p className="text-muted-foreground text-xs">Pressed</p>
                      <button 
                        className="inline-flex items-center gap-2 px-3 h-10 text-white rounded-full transition-all animate-in fade-in slide-in-from-left-2 duration-500"
                        style={{
                          background: 'var(--destructive)',
                          boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.1)'
                        }}
                      >
                        <RefreshCw className="w-4 h-4" />
                        <span className="text-sm">Retry</span>
                      </button>
                    </div>

                    {/* Disabled */}
                    <div className="flex flex-col items-center gap-3">
                      <p className="text-muted-foreground text-xs">Disabled</p>
                      <button 
                        disabled 
                        className="inline-flex items-center gap-2 px-3 h-10 text-white rounded-full cursor-not-allowed opacity-50 transition-all animate-in fade-in slide-in-from-left-2 duration-500"
                        style={{
                          background: 'var(--destructive)',
                          boxShadow: 'none'
                        }}
                      >
                        <RefreshCw className="w-4 h-4" />
                        <span className="text-sm">Retry</span>
                      </button>
                    </div>

                    {/* Loading */}
                    <div className="flex flex-col items-center gap-3">
                      <p className="text-muted-foreground text-xs">Loading</p>
                      <button 
                        className="inline-flex items-center gap-2 px-3 h-10 text-white rounded-full transition-all animate-in fade-in slide-in-from-left-2 duration-500"
                        style={{
                          background: 'var(--destructive)',
                          boxShadow: '0px 10px 10px rgba(0, 0, 0, 0.09), 0px 3px 6px rgba(0, 0, 0, 0.1)'
                        }}
                      >
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        <span className="text-sm">Retrying...</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Secondary Retry */}
              <div>
                <p className="text-xs text-muted-foreground mb-4">ErrorButton/Secondary</p>
                <div className="bg-card p-6 rounded-lg border border-border">
                  <div className="flex flex-wrap gap-6">
                    {/* Default */}
                    <div className="flex flex-col items-center gap-3">
                      <p className="text-muted-foreground text-xs">Default</p>
                      <div 
                        className="inline-flex rounded-full p-[1px] transition-all animate-in fade-in slide-in-from-left-2 duration-500"
                        style={{
                          background: 'var(--destructive)'
                        }}
                      >
                        <button 
                          className="inline-flex items-center gap-2 px-3 h-10 rounded-full transition-all"
                          style={{
                            background: 'var(--destructive) / 0.1',
                            color: 'var(--destructive)'
                          }}
                        >
                          <RefreshCw className="w-4 h-4" />
                          <span className="text-sm">Retry</span>
                        </button>
                      </div>
                    </div>

                    {/* Hover */}
                    <div className="flex flex-col items-center gap-3">
                      <p className="text-muted-foreground text-xs">Hover</p>
                      <div 
                        className="inline-flex rounded-full p-[1px] transition-all animate-in fade-in slide-in-from-left-2 duration-500"
                        style={{
                          background: 'var(--destructive)'
                        }}
                      >
                        <button 
                          className="inline-flex items-center gap-2 px-3 h-10 rounded-full transition-all"
                          style={{
                            background: 'var(--destructive) / 0.1',
                            color: 'var(--destructive)'
                          }}
                        >
                          <RefreshCw className="w-4 h-4" />
                          <span className="text-sm">Retry</span>
                        </button>
                      </div>
                    </div>

                    {/* Pressed */}
                    <div className="flex flex-col items-center gap-3">
                      <p className="text-muted-foreground text-xs">Pressed</p>
                      <div 
                        className="inline-flex rounded-full p-[1px] transition-all animate-in fade-in slide-in-from-left-2 duration-500"
                        style={{
                          background: 'var(--destructive)'
                        }}
                      >
                        <button 
                          className="inline-flex items-center gap-2 px-3 h-10 rounded-full transition-all"
                          style={{
                            background: 'linear-gradient(93.66deg, #FFEFEF -0.01%, #FFF5F5 100.21%)',
                            color: '#B83838'
                          }}
                        >
                          <RefreshCw className="w-4 h-4" />
                          <span className="text-sm">Retry</span>
                        </button>
                      </div>
                    </div>

                    {/* Disabled */}
                    <div className="flex flex-col items-center gap-3">
                      <p className="text-muted-foreground text-xs">Disabled</p>
                      <div 
                        className="inline-flex rounded-full p-[1px] opacity-50 transition-all animate-in fade-in slide-in-from-left-2 duration-500"
                        style={{
                          background: 'var(--destructive)'
                        }}
                      >
                        <button 
                          disabled 
                          className="inline-flex items-center gap-2 px-3 h-10 rounded-full cursor-not-allowed transition-all"
                          style={{
                            background: 'var(--destructive) / 0.1',
                            color: 'var(--destructive)'
                          }}
                        >
                          <RefreshCw className="w-4 h-4" />
                          <span className="text-sm">Retry</span>
                        </button>
                      </div>
                    </div>

                    {/* Loading */}
                    <div className="flex flex-col items-center gap-3">
                      <p className="text-muted-foreground text-xs">Loading</p>
                      <div 
                        className="inline-flex rounded-full p-[1px] transition-all animate-in fade-in slide-in-from-left-2 duration-500"
                        style={{
                          background: 'var(--destructive)'
                        }}
                      >
                        <button 
                          className="inline-flex items-center gap-2 px-3 h-10 rounded-full transition-all"
                          style={{
                            background: 'var(--destructive) / 0.1',
                            color: 'var(--destructive)'
                          }}
                        >
                          <RefreshCw className="w-4 h-4 animate-spin" />
                          <span className="text-sm">Retrying...</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dismiss */}
              <div>
                <p className="text-xs text-muted-foreground mb-4">ErrorButton/Dismiss</p>
                <div className="bg-card p-6 rounded-lg border border-border">
                  <div className="flex flex-wrap gap-6">
                    {/* Default */}
                    <div className="flex flex-col items-center gap-3">
                      <p className="text-muted-foreground text-xs">Default</p>
                      <button 
                        className="inline-flex items-center gap-2 px-3 h-10 bg-transparent rounded-full transition-all animate-in fade-in slide-in-from-left-2 duration-500"
                        style={{ color: '#DC4848' }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = '#FFF5F5';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'transparent';
                        }}
                      >
                        <X className="w-4 h-4" />
                        <span className="text-sm">Dismiss</span>
                      </button>
                    </div>

                    {/* Hover */}
                    <div className="flex flex-col items-center gap-3">
                      <p className="text-muted-foreground text-xs">Hover</p>
                      <button 
                        className="inline-flex items-center gap-2 px-3 h-10 rounded-full transition-all animate-in fade-in slide-in-from-left-2 duration-500"
                        style={{
                          backgroundColor: '#FFF5F5',
                          color: '#DC4848'
                        }}
                      >
                        <X className="w-4 h-4" />
                        <span className="text-sm">Dismiss</span>
                      </button>
                    </div>

                    {/* Pressed */}
                    <div className="flex flex-col items-center gap-3">
                      <p className="text-muted-foreground text-xs">Pressed</p>
                      <button 
                        className="inline-flex items-center gap-2 px-3 h-10 rounded-full transition-all animate-in fade-in slide-in-from-left-2 duration-500"
                        style={{
                          backgroundColor: '#FFEBEB',
                          color: '#B83838'
                        }}
                      >
                        <X className="w-4 h-4" />
                        <span className="text-sm">Dismiss</span>
                      </button>
                    </div>

                    {/* Disabled */}
                    <div className="flex flex-col items-center gap-3">
                      <p className="text-muted-foreground text-xs">Disabled</p>
                      <button 
                        disabled 
                        className="inline-flex items-center gap-2 px-3 h-10 bg-transparent rounded-full cursor-not-allowed opacity-50 transition-all animate-in fade-in slide-in-from-left-2 duration-500"
                        style={{
                          color: '#DC4848'
                        }}
                      >
                        <X className="w-4 h-4" />
                        <span className="text-sm">Dismiss</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Inline Error Message */}
          <div className="mb-12">
            <p className="text-muted-foreground mb-6">Inline Error Message</p>
            
            <div className="space-y-8">
              {/* Compact */}
              <div>
                <p className="text-xs text-muted-foreground mb-4">InlineError/Compact</p>
                <div className="space-y-4">
                  {/* Default */}
                  <div className="bg-card p-4 rounded-lg border border-border">
                    <p className="text-muted-foreground mb-3 text-xs">Default</p>
                    <div className="flex items-center gap-2 py-1 animate-in fade-in slide-in-from-left-2 duration-500">
                      <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                      <span className="text-xs text-red-600">Something went wrong. Please try again.</span>
                    </div>
                  </div>

                  {/* Hover */}
                  <div className="bg-card p-4 rounded-lg border border-border">
                    <p className="text-muted-foreground mb-3 text-xs">Hover</p>
                    <div className="flex items-center gap-2 py-1 cursor-pointer animate-in fade-in slide-in-from-left-2 duration-500">
                      <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
                      <span className="text-xs text-red-700 font-medium">Something went wrong. Please try again.</span>
                    </div>
                  </div>

                  {/* AI-triggered entry */}
                  <div className="bg-card p-4 rounded-lg border border-border">
                    <p className="text-muted-foreground mb-3 text-xs">AI-triggered entry</p>
                    <div className="flex items-center gap-2 py-1 animate-in fade-in slide-in-from-left-2 duration-300">
                      <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
                      <span className="text-xs text-red-600">AI model is currently unavailable.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Expanded */}
              <div>
                <p className="text-xs text-muted-foreground mb-4">InlineError/Expanded</p>
                <div className="space-y-4">
                  {/* Default */}
                  <div className="bg-card p-4 rounded-lg border border-border">
                    <p className="text-muted-foreground mb-3 text-xs">Default</p>
                    <div className="flex items-start gap-2 py-1 animate-in fade-in slide-in-from-left-2 duration-500">
                      <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <p className="text-xs text-red-600">Something went wrong. Please try again.</p>
                        <p className="text-xs text-red-600 mt-1">The AI service encountered an error while processing your request. This may be temporary.</p>
                      </div>
                    </div>
                  </div>

                  {/* Hover */}
                  <div className="bg-card p-4 rounded-lg border border-border">
                    <p className="text-muted-foreground mb-3 text-xs">Hover</p>
                    <div className="flex items-start gap-2 py-1 cursor-pointer animate-in fade-in slide-in-from-left-2 duration-500">
                      <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <p className="text-xs text-red-600 font-medium">Something went wrong. Please try again.</p>
                        <p className="text-xs text-red-600 mt-1">The AI service encountered an error while processing your request. This may be temporary.</p>
                      </div>
                    </div>
                  </div>

                  {/* AI-triggered entry */}
                  <div className="bg-card p-4 rounded-lg border border-border">
                    <p className="text-muted-foreground mb-3 text-xs">AI-triggered entry</p>
                    <div className="flex items-start gap-2 py-1 animate-in fade-in slide-in-from-left-2 duration-300">
                      <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <p className="text-xs text-red-600">Model failed to generate a response.</p>
                        <p className="text-xs text-red-600 mt-1">Your input was received but the model couldn't process it. Try rephrasing or simplifying your request.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

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
                    <div className="bg-card border border-border rounded-xl p-6 max-w-md animate-in fade-in slide-in-from-left-2 duration-500">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center bg-red-50 rounded-full">
                          <AlertTriangle className="w-5 h-5 text-red-600" />
                        </div>
                        <div className="flex-1 space-y-3">
                          <div>
                            <h5 className="text-foreground mb-1">AI couldn't generate a response.</h5>
                            <p className="text-xs text-muted-foreground">Refine your input or try again.</p>
                          </div>
                          <button 
                            className="inline-flex items-center gap-2 px-3 h-10 text-white rounded-full transition-all"
                            style={{
                              background: 'var(--destructive)',
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
                    <div className="bg-card border border-border rounded-xl p-6 max-w-md shadow-md transition-shadow animate-in fade-in slide-in-from-left-2 duration-500">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center bg-red-50 rounded-full">
                          <AlertTriangle className="w-5 h-5 text-red-600" />
                        </div>
                        <div className="flex-1 space-y-3">
                          <div>
                            <h5 className="text-foreground mb-1">AI couldn't generate a response.</h5>
                            <p className="text-xs text-muted-foreground">Refine your input or try again.</p>
                          </div>
                          <button 
                            className="inline-flex items-center gap-2 px-3 h-10 text-white rounded-full transition-all"
                            style={{
                              background: 'var(--destructive)',
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
                    <div className="bg-card border border-border rounded-xl p-4 max-w-md animate-in fade-in slide-in-from-left-2 duration-500">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center bg-red-50 rounded-full">
                          <AlertCircle className="w-5 h-5 text-red-600" />
                        </div>
                        <p className="text-sm text-foreground">Unable to process request. Please try again later.</p>
                      </div>
                    </div>
                  </div>

                  {/* Hover */}
                  <div className="bg-card p-4 rounded-lg border border-border">
                    <p className="text-muted-foreground mb-3 text-xs">Hover (4px elevation)</p>
                    <div className="bg-card border border-border rounded-xl p-4 max-w-md shadow-md transition-shadow animate-in fade-in slide-in-from-left-2 duration-500">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center bg-red-50 rounded-full">
                          <AlertCircle className="w-5 h-5 text-red-600" />
                        </div>
                        <p className="text-sm text-foreground">Unable to process request. Please try again later.</p>
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
                    <div className="bg-card border border-border rounded-xl p-6 max-w-md animate-in fade-in slide-in-from-left-2 duration-500">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center bg-red-50 rounded-full">
                          <AlertTriangle className="w-5 h-5 text-red-600" />
                        </div>
                        <div className="flex-1 space-y-3">
                          <div>
                            <h5 className="text-foreground mb-1">AI service unavailable</h5>
                            <p className="text-xs text-muted-foreground">The AI model is temporarily offline. Here's what you can do:</p>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            <button 
                              className="inline-flex items-center gap-2 px-3 h-10 text-white rounded-full transition-all"
                              style={{
                                background: 'var(--destructive)',
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
                              className="inline-flex rounded-full p-[1px] transition-all"
                              style={{
                                background: 'var(--destructive)'
                              }}
                            >
                              <button 
                                className="inline-flex items-center gap-2 px-3 h-10 rounded-full transition-all"
                                style={{
                                  background: 'linear-gradient(93.66deg, #FFEFEF -0.01%, #FFF5F5 100.21%)',
                                  color: '#DC4848'
                                }}
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
                    <div className="bg-card border border-border rounded-xl p-6 max-w-md shadow-md transition-shadow animate-in fade-in slide-in-from-left-2 duration-500">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center bg-red-50 rounded-full">
                          <AlertTriangle className="w-5 h-5 text-red-600" />
                        </div>
                        <div className="flex-1 space-y-3">
                          <div>
                            <h5 className="text-foreground mb-1">AI service unavailable</h5>
                            <p className="text-xs text-muted-foreground">The AI model is temporarily offline. Here's what you can do:</p>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            <button 
                              className="inline-flex items-center gap-2 px-3 h-10 text-white rounded-full transition-all"
                              style={{
                                background: 'var(--destructive)',
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
                              className="inline-flex rounded-full p-[1px] transition-all"
                              style={{
                                background: 'var(--destructive)'
                              }}
                            >
                              <button 
                                className="inline-flex items-center gap-2 px-3 h-10 rounded-full transition-all"
                                style={{
                                  background: 'linear-gradient(93.66deg, #FFEFEF -0.01%, #FFF5F5 100.21%)',
                                  color: '#DC4848'
                                }}
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

      {/* Example 1: Chat Interface with Error */}
      <div className="bg-card rounded-lg border border-border p-6">
        <div className="mb-3">
          <h4 className="text-foreground">Example 1: Chat Interface with Error</h4>
        </div>
        <div className="space-y-4 max-w-2xl">
          {/* User message */}
          <div className="flex justify-end">
            <div className="bg-blue-500 text-white px-4 py-3 rounded-2xl rounded-tr-sm max-w-md">
              <p className="text-sm">Can you summarize this article for me?</p>
            </div>
          </div>
          {/* AI error response */}
          <div className="flex justify-start">
            <div className="space-y-3 max-w-md">
              <div className="bg-muted px-4 py-3 rounded-2xl rounded-tl-sm">
                <p className="text-sm text-foreground">I'm having trouble processing that request right now.</p>
              </div>
              <div className="flex items-center gap-2 px-1 animate-in fade-in slide-in-from-left-2 duration-500">
                <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
                <span className="text-xs text-red-600">Model failed to generate a response.</span>
              </div>
              <div className="flex gap-2">
                <button 
                  onClick={() => handleRetry('primary')}
                  disabled={loadingPrimary}
                  className="inline-flex items-center gap-2 px-3 h-10 text-white rounded-full disabled:opacity-50 transition-all"
                  style={{
                    background: 'var(--destructive)',
                    boxShadow: loadingPrimary ? 'none' : '0px 10px 10px rgba(0, 0, 0, 0.09), 0px 3px 6px rgba(0, 0, 0, 0.1)'
                  }}
                  onMouseEnter={(e) => {
                    if (!loadingPrimary) {
                      e.currentTarget.style.boxShadow = '0px 4px 6px rgba(0, 0, 0, 0.07), 0px 2px 4px rgba(0, 0, 0, 0.06)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!loadingPrimary) {
                      e.currentTarget.style.boxShadow = '0px 10px 10px rgba(0, 0, 0, 0.09), 0px 3px 6px rgba(0, 0, 0, 0.1)';
                    }
                  }}
                >
                  <RefreshCw className={`w-4 h-4 ${loadingPrimary ? 'animate-spin' : ''}`} />
                  <span className="text-sm">{loadingPrimary ? 'Retrying...' : 'Try Again'}</span>
                </button>
                <button 
                  className="inline-flex items-center gap-2 px-3 h-10 bg-transparent rounded-full transition-all"
                  style={{ color: '#DC4848' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#FFF5F5';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
                  <X className="w-4 h-4" />
                  <span className="text-sm">Dismiss</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Example 2: Form Field Error */}
      <div className="bg-card rounded-lg border border-border p-6">
        <div className="mb-3">
          <h4 className="text-foreground">Example 2: Form Field with AI Validation Error</h4>
        </div>
        <div className="max-w-md space-y-2">
          <label className="text-foreground block text-sm">Product Description</label>
          <textarea
            className="w-full p-3 border-2 border-red-300 rounded-lg bg-card text-foreground min-h-[100px] focus:border-red-400 focus:ring-2 focus:ring-red-100"
            placeholder="Enter product description..."
            defaultValue="This product is the best and will solve all your problems guaranteed!"
          />
          <div className="flex items-start gap-2 py-1 animate-in fade-in slide-in-from-left-2 duration-500">
            <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="text-xs text-red-600">AI detected potentially misleading claims.</p>
              <p className="text-xs text-red-600 mt-1">Consider revising to avoid absolute guarantees and unverifiable statements.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Example 3: Content Generation Failure */}
      <div className="bg-card rounded-lg border border-border p-6">
        <div className="mb-3">
          <h4 className="text-foreground">Example 3: Content Generation Failure</h4>
        </div>
        <div className="bg-muted rounded-lg p-6 max-w-xl">
          <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
            <div className="flex items-start gap-3">
                        <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center bg-red-50 rounded-full">
                <AlertTriangle className="w-5 h-5 text-red-600" />
              </div>
              <div className="flex-1 space-y-3">
                <div>
                  <h5 className="text-foreground mb-1">AI couldn't generate a response.</h5>
                  <p className="text-xs text-muted-foreground">Your request was too complex for the current model. Try breaking it into smaller parts or simplifying the prompt.</p>
                </div>
                <button 
                  onClick={() => handleRetry('secondary')}
                  disabled={loadingSecondary}
                  className="inline-flex items-center gap-2 px-4 h-10 text-white rounded-full disabled:opacity-50 transition-all"
                  style={{
                    background: 'var(--destructive)',
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

      {/* Example 4: Service Unavailable */}
      <div className="bg-card rounded-lg border border-border p-6">
        <div className="mb-3">
          <h4 className="text-foreground">Example 4: AI Service Unavailable</h4>
        </div>
        <div className="bg-muted rounded-lg p-6">
          <div className="bg-card border border-border rounded-xl p-6 max-w-lg mx-auto">
            <div className="flex items-start gap-3">
            <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center bg-red-50 rounded-full">
                <AlertTriangle className="w-5 h-5 text-red-600" />
              </div>
              <div className="flex-1 space-y-3">
                <div>
                  <h5 className="text-foreground mb-1">AI service temporarily unavailable</h5>
                  <p className="text-xs text-muted-foreground">We're experiencing high demand. Here's what you can do:</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <button 
                    className="inline-flex items-center gap-2 px-4 h-10 text-white rounded-full transition-all"
                    style={{
                      background: 'var(--destructive)',
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
                    className="inline-flex rounded-full p-[1px] transition-all"
                    style={{
                      background: 'var(--destructive)'
                    }}
                  >
                    <button 
                      className="inline-flex items-center gap-2 px-4 h-10 rounded-full transition-all"
                      style={{
                        background: 'linear-gradient(93.66deg, #FFEFEF -0.01%, #FFF5F5 100.21%)',
                        color: '#DC4848'
                      }}
                    >
                      <span className="text-sm">Save Draft</span>
                    </button>
                  </div>
                  <div 
                    className="inline-flex rounded-full p-[1px] transition-all"
                    style={{
                      background: 'var(--destructive)'
                    }}
                  >
                    <button 
                      className="inline-flex items-center gap-2 px-4 h-10 rounded-full transition-all"
                      style={{
                        background: 'linear-gradient(93.66deg, #FFEFEF -0.01%, #FFF5F5 100.21%)',
                        color: '#DC4848'
                      }}
                    >
                      <span className="text-sm">Get Notified</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Example 5: Multiple Inline Errors */}
      <div className="bg-card rounded-lg border border-border p-6">
        <div className="mb-3">
          <h4 className="text-foreground">Example 5: Form with Multiple AI Validation Errors</h4>
        </div>
        <div className="max-w-md space-y-4">
          <div className="space-y-2">
            <label className="text-foreground block text-sm">Email Subject</label>
            <input
              type="text"
              className="w-full p-3 border-2 border-red-300 rounded-lg bg-card text-foreground focus:border-red-400 focus:ring-2 focus:ring-red-100"
              defaultValue="URGENT!!! Read this NOW!!!"
            />
            <div className="flex items-center gap-2 py-1 animate-in fade-in slide-in-from-left-2 duration-500">
              <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
              <span className="text-xs text-red-600">Excessive urgency detected. Subject may be flagged as spam.</span>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-foreground block text-sm">Message Body</label>
            <textarea
              className="w-full p-3 border border-gray-300 rounded-lg bg-card text-foreground min-h-[80px]"
              placeholder="Enter your message..."
              defaultValue="Hello, I wanted to reach out about..."
            />
            <div className="flex items-center gap-2 py-1 text-green-600 animate-in fade-in slide-in-from-left-2 duration-500">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span className="text-xs">Message looks good!</span>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-foreground block text-sm">Recipient</label>
            <input
              type="email"
              className="w-full p-3 border-2 border-red-300 rounded-lg bg-card text-foreground focus:border-red-400 focus:ring-2 focus:ring-red-100"
              defaultValue="notanemail"
            />
            <div className="flex items-center gap-2 py-1 animate-in fade-in slide-in-from-left-2 duration-500">
              <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
              <span className="text-xs text-red-600">Invalid email format detected.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}