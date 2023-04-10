import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'react-slick';
import { actGetLoctions } from './duck/action';
import Loader from '../../../components/Loader';
import { Link } from 'react-router-dom';


export default function HomePage() {
    const data = useSelector(state => state.locationsReducer.data);
    const loading = useSelector(state => state.locationsReducer.loading);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actGetLoctions());
    }, []);
    

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesPerRow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 500,
        rows: 3,
        arrow: false
    };

   

    const renderList = () => {
        return (<Slider {...settings}>
            {data?.map((item) => {
                return <div key={item.id}>
                    <Link to={`/location/${item.id}`} className="flex items-center space-x-4 mx-8 border border-spacing-1">
                        <img className="w-20 h-20  " src={item.hinhAnh} alt='' />
                        <div className="font-semibold dark:text-white">
                            <h2 className='text-xl'>{item.tenViTri}</h2>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{item.tinhThanh}</p>
                        </div>
                    </Link>
                </div>
            })}

        </Slider>)
    }

    if (loading) return <Loader />
    return (
        <>
            {console.log(data)}
            <div className='container mx-auto my-8'>
                <h2 className='mb-8'>Multiple Rows</h2>
                {renderList()}
            </div>
        </>


    )
}
