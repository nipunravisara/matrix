import React, {useState} from 'react';
import {TextInput, TouchableHighlight, View, ViewStyle} from 'react-native';
import MLabel from '../MLabel/MLabel';
import {MTextInputStyles} from './MTextInputStyles';
import {Control, Controller, FieldErrorsImpl} from 'react-hook-form';
import MText, {MTextVariant} from '../MText/MText';
import MIcon from '../MIcon/MIcon';

export enum MTextInputStateVariations {
  default,
  focused,
  success,
  error,
}

export interface TMTextInput {
  label?: string;
  name: string;
  placeholder: string;
  hint?: string;
  prefix?: JSX.Element | string;
  styles?: ViewStyle;
  control: Control<any, any>;
  secured?: boolean;
  errors: Partial<FieldErrorsImpl<any>>;
}

function getErrors(props: TMTextInput): JSX.Element | undefined {
  const {name, errors} = props;

  if (errors && errors[name]) {
    return (
      <MText
        content={errors[name]?.message as string}
        type={MTextVariant.p3}
        styles={MTextInputStyles(props).error}
      />
    );
  }
  return;
}

export default function MTextInput(props: TMTextInput) {
  const {label, name, placeholder, hint, prefix, styles, control, secured} =
    props;

  const [preview, setPreview] = useState<boolean>(false);

  // ControllerRenderProps<any>
  return (
    <View style={styles}>
      {label && <MLabel content={label} styles={{marginBottom: 4}} />}
      <Controller
        name={name}
        control={control}
        render={({field: {onChange, onBlur, value}}) => {
          return (
            <View style={MTextInputStyles(props).container}>
              <View style={MTextInputStyles(props).innerContainer}>
                {prefix && typeof prefix === 'string' ? (
                  <View style={{marginRight: 8}}>
                    <MIcon
                      iconName={prefix}
                      color={MTextInputStyles(props).prefix.color}
                    />
                  </View>
                ) : (
                  prefix
                )}
                <TextInput
                  onBlur={onBlur}
                  onChangeText={(value) => onChange(value)}
                  value={value as string}
                  placeholder={placeholder}
                  placeholderTextColor={
                    MTextInputStyles(props).placeholder.color
                  }
                  secureTextEntry={secured && !preview}
                  style={MTextInputStyles(props).textField}
                />
              </View>
              {secured && (
                <TouchableHighlight
                  underlayColor={'#0000'}
                  onPress={() => setPreview(!preview)}
                >
                  <MIcon
                    iconName={!preview ? 'noPreview' : 'eye'}
                    color={MTextInputStyles(props).prefix.color}
                  />
                </TouchableHighlight>
              )}
            </View>
          );
        }}
        rules={{
          required: true,
        }}
      />
      {getErrors(props)}
      {hint && (
        <MText
          content={hint}
          type={MTextVariant.p3}
          styles={MTextInputStyles(props).hint}
        />
      )}
      {/* {errors.firstName && <Text>This is required.</Text>} */}
    </View>
  );
}
