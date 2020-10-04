import React, { Component } from 'react';
import { connect } from "react-redux";
import { Row, Col } from 'react-bootstrap';
import { Route, Switch } from 'react-router-dom';

import { PoolsUIProvider } from "./PoolsUIProvider";
import { PoolsCard } from "./PoolsCard";
import AddLiquidityModal from "../../components/AddLiquidityModal";
import UniswapLiquidityModal from '../../components/AddLiquidityModal/uniswap';
import * as actions from '../../state/pools/actions';

class Invest extends Component {
    investButtonClick = () => {
        this.props.history.push("/invest/ETH/undefined", );
    }
    addLiquidityDialog = (id, pool) => {
        if(pool.platform.toLowerCase() === 'uniswap-v2') {
            const currencyA = pool.assets[0].symbol.toUpperCase() === 'ETH' ? 'ETH' : pool.assets[0].address;
            const currencyB = pool.assets[1].address
            this.props.history.push(`/invest/${currencyA}/${currencyB}`)
        } else {
            this.props.setSelectedPool(pool);
            this.props.history.push(`/invest/ETH/`)
        }
    }
    render() {
        return (
            <>
                <Row>
                    <Col span={12}>
                        <PoolsUIProvider poolsUIEvents={{
                            investButtonClick: this.investButtonClick,
                            addLiquidityDialog: this.addLiquidityDialog,
                        }}>
                            <PoolsCard />
                        </PoolsUIProvider>
                    </Col>
                </Row>
                <Switch>
                    <Route path={'/invest/:currencyIdA/:currencyIdB'} exact component={UniswapLiquidityModal}/>
                    <Route path={'/invest/ETH'} exact component={AddLiquidityModal}/>
                </Switch>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        account: state.account
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setSelectedPool: (pool) => dispatch(actions.selectPool(pool))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Invest);