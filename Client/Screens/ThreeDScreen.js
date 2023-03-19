import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Button, TouchableOpacity} from "react-native";
import { WebView } from "react-native-webview";
import { useNavigation } from "@react-navigation/native";


const ThreeDScreen = () => {

  const nav = useNavigation();
  // //< FOT THE DATA TO BE DYNAMIC< ROUTE CAN BE SAVED IN DB ↓
  // const { uri } = route.params;


  return (
    <SafeAreaView style={styles.container}>
     
           {/* <Text style={{ textAlign: "center",fontSize: 20, fontWeight: 700}} >Soft Pinch Liquid Blush</Text> */}

     {/*//< data that  need so be dynamic  */}
      <WebView
        style={styles.iframe}
        source={{ uri: "https://app.vectary.com/p/6pjbbQ2acabreCDAOL9ZhH"  }}
      />

<View style={styles.slideButtons} >
  
      <Button
        title="On You"
        onPress={() => {}}
        color="#111111"
        style={styles.threeDButton}
        
      />
          <Button
        title="View 3D"
        onPress={() => {nav.navigate("AR")}}
        color="#111111"
      />
</View>
<View style={styles.button} >
<Button

        title="X"
        onPress={() => {
          nav.navigate("ProductDetails");
        }}
        color="#111111"
      />
      </View>
      <TouchableOpacity style={styles.openItem} onPress={() => {}} >
        <Text>
          Open Item
        </Text>
      </TouchableOpacity>
   
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#434343",
    height: 100,
  },
  iframe: {
    marginTop: 20,
    marginBottom: 0,
    width: "100%",
  },
  slideButtons: {
    top: 100,
    left: 120,
    position: "absolute",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 7,
    borderColor: "#111111",
    borderWidth:1,

  },
  threeDButton: {
    backgroundColor: "#e3c3ff",
    
  },
  openItem: {
      alignSelf: "center",
      backgroundColor: "#e3c3ff",
      paddingHorizontal:20,
      paddingVertical:10,
      borderRadius: 50,
      marginVertical: 10,
      marginHorizontal: 10,
  },
    button: {
      position: "absolute",
      top: 100,
      left: 20,
    },

});

export default ThreeDScreen;
