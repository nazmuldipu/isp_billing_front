/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadCompanies, maxLimit } from "./companiesSlice";
import CompanyTable from "./companyTable";
import EntityLimitForm from "./entityLimitForm";

const EntityLimit = () => {
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
    dispatch(maxLimit(company._id, event));
    setCompany({});
    setCompany({});
  };

  const handleClear = async () => {
    setCompany({});
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 m-3 gap-3">
      <div className="rounded-md">
        {company.name ? (
          <EntityLimitForm
            company={company}
            onSubmit={handleSubmit}
            onClear={handleClear}
          ></EntityLimitForm>
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

export default EntityLimit;
