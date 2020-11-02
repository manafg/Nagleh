import React, { Component , useState} from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Modal from "react-native-modal";
import Button from '../../components/Button/index';


const  NaglehModal = (props) => {
  debugger
    const [isVisible, toggleView] = useState(props);

    return (
        <Modal isVisible={isVisible}>
          <View style={{ backgroundColor:'#fff', height:'30%', width:'100%', padding:'5%'}}>
            <Text style={{textAlignVertical: "center",textAlign: "center", fontSize:24}}>{props.header}</Text>
            <Text style={{textAlignVertical: "center",textAlign: "center", fontSize:16, marginTop:20, marginBottom:10}}>{props.body}</Text>
            <Button Text="Ok" onPress={()=>toggleView(!isVisible)}/>
           
          </View>
        </Modal>
    );
  }

  export default NaglehModal;
