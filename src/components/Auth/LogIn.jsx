import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { MyContext } from '../Context';

const LogIn = () => {
    const {logInUser} = useContext(MyContext)
    const handleLogIn = e =>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        logInUser(email, password)
        .then(result=>{
            const createTime = result.user.metadata.creationTime
            const user = {email ,createTime } 
            fetch('http://localhost:5000/loginUser', {
               method:"POST", 
               headers : {
                'content-type' : 'application/json'
               },
               body : JSON.stringify(user)
            })
        })
        .catch(error=>console.error(error))
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogIn} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required name='email' />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required  name='password'/>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <p>don't have a account ? <NavLink to={'/singup'}>Sinup</NavLink></p>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default LogIn;