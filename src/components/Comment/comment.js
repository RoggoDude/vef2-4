

export default function LoginForm(){

    return(
        <form className="form" method="post" action="/admin/login">
            <div className="field">
                <label>Athugasemd</label>
                <input type="text" name="username" id="username"></input>
            </div>
            <button className="button">Skrá mig</button>

        </form>
    )
}