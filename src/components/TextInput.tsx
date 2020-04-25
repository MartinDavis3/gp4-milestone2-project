import * as React from 'react';
import { Component, Fragment } from 'react';
import { Form, TextArea } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { RootState } from '../store';

export interface ITextInputProps {
}

interface ITextInputState {
  textInput: string;
}

export class TextInput extends Component<ITextInputProps, ITextInputState> {

  constructor(props: ITextInputProps) {
    super(props);
    this.state = {
      textInput: ''
    }
  }

  private onUserFieldChange = (event: React.FormEvent<HTMLTextAreaElement>) => {
    this.setState( { textInput: event.currentTarget.value} )
  }

  public render() {
    return (
      <Fragment>
        <Form>
          <TextArea
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
  { }
)(TextInput);