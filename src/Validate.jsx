import { useState } from "react"
import "./style.css"

function Validate() {

    const [username, setUsername]=useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword]= useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const [errorUsername, setErrorUsername]=useState("")
    const [errorEmail, setErrorEmail] = useState("");
    const [errorPassword, setErrorPassword]= useState("")
    const [errorErroronfirmPassword, setErrorConfirmPassword] = useState("")

    const [userColor, setUserColor] = useState("")
    const [emailColor, setEmailColor] = useState("")
    const [passwordColor, setpasswordColor] = useState("")
    const [confirmPasswordColor, setConfirmPasswordColor] = useState("")

    function validate(e){
        e.preventDefault()
        
        if(username.length>8){
            setErrorUsername("")
            setUserColor("green");
        }else{
            setErrorUsername("Username Must be 8 letters long")
            setUserColor("red")
        }

        if(email.includes("@gmail")){
            setErrorEmail("")
            setUserColor("green")
        }else{
            setErrorEmail("Email should Have @gmail")
            setEmailColor("red")
        }

        if(password.length > 8){
            setErrorPassword("")
            setpasswordColor("green")
        }else{
            setErrorEmail("Password should have atleast 8 characters")
            setpasswordColor("red")
        }

        if(password!="" && password==confirmPassword){
            setErrorConfirmPassword("")
            setConfirmPasswordColor("green")

        }else{
            setErrorConfirmPassword("Password mismatch!!")
            setConfirmPasswordColor("red")
        }
    }
  return (
    <>
        <div className="card">
            <div className="card-image"></div>
            <form >
                <input 
                type="text" 
                placeholder="Enter your username" 
                style={{borderColor: userColor}}
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
                />
                <p className="error">{errorUsername}</p>

                <input 
                type="email" 
                placeholder="Enter your email" 
                style={{borderColor: emailColor}}
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />
                <p className="error">{errorEmail}</p>

                <input 
                type="password" 
                placeholder="Enter your password" 
                style={{borderColor: passwordColor}}
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                />
                <p className="error">{errorPassword}</p>

                <input 
                type="password" 
                placeholder="Confirm your password" 
                style={{borderColor: confirmPasswordColor}}
                value={confirmPassword}
                onChange={(e)=>setConfirmPassword(e.target.value)}
                />
                <p className="error">{errorErroronfirmPassword}</p>

                <button className="submit-btn" onClick={validate}>Submit</button>
               

            </form>
            
        </div>
      
    </>
  )
}

export default Validate
