import React from "react";
import {Text, View, Image} from "react-native";
import styles from "./product.style";

const Product = ({products}) => {    
    return(
        <View style={styles.container}>
            <Image source={{uri:products.imgURL}} style={styles.image}/>
            <Text style={styles.title} >{products.title}</Text>
            <View style={styles.bottom_data}>
                
                <Text>{products.inStock == false ? 
                    <Text>
                        <Text  style={styles.price} >{products.price}{'\n'}</Text>
                        <Text style={styles.stock}>STOKTA YOK</Text>
                    </Text>:
                    <Text  style={styles.price} >{products.price}</Text>}</Text>
            </View>
        </View>
    );
}

export default Product;