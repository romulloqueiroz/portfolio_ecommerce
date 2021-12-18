import { useState } from 'react'
import { sections } from './Directory.data'
import { DirectoryMenu } from './Directory.styles'
import { MenuItem } from '../../components'

const Directory = () => {
  const [sectionsState] = useState(sections)
  return (
    <DirectoryMenu>
      {sectionsState.map(({ id, ...props }) => (
        <MenuItem key={id} {...props} />
      ))}
    </DirectoryMenu>
  )
}

export default Directory
