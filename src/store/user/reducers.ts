import { UserState, SIGN_IN, SIGN_UP, SIGN_OUT, UserActionTypes } from "./types"

//The intitial state is populated with just one user, logged in, for the sake of brevity.
//More can be added if required.
//There are default, blank images in public/img/user and public/img/background.
const initialState: UserState = {
  userList: [
    {
      userId: 1,
      username: 'user1',
      password: 'password1',
      userPictureName: 'default',
      userBackgroundPictureName: 'default',
      userInformation: '',
      userInbox: []
    }
  ],
  loggedInUserId: 1,
  isLoggedIn: true
}

export function userReducer(state = initialState, action: UserActionTypes): UserState {
  switch (action.type) {

    case SIGN_IN:
      return {
        ...state,
        loggedInUserId: action.payload, isLoggedIn: true
      }

    case SIGN_UP:
      const newUser = {userId: 1,
        username: action.payload.username,
        password: action.payload.password,
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
      return {
        ...state,
        isLoggedIn: false
      }

    default:
      return state;
  }
}
