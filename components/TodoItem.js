import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';


const TodoItem = ({ item, pressHandler }) =>{
    return(
        <TouchableOpacity onPress={()=>{pressHandler(item.key)}}>
        <View style={styles.listItem}>
            <MaterialIcons name='delete' size={18} color='#333' />
            <Text style={styles.itemText}>{item.text}</Text>
        </View>
      
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    listItem: {
        padding: 16,
        marginTop: 16,
        borderColor: 'orange',
        borderWidth: 2,
        borderStyle: 'solid',
        borderRadius: 10,
        flexDirection: 'row'
    },

    itemText:{
        marginLeft: 10
    }
});

export default TodoItem;