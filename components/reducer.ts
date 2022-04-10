import { createContext } from "react";
import { Action, AppState, Context } from "./interface";

export const INIT_STATE: AppState = { isMenuClosed: true }
export const AppContext = createContext<Context>({});
export const ACTION = {
    MENU: { VISIBLE: 'Update menu visibility' }
}
export const STATE_REDUCER = (state: AppState, action: Action): AppState => {
  
    switch (action.type) {
        case ACTION.MENU.VISIBLE:

            if (action.value === undefined)
                return { isMenuClosed : !state.isMenuClosed}
            else
                return { isMenuClosed: action.value }

        default:
            return state;
    }
}