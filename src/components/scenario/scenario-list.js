import { ACTION_TYPE } from "../../constant";
import React, { useState, useEffect } from "react";
import {
  Table
} from "react-bootstrap";
import { fetchScenarios } from "../../api";
import FormCheckInput from "react-bootstrap/esm/FormCheckInput";
import ReactPaginate from "react-paginate";

const columns = [
  {
    dataField: "name",
    text: "Name",
    sort: true
  },
  {
    dataField: "title",
    text: "Title",
    sort: true
  },
  {
    dataField: "description",
    text: "Description"
  },
  {
    dataField: "createdTime",
    text: "Created Time"
  },
  {
    dataField: "updatedTime",
    text: "LastUpdated"
  },
  {
    dataField: "action",
    text: "Action"
  }
];


function Scenarios() {
  let limit = 3;
  const [scenarioList, setScenarioList] = useState([]);
  const [pageCount, setpageCount] = useState(0);
  useEffect(() => {
    const getScenarios = async () => {
      const res = await fetchScenarios({ page: 1, size: limit })
      setpageCount(Math.ceil((res.data.totalCount / limit) - 1));
      setScenarioList(res.data.scenarios);
    };

    getScenarios();
  }, [limit]);

  const fetchScenarioList = async (currentPage) => {
    const res = await fetchScenarios({ page: currentPage, size: limit })
    return res;
  };

  const handlePageClick = async (data) => {
    let currentPage = data.selected + 1;
    const res = await fetchScenarioList(currentPage);
    setScenarioList(res.data.scenarios);
  };
  return (
    <>
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            {Array.from(columns.map((e, i) => (<th key={i}>{e.text}</th>)))}
          </tr>
        </thead>
        <tbody>
          {scenarioList.map((e, i) => (
            <tr key={i}>
              <td><FormCheckInput></FormCheckInput></td>
              <td>{e.name}</td>
              <td>{e.title}</td>
              <td>{e.description}</td>
              <td>{e.createTime}</td>
              <td>{e.updateTime}</td>
              <td>
                <div>
                  <span className="d-block mr-3"><i className="fas fa-edit"></i></span>
                  <i className="fa-solid fa-trash-can"></i>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div>
        <ReactPaginate
          previousLabel={"Prev"}
          nextLabel={"Next"}
          breakLabel={"..."}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName={"pagination justify-content-center"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          breakClassName={"page-item"}
          breakLinkClassName={"page-link"}
          activeClassName={"active"}
        ></ReactPaginate>
      </div>
    </>
  );
}

export default Scenarios;
