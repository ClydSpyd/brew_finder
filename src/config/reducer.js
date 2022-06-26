export const reducer = (state, action) => {
    switch (action.type) {
      case 'set_data':
        return { ...state, data: action.payload, isLoading:false };
      case 'select_list_item':
        return { ...state, data: action.payload, view:"details" };
      case 'set_view':
        return { ...state, view: action.payload };
      case 'toggle_loading':
        return { ...state, isLoading: action.payload };
      default:
        throw new Error();
    }
}