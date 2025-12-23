import { RefreshCw, X } from "lucide-react";
import { useState } from "react";

export function ErrorButton() {
  const [loadingPrimary, setLoadingPrimary] = useState(false);

  const handleRetry = () => {
    setLoadingPrimary(true);
    setTimeout(() => setLoadingPrimary(false), 2000);
  };

  return (
    <div className="space-y-8">
      {/* Component Preview */}
      <div>
        <h4 className="text-foreground mb-4">Component Preview</h4>
        <div className="bg-muted rounded-lg border border-border p-12">
          
          {/* Error Button */}
          <div>
            <p className="text-muted-foreground mb-4">Error Button</p>
            <p className="text-xs text-gray-400 mb-6">Label: Error button — \"Model failed\"</p>
            
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
                        className="flex items-center justify-center gap-2 h-10 px-4 text-primary-foreground rounded-full transition-all animate-in fade-in slide-in-from-left-2 duration-500 bg-primary w-fit"
                        style={{
                          paddingLeft: '16px',
                          paddingRight: '16px',
                          color: 'rgba(10, 10, 10, 1)',
                          backgroundColor: 'var(--color-blue-200)',
                          borderColor: 'var(--color-blue-300)',
                          borderStyle: 'solid',
                          borderWidth: '1px',
                          boxShadow: 'none'
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
                        className="flex items-center justify-center gap-2 h-10 px-4 text-destructive-foreground rounded-full transition-all animate-in fade-in slide-in-from-left-2 duration-500 bg-destructive w-fit"
                        style={{
                          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.07), 0px 2px 4px rgba(0, 0, 0, 0.06)',
                          borderImage: 'none',
                          borderStyle: 'solid',
                          borderWidth: '1px'
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
                        className="flex items-center justify-center gap-2 h-10 px-4 text-destructive-foreground rounded-full transition-all animate-in fade-in slide-in-from-left-2 duration-500 bg-destructive w-fit"
                        style={{
                          boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.1)',
                          borderImage: 'none',
                          borderStyle: 'solid',
                          borderWidth: '1px'
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
                        className="flex items-center justify-center gap-2 h-10 pl-4 pr-4 text-destructive-foreground rounded-full cursor-not-allowed opacity-50 transition-all animate-in fade-in slide-in-from-left-2 duration-500 bg-destructive w-fit"
                        style={{
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
                        className="flex items-center justify-center gap-2 h-10 px-4 text-primary-foreground rounded-full transition-all animate-in fade-in slide-in-from-left-2 duration-500 bg-primary w-fit"
                        style={{
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
                        className="inline-flex rounded-full px-4 py-[1px] gap-0 transition-all animate-in fade-in slide-in-from-left-2 duration-500 bg-destructive"
                      >
                        <button 
                          className="flex items-center justify-center gap-2 h-10 px-4 rounded-full transition-all bg-destructive/10 text-destructive w-fit"
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
                        className="inline-flex rounded-full px-4 py-[1px] gap-0 transition-all animate-in fade-in slide-in-from-left-2 duration-500 bg-destructive"
                      >
                        <button 
                          className="flex items-center justify-center gap-2 h-10 px-4 rounded-full transition-all bg-destructive/10 text-destructive w-fit"
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
                        className="inline-flex rounded-full px-4 py-[1px] gap-0 transition-all animate-in fade-in slide-in-from-left-2 duration-500 bg-destructive"
                      >
                        <button 
                          className="flex items-center justify-center gap-2 h-10 px-4 rounded-full transition-all w-fit"
                          style={{
                            background: 'linear-gradient(93.66deg, #FFEFEF -0.01%, #FFF5F5 100.21%)',
                            color: 'var(--destructive)'
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
                        className="inline-flex rounded-full px-4 py-[1px] gap-0 opacity-50 transition-all animate-in fade-in slide-in-from-left-2 duration-500 bg-destructive"
                        style={{
                          gap: '0px',
                          paddingLeft: '16px',
                          paddingRight: '16px'
                        }}
                      >
                        <button 
                          disabled 
                          className="flex items-center justify-center gap-2 h-10 px-4 rounded-full cursor-not-allowed transition-all bg-destructive/10 text-destructive w-fit"
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
                        className="inline-flex rounded-full px-4 py-[1px] gap-0 transition-all animate-in fade-in slide-in-from-left-2 duration-500 bg-destructive"
                      >
                        <button 
                          className="flex items-center justify-center gap-2 h-10 px-4 rounded-full transition-all bg-destructive/10 text-destructive w-fit"
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
                        className="flex items-center justify-center gap-2 h-10 px-4 bg-transparent rounded-full transition-all animate-in fade-in slide-in-from-left-2 duration-500 text-destructive w-fit"
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = '#FFF5F5';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'transparent';
                        }}
                      >
                        <span className="text-sm">Dismiss</span>
                        <X className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Hover */}
                    <div className="flex flex-col items-center gap-3">
                      <p className="text-muted-foreground text-xs">Hover</p>
                      <button 
                        className="flex items-center justify-center gap-2 h-10 px-4 rounded-full transition-all animate-in fade-in slide-in-from-left-2 duration-500 w-fit"
                        style={{
                          backgroundColor: 'var(--destructive) / 0.1',
                          color: 'var(--destructive)'
                        }}
                      >
                        <span className="text-sm">Dismiss</span>
                        <X className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Pressed */}
                    <div className="flex flex-col items-center gap-3">
                      <p className="text-muted-foreground text-xs">Pressed</p>
                      <button 
                        className="flex items-center justify-center gap-2 h-10 px-4 rounded-full transition-all animate-in fade-in slide-in-from-left-2 duration-500 w-fit"
                        style={{
                          backgroundColor: 'var(--destructive) / 0.15',
                          color: 'var(--destructive)'
                        }}
                      >
                        <span className="text-sm">Dismiss</span>
                        <X className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Disabled */}
                    <div className="flex flex-col items-center gap-3">
                      <p className="text-muted-foreground text-xs">Disabled</p>
                      <button 
                        disabled 
                        className="flex items-center justify-center gap-2 h-10 px-4 bg-transparent rounded-full cursor-not-allowed opacity-50 transition-all animate-in fade-in slide-in-from-left-2 duration-500 w-fit"
                        style={{
                          color: 'var(--destructive)'
                        }}
                      >
                        <span className="text-sm">Dismiss</span>
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Size Variations */}
          <div className="mt-12 pt-12 border-t border-border">
            <p className="text-muted-foreground mb-4">Size Variations</p>
            <p className="text-xs text-gray-400 mb-6">Available sizes: Small, Medium, Large</p>
            
            <div className="space-y-8">
              {/* Primary Retry Sizes */}
              <div>
                <p className="text-xs text-muted-foreground mb-4">Primary Retry</p>
                <div className="bg-card p-6 rounded-lg border border-border">
                  <div className="flex flex-wrap items-end gap-6">
                    {/* Small */}
                    <div className="flex flex-col items-center gap-3">
                      <p className="text-muted-foreground text-xs">Small</p>
                      <button 
                        className="inline-flex items-center justify-center gap-1.5 h-10 pl-4 pr-4 text-primary-foreground rounded-full transition-all bg-primary"
                        style={{
                          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.07), 0px 2px 4px rgba(0, 0, 0, 0.06)'
                        }}
                      >
                        <RefreshCw className="w-4 h-4" />
                        <span className="text-sm">Retry</span>
                      </button>
                    </div>

                    {/* Medium */}
                    <div className="flex flex-col items-center gap-3">
                      <p className="text-muted-foreground text-xs">Medium</p>
                      <button 
                        className="inline-flex items-center justify-center gap-2 h-10 pl-4 pr-4 text-primary-foreground rounded-full transition-all bg-primary"
                        style={{
                          boxShadow: '0px 6px 8px rgba(0, 0, 0, 0.08), 0px 2px 4px rgba(0, 0, 0, 0.08)'
                        }}
                      >
                        <RefreshCw className="w-4 h-4" />
                        <span className="text-sm">Retry</span>
                      </button>
                    </div>

                    {/* Large */}
                    <div className="flex flex-col items-center gap-3">
                      <p className="text-muted-foreground text-xs">Large</p>
                      <button 
                        className="inline-flex items-center justify-center gap-2 h-10 pl-4 pr-4 text-primary-foreground rounded-full transition-all bg-primary"
                        style={{
                          boxShadow: '0px 10px 10px rgba(0, 0, 0, 0.09), 0px 3px 6px rgba(0, 0, 0, 0.1)'
                        }}
                      >
                        <RefreshCw className="w-4 h-4" />
                        <span className="text-sm">Retry</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Secondary Retry Sizes */}
              <div>
                <p className="text-xs text-muted-foreground mb-4">Secondary Retry</p>
                <div className="bg-card p-6 rounded-lg border border-border">
                  <div className="flex flex-wrap items-end gap-6">
                    {/* Small */}
                    <div className="flex flex-col items-center gap-3">
                      <p className="text-muted-foreground text-xs">Small</p>
                      <div 
                        className="inline-flex rounded-full px-4 py-[1px] gap-0 bg-destructive"
                      >
                        <button 
                          className="inline-flex items-center justify-center gap-2 h-10 pl-4 pr-4 rounded-full transition-all bg-destructive/10 text-destructive"
                        >
                          <RefreshCw className="w-4 h-4" />
                          <span className="text-sm">Retry</span>
                        </button>
                      </div>
                    </div>

                    {/* Medium */}
                    <div className="flex flex-col items-center gap-3">
                      <p className="text-muted-foreground text-xs">Medium</p>
                      <div 
                        className="inline-flex rounded-full px-4 py-[1px] gap-0 bg-destructive"
                      >
                        <button 
                          className="inline-flex items-center justify-center gap-2 h-10 pl-4 pr-4 rounded-full transition-all bg-destructive/10 text-destructive"
                        >
                          <RefreshCw className="w-4 h-4" />
                          <span className="text-sm">Retry</span>
                        </button>
                      </div>
                    </div>

                    {/* Large */}
                    <div className="flex flex-col items-center gap-3">
                      <p className="text-muted-foreground text-xs">Large</p>
                      <div 
                        className="inline-flex rounded-full px-4 py-[1px] gap-0 bg-destructive"
                      >
                        <button 
                          className="inline-flex items-center justify-center gap-2 h-10 pl-4 pr-4 rounded-full transition-all bg-destructive/10 text-destructive"
                        >
                          <RefreshCw className="w-4 h-4" />
                          <span className="text-sm">Retry</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dismiss Sizes */}
              <div>
                <p className="text-xs text-muted-foreground mb-4">Dismiss</p>
                <div className="bg-card p-6 rounded-lg border border-border">
                  <div className="flex flex-wrap items-end gap-6">
                    {/* Small */}
                    <div className="flex flex-col items-center gap-3">
                      <p className="text-muted-foreground text-xs">Small</p>
                      <button 
                        className="inline-flex items-center justify-center gap-1.5 h-10 pl-4 pr-4 bg-transparent rounded-full transition-all text-destructive"
                        style={{
                          paddingLeft: '16px',
                          paddingRight: '16px'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = '#FFF5F5';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'transparent';
                        }}
                      >
                        <span className="text-sm">Dismiss</span>
                        <X className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Medium */}
                    <div className="flex flex-col items-center gap-3">
                      <p className="text-muted-foreground text-xs">Medium</p>
                      <button 
                        className="inline-flex items-center justify-center gap-2 h-10 pl-4 pr-4 bg-transparent rounded-full transition-all text-destructive"
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = '#FFF5F5';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'transparent';
                        }}
                      >
                        <span className="text-sm">Dismiss</span>
                        <X className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Large */}
                    <div className="flex flex-col items-center gap-3">
                      <p className="text-muted-foreground text-xs">Large</p>
                      <button 
                        className="inline-flex items-center justify-center gap-2 h-10 pl-4 pr-4 bg-transparent rounded-full transition-all text-destructive"
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = '#FFF5F5';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'transparent';
                        }}
                      >
                        <span className="text-sm">Dismiss</span>
                        <X className="w-4 h-4" />
                      </button>
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
          <h4 className="text-foreground">Example 1: Chat Interface with Error Buttons</h4>
        </div>
        <div className="space-y-4 max-w-2xl">
          {/* User message */}
          <div className="flex justify-end">
            <div className="bg-primary text-destructive-foreground px-4 py-3 rounded-2xl rounded-tr-sm max-w-md">
              <p className="text-sm">Can you summarize this article for me?</p>
            </div>
          </div>
          {/* AI error response */}
          <div className="flex justify-start">
            <div className="space-y-3 max-w-md">
              <div className="bg-muted px-4 py-3 rounded-2xl rounded-tl-sm">
                <p className="text-sm text-foreground">I'm having trouble processing that request right now.</p>
              </div>
              <div className="flex gap-2">
                <button 
                  onClick={handleRetry}
                  disabled={loadingPrimary}
                  className="inline-flex items-center justify-center gap-2 h-10 px-4 text-primary-foreground rounded-full disabled:opacity-50 transition-all bg-primary"
                  style={{
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
                  className="inline-flex items-center justify-center gap-2 h-10 px-4 bg-transparent rounded-full transition-all"
                  style={{ color: 'var(--destructive)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#FFF5F5';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
                  <span className="text-sm">Dismiss</span>
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Example 2: Action Card with Buttons */}
      <div className="bg-card rounded-lg border border-border p-6">
        <div className="mb-3">
          <h4 className="text-foreground">Example 2: Error Card with Action Buttons</h4>
        </div>
        <div className="bg-muted rounded-lg p-6">
          <div className="bg-card border border-border rounded-xl p-6 max-w-lg mx-auto">
            <div className="space-y-4">
              <div>
                <h5 className="text-foreground mb-1">Connection Failed</h5>
                <p className="text-xs text-muted-foreground">Unable to reach the AI service. Please try again.</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <button 
                  className="inline-flex items-center justify-center gap-2 h-10 px-4 text-primary-foreground rounded-full transition-all bg-primary"
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
                  <span className="text-sm">Retry Connection</span>
                </button>
                <div 
                  className="inline-flex rounded-full px-4 py-[1px] gap-0 transition-all"
                  style={{
                    background: 'var(--destructive)'
                  }}
                >
                  <button 
                    className="inline-flex items-center justify-center gap-2 h-10 px-4 rounded-full transition-all"
                    style={{
                      background: 'linear-gradient(93.66deg, #FFEFEF -0.01%, #FFF5F5 100.21%)',
                      color: 'var(--destructive)'
                    }}
                  >
                    <span className="text-sm">Cancel</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
