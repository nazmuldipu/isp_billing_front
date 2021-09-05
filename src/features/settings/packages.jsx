/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import PackagesForm from "./packagesForm";
import { useDispatch, useSelector } from "react-redux";
import { loadPackages, updatePackages, savePackages } from "./packagesSlice";
import PackagesTable from "./packagesTable";

const Packages = () => {
  const dispatch = useDispatch();
  const packagesPage = useSelector((state) => state.entities.packages.page);
  const paginate = useSelector((state) => state.pagination);
  const [packages, setPackages] = useState({});
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    dispatch(loadPackages(paginate));
  }, [paginate]);

  const handleSelect = async (packages) => {
    setEdit(true);
    setPackages(packages);
  };

  const handleClear = async () => {
    setEdit(false);
    setPackages({});
  };

  const handleSubmit = async (event) => {
    if (edit) {
      dispatch(updatePackages(packages._id, event));
    } else {
      dispatch(savePackages(event));
    }
    setPackages({});
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 m-3 gap-3">
      <div className="rounded-md">
        <PackagesForm
          packages={packages}
          onSubmit={handleSubmit}
          onClear={handleClear}
        ></PackagesForm>
      </div>

      <div className="md:col-span-2">
        <PackagesTable packagesPage={packagesPage} select={handleSelect}></PackagesTable>       
      </div>
    </div>
  );
};

export default Packages;
