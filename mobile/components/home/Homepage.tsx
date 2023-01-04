import { Text, View } from 'react-native';
import { useState } from 'react';
import StaffHome from './StaffHome';
import CaregiverHome from './CaregiverHome';
import ClientHome  from './ClientHome';
import { TouchableOpacity } from 'react-native';  // to test the add media pop up component
import AddMediaPopUp from '../media/AddMediaPopUp';  // to test the add media pop up component

interface RouterProps {
  role: string
}

const RoleRouter = ({role}: RouterProps) => {
    switch (role) {
        case 'staff':
            return <StaffHome />;
            break;
        case 'caregiver':
            return <CaregiverHome />;
            break;
        case 'client':
            return <ClientHome />;
            break;
        default:
            return (
                <Text>No role</Text>
            );
    };
};

const Homepage = () => {
    const [userRole, setUserRole] = useState('caregiver');
    const [addMediaPopUpVisible, setAddMediaPopUpVisible] = useState(false);  // To test the add media pop-up component

    return (
        <View>
            <Text>Homepage</Text>
            <Text>Your role: {userRole}</Text>
            <RoleRouter role={userRole}/>
            {
                /* To test the add media pop-up component */
                <TouchableOpacity 
                    onPress={() => {setAddMediaPopUpVisible(true);}}
                    style={{
                        width: 150,
                        height: 50,
                        backgroundColor: 'black',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 30,
                        borderRadius: 10,
                    }}>
                    <Text style={{fontSize: 15, fontWeight: 'bold', color: 'white'}}>Add Media</Text>
                </TouchableOpacity>
            }
            {
                /* To test the add media pop-up component */
                addMediaPopUpVisible ?
                    <AddMediaPopUp setVisible={setAddMediaPopUpVisible}/>
                : null
            }
        </View>
    )
};

export default Homepage;