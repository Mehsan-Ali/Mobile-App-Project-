import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/FontAwesome";
import Fontisto from "@expo/vector-icons/Fontisto";
import * as Yup from "yup";
import { Formik } from "formik";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "expo-router";
import { getDataPresident, registerVicePresident } from "../../(services)/api/api";
import { useSelector } from "react-redux";
import axios from "axios";


const ArtSocity = () => {
  const router = useRouter();

  const user = useSelector((state) => state.auth.user);
  const [backendError, setBackendError] = useState('');
  const [initialValues, setInitialValues] = useState([])

  const [votes, setVotes] = useState({});
  const [votedPresidents, setVotedPresidents] = useState([]);
  const [hasVoted, setHasVoted] = useState(false);

  const [votedPresident, setVotedPresident] = useState(null);

  // const handleVote = (presidentStdId, userEmail) => {
  //   if (votedPresident === null) {
  //     console.log("Clicked Vote for StdId:", presidentStdId);
  //     console.log("User's Email:", userEmail);

  //     setVotes(prevVotes => ({
  //       ...prevVotes,
  //       [presidentStdId]: (prevVotes[presidentStdId] || 0) + 1
  //     }));
  //     setVotedPresident(presidentStdId);
  //     // setVotedPresidents([...votedPresidents, presidentStdId]);
  //     setHasVoted(true);
  //   }
  // };

  const handleVote = async (PreId, UserId) => {
    if (votedPresident === null) {
      console.log("Clicked Vote for StdId:", PreId);
      console.log("User's Email:", UserId);

      try {
        // Send POST request to backend API
        await axios.post('http://localhost:8000/admin/api/voteart/register', {
          vote: '1',
          PreId,
          UserId
        });

        setVotes(prevVotes => ({
          ...prevVotes,
          [PreId]: (prevVotes[PreId] || 0) + 1
        }));
        setVotedPresident(PreId);
        setHasVoted(true);
        router.push("../profile")
      } catch (err) {
        console.log("Backend Error:", err.response.data.message);
        setBackendError(err.response.data.message)
      }
    }
  };
  // const handleVote = async (presidentStdId, userEmail) => {
  //   if (votedPresident === null) {
  //     console.log("Clicked Vote for StdId:", presidentStdId);
  //     console.log("User's Email:", userEmail);

  //     try {
  //       // Send POST request to backend API
  //       await axios.post('http://localhost:8000/admin/api/votesci/register', {
  //         vote: '1',
  //         presidentStdId,
  //         userEmail
  //       });

  //       setVotes(prevVotes => ({
  //         ...prevVotes,
  //         [presidentStdId]: (prevVotes[presidentStdId] || 0) + 1
  //       }));
  //       setVotedPresident(presidentStdId);
  //       setHasVoted(true);
  //     } catch (error) {
  //       console.error('Error saving vote:', error);
  //       setBackendError('Failed to save vote. Please try again.');
  //     }
  //   }
  // };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getDataPresident();
        console.log("Fetched data:", data);
        // setInitialValues(data);
        const scienceNominees = data.filter(item => item.society === "Art");
        setInitialValues(scienceNominees);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Nominies</Text>
      <Text style={styles.subtitle}>President Details</Text>

      <View style={styles.container}>
        {/* Table Header */}
        <View style={styles.tableRow}>
          <Text style={[styles.tableHeaderCell, { flex: 2 }]}>President</Text>
          <Text style={[styles.tableHeaderCell, { flex: 1 }]}>Society</Text>
          <Text style={[styles.tableHeaderCell, { flex: 2 }]}>StdId</Text>
          <Text style={[styles.tableHeaderCell, { flex: 1 }]}>Votes</Text>
          {/* New column for votes */}
        </View>

        {/* Table Body */}
        {initialValues.map((data, index) => (
          <View style={styles.tableRow} key={index}>
            <Text style={[styles.tableCell, { flex: 2 }]}>{data.president}</Text>
            <Text style={[styles.tableCell, { flex: 1 }]}>{data.society}</Text>
            <Text style={[styles.tableCell, { flex: 2 }]}>{data.StdId}</Text>
            <Text style={[styles.tableCell, { flex: 1 }]}>
              {votedPresident === data.StdId ? (
                <Text style={{ color: 'green' }}>{data.StdId}</Text>
              ) : (
                <TouchableOpacity
                  style={[
                    styles.voteButton,
                    hasVoted ? styles.disabledButton : null
                  ]}
                  onPress={() => handleVote(data.StdId, user.email)}
                  disabled={hasVoted}
                >
                  <Text style={styles.voteButtonText}>Vote</Text>
                </TouchableOpacity>)}

            </Text>
          </View>
        ))}

        {backendError ? (
          <Text style={styles.errorText}>{backendError}</Text>
        ) : null}
      </View>
    </View>
  );
};

export default ArtSocity;

const styles = StyleSheet.create({
  // container: {
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#ffffff",
    marginTop: 20,
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    paddingVertical: 10,
  },
  tableHeaderCell: {
    fontWeight: "bold",
    fontSize: 16,
    paddingHorizontal: 5,
  },
  tableCell: {
    fontSize: 16,
    paddingHorizontal: 5,
  },
  voteButton: {
    backgroundColor: "#007bff",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginLeft: 10,
  },
  voteButtonText: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "bold",
  },
  disabledButton: {
    backgroundColor: "gray",
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#666",
  },
  errorText: {
    color: "red",
    textAlign: 'center',
    marginBottom: 16,
    marginTop: 16,
  },
});