    // eslint-disable-next-line
    import React from "react";
    import "./BottomTabs.css";
    import { Link } from "react-router-dom";
    import { useSelector } from "react-redux";
    import HomeIcon from "@material-ui/icons/Home";
    import SearchIcon from '@material-ui/icons/Search';
    import LocalMallIcon from '@material-ui/icons/LocalMall';
    import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
    import PersonIcon from '@material-ui/icons/Person';
    import DehazeIcon from '@material-ui/icons/Dehaze';
    
    const BottomTab = () => {

      const { cartItems } = useSelector((state) => state.cart);
      const { favouriteItems } = useSelector((state) => state.favourite);

      return (
        <>
        <div className="bottomOption">
          <Link to="/">
            <HomeIcon  
            style={{
              color:"#000",
              fontSize:"35px",
              margin:"5px",
              opacity:".8"
            }}
            />
          </Link>
          <Link to="/search">
           <SearchIcon 
           style={{
            color:"#000",
            fontSize:"35px",
            margin:"5px"
          }}
           />
          </Link>
          <Link to="/cart">
            <div style={{
              position:"relative"
            }}>
            <LocalMallIcon 
             style={{
              color:"#000",
              fontSize:"35px",
              margin:"5px",
              opacity:".8"
            }} 
            />
            
             <span style={{
              position:"absolute",
              bottom:"70%",
              left:"10%",
              height:"20px",
              width:"20px",
              border:"none",
              background:"tomato",
              display:"flex",
              alignItems:"center",
              justifyContent:"center",
              borderRadius:"50%",
              color:"#fff",
              fontWeight:"700"
            }}>{cartItems.length}</span>
            </div>
          </Link>
          <Link to="/favourites">
            <div style={{
              position:"relative"
            }}>
            <FavoriteBorderIcon 
            style={{
              color:"#000",
              fontSize:"35px",
              margin:"5px",
              opacity:".8",
            }} 
            />
             <span style={{
              position:"absolute",
              bottom:"70%",
              left:"10%",
              height:"20px",
              width:"20px",
              border:"none",
              background:"tomato",
              display:"flex",
              alignItems:"center",
              justifyContent:"center",
              borderRadius:"50%",
              color:"#fff",
              fontWeight:"400",
            }}>{favouriteItems.length}</span>
            </div>
          </Link>
          <Link to="/me">
          <PersonIcon 
           style={{
            color:"#000",
            fontSize:"35px",
            margin:"5px",
            opacity:".8"
          }}
          />
          </Link>
          <Link to="/more">
            <DehazeIcon style={{
              color:"#000",
              fontSize:"35px",
              margin:"5px",
              opacity:".8"
            }} />
          </Link>
        </div>
        </>
      );
    };
    
    export default BottomTab;
    