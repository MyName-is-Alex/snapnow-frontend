import { extendTheme } from "native-base";

export default extendTheme({
    colors: {
        // Add new color
        primaryPurple: {
            500: "#C8278B",
        },
        secondaryPurple: {
            500: "#910E9C",
        },
        primaryYellow: {
            500: "#EFE94B",
        },
        primaryWhite: {
            500: "#F9F9F9",
        },
        secondaryWhite: {
            500: "#BDBDBD",
        },
        primaryBlue: {
            500: "#837AE9",
        },
        pressedBlue: {
            500: "#9891e4",
        },
        primaryGrey: {
            500: "#E1E1E1",
        },
        textColorPrimary: {
            500: "#4E4E4E",
        },
        baseWhite: {
            500: "#FFFFFF",
        },
    },

    fontConfig: {
        Avenir: {
            200: {
                normal: "AvenirRegular",
                italic: "AvenirIt",
            },
            300: {
                normal: "AvenirDemiCn",
            },
            400: {
                normal: "AvenirDemi",
            },
            500: {
                normal: "AvenirBoldCn",
            },
            600: {
                normal: "AvenirBold",
            },
        },
    },
    fontSizes: {
        title: "24px",
        name: "20px",
    },

    fonts: {
        heading: "Avenir",
        body: "Avenir",
        mono: "Avenir",
    },
});
