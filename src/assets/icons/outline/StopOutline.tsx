import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

const StopOutline = (
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
      d="M14.7 21.75H9.3c-4.94 0-7.05-2.11-7.05-7.05V9.3c0-4.94 2.11-7.05 7.05-7.05h5.4c4.94 0 7.05 2.11 7.05 7.05v5.4c0 4.94-2.11 7.05-7.05 7.05Zm-5.4-18c-4.1 0-5.55 1.45-5.55 5.55v5.4c0 4.1 1.45 5.55 5.55 5.55h5.4c4.1 0 5.55-1.45 5.55-5.55V9.3c0-4.1-1.45-5.55-5.55-5.55H9.3Z"
      fill={props.color}
    />
  </Svg>
);

export default StopOutline;
