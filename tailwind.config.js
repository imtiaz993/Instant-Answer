/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}"],
   theme: {
    extend: {
      colors: {
        'dark-gray': '#29303D',
        'light-gray': '#667085',
        'darker-gray': '#101828',
        'dark-blue': '#344054',
        'light-background': '#ECECFF',
        'payment-label': '#697386',
        'payment-border': '#E6E6E6',
        'layout-background': '#FAFAFC',
        'payment-text': '#767676',
        'payment-heading': '#382B2B',
        'active-color':'#7F56D9',
        'recent-update-circle':'#33D198',
        'old-update-circle':'#FFDD55',
        'dark-border':'#0000000A',
        'light-dark-border':'#00000026',
        'darker-border':'#66708533',
        'last-upload':'#29303D70',
        'yellow-numbering':'#EEBC59',
        'modal-overlay':'#0000008F',
        'dark-heading':'#18181B',
        'dashboard-primary-text':'#71717A',
        'dashboard-card-border':'#E2E8F0'
      },
    }
  },
  plugins: [],
};
