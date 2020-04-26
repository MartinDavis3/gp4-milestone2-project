import * as React from "react";
import { Grid, Icon, Input, Button } from "semantic-ui-react";
import { connect } from 'react-redux';
import { RootState } from '../../store';
import { signIn } from '../../store/user/actions';
import { User } from '../../store/user/types';

export interface ILoginProps {
  userList: User[];
  loggedInUserId: number;
  signIn: typeof signIn;
}

interface ILoginState {
  currUser: string;
  currPass: string;
}

export class Login extends React.Component<ILoginProps, ILoginState> {

  constructor(props: ILoginProps) {
    super(props);
    this.state = {
      currUser: '',
      currPass: ''
    }
  }

  private onUserFieldChange = (event: React.FormEvent<HTMLInputElement>) => {
    if ( this.props.loggedInUserId === 0 ) {
      this.setState( { currUser: event.currentTarget.value} );
    }
  }

  private onPassFieldChange = (event: React.FormEvent<HTMLInputElement>) => {
    if ( this.props.loggedInUserId === 0 ) {
      this.setState( { currPass: event.currentTarget.value} );
    }
  }

  onClickSubmitButton() {
    console.log('In submit routine');
    const { userList, loggedInUserId, signIn } = this.props;
    const { currUser, currPass } = this.state;
    if ( loggedInUserId === 0 ) {
      console.log('In usercheck block');
      let matchedUser = userList.filter( user => user.username === currUser)[0];
      console.log(matchedUser);
      if ( matchedUser !== undefined ) {
        console.log('In passcheck block');
        if ( matchedUser.password === currPass ) {
          console.log(matchedUser.userId);
          signIn(matchedUser.userId)
        }
      }
    }
  }

  public render() {
    return (
      <React.Fragment>
        <Grid columns="equal">
          <Grid.Column floated="right" width={3}>
            <Icon circular inverted color="blue" name="users" size="large" />
          </Grid.Column>
          <Grid.Column width={3}>
            <Input fluid icon="user" iconPosition="left" placeholder="Username"
              onChange={this.onUserFieldChange} />
          </Grid.Column>
          <Grid.Column width={3}>
            <Input fluid icon="lock" iconPosition="left" placeholder="Password" type="password"
              onChange={this.onPassFieldChange}/>
          </Grid.Column>
          <Grid.Column width={3}>
            <Button color="facebook" fluid size="large"
             onClick = {() => this.onClickSubmitButton()}
            >
              Login
            </Button>
          </Grid.Column>
          <Grid.Column width={1}></Grid.Column>
        </Grid>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    userList: state.user.userList,
    loggedInUserId: state.user.loggedInUserId
  };
}

export default connect(
  mapStateToProps,
  { signIn }
)(Login);