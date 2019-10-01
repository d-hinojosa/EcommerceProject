import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import routes from './routes';
import { useRoutes } from 'hookrouter';
import './App.css';

// This code below helps with logging both(Request/Reponse logs)
// The request id is added to the req object and can be retrieved by calling req.id.
// const addRequestId = require('express-request-id')();
// app.use(addRequestId);

function App() {
  const routeResult = useRoutes(routes);
    return ( 
      < div className = "App" >
				<Navbar /> 
        { routeResult }
				<Footer />
			</div>  
    );
}

export default App;