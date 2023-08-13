import { useState } from 'react';
import PropTypes from 'prop-types';
import { HiOutlineArrowRight, HiOutlineArrowLeft } from 'react-icons/hi'
const ImageSlider = ({images, thumbnails}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <div className='relative w-[90%] min-w-[300px] h-[550px] group m-auto my-5 '>
            <div style={{backgroundImage: `url(${images[currentIndex].src})`}} className='bg-cover bg-center rounded-md  duration-500 w-full h-full m-auto' src={images[currentIndex].src}></div>
            <div className='hidden absolute group-hover:block translate-y-[-50%] top-[50%] left-2 rounded-full bg-black/50 text-white p-3 cursor-pointer'>
                <HiOutlineArrowLeft  size={25} />
            </div>
            <div className="hidden absolute group-hover:block translate-y-[-50%] top-[50%] right-2 rounded-full bg-black/50 text-white p-3 cursor-pointer">
                <HiOutlineArrowRight size={25}/>
            </div>
            <div className='flex py-4'>
                {thumbnails ? 
                images.forEach((image, index) => {
                    <div style={{backgroundImage: `url(${images[index].thumbnail})`}} className='w-[30px] h-[30px]'> </div>
                })
                :
                images.forEach((image, index) => {
                    <div className='w-[15px]'> </div>
                })
                }
            </div>
        </div>
    );
}

ImageSlider.propTypes = {
    images: PropTypes.arrayOf(PropTypes.shape({
        src: PropTypes.string.isRequired,
        thumbnail: PropTypes.string
    })).isRequired,
    thumbnails: PropTypes.bool,
}

export default ImageSlider;