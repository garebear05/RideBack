import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Settings, CreditCard as Edit, Star, Car, Users, Leaf, Award, ChevronRight } from 'lucide-react-native';

const achievements = [
  { icon: Car, title: 'Frequent Rider', description: '50+ rides completed', color: '#4CAF50' },
  { icon: Leaf, title: 'Eco Warrior', description: 'Saved 100kg CO₂', color: '#2196F3' },
  { icon: Users, title: 'Community Builder', description: '25+ people helped', color: '#FF9800' },
  { icon: Award, title: 'Top Rated', description: '4.9+ star rating', color: '#9C27B0' },
];

const menuItems = [
  { icon: Car, title: 'My Rides', subtitle: 'View ride history' },
  { icon: Star, title: 'Reviews', subtitle: 'See what others say' },
  { icon: Settings, title: 'Settings', subtitle: 'App preferences' },
  { icon: Users, title: 'Invite Friends', subtitle: 'Share RideBack' },
];

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#667eea', '#764ba2']}
        style={styles.header}
      >
        <View style={styles.profileSection}>
          <Image 
            source={{ uri: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2' }} 
            style={styles.profileImage} 
          />
          <TouchableOpacity style={styles.editButton}>
            <Edit color="#FFFFFF" size={16} />
          </TouchableOpacity>
          
          <Text style={styles.name}>Sarah Chen</Text>
          <Text style={styles.email}>sarah.chen@berkeley.edu</Text>
          <Text style={styles.university}>University of California, Berkeley</Text>
          
          <View style={styles.ratingContainer}>
            <Star color="#FFD700" size={20} fill="#FFD700" />
            <Text style={styles.rating}>4.9</Text>
            <Text style={styles.ratingCount}>(127 reviews)</Text>
          </View>
        </View>
      </LinearGradient>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>89</Text>
            <Text style={styles.statLabel}>Rides Taken</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>23</Text>
            <Text style={styles.statLabel}>Rides Offered</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>156kg</Text>
            <Text style={styles.statLabel}>CO₂ Saved</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Achievements</Text>
          <View style={styles.achievementsGrid}>
            {achievements.map((achievement, index) => (
              <View key={index} style={styles.achievementCard}>
                <View style={[styles.achievementIcon, { backgroundColor: achievement.color }]}>
                  <achievement.icon color="#FFFFFF" size={20} />
                </View>
                <Text style={styles.achievementTitle}>{achievement.title}</Text>
                <Text style={styles.achievementDescription}>{achievement.description}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Account</Text>
          <View style={styles.menuContainer}>
            {menuItems.map((item, index) => (
              <TouchableOpacity key={index} style={styles.menuItem}>
                <View style={styles.menuItemLeft}>
                  <View style={styles.menuIcon}>
                    <item.icon color="#666" size={20} />
                  </View>
                  <View>
                    <Text style={styles.menuTitle}>{item.title}</Text>
                    <Text style={styles.menuSubtitle}>{item.subtitle}</Text>
                  </View>
                </View>
                <ChevronRight color="#CCC" size={20} />
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <TouchableOpacity style={styles.impactCard}>
            <View style={styles.impactContent}>
              <Leaf color="#4CAF50" size={32} />
              <View style={styles.impactText}>
                <Text style={styles.impactTitle}>Your Environmental Impact</Text>
                <Text style={styles.impactDescription}>
                  You've helped prevent 156kg of CO₂ emissions - equivalent to planting 7 trees!
                </Text>
              </View>
            </View>
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
  profileSection: {
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: '#FFFFFF',
  },
  editButton: {
    position: 'absolute',
    top: 70,
    right: '35%',
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(0,0,0,0.3)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: 24,
    fontFamily: 'Inter-Bold',
    color: '#FFFFFF',
    marginTop: 16,
  },
  email: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#FFFFFF',
    opacity: 0.9,
    marginTop: 4,
  },
  university: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: '#FFFFFF',
    opacity: 0.8,
    marginTop: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 12,
  },
  rating: {
    fontSize: 18,
    fontFamily: 'Inter-Bold',
    color: '#FFFFFF',
  },
  ratingCount: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#FFFFFF',
    opacity: 0.8,
  },
  content: {
    flex: 1,
  },
  statsContainer: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 24,
    marginTop: -20,
    borderRadius: 16,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 4,
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontFamily: 'Inter-Bold',
    color: '#333',
  },
  statLabel: {
    fontSize: 12,
    fontFamily: 'Inter-Medium',
    color: '#666',
    marginTop: 4,
    textAlign: 'center',
  },
  statDivider: {
    width: 1,
    height: 40,
    backgroundColor: '#E5E5E5',
  },
  section: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: 'Inter-SemiBold',
    color: '#333',
    marginBottom: 16,
  },
  achievementsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  achievementCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    flex: 1,
    minWidth: '45%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  achievementIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  achievementTitle: {
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 4,
  },
  achievementDescription: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: '#666',
    textAlign: 'center',
  },
  menuContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#F5F5F5',
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  menuIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F8F9FA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuTitle: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#333',
  },
  menuSubtitle: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#666',
    marginTop: 2,
  },
  impactCard: {
    backgroundColor: 'rgba(76,175,80,0.1)',
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: 'rgba(76,175,80,0.2)',
  },
  impactContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
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
});