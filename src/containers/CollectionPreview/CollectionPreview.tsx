import { ItemProps } from '../../pages/Shop/Shop.data'
import {
  StyledCollectionPreview,
  Title,
  Preview
} from './CollectionPreview.styles'
import { CollectionItem } from '../../components'

interface CollectionPreviewProps {
  title: string
  items: ItemProps[]
}

const CollectionPreview: React.FC<CollectionPreviewProps> = ({ title, items }) => (
  <StyledCollectionPreview>
    <Title>{title.toUpperCase()}</Title>
    <Preview>
      {
        items
          .filter((_, idx) => idx < 4)
          .map(({ id, ...props }) => (
            <CollectionItem key={id} {...props} />
          ))
      }
    </Preview>
  </StyledCollectionPreview>
)

export default CollectionPreview