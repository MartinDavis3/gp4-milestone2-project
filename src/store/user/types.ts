export interface User {
  userId: number,
	username: string,
	password: string,
	userPictureName: string,
	userBackgroundPictureName: string,
	userInformation: string,
	userInbox: number[],
}

export interface UserProfile {
	userPictureName: string,
	userBackgroundPictureName: string,
	userInformation: string
}

export interface UserProfile {
	userPictureName: string,
	userBackgroundPictureName: string,
	userInformation: string
}

export interface UserState {
	userList: User[],
	loggedInUserId: number,
	isLoggedIn: boolean
}

export const SIGN_IN = 'SIGN_IN';
export const SIGN_UP = 'SIGN_UP';
export const SIGN_OUT = 'SIGN_OUT';
export const USER_INFORMATION_CHANGE = 'USER_INFORMATION_CHANGE';

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

interface UserInformationChange {
	type: typeof USER_INFORMATION_CHANGE
	userInformation: string
}

export type UserActionTypes = SignIn | SignUp | SignOut | UserInformationChange;
