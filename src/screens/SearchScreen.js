import React, { Component } from 'react';
import { Platform, StatusBar } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {connect} from "react-redux";
import {requestUpdateDrop, requestUpdateFrom} from '../actions/Home/HomeActions'

class SearchScreen extends Component {
    componentWillMount() {

      
    }

    goMap(data, details) {
        let pageName = this.props.navigation.getParam('pageName');
        if (pageName == "From") {
            this.props.navigation.navigate('Home');
            this.props.requestUpdateFrom(details);
        } else if (pageName == "To") {
            this.props.navigation.navigate('Home');
            this.props.requestUpdateDrop(details)
        }
        
        // if (from == "where") {
        //     let searchObj = {
        //         searchData: data,
        //         searchDetails: details,
        //         searchFrom: from,
        //         whereText: details.formatted_address,
        //         dropText: this.state.dropText
        //     }

        //     let oldData = this.props.navigation.getParam('old');
        //     oldData.wherelatitude = details.geometry.location.lat,
        //         oldData.wherelongitude = details.geometry.location.lng,
        //         oldData.whereText = details.formatted_address
        //     if (pageName) {
        //         this.props.navigation.state.params.searchData(searchObj, oldData);
        //         this.props.navigation.dismiss();
        //     } else {
        //         this.props.navigation.goBack();
        //         this.props.navigation.state.params.pres(searchObj, oldData);
        //     }
        // }
        // else if (from == 'drop') {
        //     let searchObj = {
        //         searchData: data,
        //         searchDetails: details,
        //         searchFrom: from,
        //         whereText: this.state.whereText,
        //         dropText: details.formatted_address
        //     }

        //     let oldData = this.props.navigation.getParam('old');
        //     oldData.droplatitude = details.geometry.location.lat,
        //         oldData.droplongitude = details.geometry.location.lng,
        //         oldData.droptext = details.formatted_address
        //     if (pageName) {
        //         this.props.navigation.goBack();
        //         this.props.navigation.state.params.searchData(searchObj, oldData);
        //     } else {
        //         this.props.navigation.state.params.pres(searchObj, oldData);
        //         this.props.navigation.goBack();
        //     }
        // }

    }
    render() {
        return (
            <GooglePlacesAutocomplete
                placeholder='Search'
                minLength={2} // minimum length of text to search
                autoFocus={true}
                returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
                listViewDisplayed='auto'  // true/false/undefined
                fetchDetails={true}
                renderDescription={row => row.description || row.formatted_address || row.name}

                textInputProps={{ clearButtonMode: 'while-editing' }}
                onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    this.goMap(data, details);
                }}

                getDefaultValue={() => ''}

                query={{
                    // available options: https://developers.google.com/places/web-service/autocomplete
                    key: 'AIzaSyDqnzeDBnNoa_5yDnZj5doqjnoim2YkLKE',
                    language: 'en', // language of the results
                    components: 'country:jo'
                    // types: '(cities)' // default: 'geocode'
                }}

                styles={{
                    container: {
                        marginTop: Platform.OS == 'android' ? StatusBar.currentHeight : 44,
                        backgroundColor: '#ddd'
                    },
                    textInputContainer: {
                        width: '100%',
                    },
                    description: {
                        fontWeight: 'bold'
                    },
                    description: {
                        color: "Black"
                    },
                    predefinedPlacesDescription: {
                        color: 'blue'
                    },
                }}
                renderDescription={(row) => row.description || row.formatted_address || row.name}
                currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
                currentLocationLabel="Current location"
                nearbyPlacesAPI='GoogleReverseGeocoding' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
                GoogleReverseGeocodingQuery={{
                    // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
                    key: 'AIzaSyDqnzeDBnNoa_5yDnZj5doqjnoim2YkLKE',
                    language: 'en',
                }}
                GooglePlacesSearchQuery={{
                    // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
                    rankby: 'distance',
                    types: 'establishment'
                }}
                currentLocation={true}

                debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
            />
        );
    }
}

const mapStateToActions = {
    requestUpdateDrop: requestUpdateDrop,
    requestUpdateFrom: requestUpdateFrom
  } 
  
//   const mapStateToProps = state => ({
//     err: state.registerReducer.error,
//     success:state.registerReducer.token,
//     loginSucess: state.lgoinReducer.token,
//     loginErr: state.lgoinReducer.error,
//     state:state
//   });
  
  export default connect(null ,mapStateToActions)(SearchScreen)