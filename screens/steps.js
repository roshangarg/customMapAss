import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import burger from "../assets/Images/hamburger.png";
import SearchIcon from "react-native-vector-icons/Feather";
import ShareIcon from "react-native-vector-icons/EvilIcons";
import SettingIcon from "react-native-vector-icons/AntDesign";
export default function Steps({ navigation, mode }) {
  const markers = [
    {
      latitude: 20.5937,
      longitude: 78.9629,
      uri: require("../assets/Images/hamburger.png"),
      storeImg: require("../assets/Images/pexels-pixabay-264636.jpg"),
      title: "Hamburger",
      description: "lorem ipsem gdhsg  ",
    },
    {
      latitude: 20.4537,
      longitude: 78.9529,
      uri: require("../assets/Images/coffee-cup.png"),
      storeImg: require("../assets/Images/pexels-pixabay-264636.jpg"),
      title: "Hamburger",
      description: "lorem ipsem gdhsg  ",
    },
    {
      latitude: 20.3337,
      longitude: 78.9429,
      uri: require("../assets/Images/sandwich.png"),
      storeImg: require("../assets/Images/pexels-pixabay-264636.jpg"),
      title: "Sandwich",
      description: "lorem ipsem gdhsg  ",
    },
    {
      latitude: 20.5637,
      longitude: 78.9329,
      uri: require("../assets/Images/tea.png"),
      storeImg: require("../assets/Images/pexels-pixabay-264636.jpg"),
      title: "Tea",
      description: "lorem ipsem gdhsg  ",
    },
  ];

  const [storeView, setStoreView] = useState(null);
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const searchData = [
    {
      id: 1,
      title: "Sandwich",
    },
    {
      id: 2,
      title: "Tea",
    },
    {
      id: 3,
      title: "Hamburger",
    },
    {
      id: 4,
      title: "Sandwich",
    },
  ];
  const handlePress = () => {};
  const Item = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => setSearch(item.title)}>
        <View
          style={{
            padding: 15,
            borderBottomWidth: 0.5,
            borderColor: "#c5c5c5",
          }}
        >
          <Text style={{ color: "#000" }}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  const handleChange = (val) => {
    setSearch(val);
    if (val !== "") {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };
  const lightMapStyle = [];
  const darkMapStyle = [
    {
      elementType: "geometry",
      stylers: [
        {
          color: "#212121",
        },
      ],
    },
    {
      elementType: "labels.icon",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#757575",
        },
      ],
    },
    {
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#212121",
        },
      ],
    },
    {
      featureType: "administrative",
      elementType: "geometry",
      stylers: [
        {
          color: "#757575",
        },
      ],
    },
    {
      featureType: "administrative.country",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#9e9e9e",
        },
      ],
    },
    {
      featureType: "administrative.land_parcel",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "administrative.locality",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#bdbdbd",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#757575",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "geometry",
      stylers: [
        {
          color: "#181818",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#616161",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#1b1b1b",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#2c2c2c",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#8a8a8a",
        },
      ],
    },
    {
      featureType: "road.arterial",
      elementType: "geometry",
      stylers: [
        {
          color: "#373737",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry",
      stylers: [
        {
          color: "#3c3c3c",
        },
      ],
    },
    {
      featureType: "road.highway.controlled_access",
      elementType: "geometry",
      stylers: [
        {
          color: "#4e4e4e",
        },
      ],
    },
    {
      featureType: "road.local",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#616161",
        },
      ],
    },
    {
      featureType: "transit",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#757575",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [
        {
          color: "#000000",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#3d3d3d",
        },
      ],
    },
  ];
  return (
    <View style={{ position: "relative", width: "100%", alignItems: "center" }}>
      <MapView
        customMapStyle={mode === "light" ? lightMapStyle : darkMapStyle}
        onMapReady={this.onMapReady}
        style={styles.mapView}
        initialRegion={{
          latitude: 20.5937,
          longitude: 78.9629,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onPress={(e) => {
          if (e.nativeEvent.action !== "marker-press") {
            setStoreView(null);
            setOpen(false);
          }
        }}
      >
        {markers.map((item, i) => (
          <TouchableOpacity key={i}>
            <Marker
              onPress={() => setStoreView(item)}
              coordinate={{
                latitude: item.latitude,
                longitude: item.longitude,
              }}
            >
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 30,
                  backgroundColor: "#fff",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image source={item.uri} />
              </View>
            </Marker>
          </TouchableOpacity>
        ))}
      </MapView>

      <View style={styles.searchBox}>
        <SearchIcon
          name="search"
          color="#8F93A4"
          style={{ marginTop: 4 }}
          size={20}
        />
        <TextInput
          style={{ marginLeft: 5, flex: 1 }}
          value={search}
          placeholder="Search here ..."
          onChangeText={(val) => handleChange(val)}
        />
      </View>
      {open && (
        <View
          style={{
            position: "absolute",
            margin: 10,
            height: 150,
            top: 90,
            width: "95%",
            backgroundColor: "white",
            borderRadius: 5,
            zIndex: 100,
          }}
        >
          <FlatList
            data={searchData}
            renderItem={({ item }) => <Item item={item} />}
            keyExtractor={(item) => item.id}
          />
        </View>
      )}

      <View
        style={{
          position: "absolute",
          top: 150,
          right: 10,
          width: 40,
          height: 40,
          alignItems: "center",
          justifyContent: "center",
          padding: 5,
          borderRadius: 30,
          backgroundColor: "white",
        }}
      >
        <ShareIcon color="black" style={{}} name="sc-telegram" size={30} />
      </View>
      <View
        style={{
          position: "absolute",
          top: 100,
          right: 10,
          width: 40,
          height: 40,
          alignItems: "center",
          justifyContent: "center",
          padding: 5,
          padding: 5,
          borderRadius: 30,
          backgroundColor: "white",
        }}
      >
        <SettingIcon color="black" style={{}} name="setting" size={30} />
      </View>
      {storeView && (
        <View
          style={{
            position: "absolute",
            margin: 10,
            height: 100,
            bottom: 20,
            width: "90%",
            backgroundColor: "white",
            borderRadius: 5,
          }}
        >
          <View
            style={{
              flex: 1,

              margin: 10,
              flexDirection: "row",
            }}
          >
            <Image
              source={storeView.storeImg}
              style={{ width: 80, height: 80, borderRadius: 10 }}
            />
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View>
                <Text style={{ marginLeft: 10, fontWeight: "900" }}>
                  {storeView.title}
                </Text>
                <Text style={{ marginLeft: 10 }}>{storeView.description}</Text>
              </View>
            </View>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  mapView: {
    width: "100%",
    height: "100%",
  },
  searchBox: {
    position: "absolute",
    top: 30,

    marginHorizontal: 10,
    marginTop: 10,
    flexDirection: "row",
    shadowColor: "rgba(191, 216, 255, 0.10)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 2,
    borderRadius: 10,
    backgroundColor: "#FBFBFB",
    padding: 8,
  },
});
