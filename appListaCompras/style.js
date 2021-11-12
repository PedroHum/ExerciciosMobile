import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    header: {
        width: '100%',
        height: '10%',
        backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 5,
        borderBottomColor: '#901',
        marginBottom: 10,
    },
    textHeader: {
        fontSize: 30,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: '#901',
        letterSpacing: 3,
    },
    areaCreate:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 10
    },
    inptQtdd: {
        width: 75,
        height: 50,
        borderWidth: 2,
        borderColor:'#901',
        paddingHorizontal: 6,
        borderRadius: 5,
    },
    inptProd: {
        width: 200,
        height: 50,
        borderWidth: 2,
        borderColor:'#901',
        paddingHorizontal: 6,
        borderRadius: 5,
    },
    btnAdd: {
        width: 50,
        height: 50,
        borderRadius: 100,
        backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center',
    },
    listaProd: {
        borderWidth: 2, 
        borderColor: '#901',
        margin: 20,
        borderRadius: 10
    },
    conteudoLista: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderBottomWidth: 0.5,
        borderColor: "#901",
        justifyContent: 'space-between'
    },
    textLista: {
        marginRight: 5,
        fontSize: 20,
        
    },
    areaTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 30,
        marginLeft: 30,
    },
    titleList:{
        fontSize: 25,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },

})