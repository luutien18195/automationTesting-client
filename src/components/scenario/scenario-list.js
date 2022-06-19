import {ACTION_TYPE} from "../../constant";
import React, {useState, useEffect} from "react";
import {Table} from "react-bootstrap";
import {fetchScenarios} from "../../api";
import ScenarioToolBar from "./scenario-toolbar";
import FormCheckInput from "react-bootstrap/esm/FormCheckInput";
import ReactPaginate from "react-paginate";

const EMPTY_STR = "";
const PAGE_DEFAULT = 1;
const RECORDS_LIMIT_PER_PAGE = 5;
const columns = [
  {
    dataField: "name",
    text: "Name",
    sort: true,
  },
  {
    dataField: "title",
    text: "Title",
    sort: true,
  },
  {
    dataField: "description",
    text: "Description",
  },
  {
    dataField: "createdTime",
    text: "Created Time",
  },
  {
    dataField: "updatedTime",
    text: "LastUpdated",
  },
  {
    dataField: "action",
    text: "Action",
  },
];

function ScenarioList(props) {
  const [scenarioList, setScenarioList] = useState([]);
  const [pageCount, setpageCount] = useState(0);
  let searchParams = {
    page: PAGE_DEFAULT,
    size: RECORDS_LIMIT_PER_PAGE,
    name: EMPTY_STR,
    title: EMPTY_STR,
  };

  useEffect(() => {
    const getScenarios = async () => {
      const res = await fetchScenarios(searchParams);
      setpageCount(Math.ceil(res.data.totalCount / RECORDS_LIMIT_PER_PAGE - 1));
      setScenarioList(res.data.scenarios);
    };

    getScenarios();
  }, [RECORDS_LIMIT_PER_PAGE]);

  const handlePageClick = async (data) => {
    let currentPage = data.selected + 1;
    handleEventData({
      ...searchParams,
      page: currentPage,
    });
    const res = await fetchScenarios(searchParams);
    setScenarioList(res.data.scenarios);
  };

  const handleSearch = async (data) => {
    handleEventData({
      ...searchParams,
      page: PAGE_DEFAULT,
      name: data.name,
      title: data.title,
    });
    const res = await fetchScenarios(searchParams);
    setpageCount(Math.ceil(res.data.totalCount / RECORDS_LIMIT_PER_PAGE - 1));
    setScenarioList(res.data.scenarios);
  };

  const handleEventData = (data) => {
    searchParams = {
      ...searchParams,
      page: data.page,
      name: data.name,
      title: data.title,
    };
  };

  return (
    <>
      <ScenarioToolBar onSearch={handleSearch} onDataChange={handleEventData} />
      <Table striped responsive hover>
        <thead className='table-light'>
          <tr>
            <th>
              <FormCheckInput className='cursor-pointer' />
            </th>
            {Array.from(
              columns.map((e, i) => (
                <th
                  key={i}
                  className={i === columns.length - 1 ? "text-center" : ""}>
                  {e.text}
                </th>
              ))
            )}
          </tr>
        </thead>
        <tbody>
          {scenarioList.map((e, i) => (
            <tr key={i} className='cursor-pointer'>
              <td>
                <FormCheckInput className='cursor-pointer' />
              </td>
              <td>{e.name}</td>
              <td>{e.title}</td>
              <td>{e.description}</td>
              <td>{e.createTime}</td>
              <td>{e.updateTime}</td>
              <td>
                <div className='d-flex justify-content-center'>
                  <i className='fas fa-edit fs-12'></i>
                  <i className='fa-solid fa-trash-can'></i>
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
          activeClassName={"active"}></ReactPaginate>
      </div>
    </>
  );
}

export default ScenarioList;
