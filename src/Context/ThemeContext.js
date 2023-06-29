import React, { createContext, useState } from "react";
import { teal, blueGrey } from "@mui/material/colors";

export const ColorPalette = createContext();

export const ColorPaletteProvider = (props) => {
    // there should be default theme
    // for Authentication page
    // and after login user would see their customized theme

    // ---------------- Default Theme ---------------- //
    const [colorPalette, setColorPalette] = useState({
        primary: teal,
        secondary: blueGrey,
    });

    return (
        <ColorPalette.Provider value = { [colorPalette, setColorPalette] }>
            { props.children }
        </ColorPalette.Provider>
    )
}