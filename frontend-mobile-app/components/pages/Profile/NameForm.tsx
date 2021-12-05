import { Formik } from "formik";
import React from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";

export const NameForm = ({ user, onSubmit, isEdit, fieldChanged }: any) => {
  return (
    <View>
      <Formik
        initialValues={{
          firstName: user.firstName,
          lastName: user.lastName,
          patronymic: user.patronymic,
        }}
        onSubmit={(values, action) => {
          onSubmit && onSubmit(values);
        }}
      >
        {(props) => (
          <View>
            <View style={styles.field}>
              <Text style={styles.fieldName}>Призвіще</Text>
              {isEdit ? (
                <TextInput
                  style={styles.input}
                  value={props.values.lastName}
                  placeholder="Введіть ваше призвіще..."
                  onChangeText={props.handleChange("lastName")}
                />
              ) : (
                <Text style={styles.fieldValue}>{user.lastName}</Text>
              )}
              <Text style={{ flex: 1 }}></Text>
            </View>
            <View style={styles.field}>
              <Text style={styles.fieldName}>Ім'я</Text>
              {isEdit ? (
                <TextInput
                  style={styles.input}
                  value={props.values.firstName}
                  placeholder="Введіть ваше ім'я..."
                  onChangeText={props.handleChange("firstName")}
                />
              ) : (
                <Text style={styles.fieldValue}>{user.firstName}</Text>
              )}
              <Text style={{ flex: 1 }}></Text>
            </View>
            <View style={styles.field}>
              <Text style={styles.fieldName}>По батькові</Text>
              {isEdit ? (
                <TextInput
                  style={styles.input}
                  value={props.values.patronymic}
                  placeholder="Введіть ваше по-батькові..."
                  onChangeText={props.handleChange("patronymic")}
                />
              ) : (
                <Text style={[styles.fieldValue]}>{user.patronymic}</Text>
              )}
              <Text style={{ flex: 1 }}></Text>
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};

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
});
