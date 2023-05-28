import React from 'react';
import {
  ArrowLeftBold,
  ArrowLeftBulk,
  ArrowLeftOutline,
  ArrowLeftTwotone,
  DirectboxSendBold,
  DirectboxSendBulk,
  DirectboxSendOutline,
  DirectboxSendTwotone,
  EyeBold,
  EyeBulk,
  EyeOutline,
  EyeSlashBold,
  EyeSlashBulk,
  EyeSlashOutline,
  EyeSlashTwotone,
  EyeTwotone,
  InfoCircleBold,
  InfoCircleBulk,
  InfoCircleOutline,
  InfoCircleTwotone,
  MicrophoneTwoBold,
  MicrophoneTwoBulk,
  MicrophoneTwoOutline,
  MicrophoneTwoTwotone,
  MusicPlaylistBold,
  MusicPlaylistBulk,
  MusicPlaylistOutline,
  MusicPlaylistTwotone,
  PauseBold,
  PauseBulk,
  PauseOutline,
  PauseTwotone,
  PlayBold,
  PlayBulk,
  PlayOutline,
  PlayTwotone,
  SoundBold,
  SoundBulk,
  SoundOutline,
  SoundTwotone,
  StopBold,
  StopBulk,
  StopOutline,
  StopTwotone,
  TrashBold,
  TrashBulk,
  TrashOutline,
  TrashTwotone,
} from '../../assets/icons';
import type {TTheme} from '../../theme/theme';
import useTheme from '../../theme/useTheme';

interface TGetIcon {
  iconName: string;
  iconColor?: string;
  component?: 'button' | 'icon';
  disabled?: boolean;
  width?: number;
  height?: number;
}

function getIconColor(
  iconColor: string | undefined,
  isDark: Pick<TTheme, 'isDark'>['isDark'],
  colors: Pick<TTheme, 'colors'>['colors'],
  component?: Pick<TGetIcon, 'component'>['component'],
  disabled?: Pick<TGetIcon, 'disabled'>['disabled']
): string {
  if (disabled && component === ('icon' as TGetIcon['component'])) {
    return colors.ColorStateDisabled;
  } else if (iconColor) {
    return iconColor;
  } else if (isDark) {
    return '#fff';
  }
  return '#000';
}

