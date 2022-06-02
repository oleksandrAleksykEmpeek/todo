const Input = ({ formik, name, type }) => {
  return (
    <>
      <input
        id={name}
        name={name}
        type={type}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[name]}
      />
      <p>{formik.errors[name]}</p>
    </>
  );
};

export default Input;
