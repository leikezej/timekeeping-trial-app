import Icon from 'react-native-vector-icons/FontAwesome';
const myButton = (
  <Icon.Button
    name="facebook"
    backgroundColor="#3b5998"
    onPress={this.loginWithFacebook}
  >
    Login with Facebook
  </Icon.Button>
);

const customTextButton = (
  <Icon.Button name="facebook" backgroundColor="#3b5998">
    <Text style={{ fontFamily: 'Arial', fontSize: 15 }}>
      Login with Facebook
    </Text>
  </Icon.Button>
);