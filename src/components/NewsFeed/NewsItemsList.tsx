import * as React from 'react';
import { Grid ,Image, Segment, Header, Divider} from 'semantic-ui-react';

export interface INewsItemsListProps {
}

export default class NewsItemsList extends React.Component<INewsItemsListProps> {
  public render() {



    return (
      <Segment>
      <Grid columns={2} stackable textAlign='center'> 
        <Divider vertical></Divider>
  
        <Grid.Row verticalAlign='middle'>
          <Grid.Column>
          <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' size='medium' circular />

  
          </Grid.Column>
  
          <Grid.Column>
          <Header as='h1' color='blue' textAlign='center' size='huge'>
        Header
                     </Header> 
             <p>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vestibulum elit in tortor finibus
             </p>
          </Grid.Column>
        </Grid.Row>
        
      </Grid>
      <Divider horizontal>.</Divider>

      <Grid columns={2} stackable textAlign='center'> 
        <Divider vertical></Divider>
  
        <Grid.Row verticalAlign='middle'>
          <Grid.Column>
          <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' size='medium' circular />

  
          </Grid.Column>
  
          <Grid.Column>
          <Header as='h1' color='blue' textAlign='center' size='huge'>
        Header
                     </Header> 
             <p>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vestibulum elit in tortor finibus
             </p>
          </Grid.Column>
        </Grid.Row>
        
      </Grid>
      
    </Segment>

  
    );
  }
}
