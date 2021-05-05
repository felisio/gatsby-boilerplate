export const breakPointsSize = {
    xs: 576,
    sm: 768,
    smMax: 991,
    md: 992,
    mdMax: 1199,
    lg: 1200,
};

export const breakpoints = {
    xs: `${breakPointsSize.xs}px`,
    sm: `${breakPointsSize.sm}px`,
    smMax: `${breakPointsSize.smMax}px`,
    md: `${breakPointsSize.md}px`,
    mdMax: `${breakPointsSize.mdMax}1px`,
    lg: `${breakPointsSize.lg}px`,
};

const getMediaQueryUp = (size: string) => `@media (min-width: ${size})`;

export const mediaQuery = {
    upXs: getMediaQueryUp(breakpoints.xs),
    upSm: getMediaQueryUp(breakpoints.sm),
    upMd: getMediaQueryUp(breakpoints.md),
    upLg: getMediaQueryUp(breakpoints.lg),
};
