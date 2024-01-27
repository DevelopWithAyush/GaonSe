import React ,{useState}from 'react'
import "./LoginForm.css"
import { Link } from 'react-router-dom'
const LoginForm = () => {

    const [phonecss,setphonecss] = useState({top:"50%"})
    const [passwordcss,setpasswordcss] = useState({top:"50%"})
let [passwordshow ,setpasswordshow]= useState(true)
console.log(passwordshow)

    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Handle the login logic here (e.g., make an API request)

        // For demonstration purposes, let's log the values to the console
        console.log('Phone:', phone);
        console.log('Password:', password);
    };

  return (
    <form onSubmit={handleSubmit} className='login-form'>
    <div className="login-phone">
<label htmlFor="phone" style={phonecss}>Phone Number</label>

    <input
    onFocus={()=>{
        setphonecss({top:"10%",fontSize:"1.5rem"})
    }}
    onBlur={()=>{
        phone.length >0?setphonecss({top:"10%"}):setphonecss({top:"50%"})
    }}
        type="number"
        id="phone"
        name="phone"
        minLength={10}
        // placeholder="Enter your phone number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
    />
    </div>

        <div className="login-password">
    <label htmlFor="phone" style={passwordcss}>password</label>
    {passwordshow === true ?<i className="fa-solid fa-eye-slash" onClick={()=>{
            setpasswordshow(false)
        }}></i>: <i className="fa-solid fa-eye" onClick={()=>{
            setpasswordshow(true)
         }}></i>}

       
        <input
        onFocus={()=>{
            setpasswordcss({top:"0%"})
        }}
        onBlur={()=>{
            password.length>0?setpasswordcss({top:"0%"}):setpasswordcss({top:"50%"})
        }}
        type={passwordshow === true?`password`:"text"}
        id="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
    />

        </div>

    <button type="submit">submit</button>
    <Link className='navlink'>Forget password</Link>
</form>
  )
}

export default LoginForm
