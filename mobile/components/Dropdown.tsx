/////////////////////// Import Dependencies /////////////////////////
import { useState } from 'react';
import { TouchableOpacity, View, Text, StyleSheet, ScrollView } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
////////////////////////////////////////////////////////////////////

/////////// Configurations ///////////
interface Props {
    label: String;
	renderItems: any;
    dropDownStyle: any;
};
//////////////////////////////////////

/////////////////////// Component /////////////////////////
export default function Dropdown({ label, renderItems, dropDownStyle }: Props) {
    /*
        This is a self-made component that has the following style attributes:
            - rootBackgroundColor: the background color of the dropdown box
            - rootWidth: width of the dropdown box
            - rootBorderRadius: border radius of the entire dropdown list section
            - labelSize: size of the label text in the dropdown box
            - labelWeight: weight of the label text in the dropdown box
            - labelColor: color of the label text in the dropdown box
            - dropArrowSize: size of the drop-down arrow icon
            - dropArrowColor: color of the drop-down arrow icon
    */

    const [ dropped, setDropped ] = useState(false)

    return (
        <View style={[styles.rootFrame, {
            backgroundColor: dropDownStyle.rootBackgroundColor, 
            width: dropDownStyle.rootWidth,
            borderRadius: dropDownStyle.rootBorderRadius,
        }]}>
            <View style={styles.labelAndArrowFrame}>
                <View style={styles.labelFrame}>
                    <Text style={
                        {
                            fontSize: dropDownStyle.labelSize,
                            fontWeight: dropDownStyle.labelWeight,
                            color: dropDownStyle.labelColor ? dropDownStyle.labelColor : 'black',
                        }
                    }>{label}</Text>
                </View>
                <View style={styles.dropDownArrowFrame}>
                    {
                        !dropped ?
                            <TouchableOpacity onPress={() => setDropped(true)}>
                                <MaterialIcons name="arrow-left" size={dropDownStyle.dropArrowSize} color={dropDownStyle.dropArrowColor} />
                            </TouchableOpacity>
                        :
                            <TouchableOpacity onPress={() => setDropped(false)}>
                                <MaterialIcons name="arrow-drop-down" size={dropDownStyle.dropArrowSize} color={dropDownStyle.dropArrowColor} />
                            </TouchableOpacity>
                    }
                </View>
            </View>
            {
                dropped ?
                    <View style={{ width: '100%', marginBottom: 20 }}>
                        <View style={styles.horizontalDivider}></View>
                        {
                            renderItems.map((item: any) => {
                                return (
                                    item
                                )
                            })
                        }
                    </View>
                : null
            }
        </View>
    )
}
////////////////////////////////////////////////////////////////////

/////////////////////// Styles /////////////////////////
const styles = StyleSheet.create({
    rootFrame: {
        alignItems: 'center',
    },

    labelAndArrowFrame: {
        flexDirection: 'row',
    },

    labelFrame: {
        width: '80%',
        justifyContent: 'center',
        paddingLeft: 10,
    },

    dropDownArrowFrame: {
        width: '20%',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },

    horizontalDivider: {
        width: 40,
        height: 8,
        backgroundColor: 'black',
        marginBottom: 20,
        marginLeft: 10,
        borderRadius: 20,
    }
})
////////////////////////////////////////////////////////