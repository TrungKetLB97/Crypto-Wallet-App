import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    Image,
    Switch
} from 'react-native';
import { MainLayout } from "./";
import { HeaderBar } from "../components";
import { SIZES, COLORS, FONTS, dummyData, icons } from "../constants";

const Profile = () => {
    return (
      <MainLayout>
        <View
          style={{
            flex: 1,
            paddingHorizontal: SIZES.padding,
            backgroundColor: COLORS.black
          }}
        >
          {/* header */}
          <HeaderBar title="Profile" />

          {/* detail */}

        </View>
      </MainLayout>
    );
}

export default Profile;