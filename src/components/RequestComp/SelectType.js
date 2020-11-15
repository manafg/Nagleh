import React, { Component } from "react";
import MapView from 'react-native-maps';
import styles from "./style";
import Color from "../../Config/Color";
import {
  View,
  StatusBar,
  Image,
  Text,
  TouchableOpacity,
  FlatList
} from "react-native";
import container from "../../Styles/Container/style";
import Back from "../../components/Back/index";
import RideType from "../RideType/index";

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
            Source:require("../../Image/small.png"),
            RideType:"Small",
            Price:" 0.5%",
            Distance:"Up To 500 KG",
            Time:"Fare Rate",
            Type: 'S'
        },
        {
            Source:require("../../Image/truck.png"),
            RideType:"Medium",
            Price:" 1%",
            Distance:"Up to 800 KG",
            Time:"Fare Rate",
            Type: 'M'
        },
        {
            Source:require("../../Image/large.png"),
            RideType:"Large Truck",
            Price:" 1.5 %",
            Distance:"Up To 1000 KG",
            Time:"Fare Rate",
            Type: 'L'
        },
      ]
    };
  }
  _keyExtractor = (item, index) => item.RideType;
  _renderItem = ({ item }) => (
   
      <RideType
        onPress={()=>this.props.selectTruckType(item)}
        Source={item.Source}
        RideType={item.RideType}
        Price={item.Price}
        Distance={item.Distance}
        Time={item.Time}
      />
   
  );
  render() {
    return (
        <View style={styles.container}>
          <View style={styles.subContainerView}>
            <View style={{ margin: 15 }}>
              <TouchableOpacity>
                <Image
                  source={require("../../Image/up.png")}
                  style={styles.image}
                />
              </TouchableOpacity>

            <FlatList
              data={this.state.data}
              horizontal={false}
              keyExtractor={this._keyExtractor}
              renderItem={this._renderItem}
            />
            </View>
          </View>
        </View>
    );
  }
}
