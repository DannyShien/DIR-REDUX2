import { connect } from 'react-redux';
import Button from '../components/Button';

import {
    setVisibilityAll, 
    setVisibilityCaught, 
    setVisibilityUncaught
} from '../ActionReducer';

const mapStateToProps = (state) => {
    return {
        visibilityFilter: state.visibilityFilter
    }

};

const mapDispatchToProps = (dispatch) => {
    return {
        handleAll: () => {
            console.log('CLICKED ALL')
            dispatch(setVisibilityAll());
        },
        handleCaught: () => {
            console.log('CLICKED CAUGHT')
            dispatch(setVisibilityCaught());
        },
        handleUncaught: () => {
            console.log('CLICKED UNCAUGHT')
            dispatch(setVisibilityUncaught());
        }
    }
}

const makeComponentSmart = connect(
    mapStateToProps,
    mapDispatchToProps
);
const smartButton = makeComponentSmart(Button);

export default smartButton;