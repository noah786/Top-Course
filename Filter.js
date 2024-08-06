function Filter(props) {
  let filterData = props.filterData;
  let Category = props.Category;
  let setCategory = props.setCategory;

  function filterHandler(title) {
    setCategory(title)
  }
  return (
    <div className=" flex justify-center gap-x-4 w-11/12 mx-auto p-4 gap-y-4 flex-wrap">
      {filterData.map((data) => {
        return (
          <button
            key={data.id}
            className={`text-[20px] text-white bg-black px-2 py-1 rounded-md mt-4
            hover: transition-all duration-200 border-2
            ${Category === data.title ? "bg-opacity-60 border-white" : "bg-opacity-40 border-transparent"}
            `} 
            onClick={() => filterHandler(data.title)}
          >
            {data.title}
          </button>
        );
      })}
    </div>
  );
}

export default Filter;
