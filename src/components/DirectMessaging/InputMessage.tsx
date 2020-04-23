import * as React from 'react';
import { Segment, Grid, Label, Input, Button } from 'semantic-ui-react';

export interface IInputMessageProps {
}

export default class InputMessage extends React.Component<IInputMessageProps> {
  public render() {
    return (

<Segment>
    <Label>Imbox</Label>
<Segment>

    <Grid>

<Grid.Row>
<Grid.Column width={2}>
    <Label>From</Label>
</Grid.Column>

<Grid.Column width={7}>
<Input
                fluid
                icon='search'
                iconPosition='left'
                placeholder=''
                size='huge'
              /></Grid.Column>
                  <Button icon='close'></Button>

</Grid.Row>





<Grid.Row>
<Grid.Column width="2">
    <Label>From</Label>
</Grid.Column>
<Grid.Column width={7}>
<Input
                fluid
                icon='search'
                iconPosition='left'
                placeholder=''
                size='huge'
              /></Grid.Column>
                  <Button icon='close'></Button>

</Grid.Row>

</Grid>

</Segment>
</Segment>

        );
  }
}
