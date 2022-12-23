import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const EyeSlashOutline = (
  props: SvgProps & {
    xmlns?: string;
    xmlnsXlink?: string;
  }
) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M9.47 15.28c-.19 0-.38-.07-.53-.22A4.305 4.305 0 0 1 7.67 12c0-2.39 1.94-4.33 4.33-4.33 1.15 0 2.24.45 3.06 1.27a.75.75 0 0 1 0 1.06L10 15.06c-.15.15-.34.22-.53.22ZM12 9.17a2.834 2.834 0 0 0-2.46 4.23l3.86-3.86c-.42-.24-.9-.37-1.4-.37Z"
      fill={props.color}
    />
    <Path
      d="M5.6 18.51c-.17 0-.35-.06-.49-.18-1.07-.91-2.03-2.03-2.85-3.33-1.06-1.65-1.06-4.34 0-6C4.7 5.18 8.25 2.98 12 2.98c2.2 0 4.37.76 6.27 2.19a.75.75 0 0 1-.9 1.2c-1.64-1.24-3.5-1.89-5.37-1.89-3.23 0-6.32 1.94-8.48 5.33-.75 1.17-.75 3.21 0 4.38s1.61 2.18 2.56 3c.31.27.35.74.08 1.06-.14.17-.35.26-.56.26ZM12 21.02c-1.33 0-2.63-.27-3.88-.8a.75.75 0 0 1-.4-.98c.16-.38.6-.56.98-.4 1.06.45 2.17.68 3.29.68 3.23 0 6.32-1.94 8.48-5.33.75-1.17.75-3.21 0-4.38-.31-.49-.65-.96-1.01-1.4a.76.76 0 0 1 .11-1.06.75.75 0 0 1 1.06.11c.39.48.77 1 1.11 1.54 1.06 1.65 1.06 4.34 0 6-2.44 3.82-5.99 6.02-9.74 6.02Z"
      fill={props.color}
    />
    <Path
      d="M12.69 16.27c-.35 0-.67-.25-.74-.61-.08-.41.19-.8.6-.87 1.1-.2 2.02-1.12 2.22-2.22.08-.41.47-.67.88-.6.41.08.68.47.6.88-.32 1.73-1.7 3.1-3.42 3.42-.05-.01-.09 0-.14 0ZM2 22.75c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06L8.94 14c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-7.47 7.47c-.15.15-.34.22-.53.22ZM14.53 10.22c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l7.47-7.47c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06L15.06 10c-.15.15-.34.22-.53.22Z"
      fill={props.color}
    />
  </Svg>
);

export default EyeSlashOutline;
