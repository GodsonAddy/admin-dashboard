import React from "react";
import AdminDashboard from "../admin-dashboard";
const higherOrderComponent = (WrappedComponent) => {

    // And return another component
    function HOC(){

            // const {open} = useContext(DrawerContext)
            // let width = open === true ? '20px' : '10px' 
          return (
              <>
              <AdminDashboard />
              <WrappedComponent />
              </>
          )
        }
      return HOC;
    };
export default higherOrderComponent;