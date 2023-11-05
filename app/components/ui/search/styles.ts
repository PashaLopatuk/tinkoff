import StyleSheet from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        // Other container styles if needed
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // or 'contain' or other image style you prefer
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative', // By default, ImageBackground is set to position: 'absolute'
    },
});