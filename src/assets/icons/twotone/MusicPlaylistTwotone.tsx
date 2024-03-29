import * as React from 'react';
import Svg, {G, Path, SvgProps} from 'react-native-svg';

const MusicPlaylistTwotone = (
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
      d="M17 22H7c-3 0-5-1.5-5-5v-5c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v5c0 3.5-2 5-5 5ZM6 4.5h12M9 2h6"
      stroke={props.color}
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <G
      opacity={0.4}
      stroke={props.color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M8.89 19.11a1.37 1.37 0 1 0 0-2.74 1.37 1.37 0 0 0 0 2.74Z" />
      <Path d="M15.28 16.83v-5.35c0-1.14-.71-1.3-1.44-1.1l-2.74.75c-.5.14-.84.53-.84 1.1v5.51" />
      <Path d="M13.91 18.2a1.37 1.37 0 1 0 0-2.74 1.37 1.37 0 0 0 0 2.74ZM10.26 13.83l5.02-1.37" />
    </G>
  </Svg>
);

export default MusicPlaylistTwotone;
