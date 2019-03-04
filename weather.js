import React,{Component} from "react";
import { StyleSheet, View, Text} from "react-native";
import {LinearGradient} from "expo";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PropTypes from "prop-types";

/* export default class Weather extends Component{

    render(){
       return( <LinearGradient 
        colors={["#00C6FB","#005BEA"]} 
        style={styles.container}>
        <View style={styles.upper}>
            <Ionicons color="white" size={144} name="ios-rainy"/>
            <Text style={styles.temp}>35º</Text>
        </View>
        <View style={styles.lower}>
            <Text style={styles.title}>Raining like a MF</Text>
            <Text style={styles.subtitle}>For more info look outside</Text>
        </View>
        </LinearGradient>
        );
    }
} */

const weatherCases = {
    Rain:{
        colors:['#00C6FB', "#005BEA"],
        title:"비가 온다.",
        subtitle:"더 자세한 날씨는 창 밖을 봐라.",
        icon:"weather-rainy"
    },
    Clear:{
        colors:['#FEF253', "#FF7300"],
        title:"날씨가 맑다.",
        subtitle:"지금이 나가야 놀 수있다.",
        icon:"weather-sunny"
    },
    Thunderstorm:{
        colors:["#00ECBC", "#007ADF"],
        title:"천둥이 친다.",
        subtitle:"지금이 나가면 벼락 맞을 확률이 높다.",
        icon:"weather-lightning"
    },
    Clouds:{
        colors:["#D7D2CC", "#304352"],
        title:"구름이 많다.",
        subtitle:"하늘을 보고 구름을 세어보자.",
        icon:"weather-cloudy"
    },
    Snow:{
        colors:["#7DE2FC", "#B9B6E5"],
        title:"눈이 내린다.",
        subtitle:"눈을 맞아보자.아픈지 테스트해봐.",
        icon:"weather-snowy"
    },
    Drizzle:{
        colors:["#89F7FE", "#66A6FF"],
        title:"이슬비가 내린다.",
        subtitle:"우산을 챙길까? 말까? 챙겨라.",
        icon:"weather-hail"
    },
    Haze:{
        colors:["#d9dde0", "#dae3ed"],
        title:"안개가 많다.",
        subtitle:"앞에 뭐가 보이는지 보이니?",
        icon:"weather-fog"
    }
  }

function Weather({weatherName,temp,dong,country}) { //stateless
return(
    <LinearGradient     
    colors={weatherCases[weatherName].colors} 
    style={styles.container}>
    <View style={styles.upper}>
        <MaterialCommunityIcons color="white" size={144} name={weatherCases[weatherName].icon}/>
        <Text style={styles.temp}>{temp}º</Text>
    </View>
    <View style={styles.center}>
          <Text style={styles.loc}>{dong}, {country}</Text>
    </View>
    <View style={styles.lower}>
        <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
        <Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
    </View>
    </LinearGradient>
    ); 
}
Weather.propTypes = {
    temp:PropTypes.number.isRequired,
    weatherName:PropTypes.string.isRequired,
    dong:PropTypes.string.isRequired,
    country:PropTypes.string.isRequired
  };

export default Weather;

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    upper:{
        flex:6,
        alignItems:"center",
        justifyContent:"center"
    },
    temp:{
        fontSize:48,
        backgroundColor:"transparent",
        color:"white",
        marginTop:10
    },
    center:{
        flex:3,
        alignItems:"center"
    },
    loc:{
        fontSize:25,
        backgroundColor:"transparent",
        color:"white",
    },
    lower:{
        flex:1,
        alignItems:"flex-start",
        backgroundColor: "transparent",
        justifyContent:"flex-end",
        paddingLeft:25
    },
    title: {
    fontSize:38,
       backgroundColor: "transparent",
       color:"white",    
       marginBottom:10,
       fontWeight: "300" 
    },
    subtitle:{
        fontSize:24,
       backgroundColor: "transparent",
       color:"white",
       marginBottom:50 
    }
});