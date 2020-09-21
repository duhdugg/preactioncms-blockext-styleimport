import React from 'react'
import PropTypes from 'prop-types'
import { Input } from '@preaction/inputs'

class StyleImport extends React.Component {
  render() {
    return <link rel='stylesheet' href={this.props.url} />
  }
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

class StyleImportSettings extends React.Component {
  render() {
    return (
      <div>
        <h6>StyleImport Settings</h6>
        <hr className='mb-3' />
        <Input
          type='url'
          label='CSS URL'
          value={this.props.propsData.url}
          valueHandler={this.props.getPropsDataValueHandler('url')}
        />
      </div>
    )
  }
}

StyleImportSettings.propTypes = {
  propsData: PropTypes.object.isRequired,
  getPropsDataValueHandler: PropTypes.func.isRequired,
}

StyleImport.Settings = StyleImportSettings

export { StyleImport }
