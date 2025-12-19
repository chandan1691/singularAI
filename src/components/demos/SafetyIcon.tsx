import { Shield, ShieldCheck, ShieldAlert, Eye, Flag, CheckCircle, X } from "lucide-react";
import { useState } from "react";

export function SafetyIcon() {
  const [scanningState, setScanningState] = useState(false);

  return (
    <div className="space-y-8">
      {/* Component Preview */}
      <div>
        <h4 className="text-foreground mb-4">Component Preview</h4>
        <div className="bg-muted rounded-lg border border-border p-12">
          {/* Warning Icon */}
          <div className="mb-8">
            <p className="text-muted-foreground mb-4">Warning Icon (Triangle/Shield with Exclamation)</p>
            <div className="flex items-center gap-8 flex-wrap">
              {/* 16px */}
              <div className="space-y-3">
                <p className="text-xs text-muted-foreground">16px</p>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-card rounded-full border border-border">
                    <ShieldAlert className="w-4 h-4 text-chart-3" aria-hidden="true" />
                  </div>
                  <div className="p-3 bg-card rounded-full border border-border hover:bg-muted cursor-pointer transition-all">
                    <ShieldAlert className="w-4 h-4 text-chart-3 hover:text-chart-3" aria-hidden="true" />
                  </div>
                  <div className="p-3 bg-chart-3/20 rounded-full border border-chart-3/40">
                    <ShieldAlert className="w-4 h-4 text-chart-3" aria-hidden="true" />
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">Idle / Hover / Active</p>
              </div>

              {/* 20px */}
              <div className="space-y-3">
                <p className="text-xs text-muted-foreground">20px</p>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-card rounded-full border border-border">
                    <ShieldAlert className="w-5 h-5 text-chart-3" />
                  </div>
                  <div className="p-3 bg-card rounded-full border border-border hover:bg-muted cursor-pointer transition-all">
                    <ShieldAlert className="w-5 h-5 text-chart-3 hover:text-chart-3" />
                  </div>
                  <div className="p-3 bg-chart-3/20 rounded-full border border-chart-3/40">
                    <ShieldAlert className="w-5 h-5 text-chart-3" />
                  </div>
                </div>
              </div>

              {/* 24px */}
              <div className="space-y-3">
                <p className="text-xs text-muted-foreground">24px</p>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-card rounded-full border border-border">
                    <ShieldAlert className="w-6 h-6 text-chart-3" />
                  </div>
                  <div className="p-3 bg-card rounded-full border border-border hover:bg-muted cursor-pointer transition-all">
                    <ShieldAlert className="w-6 h-6 text-chart-3 hover:text-chart-3" />
                  </div>
                  <div className="p-3 bg-chart-3/20 rounded-full border border-chart-3/40">
                    <ShieldAlert className="w-6 h-6 text-chart-3" />
                  </div>
                </div>
              </div>

              {/* 40px */}
              <div className="space-y-3">
                <p className="text-xs text-muted-foreground">40px</p>
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-card rounded-full border border-border">
                    <ShieldAlert className="w-10 h-10 text-chart-3" />
                  </div>
                  <div className="p-4 bg-card rounded-full border border-border hover:bg-muted cursor-pointer transition-all">
                    <ShieldAlert className="w-10 h-10 text-chart-3 hover:text-chart-3" />
                  </div>
                  <div className="p-4 bg-chart-3/20 rounded-full border border-chart-3/40">
                    <ShieldAlert className="w-10 h-10 text-chart-3" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Safe Icon */}
          <div className="mb-8">
            <p className="text-muted-foreground mb-4">Safe Icon (Shield with Checkmark)</p>
            <div className="flex items-center gap-8 flex-wrap">
              {/* 16px */}
              <div className="space-y-3">
                <p className="text-xs text-muted-foreground">16px</p>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-card rounded-full border border-border">
                    <ShieldCheck className="w-4 h-4 text-green-600" />
                  </div>
                  <div className="p-3 bg-card rounded-full border border-border hover:bg-muted cursor-pointer transition-all">
                    <ShieldCheck className="w-4 h-4 text-green-600 hover:text-green-600" />
                  </div>
                  <div className="p-3 bg-green-100 rounded-full border border-green-300">
                    <ShieldCheck className="w-4 h-4 text-green-600" />
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">Idle / Hover / Active</p>
              </div>

              {/* 20px */}
              <div className="space-y-3">
                <p className="text-xs text-muted-foreground">20px</p>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-card rounded-full border border-border">
                    <ShieldCheck className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="p-3 bg-card rounded-full border border-border hover:bg-muted cursor-pointer transition-all">
                    <ShieldCheck className="w-5 h-5 text-green-600 hover:text-green-600" />
                  </div>
                  <div className="p-3 bg-green-100 rounded-full border border-green-300">
                    <ShieldCheck className="w-5 h-5 text-green-600" />
                  </div>
                </div>
              </div>

              {/* 24px */}
              <div className="space-y-3">
                <p className="text-xs text-muted-foreground">24px</p>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-card rounded-full border border-border">
                    <ShieldCheck className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="p-3 bg-card rounded-full border border-border hover:bg-muted cursor-pointer transition-all">
                    <ShieldCheck className="w-6 h-6 text-green-600 hover:text-green-600" />
                  </div>
                  <div className="p-3 bg-green-100 rounded-full border border-green-300">
                    <ShieldCheck className="w-6 h-6 text-green-600" />
                  </div>
                </div>
              </div>

              {/* 40px */}
              <div className="space-y-3">
                <p className="text-xs text-muted-foreground">40px</p>
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-card rounded-full border border-border">
                    <ShieldCheck className="w-10 h-10 text-green-600" />
                  </div>
                  <div className="p-4 bg-card rounded-full border border-border hover:bg-muted cursor-pointer transition-all">
                    <ShieldCheck className="w-10 h-10 text-green-600 hover:text-green-600" />
                  </div>
                  <div className="p-4 bg-green-100 rounded-full border border-green-300">
                    <ShieldCheck className="w-10 h-10 text-green-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Review Required Icon */}
          <div className="mb-8">
            <p className="text-muted-foreground mb-4">Review Required Icon (Eye with Dot)</p>
            <div className="flex items-center gap-8 flex-wrap">
              {/* 16px */}
              <div className="space-y-3">
                <p className="text-xs text-muted-foreground">16px</p>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-card rounded-full border border-border">
                    <Eye className="w-4 h-4 text-blue-800" />
                  </div>
                  <div className="p-3 bg-card rounded-full border border-border hover:bg-muted cursor-pointer transition-all">
                    <Eye className="w-4 h-4 text-blue-700 hover:text-blue-800" />
                  </div>
                  <div className="p-3 bg-blue-100 rounded-full border border-blue-300">
                    <Eye className="w-4 h-4 text-blue-800" />
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">Idle / Hover / Active</p>
              </div>

              {/* 20px */}
              <div className="space-y-3">
                <p className="text-xs text-muted-foreground">20px</p>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-card rounded-full border border-border">
                    <Eye className="w-5 h-5 text-blue-800" />
                  </div>
                  <div className="p-3 bg-card rounded-full border border-border hover:bg-muted cursor-pointer transition-all">
                    <Eye className="w-5 h-5 text-blue-700 hover:text-blue-800" />
                  </div>
                  <div className="p-3 bg-blue-100 rounded-full border border-blue-300">
                    <Eye className="w-5 h-5 text-blue-800" />
                  </div>
                </div>
              </div>

              {/* 24px */}
              <div className="space-y-3">
                <p className="text-xs text-muted-foreground">24px</p>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-card rounded-full border border-border">
                    <Eye className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="p-3 bg-card rounded-full border border-border hover:bg-muted cursor-pointer transition-all">
                    <Eye className="w-6 h-6 text-blue-600 hover:text-blue-600" />
                  </div>
                  <div className="p-3 bg-blue-100 rounded-full border border-blue-300">
                    <Eye className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
              </div>

              {/* 40px */}
              <div className="space-y-3">
                <p className="text-xs text-muted-foreground">40px</p>
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-card rounded-full border border-border">
                    <Eye className="w-10 h-10 text-blue-600" />
                  </div>
                  <div className="p-4 bg-card rounded-full border border-border hover:bg-muted cursor-pointer transition-all">
                    <Eye className="w-10 h-10 text-blue-600 hover:text-blue-600" />
                  </div>
                  <div className="p-4 bg-blue-100 rounded-full border border-blue-300">
                    <Eye className="w-10 h-10 text-blue-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Flagged Icon */}
          <div className="mb-8">
            <p className="text-muted-foreground mb-4">Flagged Icon (Flag Indicator)</p>
            <div className="flex items-center gap-8 flex-wrap">
              {/* 16px */}
              <div className="space-y-3">
                <p className="text-xs text-muted-foreground">16px</p>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-card rounded-full border border-border">
                    <Flag className="w-4 h-4 text-red-600" />
                  </div>
                  <div className="p-3 bg-card rounded-full border border-border hover:bg-muted cursor-pointer transition-all">
                    <Flag className="w-4 h-4 text-red-700 hover:text-red-800" />
                  </div>
                  <div className="p-3 bg-red-100 rounded-full border border-red-300">
                    <Flag className="w-4 h-4 text-red-800" />
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">Idle / Hover / Active</p>
              </div>

              {/* 20px */}
              <div className="space-y-3">
                <p className="text-xs text-muted-foreground">20px</p>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-card rounded-full border border-border">
                    <Flag className="w-5 h-5 text-red-600" />
                  </div>
                  <div className="p-3 bg-card rounded-full border border-border hover:bg-muted cursor-pointer transition-all">
                    <Flag className="w-5 h-5 text-red-700 hover:text-red-800" />
                  </div>
                  <div className="p-3 bg-red-100 rounded-full border border-red-300">
                    <Flag className="w-5 h-5 text-red-800" />
                  </div>
                </div>
              </div>

              {/* 24px */}
              <div className="space-y-3">
                <p className="text-xs text-muted-foreground">24px</p>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-card rounded-full border border-border">
                    <Flag className="w-6 h-6 text-red-600" />
                  </div>
                  <div className="p-3 bg-card rounded-full border border-border hover:bg-muted cursor-pointer transition-all">
                    <Flag className="w-6 h-6 text-red-700 hover:text-red-800" />
                  </div>
                  <div className="p-3 bg-red-100 rounded-full border border-red-300">
                    <Flag className="w-6 h-6 text-red-800" />
                  </div>
                </div>
              </div>

              {/* 40px */}
              <div className="space-y-3">
                <p className="text-xs text-muted-foreground">40px</p>
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-card rounded-full border border-border">
                    <Flag className="w-10 h-10 text-red-600" />
                  </div>
                  <div className="p-4 bg-card rounded-full border border-border hover:bg-muted cursor-pointer transition-all">
                    <Flag className="w-10 h-10 text-red-700 hover:text-red-800" />
                  </div>
                  <div className="p-4 bg-red-100 rounded-full border border-red-300">
                    <Flag className="w-10 h-10 text-red-800" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* AI Scanning States */}
          <div>
            <p className="text-muted-foreground mb-4">AI Scanning States</p>
            <div className="flex items-center gap-8 flex-wrap">
              {/* Pulsing Outline */}
              <div className="space-y-3">
                <p className="text-xs text-muted-foreground">Pulsing (24px)</p>
                <div className="p-4 bg-card rounded-full border border-border" style={{ width: 'fit-content', height: 'fit-content' }}>
                  <Shield className="w-6 h-6 text-blue-600 animate-pulse" />
                </div>
              </div>

              {/* Soft Glow */}
              <div className="space-y-3">
                <p className="text-xs text-muted-foreground">Soft Glow (24px)</p>
                <div className="p-4 bg-card rounded-full border border-border" style={{ width: 'fit-content', height: 'fit-content' }}>
                  <div className="relative">
                    <Shield className="w-6 h-6 text-blue-600" />
                    <div className="absolute inset-0 bg-blue-400 rounded-full blur-md opacity-50 animate-pulse" style={{ width: '24px' }}></div>
                  </div>
                </div>
              </div>

              {/* Scanning Animation */}
              <div className="space-y-3">
                <p className="text-xs text-muted-foreground">Scan Ring (24px)</p>
                <div className="p-4 bg-card rounded-full border border-border" style={{ width: 'fit-content', height: 'fit-content' }}>
                  <div className="relative inline-block">
                    <Shield className="w-6 h-6 text-blue-600" />
                    <div className="absolute inset-0 border-2 border-blue-400 rounded-full animate-ping"></div>
                  </div>
                </div>
              </div>

              {/* Interactive Scanning Toggle */}
              <div className="space-y-3">
                <p className="text-xs text-muted-foreground">Interactive (40px)</p>
                <button
                  onClick={() => setScanningState(!scanningState)}
                  className="p-4 bg-card rounded-full border border-border hover:bg-muted cursor-pointer transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  style={{ width: 'fit-content', height: 'fit-content' }}
                  aria-label={scanningState ? 'Stop scanning' : 'Start scanning'}
                  aria-pressed={scanningState}
                >
                  <div className="relative inline-block">
                    <Shield className={`w-10 h-10 text-blue-600 ${scanningState ? 'animate-pulse' : ''}`} aria-hidden="true" />
                    {scanningState && (
                      <div className="absolute inset-0 border-2 border-blue-400 rounded-full animate-ping" aria-hidden="true"></div>
                    )}
                  </div>
                </button>
                <p className="text-xs text-muted-foreground">{scanningState ? 'Scanning...' : 'Click to scan'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-border pt-8">
        <h4 className="text-foreground mb-6">Transition States</h4>
      </div>

      {/* Transition Examples */}
      <div className="bg-card rounded-lg border border-border p-6">
        <div className="mb-4">
          <h4 className="text-foreground">Icon Transition Examples</h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Warning to Safe */}
          <div className="p-4 bg-muted rounded-lg border border-border">
            <p className="text-foreground mb-3">Warning → Safe</p>
            <div className="flex items-center justify-center gap-4">
              <div className="p-3 bg-chart-3/20 rounded-full">
                <ShieldAlert className="w-8 h-8 text-chart-3" />
              </div>
              <span className="text-gray-400">→</span>
              <div className="p-3 bg-green-100 rounded-full">
                <ShieldCheck className="w-8 h-8 text-green-600" />
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-2 text-center">Content reviewed & approved</p>
          </div>

          {/* Safe to Review Required */}
          <div className="p-4 bg-muted rounded-lg border border-border">
            <p className="text-foreground mb-3">Safe → Review Required</p>
            <div className="flex items-center justify-center gap-4">
              <div className="p-3 bg-green-100 rounded-full">
                <ShieldCheck className="w-8 h-8 text-green-600" />
              </div>
              <span className="text-gray-400">→</span>
              <div className="p-3 bg-blue-100 rounded-full">
                <Eye className="w-8 h-8 text-blue-600" />
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-2 text-center">New content needs review</p>
          </div>

          {/* Flagged to Resolved */}
          <div className="p-4 bg-muted rounded-lg border border-border">
            <p className="text-foreground mb-3">Flagged → Resolved</p>
            <div className="flex items-center justify-center gap-4">
              <div className="p-3 bg-red-100 rounded-full">
                <Flag className="w-8 h-8 text-red-700" />
              </div>
              <span className="text-gray-400">→</span>
              <div className="p-3 bg-green-100 rounded-full">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-2 text-center">Issue resolved successfully</p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-border pt-8">
        <h4 className="text-foreground mb-6">Usage Examples</h4>
      </div>

      {/* Example 1: Content Cards with Status Icons */}
      <div className="bg-card rounded-lg border border-border p-6">
        <div className="mb-3">
          <h4 className="text-foreground">Example 1: Content Cards with Status Icons</h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-muted rounded-lg border border-border">
            <div className="flex items-start gap-3 mb-2">
              <ShieldCheck className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" aria-label="Safe content" aria-hidden="false" />
              <div className="flex-1">
                <h6 style={{ fontSize: '16px', fontFamily: 'Urbanist, sans-serif' }}>Article: AI Safety Guidelines</h6>
                <p className="text-muted-foreground text-sm mt-1">This article has been reviewed and approved for publication.</p>
              </div>
            </div>
          </div>
          <div className="p-4 bg-muted rounded-lg border border-border">
            <div className="flex items-start gap-3 mb-2">
              <ShieldAlert className="w-5 h-5 text-chart-3 flex-shrink-0 mt-0.5" aria-label="Warning: content needs review" aria-hidden="false" />
              <div className="flex-1">
                <h6 style={{ fontSize: '16px', fontFamily: 'Urbanist, sans-serif' }}>Comment: User Feedback</h6>
                <p className="text-muted-foreground text-sm mt-1">This comment may contain sensitive content. Review recommended.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Example 2: Moderation Queue */}
      <div className="bg-card rounded-lg border border-border p-6">
        <div className="mb-3">
          <h4 className="text-foreground">Example 2: Moderation Queue</h4>
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between p-3 bg-muted rounded-lg border border-border">
            <div className="flex items-center gap-3">
              <Eye className="w-5 h-5 text-blue-800" aria-label="Requires review" aria-hidden="false" />
              <span className="text-foreground">Post #1234 - Requires Review</span>
            </div>
            <span className="text-xs text-muted-foreground">2 mins ago</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-muted rounded-lg border border-border">
            <div className="flex items-center gap-3">
              <Flag className="w-5 h-5 text-red-600" aria-label="Flagged content" aria-hidden="false" />
              <span className="text-foreground">Comment #5678 - Flagged by User</span>
            </div>
            <span className="text-xs text-muted-foreground">5 mins ago</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-muted rounded-lg border border-border">
            <div className="flex items-center gap-3">
              <ShieldAlert className="w-5 h-5 text-chart-3" aria-label="Warning issued" aria-hidden="false" />
              <span className="text-foreground">Article #9012 - Warning Issued</span>
            </div>
            <span className="text-xs text-muted-foreground">10 mins ago</span>
          </div>
        </div>
      </div>

      {/* Example 3: Real-time Scanning */}
      <div className="bg-card rounded-lg border border-border p-6">
        <div className="mb-3">
          <h4 className="text-foreground">Example 3: Real-time Content Scanning</h4>
        </div>
        <div className="p-4 bg-muted rounded-lg border border-border">
          <div className="flex items-center justify-between mb-4">
            <span className="text-foreground">AI Content Scanner</span>
            <div className="relative inline-block" role="status" aria-live="polite" aria-label="Scanning in progress">
              <Shield className="w-6 h-6 text-blue-600 animate-pulse" aria-hidden="true" />
              <div className="absolute inset-0 border-2 border-blue-400 rounded-full animate-ping" aria-hidden="true"></div>
            </div>
          </div>
          <textarea
            className="w-full p-3 border border-gray-300 rounded-md bg-card text-foreground min-h-[100px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            placeholder="Type your content here..."
            defaultValue="This is example content being scanned in real-time..."
            aria-label="Content input for AI scanning"
          />
          <div className="mt-3 flex items-center gap-2 text-sm text-blue-600" role="status" aria-live="polite">
            <Shield className="w-4 h-4" aria-hidden="true" />
            <span>Scanning content for safety compliance...</span>
          </div>
        </div>
      </div>

      {/* Example 4: Dashboard Overview */}
      <div className="bg-card rounded-lg border border-border p-6">
        <div className="mb-3">
          <h4 className="text-foreground">Example 4: Safety Dashboard</h4>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 bg-green-50 rounded-lg border border-green-200">
            <ShieldCheck className="w-8 h-8 text-green-600 mb-2" aria-hidden="true" />
            <p className="text-foreground">Safe Content</p>
            <p className="text-2xl text-green-600 mt-1" aria-label="1,234 safe content items">1,234</p>
          </div>
          <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
            <ShieldAlert className="w-8 h-8 text-chart-3 mb-2" aria-hidden="true" />
            <p className="text-foreground">Warnings</p>
            <p className="text-2xl text-chart-3 mt-1" aria-label="45 warnings">45</p>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <Eye className="w-8 h-8 text-blue-600 mb-2" aria-hidden="true" />
            <p className="text-foreground">Under Review</p>
            <p className="text-2xl text-blue-600 mt-1" aria-label="23 items under review">23</p>
          </div>
          <div className="p-4 bg-red-50 rounded-lg border border-red-200">
            <Flag className="w-8 h-8 text-red-600 mb-2" aria-hidden="true" />
            <p className="text-foreground">Flagged</p>
            <p className="text-2xl text-red-700 mt-1" aria-label="8 flagged items">8</p>
          </div>
        </div>
      </div>
    </div>
  );
}
