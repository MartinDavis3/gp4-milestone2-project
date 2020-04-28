import * as React from 'react';
import { Fragment } from 'react';
import { Component } from 'react';
import NewsItemsList from './NewsItemsList';
import Comments from './Savecomment';
import IndividualNewsItem from './IndividualNewsItem';
import { Grid, Segment } from 'semantic-ui-react';

export interface IP3newsfeedProps {
}

export default class P3newsfeed extends Component<IP3newsfeedProps> {
  public render() {
    return (
      <Fragment>
        {/* <Grid>
          <Grid.Row centered columns="equal">
          Page 3. Newsfeed
          </Grid.Row>
          <Grid.Row columns='equal'>
            <Grid.Column width={4}> 
             <NewsItemsList/>
              <Grid.Column width={4}>
              <Comments/>
              
</Grid.Column>
        </Grid.Column>
          </Grid.Row>
          
        </Grid> */}

        <Grid divided='vertically'>
    <Grid.Row columns={1}>
      <Grid.Column>
      Page 3. Newsfeed
      </Grid.Column>
    
    </Grid.Row>

    <Grid.Row columns={3}>
      <Grid.Column width={1}></Grid.Column>
      
      <Grid.Column>
      <NewsItemsList/>
      </Grid.Column>
      <Grid.Column>
      <Comments/>
      </Grid.Column>
      
    </Grid.Row>
  </Grid>
      </Fragment>
    );
  }
}
