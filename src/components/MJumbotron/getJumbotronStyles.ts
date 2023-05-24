import {
  FlexAlignType,
  ImageStyle,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from 'react-native';
import {MLabelVariations} from '../MLabel/MLabel';
import {MTextVariant} from '../MText/MText';
import {MTitleVariant} from '../MTitle/Mtitle';
import {MJumbotronAlignment, MJumbotronSizes, TMJumbotron} from './MJumbotron';

export interface MJumbotronCustomStyles
  extends Omit<
    ViewStyle | TextStyle | ImageStyle,
    MLabelVariations | MTextVariant | MTitleVariant
  > {
  container: ViewStyle;
  description: TextStyle;
  sizes: {
    label: MLabelVariations;
    text: MTextVariant;
    title: MTitleVariant;
  };
}

function getJumbotronAlignment(
  alignment?: TMJumbotron['alignment']
): FlexAlignType {
  switch (alignment) {
    case MJumbotronAlignment.center:
      return 'center';
    case MJumbotronAlignment.right:
      return 'flex-end';
    default:
      return 'flex-start';
  }
}

function getJumbotronDescriptionAlignment(
  alignment?: TMJumbotron['alignment']
): 'center' | 'auto' | 'left' | 'right' | 'justify' {
  switch (alignment) {
    case MJumbotronAlignment.center:
      return 'center';
    case MJumbotronAlignment.right:
      return 'right';
    default:
      return 'left';
  }
}

function getJumbotronSize(
  size?: TMJumbotron['size']
): MJumbotronCustomStyles['sizes'] {
  switch (size) {
    case MJumbotronSizes.small:
      return {
        label: MLabelVariations.l5,
        text: MTextVariant.p5,
        title: MTitleVariant.h5,
      };
    case MJumbotronSizes.medium:
      return {
        label: MLabelVariations.l4,
        text: MTextVariant.p4,
        title: MTitleVariant.h4,
      };
    default:
      return {
        label: MLabelVariations.l3,
        text: MTextVariant.p3,
        title: MTitleVariant.h3,
      };
  }
}

export const MJumbotronStyles = (props: TMJumbotron) => {
  const {alignment, size} = props;

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  return StyleSheet.create<MJumbotronCustomStyles>({
    container: {
      justifyContent: 'center',
      alignItems: getJumbotronAlignment(alignment),
    },
    description: {
      textAlign: getJumbotronDescriptionAlignment(alignment),
    },
    sizes: getJumbotronSize(size),
  });
};
