import React from 'react';
import { render } from 'react-dom';
import {
    Image,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    StatusBar,
    Dimensions,
    Platform
  } from "react-native";
import SelectDestinationStyle from './SelectDestinationStyle'
import IconText from "../../components/Icon2Text/index";
import Icons from "react-native-vector-icons/MaterialCommunityIcons";
import Color from "../../Config/Color";


const SelectDestination = (props) => {
    return(
        <View style={SelectDestinationStyle.container}>
        <View style={SelectDestinationStyle.subContainerView}>
          <View style={{ margin: 30 }}>
            <TouchableOpacity
              onPress={() => props.searchLocation("From")}
            >
              <IconText
                Title="PICKUP"
                Address={props.location?.whereText}
                source={require("../../Image/picupicon.png")}
                viewText={{
                  borderBottom: Color.frost,
                  borderBottomWidth: 0.2
                }}
                addressText={{ marginBottom: 10 }}
              />
            </TouchableOpacity>
            <TouchableOpacity
               onPress={() => props.searchLocation("To")}
            >
            <IconText
              Title="DESTINATION"
              Address={props.location?.droptext}
              source={require("../../Image/destination-icon.png")}
            />
             </TouchableOpacity>
          </View>
        </View>
      </View>
    )
}

export default SelectDestination;