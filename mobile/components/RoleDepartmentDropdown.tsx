///////////////////// Import Dependencies //////////////////////
import { useState } from 'react'
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
///////////////////////////////////////////////////////////////

//////////////////// Props //////////////////////
interface Props {
    masterData: any;
    curData: String;
    setCurData: any;
};
////////////////////////////////////////////////

//////////////////// Component //////////////////////
export default function RoleDepartmentDropdown({ masterData, curData, setCurData }: Props) {
    const [ isOpen, setIsOpen ] = useState(false)
    return (
        <View style={styles.dropdown}>
            <View style={styles.upperFrame}>
                <View style={styles.dataDisplayFrame}>
                    <Text style={styles.dataText}>{curData}</Text>
                </View>
                <View style={styles.arrowFrame}>
                    {
                        !isOpen ?
                            <TouchableOpacity onPress={() => {setIsOpen(true)}}>
                                <MaterialIcons name="arrow-left" size={50} color='snow' />
                            </TouchableOpacity>
                        :
                            <TouchableOpacity onPress={() => {setIsOpen(false)}}>
                                <MaterialIcons name="arrow-drop-down" size={50} color='snow' />
                            </TouchableOpacity>
                    }
                </View>
            </View>
            {
                isOpen ?
                    <View style={styles.lowerFrame}>
                        <ScrollView>
                            {
                                masterData.map((item: any) => {
                                    return (
                                        <View key={item.name} style={styles.itemCard}>
                                            <TouchableOpacity onPress={() => {setCurData(item.name)}}>
                                                <Text style={styles.itemName}>{item.name}</Text>
                                            </TouchableOpacity>
                                        </View>
                                    )
                                })
                            }
                        </ScrollView>
                    </View>
                : null
            }
        </View>
    )
}
////////////////////////////////////////////////////

////////////////// Styles /////////////////
const styles = StyleSheet.create({
    dropdown: {
        width: 350,
        marginBottom: 100,
    },

    upperFrame: {
        width: '100%',
        height: 60,
        borderBottomWidth: 3,
        borderColor: 'grey',
        flexDirection: 'row',
    },

    dataDisplayFrame: {
        width: 300,
        height: '100%',
        justifyContent: 'center',
        paddingLeft: 8,
    },

    dataText: {
        fontSize: 22,
        color: 'white'
    },

    arrowFrame: {
        width: 50,
        height: '100%',
    },

    lowerFrame: {
        width: '100%',
        borderColor: 'grey',
        marginBottom: 50
    },

    itemCard: {
        width: '100%',
        height: 40,
        justifyContent: 'center',
        paddingLeft: 8,
        borderBottomWidth: 2,
        borderColor: 'grey'
    },

    itemName: {
        fontSize: 22,
        color: 'white'
    },
})
//////////////////////////////////////////