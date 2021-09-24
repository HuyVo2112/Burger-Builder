import React, { Component } from "react";
import Order from "../../components/Order/Order";
import axios from "../../axios-orders";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import { connect } from "react-redux";
import Spinner from "../../components/UI/Spinner/Spinner";
import * as actions from "../../store/actions/index";

class Orders extends Component {

    

    componentDidMount() {
        this.props.fetchOrdersHandler(this.props.token, this.props.userId);
    }

    render() {
        return (
            <div>
                {this.props.loading ? <Spinner /> : null}
                {this.props.orders.map(order => <Order key={order.id} ingredients={order.ingredients} price={order.price} />)}
            </div>
        )
    }
}

const mapStateWithProps = state => {
    return {
        orders: state.order.orders,
        loading: state.order.loading,
        token: state.auth.tokenId,
        userId: state.auth.userId,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchOrdersHandler: (token, userId) => dispatch(actions.fetchOrders(token, userId)),
    }
}



export default connect(mapStateWithProps, mapDispatchToProps)(withErrorHandler(Orders, axios));