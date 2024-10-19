import React, {useState} from "react";

const Form = () => {

    const [email, setEmail] = useState ('')
    const [password, setPassword] = useState ('')

    function sendData (e){
        e.preventDefault ()
        console.log ('send data')
        console.log (email, password)

        const requestOptions ={
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(
                {
                    "email":email,
                    "password":password
                }
            )
        };

        fetch(process.env.BACKEND_URL + 'api/login', requestOptions)
            .then (response => response.json ())
            .then (data => console.log (data))


    }
    return (
        <div>
            <form className="w-50 mx-auto" onSubmit={sendData}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" />
                    
                    
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input value={password} onChange={(e)=> setPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1" />
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>

            </form>

        </div>
    )


}
export default Form;