/**
 * This file is a workaround for the fact that Docusaurus doesn't support
 * custom Prism syntax highlighting languages out of the box.
 */

import siteConfig from '@generated/docusaurus.config';

export default function prismIncludeLanguages(PrismObject) {
  const {
    themeConfig: { prism },
  } = siteConfig;
  
  const { additionalLanguages } = prism;
  
  // Load language definitions from prismjs
  additionalLanguages.forEach((lang) => {
    if (lang !== 'command') { // Skip our custom language, we'll define it below
      try {
        require(`prismjs/components/prism-${lang}`);
      } catch (e) {
        console.warn(`Failed to load Prism language: ${lang}`);
      }
    }
  });
  
  // Define our custom secommand language directly here
  PrismObject.languages.command = {
    'command': {
      pattern: /^!\w+/,
      greedy: true,
      alias: 'function'
    },
    'parameter': {
      pattern: /<[\w-]+>/g,
      greedy: true,
      alias: 'variable'
    },
    'option': {
      pattern: /\[[\w-]+\]/g,
      greedy: true,
      alias: 'property'
    },
    'punctuation': /[<>[\]]/
  };
} 
