import React, { Component , useState} from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Modal from "react-native-modal";
import Button from '../../components/Button/index';


const  NaglehModal = props => {
    return (
        <Modal isVisible={props.isVisible}>
          <View style={{ backgroundColor:'#fff', height:'30%', width:'100%', padding:'5%'}}>
            <Text style={{textAlignVertical: "center", textAlign: "center", justifyContent:'center', fontSize:24}}>{props.header}</Text>
            <Text style={{textAlignVertical: "center",height:50 ,textAlign: "center", fontSize:20, marginTop:20, marginBottom:10}}>{props.body}</Text>
            <Button Text="Ok" onPress={()=>props.toggleView(false)}/>
          </View>
        </Modal>
    );
  }

  export default NaglehModal;
