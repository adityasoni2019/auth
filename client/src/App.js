import { useState } from 'react'
import './App.css'

function App() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
 
    async function registerUser(event){
        event.preventDefault(); // not sure what this is for. 
        const response = await fetch("http://localhost:1337/api/register", {
            method: "POST", 
            headers: {
                'Content-type':'application/json'
            }, 
            body: JSON.stringify({
                name, 
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
            <h1>Register</h1>
            <form onSubmit={registerUser}>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder='name'
                />
                <br></br>
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

                <input type="submit" value="register" />
            </form>
        </div>
    )
}

export default App