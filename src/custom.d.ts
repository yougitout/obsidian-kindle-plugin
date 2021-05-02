/* eslint-disable  @typescript-eslint/no-explicit-any */

declare module '*.njk' {
  const content: any;
  export default content;
}

declare module '*.svg' {
  const content: any;
  export default content;
}

declare module 'svelte-loading-spinners' {
  import { SvelteComponent } from 'svelte';

  export class Jumper extends SvelteComponent {
    color: string;
    size: string;
    duration: string;
  }
}