import React, { Component } from "react";
import MapView from 'react-native-maps';
import styles from "./style";
import Color from "../../Config/Color";
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
import { Drawer, Icon, Col } from "native-base";
// import SideBar from "../../Screen/SideMenu/index";
import Container from "../../Styles/Container/style";
import IconText from "../../components/Icon2Text/index";
import Icons from "react-native-vector-icons/MaterialCommunityIcons";
export default class index extends Component {
  render() {
    return (
      <Drawer
        ref={ref => {
          this.drawer = ref;
        }}
        //content={<SideBar navigation={this.props.navigation} />}
        onClose={() => this.drawer._root.close()}
      >
        <View style={Container.container}>
          <StatusBar barStyle="dark-content" />
          <MapView
            style={{ flex: 1 }}
            initialRegion={{
              latitude: 23.032068,
              longitude: 72.525192,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421
            }}
          />
          <View
            style={{
              marginTop: 40,
              position: "absolute",
              flex: 1,
              marginLeft: 15,
              ...Platform.select({
                  ios: {
                   zIndex:9
                  }
                })
            }}
          >
            <TouchableOpacity
              style={{
                position: "absolute",
              }}
              onPress={() => this.drawer._root.open()}
            >
              <Image
                source={require("../../Image/menu.png")}
                style={{
                  width: 55,
                  height: 55
                }}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.container}>
            <View style={styles.subContainerView}>
              <View style={{ margin: 30 }}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("HomeUp")}
                >
                  <IconText
                    Title="PICKUP"
                    Address="My current location"
                    source={require("../../Image/picupicon.png")}
                    viewText={{
                      borderBottom: Color.frost,
                      borderBottomWidth: 0.2
                    }}
                    addressText={{ marginBottom: 10 }}
                  />
                </TouchableOpacity>
                <IconText
                  Title="DESTINATION"
                  Address="1003, Abhishree Adroit, India"
                  source={require("../../Image/destination-icon.png")}
                />
              </View>
            </View>
          </View>
        </View>
      </Drawer>
    );
  }
}
Drawer.defaultProps.styles.mainOverlay.elevation = 0;
