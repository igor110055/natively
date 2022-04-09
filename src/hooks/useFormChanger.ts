import { useContext, useState } from 'react';
import { Alert } from 'react-native';

import { DataContext, ThemeContext } from '../context';

export const useFormChanger = () => {

    const [input, setInput] = useState<string>('');
    const {dataState, success} = useContext(DataContext);
    const { theme: { dark, colors: { text } } } = useContext(ThemeContext);

    const handleSubmit = (): void => {
        input === "" 
            ? Alert.alert('Error', 'Is empty your textInput')
            : success(input);
    };

    return { handleSubmit, setInput, input , text, dataState, dark };

};