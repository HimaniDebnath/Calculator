import { StyleSheet, Text, View, Switch, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false); // Fixed capitalization
  const [result, setResult] = useState('calculator');

  const colours = {
    dark: '#22252D',
    dark1: '#D3D3D3',
    dark2: '#272B33',
    light: '#FFF',
    light1: '#F5F5F5',
    light2: '#F7F7F7',
  };

  const getColor = (dark: string, light: string): string => (darkTheme ? dark : light);

  const Calculate =(title: string) => {
    if(title=='C') {
      setResult('');
    }
    else if( title=='DL'){
      setResult(result.substring(0,result.length-1));
    }
    else if (title=='='){
      const ans = Number(eval(result).toFixed(3)).toString()
      setResult(ans);
    }
    else{
      setResult(result+title);
    }
  }
  
  const Btn = ({ title,type }: { title: string,type:string }) => (
    <TouchableOpacity
    onPress={() => Calculate(title)}
    style={{padding:10, borderRadius:20, elevation:2, 
      backgroundColor: getColor(colours.dark1,colours.light1), height:60,width:60,margin:10
    }}>
          <Text style={{
            fontSize:34,
            textAlign:'center', 
            textAlignVertical:'center',
            color:getBtnColor(type)
            }}>{title}</Text>
        </TouchableOpacity>

  )
  const getBtnColor = (type: string) => {
    switch (type) {
      case 'top':
        return '#FF5733'; // Example color for 'top' buttons
      case 'right':
        return '#06402B'; // Example color for 'right' buttons
      case 'number':
        return '#337AFF'; // Example color for 'number' buttons
      default:
        return '#000000'; // Default color for any other type
    }
  };

  return (
    <View
      style={{
        height: '100%',
        width: '100%',
        paddingVertical: 20,
        backgroundColor: getColor(colours.dark, colours.light),
        alignItems: 'center',
         
      }}
    >
      <Switch
        value={darkTheme}
        onValueChange={() => setDarkTheme(!darkTheme)}
        thumbColor={getColor('#FFF', '#000')}
        trackColor={{ true: colours.light2, false: colours.dark2 }}
      />
      <Text
        style={{
          fontSize: 40,
          color: getColor(colours.light, colours.dark),
          marginTop: 150,
          
          paddingBottom:20,// Added for spacing,
          textAlign:'right',
          width:'100%', 
          paddingRight:20
          
        }}
      >
        {result}
      </Text>
      <View style={{flexDirection:'row', flexWrap:'wrap',justifyContent:'center',
        backgroundColor:getColor(colours.dark2,colours.dark1),
        borderTopLeftRadius:20,borderTopRightRadius:20
      }}>

        
        <Btn title="C" type="top"/>
        <Btn title="DL"type="top"/>
        <Btn title="/" type="top"/>
        <Btn title="%" type="top"/>
        <Btn title="7" type="number"/>
        <Btn title="8" type="number"/>
        <Btn title="9" type="number"/>
        <Btn title="*" type="right"/>
        <Btn title="4" type="number"/>
        <Btn title="5" type="number"/>
        <Btn title="6" type="number"/>
        <Btn title="-" type="right"/>
        <Btn title="1" type="number"/>
        <Btn title="2" type="number"/>
        <Btn title="3" type="number"/>
        <Btn title="+" type="right"/>
        <Btn title="00"type="number"/>
        <Btn title="0" type="number"/>
        <Btn title="." type="number"/>
        <Btn title="=" type="right"/>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
