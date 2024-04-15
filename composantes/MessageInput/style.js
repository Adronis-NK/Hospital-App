import { StyleSheet } from "react-native";
import { COLORS, PADDING } from "../../outils/constantes";


const styles = StyleSheet.create({
    container:{

        flexDirection: 'row',
        backgroundColor: '#eee',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    input:{
        flex: 1,
        backgroundColor: 'white',


    },
    send:{
        fontSize: 30,
        color: 'white',
        backgroundColor: COLORS.main,
        paddingHorizontal: PADDING.horizontal,
        paddingVertical: PADDING.vertical,
        borderRadius: 50/2,
    }
});

export default styles