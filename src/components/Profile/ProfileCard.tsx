import * as React from 'react';
import { Segment, Grid, Button, Label, Image } from 'semantic-ui-react';
import { User } from '../../store/user/types';
import { RootState } from '../../store';
import { connect } from 'react-redux';
import { signOut} from '../../store/user/actions';


interface Routeparms{
    id:string;
}
export interface IProfileCardProps {
    profilesCard: User[];
    

}

export class ProfileCard extends React.Component<IProfileCardProps> {
    constructor(props: IProfileCardProps) {
        super(props);
        this.state = {userId:'', username: "",userPictureName:"",userInformation:"",userBackgroundPictureName:"",userInbox:[]};
        
    }
    public render() {
        let { profilesCard } = this.props;
        let who = profilesCard[0].username;
        let info = profilesCard[0].userInformation;
        let pic='https://react.semantic-ui.com/images/avatar/large/'+profilesCard[0].userPictureName;

        return (
            <Grid divided="vertically">
                <Segment>
                    <Grid>
                        <Segment>
                            <Segment>
                                <Image src={pic} req size='large' />

                            </Segment>        <Segment>

                                <Button content="chang pic " ></Button></Segment> <Segment>
                                <Label>Welcome </Label>{who}!
                            </Segment> <Segment>
                                
                                <Label>About Me:
                                </Label> {info} </Segment>
                        </Segment>
                    </Grid>
                </Segment>

                <Grid.Column>

                </Grid.Column>
            </Grid>


        );
    }
}

const mapStateToProps = (state: RootState) => {
    return {
        profilesCard: state.user.userList

    };
};

export default connect(mapStateToProps,{signOut})(ProfileCard);



