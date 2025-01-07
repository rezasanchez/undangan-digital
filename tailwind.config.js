const {
    collectionNames,
    getIconCollections,
    iconsPlugin,
} = require("@egoist/tailwindcss-icons");
const { transform } = require("sucrase");

module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        container: {
            center: true,
            padding: "16px",
        },
        extend: {
            colors: {
                primary: "#FF748B",
                secondary: "#64748b",
                dark: "#020617",
                background: "#F6F1EB",
            },
            screens: {
                "2xl": "1320px",
            },
            fontFamily: {
                sans: ["Plus Jakarta Sans", "sans-serif"],
                brand: ["Red Rose", "serif"],
            },
            animation: {
                "loop-scroll": "loop-scroll 50s linear infinate",
            },
            keyframes: {
                "loop-scroll": {
                    from: { transform: "translateX(0)" },
                    to: { transform: "translateX(-100%)" },
                },
            },
        },
    },
    plugins: [
        iconsPlugin({
            collections: getIconCollections(["material-symbols"]),
        }),
    ],
};
