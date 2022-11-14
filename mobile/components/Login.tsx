import { Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [seePassword, setSeePassword] = useState(true);
    const [checkValidEmail, setCheckValidEmail] = useState(false);
    const [invalidPassword, setInvalidPassword] = useState(false);
    const [invalidPasswordMsg, setInvalidPasswordMsg] = useState('');

    const handleCheckEmail = (text: string) => {
        let re = /\S+@\S+\.\S+/;
        let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    
        setEmail(text);
        if (re.test(text) || regex.test(text)) {
            setCheckValidEmail(false);
        } else {
            setCheckValidEmail(true);
        }
    };

    const handleCheckPassword = (text: string) => {
        setPassword(text)
        const isNonWhiteSpace = /^\S*$/;
        if (!isNonWhiteSpace.test(text)) {
            setInvalidPassword(true)
            setInvalidPasswordMsg('Password must not contain spaces');
            return;
        }
    
        const isContainsUppercase = /^(?=.*[A-Z]).*$/;
        if (!isContainsUppercase.test(text)) {
            setInvalidPassword(true)
            setInvalidPasswordMsg('Password must have at least one uppercase character');
            return;
        }
    
        const isContainsLowercase = /^(?=.*[a-z]).*$/;
        if (!isContainsLowercase.test(text)) {
            setInvalidPassword(true)
            setInvalidPasswordMsg('Password must have at least one lowercase character');
            return;
        }
    
        const isContainsNumber = /^(?=.*[0-9]).*$/;
        if (!isContainsNumber.test(text)) {
            setInvalidPassword(true)
            setInvalidPasswordMsg('Password must contain at least one digit');
            return;
        }
    
        const isValidLength = /^.{8,16}$/;
        if (!isValidLength.test(text)) {
            setInvalidPassword(true)
            setInvalidPasswordMsg('Password must be 8-16 characters long');
            return;
        }

        setInvalidPassword(false)
    };

    const handleLogin = () => {
        if (!invalidPassword) {
            console.log('email:', email)
            console.log('password:', password)
        }
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={styles.container}>
                <Text>{}</Text>
                <TextInput
                    style={styles.emailInput}
                    placeholder='Email'
                    value={email}
                    onChangeText={(text) => handleCheckEmail(text)}
                    keyboardType='email-address'
                />

                {checkValidEmail ? (<Text>Invalid email</Text>) : (<Text></Text>)}

                <TextInput
                    style={styles.passwordInput}
                    placeholder='Password'
                    value={password}
                    onChangeText = {(text) => handleCheckPassword(text)}
                    secureTextEntry={seePassword}
                />

                {invalidPassword ? (<Text>{invalidPasswordMsg}</Text>) : (<Text></Text>)}

                <TouchableOpacity
                    style={styles.button}
                    onPress={handleLogin}
                    >
                    <Text>Login</Text>
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    emailInput: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: 200,
    },
    passwordInput: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: 200,
    },
    button: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderWidth: 1,
        
    }
});

export default Login;