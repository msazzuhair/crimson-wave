// tailwind.config.js
const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    mode: 'jit',
    purge: [
        './dist/*.html',
        './src/**/*.{js,vue}',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            black: colors.black,
            white: colors.white,
            gray: colors.blueGray,
            indigo: colors.indigo,
            red: colors.rose,
            yellow: colors.amber,
            orange: colors.orange,
            green: colors.emerald,
            teal: colors.teal,
            blue: colors.blue,
            sky: colors.sky,
            blueGray: colors.blueGray,
            coolGray: colors.coolGray,
            fuchsia: colors.fuchsia,
        },
        fontFamily: {
            'sans': [defaultTheme.fontFamily.sans],
            'serif': [defaultTheme.fontFamily.serif],
            'mono': [defaultTheme.fontFamily.mono],
            'montserrat': ['Montserrat', ...defaultTheme.fontFamily.sans],
            'crimson': ['Crimson\\ Pro', ...defaultTheme.fontFamily.serif],
            'alatsi': ['Alatsi', ...defaultTheme.fontFamily.sans],
        },
        extend: {
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        color: theme("colors.gray.900"),
                        a: {
                            color: theme("colors.blue.700"),
                            textDecoration: "none",
                            "&:hover": {
                                color: theme("colors.blue.700"),
                                textDecoration: "none",
                            },
                        },
                    },
                },

                dark: {
                    css: {
                        color: theme("colors.blueGray.400"),
                        h1: { color: theme("colors.blueGray.400"), },
                        h2: { color: theme("colors.blueGray.400"), },
                        h3: { color: theme("colors.blueGray.400"), },
                        h4: { color: theme("colors.blueGray.400"), },
                        h5: { color: theme("colors.blueGray.400"), },
                        h6: { color: theme("colors.blueGray.400"), },
                        a: {
                            color: theme("colors.blue.600"),
                            textDecoration: "none",
                            "&:hover": {
                                color: theme("colors.blue.500"),
                            },
                        },
                    },
                },
            }),
        }
    },
    variants: {
        extend: {
            backgroundColor: ['active'],
            textColor: ['active'],
            display: ['dark'],
            ringColor: ['hover', 'active'],
            overflow: ['hover'],
            typography: ['dark'],
        },
    },
    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
