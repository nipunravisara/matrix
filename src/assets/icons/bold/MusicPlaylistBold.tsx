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
      d="M18 5.25H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h12c.41 0 .75.34.75.75s-.34.75-.75.75ZM15 2.75H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75ZM13.91 16.21c-.34 0-.62.28-.62.62 0 .34.28.62.62.62.34 0 .62-.28.62-.62 0-.34-.28-.62-.62-.62ZM9.51 17.74c0-.34-.28-.61-.62-.61-.34 0-.62.28-.62.62 0 .34.28.62.62.62.34-.01.62-.29.62-.63Z"
      fill={props.color}
    />
    <Path
      d="M18 7H6c-2.2 0-4 1.8-4 4v7c0 2.2 1.8 4 4 4h12c2.2 0 4-1.8 4-4v-7c0-2.2-1.8-4-4-4Zm-1.97 5.46v4.37c0 .02-.01.03-.01.05a2.122 2.122 0 0 1-2.11 2.07 2.121 2.121 0 0 1 0-4.24c.22 0 .42.04.62.1v-1.37l-3.52.96v3.34a2.121 2.121 0 0 1-4.24 0c0-1.17.95-2.12 2.12-2.12.22 0 .42.04.62.1v-3.5c0-.89.55-1.61 1.4-1.83l2.73-.75c.88-.23 1.42 0 1.73.24.3.23.66.7.66 1.59v.99Z"
      fill={props.color}
    />
  </Svg>
);

export default SvgComponent;
