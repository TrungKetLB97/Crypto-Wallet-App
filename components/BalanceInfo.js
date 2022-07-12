import { View, Text, Image } from 'react-native'
import React from 'react'
import { SIZES, FONTS, COLORS, icons } from "../constants";

export default function BalanceInfo({title, displayAmount, containerStyle,changePct}) {
  return (
    <View
        style={{...containerStyle}}
    >
        {/* title */}
      <Text
        style={{
            ...FONTS.h3,
            color: COLORS.lightGray3
        }}
      >{title}</Text>

        {/* Figures */}
        <View
            style={{
                flexDirection: 'row',
                alignItems: 'flex-end',
                
            }}
        >
            <Text style={{...FONTS.h3, color: COLORS.lightGray3}} >$</Text>
            <Text style={{marginLeft: SIZES.base, ...FONTS.h2, color: COLORS.white}} > {displayAmount.toLocaleString()} </Text>
            <Text style={{color: COLORS.lightGray3, ...FONTS.h3}} >USD</Text>

        </View>

        {/* change percentage */}
        <View
            style={{
                flexDirection: 'row',
                alignItems: 'flex-end',
                
            }}
        >
            {changePct != 0 &&
                <Image 
                    source={icons.upArrow}
                    style={{
                        width: 10,
                        height: 10,
                        alignSelf: 'center',
                        tintColor: (changePct > 0) ? COLORS.lightGreen : COLORS.red,
                        transform: (changePct > 0) ? [{ rotate: '45deg' }] : [{ rotate: '125deg'}]
                    }}
                />
            }
            <Text style={{
                marginLeft: SIZES.base,
                alignSelf: 'flex-end',
                color: (changePct == 0) ? COLORS.lightGray3 : (changePct > 0) ? COLORS.lightGreen : COLORS.red,
                ...FONTS.h4
            }} >
                {changePct.toFixed(2)}%
            </Text>
            <Text style={{
                marginLeft: SIZES.radius,
                alignSelf: 'flex-end',
                color: COLORS.lightGray3,
                ...FONTS.h5
            }} >
                7d change
            </Text>
        </View>

    </View>
  )
}