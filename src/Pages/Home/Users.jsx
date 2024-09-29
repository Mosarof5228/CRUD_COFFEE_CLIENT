import { useLoaderData } from "react-router-dom";

const Users = () => {
    const loadedUsers = useLoaderData();
    return (
        <div>
            <h2>Here its showing all users: {loadedUsers.length}</h2>
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
                                loadedUsers.map((user, index) =>
                                    <tr className="" key={user._id}>
                                        <th>{index + 1}</th>
                                        <td>{user.email}</td>
                                        <td>{user?.createdTime}</td>
                                        <td className="cursor-pointer">Delete</td>
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