import React, {useState, useEffect, useContext} from 'react'
import { View, Text } from 'react-native'
import { styles } from '../Menu/styles'
import {ScrollView} from 'react-native-gesture-handler';
// import firestore from '@react-native-firebase/firestore';
import {FirebaseContext} from '../../../provider';



const Menu = () => {

    const [menuLists, setMenu] = useState([])

    const {getMenu} = useContext(FirebaseContext)

    
    useEffect(() => {
        // Query cloud firestore get Menu 
        const menuSubscriber = getMenu("desc").onSnapshot(dataSnapShot => {
        

                let menuData = [];

                dataSnapShot.forEach(data=>{

                    menuData = [...menuData, {id : data.id, ...data.data()}]
                    
                    //console.log("menu data :",data.data())

                })

               setMenu(menuData)
               console.log("set menu")

        })

        //console.log("dataSnapShot :",menuLists)
        //console.log('use Effect')

        return () => menuSubscriber()

    }, [])
    

    return (
        
        <View style={styles.viewMenu}>
            <Text style={styles.titleMenu}>Bienvenue KAY JIJI</Text>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{marginTop:40}}
                >
                       {menuLists && menuLists.map((data)=> <View style={styles.viewScrollView} key={data.id}>
                            {/* <Image
                                source={require('../images/5.png')}
                                style={{height:40,width:40}}
                            /> */}
                            <Text style={styles.textScrollView}>

                                {data.name}
                            </Text>

                        </View>)}

                </ScrollView>

                

        </View>










    )
}

export default Menu
