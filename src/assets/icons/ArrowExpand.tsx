import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const ArrowExpand = (
  props: SvgProps & {
    xmlns?: string;
    xmlnsXlink?: string;
  }
) => {
  console.log(props.color);

  return (
    <Svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M9.71 6.29a1 1 0 0 0-1.42 0l-5 5a1 1 0 0 0 0 1.42l5 5a.998.998 0 0 0 1.42 0 .999.999 0 0 0 0-1.42L5.41 12l4.3-4.29a1 1 0 0 0 0-1.42Zm11 5-5-5a1.004 1.004 0 1 0-1.42 1.42l4.3 4.29-4.3 4.29a1.001 1.001 0 0 0 .325 1.639.999.999 0 0 0 1.095-.22l5-5a.997.997 0 0 0 .219-1.094.998.998 0 0 0-.22-.325Z"
        fill={props.color}
      />
    </Svg>
  );
};

export default ArrowExpand;
