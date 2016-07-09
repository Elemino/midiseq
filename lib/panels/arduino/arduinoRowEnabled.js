import React from 'react'
import {connect} from 'react-redux'

import {enableRouteAction} from 'lib/store/arduino'
import OnOffButton from 'lib/comps/onoffButton'

const mapStateToProps = (state, props) => ({
	enabled: state.arduino.routes[props.index].enabled
})

const mapDispatchToProps = (dispatch) => ({
	onChange (index, enabled) { dispatch(enableRouteAction(index, enabled)) }
})

export default connect(mapStateToProps, mapDispatchToProps)((props) =>
	<OnOffButton on={props.enabled}
		onClick={(e) => { props.onChange(props.index, !props.enabled) }}/>
)
