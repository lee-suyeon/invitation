"use client";

import { useRef, useEffect, useState } from "react";
import Title from "../components/Title/Title";
import classes from "./map-section.module.css";

function MapSection() {
  useEffect(() => {
    let map = new naver.maps.Map("map", {
      center: new naver.maps.LatLng(37.454813, 126.7031135),
      zoom: 15,
      zoomControl: true,
      zoomControlOptions: {
        style: naver.maps.ZoomControlStyle.SMALL,
        position: naver.maps.Position.TOP_RIGHT,
      },
    });

    let marker = new naver.maps.Marker({
      position: new naver.maps.LatLng(37.454813, 126.7031135),
      map: map,
    });

    let contentString = ['<div class="iw_inner">', "샤펠드미앙", "</div>"].join(
      ""
    );

    let infowindow = new naver.maps.InfoWindow({
      content: contentString,
    });

    naver.maps.Event.addListener(marker, "click", function (e) {
      if (infowindow.getMap()) {
        infowindow.close();
      } else {
        window.open(
          "https://map.naver.com/p/directions/-/14104514.3596374,4502711.7354941,%EC%83%A4%ED%8E%A0%EB%93%9C%EB%AF%B8%EC%95%99,37890987,PLACE_POI/-/transit?c=15.00,0,0,0,dh"
        );
        infowindow.open(map, marker);
      }
    });

    infowindow.open(map, marker);
  }, []);

  return (
    <div className={classes.map}>
      <Title>
        <h3>오시는 길</h3>
      </Title>
      <div className={classes.maparea} id="map"></div>
      <div className={classes.info}></div>
    </div>
  );
}

export default MapSection;
