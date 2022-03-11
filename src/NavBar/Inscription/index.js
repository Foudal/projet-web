import './style.css';
import { useState } from 'react'

function Inscription() {
    const [showForm, setShowForm] = useState(false)

    const show = () => {
        setShowForm(!showForm)
    }

    return (
        <li className="inscription-link">
            <button className="inscription-btn" onClick={show}>
                Inscription
            </button>
                { showForm && (
                    <InscriptionForm click={show} />
                )
            }
        </li>
    );
}

function InscriptionForm(props) {

  return (
    <div className="inscription-form">
        <button className='close-btn' onClick={props.click}></button>
        <form className='inscription-box' name="inscription-box" target="#here" method="post">

            <label htmlFor='nom'>
                Nom
            </label>
            <input name="username" type="text" id='username'/>
            
            <label htmlFor='username'>
                Username
            </label>
            <input name="username" type="text" id='username'/>

            <label htmlFor='password'>
                Password
            </label>
            <input name="password" type="password" id='password'/>

            <input type="submit" />
        </form>
    </div>
  );
}

export default Inscription;