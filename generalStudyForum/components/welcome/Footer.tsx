import React from 'react';
import { View, Text } from 'react-native';
import { footerStyles } from './styles';

interface FooterProps {
  text: string;
}

export const Footer: React.FC<FooterProps> = ({ text }) => {
  return (
    <View style={footerStyles.container}>
      <Text style={footerStyles.text}>{text}</Text>
    </View>
  );
}; 