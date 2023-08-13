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
            <div className='flex py-4 gap-4 justify-center w-fit m-auto'>
                {thumbnails ? 
                images.map((image, index) => {
                    return (
                        <>
                            {index === currentIndex ?
                                <div style={{backgroundImage: `url(${images[index].thumbnail})`}} className='bg-cover h-[56px] min-w-[86px] border-[6px] border-black border-solid cursor-pointer'></div>
                                : 
                                <div style={{backgroundImage: `url(${images[index].thumbnail})`}} className='bg-cover h-[50px] min-w-[80px] cursor-pointer'></div>
                            }
                        </>
                    );
                })
                :
                images.map((image, index) => {
                    return (
                        <>
                            {index === currentIndex ?
                            <div className='w-[10px] h-[10px] rounded-full bg-black cursor-pointer' > </div>
                            :
                            <div className='w-[10px] h-[10px] rounded-full border-2 border-solid border-black cursor-pointer' > </div>
                            }
                        </>
                    );
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