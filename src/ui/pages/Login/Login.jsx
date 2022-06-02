import { useFormik } from 'formik';
import { initialValues, validate } from './form';
import Input from '../../components/Input/Input';

const Login = () => {
  const formik = useFormik({
    initialValues,
    validationSchema: validate,
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Input formik={formik} name="email" type="email" />
      <Input formik={formik} name="password" type="password" />
    </form>
  );
};
export default Login;
