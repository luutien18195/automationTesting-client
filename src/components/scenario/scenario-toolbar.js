import React from "react";

function ScenarioToolBar() {
  return (
    <>
      <form className='overflow-hidden'>
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
      </form>
    </>
  );
}

export default ScenarioToolBar;
