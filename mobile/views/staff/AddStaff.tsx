///////////////// Import Dependencies /////////////////
import { useState, useEffect } from 'react';
import { 
    Alert,
    View,
    ScrollView,
    StatusBar,
    TouchableOpacity,
    Text,
    TextInput,
    StyleSheet } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context"
import { Ionicons } from '@expo/vector-icons'
import RoleDepartmentDropdown from '../../components/RoleDepartmentDropdown'
//////////////////////////////////////////////////////

//////////////// Component ////////////////
export default function AddStaff(prop: any) {
    ////////////////// Mock Data //////////////////
    const Roles = [
        {
            rid: 1,
            name: 'Data Analyst',
            departments: [1]
        },

        {
            rid: 2,
            name: 'Accountant',
            departments: [1]
        },

        {
            rid: 3,
            name: 'CFO',
            departments: [1]
        },

        {
            rid: 4,
            name: 'Manager',
            departments: [1, 2, 3, 4]
        },

        {
            rid: 5,
            name: 'Representative',
            departments: [2]
        },

        {
            rid: 6,
            name: 'Volunteer',
            departments: [2, 3],
        },

        {
            rid: 7,
            name: 'Director',
            departments: [4],
        },
    ]

    const Departments = [
        {
          did: 1,
          name: 'Finance',
          roles: [1, 2, 3, 4]
        },
    
        {
          did: 2,
          name: 'Customer Service',
          roles: [4, 5, 6]
        },
    
        {
          did: 3,
          name: 'Activities Management',
          roles: [4, 6]
        },
    
        {
          did: 4,
          name: 'Management',
          roles: [4, 7]
        },
    ]

    const Staff = [
        {
          firstName: 'John',
          lastName: 'Smith',
          username: 'JohnSmith0607',
          roleId: 1,
          departmentId: 1,
          hash_password: 'a;rgijae;ogjao;erigj',
          contactEmail: 'johnsmith@gmail.com',
          created: '2023-01-01'
        },
    
        {
          firstName: 'Clark',
          lastName: 'Kent', 
          username: 'ClarkKent235',
          roleId: 4,
          departmentId: 2,
          hash_password: 'a;rgijae;ogjao;erigj',
          contactEmail: 'clarkkent@gmail.com',
          created: '2023-02-01'
        },
    
        {
          firstName: 'Lucas',
          lastName: 'Milton',
          username: 'LucasMilton678',
          roleId: 6,
          departmentId: 3,
          hash_password: 'a;rgijae;ogjao;erigj',
          contactEmail: 'lucasmilton@gmail.com',
          created: '2023-02-15'
        },
    
        {
          firstName: 'Tom',
          lastName: 'Holland',
          username: 'TomHolland357',
          roleId: 7,
          departmentId: 4,
          hash_password: 'a;rgijae;ogjao;erigj',
          contactEmail: 'tomholland@gmail.com',
          created: '2023-02-09'
        },
    
        {
          firstName: 'Tanya',
          lastName: 'Boothe',
          username: 'TanyaBoothe234',
          roleId: 2,
          departmentId: 1,
          hash_password: 'a;rgijae;ogjao;erigj',
          contactEmail: 'tanyaboothe@gmail.com',
          created: '2023-05-01'
        },
    
        {
          firstName: 'Tony',
          lastName: 'Phan',
          username: 'TonyPhan0505',
          roleId: 5,
          departmentId: 2,
          hash_password: 'a;rgijae;ogjao;erigj',
          contactEmail: 'tonyphan@gmail.com',
          created: '2023-05-05'
        },
    
        {
          firstName: 'Peggy',
          lastName: 'Ross',
          username: 'PeggyRoss897',
          roleId: 4,
          departmentId: 3,
          hash_password: 'a;rgijae;ogjao;erigj',
          contactEmail: 'peggyross@gmail.com',
          created: '2023-02-15'
        },
    
        {
          firstName: 'Nicole',
          lastName: 'Collins',
          username: 'NicoleCollins098',
          roleId: 7,
          departmentId: 4,
          hash_password: 'a;rgijae;ogjao;erigj',
          contactEmail: 'nicolecollins@gmail.com',
          created: '2023-02-09'
        },
    
        {
          firstName: 'Mark',
          lastName: 'Jamison',
          username: 'MarkJamison367',
          roleId: 1,
          departmentId: 1,
          hash_password: 'a;rgijae;ogjao;erigj',
          contactEmail: 'markjamison@gmail.com',
          created: '2023-01-01'
        },
    
        {
          firstName: 'Frank',
          lastName: 'Lampard',
          username: 'FrankLampard0978',
          roleId: 6,
          departmentId: 2,
          hash_password: 'a;rgijae;ogjao;erigj',
          contactEmail: 'franklampard@gmail.com',
          created: '2023-02-01'
        },
    
        {
          firstName: 'Jennifer',
          lastName: 'Smith',
          username: 'JenniferSmith875',
          roleId: 4,
          departmentId: 3,
          hash_password: 'a;rgijae;ogjao;erigj',
          contactEmail: 'jennifersmith@gmail.com',
          created: '2023-02-15'
        },
    
        {
          firstName: 'Richard',
          lastName: 'Holland',
          username: 'RichardHolland768',
          roleId: 4,
          departmentId: 4,
          hash_password: 'a;rgijae;ogjao;erigj',
          contactEmail: 'richardholland@gmail.com',
          created: '2023-02-09'
        },
    
    ]
    //////////////////////////////////////////////

    const [ firstName, setFirstName ] = useState('')
    const [ lastName, setLastName ] = useState('')
    const [ username, setUsername ] = useState('')
    const [ contactEmail, setContactEmail ] = useState('')
    const [ departmentData, setDepartmentData ] = useState('None')
    const [ roleData, setRoleData ] = useState('None')
    const [ roleMasterData, setRoleMasterData ] = useState(Roles)
    let noEmptyFields = false
    let validEmail = false
    let validUsername = false

    useEffect(() => {
        if (departmentData !== 'None') {
            let masterData = null
            for (let department of Departments) {
                if (department.name === departmentData) {
                    masterData = Roles.filter((role) => role.departments.includes(department.did))
                    break
                }
            }
            if (masterData) {
                setRoleMasterData(masterData)
            }
            else {
                setRoleMasterData(Roles)
            }
        }
        else {
            setRoleMasterData(Roles)
        }
    }, [departmentData])

    ///////////////// Input Validation /////////////////
    function checkEmptyFields() {
        if (firstName.length === 0) {
            Alert.alert('Notice', 'You forgot to fill in the first name.')
        }
        else if (lastName.length === 0) {
            Alert.alert('Notice', 'You forgot to fill in the last name.')
        }
        else if (username.length === 0) {
            Alert.alert('Notice', 'You forgot to fill in the username.')
        }
        else if (contactEmail.length === 0) {
            Alert.alert('Notice', 'You forgot to fill in the contact email.')
        }
        else if (departmentData === 'None') {
            Alert.alert('Notice', 'You forgot to choose the department.')
        }
        else if (roleData === 'None') {
            Alert.alert('Notice', 'You forgot to fill in the role.')
        }
        else {
            noEmptyFields = true
            return
        }
    }

    function checkEmail() {
        if (!contactEmail.includes('@') || !contactEmail.includes('.')) {
            Alert.alert('Notice', 'The contact email is invalid.')
        }
        else {
            validEmail = true
            return
        }
    }

    function checkUsername() {
        for (let staff of Staff) {
            if (staff.username === username) {
                Alert.alert('Notice', 'This username already exists.')
                return
            }
        }
        validUsername = true
        return
    }
    ///////////////////////////////////////////////////

    function addStaff() {
        // validate the inputs
        checkEmptyFields()
        checkUsername()
        checkEmail()
        if (noEmptyFields && validEmail && validUsername) {
            // then, add the new staff to the database
            // finally, go back to staff management screen
            prop.navigation.goBack()
        }
    }

    return (
        <SafeAreaView style={styles.root}>
            <StatusBar barStyle="light-content" />
            <View style={styles.topFrame}>
                <View style={styles.topLeftFrame}>
                    <TouchableOpacity style={styles.navButton} onPress={() => {prop.navigation.goBack()}}>
                        <Ionicons name="arrow-back-circle" size={40} color="snow" />
                        <Text style={styles.navText}>Staff</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.topRightFrame}>
                    <TouchableOpacity style={styles.saveButton} onPress={addStaff}>
                        <Text style={styles.saveText}>Add</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView contentContainerStyle={styles.inputsFrame}>
                <Text style={styles.inputPrompt}>First Name:</Text>
                <TextInput 
                    style={styles.inputField}
                    value={firstName}
                    onChangeText={(text) => {setFirstName(text)}}
                    autoCorrect={false}
                />
                <Text style={styles.inputPrompt}>Last Name:</Text>
                <TextInput 
                    style={styles.inputField}
                    value={lastName}
                    onChangeText={(text) => {setLastName(text)}}
                    autoCorrect={false}
                />
                <Text style={styles.inputPrompt}>Username:</Text>
                <TextInput 
                    style={styles.inputField}
                    value={username}
                    onChangeText={(text) => {setUsername(text)}}
                    autoCorrect={false}
                />
                <Text style={styles.inputPrompt}>Contact Email:</Text>
                <TextInput 
                    style={styles.inputField}
                    value={contactEmail}
                    onChangeText={(text) => {setContactEmail(text)}}
                    autoCorrect={false}
                />
                <Text style={styles.inputPrompt}>Department:</Text>
                <RoleDepartmentDropdown masterData={Departments} curData={departmentData} setCurData={setDepartmentData} />
                <Text style={styles.inputPrompt}>Role:</Text>
                <RoleDepartmentDropdown masterData={roleMasterData} curData={roleData} setCurData={setRoleData} />
                <TouchableOpacity style={styles.saveButton} onPress={addStaff}>
                    <Text style={styles.saveText}>Add</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}
//////////////////////////////////////////

/////////////// Styles /////////////////
const styles = StyleSheet.create({
    root: {
        height: '100%', 
        backgroundColor: 'black',
    },

    topFrame: {
        width: '100%',
        flexDirection: 'row',
    },

    topLeftFrame: {
        width: '50%',
    },

    topRightFrame: {
        width: '50%',
        alignItems: 'flex-end',
        paddingTop: 30,
        paddingRight: 20,
    },

    navButton: {
        marginLeft: 20,
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 50,
        alignItems: 'center',
    },

    navText: {
        marginLeft: 12,
        fontSize: 22,
        color: 'snow'
    },

    inputsFrame: {
        width: '100%',
        paddingBottom: 100,
        alignItems: 'center',
    },

    inputPrompt: {
        fontSize: 27,
        color: 'snow',
        marginLeft: 20,
        marginBottom: 12,
    },

    inputField: {
        width: 300,
        height: 40,
        borderBottomWidth: 3,
        borderColor: 'grey',
        color: 'snow',
        fontSize: 22,
        marginBottom: 90,
    },

    saveButton: {
        width: 130,
        height: 45,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
    },

    saveText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
})
///////////////////////////////////////