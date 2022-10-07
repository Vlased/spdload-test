import ITour from "interfaces/tour";
import { atom } from "recoil";

export const favoritesAtom = atom({
    key: "favorites",
    default: [] as ITour[],
})