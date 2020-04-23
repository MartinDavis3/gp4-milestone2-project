export interface Image {
	imageId: number,
	imageMetadata: string,
	imageSource: string,
	imageName: string,
	imageAlt: string

}

export interface ImageState {
	userImageList: Image[],
	backgroundImageList: Image[]
}

