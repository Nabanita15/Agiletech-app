import React from "react";
import wavingHand from "../Component/image/WavingHand.png";
import SearchIcon from "@mui/icons-material/Search";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import UserAdd from "./UserAdd";
const Dashboard = () => {
  const dataTable = [
    {
      name: "David wagner",
      gmail: "abc@gmail.com",
      button: "super Admin",
      date: "4678.799",
      role: "loream hoi",
    },
    {
      name: "David wagner",
      gmail: "abc@gmail.com",
      button: "super Admin",
      date: "4678.799",
      role: "loream hoi",
    },
  ];
  return (
    <>
      <div className="dashboard ">
        <div className="heyBox">
          <img src={wavingHand} alt="emoji" />
          <h6>Hey,David.</h6>
        </div>
        <h6>Here is all your Agiletechlabs Dashboard</h6>
        <div className="searchGrid mt-4">
          <div className="searchBox1">
            <div className="iconStyle">
              <SearchIcon />
            </div>
            <input type="search" placeholder="Search" />
          </div>
          <h6>Sort by ||</h6>
          <button
            className="addButton btn btn-primary"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            + add user
          </button>
          <UserAdd />
        </div>
        <div className="list">
          <h5>List Users</h5>
          <table className="tableRow">
            <th>Name</th>
            <th>Create Date</th>
            <th>Role</th>
            <th>Action</th>
          </table>
          <tr className="tablebox">
            {dataTable.map((item) => {
              return (
                <>
                  <div className="tabledata">
                    <div className="nameCol">
                      <span className="fw-semibold">{item.name}</span>
                      <span className="text-body-secondary">{item.gmail}</span>
                    </div>
                    <button className="addButton1">{item.button}</button>
                    <span>{item.date}</span>
                    <span>{item.role}</span>
                    <div className="action">
                      <span className="text-primary">
                        <EditIcon />
                      </span>
                      <span className="text-secondary">
                        <DeleteIcon />
                      </span>
                    </div>
                  </div>
                </>
              );
            })}
          </tr>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
