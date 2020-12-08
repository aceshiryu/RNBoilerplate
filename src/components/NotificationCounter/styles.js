import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: -4,
    right: -5,
    zIndex: 1,
    width: 17,
    height: 17,
    backgroundColor: '#cc0000',
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  countText: {
    fontSize: 8,
    color: '#FFF',
  },
});

export default styles;