export const GetIcon = (props: TGetIcon): JSX.Element => {
  const {isDark, colors} = useTheme();
  const {iconName, iconColor, component, disabled, width, height} = props;

  switch (iconName) {
    case 'info-circle-outline':
      return (
        <InfoCircleOutline
          width={width || 18}
          height={height || 18}
          color={getIconColor(iconColor, isDark, colors, component, disabled)}
        />
      );
    case 'info-circle-bold':
      return (
        <InfoCircleBold
          width={width || 18}
          height={height || 18}
          color={getIconColor(iconColor, isDark, colors, component, disabled)}
        />
      );
    case 'info-circle-bulk':
      return (
        <InfoCircleBulk
          width={width || 18}
          height={height || 18}
          color={getIconColor(iconColor, isDark, colors, component, disabled)}
        />
      );
    case 'info-circle-twotone':
      return (
        <InfoCircleTwotone
          width={width || 18}
          height={height || 18}
          color={getIconColor(iconColor, isDark, colors, component, disabled)}
        />
      );

    case 'sound-outline':
      return (
        <SoundOutline
          width={width || 18}
          height={height || 18}
          color={getIconColor(iconColor, isDark, colors, component, disabled)}
        />
      );
    case 'sound-bold':
      return (
        <SoundBold
          width={width || 18}
          height={height || 18}
          color={getIconColor(iconColor, isDark, colors, component, disabled)}
        />
      );
    case 'sound-bulk':
      return (
        <SoundBulk
          width={width || 18}
          height={height || 18}
          color={getIconColor(iconColor, isDark, colors, component, disabled)}
        />
      );
    case 'sound-twotone':
      return (
        <SoundTwotone
          width={width || 18}
          height={height || 18}
          color={getIconColor(iconColor, isDark, colors, component, disabled)}
        />
      );

    case 'directbox-send-outline':
      return (
        <DirectboxSendOutline
          width={width || 18}
          height={height || 18}
          color={getIconColor(iconColor, isDark, colors, component, disabled)}
        />
      );
    case 'directbox-send-bold':
      return (
        <DirectboxSendBold
          width={width || 18}
          height={height || 18}
          color={getIconColor(iconColor, isDark, colors, component, disabled)}
        />
      );
    case 'directbox-send-bulk':
      return (
        <DirectboxSendBulk
          width={width || 18}
          height={height || 18}
          color={getIconColor(iconColor, isDark, colors, component, disabled)}
        />
      );
    case 'directbox-send-twotone':
      return (
        <DirectboxSendTwotone
          width={width || 18}
          height={height || 18}
          color={getIconColor(iconColor, isDark, colors, component, disabled)}
        />
      );

    case 'trash-outline':
      return (
        <TrashOutline
          width={width || 18}
          height={height || 18}
          color={getIconColor(iconColor, isDark, colors, component, disabled)}
        />
      );
    case 'trash-bold':
      return (
        <TrashBold
          width={width || 18}
          height={height || 18}
          color={getIconColor(iconColor, isDark, colors, component, disabled)}
        />
      );
    case 'trash-bulk':
      return (
        <TrashBulk
          width={width || 18}
          height={height || 18}
          color={getIconColor(iconColor, isDark, colors, component, disabled)}
        />
      );
    case 'trash-twotone':
      return (
        <TrashTwotone
          width={width || 18}
          height={height || 18}
          color={getIconColor(iconColor, isDark, colors, component, disabled)}
        />
      );

    case 'play-outline':
      return (
        <PlayOutline
          width={width || 18}
          height={height || 18}
          color={getIconColor(iconColor, isDark, colors, component, disabled)}
        />
      );
    case 'play-bold':
      return (
        <PlayBold
          width={width || 18}
          height={height || 18}
          color={getIconColor(iconColor, isDark, colors, component, disabled)}
        />
      );
    case 'play-bulk':
      return (
        <PlayBulk
          width={width || 18}
          height={height || 18}
          color={getIconColor(iconColor, isDark, colors, component, disabled)}
        />
      );
    case 'play-twotone':
      return (
        <PlayTwotone
          width={width || 18}
          height={height || 18}
          color={getIconColor(iconColor, isDark, colors, component, disabled)}
        />
      );

    case 'music-playlist-outline':
      return (
        <MusicPlaylistOutline
          width={width || 18}
          height={height || 18}
          color={getIconColor(iconColor, isDark, colors, component, disabled)}
        />
      );
    case 'music-playlist-bold':
      return (
        <MusicPlaylistBold
          width={width || 18}
          height={height || 18}
          color={getIconColor(iconColor, isDark, colors, component, disabled)}
        />
      );
    case 'music-playlist-bulk':
      return (
        <MusicPlaylistBulk
          width={width || 18}
          height={height || 18}
          color={getIconColor(iconColor, isDark, colors, component, disabled)}
        />
      );
    case 'music-playlist-twotone':
      return (
        <MusicPlaylistTwotone
          width={width || 18}
          height={height || 18}
          color={getIconColor(iconColor, isDark, colors, component, disabled)}
        />
      );

    case 'stop-outline':
      return (
        <StopOutline
          width={width || 18}
          height={height || 18}
          color={getIconColor(iconColor, isDark, colors, component, disabled)}
        />
      );
    case 'stop-bold':
      return (
        <StopBold
          width={width || 18}
          height={height || 18}
          color={getIconColor(iconColor, isDark, colors, component, disabled)}
        />
      );
    case 'stop-bulk':
      return (
        <StopBulk
          width={width || 18}
          height={height || 18}
          color={getIconColor(iconColor, isDark, colors, component, disabled)}
        />
      );
    case 'stop-twotone':
      return (
        <StopTwotone
          width={width || 18}
          height={height || 18}
          color={getIconColor(iconColor, isDark, colors, component, disabled)}
        />
      );

    case 'pause-outline':
      return (
        <PauseOutline
          width={width || 18}
          height={height || 18}
          color={getIconColor(iconColor, isDark, colors, component, disabled)}
        />
      );
    case 'pause-bold':
      return (
        <PauseBold
          width={width || 18}
          height={height || 18}
          color={getIconColor(iconColor, isDark, colors, component, disabled)}
        />
      );
    case 'pause-bulk':
      return (
        <PauseBulk
          width={width || 18}
          height={height || 18}
          color={getIconColor(iconColor, isDark, colors, component, disabled)}
        />
      );
    case 'pause-twotone':
      return (
        <PauseTwotone
          width={width || 18}
          height={height || 18}
          color={getIconColor(iconColor, isDark, colors, component, disabled)}
        />
      );

    case 'microphone-two-outline':
      return (
        <MicrophoneTwoOutline
          width={width || 18}
          height={height || 18}
          color={getIconColor(iconColor, isDark, colors, component, disabled)}
        />
      );
    case 'microphone-two-bold':
      return (
        <MicrophoneTwoBold
          width={width || 18}
          height={height || 18}
          color={getIconColor(iconColor, isDark, colors, component, disabled)}
        />
      );
    case 'microphone-two-bulk':
      return (
        <MicrophoneTwoBulk
          width={width || 18}
          height={height || 18}
          color={getIconColor(iconColor, isDark, colors, component, disabled)}
        />
      );
    case 'microphone-two-twotone':
      return (
        <MicrophoneTwoTwotone
          width={width || 18}
          height={height || 18}
          color={getIconColor(iconColor, isDark, colors, component, disabled)}
        />
      );

    case 'arrow-left-outline':
      return (
        <ArrowLeftOutline
          width={width || 18}
          height={height || 18}
          color={getIconColor(iconColor, isDark, colors, component, disabled)}
        />
      );
    case 'arrow-left-bold':
      return (
        <ArrowLeftBold
          width={width || 18}
          height={height || 18}
          color={getIconColor(iconColor, isDark, colors, component, disabled)}
        />
      );
    case 'arrow-left-bulk':
      return (
        <ArrowLeftBulk
          width={width || 18}
          height={height || 18}
          color={getIconColor(iconColor, isDark, colors, component, disabled)}
        />
      );
    case 'arrow-left-twotone':
      return (
        <ArrowLeftTwotone
          width={width || 18}
          height={height || 18}
          color={getIconColor(iconColor, isDark, colors, component, disabled)}
        />
      );

    case 'eye-slash-outline':
      return (
        <EyeSlashOutline
          width={width || 18}
          height={height || 18}
          color={getIconColor(iconColor, isDark, colors, component, disabled)}
        />
      );
    case 'eye-slash-bold':
      return (
        <EyeSlashBold
          width={width || 18}
          height={height || 18}
          color={getIconColor(iconColor, isDark, colors, component, disabled)}
        />
      );
    case 'eye-slash-bulk':
      return (
        <EyeSlashBulk
          width={width || 18}
          height={height || 18}
          color={getIconColor(iconColor, isDark, colors, component, disabled)}
        />
      );
    case 'eye-slash-twotone':
      return (
        <EyeSlashTwotone
          width={width || 18}
          height={height || 18}
          color={getIconColor(iconColor, isDark, colors, component, disabled)}
        />
      );

    case 'eye-outline':
      return (
        <EyeOutline
          width={width || 18}
          height={height || 18}
          color={getIconColor(iconColor, isDark, colors, component, disabled)}
        />
      );
    case 'eye-bold':
      return (
        <EyeBold
          width={width || 18}
          height={height || 18}
          color={getIconColor(iconColor, isDark, colors, component, disabled)}
        />
      );
    case 'eye-bulk':
      return (
        <EyeBulk
          width={width || 18}
          height={height || 18}
          color={getIconColor(iconColor, isDark, colors, component, disabled)}
        />
      );
    case 'eye-twotone':
      return (
        <EyeTwotone
          width={width || 18}
          height={height || 18}
          color={getIconColor(iconColor, isDark, colors, component, disabled)}
        />
      );
    default:
      return (
        <EyeOutline
          width={width || 18}
          height={height || 18}
          color={getIconColor(iconColor, isDark, colors, component, disabled)}
        />
      );
  }
};
