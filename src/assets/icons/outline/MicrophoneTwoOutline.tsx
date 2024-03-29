import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

const MicrophoneTwoOutline = (
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
      d="M12 16.25c-2.62 0-4.75-2.13-4.75-4.75V6c0-2.62 2.13-4.75 4.75-4.75S16.75 3.38 16.75 6v5.5c0 2.62-2.13 4.75-4.75 4.75Zm0-13.5c-1.79 0-3.25 1.46-3.25 3.25v5.5c0 1.79 1.46 3.25 3.25 3.25s3.25-1.46 3.25-3.25V6c0-1.79-1.46-3.25-3.25-3.25Z"
      fill={props.color}
    />
    <Path
      d="M12 19.75c-4.63 0-8.4-3.77-8.4-8.4v-1.7c0-.41.34-.75.75-.75s.75.34.75.75v1.7c0 3.8 3.1 6.9 6.9 6.9 3.8 0 6.9-3.1 6.9-6.9v-1.7c0-.41.34-.75.75-.75s.75.34.75.75v1.7c0 4.63-3.77 8.4-8.4 8.4ZM13.39 7.18c-.08 0-.17-.01-.26-.04-.73-.27-1.53-.27-2.26 0a.75.75 0 1 1-.51-1.41 4.89 4.89 0 0 1 3.29 0c.39.14.59.57.45.96-.12.3-.41.49-.71.49Z"
      fill={props.color}
    />
    <Path
      d="M12.8 9.3c-.07 0-.13-.01-.2-.03-.4-.11-.81-.11-1.21 0a.75.75 0 0 1-.92-.53c-.11-.39.13-.8.53-.91.65-.18 1.35-.18 2 0 .4.11.64.52.53.92-.09.33-.4.55-.73.55ZM12 22.75c-.41 0-.75-.34-.75-.75v-3c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .41-.34.75-.75.75Z"
      fill={props.color}
    />
  </Svg>
);

export default MicrophoneTwoOutline;
