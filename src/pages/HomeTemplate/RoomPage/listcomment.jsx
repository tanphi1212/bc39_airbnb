import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { actGetComment } from './duck/action';
import Loader from '../../../components/Loader';

export default function Comment(props) {
    const id = props.id;
    const data = useSelector(state => state.commentReducer.data);
    const loading = useSelector(state => state.commentReducer.loading);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(actGetComment(id))
    }, []);
    console.log(data)
    const renderComment = () => {
        return data?.map(item=>{
            return <article className='m-8' key={item.noiDung}>
            <div className="flex items-center mb-4 space-x-4">
                <img className="w-10 h-10 rounded-full" src={item.avatar} alt />
                <div className="space-y-1 font-medium dark:text-white">
                    <p> {item.tenNguoiBinhLuan}<time dateTime="2014-08-16 19:00" className="block text-sm text-gray-500 dark:text-gray-400">{item.ngayBinhLuan}</time></p>
                </div>
            </div>
            <div className="flex items-center mb-1 ">
                <svg aria-hidden="true" className={`w-5 h-5 ${item.saoBinhLuan >= 1 ? "text-yellow-400": "text-gray-300"}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                <svg aria-hidden="true" className={`w-5 h-5 ${item.saoBinhLuan >= 2 ? "text-yellow-400": "text-gray-300"}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                <svg aria-hidden="true" className={`w-5 h-5 ${item.saoBinhLuan >= 3 ? "text-yellow-400": "text-gray-300"}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                <svg aria-hidden="true" className={`w-5 h-5 ${item.saoBinhLuan >= 4 ? "text-yellow-400": "text-gray-300"}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                <svg aria-hidden="true" className={`w-5 h-5 ${item.saoBinhLuan === 5 ? "text-yellow-400": "text-gray-300"}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
            </div>
            <p className="mb-2 text-gray-500 dark:text-gray-400">{item.noiDung}</p>
        </article>
        });
    }
    if(loading) return <Loader />
    return (
        <div className='grid lg:grid-cols-3'>
            {console.log(data)}
            {renderComment()}

        </div>

    )
}
