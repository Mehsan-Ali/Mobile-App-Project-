import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/FontAwesome";
import Fontisto from "@expo/vector-icons/Fontisto";
import * as Yup from "yup";
import { Picker } from '@react-native-picker/picker';
import { Formik } from "formik";
import { useMutation } from "@tanstack/react-query";
import { registerPresident } from "../(services)/api/api";
import { useRouter } from "expo-router";
import SecondStep from "./SecondStep";

const FirstStep = () => {
    const router = useRouter();

    const [backendError, setBackendError] = useState('');
    const [getId, setGetId] = useState('');

    const Member1 = Yup.object().shape({
        president: Yup.string().min(3, "Invalid ID").required("Required"),
        // society: Yup.string().min(3, "Invalid ID").required("Required"),
        cgpa: Yup.string().test('is-valid-cgpa', 'Not Eligible!', value => parseFloat(value) > 2).required("Required"),
        StdId: Yup.string().matches(/^\w{3}-\w{3}-\w{3}$/, "Invalid ID format").required("Required"),
    });


    const [state, setState] = useState({
        selectedCat: '',
        category: [
            { itemName: 'Science' },
            { itemName: 'Art' },
            { itemName: 'Debate' },
            { itemName: 'Sport' },
            { itemName: 'Music' },
            // Add more items as needed
        ]
    });

    const handlePickerChange = (itemValue, itemIndex) => {
        setState({
            ...state,
            selectedCat: itemValue
        });
        console.log(itemValue);
    };

    const mutation = useMutation({
        mutationFn: registerPresident,
        mutationKey: ["register"],
    });

    return (
        <View style={styles.container}>
            <Text style={styles.subtitle}>Creating a Society: Step 1 </Text>
            <Text style={styles.subtitle}>President Details</Text>

            <Formik
                initialValues={{ president: "", cgpa: "", StdId: "", society: '' }}
                validationSchema={Member1}
                onSubmit={(values) => {
                    setBackendError(null)
                    values.society = state.selectedCat;
                    console.log(values);
                    mutation
                        .mutateAsync(values)
                        .then((data) => {
                            setGetId(data._id)
                            console.log("data", data._id);
                            router.push("./SecondStep");
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
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    values,
                    errors,
                    touched,
                }) => 
                    (

                    <View style={styles.form}>
                        <TextInput
                            style={styles.input}
                            placeholder="Name"
                            onChangeText={handleChange("president")}
                            onBlur={handleBlur("president")}
                            value={values.president}
                        // keyboardType="email-address"
                        />
                        {errors.president && touched.president ? (
                            <Text style={styles.errorText}>{errors.president}</Text>
                        ) : null}

                        <TextInput
                            style={styles.input}
                            placeholder="CGPA"
                            onChangeText={handleChange("cgpa")}
                            onBlur={handleBlur("cgpa")}
                            value={values.cgpa}
                        />
                        {errors.cgpa && touched.cgpa ? (
                            <Text style={styles.errorText}>{errors.cgpa}</Text>
                        ) : null}



                        <Picker
                            itemStyle={styles.pickeritem}
                            style={styles.input}
                            mode="dropdown"
                            selectedValue={state.selectedCat}
                            onValueChange={handlePickerChange}
                        >
                            <Picker.Item label="Select Society *" value="" />
                            {
                                state.category.map((item, index) => (
                                    <Picker.Item
                                        key={index}
                                        label={item.itemName}
                                        value={item.itemName}
                                    />
                                ))
                            }

                        </Picker>

                        <TextInput
                            style={styles.input}
                            placeholder="ID (ABC-12A-123)"
                            onChangeText={handleChange("StdId")}
                            onBlur={handleBlur("StdId")}
                            value={values.StdId}
                        />
                        {errors.StdId && touched.StdId ? (
                            <Text style={styles.errorText}>{errors.StdId}</Text>
                        ) : null}

                        {backendError ? (
                            <Text style={styles.errorText}>{backendError}</Text>
                        ) : null}


                        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                            <Text style={styles.buttonText}>Next</Text>
                        </TouchableOpacity>
                    </View>

                )}
            </Formik>
            {getId && (
                <SecondStep presidentId={getId} />
            )}
        </View>
    );
};

export default FirstStep;

const styles = StyleSheet.create({
    propss: {
        display: "none"
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
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