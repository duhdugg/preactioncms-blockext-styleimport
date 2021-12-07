import React from 'react'
import PropTypes from 'prop-types'
import { Input } from '@preaction/inputs'

function StyleImport(props) {
  return <link rel='stylesheet' href={props.url} />
}

StyleImport.propTypes = {
  preaction: PropTypes.object.isRequired,
  url: PropTypes.string.isRequired,
}

StyleImport.extensionType = 'block'
StyleImport.label = 'StyleImport Extension Block'
StyleImport.defaultProps = {
  url: '',
}

function StyleImportSettings(props) {
  return (
    <div>
      <h6>StyleImport Settings</h6>
      <hr className='mb-3' />
      <Input
        type='url'
        label='CSS URL'
        value={props.propsData.url}
        valueHandler={props.getPropsDataValueHandler('url')}
      />
    </div>
  )
}

StyleImportSettings.propTypes = {
  propsData: PropTypes.object.isRequired,
  getPropsDataValueHandler: PropTypes.func.isRequired,
}

StyleImport.Settings = StyleImportSettings

export { StyleImport }
