 import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import { db } from '../firebase';

const CustomListItem = ({ id, chatName, enterChat }) => {

    const [chatMessages, setChatMessages] = useState([]);

    useEffect(() => {
        const unsubscribe = db.collection('chats').doc(id).collection('messages')
        .orderBy('timestamp', 'desc').onSnapshot(snapshot => (
            setChatMessages(snapshot.docs.map(doc => ({
            })))
        ));
        return unsubscribe;
    }, [])

    return (
        <ListItem key={id} containerStyle={{backgroundColor:"black"}} key={id} bottomDivider
        onPress={() => enterChat(id, chatName)}>
            <Avatar
            rounded
            source={{
                uri: chatMessages?.[0]?.photoURL || 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
            }}
            />
            <ListItem.Content>
                <ListItem.Title style = {{ fontWeight: "800", color: "white" }}>
                    {chatName}
                </ListItem.Title>
                <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail"
                style = {{ color: "white" }}>
                    {chatMessages?.[0]?.displayName}: {chatMessages?.[0]?.message}
                </ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
        
    )
}

export default CustomListItem

const styles = StyleSheet.create({})
