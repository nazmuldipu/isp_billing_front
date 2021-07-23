/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import ZoneForm from "./zoneForm";
import { useDispatch, useSelector } from "react-redux";
import { loadZones, updateZone, saveZone } from "./zonesSlice";
import ZoneTable from "./zoneTable";

const Zone = () => {
  const dispatch = useDispatch();
  const zonePage = useSelector((state) => state.entities.zones.page);
  const paginate = useSelector((state) => state.pagination);
  const [zone, setZone] = useState({});
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    dispatch(loadZones(paginate));
  }, [paginate]);

  const handleSelect = async (zone) => {
    setEdit(true);
    setZone(zone);
  };

  const handleClear = async () => {
    setEdit(false);
    setZone({});
  };

  const handleSubmit = async (event) => {
    if (edit) {
      dispatch(updateZone(zone._id, event));
    } else {
      dispatch(saveZone(event));
    }
    setZone({});
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 m-3 gap-3">
      <div className="rounded-md">
        <ZoneForm
          zone={zone}
          onSubmit={handleSubmit}
          onClear={handleClear}
        ></ZoneForm>
      </div>

      <div className="md:col-span-2">
        <ZoneTable zonePage={zonePage} select={handleSelect}></ZoneTable>       
      </div>
    </div>
  );
};

export default Zone;
