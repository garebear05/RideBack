import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { Search, MessageCircle, Clock } from 'lucide-react-native';

const conversations = [
  {
    id: 1,
    user: {
      name: 'Sarah Chen',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
    },
    lastMessage: 'Great! See you at the pickup point at 3:30 PM',
    time: '2m ago',
    unread: 2,
    ride: 'UC Berkeley → SFO Airport',
  },
  {
    id: 2,
    user: {
      name: 'Mike Johnson',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
    },
    lastMessage: 'Thanks for the ride! Left a 5-star review',
    time: '1h ago',
    unread: 0,
    ride: 'Stanford → Downtown Palo Alto',
  },
  {
    id: 3,
    user: {
      name: 'Emma Davis',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
    },
    lastMessage: 'Is there still a seat available for Friday?',
    time: '3h ago',
    unread: 1,
    ride: 'UC Berkeley → Oakland Airport',
  },
  {
    id: 4,
    user: {
      name: 'Alex Rodriguez',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
    },
    lastMessage: 'Perfect! I\'ll be there with my luggage',
    time: '1d ago',
    unread: 0,
    ride: 'UCLA → LAX Airport',
  },
];

export default function MessagesScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredConversations = conversations.filter(conv =>
    conv.user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    conv.ride.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#667eea', '#764ba2']}
        style={styles.header}
      >
        <Text style={styles.title}>Messages</Text>
        <Text style={styles.subtitle}>Stay connected with your ride partners</Text>
      </LinearGradient>

      <View style={styles.searchContainer}>
        <Search color="#666" size={20} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search conversations..."
          placeholderTextColor="#666"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {filteredConversations.map((conversation) => (
          <TouchableOpacity key={conversation.id} style={styles.conversationCard}>
            <View style={styles.avatarContainer}>
              <Image source={{ uri: conversation.user.avatar }} style={styles.avatar} />
              {conversation.unread > 0 && (
                <View style={styles.unreadBadge}>
                  <Text style={styles.unreadText}>{conversation.unread}</Text>
                </View>
              )}
            </View>

            <View style={styles.conversationContent}>
              <View style={styles.conversationHeader}>
                <Text style={styles.userName}>{conversation.user.name}</Text>
                <View style={styles.timeContainer}>
                  <Clock color="#999" size={12} />
                  <Text style={styles.time}>{conversation.time}</Text>
                </View>
              </View>

              <Text style={styles.rideInfo}>{conversation.ride}</Text>
              
              <Text style={[
                styles.lastMessage,
                conversation.unread > 0 && styles.unreadMessage
              ]}>
                {conversation.lastMessage}
              </Text>
            </View>
          </TouchableOpacity>
        ))}

        {filteredConversations.length === 0 && (
          <View style={styles.emptyState}>
            <MessageCircle color="#CCC" size={64} />
            <Text style={styles.emptyTitle}>No conversations found</Text>
            <Text style={styles.emptySubtitle}>
              {searchQuery ? 'Try adjusting your search' : 'Start by requesting a ride or posting one'}
            </Text>
          </View>
        )}
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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 24,
    marginTop: 20,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 4,
    gap: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#333',
    paddingVertical: 12,
  },
  content: {
    flex: 1,
    marginTop: 20,
  },
  conversationCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 24,
    marginBottom: 12,
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  avatarContainer: {
    position: 'relative',
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
  },
  unreadBadge: {
    position: 'absolute',
    top: -4,
    right: -4,
    backgroundColor: '#FF5722',
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  unreadText: {
    fontSize: 12,
    fontFamily: 'Inter-Bold',
    color: '#FFFFFF',
  },
  conversationContent: {
    flex: 1,
  },
  conversationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  userName: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#333',
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  time: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: '#999',
  },
  rideInfo: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: '#4CAF50',
    marginBottom: 6,
  },
  lastMessage: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#666',
    lineHeight: 20,
  },
  unreadMessage: {
    fontFamily: 'Inter-Medium',
    color: '#333',
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 80,
    paddingHorizontal: 40,
  },
  emptyTitle: {
    fontSize: 20,
    fontFamily: 'Inter-SemiBold',
    color: '#333',
    marginTop: 16,
    marginBottom: 8,
  },
  emptySubtitle: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#666',
    textAlign: 'center',
    lineHeight: 24,
  },
});