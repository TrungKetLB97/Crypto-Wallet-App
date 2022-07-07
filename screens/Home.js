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
import { BalanceInfo, IconTextButton, Chart } from "../components";

const Home = ({getHoldings, getCoinMarket, myHoldings, coins}) => {

  useFocusEffect(
    React.useCallback(() => {
      getHoldings(holdings = dummyData.holdings )
      getCoinMarket()
    }, [])
  )

  let totalWallet = myHoldings.reduce((a, b) => a + (b.total || 0), 0)
  let valueChange = myHoldings.reduce((a, b) => a + (b.holding_value_change_7d || 0), 0)
  let percChange = valueChange / (totalWallet - valueChange) * 100

  function renderWalletInfoSection() {
    return (
      <View
        style={{
          paddingHorizontal: SIZES.padding,
          borderBottomLeftRadius: 25,
          borderBottomRightRadius: 25,
          backgroundColor: COLORS.gray,
        }}
      >
        {/* balance info */}
        <BalanceInfo
          title="Your Wallet"
          displayAmount={totalWallet}
          changePct={percChange}
          containerStyle={{
            marginTop: 20,
            marginBottom: 10,
          }}
        />

        {/* buttons */}
        <View
          style={{
            flexDirection: "row",
            marginTop: 15,
            marginBottom: -15,
            paddingHorizontal: SIZES.radius,
          }}
        >
          <IconTextButton
            label="transfer"
            icon={icons.send}
            containerStyle={{
              flex: 1,
              height: 40,
              marginRight: SIZES.radius,
            }}
            onPress={() => console.log("Transfer")}
          />

          <IconTextButton
            label="withdraw"
            icon={icons.withdraw}
            containerStyle={{
              flex: 1,
              height: 40,
              marginRight: SIZES.radius,
            }}
            onPress={() => console.log("withdraw")}
          />
        </View>
      </View>
    );
  }

    return (
      <MainLayout>
        <View
          style={{flex: 1, backgroundColor: COLORS.black}}
        >
          {/* header - wallet info */}
          {renderWalletInfoSection()}

          {/* Chart */}
          <Chart 
            containerStyle={{
              marginTop: SIZES.padding * 2
            }}
            chartPrices={coins[0]?.sparkline_in_7d?.price}
          />

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