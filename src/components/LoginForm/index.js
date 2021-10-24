import { withRouter } from 'react-router';
import { LoginForm } from './LoginForm';
const RoutedLoginForm = withRouter(LoginForm);

export { RoutedLoginForm as default };