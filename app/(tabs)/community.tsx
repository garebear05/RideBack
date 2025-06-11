import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { Heart, MessageCircle, Share, Leaf, Users, Award, TrendingUp } from 'lucide-react-native';

const posts = [
  {
    id: 1,
    user: {
      name: 'Green Campus Initiative',
      avatar: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      verified: true,
    },
    content: 'Amazing news! Our RideBack community has collectively saved 2,500 kg of CO₂ emissions this month! 🌱 Keep up the great work, everyone!',
    image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=2',
    likes: 156,
    comments: 23,
    shares: 12,
    time: '2h ago',
    type: 'achievement',
  },
  {
    id: 2,
    user: {
      name: 'Sarah Chen',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      verified: false,
    },
    content: 'Just completed my 50th ride share! The community here is incredible. Met so many amazing people and saved money on gas. Win-win! 🚗💚',
    likes: 89,
    comments: 15,
    shares: 8,
    time: '4h ago',
    type: 'milestone',
  },
  {
    id: 3,
    user: {
      name: 'UC Berkeley Sustainability',
      avatar: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      verified: true,
    },
    content: 'Reminder: Earth Week is coming up! We\'re organizing a campus-wide carpooling challenge. Join us in making a difference! 🌍',
    image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=2',
    likes: 234,
    comments: 45,
    shares: 67,
    time: '1d ago',
    type: 'event',
  },
];

const stats = [
  { icon: Leaf, label: 'CO₂ Saved', value: '2.5k kg', color: '#4CAF50' },
  { icon: Users, label: 'Active Users', value: '1,247', color: '#2196F3' },
  { icon: Award, label: 'Rides Shared', value: '3,892', color: '#FF9800' },
  { icon: TrendingUp, label: 'Growth', value: '+23%', color: '#9C27B0' },
];

export default function CommunityScreen() {
  const [likedPosts, setLikedPosts] = useState<number[]>([]);

  const toggleLike = (postId: number) => {
    setLikedPosts(prev => 
      prev.includes(postId) 
        ? prev.filter(id => id !== postId)
        : [...prev, postId]
    );
  };

  const getPostTypeColor = (type: string) => {
    switch (type) {
      case 'achievement': return '#4CAF50';
      case 'milestone': return '#FF9800';
      case 'event': return '#2196F3';
      default: return '#666';
    }
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#667eea', '#764ba2']}
        style={styles.header}
      >
        <Text style={styles.title}>Community</Text>
        <Text style={styles.subtitle}>Connect, share, and make an impact together</Text>
      </LinearGradient>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.statsContainer}>
          <Text style={styles.statsTitle}>Community Impact</Text>
          <View style={styles.statsGrid}>
            {stats.map((stat, index) => (
              <View key={index} style={styles.statCard}>
                <stat.icon color={stat.color} size={24} />
                <Text style={styles.statValue}>{stat.value}</Text>
                <Text style={styles.statLabel}>{stat.label}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.postsContainer}>
          <Text style={styles.postsTitle}>Community Feed</Text>
          
          {posts.map((post) => (
            <View key={post.id} style={styles.postCard}>
              <View style={styles.postHeader}>
                <View style={styles.userInfo}>
                  <Image source={{ uri: post.user.avatar }} style={styles.userAvatar} />
                  <View>
                    <View style={styles.userNameContainer}>
                      <Text style={styles.userName}>{post.user.name}</Text>
                      {post.user.verified && (
                        <View style={styles.verifiedBadge}>
                          <Text style={styles.verifiedText}>✓</Text>
                        </View>
                      )}
                    </View>
                    <Text style={styles.postTime}>{post.time}</Text>
                  </View>
                </View>
                <View style={[styles.postTypeBadge, { backgroundColor: getPostTypeColor(post.type) }]}>
                  <Text style={styles.postTypeText}>{post.type}</Text>
                </View>
              </View>

              <Text style={styles.postContent}>{post.content}</Text>

              {post.image && (
                <Image source={{ uri: post.image }} style={styles.postImage} />
              )}

              <View style={styles.postActions}>
                <TouchableOpacity 
                  style={styles.actionButton}
                  onPress={() => toggleLike(post.id)}
                >
                  <Heart 
                    color={likedPosts.includes(post.id) ? "#FF5722" : "#666"} 
                    size={20}
                    fill={likedPosts.includes(post.id) ? "#FF5722" : "none"}
                  />
                  <Text style={[
                    styles.actionText,
                    likedPosts.includes(post.id) && styles.likedText
                  ]}>
                    {post.likes + (likedPosts.includes(post.id) ? 1 : 0)}
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.actionButton}>
                  <MessageCircle color="#666" size={20} />
                  <Text style={styles.actionText}>{post.comments}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.actionButton}>
                  <Share color="#666" size={20} />
                  <Text style={styles.actionText}>{post.shares}</Text>
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
  statsContainer: {
    padding: 24,
  },
  statsTitle: {
    fontSize: 20,
    fontFamily: 'Inter-SemiBold',
    color: '#333',
    marginBottom: 16,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  statCard: {
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
  statValue: {
    fontSize: 24,
    fontFamily: 'Inter-Bold',
    color: '#333',
    marginTop: 8,
  },
  statLabel: {
    fontSize: 12,
    fontFamily: 'Inter-Medium',
    color: '#666',
    marginTop: 4,
    textAlign: 'center',
  },
  postsContainer: {
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  postsTitle: {
    fontSize: 20,
    fontFamily: 'Inter-SemiBold',
    color: '#333',
    marginBottom: 16,
  },
  postCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  postHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flex: 1,
  },
  userAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  userNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  userName: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#333',
  },
  verifiedBadge: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#4CAF50',
    alignItems: 'center',
    justifyContent: 'center',
  },
  verifiedText: {
    fontSize: 12,
    color: '#FFFFFF',
    fontFamily: 'Inter-Bold',
  },
  postTime: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#666',
    marginTop: 2,
  },
  postTypeBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  postTypeText: {
    fontSize: 12,
    fontFamily: 'Inter-Medium',
    color: '#FFFFFF',
    textTransform: 'capitalize',
  },
  postContent: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#333',
    lineHeight: 24,
    marginBottom: 12,
  },
  postImage: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginBottom: 16,
  },
  postActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 24,
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
});