import React, { Component } from "react";
import styles from "./style";
import Color from "../../Config/Color";
import { View, StatusBar, Image, Text, TouchableOpacity } from "react-native";
import container from "../../Styles/Container/style";
import Back from "../../components/Back/index";
import Button from "../../components/Button/index";
import SelectDestinationStyle from './SelectDestinationStyle'
import RideType from "../../components/RideType/index";

const FareScreen = (props) => {
   let size = props.fareData.size == 'S' ? 'Small Truck' : 'Medium Truck' ;
    return (
        <View style={styles.container}>
          <View style={styles.subContainerView}>
            <View style={{ margin: 15 }}>
              <RideType
                Source={require("../../Image/delivery-truck.png")}
                RideType={size}
                Price={`${Math.round(props.fareData.price)} JD`}
                Distance="Truck Type"
                priceText={{ color: Color.pink }}
                Time="Price"
              />
              <View style={styles.view}>
                <View style={styles.optionView}>
                  <View>
                    <Image
                      source={require("../../Image/distance.png")}
                      style={styles.image}
                    />
                    <Text style={styles.text}>{props.fareData.distanceValue / 1000} KM</Text>
                  </View>
                </View>
                <View style={styles.optionView}>
                  <View>
                    <Image
                      source={require("../../Image/stopwatch.png")}
                      style={styles.image}
                    />
                    <Text style={styles.text}>{props.fareData.time}</Text>
                  </View>
                </View>
               
                <View style={styles.optionView}>
                  <TouchableOpacity
                   onPress={() => this.props.navigation.navigate("RideReqCancel")}
                  >
                    <Image
                      source={require("../../Image/cancel.png")}
                      style={styles.image}
                    />
                    <Text style={styles.text}>Cancel</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <Button
              Text="Booking Request"
              onPress={props.requestTrip}
            />
          </View>
        </View>
    )
}

export default FareScreen;