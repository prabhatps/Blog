import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <div>

    { /*Main tab for a primary message or call to action*/ }
    <div className="jumbotron" >
      <h1 className="display-3">Happy Blogging! :)</h1>
      <h5 class="font-weight-light">This website is one of its own kind. Here you can share your views about the Supply Chain and logistics Industry.</h5>
       
      <p><Link className="btn btn-primary btn-lg" to="/posts" role="button">Share your views &raquo;</Link></p>
    </div>
    

    { /*Example row of columns*/ }
    <div className="row text-justify">
    
      <div className="col-md-6">
        <h2>Supply Chain Management</h2>
        <p class="lead"> Supply chain management is the process of managing the movement of the raw materials and parts from the beginning of production through delivery to the consumer. In many organizations, operational supply chain decisions are made hundreds of times each day affecting how products are developed, manufactured, moved, and sold. The complexity of the supply chain varies with the size of the business and the intricacy and quantity of items manufactured, but most supply chains have elements in common, such as Customers, Planning, Purchasing, Inventory, Production and Transportation.</p>
      
      </div>
      <div className="col-md-6">
        <h2>Logistics</h2>
        <p class="lead">When used in a business sense, logistics is the management of the flow of things between the point of origin and the point of consumption in order to meet requirements of customers or corporations. The resources managed in logistics can include physical items such as food, materials, animals, equipment, and liquids, as well as abstract items, such as time and information. The logistics of physical items usually involves the integration of information flow, material handling, production, packaging, inventory, transportation, and warehousing.</p>
      </div>
    </div>

  </div>
);