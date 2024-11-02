import {StyleSheet, Text, View} from 'react-native';
import {Component, createRef} from 'react';
import Rive, {RiveRef} from 'rive-react-native';

const styles = StyleSheet.create({
  container: {},
});

class Rive2 extends Component {
  constructor(props: any) {
    super(props);

    this.state = {};

    // this.ref =

    this.inputLabel = createRef();
    // this.riveRef = createRef<RiveRef>();
  }

  componentDidMount() {
    // this.setState({labelWidth: this.inputLabel.current.offsetWidth});
  }

  //   handleChange = event => this.setState({age: event.target.value});

  render() {
    // const {age, labelWidth} = this.state;
    // const {classes} = this.props;
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
            url="https://public.rive.app/community/runtime-files/2195-4346-avatar-pack-use-case.riv"
            onPlay={() => {
              console.log('onPlay');
            }}
            onLoopEnd={() => {
              console.log('onLoopEnd');
            }}
            onStop={() => {
              console.log('onStop');
            }}
          />
        </View>
      </View>
    );
  }
}

// const Screen = () => {
//   const riveRef = useRef<RiveRef>(null);

//   const play = () => {
//     riveRef.current?.play(undefined, LoopMode.OneShot);
//   };

//   return (
//
//   );
// };

export default Rive2;
