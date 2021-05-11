import React, {useState, useEffect, useContext} from 'react'
import { View, Text, FlatList } from 'react-native'
import { styles } from '../FoodList/styles'
import Icon from 'react-native-vector-icons/FontAwesome';
import Product from '../../Product';
import {FirebaseContext} from '../../../provider'


const renderProduct = ({item}) => {
    return (
        <Product
            image={item.image}
            title={item.name}
            price={item.price}
            description={item.description}
            onPress = {() => {console.log("Produit click")}}
        />



    )




}

const FoodList = () => {

    const [products, setProducts] = useState([])

    const {getDataSort} = useContext(FirebaseContext)

    console.log(getDataSort)

    useEffect(() => {
        // Query cloud firestore get DataSort
        const productSubscriber = getDataSort("produits", "price", "asc").onSnapshot(dataSnapShot => {
        

                let productData = [];

                dataSnapShot.forEach(data=>{

                   productData = [...productData, {id : data.id, ...data.data()}]
             
                })

                setProducts(productData)

                console.log("set productData", productData)

        })


        return () => productSubscriber()

    },[])

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
                    <FlatList
                        data={products}
                        numColumns={2}
                        renderItem={renderProduct}
                        keyExtractor={(product) => product.id}
                        
                    />           
                
                                
            </View>

        </View>
    )
}

export default FoodList
