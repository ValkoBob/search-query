import React from 'react';

const NavigationPanel = () => {
  return (
      <div>
        <ul className="pagination">
          <li className="page-item disabled">
            <a className="page-link" href="/#">&laquo;</a>
          </li>
          <li className="page-item active">
            <a className="page-link" href="/#">1</a>
          </li>
          <li className="page-item">
            <a className="page-link" href="/#">2</a>
          </li>
          <li className="page-item">
            <a className="page-link" href="/#">3</a>
          </li>
          <li className="page-item">
            <a className="page-link" href="/#">4</a>
          </li>
          <li className="page-item">
            <a className="page-link" href="/#">5</a>
          </li>
          <li className="page-item">
            <a className="page-link" href="/#">&raquo;</a>
          </li>
        </ul>
      </div>
      /*<div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
        <button type="button" className="btn btn-secondary">Previous</button>
        <div className="btn-group mr-2" role="group" aria-label="First group">
          <button type="button" className="btn btn-secondary">1</button>
          <button type="button" className="btn btn-secondary">2</button>
          <button type="button" className="btn btn-secondary">3</button>
          <button type="button" className="btn btn-secondary">4</button>
        </div>
        <button type="button" className="btn btn-secondary">Next</button>
      </div>*/
  )
};

export default NavigationPanel;
