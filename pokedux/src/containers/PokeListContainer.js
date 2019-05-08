// A 'smart' container has three jobs: 
// - grab stuff from redux
// - grab a dumb component
// - smash them together

import { connect } from 'react-redux';
import PokeList from '../components/PokeList';
import { catchCard } from '../ActionReducer';


// We have two jobs: 
// - tell it how to map redux state to react props.
// - tell it how to map redux dispatch to react props.


// "translate" from redux state to react props
const mapStateToProps = (state) => {
    // return our own custom props object
    return {
        // react(left) : redux(right)
        cards: state.cards,
        visibilityFilter: state.visibilityFilter
    }
};

// "translate" from redux dispatch to react props
const mapDispatchToProps = (dispatch) => {
    // return our own custom props ovject
    return {
        // The annonymous fucntion is 'just like' out this.helperFunction
        handleClick: (id) => {
            // behind the scene, redux is doing the same as our "setstate"
            dispatch(catchCard(id))
        }
    };
};


// connect gives us a function that knows how to translate for a dumb component
const makeComponentsSmart = connect(
    mapStateToProps, 
    mapDispatchToProps
);
const smartPokeList = makeComponentsSmart(PokeList);

export default smartPokeList;