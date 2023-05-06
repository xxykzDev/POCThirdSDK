import {
  ConnectWallet,
  metamaskWallet,
  trustWallet,
  ThirdwebProvider,
} from '@thirdweb-dev/react-native';
import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <ThirdwebProvider
      dAppMeta={{
        name: 'Tungsten DeFi Card',
        description: 'Tungsten DeFi Card',
        logoUrl: 'https://storage.googleapis.com/w-main/static/img/brand.svg',
        url: 'https://tungstenfi.com',
      }}
      supportedWallets={[metamaskWallet(), trustWallet()]}>
      <AppInner />
    </ThirdwebProvider>
  );
};

const AppInner = () => {
  const isDarkMode = useColorScheme() === 'light';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const textStyles = {
    color: isDarkMode ? Colors.white : Colors.black,
    ...styles.heading,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <View style={styles.view}>
        <Image style={styles.image} source={require('../nuevo/brand.png')} />
        {/* <Text style={textStyles}>Tungsten DeFi</Text> */}
        <ConnectWallet theme={'light'} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  view: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 500,
    height: 200,
  },
});

export default App;
