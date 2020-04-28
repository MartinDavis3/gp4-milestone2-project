import React from "react";
import { RootState } from "../../store";
//import {createStore} from 'react-redux';
import { saveComment } from '../../store/news/actions';
import { NewsItem } from "../../store/news/types";
import {
  Button,
  Comment,
  Form,
  Card,
  Grid,
  Icon,
  Segment,
} from "semantic-ui-react";
import { connect } from "react-redux";

export interface ICommentsProps {
  saveComment: typeof saveComment;
  newsItemList: NewsItem[];
  currentItem:number;
}

export class Comments extends React.Component<ICommentsProps> {
  generateID = (): number => {
    let randomNumber: number = Math.floor(Math.random() * 1000);
    randomNumber += this.props.newsItemList.length;
    return randomNumber;
  };

  newComment = (event: any) => {
    event.preventDefault();
    //Handle retieval of form field value

    const commentField: HTMLInputElement | null = document.querySelector(
      '[name="comment"]'
    );
    let commentFieldValue: string = "";
    if (commentField !== null) commentFieldValue = commentField.value;
    // Add new comment.
    
    this.props.saveComment(this.props.currentItem, commentFieldValue);
    event.target.reset();
  };

  render() {
    let { newsItemList } = this.props;
    console.log(newsItemList);

    return (
      <Grid>
        <Segment>
          <Grid.Column width={10} floated="right">
            <Card>
              <Card.Description>
                <Button icon>
                  <Icon name="like" />
                  Like
                </Button>

                <Button icon>
                  <Icon name="comment outline" />
                  Comment
                </Button>
              </Card.Description>
            </Card>
            <Segment>
              <Comment.Group>
                <Comment>
                  <Comment.Content>
                    <Form onSubmit={this.newComment}>
                      <Form.TextArea name= 'comment' ></Form.TextArea>
                      <Button
                        content="Add Comment"
                        labelPosition="left"
                        icon="edit"
                        primary
                      />
                    </Form>
                  </Comment.Content>
                </Comment>
              </Comment.Group>
            </Segment>
          </Grid.Column>
          ​
        </Segment>
      </Grid>
    );
  }
}

// Retrieve "items" from our "global" redux state.
const mapStateToProps = (state: RootState) => {
  return {
    newsItemList: state.news.newsItemList,
  };
};

// Connect Redux and React using our values and "view!"
export default connect(mapStateToProps, { saveComment })(Comments);


//Add comment to try and allow "merging" of branch on github - can be removed after.