import styled from 'styled-components';
import useForm from '../hooks/useForm';
import { MEDIA_QUERY_MD } from '../styles/breakpoint';
const Container = styled.div`
  padding-top: 80px;
`;

const FormWrapper = styled.div`
  position: absolute;
  top: 20%;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  max-width: 160px;
  border: 2px solid #d9dce0;
  border-radius: 5px;
  padding: 40px 60px;
  background-color: rgba(255, 255, 255, 0.85);
  ${MEDIA_QUERY_MD} {
    max-width: 400px;
  }
`;

const FormHeader = styled.div`
  text-align: center;
  margin-bottom: 10px;
  h1 {
    font-size: 24px;
    font-weight: 400;
  }
  h2 {
    font-size: 20px;
    font-weight: 400;
  }
`;

const TextInput = styled.input`
  box-sizing: border-box;
  margin: 10px;
  border-radius: 5px;
  padding: 10px;
  width: 100%;
  font-size: 14px;
  border: 1px solid #ccc;
  &:focus {
    border: 3px solid #1a73e8;
  }
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    color: #fff !important;

    font-size: 18px;
  }

  ${MEDIA_QUERY_MD} {
    padding: 20px;
    font-size: 12px;
    font-size: 18px;
  }
`;

const CheckBoxInput = styled.label`
  cursor: pointer;
  &:hover {
    color: #1a73e8;
  }
  input {
    transform: scale(1.5);
    margin-right: 10px;
  }
`;

const FormButton = styled.button`
  margin: 30px 0 0 auto;
  border-radius: 5px;
  border: transparent;
  padding: 10px 20px;
  width: fit-content;
  background-color: #1a73e8;
  color: white;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    background-color: #74aaf1;
  }
  ${MEDIA_QUERY_MD} {
    font-size: 18px;
    padding: 10px 40px;
  }
`;

const ErrorMessage = styled.div`
  width: 100%;
  text-align: left;
  color: rgba(255, 0, 0, 0.85);
`;

function Form() {
  const { handleChange, handleFocus, handleSubmit, values, errors } =
    useForm({
      initialValues: {
        account: '',
        password: '',
        rememberMe: false,
      },
      validation: (values) => {
        const errors = {};
        if (!values.account) {
          errors.account = '請輸入帳號';
        } else if (!values.password) {
          errors.password = '請輸入密碼';
        }
        return errors;
      },
      onSubmit: (values) => console.table(values),
    });

  return (
    <Container>
      <FormWrapper>
        <FormHeader>
          <h1>登入</h1>
          <h2>使用您的測試帳戶</h2>
        </FormHeader>

        <TextInput
          name='account'
          onChange={handleChange}
          onFocus={handleFocus}
          value={values.account}
          placeholder='Account'
          autoFocus
        />
        {errors.account && (
          <ErrorMessage>{errors.account}</ErrorMessage>
        )}

        <TextInput
          name='password'
          type='password'
          onChange={handleChange}
          onFocus={handleFocus}
          value={values.password}
          placeholder='Password'
        />
        {errors.password && (
          <ErrorMessage>{errors.password}</ErrorMessage>
        )}

        <CheckBoxInput>
          <input
            type='checkbox'
            name='rememberMe'
            onChange={handleChange}
            checked={values.rememberMe}
          />
          Remember Me
        </CheckBoxInput>

        <FormButton onClick={handleSubmit}>Login</FormButton>
      </FormWrapper>
    </Container>
  );
}

export default Form;
