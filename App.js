import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  Platform,
  Dimensions,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  View,
  Image,
  Alert,
  Button,
} from "react-native";
/*import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";*/

export default function App() {
  /*console.log(Dimensions.get("screen"));
  console.log(useDimensions());*/
  return (
    <View
      style={
        /* backgroundColor: "grey",
        justifyContent: "center",
        alignContent: "center",
        flex: 1,
        if we want this specific view to have different style we can write the above styles*/
        styles.container
      }
    >
      <View
        style={{
          backgroundColor: "red",
          width: "100%",
          alignContent: "center",
          flex: 1,
        }}
      >
        <Text>Hello React Native</Text>
      </View>

      <View style={{ backgroundColor: "green", width: "100%" }}>
        <TouchableOpacity onPress={console.log("Image Tapped")}>
          <Image
            blurRadius={1}
            fadeDuration={1000}
            source={{
              width: 200,
              height: 300,
              uri: "https://picsum.photos/200/300",
              flex: 3,
            }}
          />
        </TouchableOpacity>
      </View>

      <TouchableNativeFeedback onPress={() => console.log("Box Tapped")}>
        <View
          style={{
            width: "100%",
            height: 70,
            backgroundColor: "aqua",
            flex: 2,
          }}
        ></View>
      </TouchableNativeFeedback>

      <Button
        color="black"
        title="Click me"
        onPress={() =>
          Alert.alert("My title", "My message", [
            { text: "Yes", onPress: () => console.log("Yes") },
            { text: "No", onPress: () => console.log("No") },
          ])
        }
      />
      <Button
        color="red"
        title="Warning"
        onPress={
          () =>
            Alert.prompt("Prompt", "This button is for alert prompt", (text) =>
              console.log(text)
            ) // It only works on iOS
        }
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? 30 : 0,
  },
});
