/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUsers, updateUser, saveUser } from "./usersSlice";

import UserTable from "./userTable";
import UserForm from "./userForm";

const UsersIndex = () => {
  const dispatch = useDispatch();
  const userPage = useSelector((state) => state.entities.users.page);
  const paginate = useSelector((state) => state.pagination);
  const [user, setUser] = useState({});
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    dispatch(loadUsers(paginate));
  }, [paginate]);

  const handleSelect = async (user) => {
    setEdit(true);
    setUser(user);
  };

  const handleSubmit = async (event) => {
    if (edit) {
      dispatch(updateUser(user._id, event));
    } else {
      dispatch(saveUser(event));
    }
    setUser({});
  };

  const handleClear = async () => {
    setEdit(false);
    setUser({});
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 m-3 gap-3">
      <div className="rounded-md">
        <UserForm user={user} onSubmit={handleSubmit} onClear={handleClear} />
      </div>
      <div className="md:col-span-2 bg-gray-50 rounded-md">
        <UserTable userPage={userPage} select={handleSelect}></UserTable>
      </div>
    </div>
  );
};

export default UsersIndex;
