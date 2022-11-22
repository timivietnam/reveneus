import Toast, {ToastShowParams} from "react-native-toast-message";

export function showMessage({type, text1, text2}: ToastShowParams) {
    Toast.show({
        type,
        position: "top",
        text1,
        text2,
        autoHide: true,
        topOffset: 60,
        bottomOffset: 40,
        onPress: () => {
            Toast.hide();
        },
    });
}
