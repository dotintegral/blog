const createBreakpoint = (width: number) =>
  `@media screen and (min-width: ${width}px)`;

export const mobileUp = createBreakpoint(426);

export const tabletUp = createBreakpoint(769);

export const laptopUp = createBreakpoint(1024);
