import {
  StyledCollectionItem,
  Image,
  CollectionFooter,
  Name,
  Price
} from './CollectionItem.styles'

interface CollectionItemProps {
  name: string
  price: number
  imageUrl: string
}

const CollectionItem: React.FC<CollectionItemProps> = ({ name, price, imageUrl }) => (
  <StyledCollectionItem>
    <Image 
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    <CollectionFooter>
      <Name>{name}</Name>
      <Price>{price}</Price>
    </CollectionFooter>
  </StyledCollectionItem>
)

export default CollectionItem