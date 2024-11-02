import {StyleSheet, View} from 'react-native';
import Rive, {RiveRef} from 'rive-react-native';
import {useEffect, useRef} from 'react';
import useFetch from './UseFetch';

const styles = StyleSheet.create({
  container: {},
});

const Screen = () => {
  const riveRef = useRef<RiveRef>(null);

  const {htmlString, loading, error} = useFetch(
    'http://www.google.com',
    riveRef,
  );

  // useEffect(() => {
  //   riveRef?.current?.play();
  // }, []);

  return (
    <View style={styles.container}>
      <View
        style={{
          width: '100%',
          height: '100%',
        }}>
        <Rive
          ref={riveRef}
          autoplay={false}
          // url="https://cdn.rive.app/animations/vehicles.riv"
          url="https://public.rive.app/community/runtime-files/2195-4346-avatar-pack-use-case.riv"
          onPlay={() => {
            console.log('onPlay');
          }}
          onLoopEnd={() => {
            console.log('onLoopEnd');
          }}
          onStop={() => {
            console.log('onStop');
          }}></Rive>
      </View>
    </View>
  );
};

export default Screen;
