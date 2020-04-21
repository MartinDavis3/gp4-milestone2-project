import { UserActionTypes, SIGN_IN, SIGN_UP, SIGN_OUT, UserCredentials } from "./types"

export function signIn( userId: number ): UserActionTypes {
  return {
    type: SIGN_IN,
    payload: userId
  }
}

export function signUp( userCredentials: UserCredentials ): UserActionTypes {
  return {
    type: SIGN_UP,
    payload: userCredentials
  }
}

export function signOut(): UserActionTypes {
  return {
    type: SIGN_OUT
  }
}
