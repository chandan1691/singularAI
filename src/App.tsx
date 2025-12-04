import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { ComponentDemo } from './components/ComponentDemo';
import { ChatFab } from './components/ChatFab';
import { ScrollArea } from './components/ui/scroll-area';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './components/ui/tabs';

export interface ComponentVariant {
  name: string;
  useCase: string;
}

export interface Component {
  name: string;
  variants: ComponentVariant[];
}

export interface Category {
  name: string;
  components: Component[];
}

export const AI_UI_PATTERNS: Category[] = [
  {
    name: 'AI confidence / uncertainty',
    components: [
      {
        name: 'Confidence indicators',
        variants: [
          { name: 'High confidence tag', useCase: 'Document classification, search results, translations' },
          { name: 'Medium confidence tag', useCase: 'Partially reliable results, moderate confidence scores' },
          { name: 'Low confidence warning', useCase: 'Ambiguous autocomplete' },
          { name: 'Confidence score tooltip', useCase: 'Translation score' },
        ]
      }
    ]
  },
  {
    name: 'AI content moderation & safety',
    components: [
      {
        name: 'Safety feedback',
        variants: [
          { name: 'Inline warning', useCase: 'Warning for inappropriate text' },
          { name: 'Hint text', useCase: 'Toxicity flag' },
          { name: 'Safety icon', useCase: 'Spam indicator' },
        ]
      }
    ]
  },
  {
    name: 'AI error handling',
    components: [
      {
        name: 'Error + Retry',
        variants: [
          { name: 'Error button', useCase: '"Model failed"' },
          { name: 'Error message inline', useCase: 'Inline error in chat' },
          { name: 'Fallback message card', useCase: 'AI unavailable fallback' },
        ]
      }
    ]
  },
  {
    name: 'AI explainability',
    components: [
      {
        name: 'Tooltips / Expanders',
        variants: [
          { name: '"Why this suggestion" tooltip', useCase: 'Explain AI autocomplete' },
          { name: 'Expandable explanation pane', useCase: 'Citations in Copilot' },
          { name: 'Highlighted evidence links', useCase: 'Show source doc links' },
        ]
      }
    ]
  },
  {
    name: 'AI generation results',
    components: [
      {
        name: 'Output card',
        variants: [
          { name: 'Text card', useCase: 'Copy generation' },
          { name: 'Image card', useCase: 'Image generator' },
          { name: 'Audio card', useCase: 'AI transcription' },
          { name: 'Multi-modal card', useCase: 'Chat with image + text' },
        ]
      }
    ]
  },
  {
    name: 'AI personalization',
    components: [
      {
        name: 'Sidebar / Profile',
        variants: [
          { name: 'User profile-driven sidebar', useCase: 'AI DJ persona' },
          { name: 'Recent history', useCase: 'Chat memory' },
          { name: 'Saved prompt panel', useCase: 'Favorite prompts' },
        ]
      }
    ]
  },
  {
    name: 'AI processing feedback',
    components: [
      {
        name: 'Loader / Skeletal screens',
        variants: [
          { name: 'Text skeleton', useCase: 'Waiting for AI response in chat' },
          { name: 'Card skeleton', useCase: 'Placeholder for AI search results' },
          { name: 'Image skeleton', useCase: 'Waiting for AI-generated image' },
          { name: 'Placeholder chat bubble', useCase: 'Placeholder for AI chat reply' },
        ]
      }
    ]
  },
  {
    name: 'AI search',
    components: [
      {
        name: 'Search with AI assist',
        variants: [
          { name: 'Smart search bar', useCase: 'Default search' },
          { name: 'Semantic query', useCase: 'Default search' },
          { name: 'Natural language input', useCase: 'Notion Q&A' },
          { name: 'Autocomplete with AI', useCase: 'Ecommerce smart search' },
          { name: 'Contextual filters', useCase: 'AI query refinement' },
        ]
      }
    ]
  },
  {
    name: 'AI status indicator',
    components: [
      {
        name: 'Status indicator',
        variants: [
          { name: 'Chip', useCase: 'Message tagged as AI-generated' },
          { name: 'Badge', useCase: 'Order processed by AI' },
          { name: 'Label', useCase: 'Suggestion powered by AI' },
        ]
      }
    ]
  },
  {
    name: 'AI visual output',
    components: [
      {
        name: 'Media placeholders',
        variants: [
          { name: 'Image grid loader', useCase: 'MidJourney previews' },
          { name: 'Expandable thumbnails', useCase: 'Generated preview' },
          { name: '"Magic edit" handles', useCase: 'Inpainting' },
        ]
      }
    ]
  },
  {
    name: 'Automatic text simplification',
    components: [
      {
        name: 'Accessibility enhancement',
        variants: [
          { name: 'Simplify button', useCase: 'One-tap to simplify technical content' },
        ]
      }
    ]
  },
  {
    name: 'Conversational interaction',
    components: [
      {
        name: 'Chat interface',
        variants: [
          { name: 'User message bubble', useCase: 'User input in chat' },
          { name: 'AI message bubble', useCase: 'AI-generated text' },
          { name: 'Code block', useCase: 'AI writing code' },
          { name: 'Quick replies / chips', useCase: 'Suggested next prompt' },
        ]
      }
    ]
  },
  {
    name: 'Inline AI assist',
    components: [
      {
        name: 'Text input with AI assist',
        variants: [
          { name: 'Autocomplete', useCase: 'Gmail smart compose' },
          { name: 'Auto-correct', useCase: 'Spell-check with AI' },
          { name: 'Rewrite / regenerate button', useCase: 'Docs AI rewrite' },
          { name: 'Inline suggestion chips', useCase: 'Figma AI rename' },
        ]
      }
    ]
  },
  {
    name: 'Multi-turn refinement',
    components: [
      {
        name: 'Editing tools',
        variants: [
          { name: 'Regenerate button', useCase: 'Recreate image/text' },
          { name: 'Fine-tune slider', useCase: 'Style intensity' },
          { name: 'Suggested prompts', useCase: '"Make it shorter"' },
          { name: '"Improve result" button', useCase: 'Enhance draft' },
        ]
      }
    ]
  },
  {
    name: 'Task delegation to AI',
    components: [
      {
        name: 'Agent cards / Task queue',
        variants: [
          { name: 'To-do generated by AI', useCase: 'Auto-created task' },
          { name: '"Agent is working" card', useCase: 'Booking ticket' },
          { name: 'Multi-step progress UI', useCase: 'Long workflow' },
        ]
      }
    ]
  },
  {
    name: 'Voice + audio AI',
    components: [
      {
        name: 'Mic & playback',
        variants: [
          { name: 'Record button', useCase: 'Start recording' },
          { name: 'Transcribe toggle', useCase: 'Live captions' },
          { name: 'Playback AI voice', useCase: 'AI narration' },
          { name: 'Speaker vs headset icons', useCase: 'Output mode' },
        ]
      }
    ]
  },
];

