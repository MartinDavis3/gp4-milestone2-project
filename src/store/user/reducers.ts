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
      userInformation: 'I am a techer',
      userInbox: []
    },
    {
      userId: 2,
      username: 'user2',
      password: 'pass2',
      userPictureName: 'steve.jpg',
      userBackgroundPictureName: 'default',
      userInformation: ' iam  a pilot ',
      userInbox: []
    },
    {
      userId: 3,
      username: 'user3',
      password: 'pass3',
      userPictureName: 'molly.png',
      userBackgroundPictureName: 'default',
      userInformation: 'i am electrical engineering ',
      userInbox: []
    },
    {
      userId: 4,
      username: 'user4',
      password: 'pass4',
      userPictureName: 'jenny.jpg',
      userBackgroundPictureName: 'default',
      userInformation: ' i am police officer',
      userInbox: []
    },
    {
      userId: 5,
      username: 'user5',
      password: 'pass5',
      userPictureName: 'daniel.jpg',
      userBackgroundPictureName: 'default',
      userInformation: 'iam a singer ',
      userInbox: []
    },
    {
      userId: 6,
      username: 'user6',
      password: 'pass6',
      userPictureName: 'default',
      userBackgroundPictureName: 'default',
      userInformation: 'default',
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
      console.log(modifiedUser)
      return {
        ...state,
        userList: [ ...state.userList, modifiedUser ] 
      }
      
    default:
      return state;
  }
}
