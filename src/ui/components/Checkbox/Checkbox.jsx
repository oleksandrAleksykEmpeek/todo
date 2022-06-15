import checkboxIcon from '../../assets/icons/checkboxIcon.svg';
import checkboxFilledIcon from '../../assets/icons/checkboxFilledIcon.svg';
import './Checkbox.scss';

const Checkbox = ({ formik, name }) => (
  <div className="checkbox">
    <input
      id={name}
      type="checkbox"
      name={name}
      value={formik.values[name]}
      onChange={formik.handleChange}
    />

    <img
      alt={name}
      src={formik.values[name] ? checkboxIcon : checkboxFilledIcon}
      onClick={() => {
        formik.setFieldValue(name, !formik.values[name]);
      }}
    />
  </div>
);

export default Checkbox;
