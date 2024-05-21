import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import axios from 'axios';
import {getLinkPreview} from 'link-preview-js';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CreatePostScreen = ({navigation}) => {
  const [text, setText] = useState('');
  const [image, setImage] = useState(null);
  const [link, setLink] = useState('');
  const [linkPreview, setLinkPreview] = useState(null);

  const handlePickImage = () => {
    launchImageLibrary({}, response => {
      if (!response.didCancel && !response.error) {
        setImage(response.assets[0].uri);
      }
    });
  };

  const handleFetchLinkPreview = async () => {
    try {
      const data = await getLinkPreview(link);
      setLinkPreview(data);
    } catch (error) {
      console.error('Error fetching link preview:', error);
    }
  };

  const handlePost = () => {
    // Logic to handle posting the data (e.g., sending it to a server)
    console.log('Post created:', {text, image, link, linkPreview});
  };

  return (
    <ScrollView style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 10,
          justifyContent: 'space-between',
        }}>
        <View style={[{flexDirection: 'row', alignItems: 'center'}]}>
          <Icon
            name={'chevron-left'}
            size={22}
            color={'black'}
            onPress={() => {
              navigation.goBack();
            }}
            style={[{marginRight: 10}]}
          />
          <Image
            source={require('../../../assets/images/userImg.png')}
            style={styles.PostuserImage}
          />
          <View style={{marginLeft: 10}}>
            <Text style={{fontSize: 15, color: 'black', fontWeight: 'bold'}}>
              Mudduser One
            </Text>
            <Text style={{fontSize: 12, color: 'black'}}>Developer</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon
            name={'camera'}
            size={25}
            color={'black'}
            onPress={() => {
              handlePickImage();
            }}
            style={[{marginRight: 10}]}
          />
          <TouchableOpacity
            onPress={handlePost}
            style={{
              alignSelf: 'flex-end',
              width: 80,
              height: 50,
              backgroundColor: '#2d46f5',
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 16, fontWeight: 'bold', color: 'white'}}>
              Post
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <TextInput
        style={styles.textInput}
        placeholder="What's on your mind?"
        value={text}
        onChangeText={setText}
        multiline
      />
      <TextInput
        style={styles.textInput}
        placeholder="Add a link"
        value={link}
        onChangeText={setLink}
        onBlur={handleFetchLinkPreview}
      />

      {/* <Button title="Pick an Image" onPress={handlePickImage} /> */}
      {image && <Image source={{uri: image}} style={styles.image} />}

      {linkPreview && (
        <View style={styles.linkPreview}>
          {linkPreview.images?.length > 0 && (
            <Image
              source={{uri: linkPreview.images[0]}}
              style={styles.previewImage}
            />
          )}
          <Text style={styles.previewTitle}>{linkPreview.title}</Text>
          <Text style={styles.previewDescription}>
            {linkPreview.description}
          </Text>
        </View>
      )}

      {/* <Button title="Post" onPress={handlePost} /> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  PostuserImage: {width: 50, height: 50, resizeMode: 'contain'},
  container: {
    flex: 1,
    padding: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    marginTop: 10,
  },
  linkPreview: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
  },
  previewImage: {
    width: '100%',
    height: 100,
  },
  previewTitle: {
    fontWeight: 'bold',
    marginTop: 10,
  },
  previewDescription: {
    marginTop: 5,
  },
});

export default CreatePostScreen;
