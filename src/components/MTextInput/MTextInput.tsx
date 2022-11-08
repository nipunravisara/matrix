import React, {useState} from 'react';
import {TextInput, TouchableHighlight, View, ViewStyle} from 'react-native';
import MLabel from '../MLabel/MLabel';
import {MTextInputStyles} from './MTextInputStyles';
import {Control, Controller, FieldErrorsImpl} from 'react-hook-form';
import MText, {MTextVariant} from '../MText/MText';
import MIcon from '../MIcon/MIcon';

export enum MTextInputStateVariations {
  success,
  error,
  default,
}

export interface TMTextInput {
  label?: string;
  name: string;
  placeholder: string;
  hint?: string;
  prefix?: JSX.Element | string;
  state?: MTextInputStateVariations;
  styles?: ViewStyle;
  control: Control<any, any>;
  secured?: boolean;
  errors?: Partial<FieldErrorsImpl<any>>;
}

export default function MTextInput(props: TMTextInput) {
  const [preview, setPreview] = useState(false);
  const {
    label,
    name,
    placeholder,
    hint,
    prefix,
    styles,
    errors,
    control,
    secured,
  } = props;
  // ControllerRenderProps<any>
  return (
    <View style={styles}>
      {label && <MLabel content={label} styles={{marginBottom: 4}} />}
      <Controller
        name={name}
        control={control}
        render={({field}) => (
          <View style={MTextInputStyles(props).container}>
            <View style={MTextInputStyles(props).innerContainer}>
              {prefix && typeof prefix === 'string' ? (
                <View style={{marginRight: 8}}>
                  <MIcon
                    name={prefix}
                    color={MTextInputStyles(props).prefix.color}
                  />
                </View>
              ) : (
                prefix
              )}
              <TextInput
                onBlur={field.onBlur}
                onChangeText={(value) => field.onChange(value)}
                value={field.value as string}
                placeholder={placeholder}
                placeholderTextColor={MTextInputStyles(props).placeholder.color}
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
                  name={!preview ? 'noPreview' : 'eye'}
                  color={MTextInputStyles(props).prefix.color}
                />
              </TouchableHighlight>
            )}
          </View>
        )}
        rules={{
          required: true,
        }}
      />
      {errors && (
        <MText
          content={errors.username}
          type={MTextVariant.p3}
          styles={MTextInputStyles(props).error}
        />
      )}
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
