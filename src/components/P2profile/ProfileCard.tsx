import * as React from 'react';
import { Segment, Grid, Label, Image, Button } from 'semantic-ui-react';
import { User } from '../../store/user/types';
import { RootState } from '../../store';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';


interface RouteParams {
    id: string;
  }

export interface IProfileCardProps extends RouteComponentProps<RouteParams> {
    profilesCard: User[];
    loggedInUserId: number;
}


interface IProfileCardState {
    displayedUser: number
  }

export class ProfileCard extends React.Component<IProfileCardProps,IProfileCardState> {
    constructor(props: IProfileCardProps) {
        super(props);
        this.state = {
          displayedUser: this.props.loggedInUserId
        }
      }
      private changeDisplayedUser() {
        if ( this.props.loggedInUserId !== 0 ) {
          let newDisplayedUser = this.state.displayedUser;
          console.log(`user before increment: ${newDisplayedUser}`)
          newDisplayedUser++;
          console.log(`user after increment: ${newDisplayedUser}`)
          if ( newDisplayedUser > this.props.profilesCard.length ) {
            newDisplayedUser = 1
          }
          console.log(`user after limiter: ${newDisplayedUser}`)
          this.setState( { displayedUser: newDisplayedUser } );
        } else {
          this.setState( { displayedUser: 0 } );
        }
      }
  
