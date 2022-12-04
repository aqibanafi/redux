import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {increase, decrease} from '../../redux/state/counter/counterSlice'

const Counter = () => {

    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()
    return (
        <div>
            <h1 className='text-center text-5xl font-bold'>My Counter</h1>
            <div className='flex flex-col justify-center mt-20'>
                <h1 className='text-6xl mb-20 font-bold text-amber-600'>{count}</h1>
                <div className='flex gap-5 justify-center'>
                    <button onClick={() => {dispatch(increase())}} className="btn btn-success">Increase</button>
                    <button onClick={() => {dispatch(decrease())}} className="btn btn-error">Decrease</button>
                </div>
            </div>
        </div>
    );
};

export default Counter;