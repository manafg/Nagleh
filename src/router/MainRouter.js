import {  createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack'


import Registration from '../screens/Registration/Registration'
import Profile from '../screens/Profile/Profile'
import SideMenu from '../components/SideMenu';

//app stack for user end
    export const AppStack = {
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
        }
    }

    //authentication stack for user before login
    export const AuthStack = createStackNavigator({
        Registration:{
            screen:Registration,
            navigationOptions:{
                header:null
            }
        }
           
    },{
        initialRouteName: 'Registration',
    });

    //drawer routes, you can add routes here for drawer or sidemenu
    const DrawerRoutes = {
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
        initialRouteName:'Profile',
        contentComponent: SideMenu,
      });
