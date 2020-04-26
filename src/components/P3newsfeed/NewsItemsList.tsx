import * as React from 'react';
import { Grid ,Image, Segment, Header, Divider} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { RootState } from '../../store';
import { NewsItem } from '../../store/news/types';
import { signOut} from '../../store/user/actions';

interface Routeparms{
  id:string;
}
export interface INewsItemsListProps {
  NewsItems:NewsItem[];
}

export  class NewsItemsList extends React.Component<INewsItemsListProps> {
  constructor(props: INewsItemsListProps) {
    super(props);
    this.state = {newsId:'',postingUserId:'',newsTitle:'',newsContent:'',newsLikesCount:'',newsItemComment:""};
  }
  public render() {
    let { NewsItems } = this.props;
    let newsTitleUser1 = NewsItems[0].newsTitle;
    let newsContentUser1 = NewsItems[0].newsContent;
    let newsTitleUser2 = NewsItems[1].newsTitle;
    let newsContentUser2 = NewsItems[1].newsContent;

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
        {newsTitleUser1}
                     </Header> 
             <p>
{newsContentUser1
}             </p>
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
                       {newsTitleUser2}      </Header> 
             <p>
{newsContentUser2}             </p>
          </Grid.Column>
        </Grid.Row>
        
      </Grid>
      
    </Segment>
    );
  }
}
const mapStateToProps = (state: RootState) => {
  return {
    NewsItems:state.news.newsItemList,

  };
};

export default connect(mapStateToProps,{signOut})(NewsItemsList);
