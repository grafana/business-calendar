/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/naming-convention, react/no-find-dom-node, @typescript-eslint/no-require-imports */

/**
 * safeFindDOMNode
 *
 * Drop-in replacement for react-overlays/safeFindDOMNode that handles
 * React 19 where ReactDOM.findDOMNode was removed.
 */
export default function safeFindDOMNode(componentOrElement: any): Element | null {
  if (componentOrElement && 'setState' in componentOrElement) {
    const ReactDOM: any = require('react-dom');
    return typeof ReactDOM.findDOMNode === 'function' ? ReactDOM.findDOMNode(componentOrElement) : null;
  }

  return componentOrElement != null ? componentOrElement : null;
}
