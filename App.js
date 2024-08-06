import React from "react";
import { filterData, apiUrl } from "./data";
import Nav from "./components/Nav";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { useState, useEffect } from "react";
import Spinner from "./components/Spinner";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";

const App = () => {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [Category, setCategory] = useState(filterData[0].title);

  async function fetchData() {
    setLoading(true);
    try {
      let response = await fetch(apiUrl);
      let output = await response.json();
      // the o/p contains the data returned from the api.
      setCourses(output.data);
    } catch (error) {
      toast.error("Please check your internet connection!")
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className=" flex flex-col min-h-screen bg-bgDark2">
      <Nav/>

    <div className="bg-bgDark2">
    <Filter filterData={filterData} Category = {Category} setCategory = {setCategory} />

    <div className="w-11/12 flex flex-wrap justify-center items-center
     mx-auto max-w-[1200px] min-h-[50vh] overflow-hidden mt-4">
    {
      loading ? <Spinner/> : <Cards courses={courses} Category = {Category}/>
    }
    </div>
    </div>
     
      <ToastContainer/>
    </div>
  );
};

export default App;
