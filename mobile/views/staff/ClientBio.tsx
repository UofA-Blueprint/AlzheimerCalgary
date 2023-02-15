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
import { useState } from 'react'
import { SafeAreaView } from "react-native-safe-area-context"
import { Ionicons } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'
/////////////////////////////////////////////////////

/////////////// Component ////////////////
export default function ClientBio(prop: any) {
    ////////////// Mock Data //////////////
    const OnCampus = [
        {
          cid: '000001'
        },
        {
          cid: '000004'
        },
        {
          cid: '000007'
        },
        {
          cid: '000008'
        },
        {
          cid: '000010'
        },
    ]
    ///////////////////////////////////////

    const client = prop.route.params.client
    let initialState
    if (OnCampus.filter((clientObject) => {return clientObject.cid === client.cid}).length > 0) {
        initialState = true
    } else {initialState = false}
    const [ isOnCampus, setIsOnCampus ] = useState(initialState)

    function openCaregiversPopUp() {}

    function updateClientsOnCampus(newStatus) {
        // update status
        setIsOnCampus(newStatus)
        // update database
    }

    return (
        <SafeAreaView style={styles.root}>
            <StatusBar barStyle="dark-content" />
            <TouchableOpacity style={styles.backButton} onPress={() => prop.navigation.goBack()}>
                <Ionicons name="arrow-back-circle" size={40} color="#2b2d42" />
                <Text style={styles.navText}>Clients</Text>
            </TouchableOpacity>
            <ScrollView>
                <View style={styles.topFrame}>
                    <View style={styles.leftTop}>
                        <Ionicons name="person-circle-outline" size={150} color="black" />
                        <View style={styles.nameAndID}>
                            <Text style={styles.clientName}>{client.firstname}, {client.lastname}</Text>
                            <Text style={styles.clientID}>#{client.cid}</Text>
                        </View>
                    </View>
                    <View style={styles.rightTop}>
                        <TouchableOpacity style={styles.viewCaregiversButton} onPress={openCaregiversPopUp}>
                            <Ionicons name="people" size={30} color="#edf2f4" />
                            <Text style={styles.viewCaregiversText}>Caregivers</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.notesFrame}>
                    <Text style={styles.notesTitle}>Notes:</Text>
                    <Text style={styles.notesText}>{client.notes}</Text>
                </View>
                <View style={styles.statusFrame}>
                    <Text style={styles.statusTitle}>Status:</Text>
                    {
                        isOnCampus ?
                            <>
                                <View style={styles.statusInfo}>
                                    <FontAwesome name="circle" size={30} color="#99EDC3" />
                                    <Text style={styles.statusText}>On-campus</Text>
                                </View>
                                <TouchableOpacity style={[styles.checkInCheckOutButton, {backgroundColor: '#C5C6D0'}]} onPress={() => updateClientsOnCampus(false)}>
                                    <MaterialCommunityIcons name="home-remove" size={27} color="white" />
                                    <Text style={styles.checkInCheckOutText}>Check-out</Text>
                                </TouchableOpacity>
                            </>
                        : 
                            <>
                                <View style={styles.statusInfo}>
                                    <FontAwesome name="circle" size={30} color="#C5C6D0" />
                                    <Text style={styles.statusText}>Off-campus</Text>
                                </View>
                                <TouchableOpacity style={[styles.checkInCheckOutButton, {backgroundColor: '#8d99ae'}]} onPress={() => updateClientsOnCampus(true)}>
                                    <MaterialCommunityIcons name="home-remove" size={27} color="white" />
                                    <Text style={styles.checkInCheckOutText}>Check-in</Text>
                                </TouchableOpacity>
                            </>
                    }
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
        backgroundColor: 'white',
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
        marginLeft: 15
    },

    topFrame: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 20,
    },

    leftTop: {
        width: '50%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        paddingLeft: 30,
    },

    nameAndID: {
        marginLeft: 20,
    },

    clientName: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#8d99ae'
    },

    clientID: {
        fontSize: 25,
        color: '#2b2d42'
    },

    rightTop: {
        width: '50%',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingVertical: 15,
        paddingRight: 30,
    },

    viewCaregiversButton: {
        width: 200,
        height: 50,
        backgroundColor: '#2b2d42',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },

    viewCaregiversText: {
        fontSize: 20,
        color: '#edf2f4',
        marginLeft: 15,
    },

    notesFrame: {
        width: '100%',
        marginTop: 30,
        paddingHorizontal: 30,
    },

    notesTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#2b2d42',
    },

    notesText: {
        color: '#2b2d42',
        marginTop: 10,
        fontSize: 20,
    },

    statusFrame: {
        width: '100%',
        marginTop: 35,
        paddingLeft: 30
    },

    statusTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#2b2d42',
    },

    statusInfo: {
        marginTop: 10,
        flexDirection: 'row'
    },

    statusText: {
        fontSize: 20,
        marginLeft: 15,
        color: '#8d99ae',
        fontStyle: 'italic',
    },

    checkInCheckOutButton: {
        marginTop: 10,
        width: 165,
        height: 40,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    checkInCheckOutText: {
        fontSize: 18,
        marginLeft: 10,
        color: 'white'
    },
})
///////////////////////////////////