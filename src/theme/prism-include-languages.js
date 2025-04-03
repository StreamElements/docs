/**
 * This file is a workaround for the fact that Docusaurus doesn't support
 * custom Prism syntax highlighting languages out of the box.
 */

export default function prismIncludeLanguages(PrismObject) {  
  PrismObject.languages.streamelements = {
    // Main command (e.g., !points, !addpoints)
    'command': {
      pattern: /^![\w-]+/m,
      greedy: true,
      alias: 'function'
    },
    // Subcommands (e.g., add, remove in !points add)
    'subcommand': {
      pattern: /(?<=^![\w-]+ )(add|remove|set|enable|disable|list|help|info|start|stop|create|delete|edit|show|hide)/m,
      greedy: true,
      alias: 'keyword'
    },
    // Required parameters (e.g., <username>)
    'parameter': {
      pattern: /<[\w\s._-]+>/g,
      greedy: true,
      alias: 'variable'
    },
    // Optional parameters (e.g., [amount])
    'option': {
      pattern: /\[[\w\s._-]+\]/g,
      greedy: true,
      alias: 'property'
    },
    // Flag arguments (e.g., --silent or -s)
    'flag': {
      pattern: /--?[\w-]+/g,
      greedy: true,
      alias: 'selector'
    },
    // Numbers
    'number': {
      pattern: /\b\d+\b/g,
      greedy: true
    },
    // Variable references (e.g., ${user} or $(user))
    'variable': {
      pattern: /\$(?:\{[^}]+\}|\([^)]+\))/g,
      greedy: true,
      alias: 'attr-value'
    },
    // Special keywords like true/false/all
    'keyword': {
      pattern: /\b(true|false|all|none|random|first|last)\b/gi,
      greedy: true
    },
    // Punctuation
    'punctuation': /[<>[\]{}()=|,]/
  };
} 
