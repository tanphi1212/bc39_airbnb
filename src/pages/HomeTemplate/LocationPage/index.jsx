import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { actGetRooms } from './duck/action';
import Loader from '../../../components/Loader';

export default function LocationPage() {
    const param = useParams();
    const data = useSelector(state => state.roomReducer.data);
    const loading = useSelector(state => state.roomReducer.loading);

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(actGetRooms(param.id))

    },[])

    const renderListRooms = ()=>{
        return data?.map((item)=> {
            return <div key={item.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-auto">
            <Link to={`/detail/${item.id}`}>
                <img className="rounded-t-lg" src={item.hinhAnh} alt="" />
            </Link>
            <div className="p-5">
                <Link to={`/detail/${item.id}`}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.tenPhong}</h5>
                </Link>
                {console.log(item.moTa.length)}
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.moTa.length>200 ? item.moTa.substring(0,200) + '...' : item.moTa }</p>
                <Link to={`/detail/${item.id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Xem chi tiết
                    <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                </Link>
            </div>
        </div>
        })
    }

    
    
    if(loading) return <Loader/>
    return (
        <div className='container mx-auto my-8'>
            
            <div className='grid grid-cols-3 gap-4'>
                {renderListRooms()}

            </div>
        </div>
    )
}
