import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { IconAkun, IconAkunActive, IconHome, IconHomeActive, IconPesanan, IconPesananActive } from '../../assets/icons/Index'
import { WARNA_UTAMA, WARNA_DISABLE } from '../../utils/constant'

const TabItem = ({ isFocused, onPress, onLongPress, label }) => {
    const Icon = () => {
        if (label === 'Home') return isFocused ? <IconAkunActive></IconAkunActive> : <IconHome></IconHome>
        if (label === 'Pesanan') return isFocused ? <IconPesananActive></IconPesananActive> : <IconPesanan></IconPesanan>
        if (label === 'Akun') return isFocused ? <IconAkunActive></IconAkunActive> : <IconAkun></IconAkun>

        return <IconHome></IconHome>
    }
    return (
        <TouchableOpacity
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.container}>
            <Icon></Icon>
            <Text style={styles.text(isFocused)}>
                {label}
            </Text>
        </TouchableOpacity>
    )
}

export default TabItem

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    text: (isFocused) => ({
        fontSize: 13,
        color: isFocused ? WARNA_UTAMA : WARNA_DISABLE,
        marginTop: 8
    })
})