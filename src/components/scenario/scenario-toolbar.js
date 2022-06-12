import React from "react";

function ScenarioToolBar() {
  return (
    <>
      <form className='overflow-hidden mb-3'>
        <div className='row'>
          <div className='col'>
            <input
              type='text'
              className='form-control'
              placeholder='Scenario name'
              aria-label='Scenario name'
            />
          </div>
          <div className='col'>
            <input
              type='text'
              className='form-control'
              placeholder='Title'
              aria-label='Title'
            />
          </div>
        </div>
        <div className='row mt-2 justify-content-center'>
          <button
            type='button'
            className='btn btn-outline-primary'
            style={{width: "80px"}}>
            Search
          </button>
        </div>
        <div className='row mt-2 justify-content-end'>
          <button
            type='button'
            className='btn btn-primary mr-2'
            style={{width: "80px"}}>
            Run
          </button>
          <button
            type='button'
            className='btn btn-primary mr-3'
            style={{width: "80px"}}>
            Create
          </button>
        </div>
      </form>
    </>
  );
}

export default ScenarioToolBar;
