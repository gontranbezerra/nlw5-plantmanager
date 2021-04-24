import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  TouchableOpacityProps,
} from 'react-native';

import colors from '../../styles/colors';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

const Button = (props: ButtonProps) => {
  const { title, ...rest } = props;
  return (
    <TouchableOpacity style={styles.button} activeOpacity={0.7} {...rest}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 10,
    height: 56,
    minWidth: 56,
    paddingHorizontal: 10,
  },
  buttonText: {
    color: colors.white,
    fontSize: 24,
  },
});
