import {configureStore} from '@reduxjs/toolkit';

import { DataReducer, SelectDataReducer } from './Reducers/userDataReducer';

const store = configureStore({
    reducer : {
        DataReducer, SelectDataReducer
    }
})

export default store;