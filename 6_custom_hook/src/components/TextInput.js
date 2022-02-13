import styled from 'styled-components';
import { MEDIA_QUERY_MD } from '../styles/breakpoint';

const TextInputWrapper = styled.input`
  box-sizing: border-box;
  margin: 10px;
  border-radius: 5px;
  padding: 10px;
  width: 100%;
  height: 30px;
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
    height: 65px;
  }
`;

const ErrorMessage = styled.div`
  width: 100%;
  text-align: left;
  color: rgba(255, 0, 0, 0.85);
`;

function capitalizeFirstChar(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function TextInput({
  name,
  type = 'text',
  handleChange,
  handleFocus,
  value,
  error,
  isAutoFocus = false,
}) {
  return (
    <>
      <TextInputWrapper
        name={name}
        type={type}
        onChange={handleChange}
        onFocus={handleFocus}
        value={value}
        placeholder={capitalizeFirstChar(name)}
        autoFocus={isAutoFocus}
      />
      <ErrorMessage>{error}</ErrorMessage>
    </>
  );
}

export default TextInput;
