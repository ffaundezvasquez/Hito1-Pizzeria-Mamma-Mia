import React from "react";
import { useState } from "react";

export default function Register() {
    //Estados del formulario de cada input
    
  const [mail, setMail] = useState("");
  const [pass1, setPass1] = useState("");
  const [confirmPassword, setConfirmPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');



  const handleSubmit = (e) => {
    e.preventDefault()
    if(!mail.trim() || !pass1.trim() || !confirmPassword.trim()){
        alert('Debes completar todos los campos'),
        setSuccessMessage("");
    } else if (pass1.length <6){
            alert("La contraseña debe contener almenos 6 caracteres.");
            setSuccessMessage("");
        } else if (pass1 !== confirmPassword) {
            alert('Las contraseñas no coinciden.');
            setSuccessMessage('');

        } else {
            alert('Tu cuenta ha sido creada.');
            setSuccessMessage('Tu cuenta ha sido creada.');
            setMail('');
            setPass1('');
            setConfirmPassword("");
        };
    }

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>

            <div className="form-group">
                <p>Email</p>
                <input type="email" className="form-control"  value={mail}  onChange={(e) => setMail(e.target.value)}/>
            </div>
            <div className="form-group">
                <p>Contraseña</p>
                <input type="password" className="form-control" value={pass1} onChange={(e) => setPass1(e.target.value) } />
            </div>
            <div className="form-group">
                <p>Confirmar contraseña</p>
                <input type="password" className="form-control" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value) }/>
            </div>
            <button className="btn btn-dark mt-3" type="submit">Enviar</button>
            <br></br>
            </form>
            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
        </div>
    );
};