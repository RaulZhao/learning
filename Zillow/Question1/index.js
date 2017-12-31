import React from 'react';
import ReactDOM from 'react-dom';
import Tabs from './Tabs';

const fakePane1 = <div title="REAL ESTATE">
    <h4 style={{"color": "grey"}}>REAL ESTATE INFO</h4>
    <div>
      Content #0 here
      <ul>
        <li>
          <a href="#">Go to Real Estate Section</a>
        </li>
        <li>
          <a href="#">Search For Properties</a>
        </li>
        <li>
          <a href="#">Download the Real Estate</a>
        </li>
      </ul>
    </div>
    <hr/>
    <footer>
      <a href="#">Place a Classified Ad</a>
    </footer>
  </div>;
const fakePane2 = <div title="AUTOS">
    <h4 style={{"color": "grey"}}>AUTOS INFO</h4>
    <p>Content #1 here</p>
    <div style={{
      "float": "left",
      "width": "250px",
      "height": "300px",
      "background-color": "lightblue"
    }}>Left Placeholder</div>
    <div style={{
      "float": "right",
      "width": "250px",
      "height": "300px",
      "background-color": "lightyellow"
    }}>Right Placeholder</div>
  </div>;
const fakePane3 = <div title="JOBS">
    <h4>JOBS INFO</h4>
    <p>Content #2 here</p>
  </div>;
const fakePane4 = <div title="ALL CLASSIFIEDS">
    <h4>ALL CLASSIFIEDS INFO</h4>
    <p>Content #3 here</p>
  </div>;

// <Tabs> is the React component which will always show the selected tab content.
ReactDOM.render(
  <Tabs tabActive={0}>
    {fakePane1}
    {fakePane2}
    {fakePane3}
    {fakePane4}
  </Tabs>,
  document.getElementById('root'));
