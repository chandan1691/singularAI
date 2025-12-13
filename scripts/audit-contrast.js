#!/usr/bin/env node
/**
 * WCAG 2.0 AA Contrast Audit Script
 * 
 * This script audits all color combinations in the design system
 * to ensure they meet WCAG 2.0 AA contrast requirements.
 */

const fs = require('fs');
const path = require('path');
const { converter, parse } = require('culori');

const toRgb = converter('rgb');

// Convert any color format to RGB
function parseColor(colorValue) {
  if (!colorValue || colorValue === 'transparent') {
    return { r: 255, g: 255, b: 255 }; // Assume white for transparent
  }
  
  try {
    // Handle rgba format explicitly
    const rgbaMatch = colorValue.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
    if (rgbaMatch) {
      const alpha = rgbaMatch[4] ? parseFloat(rgbaMatch[4]) : 1;
      // For semi-transparent colors, blend with white background
      const r = parseInt(rgbaMatch[1]);
      const g = parseInt(rgbaMatch[2]);
      const b = parseInt(rgbaMatch[3]);
      // Blend with white background based on alpha
      return {
        r: Math.round(r * alpha + 255 * (1 - alpha)),
        g: Math.round(g * alpha + 255 * (1 - alpha)),
        b: Math.round(b * alpha + 255 * (1 - alpha))
      };
    }
    
    // Handle hex colors directly
    if (colorValue.startsWith('#')) {
      const hex = colorValue.slice(1);
      if (hex.length === 3) {
        return {
          r: parseInt(hex[0] + hex[0], 16),
          g: parseInt(hex[1] + hex[1], 16),
          b: parseInt(hex[2] + hex[2], 16)
        };
      }
      return {
        r: parseInt(hex.slice(0, 2), 16),
        g: parseInt(hex.slice(2, 4), 16),
        b: parseInt(hex.slice(4, 6), 16)
      };
    }
    
    const parsed = parse(colorValue);
    if (!parsed) {
      throw new Error(`Could not parse color: ${colorValue}`);
    }
    const rgb = toRgb(parsed);
    if (!rgb || typeof rgb.r !== 'number') {
      throw new Error(`Invalid RGB result for: ${colorValue}`);
    }
    
    // toRgb returns values in 0-1 range, convert to 0-255
    return {
      r: Math.round((rgb.r || 0) * 255),
      g: Math.round((rgb.g || 0) * 255),
      b: Math.round((rgb.b || 0) * 255)
    };
  } catch (error) {
    throw new Error(`Error parsing color ${colorValue}: ${error.message}`);
  }
}

