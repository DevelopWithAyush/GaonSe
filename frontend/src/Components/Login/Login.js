import React, { useState, useEffect, useContext } from 'react';
import OtpInput from "otp-input-react";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';
import Spinner from '../Spinner/Spinner';
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from '../../firebase.config';
import "./Login.css"
import { AlertContext } from '../../Context/AlertContext/AlertState';

const Login = (props) => {
    const { handleonclose } = props;
    const alercontext = useContext(AlertContext)
    const { showAlert } = alercontext;
    const [otp, setOtp] = useState("");
    const [showotp, setShowotp] = useState(false);
    const [ph, setPh] = useState("");
    const [loader, setLoader] = useState(false);

    const url = "http://localhost:5000/"


    useEffect(() => {
        initializeRecaptcha();
    }, []);

    const handleSubmit = async () => {
        try {
          const response =   await fetch(`${url}api/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ph})
            });

            const json = await response.json()
            handleonclose()
            showAlert("true", "login successfully")
            localStorage.setItem("authToken",json.authToken)
            setOtp("")
        } catch (error) {
            showAlert("fail",error.message)
            handleonclose()
        }
    };

    const initializeRecaptcha = () => {
        if (!window.recaptchaVerifier) {
            window.recaptchaVerifier = new RecaptchaVerifier(
                "recaptcha-container",
                {
                    size: "invisible",
                    callback: (response) => {
                        // Callback function
                    },
                    "expired-callback": () => {
                        // Expired callback
                    },
                },
                auth
            );
        }
    };

    const onSignup = (e) => {
        e.preventDefault()
        setLoader(true);

        const formatPh = "+" + ph;
        const appVerifier = window.recaptchaVerifier;
        
        signInWithPhoneNumber(auth, formatPh, appVerifier)
        .then((confirmationResult) => {
            window.confirmationResult = confirmationResult;
            setLoader(false);
            setShowotp(true);
            showAlert("true", "Otp send successfully")
        })
        .catch((error) => {
            showAlert("false", error.message)
            console.error("Error sending OTP:", error);
            setLoader(false);
            });
    };

    const onOTPVerify = (e) => {
        e.preventDefault()
        setLoader(true);
        window.confirmationResult
        .confirm(otp)
            .then((res) => {
                setLoader(false);
                setShowotp(false)
                handleSubmit()
                setOtp("")
            })
            .catch((err) => {
                setLoader(false);
                showAlert("false", err.message)
            });
    };

    return (
        <div className='logincontainer'>
            <div id="recaptcha-container"></div>
            <img src="https://res.cloudinary.com/dpqsatnvt/image/upload/v1707135376/logo_v7z9ah.png" alt="logo" />
            <div className="login-box">
                {showotp ? (
                    <>
                        <label htmlFor="otp">Enter your OTP</label>
                        <OtpInput
                            value={otp}
                            onChange={setOtp}
                            OTPLength={6}
                            otpType="number"
                            disabled={false}
                            autoFocus
                            className="otp-input"
                        />
                        <button onClick={onOTPVerify} className='logincontainer-btn'>
                            {loader && <Spinner />}
                            <span>Verify your OTP</span>
                        </button>
                        <p onClick={onSignup}> resend the otp</p>
                    </>
                ) : (
                    <>
                        <label htmlFor="otp">Enter your Phone number</label>
                        <PhoneInput
                            country={"in"}
                            value={ph}
                            onChange={setPh}
                            className="phone"
                            inputStyle={{
                                width: "100%",
                                height: '55px',
                                fontSize: '1.5rem',
                                padding: ' 0rem 5rem',
                                borderRadius: '4px',
                                border: '2px solid black',
                                boxSizing: 'border-box',
                                fontWeight: "500",
                                color: "#794024",

                            }}
                            containerStyle={{
                                color: "#794024",
                                width: '80%',
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                marginBottom: '16px',
                            }}
                            buttonStyle={{
                                borderRadius: '4px',
                                backgroundColor: '#fff',
                                border: '2px solid black',
                                height: '55px',
                                cursor: 'pointer',
                                position: "absolute",
                                left: "0",
                                top: "0",

                            }}
                        />

                        <button className='logincontainer-btn' onClick={onSignup}>
                            {loader && <Spinner />}
                            <span>Send OTP to your Number</span>
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default Login;
