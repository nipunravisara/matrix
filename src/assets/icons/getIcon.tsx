import React from 'react';
import {
  DirectboxSendOutline,
  DirectboxSendBold,
  DirectboxSendBulk,
  DirectboxSendTwotone,
  TrashOutline,
  TrashBold,
  TrashBulk,
  TrashTwotone,
  PlayOutline,
  PlayBold,
  PlayBulk,
  PlayTwotone,
  MusicPlaylistOutline,
  MusicPlaylistBold,
  MusicPlaylistBulk,
  MusicPlaylistTwotone,
  StopOutline,
  StopBold,
  StopBulk,
  StopTwotone,
  PauseOutline,
  PauseBold,
  PauseBulk,
  PauseTwotone,
  MicrophoneTwoOutline,
  MicrophoneTwoBold,
  MicrophoneTwoBulk,
  MicrophoneTwoTwotone,
  ArrowLeftOutline,
  ArrowLeftBold,
  ArrowLeftBulk,
  ArrowLeftTwotone,
  EyeOutline,
  EyeBold,
  EyeBulk,
  EyeTwotone,
  EyeSlashBold,
  EyeSlashOutline,
  EyeSlashBulk,
  EyeSlashTwotone,
} from '../../assets/icons';
import type {TTheme} from '../../theme/theme';
import useTheme from '../../theme/useTheme';

interface TGetIcon {
  iconName: string;
  iconColor?: string;
  component?: 'button' | 'icon';
  disabled?: boolean;
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
  const {iconName, iconColor, component, disabled} = props;

