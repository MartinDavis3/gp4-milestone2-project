import * as React from 'react';
import { Fragment } from 'react';
import { Grid, Image, Header, Divider } from "semantic-ui-react";
import { connect } from 'react-redux';
import { RootState } from '../../store';
import { NewsItem } from '../../store/news/types'
import { User } from '../../store/user/types'

export interface IIndividualNewsItemProps {
  newsItemList: NewsItem[];
  newsItemId: number;
  userList: User[];
}

export class IndividualNewsItem extends React.Component<IIndividualNewsItemProps> {

   public render() {
    const { newsItemList, newsItemId } = this.props
    const selectedNewsItem = newsItemList.filter( newsItem => ( newsItem.newsId === newsItemId ))[0];
    //In this implementation, there is no stored posting user, so just pick them in turn.
    // const selectedUser = ( ( newsItemId - 1 ) % userList.length) + 1
    return (
      <Fragment>

        <Grid key={newsItemId} textalign="left">
          <Grid.Row verticalAlign="middle">
          {/* <Divider vertical>.</Divider> */}

            <Grid.Column width={2} color='grey'>
              <Image
                src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
                size="small"
                textalign="center"
                circular
              />
            </Grid.Column>

            <Grid.Column width={10}>
              <Header as="h1" color="blue" textalign="left" size="large">
                {selectedNewsItem.newsTitle}
              </Header>
              <p>{selectedNewsItem.newsContent} </p>
            </Grid.Column>

            <Grid.Column width={4} color="teal">
              <p> 
                Comment
                and
                Like here
              </p>
            </Grid.Column>

          </Grid.Row>
        </Grid>

        <Divider horizontal>.</Divider>
        
      </Fragment>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    newsItemList: state.news.newsItemList,
    userList: state.user.userList
  };
}

export default connect(
  mapStateToProps,
  { }
)(IndividualNewsItem);