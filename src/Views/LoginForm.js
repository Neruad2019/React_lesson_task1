import React from "react";

function LoginForm(props) {
    const [Email,setEmail] = React.useState('')
    const [Password,setPassword] = React.useState('')

    function emailHandler(event){
        event.preventDefault()

        setEmail(event.target.value)
    }

    function passwordHandler(event){
        event.preventDefault()

        setPassword(event.target.value)
    }

    function Authorization(event){
        
        event.preventDefault()
        setEmail('')
        setPassword('')

        const Users=props.Users
        let f=true
        for (let int = 0; int < Users.length; int++) {
            if(Users[int].email===Email && Users[int].password===Password){
                f=!f
                alert(`Welcome, ${Users[int].fullname}!`)
                break
            }
        }
        if(f){
            alert(`No such User!`)
        }
    }

  return (
    <div className="col-3">
          <form className="min-vw-75 mr-3" onSubmit={Authorization}>
            <div className="form-group">
              <small id="emailHelp" className="form-text text-muted">
                Email
              </small>
              <input
                value={Email}
                onChange={emailHandler}
                type="email"
                className="form-control rounded-0 border-top-0 border-left-0 border-right-0 shadow-none"
                aria-describedby="emailHelp"
                required
              />
            </div>
            <div className="form-group">
              <small className="form-text text-muted">Password</small>
              <input
                value={Password}
                onChange={passwordHandler}
                type="password"
                className="form-control rounded-0 border-top-0 border-left-0 border-right-0 shadow-none"
                id="password"
                required
              />
            </div>
            <div className="form-group form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" for="exampleCheck1">
                Remember me
              </label>
            </div>
            <button type="submit" class="btn btn-outline-primary font-weight-bold"  style={{borderWidth:'2px'}}>Sign in</button>
          </form>
        </div>
  );
}

export default LoginForm;





