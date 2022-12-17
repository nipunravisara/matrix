import React from 'react';
import {MHeader, MLabel} from '../../../../';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';

export default function HeaderShowcase() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text style={{marginVertical: 20}}>Header with title</Text>
          <MHeader title={'Page Header'} />
        </View>
        <View>
          <Text style={{marginVertical: 20}}>Header without bottomLine</Text>
          <MHeader title={'Page Header'} bottomLine />
        </View>
        <View>
          <Text style={{marginVertical: 20}}>Header with subtitle</Text>
          <MHeader title={'Page Header'} subTitle="Normal" />
        </View>
        <View>
          <Text style={{marginVertical: 20}}>Header align left</Text>
          <MHeader
            title="Page Header"
            subTitle="Header"
            titleAlignment="left"
          />
        </View>
        <View>
          <Text style={{marginVertical: 20}}>Header align right</Text>
          <MHeader
            title={'Page Header'}
            subTitle="Header"
            titleAlignment="right"
            styles={{paddingRight: 15}}
          />
        </View>
        <View>
          <Text style={{marginVertical: 20}}>Header with title and back</Text>

          <MHeader
            title={'Page Header'}
            bottomLine
            left="goBack"
            leftPress={() => console.log('Go back pressed')}
          />
        </View>
        <View>
          <Text style={{marginVertical: 20}}>
            Header with title and left action
          </Text>
          <MHeader
            title={'Page Header'}
            bottomLine
            left={<MLabel content="Action" />}
          />
        </View>
        <View>
          <Text style={{marginVertical: 20}}>
            Header with title and right action
          </Text>
          <MHeader
            title={'Page Header'}
            bottomLine
            right={[<MLabel content="Action" key="first" />]}
          />
        </View>
        <View>
          <Text style={{marginVertical: 20}}>
            Header with title, left and right actions
          </Text>
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
