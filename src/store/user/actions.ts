import { UserActionTypes, SIGN_IN, SIGN_UP, SIGN_OUT, USER_INFORMATION_CHANGE } from "./types"

export function signIn( userId: number ): UserActionTypes {
  return {
    type: SIGN_IN,
    userId: userId
  }
}

export function signUp( username: string, password: string ): UserActionTypes {
  return {
    type: SIGN_UP,
    username: username,
    password: password
  }
}

export function signOut(): UserActionTypes {
  return {
    type: SIGN_OUT
  }
}

export function userInformationChange( userInformation: string ): UserActionTypes {
  return {
    type: USER_INFORMATION_CHANGE,
    userInformation: userInformation
  }
}
