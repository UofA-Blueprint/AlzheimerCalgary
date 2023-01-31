import { 
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
import { useState, useEffect } from 'react'

export default function Client(prop: any) {
  const Clients = [
    {
      cid: 1,
      firstname: 'Clark',
      lastname: 'Smith',
      birthDay: 15,
      birthMonth: 5,
      birthYear: 1942,
      usuallyComesIn: ['Mon', 'Wed', 'Fri'],
    },

    {
      cid: 2,
      firstname: 'John',
      lastname: 'Kent',
      birthDay: 13,
      birthMonth: 3,
      birthYear: 1939,
      usuallyComesIn: ['Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
    },

    {
      cid: 3,
      firstname: 'Tom',
      lastname: 'Milton',
      birthDay: 19,
      birthMonth: 6,
      birthYear: 1955,
      usuallyComesIn: ['Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
    },

    {
      cid: 4,
      firstname: 'Lucas',
      lastname: 'Holland',
      birthDay: 20,
      birthMonth: 1,
      birthYear: 1940,
      usuallyComesIn: ['Tue', 'Wed', 'Sat', 'Sun'],
    },

    {
      cid: 5,
      firstname: 'Tony',
      lastname: 'Boothe',
      birthDay: 31,
      birthMonth: 3,
      birthYear: 1935,
      usuallyComesIn: ['Tue', 'Wed', 'Sun'],
    },

    {
      cid: 6,
      firstname: 'Tanya',
      lastname: 'Phan',
      birthDay: 6,
      birthMonth: 12,
      birthYear: 1965,
      usuallyComesIn: ['Tue', 'Thurs', 'Sat'],
    },

    {
      cid: 7,
      firstname: 'Nicole',
      lastname: 'Ross',
      birthDay: 17,
      birthMonth: 10,
      birthYear: 1945,
      usuallyComesIn: ['Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
    },

    {
      cid: 8,
      firstname: 'Peggy',
      lastname: 'Collins',
      birthDay: 9,
      birthMonth: 2,
      birthYear: 1982,
      usuallyComesIn: ['Mon', 'Tue', 'Thurs', , 'Sat', 'Sun'],
    },

    {
      cid: 9,
      fristname: 'Frank',
      lastname: 'Jamison',
      birthDay: 3,
      birthMonth: 5,
      birthYear: 1962,
      usuallyComesIn: ['Mon', 'Thurs', 'Fri', 'Sat'],
    },

    {
      cid: 10,
      firstname: 'Mark',
      lastname: 'Lampard',
      birthDay: 4,
      birthMonth: 5,
      birthYear: 1940,
      usuallyComesIn: ['Thurs', 'Fri', 'Sat', 'Sun'],
    },

    {
      cid: 11,
      firstname: 'Richard',
      lastname: 'Smith',
      birthDay: 5,
      birthMonth: 5,
      birthYear: 1946,
      usuallyComesIn: ['Mon', 'Tue', 'Sat', 'Sun'],
    },

    {
      cid: 12,
      firstname: 'Jennifer',
      lastname:  'Holland',
      birthDay: 9,
      birthMonth: 9,
      birthYear: 1957,
      usuallyComesIn: ['Mon', 'Tue', 'Wed', 'Thurs'],
    },
  ]

  const OnCampus = [
    {
      cid: 1
    },
    {
      cid: 5
    },
    {
      cid: 7
    },
    {
      cid: 3
    },
    {
      cid: 10
    },
  ]

  const [ clientFiltersPopUpVisible, setClientFiltersPopUpVisible ] = useState(false)
  const [ FilteredClients, setFilteredClients ] = useState(Clients)
  const [ searchedClient, setSearchedClient ] = useState("")

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

  const ClientView = ({ client }) => {
    return (
      <TouchableOpacity style={styles.clientView} onPress={() => {prop.navigation.navigate('ClientBio')}}>
        <Text style={styles.clientNameText}>{client.firstname} {client.lastname}</Text>
        <Text style={styles.clientBirthdayText}>{client.birthYear}/{client.birthMonth}/{client.birthDay}</Text>
        <View style={styles.clientStatusFrame}>
          <Text style={styles.clientStatusText}>Status:</Text>
          {
            OnCampus.find((element) => {return element.cid === client.cid}) ?
              <FontAwesome name="circle" size={30} color="#99EDC3" />
            : <FontAwesome name="circle" size={30} color="grey" />
          }
        </View>
      </TouchableOpacity>
  )}

  return (
    <SafeAreaView style={styles.root}>
      <StatusBar barStyle="dark-content" />
      <TouchableOpacity style={styles.backToDashboardButton} onPress={() => prop.navigation.goBack()}>
        <Ionicons name="arrow-back-circle" size={40} color="black" />
        <Text style={styles.dashboardText}>Dashboard</Text>
      </TouchableOpacity>
      <View style={styles.titleAndAddClientFrame}>
        <View style={styles.titleFrame}>
          <Text style={styles.title}>Clients</Text>
        </View>
        <View style={styles.addClientFrame}>
          <TouchableOpacity onPress={openAddClientScreen}>
            <Ionicons name="person-add" size={35} color="black"/>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.searchAndFilterFrame}>
        <View style={styles.searchOuterFrame}>
          <View style={styles.searchInnerFrame}>
            <Feather name="search" size={30} color="#C5C6D0" />
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
          <TouchableOpacity style={styles.filterButton} onPress={() => setClientFiltersPopUpVisible(true)}>
            <Ionicons name="filter" size={30} color="snow" />
            <Text style={styles.filterButtonText}>Filters</Text>
          </TouchableOpacity>
        </View>
      </View>
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
    color: 'black',
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
    borderColor: '#C5C6D0',
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
    backgroundColor: 'black',
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
    width: 250,
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

  clientNameText: {
    fontSize: 23,
    fontWeight: 'bold',
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
