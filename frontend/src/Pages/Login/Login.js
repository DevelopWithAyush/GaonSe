import React, { useEffect, useState } from 'react'
import "./Login.css"
import login from "../../Components/Assets/login.png"

const Login = () => {
    const [loginbox, setlogin] = useState({ transform: "scale(0)" })
    useEffect(() => {
        setlogin({ transform: "scale(1)" })
        // eslint-disable-next-line
    }, {})
    const [loginbtn, setloginbtn] = useState({ left: "0%" })
    const [btnbubble, setbtnbubble] = useState("login")
    const [inner, setInner] = useState({ transform: "rotateY(0deg)" })

    const handletogglemenu = () => {
        if (loginbtn.left === "0%") {
            setloginbtn({ left: "50%" })
            setbtnbubble("signup")
            setInner({ transform: "rotateY(180deg)" })

        } else {
            setloginbtn({ left: "0%" })
            setbtnbubble("login")
            setInner({ transform: "rotateY(0deg)" })
        }

    }

    return (
        <div className='loginpage' style={loginbox}>
            <div className="bubblebox">
                {/* <div className="bubble bubble1">login</div>
                <div className="bubbles bubble1">login</div> */}
                <div className="bubble bubble3">sprint</div>
                <div className="bubbles bubble3">sprint</div>
                <div className="bubble bubble4">sprint</div>
                <div className="bubbles bubble4">sprint</div>
                <div className="bubble bubbles5">{btnbubble}</div>
                <div className="bubbles bubble5">login</div>
            </div>
            <div className="logincontainer">
                <div className='loginbox' >
                    <div className="loginform">
                        <div className="loginbtn" onClick={handletogglemenu}>
                            <div className="btnbubble" style={loginbtn}>{btnbubble}</div>
                        </div>
                        <div className="flip-card ">
                            <div className="flip-card-inner" id="innercard" style={inner} >
                                <div className="flip-card-front">
                                    this is login form
                                </div>
                                <div className="flip-card-back">
                                    this is sign up
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="loginimg">
                        <img src={login} alt="" />

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login
