const colors = require('tailwindcss/colors')

module.exports = {
    purge: false,
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            black: {
                DEFAULT: '#000',
                50: '#eee',
                100: '#ccc',
                200: '#bbb',
                300: '#aaa',
                400: '#999',
                500: '#777',
                600: '#555',
                700: '#333',
                800: '#222',
                900: '#000',
            },
            white: {
                DEFAULT: '#fff',
                50: '#ffffff',
                100: '#fdfdfd',
                200: '#fcfcfc',
                300: '#fafafa',
                400: '#f9f9f9',
                500: '#f7f7f7',
                600: '#f5f5f5',
                700: '#f3f3f3',
                800: '#f1f1f1',
                900: '#f0f0f0',
            },
            'blue-gray': colors.blueGray,
            'cool-gray': colors.coolGray,
            gray: colors.gray,
            'true-gray': colors.trueGray,
            'warm-gray': colors.warmGray,
            red: colors.rose,
            orange: colors.orange,
            amber: colors.amber,
            yellow: colors.yellow,
            lime: colors.lime,
            green: colors.green,
            emerald: colors.emerald,
            teal: colors.teal,
            cyan: colors.cyan,
            'light-blue': colors.lightBlue,
            blue: colors.blue,
            indigo: colors.indigo,
            violet: colors.violet,
            purple: colors.purple,
            fuchsia: colors.fuchsia,
            pink: colors.pink,
            rose: colors.rose,
        },
        screens: {
            'xs': '475px',
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px',
        },
        container: {
            padding: {
                DEFAULT: '2rem',
            },
        },
        extend: {
            height: {
                '100': '25rem',
                '104': '26rem',
                '108': '27rem',
                '112': '28rem',
                '116': '29rem',
                '120': '30rem',
                '124': '31rem',
                '128': '32rem',
                '132': '33rem',
                '136': '34rem',
                '140': '35rem',
                '144': '36rem',
                '148': '37rem',
                '152': '38rem',
                '156': '39rem',
                '160': '40rem',
            },
            maxWidth: {
                '1/2': '50%',
                '1/3': '33.3333%',
                '2/3': '66.6666%',
                '1/4': '25%',
                '2/4': '50%',
                '3/4': '75%',
                '1/5': '20%',
                '2/5': '40%',
                '3/5': '60%',
                '4/5': '80%',
                '1/6': '16.666667%',
                '2/6': '33.333333%',
                '3/6': '50%',
                '4/6': '66.666667%',
                '5/6': '83.333333%',
                '1/12': '8.333333%',
                '2/12': '16.666667%',
                '3/12': '25%',
                '4/12': '33.333333%',
                '5/12': '41.666667%',
                '6/12': '50%',
                '7/12': '58.333333%',
                '8/12': '66.666667%',
                '9/12': '75%',
                '10/12': '83.333333%',
                '11/12': '91.666667%',
            },
            fontSize: {
                '10xl': '10rem',
                '2rem': '2rem',
                '2rem-2': '2.3rem',
                '2rem-3': '2.7rem',
                '3rem': '3rem',
                '3rem-2': '3.3rem',
                '3rem-3': '3.7rem',
                '4rem': '4rem',
                '4rem-2': '4.3rem',
                '4rem-3': '4.7rem',
                '5rem': '5rem',
                '5rem-2': '5.3rem',
                '5rem-3': '5.7rem',
                '6rem': '6rem',
                '6rem-2': '6.3rem',
                '6rem-3': '6.7rem',
                '7rem': '7rem',
                '7rem-2': '7.3rem',
                '7rem-3': '7.7rem',
            },
            backgroundSize: {
                'height': 'auto 100%',
                'width': '100% auto',
            },
            gridTemplateColumns: {
                'center': '1fr auto 1fr',
            },
            zIndex: {
                '-10': '-10',
            }
        },
    },
    variants: {
        extend: {
            borderWidth: ['hover', 'focus']
        }
    },
    plugins: [
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/forms'),
        require('tailwindcss-textshadow')
    ],
}
