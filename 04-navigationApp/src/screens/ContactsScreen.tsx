import React, { useContext } from 'react'
import { View, Text, Button } from 'react-native';
import { styles } from '../theme/appTheme'
import { AuthContext } from '../context/AuthContext';

export const ContactsScreen = () => {

    const { signIn, authState: { isLoggedIn } } = useContext( AuthContext )
    return (
        <View style={ styles.globalMargin }>
            <Text> ContactsScreen </Text>
            { !isLoggedIn && <Button title='Sign In' onPress={ signIn }/> }
        </View>
    )
}

