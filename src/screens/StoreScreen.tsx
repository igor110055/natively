import React, { FC } from 'react';
import { View, Text, TextInput, Keyboard, TouchableWithoutFeedback, Button } from 'react-native';

import { useFormChanger } from '../hooks';
import { storeStyles } from '../styles';

export const StoreScreen: FC = (): JSX.Element => {

    const { handleSubmit, input, setInput, text, dataState } = useFormChanger();

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={storeStyles.container}>
                <Text style={{ ...storeStyles.centeredText, color: text, fontSize: 40 }}>
                    Store Example
                </Text>
                <Text style={{ ...storeStyles.centeredText, color: text, fontSize: 20, paddingTop: 15 }}>
                    Write anything in this form and send!
                </Text>
                <TextInput style={{...storeStyles.input, color: text, borderColor: text}}
                        placeholder="here" placeholderTextColor="#adadad" onChangeText={setInput} value={input} />
                <Button title="Submit" onPress={handleSubmit} />
                {
                    dataState.data
                        ? <Text style={{ ...storeStyles.centeredText, paddingVertical: 15, fontSize: 18, color: text }}>
                                Store State: Yes, you write &nbsp;
                                <Text style={{ fontWeight: "bold" }} >{dataState.data || ''}</Text>
                            </Text>
                        : <Text style={{ ...storeStyles.centeredText, paddingVertical: 15, fontSize: 18, color: text }}>
                                Store State: Not yet.
                    </Text>
                }
            </View>
        </TouchableWithoutFeedback>
    );
};