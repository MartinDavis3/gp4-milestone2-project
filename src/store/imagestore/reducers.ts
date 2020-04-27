import { ImageState } from "./types"

const initialState: ImageState = {
    userImageList:
        [
            {
                imageId: 1,
                imageMetadata: "",
                imageSource: "white screen",
                imageName: "default.png",
                imageAlt: "blank white screen"

            },

            {
                imageId: 2,
                imageMetadata: "",
                imageSource: "pikxabay",
                imageName: "lake.jpg",
                imageAlt: "A picture of a lake"
            },

            {
                imageId: 3,
                imageMetadata: "",
                imageSource: "pikxabay",
                imageName: "mountain.jpg",
                imageAlt: "A picture of a mountain"
            },

            {
                imageId: 4,
                imageMetadata: "",
                imageSource: "pikxabay",
                imageName: "valley.jpg",
                imageAlt: "A picture of a valley"
            },
        
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
export function imagestoreReducer(state = initialState): ImageState {

    return state;
}



