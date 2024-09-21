/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/components/Consultancy/*", "./src/components/Online Consultancy/*", 
            "./src/components/Home/Navbar.jsx", "./src/components/Home/Home.jsx",
             "./src/components/Home/Card.jsx", "./src/components/Home/CategoryCard.jsx",
             "./src/components/Home/Carousel.jsx", "./src/components/Home/Footer.jsx",
  ],
  theme: {
    screens: {
      'mobile': '200px',
      'laptop': '1020px'
    },
    extend: {
      fontFamily: {
        sans: ['Oxygen', 'sans-serif'],
        maven: ['Mavnen pro', 'sans-serif']
      },
    },
  },
  plugins: [],
}