// Calculate relative luminance
function getLuminance(r, g, b) {
  const [rs, gs, bs] = [r, g, b].map(val => {
    val = val / 255;
    return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

// Calculate contrast ratio
function getContrastRatio(color1, color2) {
  const l1 = getLuminance(color1.r, color1.g, color1.b);
  const l2 = getLuminance(color2.r, color2.g, color2.b);
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}

function auditColorTokens() {
  const tokensPath = path.join(__dirname, '../design-tokens/color.tokens.json');
  const tokens = JSON.parse(fs.readFileSync(tokensPath, 'utf-8'));
  
  const results = [];
  
  // Define semantic pairs to check
  const semanticPairs = [
    // Light theme
    { fg: 'foreground', bg: 'background', theme: 'light', usage: 'Main text on background' },
    { fg: 'cardForeground', bg: 'card', theme: 'light', usage: 'Card text on card background' },
    { fg: 'popoverForeground', bg: 'popover', theme: 'light', usage: 'Popover text on popover background' },
    { fg: 'primaryForeground', bg: 'primary', theme: 'light', usage: 'Text on primary button' },
    { fg: 'secondaryForeground', bg: 'secondary', theme: 'light', usage: 'Text on secondary button' },
    { fg: 'mutedForeground', bg: 'muted', theme: 'light', usage: 'Muted text on muted background' },
    { fg: 'accentForeground', bg: 'accent', theme: 'light', usage: 'Text on accent background' },
    { fg: 'destructiveForeground', bg: 'destructive', theme: 'light', usage: 'Text on destructive button' },
    { fg: 'foreground', bg: 'muted', theme: 'light', usage: 'Text on muted background' },
    { fg: 'mutedForeground', bg: 'background', theme: 'light', usage: 'Muted text on main background' },
    
    // Dark theme
    { fg: 'foreground', bg: 'background', theme: 'dark', usage: 'Main text on background' },
    { fg: 'cardForeground', bg: 'card', theme: 'dark', usage: 'Card text on card background' },
    { fg: 'popoverForeground', bg: 'popover', theme: 'dark', usage: 'Popover text on popover background' },
    { fg: 'primaryForeground', bg: 'primary', theme: 'dark', usage: 'Text on primary button' },
    { fg: 'secondaryForeground', bg: 'secondary', theme: 'dark', usage: 'Text on secondary button' },
    { fg: 'mutedForeground', bg: 'muted', theme: 'dark', usage: 'Muted text on muted background' },
    { fg: 'accentForeground', bg: 'accent', theme: 'dark', usage: 'Text on accent background' },
    { fg: 'destructiveForeground', bg: 'destructive', theme: 'dark', usage: 'Text on destructive button' },
    { fg: 'foreground', bg: 'muted', theme: 'dark', usage: 'Text on muted background' },
    { fg: 'mutedForeground', bg: 'background', theme: 'dark', usage: 'Muted text on main background' },
    
    // Sidebar light
    { fg: 'sidebar.foreground', bg: 'sidebar.background', theme: 'light', usage: 'Sidebar text on sidebar background' },
    { fg: 'sidebar.primaryForeground', bg: 'sidebar.primary', theme: 'light', usage: 'Sidebar primary text on primary background' },
    { fg: 'sidebar.accentForeground', bg: 'sidebar.accent', theme: 'light', usage: 'Sidebar accent text on accent background' },
    
    // Sidebar dark
    { fg: 'sidebar.foreground', bg: 'sidebar.background', theme: 'dark', usage: 'Sidebar text on sidebar background' },
    { fg: 'sidebar.primaryForeground', bg: 'sidebar.primary', theme: 'dark', usage: 'Sidebar primary text on primary background' },
    { fg: 'sidebar.accentForeground', bg: 'sidebar.accent', theme: 'dark', usage: 'Sidebar accent text on accent background' },
  ];
  
  // Check border contrast (3:1 minimum)
  const borderPairs = [
    { border: 'border', bg: 'background', theme: 'light', usage: 'Border on background' },
    { border: 'border', bg: 'card', theme: 'light', usage: 'Border on card' },
    { border: 'border', bg: 'background', theme: 'dark', usage: 'Border on background' },
    { border: 'border', bg: 'card', theme: 'dark', usage: 'Border on card' },
    { border: 'sidebar.border', bg: 'sidebar.background', theme: 'light', usage: 'Sidebar border on sidebar background' },
    { border: 'sidebar.border', bg: 'sidebar.background', theme: 'dark', usage: 'Sidebar border on sidebar background' },
  ];
  
  // Check focus ring contrast (3:1 minimum)
  const ringPairs = [
    { ring: 'ring', bg: 'background', theme: 'light', usage: 'Focus ring on background' },
    { ring: 'ring', bg: 'card', theme: 'light', usage: 'Focus ring on card' },
    { ring: 'ring', bg: 'background', theme: 'dark', usage: 'Focus ring on background' },
    { ring: 'ring', bg: 'card', theme: 'dark', usage: 'Focus ring on card' },
    { ring: 'sidebar.ring', bg: 'sidebar.background', theme: 'light', usage: 'Sidebar focus ring on sidebar background' },
    { ring: 'sidebar.ring', bg: 'sidebar.background', theme: 'dark', usage: 'Sidebar focus ring on sidebar background' },
  ];
  
  function getTokenValue(tokenPath, theme) {
    const parts = tokenPath.split('.');
    let current = tokens.color.semantic;
    
    if (parts[0] === 'sidebar') {
      current = current.sidebar[theme];
      parts.shift();
    } else {
      current = current[theme];
    }
    
    for (const part of parts) {
      if (!current || !current[part]) return null;
      current = current[part];
    }
    
    return current?.$value || null;
  }
  
  // Check semantic pairs
  for (const pair of semanticPairs) {
    const fgValue = getTokenValue(pair.fg, pair.theme);
    const bgValue = getTokenValue(pair.bg, pair.theme);
    
    if (!fgValue || !bgValue) continue;
    
    try {
      const fgColor = parseColor(fgValue);
      const bgColor = parseColor(bgValue);
      const ratio = getContrastRatio(fgColor, bgColor);
      
      results.push({
        foreground: pair.fg,
        background: pair.bg,
        foregroundValue: fgValue,
        backgroundValue: bgValue,
        ratio,
        passesAA: ratio >= 4.5,
        passesAALarge: ratio >= 3.0,
        requiredRatio: 4.5,
        requiredRatioLarge: 3.0,
        whereUsed: `${pair.usage} (${pair.theme} theme)`
      });
    } catch (error) {
      console.error(`Error parsing colors for ${pair.fg} on ${pair.bg}:`, error.message);
    }
  }
  
  // Check border pairs
  for (const pair of borderPairs) {
    const borderValue = getTokenValue(pair.border, pair.theme);
    const bgValue = getTokenValue(pair.bg, pair.theme);
    
    if (!borderValue || !bgValue) continue;
    
    try {
      const borderColor = parseColor(borderValue);
      const bgColor = parseColor(bgValue);
      const ratio = getContrastRatio(borderColor, bgColor);
      
      results.push({
        foreground: pair.border,
        background: pair.bg,
        foregroundValue: borderValue,
        backgroundValue: bgValue,
        ratio,
        passesAA: ratio >= 3.0, // Borders need 3:1
        passesAALarge: ratio >= 3.0,
        requiredRatio: 3.0,
        requiredRatioLarge: 3.0,
        whereUsed: `${pair.usage} (${pair.theme} theme)`
      });
    } catch (error) {
      console.error(`Error parsing colors for ${pair.border} on ${pair.bg}:`, error.message);
    }
  }
  
  // Check ring pairs
  for (const pair of ringPairs) {
    const ringValue = getTokenValue(pair.ring, pair.theme);
    const bgValue = getTokenValue(pair.bg, pair.theme);
    
    if (!ringValue || !bgValue) continue;
    
    try {
      const ringColor = parseColor(ringValue);
      const bgColor = parseColor(bgValue);
      const ratio = getContrastRatio(ringColor, bgColor);
      
      results.push({
        foreground: pair.ring,
        background: pair.bg,
        foregroundValue: ringValue,
        backgroundValue: bgValue,
        ratio,
        passesAA: ratio >= 3.0, // Focus rings need 3:1
        passesAALarge: ratio >= 3.0,
        requiredRatio: 3.0,
        requiredRatioLarge: 3.0,
        whereUsed: `${pair.usage} (${pair.theme} theme)`
      });
    } catch (error) {
      console.error(`Error parsing colors for ${pair.ring} on ${pair.bg}:`, error.message);
    }
  }
  
  const passed = results.filter(r => r.passesAA);
  const failed = results.filter(r => !r.passesAA);
  
  return { passed, failed };
}

// Generate markdown report
function generateReport(result) {
  let report = '# WCAG 2.0 AA Contrast Audit Report\n\n';
  report += `Generated: ${new Date().toISOString()}\n\n`;
  report += `## Summary\n\n`;
  report += `- **Total Checks**: ${result.passed.length + result.failed.length}\n`;
  report += `- **Passed**: ${result.passed.length}\n`;
  report += `- **Failed**: ${result.failed.length}\n\n`;
  
  if (result.failed.length > 0) {
    report += `## ❌ Failures (WCAG 2.0 AA)\n\n`;
    report += `| Foreground | Background | Ratio | Required | Where Used |\n`;
    report += `|------------|-----------|-------|----------|------------|\n`;
    
    for (const failure of result.failed) {
      report += `| \`${failure.foreground}\` | \`${failure.background}\` | ${failure.ratio.toFixed(2)}:1 | ${failure.requiredRatio}:1 | ${failure.whereUsed} |\n`;
      report += `|   \`${failure.foregroundValue}\` | \`${failure.backgroundValue}\` | | | |\n`;
    }
    report += `\n`;
  }
  
  if (result.passed.length > 0) {
    report += `## ✅ Passed Checks\n\n`;
    report += `| Foreground | Background | Ratio | Where Used |\n`;
    report += `|------------|-----------|-------|------------|\n`;
    
    for (const pass of result.passed.slice(0, 20)) { // Show first 20
      report += `| \`${pass.foreground}\` | \`${pass.background}\` | ${pass.ratio.toFixed(2)}:1 | ${pass.whereUsed} |\n`;
    }
    if (result.passed.length > 20) {
      report += `| ... | ... | ... | (${result.passed.length - 20} more passed) |\n`;
    }
  }
  
  return report;
}

// Main execution
try {
  const result = auditColorTokens();
  const report = generateReport(result);
  
  // Write report to file
  const reportPath = path.join(__dirname, '../CONTRAST_AUDIT_REPORT.md');
  fs.writeFileSync(reportPath, report);
  
  // Also output to console
  console.log(report);
  
  // Exit with error code if failures found
  if (result.failed.length > 0) {
    console.error(`\n❌ Found ${result.failed.length} contrast failures. See CONTRAST_AUDIT_REPORT.md for details.`);
    process.exit(1);
  } else {
    console.log(`\n✅ All contrast checks passed!`);
    process.exit(0);
  }
} catch (error) {
  console.error('Error running audit:', error);
  process.exit(1);
}

