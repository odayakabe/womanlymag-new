import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form as ReactForm } from 'react-form';
import styled from 'styled-components';

import ErrorMessage from 'components/forms/errorMessage';

const SuccessText = styled.div`
  text-align: center;
  font-size: 125%;
`;

const encode = data =>
  Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');

class Form extends Component {
  state = {
    error: null,
    submitted: false,
  };

  handleSubmit = (values, event) => {
    const { name, onSubmit } = this.props;

    if (onSubmit) {
      return onSubmit(event);
    }

    fetch(`${process.env.FORM_SUBMISSION_URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: encode({
        'form-name': name,
        ...values,
      }),
    })
      .then(() => {
        this.setState({
          submitted: true,
        });
      })
      .catch(error => {
        this.setState({
          error,
          submitted: false,
        });
      });

    return event.preventDefault();
  };

  render() {
    const {
      action,
      children,
      id,
      name,
      preventFormDefault,
      successText,
      target,
    } = this.props;
    return (
      <React.Fragment>
        {this.state.error && <ErrorMessage text={this.state.error} />}
        {this.state.submitted && <SuccessText>{successText}</SuccessText>}
        {!this.state.submitted && (
          <ReactForm
            onSubmit={this.handleSubmit}
            preventDefault={preventFormDefault}
          >
            {formApi => (
              <form
                action={action}
                id={id}
                method="post"
                name={name}
                onSubmit={formApi.submitForm}
                target={target}
              >
                <input type="hidden" name="form-name" value={name} />
                {React.Children.map(children, child => child)}
              </form>
            )}
          </ReactForm>
        )}
      </React.Fragment>
    );
  }
}

Form.defaultProps = {
  action: null,
  id: null,
  onSubmit: null,
  preventFormDefault: true,
  successText: '',
  target: '_blank',
};

Form.propTypes = {
  action: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  onSubmit: PropTypes.func,
  preventFormDefault: PropTypes.bool,
  successText: PropTypes.string,
  target: PropTypes.string,
};

export default Form;
