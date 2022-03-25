import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';
import React from 'react';


export default function Login({ut, inn, status}){

    return(
        <div className='login'>
            <hr></hr>
            {status === "true" ? 
            <>
            <p>Skráður inn sem Test</p>
            <Button onClick={ut}>Útskrá</Button>
            </>
            
            : <>
                <Link to={"/login"}>
                    <p>Innskráning</p></Link>
                <Button onClick={inn}>Nýskráning</Button>
            </>
            
            }
        </div>
    )
}