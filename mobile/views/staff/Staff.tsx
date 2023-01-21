///////////////////////// Import Dependencies //////////////////////////////
import { useState } from 'react'
import { 
  Text, 
  ScrollView,
  View, 
  StyleSheet, 
  TouchableOpacity, 
  TextInput,
  StatusBar,
  Dimensions } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context"
import { Ionicons } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'
import StaffFiltersPopUp from '../../components/StaffFiltersPopUp'
import CheckBox from '../../components/CheckBox'
//////////////////////////////////////////////////////////////////////////

////////////////////////// Component /////////////////////////////
export default function Staff(prop: any) {
  /*--------------------------------- Mock Data ---------------------------------*/
  const Departments = [
    {
      id: 1,
      name: 'Finance'
    },

    {
      id: 2,
      name: 'Customer Service'
    },

    {
      id: 3,
      name: 'Activities Management'
    },

    {
      id: 4,
      name: 'Management'
    },
  ]

  const OnDuty = [
    'Tony Phan',
    'Tom Holland',
    'Tanya Boothe',
    'Peggy Ross',
    'Jennifer Smith'
  ]

  const Staff = [
    {
      username: 'John Smith',
      role: 'staff',
      department: 1,
      hash_password: 'a;rgijae;ogjao;erigj',
      created: '2023-01-01'
    },

    {
      username: 'Clark Kent',
      role: 'staff',
      department: 2,
      hash_password: 'a;rgijae;ogjao;erigj',
      created: '2023-02-01'
    },

    {
      username: 'Lucas Milton',
      role: 'staff',
      department: 3,
      hash_password: 'a;rgijae;ogjao;erigj',
      created: '2023-02-15'
    },

    {
      username: 'Tom Holland',
      role: 'staff',
      department: 4,
      hash_password: 'a;rgijae;ogjao;erigj',
      created: '2023-02-09'
    },

    {
      username: 'Tanya Boothe',
      role: 'staff',
      department: 1,
      hash_password: 'a;rgijae;ogjao;erigj',
      created: '2023-05-01'
    },

    {
      username: 'Tony Phan',
      role: 'staff',
      department: 2,
      hash_password: 'a;rgijae;ogjao;erigj',
      created: '2023-05-05'
    },

    {
      username: 'Peggy Ross',
      role: 'staff',
      department: 3,
      hash_password: 'a;rgijae;ogjao;erigj',
      created: '2023-02-15'
    },

    {
      username: 'Nicole Collins',
      role: 'staff',
      department: 4,
      hash_password: 'a;rgijae;ogjao;erigj',
      created: '2023-02-09'
    },

    {
      username: 'Mark Jamison',
      role: 'staff',
      department: 1,
      hash_password: 'a;rgijae;ogjao;erigj',
      created: '2023-01-01'
    },

    {
      username: 'Frank Lampard',
      role: 'staff',
      department: 2,
      hash_password: 'a;rgijae;ogjao;erigj',
      created: '2023-02-01'
    },

    {
      username: 'Jennifer Smith',
      role: 'staff',
      department: 3,
      hash_password: 'a;rgijae;ogjao;erigj',
      created: '2023-02-15'
    },

    {
      username: 'Richard Holland',
      role: 'staff',
      department: 4,
      hash_password: 'a;rgijae;ogjao;erigj',
      created: '2023-02-09'
    },

  ]
  /*----------------------------------------------------------------------------*/

  const [ staffFiltersPopUpVisible, setStaffFiltersPopUpVisible ] = useState(false)
  const [ filteredStaff, setFilteredStaff ] = useState(Staff)
  const [ searchedStaff, setSearchedStaff ] = useState("")
  const [ allStaffFilter, setAllStaffFilter ] = useState(true)
  const [ onDutyFilter, setOnDutyFilter ] = useState(false)
  const departmentFiltersStates = {}
  for (let department of Departments) {
    departmentFiltersStates[department.id] = useState(true)
  }

  const departmentRenderItems = Departments.map((department: any) => {
    const checkBoxValue = departmentFiltersStates[department.id][0]
    const setCheckBoxValue = departmentFiltersStates[department.id][1]
    return (
        <View key={department.id} style={{ marginLeft: 10, marginTop: 10 }}>
            <CheckBox value={checkBoxValue} setValue={setCheckBoxValue} label={department.name} checkBoxStyle={styles.dropDownCheckbox}/>
        </View>
    )
  })

  const staffViewWidth = Dimensions.get('window').width / 4
  const staffPerRow = (Dimensions.get('window').width - 60) / staffViewWidth  // 60: hypothetical total horizontal padding of the ScrollView
  const staffRows = filteredStaff.length / staffPerRow

  function addStaff() {}

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
      <View style={styles.searchAndFilterFrame}>
        <View style={styles.searchOuterFrame}>
          <View style={styles.searchInnerFrame}>
            <Feather name="search" size={30} color="white" />
            <TextInput style={styles.searchInputField} placeholder="Search staff" placeholderTextColor='grey' autoCorrect={false}/>
          </View>
        </View>
        <View style={styles.filterButtonFrame}>
          <TouchableOpacity style={styles.filterButton} onPress={() => setStaffFiltersPopUpVisible(true)}>
            <Ionicons name="filter" size={30} color="black" />
            <Text style={styles.filterButtonText}>Filters</Text>
          </TouchableOpacity>
        </View>
      </View>
      {
        staffFiltersPopUpVisible ?
          <StaffFiltersPopUp 
            setVisible={setStaffFiltersPopUpVisible} 
            allStaffFilter={allStaffFilter} 
            setAllStaffFilter={setAllStaffFilter}
            onDutyFilter={onDutyFilter}
            setOnDutyFilter={setOnDutyFilter}
            departmentRenderItems={departmentRenderItems}
          />
        : null
      }
    </SafeAreaView>
  )
}
//////////////////////////////////////////////////////////////////////////

////////////////////////// Styles /////////////////////////////
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

  filtersFrame: {},

  dropDownCheckbox: {
    boxSize: 40,
    boxColor: 'grey',
    labelSize: 21,
    labelWeight: 'normal',
  },
})
//////////////////////////////////////////////////////////////////////////