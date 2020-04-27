import { CHANGE_BACKGROUND_IMG, BackgroundPictureActionTypes, backgroundPicture, backgroundPictureState } from "./types"; 

const initalState: backgroundPictureState = {
    backgroundPictureList:[]
}

export function backgroundPictureReducer ( state = initalState, action = BackgroundPicureActionTypes ): backgroundPictureState {
    
}