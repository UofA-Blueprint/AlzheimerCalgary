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
import { Feather } from '@expo/vector-icons';

export default function Staff(prop: any) {
  function addStaff() {}

  function showStaffFiltersPopUp() {}

  return (
    <SafeAreaView style={styles.root}>
      <StatusBar barStyle="dark-content" />
      <TouchableOpacity style={styles.backToDashboardButton} onPress={() => prop.navigation.goBack()}>
        <Ionicons name="arrow-back-circle" size={40} color="snow" />
        <Text style={styles.dashboardText}>Dashboard</Text>
      </TouchableOpacity>
      <View style={styles.titleAndAddStaffFrame}>
        <View style={styles.titleFrame}>
          <Text style={styles.title}>STAFF</Text>
        </View>
        <View style={styles.addStaffFrame}>
          <TouchableOpacity onPress={addStaff}>
            <Ionicons name="person-add" size={35} color="snow"/>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        <View style={styles.searchAndFilterFrame}>
          <View style={styles.searchOuterFrame}>
            <View style={styles.searchInnerFrame}>
              <Feather name="search" size={30} color="white" />
              <TextInput style={styles.searchInputField} placeholder="Search staff" placeholderTextColor='grey' autoCorrect={false}/>
            </View>
          </View>
          <View style={styles.filterButtonFrame}>
            <TouchableOpacity style={styles.filterButton} onPress={showStaffFiltersPopUp}>
              <Ionicons name="filter" size={30} color="black" />
              <Text style={styles.filterButtonText}>Filters</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  root: {
    height: '100%', 
    backgroundColor: 'black',
  },

  backToDashboardButton: {
    marginLeft: 30,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },

  dashboardText: {
    fontSize: 22,
    color: 'snow',
    marginLeft: 15
  },

  titleAndAddStaffFrame: {
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
    color: 'white',
    fontWeight: 'bold',
  },

  addStaffFrame: {
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
    borderBottomWidth: 2,
    borderColor: 'snow',
    flexDirection: 'row',
    alignItems: 'center',
  },

  searchInputField: {
    paddingLeft: 15,
    fontSize: 19,
    color: 'snow',
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
    backgroundColor: '#C5C6D0',
    borderRadius: 20,
    paddingLeft: 20,
  },

  filterButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 15,
  },
})
