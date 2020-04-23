import { UserActionTypes, SIGN_IN, SIGN_UP, SIGN_OUT } from "./types"

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
