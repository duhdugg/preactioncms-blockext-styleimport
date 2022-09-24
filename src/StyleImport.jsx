import React from 'react'
import PropTypes from 'prop-types'

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

export default StyleImport
