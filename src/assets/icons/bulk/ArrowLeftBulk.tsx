import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

const ArrowLeftBulk = (
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
      d="m10.77 8.52 5.05 3.79v5.61c0 .96-1.16 1.44-1.84.76L8.8 13.51a2.13 2.13 0 0 1 0-3.01l1.97-1.98Z"
      fill={props.color}
    />
    <Path
      d="M15.82 6.08v6.23l-5.05-3.79 3.21-3.21c.68-.67 1.84-.19 1.84.77Z"
      fill={props.color}
    />
  </Svg>
);

export default ArrowLeftBulk;
