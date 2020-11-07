import React, { Component, useState } from "react";
import {
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  LayoutAnimation
} from "react-native";
import container from "../../Styles/Container/style";
import Color from "../../Config/Color";
import Button from "../../components/Button/index";



export default class signUP extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mobile: '',
      email: '',
      mobileValid: true,
      emailValid:true
    }

    this.onReg = this.onReg.bind(this)
  }

  validateMobile() {
    const { mobile } = this.state
    let test = /^\d+$/;
    const mobileValid = (mobile.length == 9) && test.test(mobile);
    LayoutAnimation.easeInEaseOut()
    this.setState({ mobileValid })
    //mobileValid || this.mobileInput.shake();
    return mobileValid
  }

  // email validation
  validateEmail() {
  const { email } = this.state
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const emailValid = re.test(email)
    LayoutAnimation.easeInEaseOut()
    this.setState({ emailValid })
    //emailValid || this.emailInput.shake()
    return emailValid
  }

  onReg() {
    const { onPress } = this.props;
    LayoutAnimation.easeInEaseOut();
    const mobileValid = this.validateMobile();
    const emailValid = this.validateEmail();

    if (emailValid && mobileValid) {
      onPress(this.state.email, this.state.mobile);
      this.setState({ email: '', mobile: '' })
    }
  }

  render() {
    return (
      <KeyboardAvoidingView style={container.container} behavior='padding' enabled keyboardVerticalOffset={30}>
        <View style={{ marginVertical: 20, marginHorizontal: 15 }}>
          <TextInput
            ref={input => (this.emailInput = input)}
            onChangeText={email => this.setState({email})}
            defaultValue={this.state.email}
            onSubmitEditing={() => { this.validateEmail(); this.mobileInput.focus() }}
            style={{
              borderColor: Color.steel,
              borderWidth: 0.5,
              borderColor: !this.state.emailValid ? 'red' : '#d3d3d3',
              borderRadius: 5,
              fontSize: 18,
              marginVertical: 10,
              paddingHorizontal: 15,
              paddingVertical: 7,
              fontFamily: "uber-r"
            }}
            placeholderTextColor={Color.steel}
            placeholder="Email address"
            underlineColorAndroid={"transparent"}
            keyboardType="email-address"
          />
          { !this.state.emailValid ? <Text style={{color:'red'}}>Invalid email </Text> : <Text>e.g: example@example.com</Text> }
          <TextInput
            ref={input => (this.mobileInput = input)}
            onChangeText={mobile => this.setState({mobile},()=>this.validateMobile)}
            defaultValue={this.state.mobile}
            style={{
              borderColor: Color.steel,
              borderWidth: 0.5,
              borderColor: !this.state.mobileValid ? 'red' : '#d3d3d3',
              borderRadius: 5,
              fontSize: 18,
              marginVertical: 10,
              paddingHorizontal: 15,
              paddingVertical: 7,
              fontFamily: "uber-r"
            }}
            keyboardType="phone-pad"
            maxLength={9}
            placeholderTextColor={Color.steel}
            placeholder="Mobile number"
            underlineColorAndroid={"transparent"}
          />
           { !this.state.mobileValid ? <Text style={{color:'red'}}>Invalid phone number</Text> : <Text>eg : +9627xxxxxxxx</Text>}
        </View>
        <Button
          Text="Sign Up"
          textStyle={{ fontSize: 15, fontWeight: "100" }}
          onPress={this.onReg}
        />
        <Button
          Text="Connect with Facebook"
          textStyle={{ fontSize: 15, fontWeight: "100" }}
          viewStyle={{ backgroundColor: Color.facebook }}
         // onPress={this.props.onPressFB}
        />
      </KeyboardAvoidingView>
    );
  }
}
