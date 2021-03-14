import admob, {
  InterstitialAd,
  MaxAdContentRating,
  RewardedAd,
  TestIds,
} from '@react-native-firebase/admob';
import {Platform} from 'react-native';

const {OS} = Platform;

const Admob = admob()
  .setRequestConfiguration({
    // Update all future requests suitable for parental guidance
    maxAdContentRating: MaxAdContentRating.PG,

    // Indicates that you want your content treated as child-directed for purposes of COPPA.
    tagForChildDirectedTreatment: true,

    // Indicates that you want the ad request to be handled in a
    // manner suitable for users under the age of consent.
    tagForUnderAgeOfConsent: true,
  })
  .then(() => {
    // Request config successfully set!
  });
export default Admob;

export const AdsId = {
  android: {
    banner: __DEV__ ? TestIds.BANNER : 'ca-app-pub-6678032360629604/1940189902',
    interstitial: __DEV__
      ? TestIds.INTERSTITIAL
      : 'ca-app-pub-6678032360629604/3399905957',
    reward: __DEV__
      ? TestIds.REWARDED
      : 'ca-app-pub-6678032360629604/4811214060',
  },
  ios: {
    banner: __DEV__ ? TestIds.BANNER : 'ca-app-pub-6678032360629604/5004206630',
    interstitial: __DEV__
      ? TestIds.INTERSTITIAL
      : 'ca-app-pub-6678032360629604/7438798283',
    reward: __DEV__
      ? TestIds.REWARDED
      : 'ca-app-pub-6678032360629604/2876736743',
  },
};

export const interstitial = InterstitialAd.createForAdRequest(
  OS === 'ios' ? AdsId.ios.interstitial : AdsId.android.interstitial,
);

export const reward = RewardedAd.createForAdRequest(
  OS === 'ios' ? AdsId.ios.reward : AdsId.android.reward,
);
