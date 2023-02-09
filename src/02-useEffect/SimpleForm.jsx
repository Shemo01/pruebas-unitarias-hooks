import { useState, useEffect } from "react"
import Message from "./Message";

const SimpleForm = () => {

    const [formState, setformState] = useState({
        username: 'Pedro',
        email: 'pedro@mail.com'
    });

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setformState({
            ...formState,
            [name]: value
        })
    };

    
    useEffect(() =>{
        // console.log('useEffect se llamo');
    }, []);
    
    useEffect(() =>{
        // console.log('formState cambio');
    }, [formState]);

    useEffect(() =>{
        // console.log('email cambio');
    }, [email]);

    


    return (
        <>
            <h1>Formulario Simple</h1>
            <hr />

            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
            />

            <input
                type="email"
                className="form-control mt-2"
                placeholder="lopz@google.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />
            {
                (username === 'Pedro2') && <Message />
            }
        </>
    )
}

export default SimpleForm
