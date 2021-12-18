import { useState } from 'react'
import { sections } from './Directory.data'
import { DirectoryMenu } from './Directory.styles'
import { MenuItem } from '../../components'

const Directory = () => {
  const [sectionsState] = useState(sections)
  return (
    <DirectoryMenu>
      {sectionsState.map(({ id, imageUrl, size, ...props }) => (
        <MenuItem key={id} imageUrl={imageUrl} size={size} {...props} />
      ))}
    </DirectoryMenu>
  )
}

export default Directory
