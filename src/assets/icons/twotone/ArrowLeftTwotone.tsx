import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const ArrowLeftTwotone = (
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
      d="M15 19.92 8.48 13.4c-.77-.77-.77-2.03 0-2.8L15 4.08"
      stroke={props.color}
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default ArrowLeftTwotone;
