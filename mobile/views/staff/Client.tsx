///////////////////////////// Import Dependencies //////////////////////////////
import { 
  Animated,
  Text, 
  ScrollView,
  View, 
  StyleSheet, 
  TouchableOpacity, 
  TextInput,
  StatusBar } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context"
import { Ionicons } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useState, useEffect, useRef } from 'react'

import ClientFiltersPopUp from  '../../components/ClientFiltersPopUp'
////////////////////////////////////////////////////////////////////////////

////////////////////////// Component ////////////////////////////
export default function Client(prop: any) {
  //////// Mock Data ////////
  const Clients = [
    {
      cid: '000001',
      firstname: 'Clark',
      lastname: 'Smith',
      birthDay: 15,
      birthMonth: 5,
      birthYear: 1942,
      usuallyComesIn: ['Mon', 'Wed', 'Fri'],
      avatar: '',
      notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },

    {
      cid: '000002',
      firstname: 'John',
      lastname: 'Kent',
      birthDay: 13,
      birthMonth: 3,
      birthYear: 1939,
      usuallyComesIn: ['Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
      avatar: '',
      notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },

    {
      cid: '000003',
      firstname: 'Tom',
      lastname: 'Milton',
      birthDay: 19,
      birthMonth: 6,
      birthYear: 1955,
      usuallyComesIn: ['Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
      avatar: '',
      notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },

    {
      cid: '000004',
      firstname: 'Lucas',
      lastname: 'Holland',
      birthDay: 20,
      birthMonth: 1,
      birthYear: 1940,
      usuallyComesIn: ['Tue', 'Wed', 'Sat', 'Sun'],
      avatar: '',
      notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },

    {
      cid: '000005',
      firstname: 'Tony',
      lastname: 'Boothe',
      birthDay: 31,
      birthMonth: 3,
      birthYear: 1935,
      usuallyComesIn: ['Tue', 'Wed', 'Sun'],
      avatar: '',
      notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },

    {
      cid: '000006',
      firstname: 'Tanya',
      lastname: 'Phan',
      birthDay: 6,
      birthMonth: 12,
      birthYear: 1965,
      usuallyComesIn: ['Tue', 'Thurs', 'Sat'],
      avatar: '',
      notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },

    {
      cid: '000007',
      firstname: 'Nicole',
      lastname: 'Ross',
      birthDay: 17,
      birthMonth: 10,
      birthYear: 1945,
      usuallyComesIn: ['Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
      avatar: '',
      notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },

    {
      cid: '000008',
      firstname: 'Peggy',
      lastname: 'Collins',
      birthDay: 9,
      birthMonth: 2,
      birthYear: 1982,
      usuallyComesIn: ['Mon', 'Tue', 'Thurs', , 'Sat', 'Sun'],
      avatar: '',
      notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },

    {
      cid: '000009',
      fristname: 'Frank',
      lastname: 'Jamison',
      birthDay: 3,
      birthMonth: 5,
      birthYear: 1962,
      usuallyComesIn: ['Mon', 'Thurs', 'Fri', 'Sat'],
      avatar: '',
      notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },

    {
      cid: '000010',
      firstname: 'Mark',
      lastname: 'Lampard',
      birthDay: 4,
      birthMonth: 5,
      birthYear: 1940,
      usuallyComesIn: ['Thurs', 'Fri', 'Sat', 'Sun'],
      avatar: '',
      notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },

    {
      cid: '000011',
      firstname: 'Richard',
      lastname: 'Smith',
      birthDay: 5,
      birthMonth: 5,
      birthYear: 1946,
      usuallyComesIn: ['Mon', 'Tue', 'Sat', 'Sun'],
      avatar: '',
      notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },

    {
      cid: '000012',
      firstname: 'Jennifer',
      lastname:  'Holland',
      birthDay: 9,
      birthMonth: 9,
      birthYear: 1957,
      usuallyComesIn: ['Mon', 'Tue', 'Wed', 'Thurs'],
      avatar: '',
      notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ]

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
  /////////////////////////

  const [ clientFiltersPopUpVisible, setClientFiltersPopUpVisible ] = useState(false)
  const [ FilteredClients, setFilteredClients ] = useState(Clients)
  const [ searchedClient, setSearchedClient ] = useState("")
  const [ allClientsFilter, setAllClientsFilter ] = useState(true)
  const [ onCampusFilter, setOnCampusFilter ] = useState(false)
  const [ offCampusFilter, setOffCampusFilter ] = useState(false)
  const scaleValue = useRef(new Animated.Value(0)).current;

  const stateTracker = {
    allClients: true,
    onCampus: false,
    offCampus: false
  }

  function openAddClientScreen () {
    prop.navigation.navigate('AddClient');
  }

  function clientSearchHandler(text: any) {
    if (text) {
      const filteredData = FilteredClients.filter((client) => {
        const name = client.firstname + ' ' + client.lastname
        return name.includes(text)
      })
      setFilteredClients(filteredData)
      setSearchedClient(text)
    } else {
      setFilteredClients(Clients)
      setSearchedClient(text)
    }
  }

  function openClientFiltersPopUp() {
    setClientFiltersPopUpVisible(true)
    Animated.spring(scaleValue, {toValue: 1, duration: 300, useNativeDriver: true}).start();
  }

  function closeClientFiltersPopUp() {
    setTimeout(() => setClientFiltersPopUpVisible(false), 100);
    Animated.timing(scaleValue, {toValue: 0, duration: 100, useNativeDriver: true}).start();
  }

  useEffect(() => {
    let filteredData = Clients
    if (onCampusFilter && (stateTracker.allClients || stateTracker.offCampus)) {
      filteredData = filteredData.filter((client) => {
        return OnCampus.find((element) => {return element.cid === client.cid})
      })
      stateTracker.onCampus = true
      stateTracker.allClients = false
      setAllClientsFilter(false)
      stateTracker.offCampus = false
      setOffCampusFilter(false)
      setFilteredClients(filteredData)
    }
    if (offCampusFilter && (stateTracker.allClients || stateTracker.onCampus)) {
      filteredData = []
      for (let client of Clients) {
        let isOffCampus = true
        for (let element of OnCampus) {
          if (client.cid === element.cid) {
            isOffCampus = false
            break
          }
        }
        if (isOffCampus) {
          filteredData.push(client)
        }
      }
      stateTracker.offCampus = true
      stateTracker.onCampus = false
      setOnCampusFilter(false)
      stateTracker.allClients = false
      setAllClientsFilter(false)
      setFilteredClients(filteredData)
    }
    if (allClientsFilter && !stateTracker.onCampus && !stateTracker.offCampus) {
      stateTracker.allClients = true
      setOffCampusFilter(false)
      setOffCampusFilter(false)
      setFilteredClients(Clients)
    }
    if (allClientsFilter && (stateTracker.onCampus || stateTracker.offCampus)) {
      stateTracker.allClients = true
      stateTracker.onCampus = false
      setOnCampusFilter(false)
      stateTracker.offCampus = false
      setOffCampusFilter(false)
      setFilteredClients(Clients)
    }
  }, [allClientsFilter, onCampusFilter, offCampusFilter])

  const [ clientsOnCampus, setClientsOnCampus ] = useState(OnCampus)

  function updateClientsOnCampusInDatabase() {}

  const ClientView = ({ client }) => {
    let initialState = false
    for (let clientObject of OnCampus) {
      if (clientObject.cid === client.cid) {
        initialState = true
        break
      }
    }
    function changeOnCampusStatus(cid, newStatus) {
      if (newStatus) {
        const newOnCampusClients = [...clientsOnCampus, {cid: cid}]
        setClientsOnCampus(newOnCampusClients)
        return
      }
      else {
        const newOnCampusClients = clientsOnCampus.filter((clientObject) => {return clientObject.cid !== cid})
        setClientsOnCampus(newOnCampusClients)
        return
      }
    }
    return (
      <View style={styles.clientView}>
        <TouchableOpacity style={styles.upperFrame} onPress={() => {prop.navigation.navigate('ClientBio', { client: client })}}>
          <View style={styles.avatarFrame}>
            {
              /* This is a placeholder avatar */
              <Ionicons name="person-circle-outline" size={60} color="black" />
            }
          </View>
          <View style={styles.nameFrame}>
            <Text style={styles.clientNameText}>{client.firstname} {client.lastname}</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.clientBirthdayText}>{client.birthYear}/{client.birthMonth}/{client.birthDay}</Text>
        <View style={styles.clientStatusFrame}>
          <Text style={styles.clientStatusText}>Status:</Text>
          {
            clientsOnCampus.find((element) => {return element.cid === client.cid}) ?
              <FontAwesome name="circle" size={30} color="#99EDC3" />
            : <FontAwesome name="circle" size={30} color="#C5C6D0" />
          }
        </View>
        {
          clientsOnCampus.filter((clientObject) => {return clientObject.cid === client.cid}).length > 0 ?
            <TouchableOpacity style={[styles.checkInCheckOutButton, {backgroundColor: '#C5C6D0'}]} onPress={() => changeOnCampusStatus(client.cid, false)}>
              <MaterialCommunityIcons name="home-remove" size={27} color="white" />
              <Text style={styles.checkInCheckOutText}>Check-out</Text>
            </TouchableOpacity>
          :
            <TouchableOpacity style={[styles.checkInCheckOutButton, {backgroundColor: '#8d99ae'}]} onPress={() => changeOnCampusStatus(client.cid, true)}>
              <MaterialCommunityIcons name="home-plus" size={27} color="white" />
              <Text style={styles.checkInCheckOutText}>Check-in</Text>
            </TouchableOpacity>
        }
      </View>
  )}

  return (
    <SafeAreaView style={styles.root}>
      <StatusBar barStyle="dark-content" />
      <TouchableOpacity style={styles.backToDashboardButton} onPress={() => prop.navigation.goBack()}>
        <Ionicons name="arrow-back-circle" size={40} color="#2b2d42" />
        <Text style={styles.dashboardText}>Dashboard</Text>
      </TouchableOpacity>
      <View style={styles.titleAndAddClientFrame}>
        <View style={styles.titleFrame}>
          <Text style={styles.title}>CLIENTS</Text>
        </View>
        <View style={styles.addClientFrame}>
          <TouchableOpacity onPress={openAddClientScreen}>
            <Ionicons name="person-add" size={35} color="#2b2d42"/>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.searchAndFilterFrame}>
        <View style={styles.searchOuterFrame}>
          <View style={styles.searchInnerFrame}>
            <Feather name="search" size={30} color="#8d99ae" />
            <TextInput 
              style={styles.searchInputField} 
              placeholder="Search client" 
              placeholderTextColor='grey' 
              value={searchedClient}
              onChangeText={(text) => clientSearchHandler(text)}
              autoCorrect={false}
            />
          </View>
        </View>
        <View style={styles.filterButtonFrame}>
          <TouchableOpacity style={styles.filterButton} onPress={openClientFiltersPopUp}>
            <Ionicons name="filter" size={30} color="snow" />
            <Text style={styles.filterButtonText}>Filters</Text>
          </TouchableOpacity>
        </View>
      </View>
      {
        clientFiltersPopUpVisible ?
          <ClientFiltersPopUp 
            allClientsFilter={allClientsFilter} 
            setAllClientsFilter={setAllClientsFilter}
            onCampusFilter={onCampusFilter}
            setOnCampusFilter={setOnCampusFilter}
            offCampusFilter={offCampusFilter}
            setOffCampusFilter={setOffCampusFilter}
            closeClientFiltersPopUp={closeClientFiltersPopUp}
            scaleValue={scaleValue}
          />
        : null
      }
      <ScrollView>
        <View style={styles.clientsContainer}>
          {
            FilteredClients.map((client) => {
              return (<ClientView key={client.cid} client={client}/>)
            })
          }
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
//////////////////////////////////////////////////////////////////////////////////////

///////////////////////// Styles //////////////////////////
const styles = StyleSheet.create({
  root: {
    height: '100%', 
    backgroundColor: 'white',
  },

  backToDashboardButton: {
    marginTop: 20,
    marginLeft: 30,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },

  dashboardText: {
    fontSize: 22,
    color: 'black',
    marginLeft: 15
  },

  titleAndAddClientFrame: {
    width: '100%',
    marginTop: 15,
    flexDirection: 'row',
  },

  titleFrame: {
    width: '50%',
    justifyContent: 'center',
    paddingLeft: 30,
  },

  title: {
    fontSize: 50,
    color: '#2b2d42',
    fontWeight: 'bold',
  },

  addClientFrame: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 30,
  },

  searchAndFilterFrame: {
    width: '100%',
    marginTop: 20,
    flexDirection: 'row',
  },

  searchOuterFrame: {
    width: '50%',
    justifyContent: 'center',
    paddingLeft: 30,
  },
  
  searchInnerFrame: {
    width: '95%',
    height: 60,
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderColor: 'black',
    alignItems: 'center',
  },

  searchInputField: {
    paddingLeft: 15,
    fontSize: 19,
    color: 'black',
  },

  filterButtonFrame: {
    width: '50%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingRight: 30,
  },

  filterButton: {
    width: 145,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2b2d42',
    borderRadius: 20,
    paddingLeft: 20,
  },

  filterButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'snow',
    marginLeft: 15,
  },

  clientView: {
    width: 280,
    paddingLeft: 20,
    paddingVertical: 20,
    backgroundColor: 'white',
    margin: 40,
    borderRadius: 20,
    shadowColor: "grey",
    shadowOffset: {
      width: 8,
      height: 12,
    },
    shadowOpacity: 0.58,
    elevation: 22,
  },

  upperFrame: {
    width: 260,
    flexDirection: 'row',
  },

  avatarFrame: {
    width: 60,
    justifyContent: 'center',
  },

  nameFrame: {
    width: 200,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },

  clientNameText: {
    fontSize: 23,
    fontWeight: 'bold',
    marginRight: 20,
    color: '#2b2d42',
  },

  clientBirthdayText: {
    marginTop: 10,
    fontSize: 20,
    color: 'black'
  },

  clientStatusFrame: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },

  clientStatusText: {
    fontSize: 20,
    marginRight: 10,
    color: 'grey',
  },

  checkInCheckOutButton: {
    marginTop: 20,
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

  clientContainer: {
    width: '100%',
    paddingVertical: 30,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },

  clientsContainer: {
    width: '100%',
    paddingVertical: 30,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
})
///////////////////////////////////////////////////////////