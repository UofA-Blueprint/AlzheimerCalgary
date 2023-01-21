/////////////////////// Import Dependencies /////////////////////////
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
////////////////////////////////////////////////////////////////////

/////////// Configurations ///////////
interface Props {
    value: Boolean;
    setValue: any;
	label: String;
    checkBoxStyle: any;
};
//////////////////////////////////////

/////////////////////// Component /////////////////////////
export default function CheckBox({ value, setValue, label, checkBoxStyle }: Props) {
    /*
        This is a self-made component that has the following style attributes:
            - boxSize: size of the box. This box is square, so only 1 dimension is needed.
            - boxColor: 
                +) If the checkbox is not selected: the color of the outline of the box. The background color of the box is the background color of the parant component.
                +) If the checkbox is selected: the background color of the box.
            - labelSize: font-size of the text next to the box.
            - labelColor: color of the text next to the box.
            - labelWeight: font-weight of the text next to the box (either 'normal' or 'bold')
    */

    return (
        <View>
            {
                !value ?
                    <TouchableOpacity style={styles.button} onPress={() => setValue(true)}>
                        <MaterialCommunityIcons name="checkbox-blank-outline" size={checkBoxStyle.boxSize} color={checkBoxStyle.boxColor} />
                        <Text style={{
                            fontSize: checkBoxStyle.labelSize,
                            color: checkBoxStyle.labelColor ? checkBoxStyle.labelColor : 'black',
                            fontWeight: checkBoxStyle.labelWeight,
                            marginLeft: 12,
                        }}>{label}</Text>
                    </TouchableOpacity>
                :
                    <TouchableOpacity style={styles.button} onPress={() => setValue(false)}>
                        <MaterialCommunityIcons name="checkbox-multiple-marked" size={checkBoxStyle.boxSize} color={checkBoxStyle.boxColor} />
                        <Text style={{
                            fontSize: checkBoxStyle.labelSize,
                            color: checkBoxStyle.labelColor ? checkBoxStyle.labelColor : 'black',
                            fontWeight: checkBoxStyle.labelWeight,
                            marginLeft: 12,
                        }}>{label}</Text>
                    </TouchableOpacity>
            }
        </View>
    )
}
////////////////////////////////////////////////////////////////////

/////////////////////// Styles /////////////////////////
const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center'
    },
})
////////////////////////////////////////////////////////