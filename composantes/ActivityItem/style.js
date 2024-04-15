import { StyleSheet } from "react-native";
import { PADDING } from "../../outils/constantes";

const itemstylefirst = StyleSheet.create({
    scrollableListItem:{
        flexDirection: 'column',
        paddingHorizontal: 15,
        paddingVertical: 15,
        marginRight: 15,        
        elevation: 1,
        backgroundColor: 'white',
        
    },
    mainText:{
        fontWeight: 'bold',
        fontSize: 16,
    },
    subText:{
        marginTop: 10,
        fontSize: 12,
    }
})

export default itemstylefirst