import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

const EyeSlashBulk = (
  props: SvgProps & {
    xmlns?: string;
    xmlnsXlink?: string;
    width?: number;
    height?: number;
  }
) => (
  <Svg
    width={props.width}
    height={props.height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      opacity={0.4}
      d="M21.25 9.15a14.57 14.57 0 0 0-1.63-2.11l-3.77 3.77c.12.37.19.77.19 1.19 0 2.24-1.81 4.04-4.04 4.04-.42 0-.82-.07-1.19-.19l-3.46 3.46c1.46.82 3.04 1.25 4.65 1.25 1.78 0 3.51-.52 5.09-1.49 1.58-.98 3-2.41 4.16-4.23 1-1.56 1-4.12 0-5.69Z"
      fill={props.color}
    />
    <Path
      d="m14.02 9.98-4.04 4.04c-.51-.52-.84-1.24-.84-2.02 0-1.57 1.28-2.86 2.86-2.86.78 0 1.5.33 2.02.84Z"
      fill={props.color}
    />
    <Path
      opacity={0.4}
      d="m18.25 5.75-3.39 3.39A3.986 3.986 0 0 0 12 7.96c-2.24 0-4.04 1.81-4.04 4.04 0 1.12.45 2.13 1.18 2.86l-3.38 3.39h-.01c-1.11-.9-2.13-2.05-3-3.41-1-1.57-1-4.12 0-5.69C3.91 7.33 5.33 5.9 6.91 4.92c1.58-.96 3.31-1.49 5.09-1.49 2.23 0 4.39.82 6.25 2.32Z"
      fill={props.color}
    />
    <Path
      d="M14.86 12c0 1.57-1.28 2.86-2.86 2.86-.06 0-.11 0-.17-.02l3.01-3.01c.02.06.02.11.02.17ZM21.77 2.23c-.3-.3-.79-.3-1.09 0L2.23 20.69c-.3.3-.3.79 0 1.09a.758.758 0 0 0 1.08-.01L21.77 3.31c.31-.3.31-.78 0-1.08Z"
      fill={props.color}
    />
  </Svg>
);

export default EyeSlashBulk;
