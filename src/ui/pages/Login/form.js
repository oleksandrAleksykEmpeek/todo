import * as Yup from 'yup';
import { formTexts } from '../../../constants/formTexts';

const { isRequired, passwordMinMessage, passwordMaxMessage } = formTexts;
const initialValues = {
  email: '',
  password: '',
};
const validate = Yup.object({
  email: Yup.string().required(isRequired).email(),
  password: Yup.string()
    .required(isRequired)
    .min(5, passwordMinMessage)
    .max(16, passwordMaxMessage),
});
export { initialValues, validate };
