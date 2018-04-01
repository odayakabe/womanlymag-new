import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import styled from 'styled-components';
import { rem, transitions } from 'polished';
import FormField from './formField';

export const StyledInput = styled.input`
  flex: 1;
  box-sizing: border-box;
  width: ${props => (props.addOn ? 'auto' : '100%')};
  line-height: 1;
  padding: ${rem('8px')} ${rem('10px')};
  border: 1px solid ${props => props.theme.inputBorderColor};
  border-right: ${props =>
    props.addOn ? '0px' : `1px solid ${props.theme.inputBorderColor}`};
  border-color: ${props => (props.error ? props.theme.errorColor : null)};
  ${transitions('background 0.25s ease-in-out')};

  &:focus {
    outline: 0;
    background: ${props =>
      props.error
        ? props.theme.errorBackgroundColor
        : props.theme.inputBgFocusColor};
  }
`;

const Input = ({ addOn, id, label, name, placeholder, required, validate }) => (
  <FormField
    addOn={addOn}
    label={label}
    name={name}
    required={required}
    validate={validate}
    render={({ value, error, setValue, setTouched }) => (
      <StyledInput
        addOn={addOn}
        id={id || name}
        error={error}
        value={_.get(value, '')}
        onChange={e => {
          setValue(e.target.value);
        }}
        onBlur={() => setTouched()}
        placeholder={placeholder}
        name={name}
        required={required}
      />
    )}
  />
);

Input.defaultProps = {
  addOn: null,
  id: null,
  placeholder: '',
  required: false,
  validate: null,
};

Input.propTypes = {
  addOn: PropTypes.element,
  id: PropTypes.string,
  label: PropTypes.shape({
    hidden: PropTypes.bool,
    text: PropTypes.string.isRequired,
  }).isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  validate: PropTypes.func,
};

export default Input;
