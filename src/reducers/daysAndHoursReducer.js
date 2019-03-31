export default (state={}, action) => {
    if (action.type === 'ADD_DAY') {
        const { speakerKey, speakerDay } = action.payload;

        if(!state[speakerKey]) {
            const newState = {...state};
            newState[speakerKey] = [];
            return {
                ...newState, [speakerKey]: [...newState[speakerKey], {...speakerDay}]
            }
        }
        return {
            ...state, [speakerKey]: [...state[speakerKey], {...speakerDay}]
        }

    }
    else if (action.type === 'DELETE_DAY') {
        const { dayIndex, speakerIndex } = action.payload;
        const speakerDays = state[speakerIndex];
        const newDays = [
            ...speakerDays.slice(0, dayIndex),
            ...speakerDays.slice(dayIndex + 1, speakerDays.length)
        ];
        return {
            ...state, [speakerIndex]: newDays
        };
    }
    else if (action.type === 'CLEAR_STORAGE') {
        return {};
    }
    return state;
};

