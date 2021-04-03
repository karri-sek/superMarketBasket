import { connect } from 'react-redux'
import Basket from './Basket'
export default connect((state) => state.basketItems)(Basket)
