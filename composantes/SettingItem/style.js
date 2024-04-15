import { StyleSheet } from "react-native";
import { COLORS, PADDING } from "../../outils/constantes";

const styles = StyleSheet.create({
    container:{
        marginTop: 5,
        marginBottom: 15,
        backgroundColor: 'white',
        elevation: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: PADDING.horizontal,
        paddingVertical: PADDING.vertical,
    },
    antdesign:{
        fontSize: 20,
        color: COLORS.main,
    }
})

export default styles