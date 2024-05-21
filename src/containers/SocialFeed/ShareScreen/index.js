import React from 'react';
import {View, Text, TextInput, Button, StyleSheet, Share} from 'react-native';

const ShareScreen = ({route}) => {
  const {article} = route.params;
  const [message, setMessage] = React.useState('');

  const handleShare = async () => {
    try {
      await Share.share({
        message: ` ${article.title}\n\n${message}\n\nRead more at ${article.url}`,
      });
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Share This Article</Text>
      <Text style={styles.articleTitle}>{article.title}</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Add a message..."
        value={message}
        onChangeText={setMessage}
      />
      <Button title="Share" onPress={handleShare} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  articleTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  textInput: {
    height: 100,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    textAlignVertical: 'top',
  },
});

export default ShareScreen;
