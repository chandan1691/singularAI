interface CodeBlockProps {
  code: string;
}

export function CodeBlock({ code }: CodeBlockProps) {
  const lines = code.split('\n');

  const highlightLine = (line: string) => {
    const segments: JSX.Element[] = [];
    let remaining = line;
    let segmentKey = 0;

    // Patterns in priority order
    const patterns: Array<{
      regex: RegExp;
      className: string;
      capture?: number;
    }> = [
      // JSX Comments
      { regex: /^(\s*\{\/\*.*?\*\/\})/, className: 'text-muted-foreground italic' },
      // Single line comments
      { regex: /^(\/\/.*$)/, className: 'text-muted-foreground italic' },
      // Multi-line comments
      { regex: /^(\/\*.*?\*\/)/, className: 'text-muted-foreground italic' },
      // Import/export statements with "from"
      { regex: /^(import|export)\s/, className: 'text-purple-400' },
      { regex: /^(from)\s/, className: 'text-purple-400' },
      // Keywords
      { regex: /^(function|return|const|let|var|as|default|async|await)\b/, className: 'text-purple-400' },
      // String literals (double quotes)
      { regex: /^("(?:[^"\\]|\\.)*")/, className: 'text-amber-300' },
      // String literals (single quotes)
      { regex: /^('(?:[^'\\]|\\.)*')/, className: 'text-amber-300' },
      // Template literals
      { regex: /^(`(?:[^`\\]|\\.)*`)/, className: 'text-amber-300' },
      // JSX opening tags with uppercase (Components)
      { regex: /^(<\/?[A-Z][a-zA-Z0-9]*)/, className: 'text-cyan-400' },
      // JSX opening tags with lowercase (HTML)
      { regex: /^(<\/?[a-z][a-zA-Z0-9]*)/, className: 'text-green-400' },
      // Closing tag bracket
      { regex: /^(\/?>)/, className: 'text-gray-400' },
      // className attribute (special case)
      { regex: /^(className)(?==)/, className: 'text-sky-300' },
      // Other JSX attributes
      { regex: /^([a-zA-Z][a-zA-Z0-9-]*)(?==)/, className: 'text-sky-300' },
      // Function names
      { regex: /^([a-zA-Z_][a-zA-Z0-9_]*)(?=\()/, className: 'text-blue-300' },
      // Numbers
      { regex: /^(\d+\.?\d*)/, className: 'text-orange-400' },
      // Operators
      { regex: /^(===|!==|==|!=|<=|>=|=>|&&|\|\||[+\-*/%=<>!])/, className: 'text-purple-400' },
      // Brackets and braces
      { regex: /^([(){}\[\]])/, className: 'text-yellow-400' },
      // Semicolons, commas, dots
      { regex: /^([;,.])/, className: 'text-gray-400' },
      // Whitespace
      { regex: /^(\s+)/, className: '' },
      // Default (any single character)
      { regex: /^(.)/, className: 'text-gray-100' },
    ];

    while (remaining.length > 0) {
      let matched = false;

      for (const pattern of patterns) {
        const match = remaining.match(pattern.regex);
        if (match) {
          const text = match[pattern.capture || 1] || match[0];
          
          segments.push(
            <span key={segmentKey++} className={pattern.className}>
              {text}
            </span>
          );
          
          remaining = remaining.slice(text.length);
          matched = true;
          break;
        }
      }

      if (!matched) {
        // Fallback: consume one character
        segments.push(
          <span key={segmentKey++} className="text-gray-100">
            {remaining[0]}
          </span>
        );
        remaining = remaining.slice(1);
      }
    }

    return segments;
  };

  return (
    <div className="bg-[#1a1d2e] rounded-xl overflow-hidden border border-gray-800 shadow-xl">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#151825] border-b border-gray-800">
        <div className="flex items-center gap-3">
          <span className="text-gray-400 text-sm">Component Code</span>
        </div>
        <button className="text-gray-400 hover:text-gray-200 text-xs px-3 py-1.5 rounded-md bg-gray-800/50 hover:bg-gray-700/50 transition-all duration-200 font-medium">
          Copy
        </button>
      </div>

      {/* Code area */}
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full">
          <div className="flex">
            {/* Line numbers */}
            <div className="select-none bg-[#0f111a] border-r border-gray-800 px-4 py-4">
              {lines.map((_, index) => (
                <div
                  key={index}
                  className="text-muted-foreground leading-6 font-mono text-sm text-right"
                  style={{ fontFamily: 'Monaco, Menlo, "Courier New", monospace' }}
                >
                  {index + 1}
                </div>
              ))}
            </div>

            {/* Code content */}
            <div className="flex-1 px-6 py-4 overflow-x-auto">
              {lines.map((line, index) => (
                <div
                  key={index}
                  className="leading-6 font-mono text-sm"
                  style={{ fontFamily: 'Monaco, Menlo, "Courier New", monospace' }}
                >
                  {line === '' ? (
                    <span className="text-transparent select-none">.</span>
                  ) : (
                    highlightLine(line)
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}