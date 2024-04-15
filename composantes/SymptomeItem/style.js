import { StyleSheet } from "react-native";
import { PADDING } from "../../outils/constantes";

const styles = StyleSheet.create({
    itemss:{
        marginRight: 15,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        paddingHorizontal: PADDING.horizontal,
        paddingVertical: PADDING.vertical,

    },
    itemImage:{
        width :30,
        height: 30,
        marginRight: 5,
    }
})
export default styles