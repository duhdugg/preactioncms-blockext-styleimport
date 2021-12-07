import { StyleImport } from './StyleImport.jsx'
import { Boilerplate, Card } from '@preaction/bootstrap-clips'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@preaction/bootstrap-clips/dist/preaction-bootstrap-clips.css'
import './mock.scss'

const mockPropsData = {
  msg: 'Hello, Strangers!',
  debug: false,
}

const mockPreaction = {
  appRoot: '',
  block: {
    blockType: 'ext',
    settings: {
      header: 'Component View',
      extKey: 'StyleImport',
      propsData: mockPropsData,
    },
  },
  editable: false,
  settings: { siteTitle: 'Preaction CMS Extension Testing' },
  page: { settings: {} },
  navigate: (path) => {
    console.debug(`navigate('${path}')`)
  },
}

const copyObj = (obj) => JSON.parse(JSON.stringify(obj))

// emulates how the component is rendered in Preaction CMS
function MockCMS(props) {
  // STATE
  const [propsData, setPropsData] = React.useState(mockPropsData)
  const [preaction] = React.useState(mockPreaction)
  // CALLBACKS
  const getPropsDataValueHandler = React.useCallback(
    (key) => {
      return (value) => {
        const pd = copyObj(propsData)
        pd[key] = value
        setPropsData(pd)
      }
    },
    [propsData]
  )
  // RENDER
  return (
    <div className='App mock'>
      <Boilerplate
        footer={
          <Card header='Settings View' headerTheme='dark'>
            <StyleImport.Settings
              propsData={propsData}
              getPropsDataValueHandler={getPropsDataValueHandler}
            />
          </Card>
        }
      >
        <Card header={preaction.block.settings.header} headerTheme='blue'>
          <StyleImport preaction={preaction} {...propsData} />
        </Card>
      </Boilerplate>
    </div>
  )
}

export default MockCMS
