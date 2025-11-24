import { Info, AlertTriangle, CheckCircle } from "lucide-react";
import { useState } from "react";

export function HintText() {
  const [inputFocused, setInputFocused] = useState(false);
  const [errorTriggered, setErrorTriggered] = useState(false);

  return (
    <div className="space-y-8">
      {/* Component Preview */}
      <div>
        <h4 className="text-foreground mb-4">Component Preview</h4>
        <div className="bg-muted rounded-lg border border-border p-12">
          {/* Informational Hint */}
          <div className="mb-8">
            <p className="text-muted-foreground mb-4">Informational Hint</p>
            <div className="space-y-4">
              {/* Idle State */}
              <div className="bg-card p-4 rounded-lg border border-border">
                <p className="text-muted-foreground mb-2 text-xs">Idle State</p>
                <div className="flex items-start gap-2 text-blue-700 text-sm animate-in fade-in slide-in-from-left-2 duration-500">
                  <Info className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span className="text-blue-600">AI may generate sensitive or incomplete content. Review before sharing.</span>
                </div>
              </div>

              {/* Focus Activated */}
              <div className="bg-card p-4 rounded-lg border border-border">
                <p className="text-muted-foreground mb-2 text-xs">Focus Activated</p>
                <div className="flex items-start gap-2 text-blue-800 text-sm animate-in fade-in slide-in-from-left-2 duration-500">
                  <Info className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span className="text-blue-700 font-medium">AI may generate sensitive or incomplete content. Review before sharing.</span>
                </div>
              </div>

              {/* Typing Animation */}
              <div className="bg-card p-4 rounded-lg border border-border">
                <p className="text-muted-foreground mb-2 text-xs">Typing Animation (Slide-in)</p>
                <div className="flex items-start gap-2 text-blue-700 text-sm animate-in fade-in slide-in-from-left-4 duration-500">
                  <Info className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span className="text-blue-600">AI-generated content may require verification from trusted sources.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Cautionary Hint */}
          <div className="mb-8">
            <p className="text-muted-foreground mb-4">Cautionary Hint</p>
            <div className="space-y-4">
              {/* Idle State */}
              <div className="bg-card p-4 rounded-lg border border-border">
                <p className="text-muted-foreground mb-2 text-xs">Idle State</p>
                <div className="flex items-start gap-2 text-amber-700 text-sm animate-in fade-in slide-in-from-left-2 duration-500">
                  <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span className="text-amber-700">This content may require additional review before publishing.</span>
                </div>
              </div>

              {/* Focus Activated */}
              <div className="bg-card p-4 rounded-lg border border-border">
                <p className="text-muted-foreground mb-2 text-xs">Focus Activated</p>
                <div className="flex items-start gap-2 text-amber-800 text-sm animate-in fade-in slide-in-from-left-2 duration-500">
                  <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span className="text-amber-800 font-medium">This content may require additional review before publishing.</span>
                </div>
              </div>

              {/* Error Triggered (Auto-transition) */}
              <div className="bg-card p-4 rounded-lg border border-border">
                <p className="text-muted-foreground mb-2 text-xs">Error Triggered (Auto-transition)</p>
                <div className="flex items-start gap-2 text-red-700 text-sm animate-in fade-in duration-300">
                  <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span className="text-red-700 font-medium">Content violates safety guidelines. Please revise before continuing.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Validation Hint */}
          <div>
            <p className="text-muted-foreground mb-4">Validation Hint</p>
            <div className="space-y-4">
              {/* Idle State */}
              <div className="bg-card p-4 rounded-lg border border-border">
                <p className="text-muted-foreground mb-2 text-xs">Idle State</p>
                <div className="flex items-start gap-2 text-green-700 text-sm animate-in fade-in slide-in-from-left-2 duration-500">
                  <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span className="text-green-700">Content reviewed and approved. Safe to publish.</span>
                </div>
              </div>

              {/* Focus Activated */}
              <div className="bg-card p-4 rounded-lg border border-border">
                <p className="text-muted-foreground mb-2 text-xs">Focus Activated</p>
                <div className="flex items-start gap-2 text-green-800 text-sm animate-in fade-in slide-in-from-left-2 duration-500">
                  <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span className="text-green-800 font-medium">Content reviewed and approved. Safe to publish.</span>
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

      {/* Example 1: Text Input with Informational Hint */}
      <div className="bg-card rounded-lg border border-border p-6">
        <div className="mb-3">
          <h4 className="text-foreground">Example 1: Text Input with Informational Hint</h4>
        </div>
        <div className="space-y-2">
          <label className="text-foreground block">AI-Generated Summary</label>
          <textarea
            className="w-full p-3 border border-gray-300 rounded-md bg-card text-foreground min-h-[100px]"
            placeholder="Enter your content..."
            defaultValue="This is an AI-generated summary of the article..."
          />
          <div className="flex items-start gap-2 text-blue-700 text-sm animate-in fade-in slide-in-from-left-2 duration-500">
            <Info className="w-4 h-4 flex-shrink-0 mt-0.5" />
            <span className="text-blue-600">AI may generate sensitive or incomplete content. Review before sharing.</span>
          </div>
        </div>
      </div>

      {/* Example 2: Comment Box with Cautionary Hint */}
      <div className="bg-card rounded-lg border border-border p-6">
        <div className="mb-3">
          <h4 className="text-foreground">Example 2: Comment Box with Cautionary Hint</h4>
        </div>
        <div className="space-y-2">
          <label className="text-foreground block">Your Comment</label>
          <textarea
            className="w-full p-3 border border-amber-300 rounded-md bg-card text-foreground min-h-[100px] focus:border-amber-400 focus:ring-2 focus:ring-amber-100"
            placeholder="Write your comment..."
            defaultValue="I think this approach is completely wrong and..."
          />
          <div className="flex items-start gap-2 text-amber-700 text-sm animate-in fade-in slide-in-from-left-2 duration-500">
            <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
            <span className="text-amber-700">This content may require additional review before publishing.</span>
          </div>
        </div>
      </div>

      {/* Example 3: Interactive Focus State */}
      <div className="bg-card rounded-lg border border-border p-6">
        <div className="mb-3">
          <h4 className="text-foreground">Example 3: Interactive Focus State</h4>
        </div>
        <div className="space-y-2">
          <label className="text-foreground block">Content Editor</label>
          <textarea
            className={`w-full p-3 rounded-md bg-card text-foreground min-h-[100px] transition-all ${
              inputFocused 
                ? 'border-2 border-blue-400 ring-2 ring-blue-100' 
                : 'border border-gray-300'
            }`}
            placeholder="Start typing..."
            onFocus={() => setInputFocused(true)}
            onBlur={() => setInputFocused(false)}
          />
          <div className={`flex items-start gap-2 text-sm transition-all animate-in fade-in slide-in-from-left-2 duration-500 ${
            inputFocused 
              ? 'text-blue-800 font-medium' 
              : 'text-blue-700'
          }`}>
            <Info className="w-4 h-4 flex-shrink-0 mt-0.5" />
            <span className={inputFocused ? 'text-blue-700' : 'text-blue-600'}>
              AI suggestions will appear as you type. Review carefully before accepting.
            </span>
          </div>
        </div>
      </div>

      {/* Example 4: Error Triggered State */}
      <div className="bg-card rounded-lg border border-border p-6">
        <div className="mb-3">
          <h4 className="text-foreground">Example 4: Error Triggered State</h4>
        </div>
        <div className="space-y-2">
          <label className="text-foreground block">Post Content</label>
          <textarea
            className={`w-full p-3 rounded-md bg-card text-foreground min-h-[100px] transition-all ${
              errorTriggered 
                ? 'border-2 border-red-400 ring-2 ring-red-100' 
                : 'border border-gray-300'
            }`}
            placeholder="Write your post..."
            defaultValue="This content contains inappropriate language and..."
            onChange={(e) => setErrorTriggered(e.target.value.length > 20)}
          />
          <div className={`flex items-start gap-2 text-sm transition-all ${
            errorTriggered 
              ? 'text-red-700 font-medium animate-in fade-in duration-300' 
              : 'text-amber-700'
          }`}>
            <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
            <span className={errorTriggered ? 'text-red-700' : 'text-amber-700'}>
              {errorTriggered 
                ? 'Content violates safety guidelines. Please revise before continuing.' 
                : 'This content may require review before publishing.'}
            </span>
          </div>
        </div>
      </div>

      {/* Example 5: Validation Hint Success */}
      <div className="bg-card rounded-lg border border-border p-6">
        <div className="mb-3">
          <h4 className="text-foreground">Example 5: Validation Hint (Success)</h4>
        </div>
        <div className="space-y-2">
          <label className="text-foreground block">Article Content</label>
          <textarea
            className="w-full p-3 border-2 border-green-300 rounded-md bg-card text-foreground min-h-[100px] ring-2 ring-green-50"
            placeholder="Write your article..."
            defaultValue="This is a well-written article about technology trends..."
          />
          <div className="flex items-start gap-2 text-green-700 text-sm animate-in fade-in duration-500">
            <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
            <span className="text-green-700">Content reviewed and approved. Safe to publish.</span>
          </div>
        </div>
      </div>

      {/* Example 6: Multiple Hints in Form */}
      <div className="bg-card rounded-lg border border-border p-6">
        <div className="mb-3">
          <h4 className="text-foreground">Example 6: Multiple Hints in Form</h4>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-foreground block">Title</label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-md bg-card text-foreground"
              placeholder="Enter title..."
              defaultValue="AI-Powered Content Creation"
            />
            <div className="flex items-start gap-2 text-green-700 text-sm animate-in fade-in slide-in-from-left-2 duration-500">
              <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
              <span className="text-green-700">Title looks good.</span>
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-foreground block">Description</label>
            <textarea
              className="w-full p-3 border border-gray-300 rounded-md bg-card text-foreground min-h-[80px]"
              placeholder="Enter description..."
              defaultValue="Learn how AI can help with content creation..."
            />
            <div className="flex items-start gap-2 text-blue-700 text-sm animate-in fade-in slide-in-from-left-2 duration-500">
              <Info className="w-4 h-4 flex-shrink-0 mt-0.5" />
              <span className="text-blue-600">AI-generated descriptions should be reviewed for accuracy.</span>
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-foreground block">Tags</label>
            <input
              type="text"
              className="w-full p-3 border border-amber-300 rounded-md bg-card text-foreground"
              placeholder="Enter tags..."
              defaultValue="sensitive, controversial, political"
            />
            <div className="flex items-start gap-2 text-amber-700 text-sm animate-in fade-in slide-in-from-left-2 duration-500">
              <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
              <span className="text-amber-700">Some tags may trigger content review. Consider using alternatives.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}