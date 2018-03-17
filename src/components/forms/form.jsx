import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form as ReactForm } from 'react-form';
import styled from 'styled-components';
/* eslint-disable import/no-unresolved */
import ErrorMessage from 'components/forms/errorMessage';
/* eslint-enable import/no-unresolved */

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
      return onSubmit(values);
    }

    fetch('https://briskforms.com/go/805a910e93420bc71aadb2be7ce4c982', {
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
    const { children, isNetlifyForm, name, successText } = this.props;
    return (
      <React.Fragment>
        {this.state.error && <ErrorMessage text={this.state.error} />}
        {this.state.submitted && <SuccessText>{successText}</SuccessText>}
        {!this.state.submitted && (
          <ReactForm onSubmit={this.handleSubmit}>
            {formApi => (
              <form
                method="post"
                name={name}
                onSubmit={formApi.submitForm}
                data-netlify={isNetlifyForm}
                data-netlify-honeypot="bot-field"
              >
                <input type="hidden" name="form-name" value={name} />
                {isNetlifyForm && (
                  <p hidden>
                    <label htmlFor="bot-field">
                      Don&apos;t fill this out: <input name="bot-field" />
                    </label>
                  </p>
                )}
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
  isNetlifyForm: false,
  onSubmit: null,
  successText: '',
};

Form.propTypes = {
  name: PropTypes.string.isRequired,
  isNetlifyForm: PropTypes.bool,
  onSubmit: PropTypes.func,
  successText: PropTypes.string,
};

export default Form;
