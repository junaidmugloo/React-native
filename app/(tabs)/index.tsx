import {ScrollView, Image, StyleSheet, Platform,Text,View,SafeAreaView } from 'react-native';

import { useTheme,FAB,Button,AppBar,ListItem,IconButton,TextInput,Stack } from '@react-native-material/core';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
export default function HomeScreen() {
  const theme = useTheme()
  return (
    <>
    <View>
    <AppBar  />
    </View>
 <ScrollView style={{backgroundColor:"white"}}>
   
  
   <SafeAreaView style={styles.Main}>     
    <View style={[theme.elevations[0],
      styles.Container
      ]}>

      <Text>h11</Text>

    </View>
    <View style={[theme.elevations[0],
      styles.Flex
      ]}>
      <Text style={styles.One}>1</Text>
      <Text style={styles.Two}>2</Text>

    </View>
    <View style={[theme.elevations[0],
      styles.Flex
      ]}>
      <Text style={styles.One}>1</Text>
      <Text style={styles.Two}>2</Text>
      <Text style={styles.Two}>2</Text>
    </View>
    <View style={[theme.elevations[0],
      styles.Flex
      ]}>
      <Text style={styles.One}>1</Text>
      <Text style={styles.Two}>2</Text>
      <Text style={styles.Two}>2</Text>
      <Text style={styles.Two}>2</Text>
    </View>
    <View style={[theme.elevations[0],
      styles.Flex
      ]}>
      <Text style={styles.One}>1</Text>
      <Text style={styles.Two}>2</Text>
      <Text style={styles.One}>1</Text>
      <Text style={styles.Two}>2</Text>
      <Text style={styles.One}>1</Text>
     

    </View>
   
    
   
</SafeAreaView>
  </ScrollView>
  
  <FAB style={styles.fab} icon={props => <Icon name="plus" {...props} />} />
  
  </>
    
  );
}

const styles = StyleSheet.create({
Main:{
 
  margin:10,
},
Container:{
  width:"auto",
  height:180,
  borderRadius:10,
  backgroundColor:"grey",
  padding:20,
},
Flex:{
  
  gap:8,
  display:"flex",
  flexDirection:"row",
  justifyContent:"space-between",
  width:"auto",
  paddingTop:10,
 
},
One:{
  textAlign:"center",
fontSize:20,
flex:1,
backgroundColor:"gray",
borderRadius:10,
},
Two:{
  textAlign:"center",
  fontSize:20,
  flex:1,
  height:100,
  backgroundColor:"gray",
  borderRadius:10,
  },
  fab: {
    position: 'absolute',
    right: 16,
    bottom: 16,
    
    
    backgroundColor: '#6200ee', // Adjust as per your theme
  },

});
