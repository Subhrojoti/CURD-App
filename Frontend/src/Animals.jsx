import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Animals = () => {
  const [animal, setAnimal] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/")
      .then((res) => setAnimal(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = async (id) => {
    try {
      axios.delete("http://localhost:4000/animals/" + id);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-red-300">
      <div className="w-full md:w-5/6 lg:w-4/6 xl:w-3/6 bg-white rounded-lg p-6 shadow-lg">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 md:mb-0">
            Animal List
          </h2>
          <Link
            to="/create"
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md"
          >
            Add New Animal +
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="py-2 px-4 bg-gray-200 text-left font-semibold text-gray-700 border border-gray-300">
                  Animal
                </th>
                <th className="py-2 px-4 bg-gray-200 text-left font-semibold text-gray-700 border border-gray-300">
                  Info
                </th>
                <th
                  className="py-2 px-4 bg-gray-200 text-left font-semibold text-gray-700 border border-gray-300 flex justify-center
                "
                >
                  Action
                </th>
              </tr>
            </thead>
            {animal.length === 0 ? (
              <tbody>
                <tr>
                  <td colSpan="3" className="text-center">
                    <h2 className="text-3xl font-bold text-gray-700 p-4">
                      No animals added yet 🐾
                    </h2>
                  </td>
                </tr>
              </tbody>
            ) : (
              <tbody>
                {animal.map((data, i) => (
                  <tr key={i}>
                    <td className="border border-gray-300 py-2 px-4 font-semibold text-lg text-gray-800 capitalize">
                      {data.Name}
                    </td>
                    <td className="border border-gray-300 py-2 px-4 capitalize">
                      {data.Info}
                    </td>
                    <td className="border border-gray-300 py-2 px-4">
                      <div className="flex justify-center gap-2">
                        <Link
                          to={`update/${data.ID}`}
                          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
                        >
                          Update
                        </Link>
                        <button
                          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md"
                          onClick={(e) => handleDelete(data.ID)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Animals;
