import { Formik } from "formik";
import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const RegisterForm = ({ onSubmit }: any) => {
  return (
    <View>
      <Formik
        initialValues={{
          email: "",
          password: "",
          repeatPassword: "",
          firstName: "",
          lastName: "",
          patronymic: "",
          group: "",
        }}
        onSubmit={(values, action) => {
          onSubmit && onSubmit(values);
          action.resetForm();
        }}
      >
        {(props) => (
          <View>
            <Text style={styles.sectionName}>Основна інформація</Text>
            <View style={styles.field}>
              <Text style={styles.fieldName}>Email</Text>
              <TextInput
                style={styles.input}
                value={props.values.email}
                placeholder="Введіть ваше email..."
                onChangeText={props.handleChange("email")}
              />
              <Text style={{ flex: 1 }}></Text>
            </View>
            <View style={styles.field}>
              <Text style={styles.fieldName}>Призвіще</Text>
              <TextInput
                style={styles.input}
                value={props.values.lastName}
                placeholder="Введіть ваше призвіще..."
                onChangeText={props.handleChange("lastName")}
              />
              <Text style={{ flex: 1 }}></Text>
            </View>
            <View style={styles.field}>
              <Text style={styles.fieldName}>Ім'я</Text>
              <TextInput
                style={styles.input}
                value={props.values.firstName}
                placeholder="Введіть ваше ім'я..."
                onChangeText={props.handleChange("firstName")}
              />
              <Text style={{ flex: 1 }}></Text>
            </View>
            <View style={styles.field}>
              <Text style={styles.fieldName}>По батькові</Text>
              <TextInput
                style={styles.input}
                value={props.values.patronymic}
                placeholder="Введіть ваше по-батькові..."
                onChangeText={props.handleChange("patronymic")}
              />
              <Text style={{ flex: 1 }}></Text>
            </View>
            <Text style={styles.sectionName}>Захист</Text>
            <View style={styles.field}>
              <Text style={styles.fieldName}>Пароль</Text>
              <TextInput
                style={styles.input}
                value={props.values.password}
                secureTextEntry={true}
                placeholder="Введіть ваш пароль..."
                onChangeText={props.handleChange("password")}
              />
              <Text style={{ flex: 1 }}></Text>
            </View>
            <View style={styles.field}>
              <Text style={styles.fieldName}>Повторіть ваш пароль</Text>
              <TextInput
                style={styles.input}
                value={props.values.repeatPassword}
                secureTextEntry={true}
                placeholder="Повторіть пароль..."
                onChangeText={props.handleChange("repeatPassword")}
              />
              <Text style={{ flex: 1 }}></Text>
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default RegisterForm;

const styles = StyleSheet.create({
  input: {
    borderColor: "rgba(0,0,0,0.5)",
    borderWidth: 1,
    borderRadius: 10,
    height: 50,
    width: 220,
    marginLeft: 10,
    marginRight: 50,
    fontSize: 16,
    paddingLeft: 10,
  },
  field: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
    borderColor: "#c5c9cc",
    borderWidth: 1,
    height: 60,
  },
  fieldName: {
    marginLeft: 10,
    width: 120,
    fontSize: 16,
    fontWeight: "bold",
  },
  fieldValue: {
    marginLeft: 20,
    fontSize: 16,
  },
  emptyText: {
    flex: 1,
  },
  sectionName: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 10,
    marginBottom: 0,
  },
});
