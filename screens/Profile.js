import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Switch,
} from "react-native";
import { MainLayout } from "./";
import { HeaderBar } from "../components";
import { SIZES, COLORS, FONTS, dummyData, icons } from "../constants";

const SectionTitle = ({ title }) => {
  return (
    <View style={{ marginTop: SIZES.padding }}>
      <Text style={{ color: COLORS.lightGray3, ...FONTS.h4 }}>{title}</Text>
    </View>
  );
};

const Setting = ({ title, value, type, onPress }) => {
  if (type == "button") {
    return (
      <TouchableOpacity
        style={{
          flexDirection: "row",
          height: 50,
          alignItems: "center",
        }}
        onPress={onPress}
      >
        <Text style={{ flex: 1, color: COLORS.white, ...FONTS.h3 }}>
          {title}
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: COLORS.white,
              ...FONTS.h3,
              marginRight: SIZES.radius,
            }}
          >
            {value}
          </Text>
          <Image
            source={icons.rightArrow}
            style={{
              width: 15,
              height: 15,
              tintColor: COLORS.white,
            }}
          />
        </View>
      </TouchableOpacity>
    );
  } else {
    return (
      <View
        style={{
          flexDirection: "row",
          height: 50,
          alignItems: "center",
        }}
      >
        <Text style={{ flex: 1, color: COLORS.white, ...FONTS.h3 }}>
          {title}
        </Text>
        <Switch 
          value={value}
          onValueChange={(value) => onPress(value)}
        />
      </View>
    )
  }
};

const Profile = () => {

  const [faceId, setFaceId] = React.useState(true)

  return (
    <MainLayout>
      <View
        style={{
          flex: 1,
          paddingHorizontal: SIZES.padding,
          backgroundColor: COLORS.black,
        }}
      >
        {/* header */}
        <HeaderBar title="Profile" />

        {/* detail */}
        <ScrollView>
          {/*  email & user id */}
          <View
            style={{
              flexDirection: "row",
              marginTop: SIZES.radius,
            }}
          >
            {/* email and id */}
            <View
              style={{
                flex: 1,
              }}
            >
              <Text style={{ color: COLORS.white, ...FONTS.h3 }}>
                {dummyData.profile.email}
              </Text>
              <Text style={{ color: COLORS.lightGray3, ...FONTS.body4 }}>
                ID: {dummyData.profile.id}
              </Text>
            </View>
            {/* status */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image
                source={icons.verified}
                style={{
                  height: 25,
                  width: 25,
                }}
              />
              <Text
                style={{
                  marginLeft: SIZES.base,
                  ...FONTS.body4,
                  color: COLORS.lightGreen,
                }}
              >
                Verified
              </Text>
            </View>
          </View>
          
            {/* app */}
            <SectionTitle title="APP" />
            <Setting
              title="Launch Screen"
              value="Home"
              type="button"
              onPress={() => console.log("Home")}
            />
            <Setting
              title="Apparance"
              value="Dark"
              type="button"
              onPress={() => console.log("Dark")}
            />

            {/* ACCOUNT */}
            <SectionTitle title="ACCOUNT" />
            <Setting
              title="Payment Currency"
              value="USD"
              type="button"
              onPress={() => console.log("USD")}
            />
            <Setting
              title="Language"
              value="English"
              type="button"
              onPress={() => console.log("English")}
            />

            {/* SECURITY */}
            <SectionTitle title="SECURITY" />
            <Setting
              title="Face ID"
              value={faceId}
              type="Switch"
              onPress={(value) => setFaceId(value)}
            />
            <Setting
              title="Password Settings"
              value=""
              type="button"
              onPress={() => console.log("Password Settings")}
            />
            <Setting
              title="Change Password"
              value=""
              type="button"
              onPress={() => console.log("Change Password")}
            />
            <Setting
              title="2-Factor Acthentication"
              value=""
              type="button"
              onPress={() => console.log("2-Factor Acthentication")}
            />
            
        </ScrollView>
      </View>
    </MainLayout>
  );
};

export default Profile;
