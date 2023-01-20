

const ProductReducer = (state, action) => {

    switch (action.type) {
        case 'SET_LOADING':
            return {
                ...state,
                isLoading: true,
            };
        case 'SET_ERROR':
            return {
                ...state,
                isLoading:false,
                isError: true,
            };
        case 'SET_API_DATA':
            const featureData = action.payload.filter((currElem) => {
                return currElem.featured === true;
            });
            return {
                ...state,
                isLoading:false,
                products: action.payload,
                featuredProducts:featureData,
                }



        default:
            return state;
    }


}

export default ProductReducer
