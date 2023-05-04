import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import Header from "./components/header";
import RestaurantCard from "./components/RetaurantCard";
import Body from "./components/Body";
import Footer from "./components/Footer";
//import FoodFireLogo from "../Images/Food Fire Logo.png";

/* My Food App structure will look like this, 
            1) Header
                - Logo
                - Nav Items(right side)
                - Cart
            2) Body
                - Search bar
                - Restaurants List
                    - Restaurant card
                        - Image
                        - Name
                        - Rating
            3) Footer
                - Links
                - Copyrights
       
*/

// Title component for display logo
// const Title = () => (
//   <a href="/">
//     <img className="logo" src={FoodFireLogo} alt="Food Fire Logo" />
//   </a>
// );

// Header component for header section: Logo, Nav Items



const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Body />
      <Footer />
    </React.Fragment>
  );
};
export default App;

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />);