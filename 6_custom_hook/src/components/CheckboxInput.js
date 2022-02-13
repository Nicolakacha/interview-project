import styled from 'styled-components';

const CheckBoxInputWrapper = styled.label`
  cursor: pointer;
  &:hover {
    color: #1a73e8;
  }
  input {
    transform: scale(1.5);
    margin-right: 10px;
  }
`;

function CheckboxInput({ name, text, isChecked, handleChange }) {
  return (
    <CheckBoxInputWrapper>
      <input
        name={name}
        type='checkbox'
        onChange={handleChange}
        checked={isChecked}
      />
      {text}
    </CheckBoxInputWrapper>
  );
}

export default CheckboxInput;
