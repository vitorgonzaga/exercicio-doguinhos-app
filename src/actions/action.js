export const REQUEST_IMAGE = 'REQUEST_IMAGE';
export const GET_IMAGE = 'GET_IMAGE';
export const FAILED_REQUEST = 'FAILED_REQUEST';

export const requestDog = () => ({ type: REQUEST_IMAGE });
export const getImage = (json) => ({ type: GET_IMAGE, payload: json.message });
export const failedRequest = (error) => ({ type: FAILED_REQUEST, payload: error });

export const fetchDog = () => {
  return (dispatch) => {
    console.log('disparando a requestDog()')
    dispatch(requestDog());
    console.log('Iniciando o fetch')
    return fetch('https://dog.ceo/api/breeds/image/random')
      .then((r) => r.json()
      .then(
        (json) => dispatch(getImage(json)),
        (error) => dispatch(failedRequest(error)),
      ));
  };
}
