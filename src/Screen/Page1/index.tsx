import {StyleSheet, Text, View} from 'react-native';
import {Component, createRef} from 'react';
import Rive, {RiveRef} from 'rive-react-native';

const styles = StyleSheet.create({
  container: {},
});

class Screen extends Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Hello World</Text>
      </View>
    );
  }
}

export default Screen;
