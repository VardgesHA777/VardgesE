import React, { useReducer } from 'react';

export const AppStateContext = React.createContext();
export const AppDispatchContext = React.createContext();

const initialState = {
  profile: null,
  alertData: {},
  loading: null,
  contentItems: null,
  filters: null,
  selectedFiltrationValues: null,
  queriedFiltrationValues: null,
  filterParams: null,
  totalElementsCount: null,
};

export const StoreProvider = (props) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'SET_PROFILE': {
        return {
          ...state,
          profile: action.payload,
        };
      }
      case 'SET_CONTENT_ITEMS': {
        return {
          ...state,
          contentItems: action.payload,
        };
      }
      case 'SET_CONTENT_ITEMS_COUNT': {
        return {
          ...state,
          totalElementsCount: action.payload,
        };
      }
      case 'SET_ANIMALS': {
        return {
          ...state,
          animals: action.payload,
        };
      }
      case 'SET_FILTERS': {
        return {
          ...state,
          filters: {
            ...state.filters,
            [action.payload.filterName]: action.payload,
          },
        };
      }
      case 'SET_SELECTED_FILTRATION_VALUES': {
        return {
          ...state,
          selectedFiltrationValues: action.payload,
        };
      }
      case 'SET_QUERIED_FILTRATION_VALUES': {
        return {
          ...state,
          queriedFiltrationValues: action.payload,
        };
      }
      case 'SET_FILTERS_PARAMS': {
        return {
          ...state,
          filterParams: {
            ...state.filterParams,
            [action.payload.name]: action.payload.params,
          },
        };
      }
      case 'OPEN_ALERT': {
        return {
          ...state,
          alertData: action.payload,
        };
      }
      case 'CLOSE_ALERT': {
        return {
          ...state,
          alertData: null,
        };
      }
      case 'SET_ERROR': {
        return {
          ...state,
          error: action.payload,
        };
      }
      case 'HANDLE_LOADING': {
        return {
          ...state,
          loading: !state.loading,
        };
      }
      case 'RESET_STATE': {
        return {
          ...initialState,
        };
      }
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppDispatchContext.Provider value={dispatch}>
      <AppStateContext.Provider value={state}>{props.children}</AppStateContext.Provider>
    </AppDispatchContext.Provider>
  );
};

function useAppState() {
  const context = React.useContext(AppStateContext);
  if (context === undefined) {
    throw new Error('useCountState must be used within a CountProvider');
  }
  return context;
}

function useAppDispatch() {
  const context = React.useContext(AppDispatchContext);
  if (context === undefined) {
    throw new Error('useAppDispatch must be used within a CountProvider');
  }
  return context;
}

export { useAppState, useAppDispatch };
