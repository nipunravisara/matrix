import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

const PlayTwotone = (
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
      d="M4 12V8.44c0-4.42 3.13-6.23 6.96-4.02l3.09 1.78 3.09 1.78c3.83 2.21 3.83 5.83 0 8.04l-3.09 1.78-3.09 1.78C7.13 21.79 4 19.98 4 15.56V12Z"
      stroke={props.color}
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default PlayTwotone;
