import React, { Component } from "react";
import { Text, View, TextInput,KeyboardAvoidingView,TouchableOpacity , LayoutAnimation} from "react-native";
import container from "../../Styles/Container/style";
import Color from "../../Config/Color";
import Button from "../../components/Button/index";

export default class signIn extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mobile: '',
      mobileValid: true
    }
  }

  validateMobile() {
    const { mobile } = this.state
    let test = /^\d+$/;
    const mobileValid = (mobile.length == 9) && test.test(mobile);
    LayoutAnimation.easeInEaseOut()
    this.setState({ mobileValid })
    return mobileValid
  }

  login() {
    if (this.state.mobileValid) {
      let mobile = '+962' +this.state.mobile
      this.props.onPress(mobile)
  }
  }

  render() {
    return (
      <KeyboardAvoidingView>
        <View style={{ marginVertical: 20, marginHorizontal: 15,}}>  
          <TextInput
          ref={input => (this.mobileInput = input)}
          onChangeText={mobile => this.setState({mobile},()=>this.validateMobile())}
          defaultValue={this.state.mobile}
            style={{
              borderColor: Color.steel,
              borderWidth: 0.5,
              borderRadius: 5,
              fontSize: 18,
              marginVertical: 10,
              paddingHorizontal: 15,
              paddingVertical: 7,
              fontFamily:'uber-r',
            }}
            maxLength={9}
            placeholderTextColor={Color.steel}
            placeholder="Mobile number"
            underlineColorAndroid={"transparent"}
            keyboardType="phone-pad" 
            autoCapitalize = 'none'
          />
           { !this.state.mobileValid ? <Text style={{color:'red'}}>Invalid phone number</Text> : <Text>eg : +9627xxxxxxxx</Text>}
        </View>
     
        <Button Text="Next" textStyle={{ fontSize: 15}} onPress={()=> { this.login()}}/>
   
      </KeyboardAvoidingView>
    );
  }
}
