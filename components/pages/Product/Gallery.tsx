import { FC, memo } from 'react'
import ImageGallery from 'react-image-gallery'

type GalleryPropsType = {
    pictures: Array<string>
}

const Gallery: FC<GalleryPropsType> = ({ pictures }) => {

    const images = pictures?.map(picture => ({
        original: picture,
        thumbnail: picture
    }))

    return (
        <ImageGallery 
            items={images && images.length ? images : []} 
            showNav={false}
            showPlayButton={false}
            showFullscreenButton={false}
        />
    )
}

export default memo(Gallery)