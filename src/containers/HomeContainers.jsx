import { connect } from "react-redux";
import Home from "../components/Home";
import {addToCart, removeFromCart} from '../services/actions/Action'

const mapStateToProps = (state) =>({})

const mapDispatchToProps = (dispatch) => ({
     addToCartHandler: data =>dispatch(addToCart(data))
 })






export default connect (mapStateToProps,mapDispatchToProps)(Home);