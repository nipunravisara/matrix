import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

const SvgComponent = (
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
      d="m20.36 7.78-15.82 9.5c-.61.37-1.43 0-1.51-.71-.02-.19-.03-.38-.03-.57V8c0-3 2-5 5-5h8c3 0 4.23 1.54 4.81 3.65.12.44-.07.9-.45 1.13ZM21 11.09V16c0 3-2 5-5 5H8c-.92 0-1.79-.25-2.53-.69-.64-.37-.6-1.31.03-1.69l13.98-8.39c.67-.4 1.52.08 1.52.86Z"
      fill={props.color}
    />
  </Svg>
);

export default SvgComponent;
