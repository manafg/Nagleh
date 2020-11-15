import React from 'react';
import SecondStepStyle from './SecondStepStyle'
import {
    Text,
    View,
    TouchableOpacity,
  } from "react-native";
import IconText from "../../../components/Icon2Text/index";
import NearBy from "../../../components/IconText/index";

import Color from "../../../Config/Color";

const SecondStep = () => {
    return (
        <View style={SecondStepStyle.container}>
            <View style={SecondStepStyle.subContainerView}>
              <View style={{ margin: 15 }}>
                <IconText
                  Title="PICKUP"
                  textInputText="My current location"
                  source={require("../../../Image/picupicon.png")}
                  viewText={{
                    borderBottom: Color.frost,
                    borderBottomWidth: 0.3
                  }}
                  addressText={{ marginBottom: 10 }}
                />

                <IconText
                  Title="DESTINATION"
                  textInputText="1003, Abhishree Adroit, India"
                  source={require("../../../Image/destination-icon.png")}
                  source2={require("../../../Image/cancel-icon.png")}
                />
              </View>
              <View
                style={{
                  shadowOffset: { width: 10, height: 10 },
                  shadowColor: Color.gray,
                 // shadowOpacity: 0.3,
                  elevation: 1,
                  borderTopColor: Color.steel,
                  borderTopWidth: 0.3
                }}
              >
                <View style={{ margin: 15 }}>
                  <Text style={{ color: Color.steel, fontSize: 14 }}>
                    NEARBY LOCATIONS
                  </Text>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate("HomeLetsGo")}
                  >
                    <NearBy
                      Address="Mansi Circle,Vastrapur"
                      source={require("../../../Image/destination-icon.png")}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate("HomeLetsGo")}
                  >
                    <NearBy
                      Address="Premvat Food Park"
                      source={require("../../../Image/destination-icon.png")}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate("HomeLetsGo")}
                  >
                    <NearBy
                      Address="Vastrapur Park"
                      source={require("../../../Image/destination-icon.png")}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate("HomeLetsGo")}
                  >
                    <NearBy
                      Address="Vastrapur Lack"
                      source={require("../../../Image/destination-icon.png")}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate("HomeLetsGo")}
                  >
                    <NearBy
                      Address="Punjab Parotha House"
                      source={require("../../../Image/destination-icon.png")}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
    )
}

export default SecondStep;