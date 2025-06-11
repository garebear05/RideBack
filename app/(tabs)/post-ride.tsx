import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { MapPin, Calendar, Clock, Users, DollarSign, Car } from 'lucide-react-native';

export default function PostRideScreen() {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [seats, setSeats] = useState('');
  const [price, setPrice] = useState('');
  const [notes, setNotes] = useState('');

  const handlePostRide = () => {
    if (!from || !to || !date || !time || !seats || !price) {
      Alert.alert('Error', 'Please fill in all required fields');
      return;
    }
    
    Alert.alert('Success', 'Your ride has been posted!', [
      { text: 'OK', onPress: () => {
        // Reset form
        setFrom('');
        setTo('');
        setDate('');
        setTime('');
        setSeats('');
        setPrice('');
        setNotes('');
      }}
    ]);
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#667eea', '#764ba2']}
        style={styles.header}
      >
        <Text style={styles.title}>Post a Ride</Text>
        <Text style={styles.subtitle}>Share your journey with fellow students</Text>
      </LinearGradient>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.form}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Route Details</Text>
            
            <View style={styles.inputContainer}>
              <MapPin color="#4CAF50" size={20} />
              <TextInput
                style={styles.input}
                placeholder="From (e.g., UC Berkeley)"
                placeholderTextColor="#999"
                value={from}
                onChangeText={setFrom}
              />
            </View>

            <View style={styles.inputContainer}>
              <MapPin color="#FF5722" size={20} />
              <TextInput
                style={styles.input}
                placeholder="To (e.g., San Francisco Airport)"
                placeholderTextColor="#999"
                value={to}
                onChangeText={setTo}
              />
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>When</Text>
            
            <View style={styles.row}>
              <View style={[styles.inputContainer, styles.halfWidth]}>
                <Calendar color="#666" size={20} />
                <TextInput
                  style={styles.input}
                  placeholder="Date"
                  placeholderTextColor="#999"
                  value={date}
                  onChangeText={setDate}
                />
              </View>

              <View style={[styles.inputContainer, styles.halfWidth]}>
                <Clock color="#666" size={20} />
                <TextInput
                  style={styles.input}
                  placeholder="Time"
                  placeholderTextColor="#999"
                  value={time}
                  onChangeText={setTime}
                />
              </View>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Ride Details</Text>
            
            <View style={styles.row}>
              <View style={[styles.inputContainer, styles.halfWidth]}>
                <Users color="#666" size={20} />
                <TextInput
                  style={styles.input}
                  placeholder="Available seats"
                  placeholderTextColor="#999"
                  value={seats}
                  onChangeText={setSeats}
                  keyboardType="numeric"
                />
              </View>

              <View style={[styles.inputContainer, styles.halfWidth]}>
                <DollarSign color="#666" size={20} />
                <TextInput
                  style={styles.input}
                  placeholder="Price per seat"
                  placeholderTextColor="#999"
                  value={price}
                  onChangeText={setPrice}
                  keyboardType="numeric"
                />
              </View>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Additional Notes</Text>
            
            <View style={[styles.inputContainer, styles.textArea]}>
              <TextInput
                style={[styles.input, styles.textAreaInput]}
                placeholder="Any additional information for passengers..."
                placeholderTextColor="#999"
                value={notes}
                onChangeText={setNotes}
                multiline
                numberOfLines={4}
                textAlignVertical="top"
              />
            </View>
          </View>

          <View style={styles.impactSection}>
            <View style={styles.impactCard}>
              <Car color="#4CAF50" size={24} />
              <View style={styles.impactText}>
                <Text style={styles.impactTitle}>Environmental Impact</Text>
                <Text style={styles.impactDescription}>
                  By sharing this ride, you could help reduce CO₂ emissions by up to 2.3 kg per passenger!
                </Text>
              </View>
            </View>
          </View>

          <TouchableOpacity style={styles.postButton} onPress={handlePostRide}>
            <Text style={styles.postButtonText}>Post Ride</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  header: {
    paddingTop: 60,
    paddingBottom: 30,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 28,
    fontFamily: 'Inter-Bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#FFFFFF',
    textAlign: 'center',
    opacity: 0.9,
    marginTop: 8,
  },
  content: {
    flex: 1,
  },
  form: {
    padding: 24,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: '#333',
    marginBottom: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 4,
    gap: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  input: {
    flex: 1,
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#333',
    paddingVertical: 12,
  },
  row: {
    flexDirection: 'row',
    gap: 12,
  },
  halfWidth: {
    flex: 1,
  },
  textArea: {
    alignItems: 'flex-start',
    paddingVertical: 12,
  },
  textAreaInput: {
    minHeight: 80,
    paddingVertical: 0,
  },
  impactSection: {
    marginBottom: 32,
  },
  impactCard: {
    backgroundColor: 'rgba(76,175,80,0.1)',
    borderRadius: 16,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    borderWidth: 1,
    borderColor: 'rgba(76,175,80,0.2)',
  },
  impactText: {
    flex: 1,
  },
  impactTitle: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#4CAF50',
    marginBottom: 4,
  },
  impactDescription: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#666',
    lineHeight: 20,
  },
  postButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#4CAF50',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  postButtonText: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: '#FFFFFF',
  },
});