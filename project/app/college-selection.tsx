import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { useState } from 'react';
import { Search, MapPin, Users, ArrowRight } from 'lucide-react-native';

const colleges = [
  { id: 1, name: 'University of California, Berkeley', location: 'Berkeley, CA', students: '45,000+' },
  { id: 2, name: 'Stanford University', location: 'Stanford, CA', students: '17,000+' },
  { id: 3, name: 'University of Texas at Austin', location: 'Austin, TX', students: '51,000+' },
  { id: 4, name: 'New York University', location: 'New York, NY', students: '58,000+' },
  { id: 5, name: 'University of Washington', location: 'Seattle, WA', students: '47,000+' },
  { id: 6, name: 'University of Michigan', location: 'Ann Arbor, MI', students: '48,000+' },
  { id: 7, name: 'Georgia Institute of Technology', location: 'Atlanta, GA', students: '36,000+' },
  { id: 8, name: 'University of Florida', location: 'Gainesville, FL', students: '52,000+' },
];

export default function CollegeSelectionScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCollege, setSelectedCollege] = useState<number | null>(null);

  const filteredColleges = colleges.filter(college =>
    college.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    college.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleContinue = () => {
    if (selectedCollege) {
      router.push('/(tabs)');
    }
  };

  return (
    <LinearGradient
      colors={['#667eea', '#764ba2']}
      style={styles.container}
    >
      <View style={styles.header}>
        <Text style={styles.title}>Choose Your University</Text>
        <Text style={styles.subtitle}>Connect with students from your campus</Text>
      </View>

      <View style={styles.searchContainer}>
        <Search color="#666" size={20} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search universities..."
          placeholderTextColor="#666"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <ScrollView style={styles.collegeList} showsVerticalScrollIndicator={false}>
        {filteredColleges.map((college) => (
          <TouchableOpacity
            key={college.id}
            style={[
              styles.collegeCard,
              selectedCollege === college.id && styles.selectedCard
            ]}
            onPress={() => setSelectedCollege(college.id)}
          >
            <View style={styles.collegeInfo}>
              <Text style={styles.collegeName}>{college.name}</Text>
              <View style={styles.collegeDetails}>
                <View style={styles.detail}>
                  <MapPin color="#666" size={16} />
                  <Text style={styles.detailText}>{college.location}</Text>
                </View>
                <View style={styles.detail}>
                  <Users color="#666" size={16} />
                  <Text style={styles.detailText}>{college.students} students</Text>
                </View>
              </View>
            </View>
            {selectedCollege === college.id && (
              <View style={styles.checkmark}>
                <Text style={styles.checkmarkText}>✓</Text>
              </View>
            )}
          </TouchableOpacity>
        ))}
      </ScrollView>

      {selectedCollege && (
        <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
          <Text style={styles.continueText}>Continue</Text>
          <ArrowRight color="#FFFFFF" size={20} />
        </TouchableOpacity>
      )}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
  header: {
    paddingHorizontal: 24,
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontFamily: 'Inter-Bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#FFFFFF',
    textAlign: 'center',
    opacity: 0.9,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.9)',
    marginHorizontal: 24,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 4,
    gap: 12,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#333',
    paddingVertical: 12,
  },
  collegeList: {
    flex: 1,
    paddingHorizontal: 24,
  },
  collegeCard: {
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: 16,
    padding: 20,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  selectedCard: {
    backgroundColor: 'rgba(76,175,80,0.2)',
    borderWidth: 2,
    borderColor: '#4CAF50',
  },
  collegeInfo: {
    flex: 1,
  },
  collegeName: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: '#333',
    marginBottom: 8,
  },
  collegeDetails: {
    gap: 4,
  },
  detail: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  detailText: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#666',
  },
  checkmark: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#4CAF50',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkmarkText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'Inter-Bold',
  },
  continueButton: {
    backgroundColor: '#4CAF50',
    marginHorizontal: 24,
    marginBottom: 40,
    paddingVertical: 16,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  continueText: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: '#FFFFFF',
  },
});