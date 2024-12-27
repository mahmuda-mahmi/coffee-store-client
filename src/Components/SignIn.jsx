import { Button, Label, TextInput } from 'flowbite-react';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const SignIn = () => {
    const { createUser } = useContext(AuthContext);
    const handleLoginSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        createUser(email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.log(error);
            })
        // signIn(email, password)
        //     .then(result => {
        //         console.log(result.user)
        //         navigate(location?.state ? location.state : '/');
        //     })
        //     .catch(error => {
        //         console.log(error);
        //     })
    }
    return (
        <div className="w-10/12 mx-auto">
            <h1 className="mx-auto text-center my-8 font-bold text-xl">Sign In Now!</h1>
            <div>
                <form onSubmit={handleLoginSubmit} className="flex max-w-md mx-auto flex-col gap-4">
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email1" value="Your email" />
                        </div>
                        <TextInput id="email1" type="email" name="email" placeholder="Email" required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="password1" value="Your password" />
                        </div>
                        <TextInput id="password1" name="password" type="password" placeholder="Password" required />
                    </div>
                    <div className="flex items-center gap-2">
                        <a href="">Forgot Password?</a>
                    </div>
                    <Button className="px-6 py-2 rounded bg-zinc-700 text-white flex items-center gap-4" type="submit">Login</Button>
                </form>
                <p className="mx-auto text-center mt-5">New Here? Please <Link className="font-bold" to="/signUp">Sign Up</Link> </p>
                <p className="mx-auto text-center mt-5">Login with <button className="btn btn-sm btn-ghost">Google</button></p>
            </div>
        </div>
    );
};

export default SignIn;