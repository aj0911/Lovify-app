import RN_Toast from 'react-native-toast-message';

class Toast {
  static success(text) {
    RN_Toast.show({
      type: 'success',
      text1: 'Success 🎉',
      text2: text,
    });
  }

  static info(text) {
    RN_Toast.show({
      type: 'info',
      text1: 'Info ℹ️',
      text2: text,
    });
  }

  static error(text) {
    RN_Toast.show({
      type: 'error',
      text1: 'Error ❌',
      text2: text,
    });
  }
}

export default Toast;