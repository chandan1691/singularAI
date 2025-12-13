import { AlertCircle, TrendingUp } from "lucide-react";

export function LowConfidenceTag() {
  return (
    <div className="space-y-8">
      {/* Component Preview */}
      <div>
        <h4 className="text-foreground mb-4">Component Preview</h4>
        <div className="bg-muted rounded-lg border border-border p-12">
          {/* Outlined */}
          <div className="mb-12">
            <h5 className="text-foreground font-semibold mb-6">Outlined</h5>
            
            {/* Large Size */}
            <div className="mb-8">
              <p className="text-muted-foreground mb-3">Large</p>
              <div className="flex items-center gap-4 flex-wrap">
                <span 
                  className="inline-block rounded-full"
                  style={{ 
                    background: 'linear-gradient(145deg, rgba(255, 56, 121, 1) 0%, rgba(245, 126, 165, 1) 100%)',
                    padding: '2px'
                  }}
                >
                  <span 
                    className="flex items-center gap-2 px-3 py-3 justify-center rounded-full bg-white"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 1)',
                      borderRadius: '100px',
                      background: 'rgba(255, 255, 255, 1)',
                      backgroundImage: 'none',
                      color: 'rgba(10, 10, 10, 1)',
                      width: 'fit-content',
                      height: '48px'
                    }}
                  >
                    <AlertCircle className="w-4 h-4" />
                    Low Confidence (48%)
                  </span>
                </span>
                
                <span 
                  className="inline-block rounded-full"
                  style={{ 
                    background: 'linear-gradient(145deg, rgba(255, 56, 121, 1) 0%, rgba(245, 126, 165, 1) 100%)',
                    padding: '2px'
                  }}
                >
                  <span 
                    className="flex items-center gap-2 px-3 py-3 justify-center rounded-full bg-white"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 1)',
                      borderRadius: '100px',
                      background: 'rgba(255, 255, 255, 1)',
                      backgroundImage: 'none',
                      color: 'rgba(10, 10, 10, 1)',
                      width: 'fit-content',
                      height: '48px'
                    }}
                  >
                    <AlertCircle className="w-4 h-4" />
                    Low Confidence
                  </span>
                </span>
                
                <span 
                  className="inline-block rounded-full"
                  style={{ 
                    background: 'linear-gradient(145deg, rgba(255, 56, 121, 1) 0%, rgba(245, 126, 165, 1) 100%)',
                    padding: '2px'
                  }}
                >
                  <span 
                    className="flex items-center gap-2 px-3 py-3 justify-center rounded-full bg-white"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 1)',
                      borderRadius: '100px',
                      background: 'rgba(255, 255, 255, 1)',
                      backgroundImage: 'none',
                      color: 'rgba(10, 10, 10, 1)',
                      width: 'fit-content',
                      height: '48px'
                    }}
                  >
                    <AlertCircle className="w-4 h-4" />
                    48%
                  </span>
                </span>
              </div>
            </div>

            {/* Medium Size */}
            <div className="mb-8">
              <p className="text-muted-foreground mb-3">Medium</p>
              <div className="flex items-center gap-3 flex-wrap">
                <span 
                  className="inline-block rounded-full"
                  style={{ 
                    background: 'linear-gradient(145deg, rgba(255, 56, 121, 1) 0%, rgba(245, 126, 165, 1) 100%)',
                    padding: '2px'
                  }}
                >
                  <span 
                    className="flex items-center gap-1.5 px-2 py-2 justify-center rounded-full bg-white"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 1)',
                      borderRadius: '100px',
                      background: 'rgba(255, 255, 255, 1)',
                      backgroundImage: 'none',
                      color: 'rgba(10, 10, 10, 1)',
                      width: 'fit-content'
                    }}
                  >
                    <AlertCircle className="w-3.5 h-3.5" />
                    Low Confidence (48%)
                  </span>
                </span>
                
                <span 
                  className="inline-block rounded-full"
                  style={{ 
                    background: 'linear-gradient(145deg, rgba(255, 56, 121, 1) 0%, rgba(245, 126, 165, 1) 100%)',
                    padding: '2px'
                  }}
                >
                  <span 
                    className="flex items-center gap-1.5 px-2 py-2 justify-center rounded-full bg-white"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 1)',
                      borderRadius: '100px',
                      background: 'rgba(255, 255, 255, 1)',
                      backgroundImage: 'none',
                      color: 'rgba(10, 10, 10, 1)',
                      width: 'fit-content'
                    }}
                  >
                    <AlertCircle className="w-3.5 h-3.5" />
                    Low Confidence
                  </span>
                </span>
                
                <span 
                  className="inline-block rounded-full"
                  style={{ 
                    background: 'linear-gradient(145deg, rgba(255, 56, 121, 1) 0%, rgba(245, 126, 165, 1) 100%)',
                    padding: '2px'
                  }}
                >
                  <span 
                    className="flex items-center gap-1.5 px-2 py-2 justify-center rounded-full bg-white"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 1)',
                      borderRadius: '100px',
                      background: 'rgba(255, 255, 255, 1)',
                      backgroundImage: 'none',
                      color: 'rgba(10, 10, 10, 1)',
                      width: 'fit-content'
                    }}
                  >
                    <AlertCircle className="w-3.5 h-3.5" />
                    48%
                  </span>
                </span>
              </div>
            </div>

            {/* Small Size */}
            <div>
              <p className="text-muted-foreground mb-3">Small</p>
              <div className="flex items-center gap-2 flex-wrap">
                <span 
                  className="inline-block rounded-full"
                  style={{ 
                    background: 'linear-gradient(145deg, rgba(255, 56, 121, 1) 0%, rgba(245, 126, 165, 1) 100%)',
                    padding: '2px'
                  }}
                >
                  <span 
                    className="flex items-center gap-1 px-1 py-1 justify-center rounded-full bg-white"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 1)',
                      borderRadius: '100px',
                      background: 'rgba(255, 255, 255, 1)',
                      backgroundImage: 'none',
                      color: 'rgba(10, 10, 10, 1)',
                      width: 'fit-content'
                    }}
                  >
                    <AlertCircle className="w-3 h-3" />
                    <span className="text-xs">Low Confidence (48%)</span>
                  </span>
                </span>
                
                <span 
                  className="inline-block rounded-full"
                  style={{ 
                    background: 'linear-gradient(145deg, rgba(255, 56, 121, 1) 0%, rgba(245, 126, 165, 1) 100%)',
                    padding: '2px'
                  }}
                >
                  <span 
                    className="flex items-center gap-1 px-1 py-1 justify-center rounded-full bg-white"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 1)',
                      borderRadius: '100px',
                      background: 'rgba(255, 255, 255, 1)',
                      backgroundImage: 'none',
                      color: 'rgba(10, 10, 10, 1)',
                      width: 'fit-content'
                    }}
                  >
                    <AlertCircle className="w-3 h-3" />
                    <span className="text-xs">Low Confidence</span>
                  </span>
                </span>
                
                <span 
                  className="inline-block rounded-full"
                  style={{ 
                    background: 'linear-gradient(145deg, rgba(255, 56, 121, 1) 0%, rgba(245, 126, 165, 1) 100%)',
                    padding: '2px'
                  }}
                >
                  <span 
                    className="flex items-center gap-1 px-1 py-1 justify-center rounded-full bg-white"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 1)',
                      borderRadius: '100px',
                      background: 'rgba(255, 255, 255, 1)',
                      backgroundImage: 'none',
                      color: 'rgba(10, 10, 10, 1)',
                      width: 'fit-content'
                    }}
                  >
                    <AlertCircle className="w-3 h-3" />
                    <span className="text-xs">48%</span>
                  </span>
                </span>
              </div>
            </div>
          </div>

          {/* Filled */}
          <div>
            <h5 className="text-foreground font-semibold mb-6">Filled</h5>
            
            {/* Large Size */}
            <div className="mb-8">
              <p className="text-muted-foreground mb-3">Large</p>
              <div className="flex items-center gap-4 flex-wrap">
                <span 
                  className="inline-flex flex-row items-center gap-2 px-3 py-3 rounded-full text-pink-950"
                  style={{ 
                    background: 'linear-gradient(93.54deg, #FF3879 0.05%, #F57EA5 99.99%)',
                    border: '1px solid rgba(255, 56, 121, 0.5)'
                  }}
                >
                  <AlertCircle className="w-4 h-4" />
                  Low Confidence (48%)
                </span>
                
                <span 
                  className="inline-flex flex-row items-center gap-2 px-3 py-3 rounded-full text-pink-950"
                  style={{ 
                    background: 'linear-gradient(93.54deg, #FF3879 0.05%, #F57EA5 99.99%)',
                    border: '1px solid rgba(255, 56, 121, 0.5)'
                  }}
                >
                  <AlertCircle className="w-4 h-4" />
                  Low Confidence
                </span>
                
                <span 
                  className="inline-flex flex-row items-center gap-2 px-3 py-3 rounded-full text-pink-950"
                  style={{ 
                    background: 'linear-gradient(93.54deg, #FF3879 0.05%, #F57EA5 99.99%)',
                    border: '1px solid rgba(255, 56, 121, 0.5)'
                  }}
                >
                  <AlertCircle className="w-4 h-4" />
                  48%
                </span>
              </div>
            </div>
            
            {/* Medium Size */}
            <div className="mb-8">
              <p className="text-muted-foreground mb-3">Medium</p>
              <div className="flex items-center gap-3 flex-wrap">
                <span 
                  className="inline-flex flex-row items-center gap-1.5 px-2 py-2 rounded-full text-pink-950"
                  style={{ 
                    background: 'linear-gradient(93.54deg, #FF3879 0.05%, #F57EA5 99.99%)',
                    border: '1px solid rgba(255, 56, 121, 0.5)'
                  }}
                >
                  <AlertCircle className="w-3.5 h-3.5" />
                  Low Confidence (48%)
                </span>
                
                <span 
                  className="inline-flex flex-row items-center gap-1.5 px-2 py-2 rounded-full text-pink-950"
                  style={{ 
                    background: 'linear-gradient(93.54deg, #FF3879 0.05%, #F57EA5 99.99%)',
                    border: '1px solid rgba(255, 56, 121, 0.5)'
                  }}
                >
                  <AlertCircle className="w-3.5 h-3.5" />
                  Low Confidence
                </span>
                
                <span 
                  className="inline-flex flex-row items-center gap-1.5 px-2 py-2 rounded-full text-pink-950"
                  style={{ 
                    background: 'linear-gradient(93.54deg, #FF3879 0.05%, #F57EA5 99.99%)',
                    border: '1px solid rgba(255, 56, 121, 0.5)'
                  }}
                >
                  <AlertCircle className="w-3.5 h-3.5" />
                  48%
                </span>
              </div>
            </div>
            
            {/* Small Size */}
            <div>
              <p className="text-muted-foreground mb-3">Small</p>
              <div className="flex items-center gap-2 flex-wrap">
                <span 
                  className="inline-flex flex-row items-center gap-1 px-1 py-1 rounded-full text-pink-950"
                  style={{ 
                    background: 'linear-gradient(93.54deg, #FF3879 0.05%, #F57EA5 99.99%)',
                    border: '1px solid rgba(255, 56, 121, 0.5)'
                  }}
                >
                  <AlertCircle className="w-3 h-3" />
                  <span className="text-xs">Low Confidence (48%)</span>
                </span>
                
                <span 
                  className="inline-flex flex-row items-center gap-1 px-1 py-1 rounded-full text-pink-950"
                  style={{ 
                    background: 'linear-gradient(93.54deg, #FF3879 0.05%, #F57EA5 99.99%)',
                    border: '1px solid rgba(255, 56, 121, 0.5)'
                  }}
                >
                  <AlertCircle className="w-3 h-3" />
                  <span className="text-xs">Low Confidence</span>
                </span>
                
                <span 
                  className="inline-flex flex-row items-center gap-1 px-1 py-1 rounded-full text-pink-950"
                  style={{ 
                    background: 'linear-gradient(93.54deg, #FF3879 0.05%, #F57EA5 99.99%)',
                    border: '1px solid rgba(255, 56, 121, 0.5)'
                  }}
                >
                  <AlertCircle className="w-3 h-3" />
                  <span className="text-xs">48%</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-border pt-8">
        <h4 className="text-foreground mb-6">Usage Examples</h4>
      </div>

      {/* Example 1: Ambiguous Autocomplete - Large */}
      <div className="bg-card rounded-lg border border-border p-6 space-y-4">
        <div className="mb-3">
          <h4 className="text-foreground">Example 1: Ambiguous Autocomplete (Large)</h4>
        </div>
        <div className="space-y-3">
          <div className="p-4 bg-muted rounded-lg">
            <div className="flex items-start justify-between mb-2">
              <div className="flex-1">
                <p className="text-foreground mb-2">Suggested completion:</p>
                <p className="text-muted-foreground">"Send report to marketing team"</p>
              </div>
              <span 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-pink-950 border border-pink-400/50"
                style={{ background: 'linear-gradient(93.54deg, #FF3879 0.05%, #F57EA5 99.99%)' }}
              >
                <AlertCircle className="w-4 h-4" />
                52%
              </span>
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              The AI is unsure about this suggestion. Please review and edit as needed.
            </p>
          </div>
        </div>
      </div>

      {/* Example 2: Search Results - Medium */}
      <div className="bg-card rounded-lg border border-border p-6">
        <div className="mb-3">
          <h4 className="text-foreground">Example 2: Search Results Relevance (Medium)</h4>
        </div>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
            <span className="text-foreground">Troubleshooting Tips</span>
            <span 
              className="inline-flex items-center gap-1.5 px-2 py-2 rounded-full text-pink-950 border border-pink-400/50"
              style={{ background: 'linear-gradient(93.54deg, #FF3879 0.05%, #F57EA5 99.99%)' }}
            >
              <AlertCircle className="w-3.5 h-3.5" />
              52%
            </span>
          </div>
          <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
            <span className="text-foreground">API Documentation</span>
            <span 
              className="inline-flex items-center gap-1.5 px-2 py-2 rounded-full text-orange-900 border border-orange-400/50"
              style={{ background: 'linear-gradient(93.54deg, #FF7935 0.05%, #F5A57C 99.99%)' }}
            >
              <TrendingUp className="w-3.5 h-3.5" />
              68%
            </span>
          </div>
          <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
            <span className="text-foreground">User Guide</span>
            <span 
              className="inline-flex items-center gap-1.5 px-2 py-2 rounded-full text-pink-950 border border-pink-400/50"
              style={{ background: 'linear-gradient(93.54deg, #FF3879 0.05%, #F57EA5 99.99%)' }}
            >
              <AlertCircle className="w-3.5 h-3.5" />
              45%
            </span>
          </div>
        </div>
      </div>

      {/* Example 3: Small Tags in Data Table */}
      <div className="bg-card rounded-lg border border-border p-6">
        <div className="mb-3">
          <h4 className="text-foreground">Example 3: Data Classification (Small)</h4>
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between p-2 bg-muted rounded-lg">
            <span className="text-foreground">Invoice_2024.pdf</span>
            <div className="flex items-center gap-2">
              <span 
                className="inline-flex items-center gap-1 px-1 py-1 rounded-full text-orange-900 border border-orange-400/50"
                style={{ background: 'linear-gradient(93.54deg, #FF7935 0.05%, #F5A57C 99.99%)' }}
              >
                <TrendingUp className="w-3 h-3" />
                <span className="text-xs">Financial</span>
              </span>
              <span 
                className="inline-flex items-center gap-1 px-1 py-1 rounded-full text-orange-900 border border-orange-400/50"
                style={{ background: 'linear-gradient(93.54deg, #FF7935 0.05%, #F5A57C 99.99%)' }}
              >
                <TrendingUp className="w-3 h-3" />
                <span className="text-xs">72%</span>
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between p-2 bg-muted rounded-lg">
            <span className="text-foreground">Notes_meeting.txt</span>
            <div className="flex items-center gap-2">
              <span 
                className="inline-flex items-center gap-1 px-1 py-1 rounded-full text-pink-950 border border-pink-400/50"
                style={{ background: 'linear-gradient(93.54deg, #FF3879 0.05%, #F57EA5 99.99%)' }}
              >
                <AlertCircle className="w-3 h-3" />
                <span className="text-xs">General</span>
              </span>
              <span 
                className="inline-flex items-center gap-1 px-1 py-1 rounded-full text-pink-950 border border-pink-400/50"
                style={{ background: 'linear-gradient(93.54deg, #FF3879 0.05%, #F57EA5 99.99%)' }}
              >
                <AlertCircle className="w-3 h-3" />
                <span className="text-xs">41%</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Example 4: Translation Warning - Mixed Sizes */}
      <div className="bg-card rounded-lg border border-border p-6">
        <div className="mb-3">
          <h4 className="text-foreground">Example 4: Translation Quality Warning (Mixed Sizes)</h4>
        </div>
        <div className="space-y-3">
          <div className="p-4 bg-muted rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-muted-foreground">Original (English)</span>
            </div>
            <p className="text-foreground">"The early bird catches the worm"</p>
          </div>
          <div className="p-4 bg-pink-50 rounded-lg border border-pink-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-muted-foreground">Translated (Japanese)</span>
              <span 
                className="inline-flex items-center gap-1.5 px-2 py-2 rounded-full text-pink-950 border border-pink-400/50"
                style={{ background: 'linear-gradient(93.54deg, #FF3879 0.05%, #F57EA5 99.99%)' }}
              >
                <AlertCircle className="w-3.5 h-3.5" />
                45% Quality
              </span>
            </div>
            <p className="text-foreground mb-3">「早起きは三文の徳」</p>
            <div className="flex items-center gap-2 text-xs text-pink-700 bg-pink-100 p-3 rounded-md">
              <span 
                className="inline-flex items-center gap-1 px-1 py-1 rounded-full text-pink-950 border border-pink-400/50"
                style={{ background: 'linear-gradient(93.54deg, #FF3879 0.05%, #F57EA5 99.99%)' }}
              >
                <AlertCircle className="w-3 h-3" />
                <span className="text-xs">Warning</span>
              </span>
              <span>This idiom may not translate well. Consider using a different phrase or providing context.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}