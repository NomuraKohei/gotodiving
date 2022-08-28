/**
 * Do not edit directly
 * Generated on Sun, 28 Aug 2022 07:52:14 GMT
 */

export default tokens;

declare interface DesignToken {
  value: any;
  name?: string;
  comment?: string;
  themeable?: boolean;
  attributes?: {
    category?: string;
    type?: string;
    item?: string;
    subitem?: string;
    state?: string;
    [key: string]: any;
  };
  [key: string]: any;
}

declare const tokens: {
  "tokenSetOrder": {
    "0": DesignToken
  },
  "color": {
    "background": {
      "default": DesignToken,
      "header": DesignToken,
      "balloon": DesignToken
    },
    "text": {
      "disabled": DesignToken,
      "primary": DesignToken,
      "secondary": DesignToken
    },
    "front": {
      "cover": DesignToken
    }
  },
  "fontFamilies": {
    "hiragino-kaku-gothic-pro": DesignToken
  },
  "lineHeights": {
    "0": DesignToken,
    "1": DesignToken
  },
  "fontWeights": {
    "hiragino-kaku-gothic-pro-0": DesignToken,
    "hiragino-kaku-gothic-pro-1": DesignToken
  },
  "fontSize": {
    "0": DesignToken,
    "1": DesignToken,
    "2": DesignToken,
    "3": DesignToken,
    "4": DesignToken,
    "5": DesignToken
  },
  "letterSpacing": {
    "0": DesignToken,
    "1": DesignToken,
    "2": DesignToken
  },
  "paragraphSpacing": {
    "0": DesignToken
  },
  "text": {
    "h1": DesignToken,
    "h2": DesignToken,
    "xlarge": DesignToken,
    "medium": DesignToken,
    "large": DesignToken,
    "small": DesignToken
  },
  "textCase": {
    "none": DesignToken
  },
  "textDecoration": {
    "none": DesignToken
  }
}