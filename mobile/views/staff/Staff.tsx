///////////////////////// Import Dependencies //////////////////////////////
import { useState, useEffect } from 'react'
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
import { FontAwesome } from '@expo/vector-icons'

import StaffFiltersPopUp from '../../components/StaffFiltersPopUp'
import CheckBox from '../../components/CheckBox'
//////////////////////////////////////////////////////////////////////////

////////////////////////// Component /////////////////////////////
export default function Staff(prop: any) {
  /*--------------------------------- Mock Data ---------------------------------*/
  const Departments = [
    {
      did: 1,
      name: 'Finance'
    },

    {
      did: 2,
      name: 'Customer Service'
    },

    {
      did: 3,
      name: 'Activities Management'
    },

    {
      did: 4,
      name: 'Management'
    },
  ]

  const OnDuty = [
    {
      staff: 'Tony Phan'
    },
    {
      staff: 'Tom Holland'
    },
    {
      staff: 'Tanya Boothe'
    },
    {
      staff: 'Peggy Ross',
    },
    {
      staff: 'Jennifer Smith'
    },
  ]

  const Staff = [
    {
      username: 'John Smith',
      role: 'staff',
      did: 1,
      hash_password: 'a;rgijae;ogjao;erigj',
      created: '2023-01-01'
    },

    {
      username: 'Clark Kent',
      role: 'staff',
      did: 2,
      hash_password: 'a;rgijae;ogjao;erigj',
      created: '2023-02-01'
    },

    {
      username: 'Lucas Milton',
      role: 'staff',
      did: 3,
      hash_password: 'a;rgijae;ogjao;erigj',
      created: '2023-02-15'
    },

    {
      username: 'Tom Holland',
      role: 'staff',
      did: 4,
      hash_password: 'a;rgijae;ogjao;erigj',
      created: '2023-02-09'
    },

    {
      username: 'Tanya Boothe',
      role: 'staff',
      did: 1,
      hash_password: 'a;rgijae;ogjao;erigj',
      created: '2023-05-01'
    },

    {
      username: 'Tony Phan',
      role: 'staff',
      did: 2,
      hash_password: 'a;rgijae;ogjao;erigj',
      created: '2023-05-05'
    },

    {
      username: 'Peggy Ross',
      role: 'staff',
      did: 3,
      hash_password: 'a;rgijae;ogjao;erigj',
      created: '2023-02-15'
    },

    {
      username: 'Nicole Collins',
      role: 'staff',
      did: 4,
      hash_password: 'a;rgijae;ogjao;erigj',
      created: '2023-02-09'
    },

    {
      username: 'Mark Jamison',
      role: 'staff',
      did: 1,
      hash_password: 'a;rgijae;ogjao;erigj',
      created: '2023-01-01'
    },

    {
      username: 'Frank Lampard',
      role: 'staff',
      did: 2,
      hash_password: 'a;rgijae;ogjao;erigj',
      created: '2023-02-01'
    },

    {
      username: 'Jennifer Smith',
      role: 'staff',
      did: 3,
      hash_password: 'a;rgijae;ogjao;erigj',
      created: '2023-02-15'
    },

    {
      username: 'Richard Holland',
      role: 'staff',
      did: 4,
      hash_password: 'a;rgijae;ogjao;erigj',
      created: '2023-02-09'
    },

  ]
  /*----------------------------------------------------------------------------*/

  const [ staffFiltersPopUpVisible, setStaffFiltersPopUpVisible ] = useState(false)
  const [ FilteredStaff, setFilteredStaff ] = useState(Staff)
  const [ searchedStaff, setSearchedStaff ] = useState("")
  const [ allStaffFilter, setAllStaffFilter ] = useState(true)
  const [ onDutyFilter, setOnDutyFilter ] = useState(false)
  const departmentFilters = {}
  for (let department of Departments) {
    departmentFilters[department.did] = useState(true)
  }

  const departmentRenderItems = Departments.map((department: any) => {
    const checkBoxValue = departmentFilters[department.did][0]
    const setCheckBoxValue = departmentFilters[department.did][1]
    return (
        <View key={department.did} style={{ marginLeft: 10, marginTop: 10 }}>
            <CheckBox value={checkBoxValue} setValue={setCheckBoxValue} label={department.name} checkBoxStyle={styles.dropDownCheckbox}/>
        </View>
    )
  })

  const StaffView = ({ staff }) => {
    return (
      <TouchableOpacity style={styles.staffView} onPress={() => {prop.navigation.navigate('StaffBio')}}>
        <Text style={styles.staffNameText}>{staff.username}</Text>
        <Text style={styles.staffDepartmentText}>Department: {Departments.find((department) => {return department.did === staff.did}).name}</Text>
        <View style={styles.staffStatusFrame}>
          <Text style={styles.staffStatusText}>Status:</Text>
          {
            OnDuty.find((element) => {return element.staff === staff.username}) ?
              <FontAwesome name="circle" size={30} color="#99EDC3" />
            : <FontAwesome name="circle" size={30} color="grey" />
          }
        </View>
      </TouchableOpacity>
  )}

  function staffSearchHandler(text: any) {
    if (text) {
      const filteredData = FilteredStaff.filter((staff) => {return staff.username.includes(text)})
      setFilteredStaff(filteredData)
      setSearchedStaff(text)
    } else {
      setFilteredStaff(Staff)
      setSearchedStaff(text)
    }
  }

  useEffect(() => {
    let filteredData = FilteredStaff
    if (onDutyFilter) {
      filteredData = filteredData.filter((staff) => {
        return OnDuty.find((element) => {return element.staff === staff.username})
      })
      setFilteredStaff(filteredData)
    }
    if (allStaffFilter && !onDutyFilter) {
      setFilteredStaff(Staff)
    }
    if (!onDutyFilter) {
      setAllStaffFilter(true)
      setFilteredStaff(Staff)
    }
    for (let did of Object.keys(departmentFilters)) {
      if (!(departmentFilters[did][0])) {
        filteredData = filteredData.filter((staff) => {
          return staff.did.toString() !== did
        })
        setFilteredStaff(filteredData)
      }
    }
  }, [allStaffFilter, onDutyFilter, JSON.stringify(departmentFilters)])

  function openAddStaffScreen() {
    prop.navigation.navigate('AddStaff')
  }

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
          <TouchableOpacity onPress={openAddStaffScreen}>
            <Ionicons name="person-add" size={35} color="snow"/>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.searchAndFilterFrame}>
        <View style={styles.searchOuterFrame}>
          <View style={styles.searchInnerFrame}>
            <Feather name="search" size={30} color="white" />
            <TextInput 
              style={styles.searchInputField} 
              placeholder="Search staff" 
              placeholderTextColor='grey' 
              value={searchedStaff}
              onChangeText={(text) => staffSearchHandler(text)}
              autoCorrect={false}
            />
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
      <ScrollView>
        <View style={styles.staffContainer}>
          {
            FilteredStaff.map((staff) => {
              return (<StaffView key={staff.username} staff={staff}/>)
            })
          }
        </View>
      </ScrollView>
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

  dropDownCheckbox: {
    boxSize: 40,
    boxColor: 'grey',
    labelSize: 21,
    labelWeight: 'normal',
  },

  staffView: {
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
    elevation: 20,
  },

  staffNameText: {
    fontSize: 23,
    fontWeight: 'bold',
  },

  staffDepartmentText: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'grey'
  },

  staffStatusFrame: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },

  staffStatusText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 10,
    color: 'grey',
  },

  staffContainer: {
    width: '100%',
    paddingVertical: 30,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
})
//////////////////////////////////////////////////////////////////////////