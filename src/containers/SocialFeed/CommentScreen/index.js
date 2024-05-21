import React, {useState} from 'react';
import {
  Alert,
  FlatList,
  Image,
  ScrollView,
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
import {TextInput} from 'react-native-gesture-handler';

function CommentScreen({navigation, route}) {
  const obj = route?.params?.obj;
  console.log('====================================');
  console.log(obj);
  console.log('====================================');
  const [comment, setComment] = useState();
  const [newComment, setNewComment] = useState([]);
  const [isLike, setIslike] = useState(false);

  const handleShare = async () => {
    try {
      await Share.share({
        message: `this is a test Post`,
      });
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  const CommentView = ({item}) => {
    console.log('====================================');
    console.log(item);
    console.log('====================================');
    return (
      <View style={{paddingHorizontal: 10, paddingVertical: 5}}>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={require('../../../assets/images/userImg.png')}
            style={styles.userImage}
          />
          <View style={styles.commentViewStyle}>
            <Text style={{fontSize: 15, color: 'black', fontWeight: 'bold'}}>
              Mudduser One
            </Text>
            <Text
              style={{
                fontSize: 15,
                color: 'black',
                marginVertical: 3,
                marginLeft: 5,
              }}>
              {item?.comment}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  const Post = (item = obj) => {
    return (
      <View style={{width: '100%', padding: 7, backgroundColor: '#f1f1f1'}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon
            name={'chevron-left'}
            size={22}
            color={'black'}
            onPress={() => {
              navigation.goBack();
            }}
            style={[{marginRight: 10}]}
          />
          <Image source={item?.userImg} style={styles.PostuserImage} />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '75%',
              marginLeft: 10,
            }}>
            <View>
              <Text style={{fontSize: 15, color: 'black', fontWeight: 'bold'}}>
                {item?.username}
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
          {item?.dec}
        </Text>
        <Image style={styles.postImage} source={item?.postImg} />
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
              //   navigation.navigate('CommentScreen', {obj: item});
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
        <FlatList data={newComment} renderItem={CommentView} />
      </View>
    );
  };

  const CommentBox = () => {
    return (
      <View
        style={[
          {
            backgroundColor: '#f1f1f1',
            borderTopWidth: 0.7,
            borderColor: 'black',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingVertical: 10,
            paddingHorizontal: 15,
          },
        ]}>
        <View style={{borderWidth: 1, borderRadius: 5, width: '80%'}}>
          <TextInput
            style={styles.input}
            onChangeText={setComment}
            value={comment}
            placeholder="Write a comment"
          />
        </View>
        <View
          style={{
            height: 40,
            width: '15%',
            backgroundColor: 'gray',
            borderRadius: 5,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Icon
            name={'send'}
            size={22}
            color={'white'}
            onPress={() => {
              if (comment) {
                setNewComment([...newComment, {comment}]);
                setComment(null);
              } else {
                alert('Write a comment');
              }
            }}
          />
        </View>
      </View>
    );
  };
  return (
    <View style={[styles.mainView]}>
      {/* {Header()} */}
      {/* {_renderCreatePost()} */}
      <ScrollView>{Post()}</ScrollView>
      {CommentBox()}
    </View>
  );
}
const styles = StyleSheet.create({
  commentViewStyle: {
    // width: Metrics.screenWidth * 0.78,
    width: '83%',

    borderRadius: 10,
    padding: 10,
    marginLeft: 10,
    backgroundColor: `${'#808080'}30`,
    // backgroundColor:'red'
  },
  input: {
    height: 40,
    width: '75',
    // margin: 12,
    // borderWidth: 1,
    padding: 10,
  },
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
    paddingBottom: 2,
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
    justifyContent: 'space-between',
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

export default CommentScreen;
