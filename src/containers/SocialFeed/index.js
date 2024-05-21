import React, {useState} from 'react';
import {
  Image,
  Share,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FIcon from 'react-native-vector-icons/FontAwesome';
import IIcon from 'react-native-vector-icons/Ionicons';
import EIcon from 'react-native-vector-icons/EvilIcons';

function SocialFeed({navigation}) {
  const [isLike, setIslike] = useState(false);
  const Header = () => {
    return (
      <View style={[styles.headerStyle]}>
        <Text style={styles.socialfeedText}>SOCIAL FEEDS</Text>
      </View>
    );
  };

  const _renderCreatePost = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('CreatePostScreen');
        }}
        style={styles.createPostViewStyle}>
        <Image
          source={require('../../assets/images/userImg.png')}
          style={styles.userImage}
        />
        <View style={styles.whatsOnStyle}>
          <Text style={{fontSize: 15, color: 'black'}}>
            What's on your mind?
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const handleShare = async () => {
    try {
      await Share.share({
        message: `this is a test Post`,
      });
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  const Post = () => {
    return (
      <View style={{width: '100%', padding: 7, backgroundColor: '#f1f1f1'}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={require('../../assets/images/userImg.png')}
            style={styles.PostuserImage}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '81%',
              marginLeft: 10,
            }}>
            <View>
              <Text style={{fontSize: 15, color: 'black', fontWeight: 'bold'}}>
                Mudduser One
              </Text>
              <Text style={{fontSize: 12, color: 'black'}}>Developer</Text>
              <Text style={{fontSize: 10, color: 'black'}}>10 seconds ago</Text>
            </View>
            <Icon
              name={'dots-vertical'}
              size={22}
              color={'black'}
              onPress={() => {}}
            />
          </View>
        </View>
        <Text
          style={{
            fontSize: 15,
            color: '#2d46f5',
            textDecorationLine: 'underline',
          }}>
          https://i.dawn.com/primary/2024/05/21123758da23e6b.jpg
        </Text>
        <Text
          style={{
            fontSize: 15,
            color: 'black',
            // textDecorationLine: 'underline',
          }}>
          {`Funerarv procession to be held for late Iran president\nRaisi in Tabriz\nAfter leaving Tabriz, Raisi's body will arrive in Iran's Shia\nclerical centre of Qom on Tuesday before being moved\nto Tehran.`}
        </Text>
        <Image
          style={styles.postImage}
          source={require('../../assets/images/img5.jpg')}
        />
        <Text
          style={{
            fontSize: 15,
            color: 'black',
            marginVertical: 3,
            alignSelf: 'flex-end',
          }}>
          0 Comment
        </Text>
        <View style={{height: 1, backgroundColor: 'black'}}></View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => {
              setIslike(!isLike);
            }}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingVertical: 5,
            }}>
            <EIcon
              name={'like'}
              size={22}
              color={isLike ? '#2d46f5' : 'black'}
            />
            <Text
              style={{
                fontSize: 15,
                color: 'black',
                marginVertical: 3,
                alignSelf: 'flex-end',
                marginLeft: 5,
              }}>
              Like
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => {
              navigation.navigate('CommentScreen');
              // CommentScreen
            }}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingVertical: 5,
            }}>
            <FIcon
              name={'comments-o'}
              size={22}
              color={'black'}
              onPress={() => {}}
            />
            <Text
              style={{
                fontSize: 15,
                color: 'black',
                marginVertical: 3,
                alignSelf: 'flex-end',
                marginLeft: 5,
              }}>
              Comments
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              handleShare();
            }}
            style={{flexDirection: 'row', alignItems: 'center'}}>
            <IIcon
              name={'share-social-outline'}
              size={22}
              color={'black'}
              onPress={() => {}}
            />
            <Text
              style={{
                fontSize: 15,
                color: 'black',
                marginVertical: 3,
                alignSelf: 'flex-end',
                marginLeft: 5,
              }}>
              Share
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <View style={[styles.mainView]}>
      {Header()}
      {_renderCreatePost()}
      {Post()}
    </View>
  );
}
const styles = StyleSheet.create({
  createPostViewStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    paddingHorizontal: 15,
  },
  headerStyle: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: 'gray',
    paddingBottom: 5,
    paddingVertical: 5,
    // marginRight: 15,
    // marginLeft: 15,
  },
  postImage: {
    width: '100%',
    alignSelf: 'center',
    resizeMode: 'stretch',
    height: 270,
    marginTop: 5,
  },
  mainView: {
    flex: 1,
    // paddingHorizontal: 15,
    // paddingVertical: 15,
    backgroundColor: 'white',
  },
  socialfeedText: {fontSize: 18, color: 'black', fontWeight: 'bold'},
  userImage: {width: 50, height: 50, resizeMode: 'contain'},
  PostuserImage: {width: 60, height: 60, resizeMode: 'contain'},
  whatsOnStyle: {
    paddingVertical: 10,
    borderWidth: 0.7,
    width: '84%',
    paddingHorizontal: 10,
    marginLeft: 10,
    borderRadius: 10,
  },
});

export default SocialFeed;
