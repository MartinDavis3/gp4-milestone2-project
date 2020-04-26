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
    loggedInUserId: number;
    signOut: typeof signOut;

}



export  class InputMessage extends React.Component<IInputMessageProps> {
    constructor(props: IInputMessageProps) {
        super(props);
        this.state = { messageId: "",
          fromUserId: "",
          messageContent: "",
          recipientUserIds:[],
          username:"",password:""
      }
    }

  public render() {
    let { Message,usersname,loggedInUserId} = this.props;
    let username = usersname[0].username;
    let username1 = usersname[1].username;
    let username2= usersname[2].username;
    let username3 = usersname[3].username;
    let username4 = usersname[3].username;
    let username5 = usersname[3].username;



    let messageContent = Message[0].messageContent;
    let messageContent2 = Message[1].messageContent;
    let messageContent3 = Message[2].messageContent;
    let messageContent4 = Message[3].messageContent;
    let messageContent5 = Message[4].messageContent;
    // let messageContent6 = Message[5].messageContent;
    // let messageContent7 = Message[6].messageContent;

    if (loggedInUserId === 1  ) {

        return(
<Segment>
<h2>{username}</h2>

<Label icon="facebook messenger" size='huge' color='blue'/>
    <Label size='big' color='green' icon="facebook messenger">Inbox</Label>
<Segment>

    <Grid>
<Grid.Row>
<Grid.Column width={2}>
    <Label color='blue'>me :</Label>
</Grid.Column>

<Grid.Column width={7}>
<Label color='green'>{messageContent}</Label>

</Grid.Column>
</Grid.Row>

<Grid.Row>
<Grid.Column width="2">
    <Label color='blue'>me : </Label>
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
    <Label color='blue'>me </Label>
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

else if (loggedInUserId === 2){

    return (
        
<Segment>
<h2>{username1}</h2>

<Label icon="facebook messenger" size='huge' color='blue'/>
    <Label size='big' color='green' icon="facebook messenger">Inbox</Label>
<Segment>

    <Grid>
<Grid.Row>
<Grid.Column width={2}>
    <Label color='blue'>me :</Label>
</Grid.Column>

<Grid.Column width={7}>
<Label color='green'>{messageContent4}</Label>

</Grid.Column>
</Grid.Row>

<Grid.Row>
<Grid.Column width="2">
    <Label color='blue'>me : </Label>
</Grid.Column>
<Grid.Column width={7}>
<Label color='green'>{messageContent2}</Label>
</Grid.Column>
</Grid.Row>
<Grid.Row>
<Grid.Column width="2">
    <Label color='red'>From :{username2}</Label>
</Grid.Column>
<Grid.Column width={7}>
<Label color='purple'>{messageContent3}</Label>
</Grid.Column>
</Grid.Row>
<Grid.Row>
<Grid.Column width="2">
    <Label color='blue'>me </Label>
</Grid.Column>
<Grid.Column width={7}>
<Label color='green'>{messageContent4}</Label>
</Grid.Column>
</Grid.Row>
<Grid.Row>
<Grid.Column width="2">
    <Label color='red'>From :{username2}</Label>
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
  else if (loggedInUserId === 3){

    return (
        
<Segment>
<h2>{username2}</h2>

<Label icon="facebook messenger" size='huge' color='blue'/>
    <Label size='big' color='green' icon="facebook messenger">Inbox</Label>
<Segment>

    <Grid>
<Grid.Row>
<Grid.Column width={2}>
    <Label color='blue'>me :</Label>
</Grid.Column>

<Grid.Column width={7}>
<Label color='green'>{messageContent4}</Label>

</Grid.Column>
</Grid.Row>

<Grid.Row>
<Grid.Column width="2">
    <Label color='blue'>me : </Label>
</Grid.Column>
<Grid.Column width={7}>
<Label color='green'>{messageContent2}</Label>
</Grid.Column>
</Grid.Row>
<Grid.Row>
<Grid.Column width="2">
    <Label color='red'>From :{username3}</Label>
</Grid.Column>
<Grid.Column width={7}>
<Label color='purple'>{messageContent3}</Label>
</Grid.Column>
</Grid.Row>
<Grid.Row>
<Grid.Column width="2">
    <Label color='blue'>me </Label>
</Grid.Column>
<Grid.Column width={7}>
<Label color='green'>{messageContent4}</Label>
</Grid.Column>
</Grid.Row>
<Grid.Row>
<Grid.Column width="2">
    <Label color='red'>From :{username3}</Label>
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
  else if (loggedInUserId === 4){

    return (
        
<Segment>
<h2>{username3}</h2>

<Label icon="facebook messenger" size='huge' color='blue'/>
    <Label size='big' color='green' icon="facebook messenger">Inbox</Label>
<Segment>

    <Grid>
<Grid.Row>
<Grid.Column width={2}>
    <Label color='blue'>me :</Label>
</Grid.Column>

<Grid.Column width={7}>
<Label color='green'>{messageContent4}</Label>

</Grid.Column>
</Grid.Row>

<Grid.Row>
<Grid.Column width="2">
    <Label color='blue'>me : </Label>
</Grid.Column>
<Grid.Column width={7}>
<Label color='green'>{messageContent2}</Label>
</Grid.Column>
</Grid.Row>
<Grid.Row>
<Grid.Column width="2">
    <Label color='red'>From :{username3}</Label>
</Grid.Column>
<Grid.Column width={7}>
<Label color='purple'>{messageContent3}</Label>
</Grid.Column>
</Grid.Row>
<Grid.Row>
<Grid.Column width="2">
    <Label color='blue'>me </Label>
</Grid.Column>
<Grid.Column width={7}>
<Label color='green'>{messageContent4}</Label>
</Grid.Column>
</Grid.Row>
<Grid.Row>
<Grid.Column width="2">
    <Label color='red'>From :{username3}</Label>
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
  else if (loggedInUserId === 5){

    return (
        
<Segment>
<h2>{username4}</h2>

<Label icon="facebook messenger" size='huge' color='blue'/>
    <Label size='big' color='green' icon="facebook messenger">Inbox</Label>
<Segment>

    <Grid>
<Grid.Row>
<Grid.Column width={2}>
    <Label color='blue'>me :</Label>
</Grid.Column>

<Grid.Column width={7}>
<Label color='green'>{messageContent4}</Label>

</Grid.Column>
</Grid.Row>

<Grid.Row>
<Grid.Column width="2">
    <Label color='blue'>me : </Label>
</Grid.Column>
<Grid.Column width={7}>
<Label color='green'>{messageContent2}</Label>
</Grid.Column>
</Grid.Row>
<Grid.Row>
<Grid.Column width="2">
    <Label color='red'>From :{username3}</Label>
</Grid.Column>
<Grid.Column width={7}>
<Label color='purple'>{messageContent3}</Label>
</Grid.Column>
</Grid.Row>
<Grid.Row>
<Grid.Column width="2">
    <Label color='blue'>me </Label>
</Grid.Column>
<Grid.Column width={7}>
<Label color='green'>{messageContent4}</Label>
</Grid.Column>
</Grid.Row>
<Grid.Row>
<Grid.Column width="2">
    <Label color='red'>From :{username3}</Label>
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
  else if (loggedInUserId ===6){

    return (
        
<Segment>
<h2>{username5}</h2>

<Label icon="facebook messenger" size='huge' color='blue'/>
    <Label size='big' color='green' icon="facebook messenger">Inbox</Label>
<Segment>

    <Grid>
<Grid.Row>
<Grid.Column width={2}>
    <Label color='blue'>me :</Label>
</Grid.Column>

<Grid.Column width={7}>
<Label color='green'>{messageContent4}</Label>

</Grid.Column>
</Grid.Row>

<Grid.Row>
<Grid.Column width="2">
    <Label color='blue'>me : </Label>
</Grid.Column>
<Grid.Column width={7}>
<Label color='green'>{messageContent2}</Label>
</Grid.Column>
</Grid.Row>
<Grid.Row>
<Grid.Column width="2">
    <Label color='red'>From :{username3}</Label>
</Grid.Column>
<Grid.Column width={7}>
<Label color='purple'>{messageContent3}</Label>
</Grid.Column>
</Grid.Row>
<Grid.Row>
<Grid.Column width="2">
    <Label color='blue'>me </Label>
</Grid.Column>
<Grid.Column width={7}>
<Label color='green'>{messageContent4}</Label>
</Grid.Column>
</Grid.Row>
<Grid.Row>
<Grid.Column width="2">
    <Label color='red'>From :{username3}</Label>
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
}

const mapStateToProps = (state: RootState) => {
    return {
        Message: state.message.messageList,
        usersname:state.user.userList,
        loggedInUserId: state.user.loggedInUserId


    };
};

export default connect(mapStateToProps,{signOut})(InputMessage);
