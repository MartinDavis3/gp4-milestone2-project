import * as React from 'react';
import { Component, Fragment } from 'react';
import { Form, TextArea } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { RootState } from '../store';
import { userInformationChange } from '../store/user/actions';
import { messageContentChange } from '../store/message/actions'

export interface ITextInputProps {
  serving: 'userInformation' | 'messageContent'
  userInformationChange: typeof userInformationChange;
  messageContentChange: typeof messageContentChange;
}

export class TextInput extends Component<ITextInputProps> {

private onUserFieldChange = (event: React.FormEvent<HTMLTextAreaElement>) => {
  switch (this.props.serving) {
    case 'userInformation':
      this.props.userInformationChange(event.currentTarget.value);
    break;
    case 'messageContent':
      this.props.messageContentChange(1, event.currentTarget.value)
  }
}

  public render() {
    return (
      <Fragment>
        <Form>
          <TextArea
            rows= {5}
            placeholder='Write a bit about yourself'
            onChange={this.onUserFieldChange}
          />
        </Form>
      </Fragment>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
  };
}

export default connect(
  mapStateToProps,
  { userInformationChange, messageContentChange }
)(TextInput);