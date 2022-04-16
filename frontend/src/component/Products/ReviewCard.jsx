import React from 'react'
import { useSelector } from "react-redux";
import { Rating } from "@material-ui/lab";
import Loading from "../../more/Loader"

const ReviewCard = ({review}) => {
    // eslint-disable-next-line

const { product,loading } = useSelector(
    (state) => state.productDetails
  );

    const options = {
        value: review.rating,
        readOnly: true,
        precision: 0.5,
        color:"#3BB77E"
      };

    return (
       <>
       {loading ? (
           <Loading />
       ) :(
        <>
        <div style={{
            display:"flex",
            alignItems:"center",
            padding:"0px 15px"
        }}>
            <p style={{fontSize:"1.2vmax",fontWeight:"600",padding:"0px 0px"}}>{review.name}</p>
            <p style={{paddingLeft:"8px",color:"#999999e0"}}>{String(review.time).substr(0,10)}</p>
        </div>
          <div style={{padding:"0px 15px",paddingBottom:"5px"}}>
              <p style={{lineHeight:"1.3",fontSize:"1.2vmax"}}>{review.comment}</p>
              <Rating {...options} />
          </div>
        </>
       )}
       </>
    )
}

export default ReviewCard
