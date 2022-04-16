import React, { useState } from "react";
import "./Shipping.css";
import { useSelector, useDispatch } from "react-redux";
import CheckoutSteps from "../cart/CheckoutSteps.jsx";
import MetaData from "../../more/Metadata";
import HomeIcon from "@material-ui/icons/Home";
    // eslint-disable-next-line
import PinDropIcon from "@material-ui/icons/PinDrop";
    // eslint-disable-next-line
import LocationCityIcon from "@material-ui/icons/LocationCity";
import PublicIcon from "@material-ui/icons/Public";
import PhoneIcon from "@material-ui/icons/Phone";
import TransferWithinAStationIcon from "@material-ui/icons/TransferWithinAStation";
import { Country, State } from "country-state-city";
import { saveShippingInfo } from "../../actions/CartAction";
import BottomTab from "../../more/BottomTab";

const Shipping = ({ history }) => {
    const dispatch = useDispatch();
    
    const { shippingInfo } = useSelector((state) => state.cart);
  
    const [address, setAddress] = useState(shippingInfo.address);
        // eslint-disable-next-line
    const [city, setCity] = useState(shippingInfo.city);
    const [state, setState] = useState(shippingInfo.state);
    const [country, setCountry] = useState(shippingInfo.country);
        // eslint-disable-next-line
    const [pinCode, setPinCode] = useState(shippingInfo.pinCode);
    const [phoneNo, setPhoneNo] = useState(shippingInfo.phoneNo);
  
    const shippingSubmit = (e) => {
      e.preventDefault();
  
      if (phoneNo.length < 11 || phoneNo.length > 11) {
        alert.error("Phone Number should be 11digits");
        return;
      }
      dispatch(
        saveShippingInfo({ address, state, country, phoneNo })
      );
      history.push("/order/confirm");
    };
  
    return (
      <>
        <MetaData title="Shipping Details" />
  
        <CheckoutSteps activeStep={0} />
  
        <div className="shippingContainer">
          <div className="shippingBox">
            <h2 className="shippingHeading">Shipping Details</h2>
  
            <form
              className="shippingForm"
              encType="multipart/form-data"
              onSubmit={shippingSubmit}
            >
              <div>
                <HomeIcon />
                <input
                  type="text"
                  placeholder="Address"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
    
              <div>
                <PhoneIcon />
                <input
                  type="number"
                  placeholder="Phone Number"
                  required
                  value={phoneNo}
                  onChange={(e) => setPhoneNo(e.target.value)}
                  size="10"
                />
              </div>
  
              <div>
                <PublicIcon />
  
                <select
                  required
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                >
                  <option value="">Country</option>
                  {Country &&
                    Country.getAllCountries().map((item) => (
                      <option key={item.isoCode} value={item.isoCode}>
                        {item.name}
                      </option>
                    ))}
                </select>
              </div>
  
              {country && (
                <div>
                  <TransferWithinAStationIcon />
  
                  <select
                    required
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                  >
                    <option value="">City</option>
                    {State &&
                      State.getStatesOfCountry(country).map((item) => (
                        <option key={item.isoCode} value={item.isoCode}>
                          {item.name}
                        </option>
                      ))}
                  </select>
                </div>
              )}
  
              <input
                type="submit"
                value="Continue"
                className="shippingBtn"
                disabled={state ? false : true}
              />
            </form>
          </div>
        </div>
        <BottomTab />
      </>
    );
  };
  
  export default Shipping;