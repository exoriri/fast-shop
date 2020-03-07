import React, { useContext } from 'react';
import { observer } from 'mobx-react';

const MobxContext = React.createContext(null);

export const Provider = MobxContext.Provider;

export const useStore = (mapStateToProps?: Function) => {
    const store = useContext(MobxContext);

    if (mapStateToProps !== undefined) {
        return mapStateToProps(store);
    }

    return store;
};