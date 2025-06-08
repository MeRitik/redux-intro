const initialStateCustomer = {
    fullName: '',
    aadharID: '',
    createdAt: '',
};

export default function customerReducer(state = initialStateCustomer, action) {
    switch(action.type) {
        case "customer/createCustomer":
            return {
                ...state,
                fullName: action.payload.fullName,
                aadharID: action.payload.aadharID,
                createdAt: action.payload.createdAt,
            };

        case "customer/updateName":
            return {
                ...state,
                fullName: action.payload,
            };

        default: return state;
    }
}



export function createCustomer(fullName, aadharID) {
    return {
        type: "customer/createCustomer",
        payload: {
            fullName,
            aadharID,
            createdAt: new Date().toISOString()
        }
    };
}

export function updateName(fullName) {
    return {
        type: "customer/updateName",
        payload: fullName,
    };
}