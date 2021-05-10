import React from 'react'
import { View, Text } from 'react-native'
import { styles } from '../Menu/styles'
import {ScrollView} from 'react-native-gesture-handler';



const Menu = () => {
    return (
        
        <View style={styles.viewMenu}>
            <Text style={styles.titleMenu}>Bienvenue KAY JIJI</Text>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{marginTop:40}}
                >
                        <View style={styles.viewScrollView}>
                            {/* <Image
                                source={require('../images/5.png')}
                                style={{height:40,width:40}}
                            /> */}
                            <Text style={styles.textScrollView}>

                                Burgers
                            </Text>

                        </View>

                </ScrollView>

                

        </View>










    )
}

export default Menu
