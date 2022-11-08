/* eslint-disable @typescript-eslint/no-misused-promises */
import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import {MButton, MTextInputStateVariations, MTextInput} from 'matrix';
import {useForm} from 'react-hook-form';

type FormTypes = {
  username: string;
  password: string;
};

export default function TextInputShowcase() {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormTypes>({
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const onSubmit = (data: FormTypes) => console.log(data);

  return (
    <SafeAreaView style={{marginTop: 20, marginHorizontal: 10}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text>---------------- Form ---------------</Text>
        <MTextInput
          label="Username"
          name="username"
          placeholder="username"
          control={control}
        />
        <MTextInput
          label="Password"
          name="password"
          placeholder="Enter 8 digits password"
          control={control}
          secured
          hint="Need strong password"
          styles={{marginTop: 20}}
        />
        <MButton
          title="Submit"
          onPress={handleSubmit(onSubmit)}
          expanded
          styles={{marginTop: 20}}
        />
        <Text>---------------- Component ------------</Text>
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
            prefix="arrowExpand"
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
            prefix="arrowExpand"
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
            prefix="arrowExpand"
            hint="Validation failed"
            state={MTextInputStateVariations.error}
            control={control}
          />
        </View> */}
      </ScrollView>
    </SafeAreaView>
  );
}
