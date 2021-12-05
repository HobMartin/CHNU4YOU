import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { scheduleData } from "../../api/subjectList";
import { SubjectList } from "../SubjectsList";

export const SheduleList = ({ navigation }: any) => {
  const renderSubjectItem = ({ item }: any) => {
    return (
      <View>
        <SubjectList
          items={item.data}
          title={{ text: item.title, date: item.date }}
          navigation={navigation}
          scrollEnabled={false}
        />
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={scheduleData}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderSubjectItem}
        scrollEnabled={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
