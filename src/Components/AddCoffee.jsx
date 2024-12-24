import React from 'react';
import Swal from 'sweetalert2'

const AddCoffee = () => {
    const handleAddCoffee = e => {
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const details = form.details.value;
        const category = form.category.value;
        const photo = form.photo.value;
        const newCoffee = { name, chef, supplier, taste, details, category, photo };
        console.log(newCoffee);


        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee added successfully!',
                        icon: 'success',
                        confirmButtonText: 'Done'
                    })
                }
            })
    }
    return (
        <div className='p-10'>
            <div className='bg-gray-200 py-5 w-10/12 mx-auto'>
                <div className='w-10/12 mx-auto my-10 text-center'>
                    <h2 className='text-3xl font-bold my-3'>Add New Coffee</h2>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                </div>
                <form className="grid grid-cols-2 gap-5 w-10/12 mx-auto" onSubmit={handleAddCoffee}>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Name</span>
                        </div>
                        <input
                            type="text"
                            placeholder="Name"
                            name="name"
                            className="input input-bordered w-full "
                        />
                    </label>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Chef</span>
                        </div>
                        <input
                            type="text"
                            placeholder="Chef"
                            name="chef"
                            className="input input-bordered w-full "
                        />
                    </label>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Supplier</span>
                        </div>
                        <input
                            type="text"
                            placeholder="Supplier"
                            name="supplier"
                            className="input input-bordered w-full "
                        />
                    </label>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Taste</span>
                        </div>
                        <input
                            type="text"
                            placeholder="Taste"
                            name="taste"
                            className="input input-bordered w-full "
                        />
                    </label>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Category</span>
                        </div>
                        <input
                            type="text"
                            placeholder="Category"
                            name="category"
                            className="input input-bordered w-full "
                        />
                    </label>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Details</span>
                        </div>
                        <input
                            type="text"
                            placeholder="Details"
                            name="details"
                            className="input input-bordered w-full "
                        />
                    </label>
                    <label className="form-control col-span-2 w-full ">
                        <div className="label">
                            <span className="label-text">Photo</span>
                        </div>
                        <input
                            type="text"
                            placeholder="Photo"
                            name="photo"
                            className="input input-bordered w-full "
                        />
                    </label>
                    <div className="col-span-2">
                        <button type="submit" className="btn w-full bg-zinc-900 text-white py-3 rounded-md hover:bg-zinc-200 hover:text-black hover:border">Add Coffee</button>
                    </div>
                </form>

            </div>

        </div>
    );
};

export default AddCoffee;