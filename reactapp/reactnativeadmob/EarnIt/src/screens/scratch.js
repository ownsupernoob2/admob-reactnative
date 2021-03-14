import React, {useState, useEffect, useCallback} from 'react';
import {
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Platform,
  View,
  Text,
} from 'react-native';
import Toast from 'react-native-simple-toast';
import ScratchView from 'react-native-scratch'

import {
  AdEventType,
  BannerAd,
  BannerAdSize,
  RewardedAdEventType,
} from '@react-native-firebase/admob';

import {AdsId, interstitial, reward} from '../functions/admob';

const {OS} = Platform;

const Scratch = (props) => {
  const [intLoaded, setIntLoaded] = useState(false);
  const [rewardLoaded, setRewardLoaded] = useState(false);
  const [point, setPoint] = useState(0); 
  const items = (
    ['You earned prize!', 'you earned nothing.']  
      
  )
  const random =( items[Math.floor(Math.random() * items.length)])


  useEffect(() => {
    const IntEventListener = interstitial.onAdEvent((type) => {
      if (type === AdEventType.LOADED) {
        setIntLoaded(true);
      }
      if (type === AdEventType.CLOSED) {
        setIntLoaded(false);
      }
    });

    return () => {
      IntEventListener();
    };
  }, []);

  useEffect(() => {
    const RewardEventListener = reward.onAdEvent((type, error, reward) => {
      if (type === RewardedAdEventType.LOADED) {
        setRewardLoaded(true);
      }
      if (type === RewardedAdEventType.EARNED_REWARD) {
        setRewardLoaded(false);
      }
    });

    return () => RewardEventListener();
  }, []);

  useEffect(() => {
    !intLoaded && interstitial.load();
    !rewardLoaded && reward.load();
  }, [rewardLoaded, intLoaded]);

  const handleAds = useCallback(
    (type) => { 
     
      switch (type) {
        case 'int':
          if (intLoaded) {
            const show = async () => {
              await interstitial.show();
              setPoint(point + 1);
            };
            show();
          } else {
            Toast.show(
                random,
                Toast.SHORT,
            );
          }
          break;
        case 'reward':
          if (rewardLoaded) {
            const show = async () => {
              await reward.show();
              setPoint(point + 10);
             

            };
            show();
          } else {
            Toast.show(
              random,
              Toast.SHORT,
            );
          }
          break;
        default:
          break;
      }
    },
    [intLoaded, point, rewardLoaded],
  );

  return (
  
  <View style={styles.container}>
   <Text>
     {random}
   </Text>
    <ScratchView
        id={1} // ScratchView id (Optional)
        brushSize={70} // Default is 10% of the smallest dimension (width/height)
        threshold={70} // Report full scratch after 70 percentage, change as you see fit. Default is 50
        fadeOut={false} // Disable the fade out animation when scratch is done. Default is true
        placeholderColor="#AAAAAA" // Scratch color while image is loading (or while image not present)
        resourceName="your_image" // An image resource name (without the extension like '.png/jpg etc') in the native bundle of the app (drawble for Android, Images.xcassets in iOS) (Optional)
        resizeMode="cover|contain|stretch" // Resize the image to fit or fill the scratch view. Default is stretch
        onScratchDone={() => handleAds('reward')} // Scratch is done event
    />
</View>

)

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    width: 100,
     height: 300,
     flexDirection: 'column'
  },
  content: {
    flex: 1,
    paddingHorizontal: '5%',
    paddingVertical: '3%',
  },
  title: {
    fontSize: 20,
    color: '#000',
    marginBottom: '5%',
  },
  point: {
    fontSize: 16,
    marginBottom: '3%',
  },
  btn: {
    backgroundColor: 'darkblue',
    paddingVertical: '3%',
    alignItems: 'center',
    borderRadius: 5,
    marginVertical: '3%',
  },
  label: {
    color: '#fff',
    fontWeight: 'bold',
    letterSpacing: 3,
  },
});

export default Scratch;
