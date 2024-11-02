import {Pressable, StyleProp, StyleSheet, Text, ViewStyle} from 'react-native';
import Colors from '../Utils/Colors';

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: Colors.button.background,
    padding: 16,
  },
  ripple: {
    color: Colors.button.ripple,
  },
  text: {
    color: Colors.button.text,
    fontSize: 16,
  },
});

const WButton = ({
  title,
  onPress,
  style,
}: {
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}) => {
  return (
    <Pressable
      android_ripple={styles.ripple}
      style={[styles.button, style]}
      onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

export default WButton;
