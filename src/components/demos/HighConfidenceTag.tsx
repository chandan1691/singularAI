import { CheckCircle2 } from "lucide-react";

export function HighConfidenceTag() {
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
              <span 
                className="inline-flex items-center gap-2 px-3 py-3 rounded-full text-green-900 border border-green-400/50 bg-positive-green"
              >
                <CheckCircle2 className="w-4 h-4" />
                High Confidence (94%)
              </span>
              
              <span 
                className="inline-flex items-center gap-2 px-3 py-3 rounded-full text-green-900 border border-green-400/50 bg-positive-green"
              >
                <CheckCircle2 className="w-4 h-4" />
                High Confidence
              </span>
              
              <span 
                className="inline-flex items-center gap-2 px-3 py-3 rounded-full text-green-900 border border-green-400/50 bg-positive-green"
              >
                <CheckCircle2 className="w-4 h-4" />
                94%
              </span>
            </div>
          </div>

          {/* Medium Size */}
          <div className="mb-8">
            <p className="text-muted-foreground mb-3">Medium</p>
            <div className="flex items-center gap-3 flex-wrap">
              <span 
                className="inline-flex items-center gap-1.5 px-2 py-2 rounded-full text-green-900 border border-green-400/50 bg-positive-green"
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
                High Confidence (94%)
              </span>
              
              <span 
                className="inline-flex items-center gap-1.5 px-2 py-2 rounded-full text-green-900 border border-green-400/50 bg-positive-green"
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
                High Confidence
              </span>
              
              <span 
                className="inline-flex items-center gap-1.5 px-2 py-2 rounded-full text-green-900 border border-green-400/50 bg-positive-green"
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
                94%
              </span>
            </div>
          </div>

          {/* Small Size */}
          <div className="mb-8">
            <p className="text-muted-foreground mb-3">Small</p>
            <div className="flex items-center gap-2 flex-wrap">
              <span 
                className="inline-flex items-center gap-1 px-1 py-1 rounded-full text-green-900 border border-green-400/50 bg-positive-green"
              >
                <CheckCircle2 className="w-3 h-3" />
                <span className="text-xs">High Confidence (94%)</span>
              </span>
              
              <span 
                className="inline-flex items-center gap-1 px-1 py-1 rounded-full text-green-900 border border-green-400/50 bg-positive-green"
              >
                <CheckCircle2 className="w-3 h-3" />
                <span className="text-xs">High Confidence</span>
              </span>
              
              <span 
                className="inline-flex items-center gap-1 px-1 py-1 rounded-full text-green-900 border border-green-400/50 bg-positive-green"
              >
                <CheckCircle2 className="w-3 h-3" />
                <span className="text-xs">94%</span>
              </span>
            </div>
          </div>

          {/* Filled Variation */}
          <div>
            <p className="text-muted-foreground mb-3">Filled</p>
            <div className="flex items-center gap-4 flex-wrap">
              {/* Large Filled */}
              <span 
                className="inline-flex flex-row items-center gap-2 px-3 py-3 rounded-full text-green-950"
                style={{ 
                  background: 'linear-gradient(93.54deg, #56EA9B 0.05%, #9CF3BD 99.99%)',
                  border: '1px solid rgba(5, 223, 114, 0.5)'
                }}
              >
                <CheckCircle2 className="w-4 h-4" />
                High Confidence (94%)
              </span>
              
              <span 
                className="inline-flex flex-row items-center gap-2 px-3 py-3 rounded-full text-green-950"
                style={{ 
                  background: 'linear-gradient(93.54deg, #56EA9B 0.05%, #9CF3BD 99.99%)',
                  border: '1px solid rgba(5, 223, 114, 0.5)'
                }}
              >
                <CheckCircle2 className="w-4 h-4" />
                High Confidence
              </span>
              
              <span 
                className="inline-flex flex-row items-center gap-2 px-3 py-3 rounded-full text-green-950"
                style={{ 
                  background: 'linear-gradient(93.54deg, #56EA9B 0.05%, #9CF3BD 99.99%)',
                  border: '1px solid rgba(5, 223, 114, 0.5)'
                }}
              >
                <CheckCircle2 className="w-4 h-4" />
                94%
              </span>
            </div>
            
            {/* Medium Filled */}
            <div className="flex items-center gap-3 flex-wrap mt-4">
              <span 
                className="inline-flex flex-row items-center gap-1.5 px-2 py-2 rounded-full text-green-950"
                style={{ 
                  background: 'linear-gradient(93.54deg, #56EA9B 0.05%, #9CF3BD 99.99%)',
                  border: '1px solid rgba(5, 223, 114, 0.5)'
                }}
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
                High Confidence (94%)
              </span>
              
              <span 
                className="inline-flex flex-row items-center gap-1.5 px-2 py-2 rounded-full text-green-950"
                style={{ 
                  background: 'linear-gradient(93.54deg, #56EA9B 0.05%, #9CF3BD 99.99%)',
                  border: '1px solid rgba(5, 223, 114, 0.5)'
                }}
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
                High Confidence
              </span>
              
              <span 
                className="inline-flex flex-row items-center gap-1.5 px-2 py-2 rounded-full text-green-950"
                style={{ 
                  background: 'linear-gradient(93.54deg, #56EA9B 0.05%, #9CF3BD 99.99%)',
                  border: '1px solid rgba(5, 223, 114, 0.5)'
                }}
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
                94%
              </span>
            </div>
            
            {/* Small Filled */}
            <div className="flex items-center gap-2 flex-wrap mt-4">
              <span 
                className="inline-flex flex-row items-center gap-1 px-1 py-1 rounded-full text-green-950"
                style={{ 
                  background: 'linear-gradient(93.54deg, #56EA9B 0.05%, #9CF3BD 99.99%)',
                  border: '1px solid rgba(5, 223, 114, 0.5)'
                }}
              >
                <CheckCircle2 className="w-3 h-3" />
                <span className="text-xs">High Confidence (94%)</span>
              </span>
              
              <span 
                className="inline-flex flex-row items-center gap-1 px-1 py-1 rounded-full text-green-950"
                style={{ 
                  background: 'linear-gradient(93.54deg, #56EA9B 0.05%, #9CF3BD 99.99%)',
                  border: '1px solid rgba(5, 223, 114, 0.5)'
                }}
              >
                <CheckCircle2 className="w-3 h-3" />
                <span className="text-xs">High Confidence</span>
              </span>
              
              <span 
                className="inline-flex flex-row items-center gap-1 px-1 py-1 rounded-full text-green-950"
                style={{ 
                  background: 'linear-gradient(93.54deg, #56EA9B 0.05%, #9CF3BD 99.99%)',
                  border: '1px solid rgba(5, 223, 114, 0.5)'
                }}
              >
                <CheckCircle2 className="w-3 h-3" />
                <span className="text-xs">94%</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-border pt-8">
        <h4 className="text-foreground mb-6">Usage Examples</h4>
      </div>

      {/* Example 1: Content Classification - Large */}
      <div className="bg-card rounded-lg border border-border p-6 space-y-4">
        <div className="mb-3">
          <h4 className="text-foreground">Example 1: Content Classification (Large)</h4>
        </div>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <p className="text-muted-foreground mb-3">
              Based on the content analysis, this document has been categorized as a "Technical Specification" with supporting evidence from terminology and structure patterns.
            </p>
            <div className="flex items-center gap-2">
              <span 
                className="inline-flex items-center gap-2 px-3 py-3 rounded-full text-green-900 border border-green-400/50 bg-positive-green"
              >
                <CheckCircle2 className="w-4 h-4" />
                High Confidence (94%)
              </span>
            </div>
          </div>
        </div>
        <div className="text-xs text-muted-foreground bg-muted p-3 rounded-md">
          <strong>Note:</strong> This is an AI-powered classification. Review the categorization to ensure accuracy.
        </div>
      </div>

      {/* Example 2: Search Results - Medium */}
      <div className="bg-card rounded-lg border border-border p-6">
        <div className="mb-3">
          <h4 className="text-foreground">Example 2: Search Results Relevance (Medium)</h4>
        </div>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
            <span className="text-foreground">Getting Started Guide</span>
            <span 
              className="inline-flex items-center gap-1.5 px-2 py-2 rounded-full text-green-900 border border-green-400/50 bg-positive-green"
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              94%
            </span>
          </div>
          <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
            <span className="text-foreground">Advanced Tutorial</span>
            <span 
              className="inline-flex items-center gap-1.5 px-2 py-2 rounded-full text-green-900 border border-green-400/50 bg-positive-green"
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              89%
            </span>
          </div>
          <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
            <span className="text-foreground">Quick Reference</span>
            <span 
              className="inline-flex items-center gap-1.5 px-2 py-2 rounded-full text-green-900 border border-green-400/50 bg-positive-green"
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              91%
            </span>
          </div>
        </div>
      </div>

      {/* Example 3: Inline Tag - Small */}
      <div className="bg-card rounded-lg border border-border p-6">
        <div className="mb-3">
          <h4 className="text-foreground">Example 3: Inline Tags in List (Small)</h4>
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-foreground">Product Classification:</span>
            <span 
              className="inline-flex items-center gap-1 px-1 py-1 rounded-full text-green-900 border border-green-400/50 bg-positive-green"
            >
              <CheckCircle2 className="w-3 h-3" />
              <span className="text-xs">Electronics</span>
            </span>
            <span 
              className="inline-flex items-center gap-1 px-1 py-1 rounded-full text-green-900 border border-green-400/50 bg-positive-green"
            >
              <CheckCircle2 className="w-3 h-3" />
              <span className="text-xs">96%</span>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-foreground">Sentiment Analysis:</span>
            <span 
              className="inline-flex items-center gap-1 px-1 py-1 rounded-full text-green-900 border border-green-400/50 bg-positive-green"
            >
              <CheckCircle2 className="w-3 h-3" />
              <span className="text-xs">Positive</span>
            </span>
            <span 
              className="inline-flex items-center gap-1 px-1 py-1 rounded-full text-green-900 border border-green-400/50 bg-positive-green"
            >
              <CheckCircle2 className="w-3 h-3" />
              <span className="text-xs">92%</span>
            </span>
          </div>
        </div>
      </div>

      {/* Example 4: Translation Quality - Mixed Sizes */}
      <div className="bg-card rounded-lg border border-border p-6">
        <div className="mb-3">
          <h4 className="text-foreground">Example 4: Translation Quality (Mixed Sizes)</h4>
        </div>
        <div className="space-y-3">
          <div className="p-4 bg-muted rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-muted-foreground">Original (English)</span>
              <span 
                className="inline-flex items-center gap-1.5 px-2 py-2 rounded-full text-green-900 border border-green-400/50 bg-positive-green"
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
                97% Quality
              </span>
            </div>
            <p className="text-foreground">Welcome to our platform</p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-muted-foreground">Translated (Spanish)</span>
              <span 
                className="inline-flex items-center gap-1 px-1 py-1 rounded-full text-green-900 border border-green-400/50 bg-positive-green"
              >
                <CheckCircle2 className="w-3 h-3" />
                <span className="text-xs">Auto</span>
              </span>
            </div>
            <p className="text-foreground">Bienvenido a nuestra plataforma</p>
          </div>
        </div>
      </div>

      {/* Example 5: Filled Variation - Dashboard Cards */}
      <div className="bg-card rounded-lg border border-border p-6">
        <div className="mb-3">
          <h4 className="text-foreground">Example 5: Filled Variation (Dashboard Cards)</h4>
        </div>
        <div className="space-y-3">
          <div className="p-4 bg-muted rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-foreground font-medium">AI Analysis Complete</span>
              <span 
                className="inline-flex flex-row items-center gap-2 px-3 py-3 rounded-full text-green-950"
                style={{ 
                  background: 'linear-gradient(93.54deg, #56EA9B 0.05%, #9CF3BD 99.99%)',
                  border: '1px solid rgba(5, 223, 114, 0.5)'
                }}
              >
                <CheckCircle2 className="w-4 h-4" />
                94%
              </span>
            </div>
            <p className="text-muted-foreground text-sm">Document classification completed with high confidence</p>
          </div>
          <div className="p-4 bg-muted rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-foreground font-medium">Search Results</span>
              <span 
                className="inline-flex flex-row items-center gap-1.5 px-2 py-2 rounded-full text-green-950"
                style={{ 
                  background: 'linear-gradient(93.54deg, #56EA9B 0.05%, #9CF3BD 99.99%)',
                  border: '1px solid rgba(5, 223, 114, 0.5)'
                }}
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
                96%
              </span>
            </div>
            <p className="text-muted-foreground text-sm">Top result matches your query with high relevance</p>
          </div>
          <div className="p-4 bg-muted rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-foreground font-medium">Sentiment Score</span>
              <span 
                className="inline-flex flex-row items-center gap-1 px-1 py-1 rounded-full text-green-950"
                style={{ 
                  background: 'linear-gradient(93.54deg, #56EA9B 0.05%, #9CF3BD 99.99%)',
                  border: '1px solid rgba(5, 223, 114, 0.5)'
                }}
              >
                <CheckCircle2 className="w-3 h-3" />
                <span className="text-xs">Positive</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm">Text analysis indicates positive sentiment</p>
          </div>
        </div>
        <div className="text-xs text-muted-foreground bg-muted p-3 rounded-md mt-4">
          <strong>Note:</strong> The filled variation uses dark green text (text-green-950) on the green gradient background to meet WCAG 2.0 AA contrast requirements (minimum 4.5:1 ratio).
        </div>
      </div>
    </div>
  );
}