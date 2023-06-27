import { useState } from 'react'

function LoginPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
 
    async function loginUser(event){
        event.preventDefault(); // not sure what this is for. 
        const response = await fetch("http://localhost:1337/api/login", {
            method: "POST", 
            headers: {
                'Content-type':'application/json'
            }, 
            body: JSON.stringify({
                email, 
                password,
            }),
            // this will basically convert something like this -> {name: "aditya"} to this -> {"name": "aditya"}
        }) 

        const data = await response.json(); 
        // I THINK, the data here is just the status, i.e., 
        console.log(data);
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={loginUser}>
                
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder='email'
                />
                <br></br>
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder='password'
                />
                <br></br>

                <input type="submit" value="Login" />
            </form>
        </div>
    )
}

export default LoginPage;