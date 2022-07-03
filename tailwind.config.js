module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
        "./node_modules/tw-elements/dist/js/**/*.js"
    ],
    theme: {
        extend: {
            colors: {
                black: "#0A0908",
                gray: "#E6EdE5",
                orange: "#FF5714",
                blue: "#22333B",
                white: "#F2F4F3",
                lblue: "#698591",
                "pure-white": "#FFFFFF",
            },

        },
    },

    plugins: [
        require('flowbite/plugin'),
        require('tw-elements/dist/plugin')
    ]
}
