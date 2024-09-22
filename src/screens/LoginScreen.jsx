import {
  View,
  Text,
  Image,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Animated, {FadeInUp, FadeInDown} from 'react-native-reanimated';
import {useNavigation} from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();

  return (
    <View class="w-full h-full bg-white">
      <StatusBar barStyle="light-content" />
      <Image
        className="absolute w-full h-full"
        source={require('../../assets/images/background.png')}
      />

      {/* lights = lambalar */}

      <View className="absolute flex-row justify-around w-full">
        <Animated.Image
          entering={FadeInUp.delay(200).duration(1000).springify()}
          className="h-[225] w-[90]"
          source={require('../../assets/images/light.png')}
        />
        <Animated.Image
          entering={FadeInUp.delay(300).duration(1000).springify()}
          className="h-[160] w-[65]"
          source={require('../../assets/images/light.png')}
        />
      </View>
      {/* title and form = başlık ve form alanı */}
      <View className="h-full w-full flex justify-around pt-40 pb-10">
        {/* title = başlık */}
        <View className="flex items-center">
          <Animated.Text
            entering={FadeInUp.delay(300).duration(1000).springify()}
            className="text-white font-bold tracking-wider text-5xl">
            Login
          </Animated.Text>
        </View>
        {/* form */}
        <View className="flex items-center mx-4 space-y-4">
          <Animated.View
            entering={FadeInDown.delay(300).duration(1000).springify()}
            className="bg-black/5 p-5 rounded-2xl w-full">
            <TextInput placeholder="E-mail" placeholderTextColor={'gray'} />
          </Animated.View>
          <Animated.View
            entering={FadeInDown.delay(400).duration(1000).springify()}
            className="bg-black/5 p-5 rounded-2xl w-full">
            <TextInput
              placeholder="Password"
              placeholderTextColor={'gray'}
              secureTextEntry
            />
          </Animated.View>
          <Animated.View
            entering={FadeInDown.delay(500).duration(1000).springify()}
            className="w-full">
            <TouchableOpacity className="w-full bg-sky-400 p-3 rounded-2xl mb-3">
              <Text className="text-2xl font-bold text-center text-white">
                Login
              </Text>
            </TouchableOpacity>
          </Animated.View>
          <Animated.View
            entering={FadeInDown.delay(600).duration(1000).springify()}
            className="flex-row justify-center">
            <Text>Don't have an account?</Text>
            <TouchableOpacity onPress={() => navigation.push('SignUp')}>
              <Text className="text-sky-600">Sign Up!</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
