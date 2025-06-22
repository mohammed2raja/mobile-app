import React from 'react';
import { View, Text } from 'react-native';
import { GraduationCap } from 'lucide-react-native';
import { heroSectionStyles } from './styles';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ 
  title, 
  subtitle, 
  description 
}) => {
  return (
    <View style={heroSectionStyles.container}>
      <View style={heroSectionStyles.logoContainer}>
        <View style={heroSectionStyles.logoBackground}>
          <GraduationCap color="#FFFFFF" size={40} />
        </View>
      </View>
      <Text style={heroSectionStyles.title}>{title}</Text>
      <Text style={heroSectionStyles.subtitle}>{subtitle}</Text>
      <Text style={heroSectionStyles.description}>{description}</Text>
    </View>
  );
}; 