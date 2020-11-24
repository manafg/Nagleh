import {  createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack'


import Registration from '../screens/Registration/Registration'
import Profile from '../screens/Profile/Profile'
import SideMenu from '../components/SideMenu';
import OTP from '../screens/OTP';
import Home from '../screens/Home'
import SearchScreen from '../screens/SearchScreen'


//app stack for user end
    export const AppStack = {
        OTP: {
            screen: OTP,
            navigationOptions:{
                header:null
            }
        },
        Registration:{
            screen: Registration,
            navigationOptions:{
                header:null
            }
        },
        Profile:{
            screen: Profile,
            navigationOptions:{
                header:null
            }
        },
        Home: {
            screen : Home,
            navigationOptions: {
                header:null
            }
        },
       
        SearchScreen:{
            screen : SearchScreen,
            navigationOptions : SearchScreen
        }
    }

    //authentication stack for user before login
    export const AuthStack = createStackNavigator({
        Registration:{
            screen:Registration,
            navigationOptions:{
                header:null
            }
        },
        OTP: {
            screen: OTP,
            navigationOptions:{
                header:null
            }
        },
        Home: {
            screen : Home,
            navigationOptions: {
                header:null
            }
        },
       
      
           
    },{
        initialRouteName: 'Registration',
    });

    //drawer routes, you can add routes here for drawer or sidemenu
    const DrawerRoutes = {
        Home: {
            name: 'Home',
            screen: createStackNavigator(AppStack, {initialRouteName: 'Home',headerMode: 'none'})
            
        },
        'Profile':{
            name: 'Profile',
            screen: createStackNavigator(AppStack, {initialRouteName: 'Profile',headerMode: 'none'})
        },
      
    };

    //main navigator for user end
    export const RootNavigator = createDrawerNavigator(
        DrawerRoutes,
        {
        drawerWidth: 180,
        initialRouteName:'Home',
        contentComponent: SideMenu,
      });
