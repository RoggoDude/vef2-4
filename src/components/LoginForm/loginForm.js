import {Link} from 'react-router-dom';

export default function LoginForm(){

    return(
        <>
        <h1>Innskráning</h1>
        <form className="form" method="post" action="/admin/login">
            <div className="field">
                <label>Notendanafn</label>
                <input type="text" name="username" id="username"></input>
            </div>
            <div className="field">
                <label>Lykilorð</label>
                <input type="password" name="password" id="password"></input>
            </div>
            <button className="button">Innskrá</button>
            <Link to={"/"}>
                <p>Til baka</p></Link>
        </form>
        </>
    )
}