import { Button, Label, TextInput } from 'flowbite-react';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';

const SignUp = () => {
    const { createUser } = useContext(AuthContext);
    const handleRegisterSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const photo = form.photoUrl.value;
        console.log(email, password, photo, name);
        createUser(email, password)
            .then(result => {
                const newUser = { name, email };
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newUser),
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log('user created', data);
                    })
                console.log(result.user);
                const user = result.user;
                updateProfile(user, {
                    displayName: name, photoURL: photo

                })
            })
            .catch((error) => {
                console.log(error.message);
            })
    }
    return (
        <div className="w-10/12 mx-auto">
            <h1 className="mx-auto text-center my-8 font-bold text-xl">Register Your Account Here!</h1>
            <form onSubmit={handleRegisterSubmit} className="flex max-w-md mx-auto flex-col gap-4">

                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="Name" value="Your name" />
                    </div>
                    <TextInput id="name" type="text" name="name" placeholder="Name" required shadow />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="email2" value="Your email" />
                    </div>
                    <TextInput id="email2" type="email" name="email" placeholder="Email" required shadow />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="photoUrl" value="Photo URL" />
                    </div>
                    <TextInput id="photoUrl" type="text" name="photoUrl" placeholder="Photo URL" required shadow />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="password2" value="Your password" />
                    </div>
                    <TextInput id="password2" name="password" type="text" required shadow />
                </div>

                <Button type="submit" className="px-6 py-2 rounded hover:bg-zinc-800 bg-zinc-700 text-white flex items-center gap-4 mt-4">Register new account</Button>
            </form>

            <p className="mx-auto text-center mt-5">Already have an account? Please <Link className="font-bold" to="/signIn">Login</Link> </p>

        </div >
    );
};

export default SignUp;