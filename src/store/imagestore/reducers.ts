import { ImageState } from "./types"

const initialState: ImageState ={
    userImageList:
    [
        {
    imageId: 1,
	imageMetadata: "",
	imageSource: "",
	imageName: "",
    imageAlt: ""
    
}
],
backgroundImageList: 
   [
    {
imageId: 1,
imageMetadata: "",
imageSource: "",
imageName: "",
imageAlt: ""

}
]
}
export function imagestoreReducer(state = initialState):ImageState{


        return state;
}


    
    