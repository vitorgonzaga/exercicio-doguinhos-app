import React from 'react';
import { connect } from 'react-redux';
import { fetchDog } from './actions/action';

function App({ isFetching, imagePath, fetchTheDog }) {
  // console.log(this.props);
  return (
    isFetching ? <p>Loading...</p>
    : (
    <div style={{ width: 500 }}>
      <button
      style={{ display: 'block' }}
      onClick={ fetchTheDog }
      type="button"
      >
        Novo Doguinho
      </button>
      <img style={{ width: '100%' }} src={imagePath} alt="dog" />
    </div>
    )
  );
}

const mapStateToProps = (state) => ({
  imagePath: state.reducer.imagePath,
  isFetching: state.reducer.isFetching,
});

// Para Testar depois:
// const mapStateToProps = ({ imagePath, isFetching }) => ({
//   src: imagePath,
//   isFetching: isFetching,
// });

const mapDispatchToProps = (dispatch) => ({
  fetchTheDog: () => dispatch(fetchDog())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
