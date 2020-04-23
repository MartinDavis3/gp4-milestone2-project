import * as React from 'react';
import { Grid, Container, Header, Divider, Form, Button } from 'semantic-ui-react';

export interface ISignupProps {
}

export default class Signup extends React.Component<ISignupProps> {
  public render() {
    return (
   <Grid>

<Grid.Column width={1}></Grid.Column>
<Grid.Column width={5}>

</Grid.Column>
<Grid.Column>      

<Divider vertical></Divider>
</Grid.Column>

<Grid.Column width={8}> 
<Header as='h2' color='blue' textAlign='left'>
 Sign -Up
</Header>
<Form size='large'>
    <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
    <Form.Input
      fluid
      icon='lock'
      iconPosition='left'
      placeholder='Password'
      type='password'
    />
        <Form.Input
      fluid
      icon='lock'
      iconPosition='left'
      placeholder='confirm-Password'
      type='password'
    />
    <Button color='green' fluid size='large'>
      SignUp
    </Button>
</Form>
</Grid.Column>


</Grid>  
  );
  }
}