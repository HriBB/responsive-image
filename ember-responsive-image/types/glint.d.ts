import '@glint/environment-ember-loose';
import '@glint/environment-ember-loose/registry';
import Modifier from 'ember-modifier';
import Helper from '@ember/component/helper';

declare class RenderModifier<Args extends unknown[]> extends Modifier<{
  Element: HTMLElement;
  Args: { Positional: [(element: Element, args: Args) => void, ...Args] };
}> {}

declare class StyleModifier extends Modifier<{
  Element: HTMLElement;
  Args: {
    Positional: Array<Record<string, string | undefined> | undefined>;
    Named: Record<string, string | undefined>;
  };
}> {}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'did-insert': typeof RenderModifier;
    style: typeof StyleModifier;
    dump: new () => Helper<{
      Args: { Positional: [unknown] };
      Return: void;
    }>;
    'page-title': new () => Helper<{
      Args: { Positional: [string] };
      Return: void;
    }>;
  }
}
