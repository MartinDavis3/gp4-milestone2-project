import * as React from 'react';
import { Fragment } from 'react';
import MessageSendButton  from './MessageSendButton';
import TextInput from '../TextInput';
import UserList from './UserList';
<<<<<<< HEAD
=======
import { Grid, Segment, Header } from 'semantic-ui-react';
>>>>>>> cab92ba34eed4b86ce590123556c64270eb60f13
import InputMessage from './InputMessage';

export interface IP4messageProps {
}

export default class P4message extends React.Component<IP4messageProps> {
  public render() {
    return (
      <Fragment>
<<<<<<< HEAD
        Page 4. Direct Messaging
        <UserList/>
        <TextInput serving = 'messageContent' rows='2' displayingUserId='0' ></TextInput>
        <MessageSendButton></MessageSendButton>
        <InputMessage/>
=======
        <Grid columns="equal"> 
          <Grid.Row centered>
          <Header as='h2' color='blue' textAlign='left'>
          Messaging Other Users</Header>
          
          </Grid.Row>
          <Grid.Row>


              <Grid.Column width={2}>
              <UserList/>
              </Grid.Column>

              <Grid.Column>
                <Segment>
              <TextInput serving = 'messageContent' rows='2' displayingUserId='0' ></TextInput>
              <MessageSendButton/>

                </Segment>
              
              <InputMessage/>

              </Grid.Column>
              <Grid.Column width={2}>

              </Grid.Column>
          </Grid.Row>
        </Grid>

>>>>>>> cab92ba34eed4b86ce590123556c64270eb60f13
      </Fragment>
    );
  }
}
