export interface User {
  userId: number,
	username: string,
	password: string,
	userPictureName: string,
	userBackgroundPictureName: string,
	userInformation: string,
	userInbox: number[]	
}

export interface UserCredentials {
  username: string,
  password: string
}

export interface UserState {
	userList: User[],
	loggedInUserId: number,
	isLoggedIn: boolean
}

export const SIGN_IN = 'SIGN_IN';
export const SIGN_UP = 'SIGN_UP';
export const SIGN_OUT = 'SIGN_OUT';

interface SignIn {
  type: typeof SIGN_IN
  payload: number
}

interface SignUp {
  type: typeof SIGN_UP
  payload: UserCredentials
}

//No payload required for signout
interface SignOut {
  type: typeof SIGN_OUT
}

export type UserActionTypes = SignIn | SignUp | SignOut;
