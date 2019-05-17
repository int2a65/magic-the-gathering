const size = {
  mobile: "414px",
  tablet: "768px",
  laptop: "1024px",
  desktop: "2560px"
};

export const device = {
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(min-width: 415px) and (max-width: 1024px)`,
  laptop: `(min-width: ${size.laptop})`,
  desktop: `(min-width: ${size.desktop})`
};