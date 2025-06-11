import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { Car, Leaf, Users } from 'lucide-react-native';

export default function WelcomeScreen() {
  return (
    <ImageBackground
      source={{ uri: 'https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }}
      style={styles.background}
    >
      <LinearGradient
        colors={['rgba(0,0,0,0.3)', 'rgba(0,0,0,0.7)']}
        style={styles.overlay}
      >
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.logo}>RIDE</Text>
            <Text style={styles.logoSub}>BACK</Text>
          </View>
          
          <View style={styles.content}>
            <Text style={styles.tagline}>Sustainable rides for students</Text>
            
            <View style={styles.features}>
              <View style={styles.feature}>
                <Car color="#4CAF50" size={24} />
                <Text style={styles.featureText}>Share rides with classmates</Text>
              </View>
              <View style={styles.feature}>
                <Leaf color="#4CAF50" size={24} />
                <Text style={styles.featureText}>Reduce carbon footprint</Text>
              </View>
              <View style={styles.feature}>
                <Users color="#4CAF50" size={24} />
                <Text style={styles.featureText}>Build campus community</Text>
              </View>
            </View>
          </View>
          
          <View style={styles.footer}>
            <TouchableOpacity 
              style={styles.button}
              onPress={() => router.push('/login')}
            >
              <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 80,
    paddingBottom: 40,
  },
  header: {
    alignItems: 'center',
    marginBottom: 60,
  },
  logo: {
    fontSize: 48,
    fontFamily: 'Inter-Bold',
    color: '#FFFFFF',
    letterSpacing: 2,
  },
  logoSub: {
    fontSize: 48,
    fontFamily: 'Inter-Bold',
    color: '#4CAF50',
    letterSpacing: 2,
    marginTop: -10,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  tagline: {
    fontSize: 24,
    fontFamily: 'Inter-Medium',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 40,
  },
  features: {
    gap: 20,
  },
  feature: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    paddingHorizontal: 20,
  },
  featureText: {
    fontSize: 18,
    fontFamily: 'Inter-Regular',
    color: '#FFFFFF',
  },
  footer: {
    marginTop: 40,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: '#FFFFFF',
  },
});