import { createUserWithEmailAndPassword } from "@firebase/auth";
import React, { useState } from "react";
import { KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";
import { auth } from "../../../firebase";
import MainHeader from "../../features/Header";
import { ImagePickerComponent } from "../../features/ImagePicker";
import RegisterForm from "./RegisterForm";

export default function Register({ navigation }: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSignUp = async () => {
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user.email);
      })
      .catch((err) => alert(err.message));
  };
  return (
    <KeyboardAvoidingView>
      <MainHeader title="Реєстрація" type="small" />
      <RegisterForm />
      <ImagePickerComponent />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({});
