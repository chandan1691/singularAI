import { AlertCircle } from "lucide-react";

export function ErrorMessageInline() {
  return (
    <div className="space-y-8">
      {/* Component Preview */}
      <div>
        <h4 className="text-foreground mb-4">Component Preview</h4>
        <div className="bg-muted rounded-lg border border-border p-12">
          
          {/* Inline Error Message */}
          <div>
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
                      <AlertCircle className="w-4 h-4 text-destructive flex-shrink-0" />
                      <span className="text-xs text-destructive">Something went wrong. Please try again.</span>
                    </div>
                  </div>

                  {/* Hover */}
                  <div className="bg-card p-4 rounded-lg border border-border">
                    <p className="text-muted-foreground mb-3 text-xs">Hover</p>
                    <div className="flex items-center gap-2 py-1 cursor-pointer animate-in fade-in slide-in-from-left-2 duration-500">
                      <AlertCircle className="w-4 h-4 text-destructive flex-shrink-0" />
                      <span className="text-xs text-destructive font-medium">Something went wrong. Please try again.</span>
                    </div>
                  </div>

                  {/* AI-triggered entry */}
                  <div className="bg-card p-4 rounded-lg border border-border">
                    <p className="text-muted-foreground mb-3 text-xs">AI-triggered entry</p>
                    <div className="flex items-center gap-2 py-1 animate-in fade-in slide-in-from-left-2 duration-300">
                      <AlertCircle className="w-4 h-4 text-destructive flex-shrink-0" />
                      <span className="text-xs text-destructive">AI model is currently unavailable.</span>
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
                      <AlertCircle className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <p className="text-xs text-destructive">Something went wrong. Please try again.</p>
                        <p className="text-xs text-destructive mt-1">The AI service encountered an error while processing your request. This may be temporary.</p>
                      </div>
                    </div>
                  </div>

                  {/* Hover */}
                  <div className="bg-card p-4 rounded-lg border border-border">
                    <p className="text-muted-foreground mb-3 text-xs">Hover</p>
                    <div className="flex items-start gap-2 py-1 cursor-pointer animate-in fade-in slide-in-from-left-2 duration-500">
                      <AlertCircle className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <p className="text-xs text-destructive font-medium">Something went wrong. Please try again.</p>
                        <p className="text-xs text-destructive mt-1">The AI service encountered an error while processing your request. This may be temporary.</p>
                      </div>
                    </div>
                  </div>

                  {/* AI-triggered entry */}
                  <div className="bg-card p-4 rounded-lg border border-border">
                    <p className="text-muted-foreground mb-3 text-xs">AI-triggered entry</p>
                    <div className="flex items-start gap-2 py-1 animate-in fade-in slide-in-from-left-2 duration-300">
                      <AlertCircle className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <p className="text-xs text-destructive">Model failed to generate a response.</p>
                        <p className="text-xs text-destructive mt-1">Your input was received but the model couldn't process it. Try rephrasing or simplifying your request.</p>
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

      {/* Example 1: Chat with Inline Error */}
      <div className="bg-card rounded-lg border border-border p-6">
        <div className="mb-3">
          <h4 className="text-foreground">Example 1: Inline Error in Chat</h4>
        </div>
        <div className="space-y-4 max-w-2xl">
          {/* User message */}
          <div className="flex justify-end">
            <div className="bg-primary text-white px-4 py-3 rounded-2xl rounded-tr-sm max-w-md">
              <p className="text-sm">Generate a summary of recent events</p>
            </div>
          </div>
          {/* AI error response */}
          <div className="flex justify-start">
            <div className="space-y-3 max-w-md">
              <div className="bg-muted px-4 py-3 rounded-2xl rounded-tl-sm">
                <p className="text-sm text-foreground">I'm unable to complete that request.</p>
              </div>
              <div className="flex items-center gap-2 px-1 animate-in fade-in slide-in-from-left-2 duration-500">
                <AlertCircle className="w-4 h-4 text-destructive flex-shrink-0" />
                <span className="text-xs text-destructive">Model failed to generate a response.</span>
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
            className="w-full rounded-lg bg-destructive/10 min-h-[100px] focus:outline-none focus:ring-2 focus:ring-destructive text-sm p-3"
            style={{
              color: '#111827'
            }}
            placeholder="Enter product description..."
            defaultValue="This product is the best and will solve all your problems guaranteed!"
          />
          <div className="flex items-start gap-2 py-1 animate-in fade-in slide-in-from-left-2 duration-500">
            <AlertCircle className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="text-xs text-destructive">AI detected potentially misleading claims.</p>
              <p className="text-xs text-destructive mt-1">Consider revising to avoid absolute guarantees and unverifiable statements.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Example 3: Multiple Inline Errors */}
      <div className="bg-card rounded-lg border border-border p-6">
        <div className="mb-3">
          <h4 className="text-foreground">Example 3: Form with Multiple AI Validation Errors</h4>
        </div>
        <div className="max-w-md space-y-4">
          <div className="space-y-2">
            <label className="text-foreground block text-sm">Email Subject</label>
            <input
              type="text"
              className="w-full rounded-lg bg-destructive/10 focus:outline-none focus:ring-2 focus:ring-destructive text-sm p-3"
              style={{
                color: '#111827'
              }}
              defaultValue="URGENT!!! Read this NOW!!!"
            />
            <div className="flex items-center gap-2 py-1 animate-in fade-in slide-in-from-left-2 duration-500">
              <AlertCircle className="w-4 h-4 text-destructive flex-shrink-0" />
              <span className="text-xs text-destructive">Excessive urgency detected. Subject may be flagged as spam.</span>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-foreground block text-sm">Message Body</label>
            <textarea
              className="w-full rounded-lg bg-muted min-h-[80px] focus:outline-none focus:ring-2 focus:ring-primary text-sm p-3"
              style={{
                color: '#111827'
              }}
              placeholder="Enter your message..."
              defaultValue="Hello, I wanted to reach out about..."
            />
            <div className="flex items-center gap-2 py-1 text-primary animate-in fade-in slide-in-from-left-2 duration-500">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span className="text-xs">Message looks good!</span>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-foreground block text-sm">Recipient</label>
            <input
              type="email"
              className="w-full rounded-lg bg-destructive/10 focus:outline-none focus:ring-2 focus:ring-destructive text-sm p-3"
              style={{
                color: '#111827'
              }}
              defaultValue="notanemail"
            />
            <div className="flex items-center gap-2 py-1 animate-in fade-in slide-in-from-left-2 duration-500">
              <AlertCircle className="w-4 h-4 text-destructive flex-shrink-0" />
              <span className="text-xs text-destructive">Invalid email format detected.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}