import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  titleText: {
    fontFamily: 'hanaleifill-regular',
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
    marginBottom: 10,
  },
  errorText: {
    marginBottom: 15,
    color: 'crimson',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

