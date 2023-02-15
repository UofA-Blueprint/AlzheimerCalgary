///////////////////////// Import Dependencies //////////////////////////////
import { useState, useEffect, useRef } from 'react'
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

import StaffFiltersPopUp from '../../components/StaffFiltersPopUp'
import CheckBox from '../../components/CheckBox'
//////////////////////////////////////////////////////////////////////////

////////////////////////// Component /////////////////////////////
export default function Staff(prop: any) {
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

  const OnDuty = [
    {
      staffUsername: 'TonyPhan0505'
    },
    {
      staffUsername: 'TomHolland357'
    },
    {
      staffUsername: 'TanyaBoothe234'
    },
    {
      staffUsername: 'PeggyRoss897',
    },
    {
      staffUsername: 'JenniferSmith875'
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
      created: '2023-01-01',
      avatar: '',
    },

    {
      firstName: 'Clark',
      lastName: 'Kent', 
      username: 'ClarkKent235',
      roleId: 4,
      departmentId: 2,
      hash_password: 'a;rgijae;ogjao;erigj',
      contactEmail: 'clarkkent@gmail.com',
      created: '2023-02-01',
      avatar: '',
    },

    {
      firstName: 'Lucas',
      lastName: 'Milton',
      username: 'LucasMilton678',
      roleId: 6,
      departmentId: 3,
      hash_password: 'a;rgijae;ogjao;erigj',
      contactEmail: 'lucasmilton@gmail.com',
      created: '2023-02-15',
      avatar: '',
    },

    {
      firstName: 'Tom',
      lastName: 'Holland',
      username: 'TomHolland357',
      roleId: 7,
      departmentId: 4,
      hash_password: 'a;rgijae;ogjao;erigj',
      contactEmail: 'tomholland@gmail.com',
      created: '2023-02-09',
      avatar: '',
    },

    {
      firstName: 'Tanya',
      lastName: 'Boothe',
      username: 'TanyaBoothe234',
      roleId: 2,
      departmentId: 1,
      hash_password: 'a;rgijae;ogjao;erigj',
      contactEmail: 'tanyaboothe@gmail.com',
      created: '2023-05-01',
      avatar: '',
    },

    {
      firstName: 'Tony',
      lastName: 'Phan',
      username: 'TonyPhan0505',
      roleId: 5,
      departmentId: 2,
      hash_password: 'a;rgijae;ogjao;erigj',
      contactEmail: 'tonyphan@gmail.com',
      created: '2023-05-05',
      avatar: '',
    },

    {
      firstName: 'Peggy',
      lastName: 'Ross',
      username: 'PeggyRoss897',
      roleId: 4,
      departmentId: 3,
      hash_password: 'a;rgijae;ogjao;erigj',
      contactEmail: 'peggyross@gmail.com',
      created: '2023-02-15',
      avatar: '',
    },

    {
      firstName: 'Nicole',
      lastName: 'Collins',
      username: 'NicoleCollins098',
      roleId: 7,
      departmentId: 4,
      hash_password: 'a;rgijae;ogjao;erigj',
      contactEmail: 'nicolecollins@gmail.com',
      created: '2023-02-09',
      avatar: '',
    },

    {
      firstName: 'Mark',
      lastName: 'Jamison',
      username: 'MarkJamison367',
      roleId: 1,
      departmentId: 1,
      hash_password: 'a;rgijae;ogjao;erigj',
      contactEmail: 'markjamison@gmail.com',
      created: '2023-01-01',
      avatar: '',
    },

    {
      firstName: 'Frank',
      lastName: 'Lampard',
      username: 'FrankLampard0978',
      roleId: 6,
      departmentId: 2,
      hash_password: 'a;rgijae;ogjao;erigj',
      contactEmail: 'franklampard@gmail.com',
      created: '2023-02-01',
      avatar: '',
    },

    {
      firstName: 'Jennifer',
      lastName: 'Smith',
      username: 'JenniferSmith875',
      roleId: 4,
      departmentId: 3,
      hash_password: 'a;rgijae;ogjao;erigj',
      contactEmail: 'jennifersmith@gmail.com',
      created: '2023-02-15',
      avatar: '',
    },

    {
      firstName: 'Richard',
      lastName: 'Holland',
      username: 'RichardHolland768',
      roleId: 4,
      departmentId: 4,
      hash_password: 'a;rgijae;ogjao;erigj',
      contactEmail: 'richardholland@gmail.com',
      created: '2023-02-09',
      avatar: '',
    },

  ]
  /*----------------------------------------------------------------------------*/

  const [ staffFiltersPopUpVisible, setStaffFiltersPopUpVisible ] = useState(false)
  const [ FilteredStaff, setFilteredStaff ] = useState(Staff)
  const [ searchedStaff, setSearchedStaff ] = useState("")
  const [ allStaffFilter, setAllStaffFilter ] = useState(true)
  const [ onDutyFilter, setOnDutyFilter ] = useState(false)
  const scaleValue = useRef(new Animated.Value(0)).current
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
      <TouchableOpacity style={styles.staffView} onPress={() => {prop.navigation.navigate('StaffBio', { staff: staff })}}>
        <View style={styles.upperFrame}>
          <View style={styles.avatarFrame}>
            {
              /* This is a placeholder avatar */
              <Ionicons name="person-circle-outline" size={60} color="black" />
            }
          </View>
          <View style={styles.nameFrame}>
            <Text style={styles.staffNameText}>{staff.firstName} {staff.lastName}</Text>
            <Text style={styles.staffUsername}>@{staff.username}</Text>
          </View>
        </View>
        <Text style={styles.staffDepartmentText}>Department: {Departments.find((department) => {return department.did === staff.departmentId}).name}</Text>
        <View style={styles.staffStatusFrame}>
          <Text style={styles.staffStatusText}>Status:</Text>
          {
            OnDuty.find((element) => {return element.staffUsername === staff.username}) ?
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
        return OnDuty.find((element) => {return element.staffUsername === staff.username})
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
          return staff.departmentId.toString() !== did
        })
        setFilteredStaff(filteredData)
      }
    }
  }, [allStaffFilter, onDutyFilter, JSON.stringify(departmentFilters)])

  function openAddStaffScreen() {
    prop.navigation.navigate('AddStaff')
  }

  function openStaffFiltersPopUp() {
    setStaffFiltersPopUpVisible(true)
    Animated.spring(scaleValue, {toValue: 1, duration: 300, useNativeDriver: true}).start();
  }

  function closeStaffFiltersPopUp() {
    setTimeout(() => setStaffFiltersPopUpVisible(false), 100);
    Animated.timing(scaleValue, {toValue: 0, duration: 100, useNativeDriver: true}).start();
  }

  return (
    <SafeAreaView style={styles.root}>
      <StatusBar barStyle="light-content" />
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
          <TouchableOpacity style={styles.filterButton} onPress={openStaffFiltersPopUp}>
            <Ionicons name="filter" size={30} color="black" />
            <Text style={styles.filterButtonText}>Filters</Text>
          </TouchableOpacity>
        </View>
      </View>
      {
        staffFiltersPopUpVisible ?
          <StaffFiltersPopUp 
            allStaffFilter={allStaffFilter} 
            setAllStaffFilter={setAllStaffFilter}
            onDutyFilter={onDutyFilter}
            setOnDutyFilter={setOnDutyFilter}
            departmentRenderItems={departmentRenderItems}
            closeStaffFiltersPopUp={closeStaffFiltersPopUp}
            scaleValue={scaleValue}
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
    marginTop: 20,
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
    width: 300,
    paddingHorizontal: 10,
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

  upperFrame: {
    width: 270,
    flexDirection: 'row',
    marginLeft: 10,
  },

  avatarFrame: {
    width: 60,
    justifyContent: 'center',
  },

  nameFrame: {
    width: 210,
    paddingLeft: 4,
    paddingRight: 10,
  },

  staffNameText: {
    fontSize: 23,
    fontWeight: 'bold',
    textAlign: 'right',
  },

  staffUsername: {
    fontSize: 20,
    color: 'grey',
    marginTop: 10,
    textAlign: 'right',
  },

  staffDepartmentText: {
    marginTop: 10,
    fontSize: 20,
    marginLeft: 10,
  },

  staffStatusFrame: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 10,
  },

  staffStatusText: {
    fontSize: 20,
    marginRight: 10,
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