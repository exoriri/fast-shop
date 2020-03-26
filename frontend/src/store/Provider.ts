import React, { useContext } from 'react';

const MobxContext = React.createContext(null);

export const Provider = MobxContext.Provider;

export const useStore = (mapStateToProps?: Function) => {
    const store = useContext(MobxContext);

    if (mapStateToProps !== undefined) {
        return mapStateToProps(store);
    }

    return store;
};