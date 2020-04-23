import * as React from 'react';
import { Grid, Icon, Input, Button } from 'semantic-ui-react';

export interface ILoginProps {
}

export default class Login extends React.Component<ILoginProps> {
  public render() {
    return (

        <Grid columns='equal'>

    <Grid.Column floated='right' width={3}>
   <Icon circular inverted color='blue' name='users' size='large'/>
   
                        </Grid.Column>
       <Grid.Column width={3} > 
          <Input fluid icon='user' iconPosition='left' placeholder='Username'  />
                         </Grid.Column>
       <Grid.Column width={3}>
              <Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
              />
                 </Grid.Column>
  <Grid.Column width={3} >
              <Button color='facebook' fluid size='large'  >
                Login
              </Button>
  </Grid.Column>
  <Grid.Column width={1}></Grid.Column>
</Grid>  
    );
  }
}
