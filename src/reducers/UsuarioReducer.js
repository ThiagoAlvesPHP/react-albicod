const initialState = {
  name:'Visitante',
  contador: 0
};

const UsuarioReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'SET_NAME':
      return { ...state, name: action.payload.name };
      break;
    case 'SET_INCREMENT':
      let newCount = state.contador + 1;
      return { ...state, contador:newCount};
      break;
  }

  return state;
};

export default UsuarioReducer;