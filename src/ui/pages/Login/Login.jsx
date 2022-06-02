import { useFormik } from 'formik';
import { initialValues, validate } from './form';
import Input from '../../components/Input/Input';
import './Login.scss';

const Login = () => {
  const formik = useFormik({
    initialValues,
    validationSchema: validate,
  });
  return (
    <form onSubmit={formik.handleSubmit} className="loginForm">
      <h2>Login</h2>
      <Input formik={formik} name="email" type="email" />
      <Input formik={formik} name="password" type="password" />

      <button type="submit">Log In</button>
    </form>
  );
};
export default Login;
