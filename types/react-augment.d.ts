import "react";

declare module "react" {
  // Allow CSS custom properties (e.g. "--d") in style objects.
  interface CSSProperties {
    [key: `--${string}`]: string | number | undefined;
  }
  // The play/pause icons toggle the HTML `hidden` attribute on <svg> (main.js).
  interface SVGAttributes<T> {
    hidden?: boolean;
  }
}
