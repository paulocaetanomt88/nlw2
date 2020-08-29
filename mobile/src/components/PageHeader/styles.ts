import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        padding: 30,
        backgroundColor: '#3c3ff3',
    },

    topBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    title: {
        fontFamily: 'Archivo_700Bold',
        color: '#FFF',
        fontSize: 23,
        lineHeight: 32,
        maxWidth: 180,
        marginVertical: 20,
    }
});

export default styles;