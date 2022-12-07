import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import type { Compiler, WebpackPluginInstance } from 'webpack';

const _dirname =
  typeof __dirname !== 'undefined'
    ? __dirname
    : dirname(fileURLToPath(import.meta.url));

const IMAGES_LOADER = resolve(_dirname, 'images');
const EXPORT_LOADER = resolve(_dirname, 'export');
const COLOR_LOADER = resolve(_dirname, 'lqip/color');
const INLINE_LOADER = resolve(_dirname, 'lqip/inline');
const BLURHASH_LOADER = resolve(_dirname, 'lqip/blurhash');

export default class EmberResponsiveImageWebpackPlugin
  implements WebpackPluginInstance
{
  apply(compiler: Compiler) {
    compiler.options.module.rules.unshift({
      test: /\.(png|jpe?g)$/,
      use: [
        EXPORT_LOADER,
        COLOR_LOADER,
        INLINE_LOADER,
        BLURHASH_LOADER,
        IMAGES_LOADER,
      ],
      type: 'javascript/auto',
    });
  }
}
