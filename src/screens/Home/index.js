import React, { Component } from "react";
import MapView, { PROVIDER_GOOGLE, Marker, AnimatedRegion } from 'react-native-maps';
import styles from "./style";
import Color from "../../Config/Color";
import MapViewDirections from 'react-native-maps-directions';
import io from 'socket.io-client';
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
import SelectDestination from '../../components/RequestComp/SelectDestination'
import SelectType from '../../components/RequestComp/SelectType';
import ConfiremRequest from '../../components/RequestComp/ConfiremRequest/ConfiremRequest';
import FareScreen from '../../components/RequestComp/FareScreen';
import FindingTruck from '../../components/RequestComp/LookingForTruck'
import {connect} from "react-redux";
import {requestUpdateStep , requestSelectType , requestFare , requestTrip} from '../../actions/Home/HomeActions'

var { height, width } = Dimensions.get('window');

const SOCKET_URL = 'https://nagleh.com/';



 class index extends Component {
  constructor (props) {
    super(props);
    this.socket = io(SOCKET_URL, {
      path: '/socket.io',
      pingTimeout: 6000000,
      pingInterval: 30000
  });
    this.searchLocation = this.searchLocation.bind(this);
    this.region = {
      latitude: 31.963158,
      longitude: 35.930359,
      latitudeDelta: 0.09922,
      longitudeDelta: 0.09921,
  }
  this.selectTruckType = this.selectTruckType.bind(this);
  this.getFare = this.getFare.bind(this);
  this.requestTuck = this.requestTuck.bind(this);
  }
  
  componentDidMount() {

  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if(nextProps.wherelatitude && nextProps.droplongitude) {
      if(!nextProps.step) nextProps.updateStep(1)
    }
    
  }


componentDidUpdate(){
  if(this.props.requestId) {
    debugger
    this.socket.emit('join', this.props.fare.userId);
    this.socket.on('show_notification', (val) => {
      debugger
   });
  }
  }
componentWillUnmount() {
    this.socket.disconnect()
}

join() {
  this.socket.emit('join', this.props.fare.userId)
}
listen() {
    let self = this;
   
}

  getFare() {
    this.props.requestFare(this.props)
  }

  selectTruckType(Type) {
    this.props.requestSelectType(Type)
  }

  searchLocation (pageName) {
   this.props.navigation.navigate('SearchScreen', {pageName:pageName});
  }

  requestTuck() {
    let truckObj = {
      "size": this.props.truck.Type,
      "current": this.props.fare.current,
      "destination": this.props.fare.destination,
      "userId": this.props.fare.userId,
      "price": JSON.stringify(this.props.fare.price),
      "time": this.props.fare.time
  }
    this.props.requestTrip(truckObj)
  }

  renderTripComp () {
    debugger
    switch(this.props.step) {
      case 1:
        return <SelectType  selectTruckType={this.selectTruckType}/>
      case 2:
        return <ConfiremRequest getFare = {this.getFare} tripInfo = {this.props}/>
      case 3:
        return <FareScreen requestTrip= {this.requestTuck} fareData = {this.props.fare}/>
      case 4 :
        return <FindingTruck />
      default:
       return <SelectDestination location = {this.props} searchLocation={this.searchLocation} />
    }
  }

  render() {
    let location = {
      latitude: this.props.wherelatitude,
      longitude: this.props.wherelongitude,
      latitudeDelta: 0.09922,
      longitudeDelta: 0.09921,
  }
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
             provider={PROVIDER_GOOGLE}
             showsUserLocation={true}
             followUserLocation
             loadingEnabled
             ref={ref => {
              this.mapRef = ref;
            }}
             showsMyLocationButton={true}
             region={this.props.wherelatitude ? location : this.region}
             style={{  flex: 6,
              width: width,
              justifyContent: 'center',
              alignItems: 'center',}}
          > 
          
          {this.props.wherelatitude ? 
                <Marker
                    ref={marker => {
                      this.marker = marker;
                    }}
                    coordinate={{latitude: this.props.wherelatitude, longitude: this.props.wherelongitude}}
                    image={require('../../Image/picupicon.png')}
                    style={{width:400, height:400}}
                />
                :null
                }
                {this.props.droplatitude ? 
                <Marker
                    ref={marker => {
                      this.marker = marker;
                    }}
                    coordinate={{latitude: this.props.droplatitude, longitude: this.props.droplongitude}}
                    image={require('../../Image/destination-icon.png')}
                    style={{width:400 , height:400}}
                />
                : null
                }
                { (this.props?.whereText && this.props?.droptext) &&
                  <MapViewDirections
                      origin={{latitude: this.props.wherelatitude , longitude: this.props.wherelongitude}}
                      destination={{latitude: this.props.droplatitude, longitude: this.props.droplongitude}}
                      apikey={'AIzaSyDqnzeDBnNoa_5yDnZj5doqjnoim2YkLKE'}
                />
                }
          
          </MapView>
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
         {this.renderTripComp()}
        </View>
      </Drawer>
    );
  }
}
 //Drawer.defaultProps.styles.mainOverlay.elevation = 0;

const mapStateToActions = {
  updateStep: requestUpdateStep,
  requestSelectType: requestSelectType,
  requestFare: requestFare,
  requestTrip:requestTrip
} 

const mapStateToProps = state => ({
  droplatitude: state.homeReducer.droplatitude,
  droplongitude: state.homeReducer.droplongitude,
  droptext: state.homeReducer.droptext,
  whereText: state.homeReducer.whereText,
  wherelatitude: state.homeReducer.wherelatitude,
  wherelongitude: state.homeReducer.wherelongitude,
  step:state.homeReducer.step,
  truckType: state.homeReducer.truckType,
  truck:state.homeReducer.truck,
  fare: state.homeReducer.fare,
  requestId : state.homeReducer.requestId
});

export default connect(mapStateToProps ,mapStateToActions)(index)
