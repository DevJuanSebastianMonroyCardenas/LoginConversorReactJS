import { useState } from 'react';
import './App.css';
import Conversor from './Conversor';

function App() {
    const [usuario, setUsuario] = useState('');
    const [clave, setClave] = useState('');
    const [logueado, setLogueado] = useState(false);

    function cambiarUsuario(evento) {
        setUsuario(evento.target.value);
    }

    function cambiarClave(evento) {
        setClave(evento.target.value);
    }

    function ingresar() {
        if (usuario === 'admin' && clave === 'admin123') {
            alert("Bienvenido Administrador");
            setLogueado(true);
        } else {
            alert("Usuario o clave incorrecto");
        }
    }

    if (logueado) {
        return (
            <div className="container">
                <Conversor />
            </div>
        );
    }

    return (
        <div className="container">
            <h1>Inicio de sesión</h1>
            <input type="text" name="usuario" id="usuario" value={usuario} onChange={cambiarUsuario} />
            <input type="password" name="clave" id="clave" value={clave} onChange={cambiarClave} />
            <button onClick={ingresar}>Ingresar</button>
        </div>
    );
}

export default App;
