import { StyleSheet } from "react-native";
import { COLORS, PADDING } from "../../outils/constantes";

const dashboardStyle = StyleSheet.create({
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: PADDING.horizontal,
        paddingVertical: PADDING.vertical,
        backgroundColor: 'white'
    },
    userImage : {
        width: 80,
        height: 80,
        borderRadius: 50/2,

    },
    userName:{
        fontSize: 16,
    } ,

    //style of flastlist
    scrollableList:{
        paddingHorizontal: PADDING.horizontal,
        paddingVertical: PADDING.vertical,
    },
    title:{
        paddingHorizontal: PADDING.horizontal,
        paddingVertical: PADDING.vertical,
    },
    titleBold:{
        fontWeight: 'bold',
    },
    title_space_between: {
        paddingHorizontal: PADDING.horizontal,
        paddingVertical: PADDING.vertical,
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    link:{
        color: COLORS.main,
    },
    doctorsContainer:{
        marginTop: 15,
        paddingHorizontal: PADDING.horizontal,
        paddingVertical: PADDING.vertical,
    },
    doctorCard:{
        flex:1,
        flexDirection: 'row',
        backgroundColor: 'white',
        elevation: 5,
        padding: 10,
        paddingHorizontal: PADDING.horizontal,
        paddingVertical: PADDING.vertical,
        marginBottom: 10,
        borderRadius: 5,
    },
    doctorImage:{
        width: 80,
        height: 80,
        borderRadius: 80/2,
        marginRight: 15,
    },
    doctorInfo:{
        flexDirection: "column",
    },
    doctorName:{
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 15,
    },
    doctorSpeciality:{
        backgroundColor: COLORS.main,
        padding: 5,
        paddingHorizontal: PADDING.horizontal,
        borderRadius: 15,
        fontSize: 14,
        color:'white',
    }

});

export default dashboardStyle;