/** @type {import('postcss-load-config').Config} */
// toto si tu mal predtym nez si isiel podla tailwind css next.js navodu
// const config = {
//   plugins: {
//     tailwindcss: {},
//   },
// };
//
// export default config;

const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
export default config;