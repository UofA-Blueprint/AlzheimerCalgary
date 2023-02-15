////////// Import Dependencies //////////
import * as React from 'react'
import { 
    Animated,
    StyleSheet, 
    Modal, 
    View, 
    TouchableOpacity, 
    Text,
    } from 'react-native'
import { EvilIcons } from '@expo/vector-icons'
import CheckBox from './CheckBox'
////////////////////////////////////////

/////////// Configurations ///////////
interface Props {
    allClientsFilter: Boolean;
    setAllClientsFilter: any;
    onCampusFilter: Boolean;
    setOnCampusFilter: any;
    offCampusFilter: Boolean;
    setOffCampusFilter: any;
    closeClientFiltersPopUp: any;
    scaleValue: Number;
};
//////////////////////////////////////

//////////////// Component //////////////
export default function ClientFiltersPopUp({ 
    allClientsFilter, 
    setAllClientsFilter, 
    onCampusFilter,
    setOnCampusFilter,
    offCampusFilter,
    setOffCampusFilter,
    closeClientFiltersPopUp,
    scaleValue }: Props) 
{
	return (
		<Modal transparent>
			<View style={styles.popUpOuterFrame}>
				<Animated.View style={[styles.popUpInnerFrame, { transform: [{ scale: scaleValue }] }]}>
                    <View style={styles.titleAndCloseFrame}>
                        <View style={styles.titleFrame}>
                            <Text style={styles.title}>FILTERS</Text>
                        </View>
                        <View style={styles.closeFrame}>
                            <TouchableOpacity onPress={closeClientFiltersPopUp}><EvilIcons name="close" size={38} color="white" /></TouchableOpacity>
                        </View>
                    </View>
                    <Text style={styles.instruction}>*Remove your current choice before choosing a new one.</Text>
                    <View style={styles.checkboxContainer}>
                        <View style={{ marginLeft: 20, marginTop: 20 }}><CheckBox value={allClientsFilter} setValue={setAllClientsFilter} label='All Clients' checkBoxStyle={styles.checkbox}/></View>
                        <View style={{ marginLeft: 20, marginTop: 20 }}><CheckBox value={onCampusFilter} setValue={setOnCampusFilter} label='On Campus' checkBoxStyle={styles.checkbox}/></View>
                        <View style={{ marginLeft: 20, marginTop: 20 }}><CheckBox value={offCampusFilter} setValue={setOffCampusFilter} label='Off Campus' checkBoxStyle={styles.checkbox}/></View>
                    </View>
				</Animated.View>
			</View>
		</Modal>
	);
}
////////////////////////////////////////

///////////////// Styles ////////////////
const styles = StyleSheet.create({
	popUpOuterFrame: {
		flex : 1,
		backgroundColor: 'rgba(0,0,0,0.5)',
		justifyContent: 'center',
		alignItems: 'center',
	},

	popUpInnerFrame: {
		width: 350,
		backgroundColor: '#8d99ae',
		borderRadius: 20,
        paddingTop: 10,
        paddingBottom: 30,
	},

    titleAndCloseFrame: {
        width: '100%',
        flexDirection: 'row',
    },

	closeFrame: {
		width: '20%',
		height: 40,
		justifyContent: 'center',
		alignItems: 'flex-end',
		paddingRight: 5,
	},

    titleFrame: {
        width: '80%',
        justifyContent: 'center',
        paddingLeft: 20,
    },

    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: 'white',
    },

    instruction: {
        fontSize: 16,
        color: '#edf2f4',
        marginRight: 10,
        marginLeft: 20,
        marginTop: 6
    },

    checkboxContainer: {
        width: '100%',
        justifyContent: 'center',
    },

    checkbox: {
        boxSize: 40,
        boxColor: 'white',
        labelSize: 21,
        labelColor: 'white',
        labelWeight: 'normal',
    },
});
////////////////////////////////////////