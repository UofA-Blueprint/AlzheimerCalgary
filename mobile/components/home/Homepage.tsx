import { Text, View } from 'react-native';
import { useState } from 'react';
import StaffHome from './StaffHome';
import CaregiverHome from './CaregiverHome';
import ClientHome  from './ClientHome';

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

    return (
        <View>
            <Text>Homepage</Text>
            <Text>Your role: {userRole}</Text>
            <RoleRouter role={userRole}/>
        </View>
    )
};

export default Homepage;