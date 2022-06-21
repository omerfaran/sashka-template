import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    colors: {
      background: string;
      sidebar: string;
      accent: string;
      lightestGray: string;
      lightGray: string;
      mediumGray: string;
      darkGray: string;
    };
    sizes: {
      headerHeight: string;
      iconDimension: string;
    };
    animations: {
      AnimationDuration: string;
      AnimationTimingCurve: string;
    };
  }
}
