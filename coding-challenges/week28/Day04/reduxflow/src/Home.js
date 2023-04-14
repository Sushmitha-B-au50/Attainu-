import React from 'react';
import { useSelector,useDispatch } from 'react-redux';

//import {increment,decrement} from "./actions/action"

export default function Home() {
    //const [count, setcount] = useState(0);
    const count = useSelector((state) => state.counter);
    const dispatch=useDispatch();
    // useEffect(() => {
    //     setcount(0);
    //     console.log('store:', store.getState());
    // });

    //store.subscribe(() => console.log('State:', store.getState()))

    return (
        <>
            <div >
                <button className='btn' onClick={() => {
                    dispatch({type:'INCREMENT'})
                }}>+</button>

                <div>{count} Countervalue</div>
                 <button className='btn' onClick={() => {
                   dispatch({type:'DECREMENT'})
                }}>-</button>
               
            </div>
        </>
    )
}