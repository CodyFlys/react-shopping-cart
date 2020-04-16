import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

import CartContext from './contexts/CartContext';
import ProuductContext from './contexts/ProductContext';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import CartContex from './contexts/CartContext';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		setCart([...cart, item])
	};

	return (
		<div className="App">
			<ProuductContext.Provider value={{ products, addItem}}>
				<CartContex.Provider value={{cart}}>
					<Navigation />

					{/* Routes */}
					<Route exact path="/" >
						<Products />
					</Route>

					<Route path="/cart">
						<ShoppingCart />
					</Route>
				</CartContex.Provider>
			</ProuductContext.Provider>
		</div>
	);
}

export default App;
