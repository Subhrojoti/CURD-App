import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const [animalName, setAnimalName] = useState("");
  const [animalInfo, setAnimalInfo] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:4000/update/" + id, { id, animalName, animalInfo })
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex justify-center items-center h-screen bg-red-300">
      <div className="w-full md:w-96 bg-white rounded-lg p-6 shadow-lg">
        <div className="text-center mb-4">
          <h2 className="text-white font-bold text-2xl bg-green-600 rounded-md p-2">
            Update Animal
          </h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="animalName"
              className="block text-sm font-medium text-gray-700"
            >
              Animal Name
            </label>
            <input
              type="text"
              id="animalName"
              className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-sm px-1 py-2"
              placeholder="Enter Animal Name"
              value={animalName}
              onChange={(e) => setAnimalName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="animalInfo"
              className="block text-sm font-medium text-gray-700 "
            >
              Animal Info
            </label>
            <textarea
              id="animalInfo"
              className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-sm min-h-48"
              placeholder="Description"
              value={animalInfo}
              onChange={(e) => setAnimalInfo(e.target.value)}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md w-full"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default Update;
