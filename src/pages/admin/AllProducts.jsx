import { FaEdit, FaTrash } from "react-icons/fa";

export default function AllProducts() {
    return (
        <div className="card bg-base-100 shadow p-4">
            <h2 className="text-xl font-semibold mb-4">All Products</h2>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <div className="card bg-base-200 p-3">
                    <img src="/shirt.jpg" className="rounded mb-2" />
                    <h3 className="font-semibold">Denim Shirt</h3>

                    <div className="flex justify-between mt-3">
                        <button className="btn btn-xs btn-info">
                            <FaEdit />
                        </button>
                        <button className="btn btn-xs btn-error">
                            <FaTrash />
                        </button>
                        <input type="checkbox" className="toggle toggle-success" />
                    </div>
                </div>
            </div>
        </div>
    );
}
