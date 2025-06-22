import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Mail, Smartphone, ArrowRight } from 'lucide-react-native';
import { signUpSectionStyles } from './styles';

interface SignUpOption {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  onPress: () => void;
  iconStyle?: object;
}

interface SignUpSectionProps {
  title: string;
  subtitle: string;
  options: SignUpOption[];
}

export const SignUpSection: React.FC<SignUpSectionProps> = ({ 
  title, 
  subtitle, 
  options 
}) => {
  return (
    <View style={signUpSectionStyles.container}>
      <Text style={signUpSectionStyles.title}>{title}</Text>
      <Text style={signUpSectionStyles.subtitle}>{subtitle}</Text>
      
      <View style={signUpSectionStyles.options}>
        {options.map((option) => (
          <TouchableOpacity 
            key={option.id}
            style={signUpSectionStyles.option}
            onPress={option.onPress}
            activeOpacity={0.8}
          >
            <View style={[
              signUpSectionStyles.iconContainer,
              option.iconStyle
            ]}>
              {option.icon}
            </View>
            <View style={signUpSectionStyles.content}>
              <Text style={signUpSectionStyles.optionTitle}>{option.title}</Text>
              <Text style={signUpSectionStyles.optionDescription}>
                {option.description}
              </Text>
            </View>
            <View style={signUpSectionStyles.arrowContainer}>
              <ArrowRight color="#667eea" size={20} />
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}; 