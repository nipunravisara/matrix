import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

const PauseOutline = (
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
      d="M8.64 21.75H5.01c-1.86 0-2.76-.86-2.76-2.64V4.89c0-1.78.9-2.64 2.76-2.64h3.63c1.86 0 2.76.86 2.76 2.64v14.22c0 1.78-.9 2.64-2.76 2.64Zm-3.63-18c-1.08 0-1.26.27-1.26 1.14v14.22c0 .87.17 1.14 1.26 1.14h3.63c1.08 0 1.26-.27 1.26-1.14V4.89c0-.87-.17-1.14-1.26-1.14H5.01ZM18.99 21.75h-3.63c-1.86 0-2.76-.86-2.76-2.64V4.89c0-1.78.9-2.64 2.76-2.64h3.63c1.86 0 2.76.86 2.76 2.64v14.22c0 1.78-.9 2.64-2.76 2.64Zm-3.63-18c-1.08 0-1.26.27-1.26 1.14v14.22c0 .87.17 1.14 1.26 1.14h3.63c1.08 0 1.26-.27 1.26-1.14V4.89c0-.87-.17-1.14-1.26-1.14h-3.63Z"
      fill={props.color}
    />
  </Svg>
);

export default PauseOutline;
