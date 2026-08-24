import { css } from 'styled-components';

const breakpoints = {
  xsMax: '479px',
  smMin: '480px',
  mdMin: '768px',
  lgMin: '1024px',
  xlMin: '1280px',
  xxlMin: '1536px',
};

const SANAMainQueries = {
  breakpoints,
  mediaQueries: {
    xs: `(max-width: ${breakpoints.xsMax})`,
    sm: `(min-width: ${breakpoints.smMin})`,
    md: `(min-width: ${breakpoints.mdMin})`,
    lg: `(min-width: ${breakpoints.lgMin})`,
    xl: `(min-width: ${breakpoints.xlMin})`,
    xxl: `(min-width: ${breakpoints.xxlMin})`,
  },
};

export const mobile = rules => (
  css`
    @media (max-width: 767px) {
      ${rules}
    }
  `
);

export const xs = rules => (
  css`
    @media ${SANAMainQueries.mediaQueries.xs} {
      ${rules}
    }
  `
);

export const sm = rules => (
  css`
    @media ${SANAMainQueries.mediaQueries.sm} {
      ${rules}
    }
  `
);

export const md = rules => (
  css`
    @media ${SANAMainQueries.mediaQueries.md} {
      ${rules}
    }
  `
);

export const lg = rules => (
  css`
    @media ${SANAMainQueries.mediaQueries.lg} {
      ${rules}
    }
  `
);

export const xl = rules => (
  css`
    @media ${SANAMainQueries.mediaQueries.xl} {
      ${rules}
    }
  `
);

export const xxl = rules => (
  css`
    @media ${SANAMainQueries.mediaQueries.xxl} {
      ${rules}
    }
  `
);
