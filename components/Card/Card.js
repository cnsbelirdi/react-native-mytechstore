import React from 'react';
import { View, Text, Image } from 'react-native'
import styles from './Card.style'

const Card = ({ data }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: data.imgURL }} />
            <View style={styles.innerContainer}>
                <Text style={styles.title}>{data.title}</Text>
                <Text style={styles.price}>{data.price}</Text>
                <Text style={styles.inStock}>{data.inStock === true ? '' : 'No stock'}</Text>
            </View>
        </View>
    )
}

export default Card;