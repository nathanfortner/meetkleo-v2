const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    screens: {
      'iphoneSE': '320px',
      'iphoneSix': '375px',
      'navBreak': '950px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        k_primary: '#AA00FF',
        k_lightgreen:	'#85ED99',
        k_green:	'#3CD666',
        k_yellow:	'#FFF563',
        k_orange:	'#F98958',
        k_red:	'#FA5761',
        k_darkblue:	'#050D29',
        k_deeppurple:	'#5F1970',
        k_purple:	{
          '50': '#D787FF',
          '100': '#D174FF',
          '150': '#CA61FF',
          '200': '#C44DFF',
          '250': '#BE3AFF',
          '300': '#B827FF',
          '350': '#B213FF',
          '400': '#AA00FF',
          '450': '#A200ED',
          '500': '#9A00DB',
          '550': '#9100C9',
          '600': '#8700B8',
          '650': '#7D00A6',
          '700': '#720094',
          '750': '#660082',
          '800': '#5F1970',
        },
        k_coral:	'#FF787B',
        k_tan:	'#F6DFC5',
        k_darkgrey:	'#DFD9DF',
        k_grey:	'#EEEEEE',
        k_offwhite:	'#F9F9F9',
        k_blue: {
          '50':  '#f7fafb',
          '100': '#e5f0fc',
          '200': '#c8d9fa',
          '300': '#a0b6f2',
          '400': '#7b8ee8',
          '450': '#6835F8',
          '500': '#6469df',
          '600': '#524dd0',
          '700': '#3e39af',
          '800': '#2b2781',
          '900': '#181850'
        },
      }
    },
  },
  plugins: [],
}