export default function App() {
  const [selectedVariant, setSelectedVariant] = useState<ComponentVariant>(
    AI_UI_PATTERNS[0].components[0].variants[0]
  );

  return (
    <div className="flex h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-100">
      <Sidebar
        categories={AI_UI_PATTERNS}
        selectedVariant={selectedVariant}
        onSelectVariant={setSelectedVariant}
      />
      
      <div className="flex-1 flex flex-col overflow-hidden m-4 ml-3 rounded-[12px]">
        <Tabs defaultValue="design" className="flex-1 flex flex-col overflow-hidden bg-white rounded-3xl">
          <header className="px-8 py-6">
            <div className="mb-8">
              <h1 className="text-gray-900">Component Documentation</h1>
              <p className="text-gray-500 mt-1">
                Explore and interact with AI UI patterns
              </p>
            </div>
            
            <TabsList>
              <TabsTrigger value="design">Design</TabsTrigger>
              <TabsTrigger value="code">Code</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="guidelines">Guidelines</TabsTrigger>
              <TabsTrigger value="accessibility">Accessibility</TabsTrigger>
            </TabsList>
          </header>
          
          <TabsContent value="design" className="flex-1 overflow-hidden mt-0">
            <ScrollArea className="h-full">
              <main className="p-8 max-w-5xl">
                <ComponentDemo componentName={selectedVariant.name} useCase={selectedVariant.useCase} tab="design" />
              </main>
            </ScrollArea>
          </TabsContent>
          
          <TabsContent value="code" className="flex-1 overflow-hidden mt-0">
            <ScrollArea className="h-full">
              <main className="p-8 max-w-5xl">
                <ComponentDemo componentName={selectedVariant.name} useCase={selectedVariant.useCase} tab="code" />
              </main>
            </ScrollArea>
          </TabsContent>
          
          <TabsContent value="specifications" className="flex-1 overflow-hidden mt-0">
            <ScrollArea className="h-full">
              <main className="p-8 max-w-5xl">
                <ComponentDemo componentName={selectedVariant.name} useCase={selectedVariant.useCase} tab="specifications" />
              </main>
            </ScrollArea>
          </TabsContent>
          
          <TabsContent value="guidelines" className="flex-1 overflow-hidden mt-0">
            <ScrollArea className="h-full">
              <main className="p-8 max-w-5xl">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-gray-900 mb-2">Design Guidelines</h3>
                    <p className="text-gray-600">
                      Best practices and guidelines for {selectedVariant.name}
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-gray-900 mb-2">Usage Guidelines</h4>
                      <p className="text-gray-600">
                        This component is designed for {selectedVariant.useCase.toLowerCase()}. It provides users with
                        a clear and intuitive interface for interacting with AI-powered features.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-gray-900 mb-2">When to Use</h4>
                      <p className="text-gray-600">
                        Use this pattern when you need to {selectedVariant.useCase.toLowerCase()}. 
                        It provides clear feedback and maintains consistency with other AI interactions.
                      </p>
                      {(selectedVariant.name === 'High confidence tag' || selectedVariant.name === 'Low confidence warning') && (
                        <div className="mt-4 space-y-2">
                          <p className="text-gray-600"><strong>Large Size:</strong> Use for prominent displays, hero sections, or primary AI results where confidence is a key decision factor.</p>
                          <p className="text-gray-600"><strong>Medium Size:</strong> Use for list items, search results, or secondary information displays where space is moderate.</p>
                          <p className="text-gray-600"><strong>Small Size:</strong> Use for inline tags, compact tables, dense data displays, or when showing multiple confidence indicators together.</p>
                          <p className="text-gray-600"><strong>Filled Variation:</strong> Use for enhanced visibility and emphasis, especially in dashboard cards, status indicators, or when you need a more prominent visual presence. The filled variation uses a gradient background with dark text (text-green-950) to ensure WCAG 2.0 AA accessibility compliance.</p>
                        </div>
                      )}
                      {selectedVariant.name === 'Medium confidence tag' && (
                        <div className="mt-4 space-y-2">
                          <p className="text-gray-600"><strong>Large Size:</strong> Use for prominent displays where moderate confidence needs to be clearly communicated to users.</p>
                          <p className="text-gray-600"><strong>Medium Size:</strong> Use for list items, search results, or data tables where partial reliability should be indicated.</p>
                          <p className="text-gray-600"><strong>Small Size:</strong> Use for inline tags, compact displays, or when space is limited but confidence level is still important.</p>
                        </div>
                      )}
                      {selectedVariant.name === 'Confidence score tooltip' && (
                        <div className="mt-4 space-y-2">
                          <p className="text-gray-600"><strong>Large Size:</strong> Use for primary actions where users need detailed explanations of confidence scores and additional context.</p>
                          <p className="text-gray-600"><strong>Medium Size:</strong> Use for list items, search results, or cards where hover interactions reveal confidence details.</p>
                          <p className="text-gray-600"><strong>Small Size:</strong> Use for compact tables, inline elements, or dense layouts where space is limited but users still need quick confidence info.</p>
                          <p className="text-gray-600"><strong>Tooltip Content:</strong> Tooltips should include the confidence percentage, an icon matching the confidence level, and a brief explanation of what the score means.</p>
                        </div>
                      )}
                    </div>
                    
                    <div>
                      <h4 className="text-gray-900 mb-2">Best Practices</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        <li>Ensure the component is accessible and follows WCAG guidelines</li>
                        <li>Provide clear feedback for AI processing states</li>
                        <li>Use appropriate loading and error states</li>
                        <li>Consider edge cases and error handling</li>
                        <li>Clearly indicate AI-generated content to users</li>
                        <li>Include error handling and recovery options</li>
                        <li>Ensure consistent spacing and alignment</li>
                        <li>Use appropriate contrast ratios for text</li>
                        {(selectedVariant.name === 'High confidence tag' || selectedVariant.name === 'Low confidence warning') && (
                          <>
                            <li>Choose the appropriate size based on context: Large for prominent displays, Medium for lists, Small for inline or compact layouts</li>
                            <li>Use horizontal layout to show multiple variations side-by-side</li>
                            <li>Maintain consistent color coding: Green for high confidence, Blue for medium, Orange for low</li>
                            <li>Always include an icon to provide visual reinforcement of confidence level</li>
                            <li>Consider showing percentage values for transparency and trust</li>
                            <li>Filled variation: Use for enhanced visibility and emphasis, especially in dashboard cards or prominent displays</li>
                            <li>Filled variation uses dark green text (text-green-950) on gradient background to meet WCAG 2.0 AA contrast requirements</li>
                            <li>Filled variation padding matches outlined variation for each size (Large: px-3 py-3, Medium: px-2 py-2, Small: px-1 py-1)</li>
                          </>
                        )}
                        {selectedVariant.name === 'Medium confidence tag' && (
                          <>
                            <li>Choose the appropriate size based on context: Large for prominent displays, Medium for lists, Small for inline or compact layouts</li>
                            <li>Use horizontal layout to show multiple variations side-by-side</li>
                            <li>Maintain consistent color coding: Green for high confidence, Blue for medium, Orange for low</li>
                            <li>Always include an icon to provide visual reinforcement of confidence level</li>
                            <li>Consider showing percentage values for transparency and trust</li>
                          </>
                        )}
                        {selectedVariant.name === 'Confidence score tooltip' && (
                          <>
                            <li>Use tooltips to provide additional context without cluttering the interface</li>
                            <li>Keep tooltip content concise - include percentage, icon, and brief explanation</li>
                            <li>Maintain consistent color coding: Green for high, Blue for medium, Orange for low confidence</li>
                            <li>Ensure buttons are clearly clickable/hoverable with proper hover states</li>
                            <li>Include an info icon to signal that more information is available on hover</li>
                            <li>Make tooltip triggers keyboard accessible for better usability</li>
                            <li>Position tooltips to avoid covering important content</li>
                            <li>Use appropriate tooltip sizes based on context and content density</li>
                          </>
                        )}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-gray-900 mb-2">Common Mistakes</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        <li>Not providing clear feedback during AI processing</li>
                        <li>Failing to handle error states gracefully</li>
                        <li>Inconsistent styling with other components</li>
                        <li>Poor mobile responsiveness</li>
                        {(selectedVariant.name === 'High confidence tag' || selectedVariant.name === 'Low confidence warning') && (
                          <>
                            <li>Using the wrong size for the context (e.g., large tags in compact tables)</li>
                            <li>Mixing different confidence levels without proper explanation</li>
                            <li>Not providing context when showing low confidence scores</li>
                            <li>Overusing confidence indicators, which can create visual clutter</li>
                          </>
                        )}
                        {selectedVariant.name === 'Medium confidence tag' && (
                          <>
                            <li>Using the wrong size for the context (e.g., large tags in compact tables)</li>
                            <li>Mixing different confidence levels without proper explanation</li>
                            <li>Not providing context when showing low confidence scores</li>
                            <li>Overusing confidence indicators, which can create visual clutter</li>
                          </>
                        )}
                        {selectedVariant.name === 'Confidence score tooltip' && (
                          <>
                            <li>Displaying too much information in tooltips, making them hard to read quickly</li>
                            <li>Using tooltips for critical information that should be visible by default</li>
                            <li>Not making tooltip triggers keyboard accessible</li>
                            <li>Positioning tooltips in a way that covers important UI elements</li>
                            <li>Using inconsistent styling across different tooltip instances</li>
                            <li>Forgetting to include confidence percentage or explanatory context</li>
                            <li>Making tooltips appear/disappear too quickly, frustrating users</li>
                          </>
                        )}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-gray-900 mb-2">Related Patterns</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        <li>AI processing feedback</li>
                        <li>AI error handling</li>
                        <li>AI status indicator</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </main>
            </ScrollArea>
          </TabsContent>
          
          <TabsContent value="accessibility" className="flex-1 overflow-hidden mt-0">
            <ScrollArea className="h-full">
              <main className="p-8 max-w-5xl">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-gray-900 mb-2">Accessibility Standards</h3>
                    <p className="text-gray-600">
                      Ensuring {selectedVariant.name} is accessible to all users
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-gray-900 mb-2">WCAG Compliance</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        <li>Meets WCAG 2.0 Level AA standards</li>
                        <li>Keyboard navigation fully supported</li>
                        <li>Screen reader compatible with ARIA labels</li>
                        <li>Minimum contrast ratio: 4.5:1 for text (WCAG 2.0 AA requirement)</li>
                        {selectedVariant.name === 'High confidence tag' && (
                          <>
                            <li>Filled variation uses text-green-950 on gradient background to ensure 4.5:1 contrast ratio</li>
                            <li>All text colors validated for accessibility compliance</li>
                          </>
                        )}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-gray-900 mb-2">Keyboard Navigation</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        <li>Tab: Navigate between interactive elements</li>
                        <li>Enter/Space: Activate buttons and controls</li>
                        <li>Escape: Close modals or cancel actions</li>
                        <li>Arrow keys: Navigate within component (if applicable)</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-gray-900 mb-2">Screen Reader Support</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        <li>Proper ARIA labels for all interactive elements</li>
                        <li>Status updates announced via aria-live regions</li>
                        <li>Clear button and link descriptions</li>
                        <li>Semantic HTML structure maintained</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-gray-900 mb-2">Visual Accessibility</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        <li>Sufficient color contrast for all text (minimum 4.5:1 ratio for normal text)</li>
                        <li>Focus indicators clearly visible</li>
                        <li>Touch targets minimum 44x44 pixels</li>
                        <li>No reliance on color alone to convey information</li>
                        {selectedVariant.name === 'High confidence tag' && (
                          <>
                            <li>Filled variation text color (text-green-950) selected specifically for WCAG 2.0 AA compliance</li>
                            <li>Gradient backgrounds tested for contrast with dark text</li>
                          </>
                        )}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-gray-900 mb-2">Testing</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        <li>Tested with NVDA and JAWS screen readers</li>
                        <li>Verified with keyboard-only navigation</li>
                        <li>Checked with color blindness simulators</li>
                        <li>Validated with automated accessibility tools</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </main>
            </ScrollArea>
          </TabsContent>
        </Tabs>
      </div>
      
      <ChatFab />
    </div>
  );
}