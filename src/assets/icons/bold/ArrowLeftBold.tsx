import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

const ArrowLeftBold = (
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
      d="m13.98 5.32-3.21 3.21-1.97 1.96a2.13 2.13 0 0 0 0 3.01l5.18 5.18c.68.68 1.84.19 1.84-.76V6.08c0-.96-1.16-1.44-1.84-.76Z"
      fill={props.color}
    />
  </Svg>
);

export default ArrowLeftBold;
