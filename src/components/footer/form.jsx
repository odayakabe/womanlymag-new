import React, { Component } from 'react';

import { Form, Input } from 'components/forms';
import { isEmail } from 'components/forms/validations';
import Button from 'components/button/button';

class FooterForm extends Component {
  onSubmitForm = () => true;

  render() {
    const { isMobile } = this.props;

    const submitButton = (
      <Button id="mc-embedded-subscribe" name="subscribe" text="Subscribe" />
    );

    return (
      <Form
        successText="You subscribed!"
        onSubmit={this.onSubmitForm}
        action="//twitter.us15.list-manage.com/subscribe/post?u=8f848089b50e1ba3b7a3c400f&amp;id=3fe0717806"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        preventFormDefault={false}
        target="_blank"
      >
        <Input
          addOn={!isMobile && submitButton}
          label={{ text: 'Subscribe to our newsletter!' }}
          name="EMAIL"
          id="mce-EMAIL"
          placeholder="example@email.com"
          validate={isEmail}
          required
        />
        {isMobile && submitButton}
      </Form>
    );
  }
}

export default FooterForm;
