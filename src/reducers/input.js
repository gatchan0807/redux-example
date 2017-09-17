import {initialInputState} from "../initialStates";

export const input = (state = initialInputState, action) => {
    switch (action.type) {
        case 'CHANGE_INPUT':
            let changed = Object.assign({}, state);
            changed.inputtedText = action.content;
            return changed;
        default:
            return state;
    }
};