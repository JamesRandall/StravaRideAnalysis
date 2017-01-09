export default (overides) => {
    return {
        push: jest.fn(),
        replace: jest.fn(),
        go: jest.fn(),
        goBack: jest.fn(),
        goForward:jest.fn(),
        setRouteLeaveHook: jest.fn(),
        isActive: jest.fn(),
        ...overides
    }
}