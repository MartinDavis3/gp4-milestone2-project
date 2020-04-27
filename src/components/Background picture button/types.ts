export interface backgroundPicture {
    picture: string, 
    userId: number,
}

export interface backgroundPictureState {
    backgroundPictureList: backgroundPicture[]
}

export const CHANGE_BACKGROUND_IMG = "CHANGE_BACKGROUND_IMG"

interface ChangeBackgroundImg {
    type: typeof CHANGE_BACKGROUND_IMG,
    picture: string,
    userid: number
}

export type BackgroundPictureActionTypes = ChangeBackgroundImg
