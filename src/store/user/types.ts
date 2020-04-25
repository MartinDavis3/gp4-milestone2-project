export interface User {
  userId: number,
	username: string,
	password: string,
	userPictureName: string,
	userBackgroundPictureName: string,
	userInformation: string,
	userInbox: number[]	
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
  userId: number
}

interface SignUp {
  type: typeof SIGN_UP
	username: string
	password: string
}

//Nothing needs to be passed for signout
interface SignOut {
  type: typeof SIGN_OUT
}

export type UserActionTypes = SignIn | SignUp | SignOut;
