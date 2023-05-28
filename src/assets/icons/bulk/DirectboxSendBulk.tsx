import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

const DirectboxSendBulk = (
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
      opacity={0.4}
      d="M14.79 6H9.21c-4.42 0-4.42 2.35-4.42 4.42v1.79c0 .22.1.42.27.55.17.13.4.18.61.12.45-.12 1.01-.18 1.68-.18.67 0 .81.08 1.21.38l.91.96a3.48 3.48 0 0 0 5.08 0l.91-.96c.4-.3.54-.38 1.21-.38.67 0 1.23.06 1.68.18.21.06.43.01.61-.12.17-.13.27-.34.27-.55v-1.79C19.21 8.35 19.21 6 14.79 6Z"
      fill={props.color}
    />
    <Path
      d="M14.28 4.95c-.26.26-.69.26-.95 0l-.65-.65v4.77a.68.68 0 0 1-1.36 0V4.3l-.65.65c-.26.26-.69.26-.95 0a.676.676 0 0 1 0-.95l1.8-1.8c.01-.01.01-.01.02-.01.06-.05.12-.1.2-.13.09-.04.17-.06.26-.06s.17.02.26.05c.08.03.16.08.22.15l1.8 1.8c.26.26.26.69 0 .95ZM18.69 11.53c-.57-.15-1.24-.23-2.04-.23-1.11 0-1.52.27-2.09.7-.03.02-.06.05-.09.08l-.95 1.01c-.8.84-2.24.85-3.04-.01l-.95-1a.647.647 0 0 0-.09-.08c-.57-.43-.98-.7-2.09-.7-.8 0-1.47.08-2.04.23-2.38.64-2.38 2.53-2.38 4.19v.93c0 2.51 0 5.35 5.35 5.35h7.44c3.55 0 5.35-1.8 5.35-5.35v-.93c0-1.66 0-3.55-2.38-4.19Zm-4.36 6.87H9.67c-.38 0-.69-.31-.69-.7 0-.39.31-.7.69-.7h4.66c.38 0 .69.31.69.7 0 .39-.31.7-.69.7Z"
      fill={props.color}
    />
    <Path
      opacity={0.4}
      d="M15.02 17.7c0 .39-.31.7-.69.7H9.67c-.38 0-.69-.31-.69-.7 0-.39.31-.7.69-.7h4.66c.38 0 .69.31.69.7Z"
      fill={props.color}
    />
  </Svg>
);

export default DirectboxSendBulk;
