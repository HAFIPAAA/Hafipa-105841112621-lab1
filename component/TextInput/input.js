import { TextInput } from 'react-native';
import React from 'react'

const Inputan = ({ nama, color })=>{
    return (
        <TextInput
            placeholder={`${nama}`}
            placeholderTextColor={'rgba(0, 0, 0, 0.5)'}
            style= {{
                borderWidth: 1,
                borderColor: 'gray',
                borderRadius: 5,
                width: 350,
                height: 60,
                marginVertical: 10,
                padding: 10,
                backgroundColor: 'white',
                color: color,  
                fontSize: 16,
                textAlignVertical: 'top',
                textAlign: 'left',
            }}
            secureTextEntry = {nama.toLowerCase() === 'password'}
        />
    );
}
export default Inputan;