import { CHANGE_BACKGROUND_IMG, BackgroundPictureActionTypes } from "./types";

export function changeBackgroundImg ( picture: string, userid: number ): BackgroundPictureActionTypes {
    return {
        type: CHANGE_BACKGROUND_IMG,
        picture: picture,
        userid: userid
    }
}



    

