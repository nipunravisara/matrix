import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const StopBulk = (
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
      d="m20.9 7.66-.78.47-.49.3-.93.55-13.94 8.36-.09.05-.53.32-.61.37C3.17 17.19 3 16.07 3 14.7V9.3C3 4.8 4.8 3 9.3 3h5.4c3.91 0 5.78 1.36 6.2 4.66Z"
      fill={props.color}
    />
    <Path
      opacity={0.4}
      d="M21 9.2v5.5c0 4.5-1.8 6.3-6.3 6.3H9.3c-2.44 0-4.09-.53-5.07-1.74l.3-.18.61-.37.53-.32.09-.05L19.7 9.98l.93-.55.37-.23Z"
      fill={props.color}
    />
  </Svg>
);

export default StopBulk;
