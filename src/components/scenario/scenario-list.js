import {ACTION_TYPE} from "../../constant";
import React from "react";
import {
  Table,
  Form,
  Tooltip,
  Button,
  OverlayTrigger,
  Pagination,
} from "react-bootstrap";

//mock data
import datas from "../../_mock/scenarios";

class Scenarios extends React.Component {
  constructor(props) {
    super(props);

    this.recordsPerPage = 2;
    this.activePage = 1;
    this.paginationItems = [];
    this.scenarioList = [];
    // Get all scenario by default condition
    this.onSearchAllScenario();

    this.onLoadPagination();
  }

  onSearchAllScenario() {
    // const {scenarioName, dispatch} = this.props;
    // console.log("prop", this.props);
    // dispatchEvent({
    //   type: ACTION_TYPE.SCENARIO.REQUEST,
    //   payload: {scenarioName},
    // });

    //mock data
    console.log("activePage", this.activePage);
    this.totalRecords = datas.totalRecords;
    console.log("totalRecords", this.totalRecords);
    let currentRecordIndex = (this.activePage - 1) * this.recordsPerPage;
    this.scenarioList = datas.scenarios.slice(
      currentRecordIndex,
      currentRecordIndex + 1 + this.recordsPerPage
    );
    console.log("listScenarios", this.scenarioList);
  }

  onLoadPagination() {
    for (let i = 1; i <= this.totalRecords / this.recordsPerPage; i++) {
      this.paginationItems.push(
        <Pagination.Item
          key={i}
          active={i === this.activePage}
          onClick={() => this.onChangePage(i)}>
          {i}
        </Pagination.Item>
      );
    }
  }

  onChangePage(pageNumber) {
    console.log("onChangePage event\nPage Number", pageNumber);
    this.activePage = parseInt(pageNumber);
    this.onSearchAllScenario();
    console.log("label", this.paginationItems[this.activePage]);
  }

  render() {
    return (
      <>
        <Table striped bordered hover responsive size='sm'>
          <thead>
            <tr>
              <th>
                <Form.Check
                  role='button'
                  defaultValue=''
                  type='checkbox'></Form.Check>
                <span className='form-check-sign'></span>
              </th>
              <th>Name</th>
              <th>Function</th>
              <th>Title</th>
              <th>Description</th>
              <th>CreateTime</th>
              <th>UpdateTime</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.scenarioList.map((data) => (
              <tr key={data._id}>
                <td>
                  <Form.Check
                    role='button'
                    defaultValue=''
                    type='checkbox'></Form.Check>
                </td>
                <td>{data.name}</td>
                <td>{data.function}</td>
                <td>{data.title}</td>
                <td>{data.description}</td>
                <td>{data.createTime}</td>
                <td>{data.updateTime}</td>
                <td className='text-center'>
                  <OverlayTrigger
                    overlay={
                      <Tooltip id='tooltip-160575228'>Edit Scenario</Tooltip>
                    }>
                    <Button
                      className='btn-simple p-1'
                      type='button'
                      variant='outline-primary'>
                      <i className='fas fa-edit'></i>
                    </Button>
                  </OverlayTrigger>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <div className='container'>
          <div className='row justify-content-end'>
            <Pagination className='col'>{this.paginationItems}</Pagination>
          </div>
        </div>
      </>
    );
  }
}

export default Scenarios;
