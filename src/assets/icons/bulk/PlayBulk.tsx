import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

const PlayBulk = (
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
      d="M18.7 8.98 4.14 17.71c-.09-.33-.14-.68-.14-1.04V7.33c0-3.08 3.33-5 6-3.46l4.04 2.33 4.05 2.34c.22.13.43.27.61.44Z"
      fill={props.color}
    />
    <Path
      opacity={0.4}
      d="m18.09 15.46-4.05 2.34L10 20.13c-1.91 1.1-4.16.44-5.28-1.17l.42-.25 14.44-8.66c1 1.8.51 4.26-1.49 5.41Z"
      fill={props.color}
    />
  </Svg>
);

export default PlayBulk;
