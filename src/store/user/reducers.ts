import { UserState, SIGN_IN, SIGN_UP, SIGN_OUT, UserActionTypes, USER_INFORMATION_CHANGE } from "./types"

//The intitial state is populated with 6 users, with user 1 logged in.
//There are default, blank images in public/img/user and public/img/background.
const initialState: UserState = {
  //  userPictureName:: `../../../public/img/user/${johnDoePicture.png}`,

  userList: [
    {
      userId: 1,
      username: 'user1',
      password: 'pass1',
      userPictureName: 'matthew.png',
      userBackgroundPictureName: 'default',
      userInformation: 'I am a full-stack software developer',
      userInbox: []
    },
    {
      userId: 2,
      username: 'user2',
      password: 'pass2',
      userPictureName: 'default',
      userBackgroundPictureName: 'default',
      userInformation: 'I like mountaineering',
      userInbox: []
    },
    {
      userId: 3,
      username: 'user3',
      password: 'pass3',
      userPictureName: 'default',
      userBackgroundPictureName: 'default',
      userInformation: 'My favourite colour is green',
      userInbox: []
    },
    {
      userId: 4,
      username: 'user4',
      password: 'pass4',
      userPictureName: 'default',
      userBackgroundPictureName: 'default',
      userInformation: 'I like reading',
      userInbox: []
    },
    {
      userId: 5,
      username: 'user5',
      password: 'pass5',
      userPictureName: 'default',
      userBackgroundPictureName: 'default',
      userInformation: 'I like to dance',
      userInbox: []
    },
    {
      userId: 6,
      username: 'user6',
      password: 'pass6',
      userPictureName: 'default',
      userBackgroundPictureName: 'default',
      userInformation: 'My favourite meal is haggis, tatties and neaps',
      userInbox: []
    }
  ],
  loggedInUserId: 2,
  isLoggedIn: true
}

export function userReducer(state = initialState, action: UserActionTypes): UserState {
  switch (action.type) {

    case SIGN_IN:
      console.log('sign-in');
      console.log(action.userId);
      return {
        ...state,
        loggedInUserId: action.userId, isLoggedIn: true
      }

    case SIGN_UP:
      const newUser = {
        //Because user sign-up can not be undone, userId can be set from current number of user.
        userId: state.userList.length + 1,
        username: action.username,
        password: action.password,
        userPictureName: 'default',
        userBackgroundPictureName: 'default',
        userInformation: '',
        userInbox: []
      } 
      console.log(newUser);
      return {
      
        ...state,
        userList: [...state.userList, newUser]
      }

    case SIGN_OUT:
      console.log(SIGN_OUT)
      return {
        ...state,
        loggedInUserId: 0,
        isLoggedIn: false
      }

    case USER_INFORMATION_CHANGE:
      let modifiedUser = state.userList.filter( user => user.userId === state.loggedInUserId )[0];
      modifiedUser.userInformation = action.userInformation;
      return {
        ...state,
        userList: [ ...state.userList, modifiedUser ] 
      }
      
    default:
      return state;
  }
}
