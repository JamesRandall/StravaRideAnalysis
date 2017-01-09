export default function storeMock (state, overrides) {
    return {
        default: () => {},
        subscribe: () => {},
        dispatch: () => {},
        getState: () => ({ ...state }),
        ...overrides
    }
}
