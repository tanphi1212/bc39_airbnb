import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { actGetDetailRoom } from './duck/action';
import Loader from '../../../components/Loader';
import RoomOrder from './roomOrder';
import Comment from './listcomment';


export default function DetailRoom() {
    const param = useParams();
    const data = useSelector(state => state.detailRoomReducer.data);
    const loading = useSelector(state => state.detailRoomReducer.loading);
    
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(actGetDetailRoom(param.id));
    }, [])

    if (loading) return <Loader />
    return (
        <div className='container mx-auto my-8'>
            <img className="h-auto max-w-full" src={data?.hinhAnh} alt="image description" />
            <div className='grid lg:grid-cols-3  grid-flow-row my-4 mx-2'>
                <div className='lg:col-span-2'>
                    <div className='text-center lg:!text-left '>
                        <h3 className=' font-semibold lg:text-2xl'>{data?.tenPhong}</h3>
                        <p className=' lg:text-lg'>{data?.khach} khách - {data?.phongNgu} phòng ngủ - {data?.giuong} giường - {data?.phongTam} phòng tắm</p>
                    </div>
                    <hr className='my-4' />
                    <p>Mô tả: {data?.moTa}</p>
                    <hr className='my-4' />
                    <div>
                        <h1 className='font-semibold text-center'>Tiện ích</h1>
                        <div className='grid grid-cols-4 gap-4 my-4'>
                            {data?.mayGiat ? <div className='text-center'>Máy giặt</div> : ''}
                            {data?.banLa ? <div className='text-center'>Bàn là</div> : ''}
                            {data?.tivi ? <div className='text-center'>Ti vi</div> : ''}
                            {data?.wifi ? <div className='text-center'>Wifi</div> : ''}
                            {data?.bep ? <div className='text-center'>Bếp</div> : ''}
                            {data?.doXe ? <div className='text-center'>Đỗ xe</div> : ''}
                            {data?.hoBoi ? <div className='text-center'>Hồ Bơi</div> : ''}
                            {data?.banUi ? <div className='text-center'
                            >Bàn ủi</div> : ''}
                        </div>
                    </div>
                </div>
                <div className='my-auto' >
                   <RoomOrder />
                </div>
            </div>
            <hr className='my-8'/>
            <Comment  id={param.id} />

        </div>
    )
}
