import React, { Component } from "react";
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
  StatusBar
} from "react-native";
import container from "../../Styles/Container/style";
let width = Dimensions.get("window").width;
let height = Dimensions.get("window").height;
import NaglehModal from '../../components/Model'
import { Tab, Tabs } from "native-base";
import Tab1 from "./SignUp";
import Tab2 from "./SignIn";
import Color from "../../Config/Color";
import style from './style';
import {connect} from "react-redux";
import {requestRegister} from '../../actions/Reg/registerAction';
import {requestLogin} from '../../actions/Login/LoginActions';

 class Registration extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal:false,
      typeOfErr:'',
      message: '',
      fromToggle: 1,
      mobile : '',
      tabActive: ''
    };
  }

  clickRegister(email, phone) {
    let obj = {
      "phone":'+962'+phone,
      "email":email
    }
    
    this.state.mobile = '+962'+phone;
    this.state.tabActive =  'signUp';

    this.props.register(obj);
  }

  

  static getDerivedStateFromProps(nextProps, prevState) {
    if(nextProps.loginSucess?.status == '200' || nextProps.success?.status == "200") {
      nextProps.navigation.navigate("OTP", { mobile: prevState.mobile }) //, 
      return;
    }

    if(nextProps.loginErr && nextProps.loginSucess?.status != "200" && prevState.tabActive == 'signIn') {
      return {showModal: prevState.showModal !=  prevState.fromToggle ? true : false , typeOfErr : 'Error' , message: nextProps.loginErr }
    }

    if( nextProps.err && nextProps.success?.status != "200" && prevState.tabActive == 'signUp') {
      return {showModal: prevState.showModal !=  prevState.fromToggle ? true : false , typeOfErr : 'Error' , message: nextProps.err}
    } 

    
  }

  signIn(mobile) {
    let obj = {
      "phone": mobile
    }
    this.state.mobile = mobile;
    this.state.tabActive =  'signIn';
    this.props.login(obj)
  }

  toggleView() {
    this.setState({fromToggle: true})
  }
  
  render() {
    return (
      <View style={[container.container]}>
        <StatusBar
            barStyle="light-content"
          />
        <View style={{ flex: 1 }}>
          <View style={{ width: width, height: height / 2.2 }}>
            <ImageBackground
              source={require("../../Image/halfbg.png")}
              style={{ flex: 1, justifyContent: "center" }}
            >
           
              <Image
                source={require("../../Image/u-icon.png")}
                style={{
                  width: 70,
                  height: 70,
                  alignSelf: "center",
                  resizeMode: "contain"
                }}
              />
              <Image
                source={require("../../Image/logo.png")}
                style={{
                  height: 25,
                  width: 200,
                  alignSelf: "center",
                  resizeMode: "contain",
                  margin: 10
                }}
              />
            </ImageBackground>
          </View>
          <View
            style={{
              marginHorizontal: 20,
              flex: 1,
              justifyContent: "flex-end",
              alignItems: "center",
              margin: 10
            }}
          >
          <NaglehModal toggleView={()=>this.toggleView()} isVisible ={this.state.showModal} header={this.state.typeOfErr} body={this.state.message} />
            <TouchableOpacity>
              <Text
                style={{
                  textAlign: "center",
                  marginHorizontal: 40,
                  fontSize: 11,
                  padding: 10,
                  fontFamily: "uber"
                }}
              >
                By clicking start, you are agree to our
                <Text style={{ fontFamily: "uber-b" }}>
                  Terms and Conditions
                </Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={style.cardView}
        >
          <KeyboardAvoidingView>
            <View style={{ margin: 10 }}>
              <Tabs
                tabBarUnderlineStyle={{
                  backgroundColor: Color.steel,
                  borderRadius: 130
                }}
                tabContainerStyle={{
                  elevation: 0,
                  borderBottomColor: Color.white
                }}
              >
                <Tab
                  activeTabStyle={{ backgroundColor: Color.white }}
                  heading="Sign Up"
                  activeTextStyle={{
                    color: Color.black,
                    fontSize: 20,
                    fontFamily: "uber"
                  }}
                  tabStyle={{ backgroundColor: Color.white }}
                  textStyle={{
                    color: Color.steel,
                    fontSize: 20,
                    fontFamily: "uber"
                  }}
                >
                  <Tab1
                    onPress={( email, phone)=>this.clickRegister(email, phone)} 
                    onPressFB={() => this.props.navigation.navigate("Home")}
                  />
                </Tab>
                <Tab
                  activeTabStyle={{ backgroundColor: Color.white }}
                  heading="Sign In"
                  activeTextStyle={{
                    color: Color.black,
                    fontSize: 20,
                    fontFamily: "uber"
                  }}
                  tabStyle={{ backgroundColor: Color.white }}
                  textStyle={{
                    color: Color.steel,
                    fontSize: 20,
                    fontFamily: "uber"
                  }}
                >
                  <Tab2
                    onPress={(data) => this.signIn(data)}//this.props.navigation.navigate("OTP")}
                  />
                </Tab>
              </Tabs>
            </View>
          </KeyboardAvoidingView>
        </View>
      </View>
    );
  }
}

const mapStateToActions = {
  register: requestRegister,
  login: requestLogin
} 

const mapStateToProps = state => ({
  err: state.registerReducer.error,
  success:state.registerReducer.token,
  loginSucess: state.lgoinReducer.token,
  loginErr: state.lgoinReducer.error,
  state:state
});

export default connect(mapStateToProps ,mapStateToActions)(Registration)
