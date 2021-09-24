export const updateObject = (oldState, changedProperties) => {
    return {
        ...oldState,
        ...changedProperties
    }
}