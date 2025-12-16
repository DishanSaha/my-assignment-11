export default function AllOrders() {
    return (
        <div className="card bg-base-100 shadow p-4">
            <h2 className="text-xl font-semibold mb-4">All Orders</h2>

            <div className="flex flex-col md:flex-row gap-2 mb-4">
                <input
                    type="text"
                    placeholder="Search Order..."
                    className="input input-bordered w-full md:w-1/2"
                />
                <select className="select select-bordered">
                    <option>All</option>
                    <option>Pending</option>
                    <option>Approved</option>
                    <option>Delivered</option>
                </select>
            </div>

            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Buyer</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>#ORD123</td>
                            <td>ABC Buyer</td>
                            <td>
                                <span className="badge badge-warning">Pending</span>
                            </td>
                            <td>
                                <button className="btn btn-xs btn-outline">View</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
