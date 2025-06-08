import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    fullName: '',
    aadharID: '',
    createdAt: '',
};

const customerSlice = createSlice({
    name: "customer",
    initialState,
    reducers: {
        createCustomer: {
            prepare(fullName, aadharID) {
                return {
                    payload: {
                        fullName,
                        aadharID,
                    }
                }
            },
            reducer(state, action) {
                state.fullName = action.payload.fullName;
                state.aadharID = action.payload.aadharID;
                state.createdAt = new Date().toISOString();
            }
        },
        updateName(state, action) {
            state.fullName = action.payload;
        },
    }
});

export const {createCustomer, updateName} = customerSlice.actions;
export default customerSlice.reducer;

// export default function customerReducer(state = initialStateCustomer, action) {
//     switch(action.type) {
//         case "customer/createCustomer":
//             return {
//                 ...state,
//                 fullName: action.payload.fullName,
//                 aadharID: action.payload.aadharID,
//                 createdAt: action.payload.createdAt,
//             };

//         case "customer/updateName":
//             return {
//                 ...state,
//                 fullName: action.payload,
//             };

//         default: return state;
//     }
// }



// export function createCustomer(fullName, aadharID) {
//     return {
//         type: "customer/createCustomer",
//         payload: {
//             fullName,
//             aadharID,
//             createdAt: new Date().toISOString()
//         }
//     };
// }

// export function updateName(fullName) {
//     return {
//         type: "customer/updateName",
//         payload: fullName,
//     };
// }