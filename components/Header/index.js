import React,{useState} from 'react'
import {View, Text, Image} from 'react-native'
import { styles } from '../Header/styles'
import {Picker} from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = () => {
    
    return (
        <View style={styles.viewHeader}>
                <View style={styles.imageLeft}>
                    <Image 
                        source={require('../../assets/images/1.png')}
                    />
                </View>

                <View style={styles.center}>
                            <Picker 
                                // selectedValue={this.state.city}
                                style={styles.picker}
                                // onValueChange={(itemValue,itemIndex) =>
                                //     this.setState({city:itemValue})
                                // }
                            >  
                                <Picker.Item
                                    label="Los Angeles"
                                    value="Los Angeles"
                                    style={styles.pickerItem}
                                />
                            </Picker>

                </View>

                <View>
                    <Icon name="user" size={30}/>
                </View>

        </View>  

    
        
    )
}

export default Header
