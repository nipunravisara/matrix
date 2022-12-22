import React from 'react';
import {MHeader, MLabel} from '../../../../';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';

export default function HeaderShowcase() {
  return (
    <SafeAreaView>
      <ScrollView style={{backgroundColor: '#323232'}}>
        <View>
          <MLabel content={'Header with title'} styles={{marginVertical: 20}} />
          <MHeader title={'Page Header'} />
        </View>
        <View>
          <MLabel
            content={'Header without bottomLine'}
            styles={{marginVertical: 20}}
          />
          <MHeader title={'Page Header'} bottomLine />
        </View>
        <View>
          <MLabel
            content={'Header with subtitle'}
            styles={{marginVertical: 20}}
          />
          <MHeader title={'Page Header'} subTitle="Normal" />
        </View>
        <View>
          <MLabel content={'Header align left'} styles={{marginVertical: 20}} />
          <MHeader
            title="Page Header"
            subTitle="Header"
            titleAlignment="left"
          />
        </View>
        <View>
          <MLabel
            content={'Header align right'}
            styles={{marginVertical: 20}}
          />
          <MHeader
            title={'Page Header'}
            subTitle="Header"
            titleAlignment="right"
            styles={{paddingRight: 15}}
          />
        </View>
        <View>
          <MLabel
            content={'Header with title and back'}
            styles={{marginVertical: 20}}
          />
          <MHeader
            title={'Page Header'}
            bottomLine
            left="goBack"
            leftPress={() => console.log('Go back pressed')}
          />
        </View>
        <View>
          <MLabel
            content={'Header with title and left action'}
            styles={{marginVertical: 20}}
          />
          <MHeader
            title={'Page Header'}
            bottomLine
            left={<MLabel content="Action" />}
          />
        </View>
        <View>
          <MLabel
            content={' Header with title and right action'}
            styles={{marginVertical: 20}}
          />
          <MHeader
            title={'Page Header'}
            bottomLine
            right={[<MLabel content="Action" key="first" />]}
          />
        </View>
        <View>
          <MLabel
            content={'Header with title, left and right actions'}
            styles={{marginVertical: 20}}
          />
          <MHeader
            title={'Page Header'}
            bottomLine
            left="goBack"
            right={[<MLabel content="Action" key="first" />]}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
