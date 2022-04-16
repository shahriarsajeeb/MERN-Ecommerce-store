import React from 'react'
import { useSelector } from 'react-redux';
import "./CommingSoon.css";
import BottomTab from './BottomTab';
import Loading from './Loader';
import MetaData from './Metadata';

const CommingSoon = () => {

    const {loading} = useSelector(
        (state) => state.cart
      );

    return (
        <>
        {loading ? (<Loading/>) : (
            <>
        <MetaData title="comming soon" />
            <div>
            <div className='bg'>
                <span dataText="Comming" className='first'>Comming<span dataText="Soon....">Soon....</span></span>
                <div className="one">
                    <div className="circle">

                    </div>
                </div>
            </div>
            </div>
            <BottomTab />
        </>
        )}
        </>
    )
}

export default CommingSoon
