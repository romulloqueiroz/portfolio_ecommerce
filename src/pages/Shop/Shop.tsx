import { useState } from 'react'
import { SHOP_DATA } from './Shop.data'
import { CollectionPreview } from '../../containers'
import {
  ShopPage
} from './Shop.styles'

const Shop = () => {
  const [collections] = useState(SHOP_DATA)
  return (
    <ShopPage>
      {
        collections.map(({ id, items, ...props }) => (
          <CollectionPreview 
            key={id} 
            items={items}
            {...props} 
          />
        ))
      }
    </ShopPage>
  )
}

export default Shop
