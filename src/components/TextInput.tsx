import * as React from 'react';
import { Component, Fragment } from 'react';
import { Form, TextArea } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { RootState } from '../store';
import { userInformationChange } from '../store/user/actions';

export interface ITextInputProps {
  userInformationChange: typeof userInformationChange;
}

export class TextInput extends Component<ITextInputProps> {

 private onUserFieldChange = (event: React.FormEvent<HTMLTextAreaElement>) => {
    this.props.userInformationChange(event.currentTarget.value)
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
  { userInformationChange }
)(TextInput);