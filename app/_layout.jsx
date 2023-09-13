import { Slot } from "expo-router";
import Header from "../components/Shared/Header";
import Footer from "../components/Shared/Footer";
import {
  SafeAreaView,
  View,
  Platform,
  StatusBar,
  StyleSheet,
} from "react-native";
// import { StatusBar } from "expo-status-bar";

function LandingPageLayout() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    content: {
      flex: 1,
    },
    footer: {
      // Add any styling you need for your footer here
      backgroundColor: "white",
      alignItems: "start",
      justifyContent: "start",
    },
  });
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Slot />
      </View>
      <View style={styles.footer}>
        <Footer />
      </View>
    </SafeAreaView>
  );
}

export default LandingPageLayout;
