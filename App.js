import React,{Component} from 'react';
import { StyleSheet, Text, View,StatusBar} from 'react-native';
import Weather from "./weather";

const API_KEY="de892361d6cf402ea35640c5df8fbfd2";

export default class App extends Component {

  state = {
    isLoaded: false,
    error:null,
    temperature:null,
    name:null,
    dong:null,
    country:null
  };
  componentDidMount(){
    navigator.geolocation.getCurrentPosition(
      position => {
        this._getWeather(position.coords.latitude,position.coords.longitude);
        },
        error => {
          this.setState({
              error:error
          });
        }
        );
  }

  _getWeather= (lat,long) =>{

    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=${API_KEY}&lang=Kr`)
    .then(response => response.json())
    .then(json =>{
      this.setState({
        temperature:json.main.temp,
        name:json.weather[0].main,
        dong:json.name,
        country:json.sys.country,
        isLoaded:true,
      })
    });
  }

  render() {

    const { isLoaded,error,temperature,name,dong,country} = this.state;//false

    return (
      <View style={styles.container}>
      <StatusBar hidden={true} />
      { isLoaded ? 
        (<Weather weatherName={name} temp={Math.ceil(temperature - 273.15)} dong={dong} country={country} />): 
      (
          <View style={styles.loading}>
          <Text style={styles.loadingText}>날씨를 불러오는중...</Text>
          {error ? <Text style={styles.errorText}>{error}</Text> :  null}
        </View>
      )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  errorText:{
    color:"red",
    backgroundColor:"transparent",
    marginBottom:40
  },
  loading: {
    flex:1,
    backgroundColor: "#FDF6AA",
    justifyContent: "flex-end",
    paddingLeft: 25
  },
  loadingText:{
    color:"white",
   fontSize:38,
   marginBottom:30,
  }
});
