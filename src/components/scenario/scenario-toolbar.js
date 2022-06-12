import React from "react";

function ScenarioToolBar() {
  return (
    <>
      <form class='overflow-hidden'>
        <div class='row'>
          <div class='col'>
            <input
              type='text'
              class='form-control'
              placeholder='Scenario name'
              aria-label='Scenario name'
            />
          </div>
          <div class='col'>
            <input
              type='text'
              class='form-control'
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
