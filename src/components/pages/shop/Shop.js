// Because we need to store the related data to our actual collections on our shop page, we gonna make the shop page a CLASS component
import React from 'react';

import SHOP_DATA from './shop.data';
import CollectionPreview from '../../collection-preview/Collection-preview';

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
