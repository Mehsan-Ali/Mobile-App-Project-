import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/FontAwesome";
import Fontisto from "@expo/vector-icons/Fontisto";
import { useRouter } from "expo-router";

const TabHome = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to SMIU Society Voting</Text>
      <Text style={styles.subtitle}>Create socities to enroll:</Text>
      <View style={styles.techList}>
        <LinearGradient colors={["#61DBFB", "#35AFC2"]} style={styles.techItem}>
          {/* <Icon name="science" size={30} color="#fff" /> */}
          {/* <Text style={styles.techText}>Science Society</Text> */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("/Society/FirstStep")}
          >
            <Text style={styles.techText}>Create A Society</Text>
          </TouchableOpacity>
        </LinearGradient>

        {/* <LinearGradient colors={["#764ABC", "#543B9A"]} style={styles.techItem}> */}
          {/* <Fontisto name="sport" size={30} color="#fff" /> */}
          {/* <Text style={styles.techText}>Music Society</Text> */}
        {/* </LinearGradient> */}
        {/* <LinearGradient colors={["#FF4154", "#D12B3A"]} style={styles.techItem}> */}
          {/* <Icon name="database" size={30} color="#fff" /> */}
          {/* <Text style={styles.techText}>Debate Society</Text> */}
        {/* </LinearGradient> */}
        {/* <LinearGradient colors={["#0FAAFF", "#0B79C1"]} style={styles.techItem}> */}
          {/* <Icon name="wpforms" size={30} color="#fff" /> */}
          {/* <Text style={styles.techText}>Art Society</Text>
        </LinearGradient> */}
        {/* <LinearGradient colors={["#000000", "#434343"]} style={styles.techItem}> */}
          {/* <Icon name="server" size={30} color="#fff" /> */}
          {/* <Text style={styles.techText}>Sport Society</Text>
        </LinearGradient> */}
      </View>
    </View>
  );
};

export default TabHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#333",
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#666",
  },
  techList: {
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
  techItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 5,
  },
  techText: {
    fontSize: 18,
    color: "#fff",
    marginLeft: 10,
    fontWeight: "bold",
  },
});