import { useState } from 'react';

export default function useForm({
  initialValues,
  validation,
  onSubmit,
}) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleFocus = (e) => {
    setErrors({
      ...errors,
      [e.target.name]: '',
    });
  };

  const handleChange = (e) => {
    setValues(() => {
      if (e.target.type === 'checkbox') {
        return {
          ...values,
          [e.target.name]: e.target.checked,
        };
      }
      return {
        ...values,
        [e.target.name]: e.target.value,
      };
    });
  };

  const checkIsValid = () => {
    const errors = validation?.(values) || {};
    setErrors(errors);
    return !errors.account && !errors.password;
  };

  const handleSubmit = () => {
    const isValid = checkIsValid();
    if (isValid) {
      onSubmit?.(values);
    }
  };

  return {
    handleChange,
    handleFocus,
    handleSubmit,
    values,
    errors,
  };
}