  switch (iconName) {
    case 'directbox-send-outline':
      return (
        <DirectboxSendOutline
          color={getIconColor(iconColor, isDark, colors, component, disabled)}
        />
      );
    case 'directbox-send-bold':
      return (
        <DirectboxSendBold
          color={getIconColor(iconColor, isDark, colors, component, disabled)}
        />
      );
    case 'directbox-send-bulk':
      return (
        <DirectboxSendBulk
          color={getIconColor(iconColor, isDark, colors, component, disabled)}
        />
      );
    case 'directbox-send-twotone':
      return (
        <DirectboxSendTwotone
          color={getIconColor(iconColor, isDark, colors, component, disabled)}
        />
      );

    case 'trash-outline':
      return (
        <TrashOutline
          color={getIconColor(iconColor, isDark, colors, component, disabled)}
        />
      );
    case 'trash-bold':
      return (
        <TrashBold
          color={getIconColor(iconColor, isDark, colors, component, disabled)}
        />
      );
    case 'trash-bulk':
      return (
        <TrashBulk
          color={getIconColor(iconColor, isDark, colors, component, disabled)}
        />
      );
    case 'trash-twotone':
      return (
        <TrashTwotone
          color={getIconColor(iconColor, isDark, colors, component, disabled)}
        />
      );

    case 'play-outline':
      return (
        <PlayOutline
          color={getIconColor(iconColor, isDark, colors, component, disabled)}
        />
      );
    case 'play-bold':
      return (
        <PlayBold
          color={getIconColor(iconColor, isDark, colors, component, disabled)}
        />
      );
    case 'play-bulk':
      return (
        <PlayBulk
          color={getIconColor(iconColor, isDark, colors, component, disabled)}
        />
      );
    case 'play-twotone':
      return (
        <PlayTwotone
          color={getIconColor(iconColor, isDark, colors, component, disabled)}
        />
      );

    case 'music-playlist-outline':
      return (
        <MusicPlaylistOutline
          color={getIconColor(iconColor, isDark, colors, component, disabled)}
        />
      );
    case 'music-playlist-bold':
      return (
        <MusicPlaylistBold
          color={getIconColor(iconColor, isDark, colors, component, disabled)}
        />
      );
    case 'music-playlist-bulk':
      return (
        <MusicPlaylistBulk
          color={getIconColor(iconColor, isDark, colors, component, disabled)}
        />
      );
    case 'music-playlist-twotone':
      return (
        <MusicPlaylistTwotone
          color={getIconColor(iconColor, isDark, colors, component, disabled)}
        />
      );

    case 'stop-outline':
      return (
        <StopOutline
          color={getIconColor(iconColor, isDark, colors, component, disabled)}
        />
      );
    case 'stop-bold':
      return (
        <StopBold
          color={getIconColor(iconColor, isDark, colors, component, disabled)}
        />
      );
    case 'stop-bulk':
      return (
        <StopBulk
          color={getIconColor(iconColor, isDark, colors, component, disabled)}
        />
      );
    case 'stop-twotone':
      return (
        <StopTwotone
          color={getIconColor(iconColor, isDark, colors, component, disabled)}
        />
      );

    case 'pause-outline':
      return (
        <PauseOutline
          color={getIconColor(iconColor, isDark, colors, component, disabled)}
        />
      );
    case 'pause-bold':
      return (
        <PauseBold
          color={getIconColor(iconColor, isDark, colors, component, disabled)}
        />
      );
    case 'pause-bulk':
      return (
        <PauseBulk
          color={getIconColor(iconColor, isDark, colors, component, disabled)}
        />
      );
    case 'pause-twotone':
      return (
        <PauseTwotone
          color={getIconColor(iconColor, isDark, colors, component, disabled)}
        />
      );

    case 'microphone-two-outline':
      return (
        <MicrophoneTwoOutline
          color={getIconColor(iconColor, isDark, colors, component, disabled)}
        />
      );
    case 'microphone-two-bold':
      return (
        <MicrophoneTwoBold
          color={getIconColor(iconColor, isDark, colors, component, disabled)}
        />
      );
    case 'microphone-two-bulk':
      return (
        <MicrophoneTwoBulk
          color={getIconColor(iconColor, isDark, colors, component, disabled)}
        />
      );
    case 'microphone-two-twotone':
      return (
        <MicrophoneTwoTwotone
          color={getIconColor(iconColor, isDark, colors, component, disabled)}
        />
      );

    case 'arrow-left-outline':
      return (
        <ArrowLeftOutline
          color={getIconColor(iconColor, isDark, colors, component, disabled)}
        />
      );
    case 'arrow-left-bold':
      return (
        <ArrowLeftBold
          color={getIconColor(iconColor, isDark, colors, component, disabled)}
        />
      );
    case 'arrow-left-bulk':
      return (
        <ArrowLeftBulk
          color={getIconColor(iconColor, isDark, colors, component, disabled)}
        />
      );
    case 'arrow-left-twotone':
      return (
        <ArrowLeftTwotone
          color={getIconColor(iconColor, isDark, colors, component, disabled)}
        />
      );

    case 'eye-slash-outline':
      return (
        <EyeSlashOutline
          color={getIconColor(iconColor, isDark, colors, component, disabled)}
        />
      );
    case 'eye-slash-bold':
      return (
        <EyeSlashBold
          color={getIconColor(iconColor, isDark, colors, component, disabled)}
        />
      );
    case 'eye-slash-bulk':
      return (
        <EyeSlashBulk
          color={getIconColor(iconColor, isDark, colors, component, disabled)}
        />
      );
    case 'eye-slash-twotone':
      return (
        <EyeSlashTwotone
          color={getIconColor(iconColor, isDark, colors, component, disabled)}
        />
      );

    case 'eye-outline':
      return (
        <EyeOutline
          color={getIconColor(iconColor, isDark, colors, component, disabled)}
        />
      );
    case 'eye-bold':
      return (
        <EyeBold
          color={getIconColor(iconColor, isDark, colors, component, disabled)}
        />
      );
    case 'eye-bulk':
      return (
        <EyeBulk
          color={getIconColor(iconColor, isDark, colors, component, disabled)}
        />
      );
    case 'eye-twotone':
      return (
        <EyeTwotone
          color={getIconColor(iconColor, isDark, colors, component, disabled)}
        />
      );
    default:
      return (
        <EyeOutline
          color={getIconColor(iconColor, isDark, colors, component, disabled)}
        />
      );
  }
};
