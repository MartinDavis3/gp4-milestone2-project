import * as React from 'react';
import { Segment, Grid, Label } from 'semantic-ui-react';
import { Message } from '../../store/message/types';
import { RootState } from '../../store';
import { connect } from 'react-redux';
import { signOut} from '../../store/user/actions';
import { User } from '../../store/user/types';

interface Routeparms{
    id:string;
}
export interface IInputMessageProps {
    Message:Message[];
    usersname: User[];

}




export  class InputMessage extends React.Component<IInputMessageProps> {
    constructor(props: IInputMessageProps) {
        super(props);
        this.state = { messageId: "",
          fromUserId: "",
          messageContent: "",
          recipientUserIds:[],
          username:""
      }
    }

  public render() {
    let { Message,usersname } = this.props;
    // let whoSend = Message[0].fromUserId;
    let messageContent = Message[0].messageContent;
    let messageContent2 = Message[1].messageContent;
    let messageContent3 = Message[2].messageContent;
    let messageContent4 = Message[3].messageContent;
    let messageContent5 = Message[4].messageContent;

    let username = usersname[0].username;
    let username1 = usersname[1].username;


    // let recipientUserIds=Message[0].recipientUserIds;
    return (

<Segment>
<Label icon="facebook messenger" size='huge' color='blue'/>

    <Label size='big' color='green' icon="facebook messenger">Inbox</Label>
<Segment>

    <Grid>
<Grid.Row>
<Grid.Column width={2}>
    <Label color='blue'>Form :{username}</Label>
</Grid.Column>

<Grid.Column width={7}>
<Label color='green'>{messageContent}</Label>

</Grid.Column>
</Grid.Row>

<Grid.Row>
<Grid.Column width="2">
    <Label color='blue'>From : {username}</Label>
</Grid.Column>
<Grid.Column width={7}>
<Label color='green'>{messageContent2}</Label>
</Grid.Column>
</Grid.Row>
<Grid.Row>
<Grid.Column width="2">
    <Label color='red'>From :{username1}</Label>
</Grid.Column>
<Grid.Column width={7}>
<Label color='purple'>{messageContent3}</Label>
</Grid.Column>
</Grid.Row>
<Grid.Row>
<Grid.Column width="2">
    <Label color='blue'>From :{username}</Label>
</Grid.Column>
<Grid.Column width={7}>
<Label color='green'>{messageContent4}</Label>
</Grid.Column>
</Grid.Row>
<Grid.Row>
<Grid.Column width="2">
    <Label color='red'>From :{username1}</Label>
</Grid.Column>
<Grid.Column width={7}>
<Label color='purple'>{messageContent5}</Label>
</Grid.Column>
</Grid.Row>
</Grid>
</Segment>
</Segment>
        );
  }
}
const mapStateToProps = (state: RootState) => {
    return {
        Message: state.message.messageList,
        usersname:state.user.userList
    };
};

export default connect(mapStateToProps,{signOut})(InputMessage);
