import { motion } from "framer-motion";

export default function ManageUsers() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="card bg-base-100 shadow p-4"
        >
            <h2 className="text-xl font-semibold mb-4">Manage Users</h2>

            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>John Doe</td>
                            <td>john@mail.com</td>
                            <td>
                                <select className="select select-sm">
                                    <option>buyer</option>
                                    <option>manager</option>
                                    <option>admin</option>
                                </select>
                            </td>
                            <td>
                                <span className="badge badge-success">Active</span>
                            </td>
                            <td>
                                <button className="btn btn-xs btn-error">Suspend</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </motion.div>
    );
}
