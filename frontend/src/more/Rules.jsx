import React from 'react'
import "./Rules.css";
import Header from '../component/Home/Header';
import BottomTab from './BottomTab';
import MetaData from './Metadata';
import Footer from '../Footer';

const Rules = () => {
    return (
        <>
        <MetaData title="Rules" />
        <Header />
        <div className='rules' style={{
            padding:"50px 30px",
            display:"flex",
            width:"95%",
            overflow:"hidden"
        }}>
            <ul className='rules'>
                <span style={{
                    color:"#000",
                    fontSize:"1.3rem",
                    fontWeight:"800",
                    fontFamily:"Roboto",
                }}>Some Rules:</span>
                <li>1. You can easily return your product..But you have to give us the delivery charge...</li>
                <li>2. You have to give delivery charge first for cash on Delivery..In Los Angeles City you have to give 70tk and outside jashore charge will be 120 tk</li>
                <li>3. You can not buy the outofstock products...</li>
                <li>4. You can buy any products from us...we are trying to our best for give the best quality of products...</li>
                <li>5. You can find more new features in our buiseness in very soon...Our developers team always work for your good services...</li>
                <li>6. At last thanks for visit our website...Have a good day !</li>
            </ul>
        </div>
        <Footer />
        <BottomTab />
        </>
    )
}

export default Rules
