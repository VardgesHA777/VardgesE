import { useMemo } from 'react';
import { useFormik } from 'formik';

export const UseForm = ({
  initialValues,
  validationSchema,
  onSubmit,
  validateOnChange = true,
  enableReinitialize = false,
}) => {
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => onSubmit(values),
    validationSchema,
    validateOnChange,
    enableReinitialize,
  });
  const {
    errors,
    touched,
    setFieldValue,
    isSubmitting,
    setSubmitting,
    values,
    handleReset,
    handleSubmit,
    resetForm,
    setValues,
    dirty,
    setErrors,
    handleBlur,
  } = formik;

  const touchedErrors = useMemo(() => {
    const newErrors = {};
    Object.keys(errors).forEach((key) => {
      if (touched[key]) {
        newErrors[key] = errors[key];
      }
    });
    return newErrors;
  }, [errors, touched]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (event.target) {
      setFieldValue(name, value);
    } else {
      setFieldValue(event, value);
    }
  };

  const handleSelectChange = (newValue, name, optionsKey = '', labelName) => {
    const newOptionKey = optionsKey.split('.');
    const prevValues = newOptionKey.reduce((o, i) => (o && o[i] ? o[i] : []), values);

    if (Array.isArray(newValue) && newValue.some((value) => value.inputValue)) {
      const addedValue = newValue[newValue.length - 1].inputValue;

      setFieldValue(optionsKey, [{ [labelName]: addedValue }, ...prevValues]);
      setFieldValue(name, [...values[name], { [labelName]: addedValue }]);
    } else if (newValue?.inputValue) {
      setFieldValue(optionsKey, [{ [labelName]: newValue.inputValue }, ...prevValues]);
      setFieldValue(name, { [labelName]: newValue.inputValue });
    } else {
      setFieldValue(name, newValue);
    }
  };

  return {
    touchedErrors,
    errors,
    touched,
    setFieldValue,
    isSubmitting,
    setSubmitting,
    values,
    setValues,
    handleReset,
    handleSubmit,
    handleChange,
    handleSelectChange,
    resetForm,
    dirty,
    setErrors,
    handleBlur,
  };
};
