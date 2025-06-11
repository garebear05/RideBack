import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { MapPin, Clock, Users, Heart, MessageCircle, Filter, Search } from 'lucide-react-native';

const rides = [
  {
    id: 1,
    driver: {
      name: 'Sarah Chen',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      rating: 4.9,
    },
    from: 'UC Berkeley',
    to: 'San Francisco Airport',
    date: 'Today',
    time: '3:30 PM',
    price: '$15',
    seats: 3,
    likes: 12,
    messages: 5,
    isLiked: false,
  },
  {
    id: 2,
    driver: {
      name: 'Mike Johnson',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      rating: 4.8,
    },
    from: 'Stanford University',
    to: 'Downtown Palo Alto',
    date: 'Tomorrow',
    time: '9:00 AM',
    price: '$8',
    seats: 2,
    likes: 8,
    messages: 3,
    isLiked: true,
  },
  {
    id: 3,
    driver: {
      name: 'Emma Davis',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      rating: 5.0,
    },
    from: 'UC Berkeley',
    to: 'Oakland Airport',
    date: 'Friday',
    time: '6:15 PM',
    price: '$12',
    seats: 1,
    likes: 15,
    messages: 7,
    isLiked: false,
  },
];

export default function RidesScreen() {
  const [likedRides, setLikedRides] = useState<number[]>([2]);

  const toggleLike = (rideId: number) => {
    setLikedRides(prev => 
      prev.includes(rideId) 
        ? prev.filter(id => id !== rideId)
        : [...prev, rideId]
    );
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#667eea', '#764ba2']}
        style={styles.header}
      >
        <View style={styles.headerContent}>
          <View>
            <Text style={styles.greeting}>Good afternoon!</Text>
            <Text style={styles.subtitle}>Find your next ride</Text>
          </View>
          <View style={styles.headerActions}>
            <TouchableOpacity style={styles.headerButton}>
              <Search color="#FFFFFF" size={20} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.headerButton}>
              <Filter color="#FFFFFF" size={20} />
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.ridesContainer}>
          {rides.map((ride) => (
            <View key={ride.id} style={styles.rideCard}>
              <View style={styles.rideHeader}>
                <View style={styles.driverInfo}>
                  <Image source={{ uri: ride.driver.avatar }} style={styles.avatar} />
                  <View>
                    <Text style={styles.driverName}>{ride.driver.name}</Text>
                    <Text style={styles.rating}>★ {ride.driver.rating}</Text>
                  </View>
                </View>
                <Text style={styles.price}>{ride.price}</Text>
              </View>

              <View style={styles.routeInfo}>
                <View style={styles.route}>
                  <MapPin color="#4CAF50" size={16} />
                  <Text style={styles.location}>{ride.from}</Text>
                </View>
                <View style={styles.routeLine} />
                <View style={styles.route}>
                  <MapPin color="#FF5722" size={16} />
                  <Text style={styles.location}>{ride.to}</Text>
                </View>
              </View>

              <View style={styles.rideDetails}>
                <View style={styles.detail}>
                  <Clock color="#666" size={16} />
                  <Text style={styles.detailText}>{ride.date} • {ride.time}</Text>
                </View>
                <View style={styles.detail}>
                  <Users color="#666" size={16} />
                  <Text style={styles.detailText}>{ride.seats} seats available</Text>
                </View>
              </View>

              <View style={styles.rideActions}>
                <TouchableOpacity 
                  style={styles.actionButton}
                  onPress={() => toggleLike(ride.id)}
                >
                  <Heart 
                    color={likedRides.includes(ride.id) ? "#FF5722" : "#666"} 
                    size={20}
                    fill={likedRides.includes(ride.id) ? "#FF5722" : "none"}
                  />
                  <Text style={[
                    styles.actionText,
                    likedRides.includes(ride.id) && styles.likedText
                  ]}>
                    {ride.likes + (likedRides.includes(ride.id) ? 1 : 0)}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionButton}>
                  <MessageCircle color="#666" size={20} />
                  <Text style={styles.actionText}>{ride.messages}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.requestButton}>
                  <Text style={styles.requestText}>Request Ride</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
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
    paddingBottom: 20,
    paddingHorizontal: 24,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greeting: {
    fontSize: 24,
    fontFamily: 'Inter-Bold',
    color: '#FFFFFF',
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#FFFFFF',
    opacity: 0.9,
    marginTop: 4,
  },
  headerActions: {
    flexDirection: 'row',
    gap: 12,
  },
  headerButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
  },
  ridesContainer: {
    padding: 24,
    gap: 16,
  },
  rideCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  rideHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  driverInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  driverName: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#333',
  },
  rating: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#666',
    marginTop: 2,
  },
  price: {
    fontSize: 20,
    fontFamily: 'Inter-Bold',
    color: '#4CAF50',
  },
  routeInfo: {
    marginBottom: 16,
  },
  route: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginVertical: 4,
  },
  routeLine: {
    width: 2,
    height: 20,
    backgroundColor: '#E5E5E5',
    marginLeft: 8,
    marginVertical: 4,
  },
  location: {
    fontSize: 16,
    fontFamily: 'Inter-Medium',
    color: '#333',
  },
  rideDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
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
  rideActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  actionText: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: '#666',
  },
  likedText: {
    color: '#FF5722',
  },
  requestButton: {
    flex: 1,
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginLeft: 16,
  },
  requestText: {
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
    color: '#FFFFFF',
  },
});