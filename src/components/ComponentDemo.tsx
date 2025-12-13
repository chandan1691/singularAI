import { Card } from "./ui/card";
import { HighConfidenceTag } from "./demos/HighConfidenceTag";
import { MediumConfidenceTag } from "./demos/MediumConfidenceTag";
import { LowConfidenceTag } from "./demos/LowConfidenceTag";
import { ConfidenceScoreTooltip } from "./demos/ConfidenceScoreTooltip";
import { InlineWarning } from "./demos/InlineWarning";
import { HintText } from "./demos/HintText";
import { SafetyIcon } from "./demos/SafetyIcon";
import { ErrorHandling } from "./demos/ErrorHandling";
import { ErrorButton } from "./demos/ErrorButton";
import { ErrorMessageInline } from "./demos/ErrorMessageInline";
import { FallbackMessageCard } from "./demos/FallbackMessageCard";
import { CodeBlock } from "./CodeBlock";
import { HighlightedEvidenceLinks } from "./demos/HighlightedEvidenceLinks";

interface ComponentDemoProps {
  componentName: string;
  useCase: string;
  tab?: 'design' | 'code' | 'specifications';
}

export function ComponentDemo({ componentName, useCase, tab = 'design' }: ComponentDemoProps) {
  // Render the appropriate demo component based on componentName
  const renderDemo = () => {
    switch (componentName) {
      case 'High confidence tag':
        return <HighConfidenceTag />;
      case 'Medium confidence tag':
        return <MediumConfidenceTag />;
      case 'Low confidence tag':
        return <LowConfidenceTag />;
      case 'Confidence score tooltip':
        return <ConfidenceScoreTooltip />;
      case 'Inline warning':
        return <InlineWarning />;
      case 'Hint text':
        return <HintText />;
      case 'Safety icon':
        return <SafetyIcon />;
      case 'Error handling':
        return <ErrorHandling />;
      case 'Error button':
        return <ErrorButton />;
      case 'Error message inline':
        return <ErrorMessageInline />;
      case 'Fallback message card':
        return <FallbackMessageCard />;
      case 'Highlighted evidence links':
        return <HighlightedEvidenceLinks />;
      default:
        return (
          <Card className="p-12 flex items-center justify-center min-h-[400px] bg-muted border-2 border-dashed border-gray-300">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-muted-foreground">Component preview placeholder</p>
                <p className="text-gray-400 mt-1">
                  {componentName} - {useCase}
                </p>
              </div>
            </div>
          </Card>
        );
    }
  };

  const getCodeContent = () => {
    switch (componentName) {
      case 'High confidence tag':
        return `import { CheckCircle2 } from "lucide-react";

export function HighConfidenceTag() {
  return (
    <div className="space-y-6">
      {/* Outlined Variation - Large */}
      <div className="flex items-center gap-4">
        <span 
          className="inline-flex items-center gap-2 px-3 py-3 rounded-full text-green-900 border border-green-400/50 bg-positive-green"
        >
          <CheckCircle2 className="w-4 h-4" />
          High Confidence (94%)
        </span>
      </div>

      {/* Outlined Variation - Medium */}
      <div className="flex items-center gap-3">
        <span 
          className="inline-flex items-center gap-1.5 px-2 py-2 rounded-full text-green-900 border border-green-400/50 bg-positive-green"
        >
          <CheckCircle2 className="w-3.5 h-3.5" />
          High Confidence (94%)
        </span>
      </div>

      {/* Outlined Variation - Small */}
      <div className="flex items-center gap-2">
        <span 
          className="inline-flex items-center gap-1 px-1 py-1 rounded-full text-green-900 border border-green-400/50 bg-positive-green"
        >
          <CheckCircle2 className="w-3 h-3" />
          <span className="text-xs">High Confidence (94%)</span>
        </span>
      </div>

      {/* Filled Variation - Large */}
      <div className="flex items-center gap-4">
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
      </div>

      {/* Filled Variation - Medium */}
      <div className="flex items-center gap-3">
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
      </div>

      {/* Filled Variation - Small */}
      <div className="flex items-center gap-2">
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
      </div>
    </div>
  );
}`;
      case 'Medium confidence tag':
        return `import { TrendingUp } from "lucide-react";

export function MediumConfidenceTag() {
  return (
    <div className="space-y-6">
      {/* Large Size */}
      <div className="flex items-center gap-4">
        <span 
          className="inline-flex items-center gap-2 px-3 py-3 rounded-full text-blue-800 border border-blue-400/50"
          style={{ background: 'linear-gradient(92.78deg, #90A3F7 -0.01%, #A5B6FF 99.98%)' }}
        >
          <TrendingUp className="w-4 h-4" />
          Medium Confidence (68%)
        </span>
      </div>

      {/* Medium Size */}
      <div className="flex items-center gap-3">
        <span 
          className="inline-flex items-center gap-1.5 px-2 py-2 rounded-full text-blue-800 border border-blue-400/50"
          style={{ background: 'linear-gradient(92.78deg, #90A3F7 -0.01%, #A5B6FF 99.98%)' }}
        >
          <TrendingUp className="w-3.5 h-3.5" />
          Medium Confidence (68%)
        </span>
      </div>

      {/* Small Size */}
      <div className="flex items-center gap-2">
        <span 
          className="inline-flex items-center gap-1 px-1 py-1 rounded-full text-blue-800 border border-blue-400/50"
          style={{ background: 'linear-gradient(92.78deg, #90A3F7 -0.01%, #A5B6FF 99.98%)' }}
        >
          <TrendingUp className="w-3 h-3" />
          <span className="text-xs">Medium Confidence (68%)</span>
        </span>
      </div>
    </div>
  );
}`;
      case 'Low confidence tag':
        return `import { AlertCircle, TrendingUp } from "lucide-react";

export function LowConfidenceTag() {
  return (
    <div className="space-y-6">
      {/* Large Size - Low Confidence */}
      <div className="flex items-center gap-4">
        <span 
          className="inline-flex items-center gap-2 px-3 py-3 rounded-full text-orange-800 border border-orange-400/50"
          style={{ background: 'linear-gradient(93.66deg, #FFA2A2 -0.01%, #FFB86A 100.21%)' }}
        >
          <AlertCircle className="w-4 h-4" />
          Low Confidence (48%)
        </span>
      </div>

      {/* Large Size - Medium Confidence */}
      <div className="flex items-center gap-4">
        <span 
          className="inline-flex items-center gap-2 px-3 py-3 rounded-full text-blue-800 border border-blue-400/50"
          style={{ background: 'linear-gradient(92.78deg, #90A3F7 -0.01%, #A5B6FF 99.98%)' }}
        >
          <TrendingUp className="w-4 h-4" />
          Medium Confidence (68%)
        </span>
      </div>

      {/* Medium Size */}
      <div className="flex items-center gap-3">
        <span 
          className="inline-flex items-center gap-1.5 px-2 py-2 rounded-full text-orange-800 border border-orange-400/50"
          style={{ background: 'linear-gradient(93.66deg, #FFA2A2 -0.01%, #FFB86A 100.21%)' }}
        >
          <AlertCircle className="w-3.5 h-3.5" />
          Low Confidence (48%)
        </span>
      </div>

      {/* Small Size */}
      <div className="flex items-center gap-2">
        <span 
          className="inline-flex items-center gap-1 px-1 py-1 rounded-full text-orange-800 border border-orange-400/50"
          style={{ background: 'linear-gradient(93.66deg, #FFA2A2 -0.01%, #FFB86A 100.21%)' }}
        >
          <AlertCircle className="w-3 h-3" />
          <span className="text-xs">Low Confidence (48%)</span>
        </span>
      </div>
    </div>
  );
}`;
      case 'Confidence score tooltip':
        return `import { CheckCircle2, AlertCircle, Info } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./components/ui/tooltip";

export function ConfidenceScoreTooltip() {
  return (
    <div className="space-y-6">
      {/* Large Size - High Confidence */}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <button className="inline-flex items-center gap-2 px-3 py-3 rounded-full bg-green-200/60 text-green-700 border border-green-300/50 hover:bg-green-200/80 transition-colors">
              <CheckCircle2 className="w-4 h-4" />
              <span>High Confidence</span>
              <Info className="w-4 h-4 opacity-60" />
            </button>
          </TooltipTrigger>
          <TooltipContent className="bg-green-700 text-white border-green-600 p-3 max-w-xs">
            <div className="space-y-1">
              <div className="flex items-center gap-2 mb-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-green-200" />
                <span className="font-medium">94% Confidence Score</span>
              </div>
              <p className="text-xs text-green-100">
                This result is highly reliable based on strong matching criteria.
              </p>
            </div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      {/* Medium Size - Low Confidence */}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <button className="inline-flex items-center gap-1.5 px-2 py-2 rounded-full bg-orange-200/60 text-orange-700 border border-orange-300/50 hover:bg-orange-200/80 transition-colors">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>42%</span>
              <Info className="w-3.5 h-3.5 opacity-60" />
            </button>
          </TooltipTrigger>
          <TooltipContent className="bg-orange-700 text-white border-orange-600 p-2.5 max-w-xs">
            <div className="space-y-1">
              <div className="flex items-center gap-1.5">
                <AlertCircle className="w-3 h-3 text-orange-200" />
                <span className="text-xs font-medium">Low Confidence (42%)</span>
              </div>
              <p className="text-xs text-orange-100">
                Verification needed
              </p>
            </div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      {/* Small Size */}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <button className="inline-flex items-center gap-1 px-1 py-1 rounded-full bg-green-200/60 text-green-700 border border-green-300/50 hover:bg-green-200/80 transition-colors">
              <CheckCircle2 className="w-3 h-3" />
              <span className="text-xs">94%</span>
              <Info className="w-3 h-3 opacity-60" />
            </button>
          </TooltipTrigger>
          <TooltipContent className="bg-green-700 text-white border-green-600 p-2 max-w-[200px]">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-2.5 h-2.5 text-green-200" />
              <span className="text-xs">High (94%)</span>
            </div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}`;
      case 'Inline warning':
        return `import { AlertCircle } from "lucide-react";

export function InlineWarning() {
  return (
    <div className="space-y-6">
      {/* Large Size */}
      <div className="flex items-center gap-4">
        <span 
          className="inline-flex items-center gap-2 px-3 py-3 rounded-full text-orange-800 border border-orange-400/50"
          style={{ background: 'linear-gradient(93.66deg, #FFA2A2 -0.01%, #FFB86A 100.21%)' }}
        >
          <AlertCircle className="w-4 h-4" />
          Low Confidence (48%)
        </span>
      </div>

      {/* Medium Size */}
      <div className="flex items-center gap-3">
        <span 
          className="inline-flex items-center gap-1.5 px-2 py-2 rounded-full text-orange-800 border border-orange-400/50"
          style={{ background: 'linear-gradient(93.66deg, #FFA2A2 -0.01%, #FFB86A 100.21%)' }}
        >
          <AlertCircle className="w-3.5 h-3.5" />
          Low Confidence (48%)
        </span>
      </div>

      {/* Small Size */}
      <div className="flex items-center gap-2">
        <span 
          className="inline-flex items-center gap-1 px-1 py-1 rounded-full text-orange-800 border border-orange-400/50"
          style={{ background: 'linear-gradient(93.66deg, #FFA2A2 -0.01%, #FFB86A 100.21%)' }}
        >
          <AlertCircle className="w-3 h-3" />
          <span className="text-xs">Low Confidence (48%)</span>
        </span>
      </div>
    </div>
  );
}`;
      case 'Hint text':
        return `import { Info } from "lucide-react";

export function HintText() {
  return (
    <div className="space-y-6">
      {/* Large Size */}
      <div className="flex items-center gap-4">
        <span 
          className="inline-flex items-center gap-2 px-3 py-3 rounded-full text-gray-800 border border-gray-400/50"
          style={{ background: 'linear-gradient(93.54deg, #56EA9B 0.05%, #9CF3BD 99.99%)' }}
        >
          <Info className="w-4 h-4" />
          Hint Text
        </span>
      </div>

      {/* Medium Size */}
      <div className="flex items-center gap-3">
        <span 
          className="inline-flex items-center gap-1.5 px-2 py-2 rounded-full text-gray-800 border border-gray-400/50"
          style={{ background: 'linear-gradient(93.54deg, #56EA9B 0.05%, #9CF3BD 99.99%)' }}
        >
          <Info className="w-3.5 h-3.5" />
          Hint Text
        </span>
      </div>

      {/* Small Size */}
      <div className="flex items-center gap-2">
        <span 
          className="inline-flex items-center gap-1 px-1 py-1 rounded-full text-gray-800 border border-gray-400/50"
          style={{ background: 'linear-gradient(93.54deg, #56EA9B 0.05%, #9CF3BD 99.99%)' }}
        >
          <Info className="w-3 h-3" />
          <span className="text-xs">Hint Text</span>
        </span>
      </div>
    </div>
  );
}`;
      case 'Safety icon':
        return `import { ShieldCheck } from "lucide-react";

export function SafetyIcon() {
  return (
    <div className="space-y-6">
      {/* Large Size */}
      <div className="flex items-center gap-4">
        <span 
          className="inline-flex items-center gap-2 px-3 py-3 rounded-full text-green-800 border border-green-400/50"
          style={{ background: 'linear-gradient(93.54deg, #56EA9B 0.05%, #9CF3BD 99.99%)' }}
        >
          <ShieldCheck className="w-4 h-4" />
          Safety
        </span>
      </div>

      {/* Medium Size */}
      <div className="flex items-center gap-3">
        <span 
          className="inline-flex items-center gap-1.5 px-2 py-2 rounded-full text-green-800 border border-green-400/50"
          style={{ background: 'linear-gradient(93.54deg, #56EA9B 0.05%, #9CF3BD 99.99%)' }}
        >
          <ShieldCheck className="w-3.5 h-3.5" />
          Safety
        </span>
      </div>

      {/* Small Size */}
      <div className="flex items-center gap-2">
        <span 
          className="inline-flex items-center gap-1 px-1 py-1 rounded-full text-green-800 border border-green-400/50"
          style={{ background: 'linear-gradient(93.54deg, #56EA9B 0.05%, #9CF3BD 99.99%)' }}
        >
          <ShieldCheck className="w-3 h-3" />
          <span className="text-xs">Safety</span>
        </span>
      </div>
    </div>
  );
}`;
      case 'Error handling':
        return `import { AlertCircle } from "lucide-react";

export function ErrorHandling() {
  return (
    <div className="space-y-6">
      {/* Large Size */}
      <div className="flex items-center gap-4">
        <span 
          className="inline-flex items-center gap-2 px-3 py-3 rounded-full text-red-800 border border-red-400/50"
          style={{ background: 'linear-gradient(93.66deg, #FFA2A2 -0.01%, #FFB86A 100.21%)' }}
        >
          <AlertCircle className="w-4 h-4" />
          Error
        </span>
      </div>

      {/* Medium Size */}
      <div className="flex items-center gap-3">
        <span 
          className="inline-flex items-center gap-1.5 px-2 py-2 rounded-full text-red-800 border border-red-400/50"
          style={{ background: 'linear-gradient(93.66deg, #FFA2A2 -0.01%, #FFB86A 100.21%)' }}
        >
          <AlertCircle className="w-3.5 h-3.5" />
          Error
        </span>
      </div>

      {/* Small Size */}
      <div className="flex items-center gap-2">
        <span 
          className="inline-flex items-center gap-1 px-1 py-1 rounded-full text-red-800 border border-red-400/50"
          style={{ background: 'linear-gradient(93.66deg, #FFA2A2 -0.01%, #FFB86A 100.21%)' }}
        >
          <AlertCircle className="w-3 h-3" />
          <span className="text-xs">Error</span>
        </span>
      </div>
    </div>
  );
}`;
      case 'Error button':
        return `import { RefreshCw, X } from "lucide-react";

// Primary Error Button
<button 
  className="inline-flex items-center gap-2 px-3 h-10 text-white rounded-full transition-all"
  style={{
    background: 'linear-gradient(93.66deg, #FD5858 -0.01%, #FF7E7E 100.21%)',
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

// Secondary Error Button
<div 
  className="inline-flex rounded-full p-[1px]"
  style={{ background: 'linear-gradient(93.66deg, #FD5858 -0.01%, #FF7E7E 100.21%)' }}
>
  <button 
    className="inline-flex items-center gap-2 px-3 h-10 rounded-full"
    style={{
      background: 'linear-gradient(93.66deg, #FFEFEF -0.01%, #FFF5F5 100.21%)',
      color: '#DC4848'
    }}
  >
    <RefreshCw className="w-4 h-4" />
    <span className="text-sm">Retry</span>
  </button>
</div>

// Dismiss Button
<button 
  className="inline-flex items-center gap-2 px-3 h-10 bg-transparent rounded-full"
  style={{ color: '#DC4848' }}
  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#FFF5F5'}
  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
>
  <X className="w-4 h-4" />
  <span className="text-sm">Dismiss</span>
</button>`;
      case 'Error message inline':
        return `import { AlertCircle } from "lucide-react";

// Compact Inline Error
<div className="flex items-center gap-2 py-1">
  <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
  <span className="text-xs text-red-600">Something went wrong. Please try again.</span>
</div>

// Expanded Inline Error
<div className="flex items-start gap-2 py-1">
  <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
  <div className="flex-1">
    <p className="text-xs text-red-600">Something went wrong. Please try again.</p>
    <p className="text-xs text-red-500 mt-1">The AI service encountered an error while processing your request. This may be temporary.</p>
  </div>
</div>

// Input Field with Error
<input
  type="text"
  className="w-full rounded-lg bg-red-50 text-sm p-3"
  style={{
    color: '#111827'
  }}
/>`;
      case 'Fallback message card':
        return `import { AlertCircle, RefreshCw, AlertTriangle } from "lucide-react";

// Default Fallback Card
<div className="bg-card border border-border rounded-xl p-6 max-w-md">
  <div className="flex items-start gap-3">
  <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center bg-red-50 rounded-full">
      <AlertTriangle className="w-5 h-5 text-red-500" />
    </div>
    <div className="flex-1 space-y-3">
      <div>
        <h5 className="text-foreground mb-1">AI couldn't generate a response.</h5>
        <p className="text-xs text-muted-foreground">Refine your input or try again.</p>
      </div>
      <button 
        className="inline-flex items-center gap-2 px-3 h-10 text-white rounded-full"
        style={{
          background: 'linear-gradient(93.66deg, #FD5858 -0.01%, #FF7E7E 100.21%)',
          boxShadow: '0px 10px 10px rgba(0, 0, 0, 0.09), 0px 3px 6px rgba(0, 0, 0, 0.1)'
        }}
      >
        <RefreshCw className="w-4 h-4" />
        <span className="text-sm">Try Again</span>
      </button>
    </div>
  </div>
</div>

// Minimal Fallback Card
<div className="bg-card border border-border rounded-3xl p-4 max-w-md">
  <div className="flex items-center gap-3">
    <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center bg-red-50 rounded-full">
      <AlertCircle className="w-5 h-5 text-red-500" />
    </div>
    <p className="text-sm text-foreground">Unable to process request. Please try again later.</p>
  </div>
</div>

// Actionable Fallback Card
<div className="bg-card border border-border rounded-xl p-6 max-w-md">
  <div className="flex items-start gap-3">
  <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center bg-red-50 rounded-full">
      <AlertTriangle className="w-5 h-5 text-red-500" />
    </div>
    <div className="flex-1 space-y-3">
      <div>
        <h5 className="text-foreground mb-1">AI service unavailable</h5>
        <p className="text-xs text-muted-foreground">The AI model is temporarily offline. Here's what you can do:</p>
      </div>
      <div className="flex flex-wrap gap-2">
        <button className="inline-flex items-center gap-2 px-3 h-10 text-white rounded-full"
          style={{
            background: 'linear-gradient(93.66deg, #FD5858 -0.01%, #FF7E7E 100.21%)',
            boxShadow: '0px 10px 10px rgba(0, 0, 0, 0.09), 0px 3px 6px rgba(0, 0, 0, 0.1)'
          }}>
          <RefreshCw className="w-4 h-4" />
          <span className="text-sm">Retry</span>
        </button>
        {/* Secondary button with gradient border */}
      </div>
    </div>
  </div>
</div>`;
      case 'Highlighted evidence links':
        return `const baseHighlight =
  "inline-flex items-center px-2 py-1 rounded text-sm font-medium transition-all duration-150";

const inlineStates = {
  idle: "bg-sky-100/70 text-slate-900",
  hover:
    "bg-sky-100 text-slate-900 underline underline-offset-2 decoration-sky-500/80",
  pressed: "bg-sky-200/80 text-slate-950 shadow-inner",
  focus: "bg-card text-slate-900 ring-2 ring-sky-300 ring-offset-2 ring-offset-white",
};

export function InlineHighlight() {
  return (
    <p className="text-sm text-foreground leading-relaxed">
      The model confirmed that{" "}
      <span className={\`\${baseHighlight} \${inlineStates.idle}\`}>
        referencing the quarterly trust report
      </span>{" "}
      to highlight AI-backed evidence.
    </p>
  );
}`;
      default:
        return `// Code for ${componentName}\n// Use case: ${useCase}\n\n// Component code will be displayed here`;
    }
  };

  const getSpecifications = () => {
    switch (componentName) {
      case 'High confidence tag':
        return {
          dimensions: [
            'Large - Height: ~40px, Padding: 12px (py-3 px-3), Icon: 16px (w-4 h-4)',
            'Medium - Height: ~32px, Padding: 8px (py-2 px-2), Icon: 14px (w-3.5 h-3.5)',
            'Small - Height: ~28px, Padding: 4px (py-1 px-1), Icon: 12px (w-3 h-3)',
            'Border radius: 100px (fully rounded pill shape)',
            'Filled variation uses same padding values as outlined variation for each size'
          ],
          spacing: [
            'Large - Gap between icon and text: 8px (gap-2)',
            'Medium - Gap between icon and text: 6px (gap-1.5)',
            'Small - Gap between icon and text: 4px (gap-1)',
            'Horizontal spacing between tags: 8px - 16px',
            'Filled variation uses same gap values as outlined variation for each size'
          ],
          typography: [
            'Font: Inter',
            'Large - Size: 14px (default body), Weight: 500',
            'Medium - Size: 14px (default body), Weight: 500',
            'Small - Size: 12px (text-xs), Weight: 500',
            'Line height: 1.5'
          ],
          colors: [
            'Outlined Variation:',
            '  - Background: rgba(187, 247, 208, 0.6) - bg-positive-green',
            '  - Text: #15803d - text-green-900',
            '  - Border: rgba(187, 247, 208, 0.5) - border-green-400/50',
            'Filled Variation:',
            '  - Background: linear-gradient(93.54deg, #56EA9B 0.05%, #9CF3BD 99.99%)',
            '  - Text: text-green-950 (WCAG 2.0 AA compliant, minimum 4.5:1 contrast ratio)',
            '  - Border: 1px solid rgba(5, 223, 114, 0.5)',
            'Icon: Same as text color for both variations'
          ],
          states: [
            'Outlined: Green background with green text and icon',
            'Filled: Green gradient background with dark green text (WCAG compliant) and border',
            'All states use consistent padding and spacing matching outlined variation',
            'Horizontal layout with consistent spacing between variants'
          ]
        };
      case 'Medium confidence tag':
        return {
          dimensions: [
            'Large - Height: ~40px, Padding: 12px (py-3 px-3), Icon: 16px (w-4 h-4)',
            'Medium - Height: ~32px, Padding: 8px (py-2 px-2), Icon: 14px (w-3.5 h-3.5)',
            'Small - Height: ~28px, Padding: 4px (py-1 px-1), Icon: 12px (w-3 h-3)',
            'Border radius: 9999px (fully rounded pill shape)'
          ],
          spacing: [
            'Large - Gap between icon and text: 8px (gap-2)',
            'Medium - Gap between icon and text: 6px (gap-1.5)',
            'Small - Gap between icon and text: 4px (gap-1)',
            'Horizontal spacing between tags: 8px - 16px'
          ],
          typography: [
            'Font: Inter',
            'Large - Size: 14px (default body), Weight: 500',
            'Medium - Size: 14px (default body), Weight: 500',
            'Small - Size: 12px (text-xs), Weight: 500',
            'Line height: 1.5'
          ],
          colors: [
            'Background: rgba(191, 219, 254, 0.6) - bg-blue-200/60',
            'Text: #1d4ed8 - text-blue-700',
            'Border: rgba(191, 219, 254, 0.5) - border-blue-300/50',
            'Icon: Same as text color'
          ],
          states: [
            'Default: Blue background with blue text and icon',
            'All states use soft pastel backgrounds with 60% opacity for a gentle appearance',
            'Horizontal layout with consistent spacing between variants'
          ]
        };
      case 'Low confidence tag':
        return {
          dimensions: [
            'Large - Height: ~40px, Padding: 12px (py-3 px-3), Icon: 16px (w-4 h-4)',
            'Medium - Height: ~32px, Padding: 8px (py-2 px-2), Icon: 14px (w-3.5 h-3.5)',
            'Small - Height: ~28px, Padding: 4px (py-1 px-1), Icon: 12px (w-3 h-3)',
            'Border radius: 9999px (fully rounded pill shape)'
          ],
          spacing: [
            'Large - Gap between icon and text: 8px (gap-2)',
            'Medium - Gap between icon and text: 6px (gap-1.5)',
            'Small - Gap between icon and text: 4px (gap-1)',
            'Horizontal spacing between tags: 8px - 16px'
          ],
          typography: [
            'Font: Inter',
            'Large - Size: 14px (default body), Weight: 500',
            'Medium - Size: 14px (default body), Weight: 500',
            'Small - Size: 12px (text-xs), Weight: 500',
            'Line height: 1.5'
          ],
          colors: [
            'Low Confidence - Background: rgba(254, 215, 170, 0.6) / Text: #c2410c / Border: rgba(254, 215, 170, 0.5)',
            'Medium Confidence - Background: rgba(191, 219, 254, 0.6) / Text: #1d4ed8 / Border: rgba(191, 219, 254, 0.5)',
            'Icon: Same as text color'
          ],
          states: [
            'Low Confidence: Orange background (bg-orange-200/60) with orange text (text-orange-700)',
            'Medium Confidence: Blue background (bg-blue-200/60) with blue text (text-blue-700)',
            'All states use soft pastel backgrounds with 60% opacity',
            'Warning context: May include additional info box with bg-orange-50 border-orange-200',
            'Horizontal layout with consistent spacing between variants'
          ]
        };
      case 'Confidence score tooltip':
        return {
          dimensions: [
            'Large Button - Height: ~40px, Padding: 12px (py-3 px-3), Icon: 16px (w-4 h-4)',
            'Medium Button - Height: ~32px, Padding: 8px (py-2 px-2), Icon: 14px (w-3.5 h-3.5)',
            'Small Button - Height: ~28px, Padding: 4px (py-1 px-1), Icon: 12px (w-3 h-3)',
            'Border radius: 9999px (fully rounded pill shape) - matches confidence tag styling',
            'Tooltip: max-width varies by size (200px-320px)',
            'Tooltip padding: Large - 12px (p-3), Medium - 10px (p-2.5), Small - 8px (p-2)'
          ],
          spacing: [
            'Large - Gap between elements: 8px (gap-2)',
            'Medium - Gap between elements: 6px (gap-1.5)',
            'Small - Gap between elements: 4px (gap-1)',
            'Info icon opacity: 60% to indicate secondary action'
          ],
          typography: [
            'Font: Inter',
            'Button text - Size: 14px (default body), Weight: 500',
            'Tooltip title - Size: 14px (default body), Weight: 500',
            'Tooltip description - Size: 12px (text-xs), Weight: 400',
            'Line height: 1.5'
          ],
          colors: [
            'High Confidence Button - bg-green-200/60, text-green-700, border-green-300/50',
            'Medium Confidence Button - bg-blue-200/60, text-blue-700, border-blue-300/50',
            'Low Confidence Button - bg-orange-200/60, text-orange-700, border-orange-300/50',
            'High Confidence Tooltip - bg-green-700, text-white, border-green-600',
            'Medium Confidence Tooltip - bg-blue-700, text-white, border-blue-600',
            'Low Confidence Tooltip - bg-orange-700, text-white, border-orange-600',
            'Tooltip icons - Lighter tint (green-200, blue-200, orange-200)',
            'Hover states - Darker background (hover:bg-green-200/80, etc.)'
          ],
          states: [
            'Default: Soft pastel background matching confidence level (60% opacity)',
            'Hover: Slightly darker background (80% opacity) with smooth transition',
            'Tooltip: Solid dark background color-coded to confidence level',
            'Tooltip text: Light tint for better contrast against dark background',
            'Keyboard accessible: Can be triggered with Tab + Enter/Space',
            'Includes confidence percentage and brief explanation in tooltip'
          ]
        };
      case 'Highlighted evidence links':
        return {
          dimensions: [
            'Highlight padding: 4px vertical (py-1), 8px horizontal (px-2)',
            'Border radius: 4px (rounded)',
            'Text size: 14px body copy',
          ],
          spacing: [
            'Use inline placement within paragraphs (no additional gap)',
            'Pair with surrounding body copy using the 4pt spacing scale',
          ],
          typography: [
            'Font: Inter / system body (14-16px)',
            'Weight: 500 for highlighted span to reinforce emphasis',
          ],
          colors: [
            'Idle: subtle sky tint at 10-15% opacity (#e6f0ff)',
            'Hover: stronger tint, optional underline for affordance',
            'Pressed: darker tint with inner shadow',
            'Focus: Neutral surface with sky ring (4pt radius)',
            'Dark mode: use luminous sky accents on slate surfaces',
          ],
          states: [
            'Idle, hover, pressed, focus represented for both light and dark themes',
            'Focus uses 2px ring with matching 4px radius',
            'No icons or preview overlays in this variant',
          ],
        };
      case 'Inline warning':
        return {
          dimensions: [
            'Large - Height: ~40px, Padding: 12px (py-3 px-3), Icon: 16px (w-4 h-4)',
            'Medium - Height: ~32px, Padding: 8px (py-2 px-2), Icon: 14px (w-3.5 h-3.5)',
            'Small - Height: ~28px, Padding: 4px (py-1 px-1), Icon: 12px (w-3 h-3)',
            'Border radius: 9999px (fully rounded pill shape)'
          ],
          spacing: [
            'Large - Gap between icon and text: 8px (gap-2)',
            'Medium - Gap between icon and text: 6px (gap-1.5)',
            'Small - Gap between icon and text: 4px (gap-1)',
            'Horizontal spacing between tags: 8px - 16px'
          ],
          typography: [
            'Font: Inter',
            'Large - Size: 14px (default body), Weight: 500',
            'Medium - Size: 14px (default body), Weight: 500',
            'Small - Size: 12px (text-xs), Weight: 500',
            'Line height: 1.5'
          ],
          colors: [
            'Low Confidence - Background: rgba(254, 215, 170, 0.6) / Text: #c2410c / Border: rgba(254, 215, 170, 0.5)',
            'Medium Confidence - Background: rgba(191, 219, 254, 0.6) / Text: #1d4ed8 / Border: rgba(191, 219, 254, 0.5)',
            'Icon: Same as text color'
          ],
          states: [
            'Low Confidence: Orange background (bg-orange-200/60) with orange text (text-orange-700)',
            'Medium Confidence: Blue background (bg-blue-200/60) with blue text (text-blue-700)',
            'All states use soft pastel backgrounds with 60% opacity',
            'Warning context: May include additional info box with bg-orange-50 border-orange-200',
            'Horizontal layout with consistent spacing between variants'
          ]
        };
      case 'Hint text':
        return {
          dimensions: [
            'Large - Height: ~40px, Padding: 12px (py-3 px-3), Icon: 16px (w-4 h-4)',
            'Medium - Height: ~32px, Padding: 8px (py-2 px-2), Icon: 14px (w-3.5 h-3.5)',
            'Small - Height: ~28px, Padding: 4px (py-1 px-1), Icon: 12px (w-3 h-3)',
            'Border radius: 9999px (fully rounded pill shape)'
          ],
          spacing: [
            'Large - Gap between icon and text: 8px (gap-2)',
            'Medium - Gap between icon and text: 6px (gap-1.5)',
            'Small - Gap between icon and text: 4px (gap-1)',
            'Horizontal spacing between tags: 8px - 16px'
          ],
          typography: [
            'Font: Inter',
            'Large - Size: 14px (default body), Weight: 500',
            'Medium - Size: 14px (default body), Weight: 500',
            'Small - Size: 12px (text-xs), Weight: 500',
            'Line height: 1.5'
          ],
          colors: [
            'Background: rgba(187, 247, 208, 0.6) - bg-green-200/60',
            'Text: #15803d - text-green-700',
            'Border: rgba(187, 247, 208, 0.5) - border-green-300/50',
            'Icon: Same as text color'
          ],
          states: [
            'Default: Green background with green text and icon',
            'All states use soft pastel backgrounds with 60% opacity for a gentle appearance',
            'Horizontal layout with consistent spacing between variants'
          ]
        };
      case 'Safety icon':
        return {
          dimensions: [
            'Large - Height: ~40px, Padding: 12px (py-3 px-3), Icon: 16px (w-4 h-4)',
            'Medium - Height: ~32px, Padding: 8px (py-2 px-2), Icon: 14px (w-3.5 h-3.5)',
            'Small - Height: ~28px, Padding: 4px (py-1 px-1), Icon: 12px (w-3 h-3)',
            'Border radius: 9999px (fully rounded pill shape)'
          ],
          spacing: [
            'Large - Gap between icon and text: 8px (gap-2)',
            'Medium - Gap between icon and text: 6px (gap-1.5)',
            'Small - Gap between icon and text: 4px (gap-1)',
            'Horizontal spacing between tags: 8px - 16px'
          ],
          typography: [
            'Font: Inter',
            'Large - Size: 14px (default body), Weight: 500',
            'Medium - Size: 14px (default body), Weight: 500',
            'Small - Size: 12px (text-xs), Weight: 500',
            'Line height: 1.5'
          ],
          colors: [
            'Background: rgba(187, 247, 208, 0.6) - bg-green-200/60',
            'Text: #15803d - text-green-700',
            'Border: rgba(187, 247, 208, 0.5) - border-green-300/50',
            'Icon: Same as text color'
          ],
          states: [
            'Default: Green background with green text and icon',
            'All states use soft pastel backgrounds with 60% opacity for a gentle appearance',
            'Horizontal layout with consistent spacing between variants'
          ]
        };
      case 'Error handling':
        return {
          dimensions: [
            'Large - Height: ~40px, Padding: 12px (py-3 px-3), Icon: 16px (w-4 h-4)',
            'Medium - Height: ~32px, Padding: 8px (py-2 px-2), Icon: 14px (w-3.5 h-3.5)',
            'Small - Height: ~28px, Padding: 4px (py-1 px-1), Icon: 12px (w-3 h-3)',
            'Border radius: 9999px (fully rounded pill shape)'
          ],
          spacing: [
            'Large - Gap between icon and text: 8px (gap-2)',
            'Medium - Gap between icon and text: 6px (gap-1.5)',
            'Small - Gap between icon and text: 4px (gap-1)',
            'Horizontal spacing between tags: 8px - 16px'
          ],
          typography: [
            'Font: Inter',
            'Large - Size: 14px (default body), Weight: 500',
            'Medium - Size: 14px (default body), Weight: 500',
            'Small - Size: 12px (text-xs), Weight: 500',
            'Line height: 1.5'
          ],
          colors: [
            'Background: rgba(254, 215, 170, 0.6) - bg-orange-200/60',
            'Text: #c2410c - text-orange-700',
            'Border: rgba(254, 215, 170, 0.5) - border-orange-300/50',
            'Icon: Same as text color'
          ],
          states: [
            'Default: Orange background with orange text and icon',
            'All states use soft pastel backgrounds with 60% opacity for a gentle appearance',
            'Horizontal layout with consistent spacing between variants'
          ]
        };
      case 'Error button':
        return {
          dimensions: [
            'Button height: 40px (h-10)',
            'Primary button padding: 12px horizontal (px-3)',
            'Secondary button: 1px gradient border wrapper',
            'Border radius: fully rounded (rounded-full)',
            'Icon size: 16px (w-4 h-4)',
            'Minimum touch target: 44px for accessibility'
          ],
          spacing: [
            'Gap between icon and text: 8px (gap-2)',
            'Gap between buttons: 8px (gap-2)',
            'Padding within gradient border: 1px (p-[1px])'
          ],
          typography: [
            'Font: Inter',
            'Button text size: 14px (text-sm)',
            'Weight: 400 (regular)',
            'Line height: 1.5'
          ],
          colors: [
            'Primary Button - Background: linear-gradient(93.66deg, #FD5858 -0.01%, #FF7E7E 100.21%)',
            'Primary Button - Text: #FFFFFF',
            'Primary Button - Shadow (Default): 0px 10px 10px rgba(0, 0, 0, 0.09), 0px 3px 6px rgba(0, 0, 0, 0.1)',
            'Primary Button - Shadow (Hover): 0px 4px 6px rgba(0, 0, 0, 0.07), 0px 2px 4px rgba(0, 0, 0, 0.06)',
            'Secondary Button - Border: linear-gradient(93.66deg, #FD5858 -0.01%, #FF7E7E 100.21%)',
            'Secondary Button - Background: linear-gradient(93.66deg, #FFEFEF -0.01%, #FFF5F5 100.21%)',
            'Secondary Button - Text: #DC4848',
            'Dismiss Button - Background: transparent',
            'Dismiss Button - Text: #DC4848',
            'Dismiss Button - Hover Background: #FFF5F5'
          ],
          states: [
            'Primary - Default: Gradient background with deep shadow',
            'Primary - Hover: Gradient background with reduced shadow',
            'Primary - Pressed: Darker gradient (93.66deg, #DC4848 -0.01%, #E66565 100.21%)',
            'Primary - Disabled: 50% opacity, no shadow',
            'Primary - Loading: Spinning icon animation',
            'Secondary - Default: Gradient border with soft pink background',
            'Secondary - Hover: Same as default (no shadow)',
            'Secondary - Pressed: Darker gradient border and text',
            'Secondary - Disabled: 50% opacity on entire component',
            'Dismiss - Default: Transparent background',
            'Dismiss - Hover: Light pink background (#FFF5F5)',
            'Dismiss - Pressed: Slightly darker pink background (#FFEBEB)'
          ]
        };
      case 'Error message inline':
        return {
          dimensions: [
            'Icon size: 16px (w-4 h-4) for compact, 16px for expanded',
            'Minimum padding: 4px vertical (py-1)',
            'Input field padding: 12px (p-3)',
            'Input field border-radius: 8px (rounded-lg)',
            'No borders or shadows on input fields'
          ],
          spacing: [
            'Compact - Gap between icon and text: 8px (gap-2)',
            'Expanded - Gap between icon and content: 8px (gap-2)',
            'Expanded - Spacing between primary and secondary text: 4px (mt-1)',
            'Vertical spacing below input: 8px (space-y-2)'
          ],
          typography: [
            'Font: Inter',
            'Primary error text: 12px (text-xs)',
            'Secondary error text: 12px (text-xs)',
            'Input text: 14px (text-sm)',
            'Weight: 400 for default, 500 for hover state',
            'Line height: 1.5'
          ],
          colors: [
            'Error Icon: #EF4444 (text-red-500)',
            'Primary Error Text: #DC2626 (text-red-600)',
            'Secondary Error Text: #EF4444 (text-red-500)',
            'Hover Icon: #DC2626 (text-red-600)',
            'Hover Primary Text: #B91C1C (text-red-700)',
            'Input Background (Error): #FEF2F2 (bg-red-50)',
            'Input Background (Success): #F0FDF4 (bg-green-50)',
            'Input Text: #111827'
          ],
          states: [
            'Default: Red icon and text, subtle color scheme',
            'Hover: Slightly darker colors, bold primary text',
            'AI-triggered entry: Faster animation (300ms vs 500ms)',
            'Compact: Single line with icon and text',
            'Expanded: Icon, primary text, and explanatory secondary text',
            'Input Error State: Red background tint (bg-red-50)',
            'Input Success State: Green background tint (bg-green-50)'
          ]
        };
      case 'Fallback message card':
        return {
          dimensions: [
            'Default Card - Padding: 24px (p-6), Border-radius: 12px (rounded-xl)',
            'Minimal Card - Padding: 16px (p-4), Border-radius: 24px (rounded-3xl)',
            'Actionable Card - Padding: 24px (p-6), Border-radius: 12px (rounded-xl)',
            'Icon container: 32px × 32px (w-8 h-8)',
            'Icon size: 20px (w-5 h-5)',
            'Max width: 448px (max-w-md)',
            'Button height: 40px (h-10)'
          ],
          spacing: [
            'Gap between icon and content: 12px (gap-3)',
            'Spacing within content: 12px (space-y-3)',
            'Gap between buttons: 8px (gap-2)',
            'Margin bottom for title: 4px (mb-1)',
            'Margin top for description: 4px (mt-1)'
          ],
          typography: [
            'Font: Inter',
            'Card title (h5): Inherits from globals.css',
            'Description text: 12px (text-xs)',
            'Button text: 14px (text-sm)',
            'Body text (Minimal): 14px (text-sm)',
            'Line height: 1.5'
          ],
          colors: [
            'Card Background: #FFFFFF',
            'Card Border: #E5E7EB (border-border)',
            'Icon Container (Default/Actionable): #FEF2F2 (bg-red-50) with rounded-lg corners',
            'Icon Container (Minimal): #FEF2F2 (bg-red-50) with rounded-full corners',
            'Icon: #EF4444 (text-red-500)',
            'Title Text: #111827 (text-foreground)',
            'Description Text: #4B5563 (text-muted-foreground)',
            'Body Text: #374151 (text-foreground)'
          ],
          states: [
            'Default: No shadow, clean borders',
            'Hover: 4px elevation with shadow-md',
            'Transition: Smooth shadow transition',
            'Default Card: Icon + title + description + primary button',
            'Minimal Card: Icon + single line text, completely rounded corners',
            'Actionable Card: Icon + title + description + multiple buttons (primary + secondary)',
            'Animation: fade-in and slide-in-from-left-2 (500ms duration)'
          ]
        };
      default:
        return {
          dimensions: ['Minimum width: 320px', 'Maximum width: 100%', 'Minimum height: 44px (touch target)'],
          spacing: ['Padding: 12px - 24px', 'Margin: 8px - 16px', 'Gap between elements: 8px'],
          typography: ['Title: Urbanist, 18px', 'Body: Inter, 14px', 'Line height: 1.5'],
          colors: ['Primary: #000000', 'Secondary: #6B7280', 'Background: #FFFFFF'],
          states: []
        };
    }
  };

  if (tab === 'code') {
    return (
      <div className="space-y-6">
        <div>
          <h3 className="text-foreground mb-2">{componentName}</h3>
          <p className="text-muted-foreground">{useCase}</p>
        </div>
        
        <CodeBlock code={getCodeContent()} />

        <div className="space-y-4">
          <h4 className="text-foreground">Installation</h4>
          <pre className="bg-gray-100 text-gray-800 p-4 rounded-lg overflow-x-auto">
            <code>npm install lucide-react</code>
          </pre>
          
          <h4 className="text-foreground mt-6">Dependencies</h4>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
            <li>Badge component from shadcn/ui</li>
            <li>lucide-react for icons</li>
          </ul>
        </div>
      </div>
    );
  }

  if (tab === 'specifications') {
    const specs = getSpecifications();
    return (
      <div className="space-y-6">
        <div>
          <h3 className="text-foreground mb-2">Technical Specifications</h3>
          <p className="text-muted-foreground mb-4">
            Component: {componentName}
          </p>
        </div>
        
        <div className="space-y-4">
          <div>
            <h4 className="text-foreground mb-2">Dimensions</h4>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              {specs.dimensions.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>
          
          <div>
            <h4 className="text-foreground mb-2">Spacing</h4>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              {specs.spacing.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>
          
          <div>
            <h4 className="text-foreground mb-2">Typography</h4>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              {specs.typography.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>
          
          <div>
            <h4 className="text-foreground mb-2">Colors</h4>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              {specs.colors.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>

          {specs.states.length > 0 && (
            <div>
              <h4 className="text-foreground mb-2">Interactive States</h4>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                {specs.states.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-foreground mb-2">{componentName}</h3>
        <p className="text-muted-foreground">{useCase}</p>
      </div>
      
      {renderDemo()}
    </div>
  );
}