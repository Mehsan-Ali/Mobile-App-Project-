import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/FontAwesome";
import Fontisto from "@expo/vector-icons/Fontisto";
import * as Yup from "yup";
import { Formik } from "formik";
import { useMutation } from "@tanstack/react-query";
import { registerPresident, registerSecretary, registerVicePresident } from "../(services)/api/api";
import { useRouter } from "expo-router";
import { Picker } from '@react-native-picker/picker';

const Fourth = () => {
    const router = useRouter();

    const [backendError, setBackendError] = useState('');


    return (
        <View style={styles.container}>
            <Text style={styles.subtitle}>Successfully Submited the details </Text>

            {/* <Formik
                initialValues={{ vpresident: "", cgpa: "", StdId: "" }}
                onSubmit={(values) => {
                    setBackendError(null)
                    console.log(values);
                    mutation
                        .mutateAsync(values)
                        .then((data) => {
                            console.log("data", data);
                            router.push("./SocietyDetail");
                        })
                        .catch((err) => {
                            if (err.response && err.response.data && err.response.data.message) {
                                console.log("Backend Error:", err.response.data.message);
                                setBackendError(err.response.data.message)
                                // You can display the error message to the user here
                            } else {
                                console.log("Error:", err.message);
                                // Handle other types of errors, like network errors
                            }
                        });
                }}
            >
                {({
                    handleSubmit,
                    values,
                }) => ( */}

                    <View style={styles.form}>
                        <TouchableOpacity style={styles.button} 
                            onPress={() => router.push("/(admin)")}>
                            <Text style={styles.buttonText}>Next</Text>
                        </TouchableOpacity>
                    </View>
                {/* )}
            </Formik> */}
        </View>
    );
};

export default Fourth;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#f5f5f5",
    },
    pickeritem: {
        padding: 20,
        backgroundColor: "#f5f5f5",
    },
    errorText: {
        color: "red",
        marginBottom: 16,
    },
    form: {
        width: "100%",
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

    input: {
        height: 50,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 16,
        marginBottom: 16,
        backgroundColor: "#fff",
    },
    button: {
        height: 50,
        backgroundColor: "#6200ea",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
        marginTop: 16,
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
});