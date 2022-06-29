import React from 'react';
import {
    View,
    Text
} from 'react-native';

import { connect } from "react-redux";
import { useFocusEffect } from "@react-navigation/native";
import { getHoldings, getCoinMarket } from "../stores/market/marketActions";

import { COLORS, SIZES, FONTS, dummyData, icons } from "../constants";

import { MainLayout } from "./";

const Home = ({getHoldings, getCoinMarket, myHoldings, coins}) => {

  useFocusEffect(
    React.useCallback(() => {
      getHoldings(holdings = dummyData.holdings )
      getCoinMarket()
    }, [])
  )

  function renderWalletInfoSection() {
    return(
      <View>
        
      </View>
    )
  }

    return (
      <MainLayout>
        <View
          style={{flex: 1, backgroundColor: COLORS.black}}
        >
          {/* header - wallet info */}
          {renderWalletInfoSection()}

          {/* Chart */}

          {/* top cryptocurrency */}

        </View>
      </MainLayout>
    );
}

function mapStateToProps(state) {
  return{
    myHoldings: state.marketReducer.myHoldings,
    coins: state.marketReducer.coins
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getHoldings: (
      holdings,
      currency,
      coinList,
      orderBy,
      sparkline,
      priceChangePerc,
      perPage,
      page
    ) => {
      return dispatch(
        getHoldings(
          holdings,
          currency,
          coinList,
          orderBy,
          sparkline,
          priceChangePerc,
          perPage,
          page
        )) },
    //coin
    getCoinMarket:
      (currency, coinList, orderBy, sparkline, priceChangePerc, perPage, page) => {
        return dispatch(
          getCoinMarket(
            currency,
            coinList,
            orderBy,
            sparkline,
            priceChangePerc,
            perPage,
            page
          )) }
  };
}

export default connect(mapStateToProps, mapDispatchToProps) (Home)