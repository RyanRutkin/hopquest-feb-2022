import React, { FC, useState } from 'react';
import { Modal, View, StyleSheet, Pressable, Text, TextInput } from 'react-native';
import { DataStore } from 'aws-amplify';
import { Organization } from '../../models';

export const AppAddOrganizationModal: FC<{
    open: boolean;
    setOpen: (b: boolean) => void;
}> = ({ open, setOpen }) => {
    const [ orgName, setOrgName ] = useState<string>('');
    const [ errorMsg, setErrorMsg ] = useState<string>('');

    const addOrganization = () => {
        console.log(`Adding org "${orgName}"`)
        DataStore.save(new Organization({
            name: orgName,
            createdById: '1',
            createdDtm: new Date().toISOString()
        })).catch(e => {
            console.log('Failed to save', e);
            setErrorMsg('Failed to save organization');
        }).then(() => {
            setOpen(false);
            setOrgName('');
        });
    }

    return (
        <Modal
            animationType="fade"
            onRequestClose={ () => setOpen(false) }
            transparent
            visible={ open }
        >
            <View style={styles.modalContainer} >
                <View style={styles.modalInnerContainer} >
                    {
                        errorMsg
                        ? <Text style={styles.modalDismissText}>{ errorMsg }</Text>
                        : null
                    }
                    <Pressable onPress={ () => setOpen(false) } style={styles.modalDismissButton}>
                        <Text style={styles.modalDismissText}>X</Text>
                    </Pressable>
                    <TextInput
                        onChangeText={ txt => {
                            setOrgName(txt);
                            setErrorMsg('');
                        } }
                        placeholder="Organization Name"
                        style={styles.modalInput}
                    />
                    <Pressable onPress={addOrganization} style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>Save Organization</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    modalInnerContainer: {
        backgroundColor: '#fff',
        borderRadius: 16,
        justifyContent: 'center',
        padding: 16,
    },
    modalInput: {
        borderBottomWidth: 1,
        marginBottom: 16,
        padding: 8,
    },
    modalDismissButton: {
        marginLeft: 'auto',
    },
    modalDismissText: {
        fontSize: 20,
        fontWeight: '700',
    },
    buttonContainer: {
        alignSelf: 'center',
        backgroundColor: '#4696ec',
        borderRadius: 99,
        paddingHorizontal: 8,
    },
    buttonText: {
        color: '#fff',
        fontWeight: '600',
        padding: 16,
    },
});