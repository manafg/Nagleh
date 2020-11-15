import React, { Component } from "react";
import styles from "./style";
import Color from "../../Config/Color";
import { View, StatusBar, Image, Text, TouchableOpacity } from "react-native";
import container from "../../Styles/Container/style";
import Back from "../../components/Back/index";
import Button from "../../components/Button/index";
import SelectDestinationStyle from './SelectDestinationStyle'
import RideType from "../../components/RideType/index";
import LottieView from 'lottie-react-native';


const FindingTruck = (props) => {
    debugger
    return (
        <View style={styles.container}>
          <View style={styles.subContainerView}>
            <View style={{ margin: 15 }}>
                <LottieView style={{justifyContent:'center', marginLeft:33,marginRight:0,height:200, width:200}} source={require('../../Image/Loading.json')} autoPlay loop />
            </View>
            <Text style={{fontSize:24, textAlign:'center' , justifyContent:'center'}}>  Looking For Truck </Text>
          </View>
        </View>
    )
}

export default FindingTruck;