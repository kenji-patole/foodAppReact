import React from 'react'
import { View, Text } from 'react-native'
import { styles } from '../FoodList/styles'
import Icon from 'react-native-vector-icons/FontAwesome';
import Product from '../Product';

const FoodList = () => {
    return (
        <View>

            <View style={styles.viewFoodlist}>
                                    
                <View style={styles.viewText}>
                    <Text style={styles.titleText}>New Products</Text>
                </View>

                <View style={styles.viewIcon}>
                    <Icon
                        name="ellipsis-h"
                        size={25}
                        color='#848385'
                        />
                </View>

            
            </View>

            <View style={{
                flexDirection:"row",
                marginHorizontal:15,
                marginTop:30,
                }}>
                                
                <Product
                    image={require("../../assets/images/4.png")}
                    title="Smokehouse"
                    price="12.99"
                    
                />
                                
            </View>

        </View>
    )
}

export default FoodList
