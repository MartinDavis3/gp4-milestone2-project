import * as React from 'react';
        import { Divider,Button, Form, Grid, Header, Container,Input, Segment, Label, Icon} from 'semantic-ui-react'


export interface IHomeProps {
 

}


export default class Home extends React.Component<IHomeProps> {
  public render() {
    return (
<Segment color='blue'>
<Container >
<Header as='h1' color='blue' textAlign='center' size='huge'>
Welcome to our soical media wepsite </Header>

</Container>
  <Container className='Segment2'>

<Segment>

      <Grid columns='equal'>

      <Grid.Row >

     <Grid.Column>
     <Icon circular inverted color='blue' name='users' size='large'/>

     </Grid.Column>
        <Grid.Column width={5} > 
            <Input fluid icon='user' iconPosition='left' placeholder='Username'  />
            </Grid.Column>
            <Grid.Column width={5}>
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

        </Grid.Row>

        {/* <Divider horizontal>_</Divider> */}

        <Grid.Row>

        <Grid.Column >
        <Container fluid>
      <Header as='h2'>Dogs Roles with Humans</Header>
      <p>
        Domestic dogs inherited complex behaviors, such as bite inhibition, from
        their wolf ancestors, which would have been pack hunters with complex
        body language. These sophisticated forms of social cognition and
        communication may account for their trainability, playfulness, and
        ability to fit into human households and social situations, and these
        attributes have given dogs a relationship with humans that has enabled
        them to become one of the most successful species on the planet today.
      </p>
      
    </Container>
        </Grid.Column>
<Grid.Column>      

    <Divider vertical></Divider>
</Grid.Column>

        <Grid.Column width={7}> 
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
        {/* <Grid.Column></Grid.Column> */}

        </Grid.Row>

    </Grid>
    </Segment>
    </Container>

    </Segment>
    );
  }
}
