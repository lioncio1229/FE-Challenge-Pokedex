import React, {useReducer} from "react";
import rootReducer from "../reducer";

export const ContextProvider = React.createContext();

const Provider = React.memo(({children}) => {
    const [state, dispatch] = useReducer(rootReducer, {});
    return (
        <ContextProvider.Provider value={{state, dispatch}}>
            {children}
        </ContextProvider.Provider>
    );
});

export default Provider;