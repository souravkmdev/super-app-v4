import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSizeConfig } from '../../utils/context/SizeConfig'

const UsedCarsScreen = () => {
    const size = useSizeConfig()
    const styles = getStyles(size)
    return (
        <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
            <Text>UsedCarsScreen</Text>
        </View>
    )
}

export default UsedCarsScreen

const getStyles = (size: any) => StyleSheet.create({})