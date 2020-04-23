import * as React from 'react';
import { Button, Comment, Form, Card, Grid, Icon,Image, Segment } from 'semantic-ui-react'
export interface ICommentsFormProps {
}
export default class CommentsForm extends React.Component<ICommentsFormProps> {
  public render() {
    return (
      <Grid>
        
       <Segment>
         
        <Grid.Column width={10} floated='right'>
            <Card>
        <Card.Description>
              <Button icon>
        <Icon name='like' />
        Like
      </Button>
      <Button icon >
        <Icon name='comment outline' />
        Comment
      </Button>
   
            
            </Card.Description>
           
              </Card>
              <Segment>
     <Comment.Group>
   <Comment>
     <Comment.Content>
    
  
       <Form reply>
         <Form.TextArea/>
         <Button
           content='Add Comment'
           labelPosition='left'
           icon='edit'
           primary
         />
       </Form>
     </Comment.Content>
   </Comment>
 </Comment.Group>
 </Segment>
        </Grid.Column>
​</Segment>
  </Grid>
    );
  }
}