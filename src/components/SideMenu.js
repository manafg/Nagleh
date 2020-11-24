
import React from 'react';
import { Text, View, Dimensions, StyleSheet, FlatList, Image, TouchableOpacity, AsyncStorage } from 'react-native';
import { Icon } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';
import SideMenuHeader from './SideMenuHeader';
import {connect} from "react-redux";

var { width,height } = Dimensions.get('window');
 class SideMenu extends React.Component{
    constructor(props){
        super(props);
       
        this.state = {
           conected:false,
           name:"",
            heightIphoneSix : false,
            sideMenuList: [
                {key: 1, name: 'Book a Truck', navigationName: 'Map', icon: 'map', type: 'font-awesome', child: 'firstChild'},
                {key: 2, name: 'Move Furniture', navigationName: 'MovefurnitreLandingPage', icon: 'truck-delivery', type: 'material-community', child: 'firstChild'},
                {key: 3, name: 'Profile Settings', navigationName: 'Profile', icon: 'ios-person-add', type: 'ionicon', child: 'secondChild'},
                {key: 4, name: 'History', navigationName: 'RideList', icon: 'history', type: 'material-community', child: 'thirdChild'},
                {key: 6, name: 'Notification', navigationName: 'Notifications', icon: 'ios-notifications', type: 'ionicon', child: 'thirdChild'},
                {key: 7, name: 'Payment', navigationName: 'SettingScreen', icon: 'settings', type: 'material-community', child: 'fourthChild'},
                {key: 8, name: 'About Us',  navigationName: 'About', icon: 'info', type: 'entypo', child: 'sixthChild'},
                {key: 9, name: 'Free Loads', navigationName:'VoucherScreen', icon: 'money', type: 'font-awesome', child: 'seventhChild'},
                {key: 10, name: 'Sign Out', icon: 'sign-out', type: 'font-awesome', child: 'seventhChild'},
                ],
            profile_image:null
        }
          
    }


    componentDidMount(){
        
        AsyncStorage.getItem("Profile").then((res)=>{
            this.setState({name:res})
        })
        this.heightReponsive();
       
        this.tripSatusCheck()
    }

    //check for device height(specially iPhone 6)
    heightReponsive(){
        if(height <= 667){
            this.setState({heightIphoneSix :true})
        }
    }

    //navigation to screens from side menu
    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
          routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    }

    //sign out and clear all async storage
    async signOut() {
        AsyncStorage.setItem('Token', "");
        this.props.navigation.navigate('Login')

    }

    //CHECKING TRIP END OR START
    tripSatusCheck(){
       
    }


    render(){
        return(
            <View style={styles.mainViewStyle}>
                <SideMenuHeader  headerStyle={styles.myHeader} userPhoto={this.props.userInfo.profile.profile_image} userEmail={this.props.userInfo.profile.name} userName ={this.props.userInfo.profile.name} ></SideMenuHeader> 
                
                <View style={styles.compViewStyle}>
                <View style={[styles.vertialLine,{height: (width <= 320) ? width/1.53 : width/1.68 }]}></View>
                    <FlatList
                        data={this.state.sideMenuList}     
                        keyExtractor={(item,index) => index.toString()}   
                        style={{ marginTop: 20}}   
                        bounces = {false}
                        renderItem={({item, index}) => 
                        <TouchableOpacity
                        onPress={
                        (item.name=='Sign Out')? ()=>this.signOut() : 
                        this.navigateToScreen(item.navigationName) 
                        }
                        style={
                        [styles.menuItemView, {marginTop: (index == this.state.sideMenuList.length - 1) ? width/7 : 0}]
                        }>
                            <View style={styles.viewIcon}>
                                <Icon
                                    name={item.icon}
                                    type={item.type}
                                    color={"#000"}
                                    size={16}
                                    containerStyle={styles.iconStyle}
                                />
                            </View>
                                <Text style={styles.menuName}>{item.name}</Text>
                            </TouchableOpacity>
                    } />
                </View>
                <View style={{opacity: 0.6}}>
                    {/* <Image 
                        source={require('../../assets/images/logo.png')} 
                        style={{width: '50%'}}
                    /> */}
                </View>
            </View>
        )
    }
}
 
  const mapStateToProps = state => ({
    userInfo : state.OTPReducer.token.data
  });
export default connect(mapStateToProps ,null)(SideMenu)
const styles = StyleSheet.create({
    myHeader:{
        marginTop:0,   
    },
    vertialLine: {
        width: 1,
        backgroundColor: '#fff',
        position: 'absolute',
        left: 22,
        top: 24
    },
    menuItemView: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: 18,
        flex: 1,
        paddingLeft: 10, 
        paddingRight: 10,
    },
    viewIcon: {
        width: 24,
        height: 24,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        left: 1
    },
    menuName: {
        color: "#fff", 
        fontWeight: 'bold',
        marginLeft: 8,
        width:"100%"
    },
    mainViewStyle:{
        backgroundColor: "#000", 
        height: '100%'
    },
    compViewStyle:{
        position: 'relative', 
        flex: 31
    },
    iconStyle:{ 
        justifyContent: 'center', 
        alignItems: 'center' 
    }
})

