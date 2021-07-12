import React, { useState } from 'react';
import { StyleSheet, View, Button, Platform, Text } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function App() {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [text, setText] = useState('Empty')

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);

    // Process the date values
    let tempDate = new Date(currentDate);
    let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
    let fTime = 'Hours: ' + tempDate.getHours() + ' | Minutes: ' + tempDate.getMinutes()
    setText(fDate)

    // Log the Time & Date values
    console.log(fTime)
    console.log(tempDate)
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{text}</Text>
      <View style={{ margin: 20 }}>
        <Button onPress={() => showMode('date')} title="DatePicker" />
      </View>
      <View style={{ margin: 20 }}>
        <Button onPress={() => showMode('time')} title="TimePicker" />
      </View>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange} 
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});