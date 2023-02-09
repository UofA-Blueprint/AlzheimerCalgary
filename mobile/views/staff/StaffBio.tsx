///////////////// Import Dependencies ////////////////
import {
    Alert,
    Text, 
    ScrollView,
    View, 
    StyleSheet, 
    TouchableOpacity, 
    Linking,
    StatusBar } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context"
import { Ionicons } from '@expo/vector-icons'
/////////////////////////////////////////////////////

/////////////// Component ////////////////
export default function StaffBio(prop: any) {
    /*--------------------------------- Mock Data ---------------------------------*/
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
    ///////////////////////////

    const staff = prop.route.params.staff
    let role
    for (let item of Roles) {
        if (item.rid === staff.roleId) {
            role = item.name
            break
        }
    }
    let department
    for (let item of Departments) {
        if (item.did === staff.departmentId) {
            department = item.name
            break
        }
    }

    function openEmailApp() {
        Linking.openURL('mailto:' + staff.contactEmail)
    }

    function openUpdateStaffScreen() {
        prop.navigation.navigate('UpdateStaff', { staff: staff })
    }

    function deleteStaff() {
        Alert.alert(
            'Notice',
            'Are you sure you want to remove this staff account?',
            [
                {
                    text: 'Yes',
                    onPress: () => {
                        // remove this staff account from the database
                        // then, go back to the staff screen
                        prop.navigation.navigate('Staff')
                    }
                },
                {
                    text: 'No',
                    onPress: () => {}
                }
            ]
        )
    }

    return (
        <SafeAreaView style={styles.root}>
            <StatusBar barStyle="light-content" />
            <TouchableOpacity style={styles.backButton} onPress={() => prop.navigation.goBack()}>
                <Ionicons name="arrow-back-circle" size={40} color="snow" />
                <Text style={styles.navText}>Staff</Text>
            </TouchableOpacity>
            <ScrollView contentContainerStyle={styles.outerFrame}>
                <View style={styles.innerFrame}>
                    <View style={styles.avatarAndNameFrame}>
                        <View>
                            {
                                /* This is a placeholder avatar */
                                <Ionicons name="person-circle-outline" size={150} color="white" />
                            }
                        </View>
                        <View>
                            <Text style={styles.firstAndLastName}>{staff.firstName}, {staff.lastName}</Text>
                            <Text style={styles.username}>@{staff.username}</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.contactButton} onPress={openEmailApp}>
                        <Text style={styles.contactText}>Contact</Text>
                    </TouchableOpacity>
                    <View style={styles.infoFrame}>
                        <Text style={[styles.infoText, {fontWeight: 'bold' }]}>Department:   </Text>
                        <Text style={styles.infoText}>{department}</Text>
                    </View>
                    <View style={styles.infoFrame}>
                        <Text style={[styles.infoText, {fontWeight: 'bold' }]}>Role:   </Text>
                        <Text style={styles.infoText}>{role}</Text>
                    </View>
                    <View style={styles.infoFrame}>
                        <Text style={[styles.infoText, {fontWeight: 'bold' }]}>Email:   </Text>
                        <Text style={styles.infoText}>{staff.contactEmail}</Text>
                    </View>
                    <View style={styles.infoFrame}>
                        <Text style={[styles.infoText, {fontWeight: 'bold' }]}>Joined:   </Text>
                        <Text style={styles.infoText}>{staff.created}</Text>
                    </View>
                    <View style={styles.deleteAndUpdateButtonsFrame}>
                        <TouchableOpacity style={styles.updateButton} onPress={openUpdateStaffScreen}>
                            <Text style={styles.updateText}>Update</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.deleteButton} onPress={deleteStaff}>
                            <Text style={styles.deleteText}>Delete</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
/////////////////////////////////////////

////////////// Style ///////////////
const styles = StyleSheet.create({
    root: {
        height: '100%', 
        backgroundColor: 'black',
    },

    backButton: {
        marginTop: 20,
        marginLeft: 30,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    
    navText: {
        fontSize: 22,
        color: 'snow',
        marginLeft: 15
    },

    outerFrame: {
        width: '100%',
        alignItems: 'center',
    },

    innerFrame: {
        paddingHorizontal: 20,

    },

    avatarAndNameFrame: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 40,
    },

    firstAndLastName: {
        fontSize: 50,
        fontWeight: 'bold',
        color: 'white',
        marginLeft: 70,
        marginTop: 12,
        textAlign: 'right',
    },

    username: {
        textAlign: 'right',
        marginLeft: 70,
        color: 'grey',
        fontSize: 26,
        marginTop: 20,
    },

    contactButton: {
        width: 150,
        height: 45,
        borderRadius: 20,
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 50,
    },

    contactText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'snow'
    },

    infoFrame: {
        flexDirection: 'row'
    },

    infoText: {
        fontSize: 29,
        color: 'white',
        marginTop: 20,
    },

    deleteAndUpdateButtonsFrame: {
        flexDirection: 'row',
        marginTop: 60,
        justifyContent: 'center',
    },

    updateButton: {
        width: 160,
        height: 50,
        borderRadius: 30,
        backgroundColor: 'white',
        marginRight: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },

    deleteButton: {
        width: 160,
        height: 50,
        borderRadius: 30,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
    },

    updateText: {
        fontSize: 22,
        fontWeight: 'bold',
    },

    deleteText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white'
    },
})
///////////////////////////////////