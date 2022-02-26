import React, { useState } from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import { AppAddOrganizationModal } from '../../components/AddOrganizationModal/AddOrganizationModal.component';

export const AppHomePage = () => {
    const [ addOrgModalOpen, setAddOrgModalOpen ] = useState<boolean>(false);

    return (
        <>
            <Pressable
                onPress={ () => setAddOrgModalOpen(true) }
                style={[styles.buttonContainer, styles.floatingButton]}
            >
                <Text style={styles.buttonText} >Add Organization</Text>
            </Pressable>
            <AppAddOrganizationModal open={ addOrgModalOpen } setOpen={ setAddOrgModalOpen } />
        </>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
      alignSelf: 'center',
      backgroundColor: '#4696ec',
      borderRadius: 99,
      paddingHorizontal: 8,
    },
    floatingButton: {
        position: 'absolute',
        bottom: 44,
        elevation: 6,
        shadowOffset: {
          height: 4,
          width: 1,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
    buttonText: {
        color: '#fff',
        fontWeight: '600',
        padding: 16,
    },
});
  