import * as React from 'react';
import { Grid, Container, Header, Divider } from 'semantic-ui-react';

export interface ImMainheaderProps {
}

export default class Mainheader extends React.Component<ImMainheaderProps> {
  public render() {
    return (
      <Grid>
        <Grid.Column width={1}>      
          <Divider vertical>
          </Divider>
        </Grid.Column>

        <Grid.Column width={5}>
          <Container fluid>
            <Header as='h1' color='blue' textAlign='center' size='huge'>
              Welcome to our social media website
            </Header> 
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vestibulum elit in tortor finibus, a iaculis enim eleifend. Duis a sollicitudin libero. Pellentesque non purus quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fringilla semper tellus, nec gravida odio mollis maximus. Integer ac libero eros. Nam quis consequat justo. Sed sit amet accumsan odio. 
            </p>
          </Container>
        </Grid.Column>

        <Grid.Column>      
          <Divider vertical>
          </Divider>
        </Grid.Column>
      </Grid> 
    );
  }
}
