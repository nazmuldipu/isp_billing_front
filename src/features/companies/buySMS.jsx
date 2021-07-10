/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BuySMSForm from "./buySMSForm";
import { loadCompanies, addSMS } from "./companiesSlice";
import CompanyTable from "./companyTable";

const BuySMS = () => {
  const dispatch = useDispatch();
  const companyPage = useSelector((state) => state.entities.companies.page);
  const paginate = useSelector((state) => state.pagination);

  const [company, setCompany] = useState({});

  useEffect(() => {
    dispatch(loadCompanies(paginate));
  }, [paginate]);

  const handleSelect = async (company) => {
    setCompany(company);
  };

  const handleSubmit = async (event) => {
    dispatch(addSMS(company._id, event));
    setCompany({});
  };

  const handleClear = async () => {
    setCompany({});
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 m-3 gap-3">

      <div className="rounded-md">
        {company.name ? (
          <BuySMSForm
            company={company}
            onSubmit={handleSubmit}
            onClear={handleClear}
          ></BuySMSForm>
        ) : (
          ""
        )}
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

export default BuySMS;
