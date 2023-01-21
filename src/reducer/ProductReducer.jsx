

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
                isLoading: false,
                isError: true,
            };
        case 'SET_API_DATA':
            const featureData = action.payload.filter((currElem) => {
                return currElem.featured === true;
            });
            return {
                ...state,
                isLoading: false,
                products: action.payload,
                featuredProducts: featureData,
            }
        case 'SET_SINGLE_LOADING':
            return {
                ...state,
                isSingleLoading: true,
            };

        case 'SET_SINGLE_API_DATA':

            return {
                ...state,
                isSingleLoading: false,
                SingleProduct: action.payload,

            }



        default:
            return state;
    }


}

export default ProductReducer
