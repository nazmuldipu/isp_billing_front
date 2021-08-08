/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import ClientTable from "./clientTable";
import { useDispatch, useSelector } from "react-redux";
import { loadClients } from "./clientSlice";

const ClinetsIndex = () => {
  const dispatch = useDispatch();
  const clientPage = useSelector((state) => state.entities.clients.page);
  const paginate = useSelector((state) => state.pagination);

  useEffect(() => {
    dispatch(loadClients(paginate));
  }, [paginate]);

  return (
    <div>
      <ClientTable clientPage={clientPage} />
    </div>
  );
};

export default ClinetsIndex;
