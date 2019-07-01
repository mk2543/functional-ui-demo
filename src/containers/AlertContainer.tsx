import React from 'react';
import { connect } from 'react-redux'
import { CommunicationError } from '../components/CommunicationError'
import { AppState } from '../reducers/root'
import { alertWasDismissed } from '../actions/systemActions'

const mapStateToProps = (state: AppState) => ({ 
    shouldDisplayAlert: state.system.shouldDisplayAlert
})

const mapDispatchToProps = ({
    onAlertClose: alertWasDismissed,
})


type StateProps = ReturnType<typeof mapStateToProps>
type DispatchProps = typeof mapDispatchToProps
type Props = StateProps & DispatchProps 

const AlertContainer: React.SFC<Props> = (props) => {
    return  props.shouldDisplayAlert ? <CommunicationError onClose={ props.onAlertClose } /> : null
} 

export default connect<StateProps, DispatchProps, {}, AppState>(mapStateToProps, mapDispatchToProps)(AlertContainer)