import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, useWindowDimensions, Touchable, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

//<TextInput style={{fontSize: 24, width: 250, height: 50, zIndex:1, top: 65}}>Name</TextInput>
export default function App() {
  const windowHeight = useWindowDimensions().height;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#00E1C',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: Math.round(windowHeight)       
    },  
    inputStyledBorderContainer:{
      display: 'flex', 
      height: 69, 
      overflow: "hidden",
      backgroundColor: 'blue'
    },
    inputStyledBorder:{
      height: 69, 
      width: 270,      
    },
    textInputStyle:{
      fontSize: 26, 
      width: 250, 
      height: 50, 
      zIndex:1, 
      top: "-90%", 
      left: 12, 
      textDecorationLine: 'underline'
    }
  });  
   
  return (
    <View style={styles.container}>      

      <View style={{alignItems: 'center', justifyContent: 'space-between', flex: 1, padding: 140, top: "-5%"}}>

        <Image source={require("./assets/ZigwaAssets/ZIGWA.png")} style={{height: 60, width: 250, marginBottom: 25}}></Image>
        
        <View style={styles.inputStyledBorderContainer}>
          <Image source={require("./assets/ZigwaAssets/TextBoxArea.png")} style={styles.inputStyledBorder}></Image>          
          <TextInput style={styles.textInputStyle} placeholder='Name' />
        </View>
        
        <View style={styles.inputStyledBorderContainer}>
          <Image source={require("./assets/ZigwaAssets/TextBoxArea.png")} style={styles.inputStyledBorder}></Image>
          <TextInput style={styles.textInputStyle} placeholder='Password' />
        </View>

        <View style={styles.inputStyledBorderContainer}>
          <Image source={require("./assets/ZigwaAssets/TextBoxArea.png")} style={styles.inputStyledBorder}></Image>
          <TextInput style={styles.textInputStyle} placeholder='Confirm Password' />
        </View>
        
        <View style={styles.inputStyledBorderContainer}>
          <Image source={require("./assets/ZigwaAssets/TextBoxArea.png")} style={styles.inputStyledBorder}></Image>
          <TextInput style={styles.textInputStyle} placeholder='Phone no.' />
        </View>        

        <TouchableOpacity style={{height: 48, width: 150, backgroundColor: '#D9D9D9', borderRadius: 45, top: 15, alignContent: 'center', justifyContent: 'center'}}>
          <Text style={{textAlign: 'center', fontSize: 24}}>Sign up</Text>
        </TouchableOpacity>

      </View>                        
      
    </View>
  );
}


