import path from 'path';

import type { Configuration } from 'webpack';
import webpack from 'webpack';
import { merge } from 'webpack-merge';

import grafanaConfig, { type Env } from './.config/webpack/webpack.config';

/**
 * Custom webpack config
 *
 * Extends the Grafana scaffolded config with project-specific overrides.
 */
const config = async (env: Env): Promise<Configuration> => {
  const baseConfig = await grafanaConfig(env);
  const shimPath = path.resolve(__dirname, 'src/utils/safeFindDOMNode.ts');

  return merge(baseConfig, {
    plugins: [
      /**
       * Replace react-overlays safeFindDOMNode with a React 19-safe shim.
       * react-overlays uses ReactDOM.findDOMNode() which was removed in React 19.
       */
      new webpack.NormalModuleReplacementPlugin(
        /react-overlays[/\\](esm|cjs)[/\\]safeFindDOMNode/,
        (resource) => {
          resource.request = shimPath;
          resource.resource = shimPath;
        }
      ),
    ],
  });
};

export default config;
