import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, Button, Image} from 'react-native';
import {fetchIPDetails} from '../services/IPService';
import ImageSlider from '../components/ImageSlider';

const HomeScreen = ({navigation}) => {
  const [ip, setIp] = useState('');
  const [ipDetails, setIpDetails] = useState(null);

  useEffect(() => {
    fetchIPDetails().then(data => setIpDetails(data));
  }, []);

  const handleIPSubmit = () => {
    fetchIPDetails(ip).then(data => setIpDetails(data));
  };

  const handleImageSelect = image => {
    navigation.navigate('ImageScreen', {image, ipDetails});
  };

  return (
    <View>
      <Text>Current IP: {ipDetails?.ip}</Text>
      <Text>ISP: {ipDetails?.isp}</Text>
      <TextInput value={ip} onChangeText={setIp} placeholder="Enter IP" />
      <Button title="Get ISP Details" onPress={handleIPSubmit} />
      <ImageSlider onSelect={handleImageSelect} />
    </View>
  );
};

export default HomeScreen;
