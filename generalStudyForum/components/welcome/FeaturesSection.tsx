import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { Video, BookOpen, Trophy, Users } from 'lucide-react-native';
import { featuresSectionStyles } from './styles';

const { width } = Dimensions.get('window');

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface FeaturesSectionProps {
  title: string;
  features: Feature[];
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({ 
  title, 
  features 
}) => {
  return (
    <View style={featuresSectionStyles.container}>
      <Text style={featuresSectionStyles.sectionTitle}>{title}</Text>
      <View style={featuresSectionStyles.featuresGrid}>
        {features.map((feature, index) => (
          <View key={index} style={featuresSectionStyles.featureCard}>
            <View style={featuresSectionStyles.featureIcon}>
              {feature.icon}
            </View>
            <Text style={featuresSectionStyles.featureTitle}>{feature.title}</Text>
            <Text style={featuresSectionStyles.featureDescription}>
              {feature.description}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}; 