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
            return {
                isMenuClosed: action.value || !state.isMenuClosed
            }

        default:
            return state;
    }
}