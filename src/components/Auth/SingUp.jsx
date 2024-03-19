import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { MyContext } from '../Context';
import Swal from 'sweetalert2';

const SingUp = () => {
    const {createUser} = useContext(MyContext)
    const handleSingUp = (e) =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
        .then(result=>{
            console.log('user create done', result.user)
            //  new use has been create
            const createTime = result.user.metadata.creationTime
            const user = {email ,createTime } 
            fetch('http://localhost:5000/users', {
               method:"POST", 
               headers : {
                'content-type' : 'application/json'
               },
               body : JSON.stringify(user)
            })
            .then(res=>res.json())
            .then(data =>{
                console.log(data)
                if(data.insertedId){
                    Swal.fire({
                        title: "create user success ",
                         icon: "success"
                      });
                      form.reset()
                }
            })
        })
        .catch(error=>console.error(error))
     }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSingUp} className="card-body">
                         
                             <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" 
                                 name='email'
                                placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" 
                                name='password'
                                placeholder="password" className="input input-bordered" required />
                                
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">SingUp</button>
                            </div>
                            <p>  have a account ? <NavLink to={'/login'}>Login</NavLink></p>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SingUp;