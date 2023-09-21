import { Navigate } from "react-router-dom";

export const ProtectedRoute = (props) => {
    if (props.username==='kaushalyad321' && props.password==='kaushalyad321@') {
      return <Navigate to="/AboutPage" />;
    }
    return <Navigate to ='/'/> ;

  };