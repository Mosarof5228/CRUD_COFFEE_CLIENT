import Swal from "sweetalert2";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);
    const handleDelete = (_id) => {
        console.log("Delete is coming", _id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/users/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                        const remaingUsers = users.filter(user => user._id !== _id);
                        setUsers(remaingUsers);


                    })




            }
        });

    }
    return (
        <div>
            <h2>Here its showing all users: {users.length}</h2>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Email</th>
                                <th>Time</th>
                                <th>Delation</th>
                                <th>Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                users.map((user, index) =>
                                    <tr className="" key={user._id}>
                                        <th>{index + 1}</th>
                                        <td>{user.email}</td>
                                        <td>{user?.createdTime}</td>
                                        <td onClick={() => handleDelete(user._id)} className="cursor-pointer">Delete</td>
                                        <td className="cursor-pointer">Update</td>
                                    </tr>
                                )
                            }


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Users;