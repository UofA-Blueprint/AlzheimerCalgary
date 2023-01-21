////////// Import Dependencies //////////
import { useState } from 'react'
import * as React from 'react'
import { 
    StyleSheet, 
    Modal, 
    View, 
    TouchableOpacity, 
    Text,
    } from 'react-native'
import { EvilIcons } from '@expo/vector-icons'
import CheckBox from './CheckBox'
import Dropdown from './Dropdown'
////////////////////////////////////////

/////////// Configurations ///////////
interface Props {
	setVisible: React.Dispatch<React.SetStateAction<boolean>>;
    departments: any;
};
//////////////////////////////////////

//////////////// Component //////////////
export default function StaffFiltersPopUp({ setVisible, departments }: Props) {
    const [ allStaffIsSelected, setAllStaffIsSelected ] = useState(true)

    const departmentRenderItems = departments.map((department: any) => {
        return (
            <View key={department.id} style={{ marginLeft: 10, marginTop: 10 }}>
                <CheckBox label={department.name} checkBoxStyle={styles.dropDownCheckbox}/>
            </View>
        )
    })

	function applyFilters() {
		/* upload the image or video */
		//////////////////////////////

		/* Then, close the pop-up */
		setVisible(false)
	}
	/////////////

	return (
		<Modal transparent>
			<View style={styles.popUpOuterFrame}>
				<View style={styles.popUpInnerFrame}>
                    <View style={styles.titleAndCloseFrame}>
                        <View style={styles.titleFrame}>
                            <Text style={styles.title}>FILTERS</Text>
                        </View>
                        <View style={styles.closeFrame}>
                            <TouchableOpacity onPress={() => {setVisible(false)}}><EvilIcons name="close" size={38} color="black" /></TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.checkboxContainer}>
                        <View style={{ marginLeft: 20, marginTop: 20 }}><CheckBox label='All Staff' checkBoxStyle={styles.checkbox}/></View>
                        <View style={{ marginLeft: 20, marginTop: 20 }}><CheckBox label='On Duty' checkBoxStyle={styles.checkbox}/></View>
                    </View>
                    <View style={styles.dropdownContainer}>
                        <Dropdown label='All Departments' renderItems={departmentRenderItems} dropDownStyle={styles.dropdown}/>
                    </View>
				</View>
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
		backgroundColor: 'white',
		alignItems: 'center',
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
    },

    checkboxContainer: {
        width: '100%',
        justifyContent: 'center',
    },

    checkbox: {
        boxSize: 40,
        boxColor: 'black',
        labelSize: 21,
        labelColor: 'black',
        labelWeight: 'normal',
    },

    dropDownCheckbox: {
        boxSize: 40,
        boxColor: 'black',
        labelSize: 21,
        labelColor: 'grey',
        labelWeight: 'normal',
    },

    dropdownContainer: {
        width: 300,
        marginTop: 20,
        shadowColor: "black",
        shadowOffset: {
        width: 0,
        height: 10,
        },
        shadowOpacity: 0.51,
        shadowRadius: 13.16,
        elevation: 20,
    },

    dropdown: {
        rootWidth: 300,
        labelSize: 22,
        labelWeight: 'normal',
        labelColor: 'black',
        dropArrowSize: 50,
        dropArrowColor: 'grey',
        rootBackgroundColor: 'snow',
        rootBorderRadius: 20,
    },
});
////////////////////////////////////////