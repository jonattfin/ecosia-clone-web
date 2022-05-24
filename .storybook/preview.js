// import * as nextImage from "next/image";
import React from "react";

import { ImageOptimisationProvider } from "../src/client/providers/image-provider";

// Object.defineProperty(nextImage, 'default', {
//   configurable: true,
//   value: props => <img {...props} />
// });

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <ImageOptimisationProvider unoptimized={true}>
      <Story />
    </ImageOptimisationProvider>
  ),
];
