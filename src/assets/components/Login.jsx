import React from 'react'
import { useState } from 'react'


export default function Login() {


const [mail, setMail] = useState("")
const [password, setPassword] = useState("")
const [successMessage, setSuccessMessage] = useState('');

const handleLogin = (e) => {
    e.preventDefault()
    if (!mail.trim() || !password.trim()){
        alert('Debes completar todos los campos');
        setSuccessMessage("")
        } else {
            alert("Cuenta iniciada existosamente!");
            setSuccessMessage("Cuenta iniciada existosamente!")
            setMail("");
            setPassword("");
        }
};

  return (
    <div>
        <h1>Login </h1>
            <form onSubmit={handleLogin}>
            <div className="form-group">
                <p>Email</p>
                <input type="email" value={mail} className="form-control" onChange={(e) => setMail(e.target.value) }/>
            </div>
            <div className="form-group">
                <p>Contraseña</p>
                <input type="password" value={password} className="form-control" onChange={(e) => setPassword(e.target.value) } />
            </div>
            <button className="btn btn-dark mt-3" type="submit">Ingresar</button>
            <br></br>
            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
            </form>
    </div>
  )
}
