/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import UserTable from "./userTable";
import { useDispatch, useSelector } from "react-redux";
import { loadUsers, assignCompany } from "./usersSlice";
import AssignUserForm from "./assginUserForm";
import { removeCompany } from "./usersSlice";

const AssignUser = () => {
  const dispatch = useDispatch();
  const userPage = useSelector((state) => state.entities.users.page);
  const paginate = useSelector((state) => state.pagination);
  const [user, setUser] = useState({});

  useEffect(() => {
    dispatch(loadUsers(paginate));
  }, [paginate]);

  const handleSelect = async (user) => {
    setUser(user);
  };

  const handleSubmit = async (event) => {
    dispatch(assignCompany(user._id, event));
    setUser({});
  };

  const handleRemoveCompany = async () => {
    dispatch(removeCompany(user._id));
    setUser({});
  };

  const handleClear = async () => {
    setUser({});
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 m-3 gap-3">
        <div className="rounded-md">
          {user.name ? (
            <AssignUserForm
              user={user}
              onSubmit={handleSubmit}
              onRemove={handleRemoveCompany}
              onClear={handleClear}
            />
          ) : (
            ""
          )}
        </div>

        <div className="md:col-span-2 bg-gray-50 rounded-md">
          <UserTable userPage={userPage} select={handleSelect}></UserTable>
        </div>
    </div>
  );
};

export default AssignUser;
