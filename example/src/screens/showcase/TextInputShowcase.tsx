/* eslint-disable @typescript-eslint/no-misused-promises */
import {yupResolver} from '@hookform/resolvers/yup';
import React from 'react';
import {useForm} from 'react-hook-form';
import {ScrollView, Text} from 'react-native';
import type {SchemaOf} from 'yup';
import * as yup from 'yup';
import {MButton, MSheet, MTextInput} from '../../../../';

interface FormTypes {
  username: string;
  password: string;
}

export default function TextInputShowcase() {
  const schema: SchemaOf<FormTypes> = yup
    .object({
      username: yup.string().required(),
      password: yup.string().min(8).required(),
    })
    .required();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormTypes>({
    resolver: yupResolver(schema),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const onSubmit = (data: FormTypes) => console.log(111, data);

  return (
    <MSheet styles={{marginTop: 20}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text>---------------- Form ---------------</Text>
        <MTextInput
          label="Username"
          name="username"
          placeholder="username"
          control={control}
          errors={errors}
        />
        <MTextInput
          label="Password"
          name="password"
          placeholder="Enter 8 digits password"
          control={control}
          secured
          hint="Need strong password"
          styles={{marginTop: 20}}
          errors={errors}
        />
        <MButton
          title="Submit"
          onPress={handleSubmit(onSubmit)}
          expanded
          styles={{marginTop: 20}}
        />
        {/* <View>
          <Text style={{marginVertical: 20}}>Text input resting</Text>
          <MTextInput
            label="Username"
            name="username"
            placeholder="username"
            control={control}
          />
        </View>
        <View>
          <Text style={{marginVertical: 20}}>Text input resting</Text>
          <MTextInput
            label="Password"
            name="password"
            placeholder="Enter 8 digits password"
            control={control}
            secured
          />
        </View>
        <View>
          <Text style={{marginVertical: 20}}>Text input resting prefix</Text>
          <MTextInput
            label="Name"
            name="name"
            prefix="arrow-left-outline"
            placeholder="Name"
            control={control}
          />
        </View>
        <View>
          <Text style={{marginVertical: 20}}>Text input success prefix</Text>
          <MTextInput
            label="Age"
            name="age"
            placeholder="Age"
            prefix="arrow-left-outline"
            hint="Validation success"
            state={MTextInputStateVariations.success}
            control={control}
          />
        </View>
        <View>
          <Text style={{marginVertical: 20}}>Text input error prefix</Text>
          <MTextInput
            label="City"
            name="city"
            placeholder="City"
            prefix="arrow-left-outline"
            hint="Validation failed"
            state={MTextInputStateVariations.error}
            control={control}
          />
        </View> */}
      </ScrollView>
    </MSheet>
  );
}
