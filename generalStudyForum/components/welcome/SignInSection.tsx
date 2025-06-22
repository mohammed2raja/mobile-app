import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { signInSectionStyles } from './styles';

interface SignInSectionProps {
  dividerText: string;
  buttonText: string;
  onPress: () => void;
}

export const SignInSection: React.FC<SignInSectionProps> = ({ 
  dividerText, 
  buttonText, 
  onPress 
}) => {
  return (
    <View style={signInSectionStyles.container}>
      <View style={signInSectionStyles.divider}>
        <View style={signInSectionStyles.dividerLine} />
        <Text style={signInSectionStyles.dividerText}>{dividerText}</Text>
        <View style={signInSectionStyles.dividerLine} />
      </View>
      
      <TouchableOpacity 
        style={signInSectionStyles.button}
        onPress={onPress}
        activeOpacity={0.8}
      >
        <Text style={signInSectionStyles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
}; 