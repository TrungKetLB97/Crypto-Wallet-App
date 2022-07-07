import { View, Text } from 'react-native'
import React from 'react'

import { 
    ChartDot,
    ChartPath,
    ChartPathProvider,
    ChartXLabel,
    ChartYLabel,
    monotoneCubicInterpolation
 } from "@rainbow-me/animated-charts";

import { SIZES, COLORS, FONTS } from "../constants";
import moment from "moment";

const Chart = ({containerStyle, chartPrices}) => {

    // points
    let startUnixTimestamp = moment().subtract(7, 'day').unix()

    let data = chartPrices ? chartPrices?.map((item, index) => {
        return {
          x: startUnixTimestamp + (index + 1) * 3600,
          y: item,
        };
    }) : []
    
    let points = monotoneCubicInterpolation({data, range: 40})

  return (
    <View style={{...containerStyle}} >

      {/* chart */}
      {
        data.length > 0 &&
        <ChartPathProvider 
            data={{
                points,
                smoothingStrategy: 'bezier'
            }}
        >
            <ChartPath 
                height={150}
                width={SIZES.width}
                stroke={COLORS.lightGreen}
                strokeWidth={2}
            />
            <ChartDot>
                <View
                    style={{
                        position:'absolute',
                        left: -35,
                        width: 80,
                        alignItems:'center',
                        backgroundColor: COLORS.transparentBlack1
                    }}
                >

                </View>
            </ChartDot>
        </ChartPathProvider>
      }
    </View>
  )
}
export default Chart