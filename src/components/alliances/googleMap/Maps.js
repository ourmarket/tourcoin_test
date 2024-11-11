/* eslint-disable @next/next/no-img-element */
"use client";
import { GoogleMap, InfoWindow, Marker } from "@react-google-maps/api";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setActive,
  setAllianceActive,
  setClearAllianceActive,
  setInActive,
} from "@/redux/mapSlice";
import styles from "../section1/section1.module.css";
import { Link, useRouter } from "@/navigation";
import {
  activeMapDetail,
  inactiveMapDetail,
  toggleMap,
  toggleMapDetail,
} from "@/redux/uiSlice";
import { IoCloseOutline } from "react-icons/io5";

const defaultMapStyles = [
  {
    elementType: "geometry",
    stylers: [
      {
        color: "#111111",
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
        color: "#f9b932",
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
        color: "#555555",
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
        color: "#4b4b4b",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#4b4b4b",
      },
    ],
  },
];

function ClientMarker({ data, locale }) {
  const { fullMap } = useSelector((store) => store.ui);

  const dispatch = useDispatch();
  const router = useRouter();

  const handleFocus = () => {
    if (!fullMap) {
      dispatch(setActive(data.allianceId));
    }
  };

  const handleBlur = () => {
    if (!fullMap) {
      dispatch(setInActive(data.allianceId));
    }
  };

  const handleClick = () => {
    // Navegación a una nueva ruta
    if (!fullMap) {
      router.push(`/alliances/${data.allianceId}`);
    }
    if (fullMap) {
      dispatch(activeMapDetail());
      dispatch(setAllianceActive(data.allianceId));
      dispatch(setActive(data.allianceId));
    }
  };

  const divStyle = {
    background: `white`,

    textAlign: "center",
    fontSize: "12px",
  };

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      .gm-style-iw + div,
      .gm-ui-hover-effect {
        display: none !important;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  return (
    <Marker
      position={{
        lat: data.lat,
        lng: data.lng,
      }}
      onMouseOver={handleFocus}
      onMouseOut={handleBlur}
      onClick={handleClick}
      /*    icon={ 
        "https://ik.imagekit.io/mrprwema7/Tour%20Coin/icon_eebdZFS_f.png?updatedAt=1717856754739"
      }  */
    >
      {data.active && !fullMap && (
        <InfoWindow
          position={{
            lat: data.lat,
            lng: data.lng,
          }}
          onCloseClick={handleBlur}
        >
          <div style={divStyle}>
            <h2
              style={{
                fontSize: "14px",
                color: "#111111",
                marginBottom: "3px",
                fontWeight: 800,
              }}
            >
              {data.localization[locale]?.title}
            </h2>
            <h2 style={{ fontSize: "14px", color: "#222" }}>
              {data.localization[locale]?.details}
            </h2>
          </div>
        </InfoWindow>
      )}
    </Marker>
  );
}
function DetailMarker({ lat, lng }) {
  return (
    <Marker
      position={{
        lat,
        lng,
      }}
      icon={
        "https://ik.imagekit.io/mrprwema7/Tour%20Coin/icon_eebdZFS_f.png?updatedAt=1717856754739"
      }
    ></Marker>
  );
}

export const Maps = ({
  defaultMapContainerStyle,
  defaultMapCenter,
  defaultMapZoom,
  marker,
  locale,
}) => {
  //Map options
  const defaultMapOptions = {
    disableDefaultUI: true, // Desactiva todos los controles por defecto
    zoomControl: true, // Activa el control de zoom
    zoomControlOptions: {
      position: google.maps.ControlPosition.RIGHT_TOP, // Cambia esta posición según tu preferencia
    },
    tilt: 0,
    gestureHandling: "auto",

    styles: defaultMapStyles,
  };

  const dispatch = useDispatch();

  const { alliancesDisplay, allianceActive } = useSelector(
    (store) => store.alliances
  );
  const { fullMapDetail } = useSelector((store) => store.ui);

  const [center, setCenter] = useState(defaultMapCenter);

  const mapRef = useRef(null);

  useEffect(() => {
    const active = alliancesDisplay.find((item) => item.active);
    if (active) {
      smoothPanTo({ lat: active.lat, lng: active.lng });
    }
  }, [alliancesDisplay]);

  const smoothPanTo = (newCenter) => {
    if (!mapRef.current) return;

    const map = mapRef.current;

    map.panTo(newCenter);
  };

  return (
    <div className={styles.map_container}>
      {fullMapDetail && allianceActive && (
        <div className={styles.map_container_detail}>
          <div className={styles.wrapper}>
            <div
              className={styles.close_btn}
              onClick={() => {
                dispatch(inactiveMapDetail());
                dispatch(setClearAllianceActive());
                dispatch(setInActive(allianceActive.allianceId));
              }}
            >
              <IoCloseOutline size={25} />
            </div>

            <Link
              href={`/alliances/${allianceActive.allianceId}`}
              className={styles.detail_wrapper}
              onClick={() => {
                dispatch(inactiveMapDetail());
                /*  dispatch(toggleMap()); */
              }}
            >
              <img src={allianceActive.images[0]} alt={allianceActive.city} />
              <h3>{allianceActive?.localization[locale]?.title}</h3>
              <p>{allianceActive?.localization[locale]?.sub_title}</p>
            </Link>
          </div>
        </div>
      )}
      <GoogleMap
        mapContainerStyle={defaultMapContainerStyle}
        center={center}
        zoom={defaultMapZoom}
        options={defaultMapOptions}
        onLoad={(map) => (mapRef.current = map)}
      >
        {alliancesDisplay.map((item) => (
          <ClientMarker data={item} locale={locale} key={item.allianceId} />
        ))}
        {marker && (
          <DetailMarker lat={defaultMapCenter.lat} lng={defaultMapCenter.lng} />
        )}
      </GoogleMap>
    </div>
  );
};
