// Because we need to store the related data to our actual collections on our shop page, we gonna make the shop page a CLASS component
import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../collections-overview/Collections-overview';
import CollectionPage from '../collection/Collection';

const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

export default ShopPage;

// ShopPage is becoming a simple non-connected component now. We will now have the child component of the ShopPage be connected.
