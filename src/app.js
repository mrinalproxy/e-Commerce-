 -5,6 +5,7 @@ import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Default from "./components/Default";
import Cart from "./components/Cart";
import Modal from "./components/Modal";
class App extends Component {
@@ -16,6 +17,7 @@ class App extends Component {
          <Route exact path="/" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
        <Modal />
      </React.Fragment>

@@ -18,7 +18,7 @@ export default class Store extends Component {
                  <Title name="your" title="cart" />
                  <CartColumns />
                  <CartList value={value} />
                  <CartTotals value={value} />
                  <CartTotals value={value} history={this.props.history} />
                </React.Fragment>
              );
            } else {
@@ -10,6 +10,7 @@ export default class CartTotals extends Component {
      cart,
      clearCart
    } = this.props.value;
    const { history } = this.props;
    const emptyCart = cart.length === 0 ? true : false;
    return (
      <React.Fragment>
@@ -40,7 +41,11 @@ export default class CartTotals extends Component {
                  <span className="text-title">cart total :</span>{" "}
                  <strong>$ {cartTotal} </strong>
                </h5>
                <PayPalButton totalAmount={cartTotal} clearCart={clearCart} />
                <PayPalButton
                  totalAmount={cartTotal}
                  clearCart={clearCart}
                  history={history}
                />
              </div>
            </div>
          </div>
  1 change: 1 addition & 0 deletions1  
src/components/Cart/PayPalButton.js
@@ -7,6 +7,7 @@ export default class MyApp extends React.Component {
      // Congratulation, it came here means everything's fine!
      console.log("The payment was succeeded!", payment);
      this.props.clearCart();
      this.props.history.push("/");
      // You can bind the "payment" object's value to your state or props or whatever here, please see below for sample returned data
    };

 22 changes: 22 additions & 0 deletions22  
@@ -0,0 +1,22 @@
import React from "react";

export default function Default(props) {
  console.log(props);

  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
          <h1 className="display-3">404</h1>
          <h1>error</h1>
          <h2>page not found</h2>
          <h3>
            the requested URL{" "}
            <span className="text-danger">"{props.location.pathname}"</span> was
            not found
          </h3>
        </div>
      </div>
    </div>
  );
}
