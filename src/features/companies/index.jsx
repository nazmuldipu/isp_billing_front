/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadCompanies, saveCompany, updateCompany } from "./companiesSlice";

import CompanyTable from "./companyTable";
import CompanyForm from "./companyForm";

const CompanyIndex = () => {
  const dispatch = useDispatch();
  const companyPage = useSelector((state) => state.entities.companies.page);
  const paginate = useSelector((state) => state.pagination);

  useEffect(() => {
    dispatch(loadCompanies(paginate));
  }, [paginate]);

  const [company, setCompany] = useState({});
  const [edit, setEdit] = useState(false);

  const handleSelect = async (company) => {
    setCompany(company);
    setEdit(true);
  };

  const handleClear = async () => {
    setEdit(false);
    setCompany({});
  };

  const handleSubmit = async (event) => {
    if (edit) {
      dispatch(updateCompany(company._id, event));
    } else {
      dispatch(saveCompany(event));
    }
    setCompany({});
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 m-3 gap-3">
      <div className="rounded-md">
        <CompanyForm
          company={company}
          onSubmit={handleSubmit}
          onClear={handleClear}
        ></CompanyForm>
      </div>

      <div className="md:col-span-2">
        <CompanyTable
          companyPage={companyPage}
          select={handleSelect}
        ></CompanyTable>
      </div>
    </div>
  );
};

export default CompanyIndex;