    public render() {
        let { match: { params } } = this.props;

        let { profilesCard ,loggedInUserId} = this.props;
        let who = profilesCard[0].username;
        let who2 = profilesCard[1].username;
        let who3 = profilesCard[2].username;
        let who4 = profilesCard[3].username;
        let who5 = profilesCard[4].username;

        let info = profilesCard[0].userInformation;
        let info2 = profilesCard[1].userInformation;
        let info3 = profilesCard[2].userInformation;
        let info4 = profilesCard[3].userInformation;
        let info5 = profilesCard[4].userInformation;

        let pic='https://react.semantic-ui.com/images/avatar/large/'+profilesCard[0].userPictureName;
        let pic2='https://react.semantic-ui.com/images/avatar/large/'+profilesCard[1].userPictureName;
        let pic3='https://react.semantic-ui.com/images/avatar/large/'+profilesCard[2].userPictureName;
        let pic4='https://react.semantic-ui.com/images/avatar/large/'+profilesCard[3].userPictureName;
        let pic5='https://react.semantic-ui.com/images/avatar/large/'+profilesCard[4].userPictureName;
        if (loggedInUserId === 0  ) {
            return (
                <Button content='please sign in '
                as={Link} 
                to={`/Home/${this.state.displayedUser}`} 
                onClick={() => this.changeDisplayedUser()}
              />
              
            );
        }

        if (loggedInUserId === 1  ) {
        return (
            
            <Grid divided="vertically">
                <Segment>
                    <Grid>
                        <Segment>
                        Page 2. User profilesCard - User {params.id}     
                            <Segment>
                                <Image src={pic}
                                    // req
                                    size='large' />

                            </Segment>        <Segment>

                                    
                            <Grid>
                            <Grid.Column>

                            </Grid.Column>

                   <Grid.Column  width={6}>
                       <Label color='green' size='huge'>Welcome </Label>
                       </Grid.Column>
                        
                        <Grid.Column textAlign='center' width={8}> 
                        <Label size='huge' color='blue'>{who}!</Label>
                   </Grid.Column>
                   </Grid>

                    </Segment> <Segment>
                    <Grid>
                            <Grid.Column></Grid.Column>
                   <Grid.Column  width={6}><Label color='purple' size='huge'>About Me: </Label>
                   </Grid.Column>
                        
                        <Grid.Column textAlign='center' width={8}> 
                        <Label size='huge' color='blue'>{info} </Label>
                 </Grid.Column>
                 </Grid>
                        </Segment>
                        </Segment>
                    </Grid>
                </Segment>

                <Grid.Column>

                </Grid.Column>
            </Grid>


        );
    }
else if (loggedInUserId ===2){

    return (
        <Grid divided="vertically">
        <Segment>
            <Grid>
                <Segment>
                Page 2. User profilesCard - User {params.id}     

                    <Segment>
                        <Image src={pic2}
                            // req
                            size='large' />

                    </Segment>     
                       <Segment>
                        <Grid>
                            <Grid.Column>

                            </Grid.Column>

                   <Grid.Column  width={6}>
                       <Label color='green' size='huge'>Welcome </Label>
                       </Grid.Column>
                        
                        <Grid.Column textAlign='center' width={8}> 
                        <Label size='huge' color='blue'>{who2}!</Label>
                   </Grid.Column>
                   </Grid>

                    </Segment> <Segment>
                    <Grid>
                            <Grid.Column></Grid.Column>
                   <Grid.Column  width={6}><Label color='purple' size='huge'>About Me: </Label>
                   </Grid.Column>
                        
                        <Grid.Column textAlign='center' width={8}> 
                        <Label size='huge' color='blue'>{info2} </Label>
                 </Grid.Column>
                 </Grid>

                 </Segment>
                </Segment>
            </Grid>
        </Segment>

        <Grid.Column>

        </Grid.Column>
    </Grid>
    );
}
else if (loggedInUserId ===3){

    return (
        <Grid divided="vertically">
        <Segment>
            <Grid>
                <Segment>
                    <Segment>
                        <Image src={pic3}
                            // req
                            size='large' />

                    </Segment>        <Segment>
                    <Grid>
                            <Grid.Column>

                            </Grid.Column>

                   <Grid.Column  width={6}>
                       <Label color='green' size='huge'>Welcome </Label>
                       </Grid.Column>
                        
                        <Grid.Column textAlign='center' width={8}> 
                        <Label size='huge' color='blue'>{who3}!</Label>
                   </Grid.Column>
                   </Grid>

                    </Segment> <Segment>
                    <Grid>
                            <Grid.Column></Grid.Column>
                   <Grid.Column  width={6}><Label color='purple' size='huge'>About Me: </Label>
                   </Grid.Column>
                        
                        <Grid.Column textAlign='center' width={8}> 
                        <Label size='huge' color='blue'>{info3} </Label>
                 </Grid.Column>
                 </Grid>
                       </Segment>
                </Segment>
            </Grid>
        </Segment>

        <Grid.Column>

        </Grid.Column>
    </Grid>
    );
}
else if (loggedInUserId ===4){
    return (
        <Grid divided="vertically">
        <Segment>
            <Grid>
                <Segment>
                    <Segment>
                        <Image src={pic4}
                            // req
                            size='large' />

                    </Segment>        <Segment>
                    <Grid>
                            <Grid.Column>

                            </Grid.Column>

                   <Grid.Column  width={6}>
                       <Label color='green' size='huge'>Welcome </Label>
                       </Grid.Column>
                        
                        <Grid.Column textAlign='center' width={8}> 
                        <Label size='huge' color='blue'>{who4}!</Label>
                   </Grid.Column>
                   </Grid>

                    </Segment> <Segment>
                    <Grid>
                            <Grid.Column></Grid.Column>
                   <Grid.Column  width={6}><Label color='purple' size='huge'>About Me: </Label>
                   </Grid.Column>
                        
                        <Grid.Column textAlign='center' width={8}> 
                        <Label size='huge' color='blue'>{info4} </Label>
                 </Grid.Column>
                 </Grid>
 </Segment>
                </Segment>
            </Grid>
        </Segment>

        <Grid.Column>

        </Grid.Column>
    </Grid>
    );
}
else if (loggedInUserId ===5){
    return (
        <Grid divided="vertically">
        <Segment>
            <Grid>
                <Segment>
                    <Segment>
                        <Image src={pic5}
                            // req
                            size='large' />

                    </Segment>        <Segment>

                    <Grid>
                            <Grid.Column>

                            </Grid.Column>

                   <Grid.Column  width={6}>
                       <Label color='green' size='huge'>Welcome </Label>
                       </Grid.Column>
                        
                        <Grid.Column textAlign='center' width={8}> 
                        <Label size='huge' color='blue'>{who5}!</Label>
                   </Grid.Column>
                   </Grid>

                    </Segment> <Segment>
                    <Grid>
                            <Grid.Column></Grid.Column>
                   <Grid.Column  width={6}><Label color='purple' size='huge'>About Me: </Label>
                   </Grid.Column>
                        
                        <Grid.Column textAlign='center' width={8}> 
                        <Label size='huge' color='blue'>{info5} </Label>
                 </Grid.Column>
                 </Grid>
 </Segment>
                </Segment>
            </Grid>
        </Segment>

        <Grid.Column>

        </Grid.Column>
    </Grid>
    );
}
}
}


const mapStateToProps = (state: RootState) => {
    return {
        profilesCard: state.user.userList,
        loggedInUserId: state.user.loggedInUserId,

    };
};

export default connect(
    mapStateToProps,
    { }
  )(ProfileCard);
//   export default withRouter(connect(mapStateToProps)(Header));


