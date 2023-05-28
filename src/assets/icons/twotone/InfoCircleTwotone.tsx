import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

const InfoCircleTwotone = (
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
      d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10Z"
      fill={props.color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      opacity={0.34}
      d="M12 8v5"
      fill={props.color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      opacity={0.34}
      d="M11.995 16h.009"
      fill={props.color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default InfoCircleTwotone;
