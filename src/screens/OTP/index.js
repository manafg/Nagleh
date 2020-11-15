import React, { Component } from "react";
import {
  Text,
  View,
  ImageBackground,
  Image,
  Dimensions,
  TouchableOpacity
} from "react-native";
import container from "../../Styles/Container/style";
import CodeInput from "react-native-confirmation-code-input";
let width = Dimensions.get("window").width;
let height = Dimensions.get("window").height;
import Color from "../../Config/Color";
import Icon from "react-native-vector-icons/Ionicons";
import Button from "../../components/Button/index";
import {connect} from "react-redux";
import {requestOTP} from '../../actions/OTP/OTPActions';
import { AsyncStorage } from 'react-native';
import Client from '../../client/client'
import NaglehModal from '../../components/Model'

class index extends Component {

  constructor(props) {
    super(props);
    this.state = {
      typeOfErr:'',
      message: '',
      mobile : '',
      fromToggle:1,
    }
  }

  _onFulfill(code) {
    const { navigation } = this.props;
    let obj = {
      "phone": navigation.getParam('mobile'),
      "code": code
    }
    this.props.verfiy(obj)
  }

  _storeData  = async (data) => {
    try {
      await AsyncStorage.setItem(
        '@Token',
        data.success.data.token
      );
    } catch (error) {
      // Error saving data
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) { 
    if(nextProps.err && !nextProps.success?.status) {
      return {showModal: prevState.showModal !=  prevState.fromToggle ? true : false , typeOfErr : 'Error' , message: nextProps.err }
    }
    if(nextProps.success?.status == '200') {
      Client.defaults.headers['Authorization'] = `Bearer ${nextProps.success.data.token}`
      nextProps.navigation.navigate("Home") //, 
    }
  }

  toggleView() {
    this.setState({fromToggle: true })
  }

  render() {
    return (
      <View style={[container.container]}>
        <NaglehModal toggleView={()=>this.toggleView()} isVisible ={this.state.showModal} header={this.state.typeOfErr} body={this.state.message} />
        <View style={{ flex: 1 }}>
          <View
            style={{
              width: width,
              height: height / 3.5,
              backgroundColor: Color.black
            }}
          >
            <ImageBackground
              source={require("../../Image/city-building.png")}
              style={{ flex: 1 }}
            >
              <View
                style={{
                  marginHorizontal: 15,
                  marginTop: 40,
                  marginBottom: 20
                }}
              >
                <TouchableOpacity
                  onPress={() => { this.props.navigation.goBack()}}
                >
                  <Icon
                    name="ios-arrow-back"
                    size={30}
                    style={[
                      {
                        alignSelf: "flex-start",
                        color: "#fff"
                        //marginTop:40
                      },
                      this.props.iconStyle
                    ]}
                  />
                </TouchableOpacity>
                <Text
                  style={{
                    fontSize: 28,
                    fontFamily: "uber-b",
                    color: Color.white,
                    marginVertical: 10
                  }}
                >
                  Mobile Verification
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: "uber-l",
                    color: Color.whiteSmoke,
                    marginVertical: 10
                  }}
                >
                  Enter your OTP code
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View
            style={{
              marginHorizontal: 20,
              //flex: 1,
              //justifyContent: "flex-end",
              //alignItems: "center",
              //marginVertical: 50
            }}
          >
            <View
              style={{
                alignItems: "center",
                marginVertical: 50,
                justifyContent: "center",
               //  flex: 0.5
              }}
            >
              <CodeInput
                ref="codeInputRef1"
                className={"border-b"}
                keyboardType="number-pad"
                space={20}
                size={50}
                cellBorderWidth={5}
                codeLength={4}
                codeInputStyle={{
                  fontFamily: "uber-b",
                  fontSize: 28
                }}
                inputPosition="left"
                activeColor="black"
                inactiveColor="#A0A0A0"
                onFulfill={(code) => this._onFulfill(code)}
              />
            </View>
            <View style={{marginHorizontal:38,marginVertical:75}}>
              <Button
                onPress={() => this.props.navigation.navigate("Home")}
                Text="Verify"
                viewStyle={{ backgroundColor: Color.black,}}
              />
              </View>
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToActions = {
  verfiy: requestOTP,
} 

const mapStateToProps = state => ({
  err: state.OTPReducer.error,
  success:state.OTPReducer.token,
});

export default connect(mapStateToProps ,mapStateToActions)(index)
