import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const SvgComponent = (
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
      d="M10.94 6.08A6.93 6.93 0 0 1 12 6c3.18 0 6.17 2.29 7.91 6a15.213 15.213 0 0 1-.9 1.64 1 1 0 0 0 .05 1.152 1 1 0 0 0 1.65-.102 15.76 15.76 0 0 0 1.21-2.3 1 1 0 0 0 0-.79C19.9 6.91 16.1 4 12 4a7.77 7.77 0 0 0-1.4.12 1.014 1.014 0 0 0 .34 2v-.04ZM3.71 2.29a1.004 1.004 0 1 0-1.42 1.42l3.1 3.09a14.62 14.62 0 0 0-3.31 4.8 1 1 0 0 0 0 .8C4.1 17.09 7.9 20 12 20a9.26 9.26 0 0 0 5.05-1.54l3.24 3.25a1.001 1.001 0 0 0 1.639-.325 1 1 0 0 0-.22-1.095l-18-18Zm6.36 9.19 2.45 2.45a2 2 0 0 1-2.45-2.45ZM12 18c-3.18 0-6.17-2.29-7.9-6a12.09 12.09 0 0 1 2.7-3.79L8.57 10A4 4 0 0 0 14 15.43L15.59 17A7.24 7.24 0 0 1 12 18Z"
      fill={props.color}
    />
  </Svg>
);

export default SvgComponent;
