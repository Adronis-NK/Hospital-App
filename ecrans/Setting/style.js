import { StyleSheet } from "react-native";
import { PADDING } from "../../outils/constantes";

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: PADDING.horizontal,
        paddingVertical: PADDING.vertical,
    },
    header:{
        alignItems: 'center',
        elevation: 5,
        backgroundColor: 'white',
        flexDirection: 'row',
        padding: 10,
    },
    image:{
        width: 80,
        height: 80,
        borderRadius: 80/2,
    },
    userInfo:{
        marginLeft: 15,
    },
    userName:{
        fontWeight: 'bold',
        marginBottom: 5,
    },
    userEmail:{
        marginBottom: 5,
    },
    userNumber:{
        fontWeight: 'bold',
    }

})
export default styles