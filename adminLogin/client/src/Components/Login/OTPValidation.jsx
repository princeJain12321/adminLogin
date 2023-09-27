import React, { useState, useEffect } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
const Send_OTP = (e) => {
    alert("Otp sent successfully");
}

const Verify_OTP = (e) => {
    var n= document.getElementById('otp').value;
    // if(n==123456){
    //     alert("OTP Verified Successfully..."); 
    // }
    console.log(n);
    
}

const OTPValidation = () => {

    return (
        <div style={{ backgroundColor:"aqua",backgroundSize:"contain",height:700,width:1280 }}>
            <div className="loginPage flex">
                <div className="container flex  mr-auto ">
                    <form action="" className="form grid" onSubmit={onsubmit}>
                        <label className="raj">
                            <center>
                                <h3>OTP Verification</h3>
                            </center>
                        </label>
                        {/* <div className="inputDiv">
                            <label className="rajshree" htmlFor="phone">
                                Phone Number
                            </label>
                            <div className="inputflex">
                                <input
                                    type="text"
                                    id="phone"
                                    name="phonenumber"
                                    placeholder="Enter your phone number"
                                ></input>
                            </div>
                        </div>
                        <div
                            style={{
                                flexDirection: "row",
                                display: "flex",
                                justifyContent: "left",
                            }}
                        >
                            <button
                                type="submit"
                                onClick={Send_OTP}
                                className="btn  btn-primary flex inputlogin"
                            >
                                <span>Send OTP</span>
                            </button>
                        </div>            */}
                        <div className="inputDiv">
                            <label className="rajshree" htmlFor="password">
                                Enter OTP
                            </label>
                            <div className="inputflex">
                                <input
                                    type="text"
                                    id="otp"
                                    name="otpverify"
                                    
                                    maxLength="6"
                                    minLength="3"
                                    placeholder="Enter OTP"
                                ></input>
                            </div>
                        </div>
                        <div
                            style={{
                                flexDirection: "row",
                                display: "flex",
                                justifyContent: "left",
                            }}
                        >
                            {/* <button
                                type="submit"
                                onClick={Verify_OTP}
                                className="btn  btn-primary flex inputlogin"
                            >
                                <span>Verify</span>
                            </button> */}
                        </div>
                        <div
                            style={{
                                flexDirection: "row",
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <Link to={"/panel"} className="signupbtn">
                            <button
                                type="submit"
                                onClick={Verify_OTP}

                                className="btn  btn-primary flex inputlogin"
                            >
                                <span>Submit </span>
                            </button></Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default OTPValidation;