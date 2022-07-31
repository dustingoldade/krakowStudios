'use strict';

// render Map:
const map = L.map('map').setView([50.0601, 19.944], 14);

var myIcon = L.icon({
  iconUrl: 'icon.png',
  iconSize: [95, 95],
  iconAnchor: [43, 94],
  popupAnchor: [5, -90],
});

L.tileLayer('https://{s}.tile.openstreetmap.fr/hot//{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="https://www.openstreetmap.copyright">OpenStreetMap</a> - To add additional locations, <a href="mailto: dagoldade@gmail.com" email me >email me!</a>',
}).addTo(map);

// Marker Class:
class Marker {
  constructor(
    lat,
    lng,
    locationName,
    contactOnlineBoolean,
    website,
    phoneNumber,
    address,
    price,
    otherRoomsBoolean
  ) {
    this.lat = lat;
    this.lng = lng;

    this.locationName = locationName;
    this.contactOnlineBoolean = contactOnlineBoolean;
    this.website = website;
    this.phoneNumber = phoneNumber;
    this.address = address;
    this.price = price;
    this.otherRoomsBoolean = otherRoomsBoolean;

    this.createMarker(
      lat,
      lng,
      locationName,
      contactOnlineBoolean,
      website,
      phoneNumber,
      address,
      price,
      otherRoomsBoolean
    );
  }
  createMarker(
    lat,
    lng,
    locationName,
    contactOnlineBoolean,
    website,
    phoneNumber,
    address,
    price,
    otherRoomsBoolean
  ) {
    L.marker([lat, lng], { icon: myIcon })
      .addTo(map)
      .bindPopup(
        L.popup({
          closeOnClick: false,
          autoClose: false,
          className: `popup_element`,
        })
      )
      .setPopupContent(
        `<h3>${locationName}</h3><br>Book ${
          contactOnlineBoolean
            ? `online: <a href="${website}" target="_blank">Visit Site</a><br><br> Price: ${price} zl/hr${
                otherRoomsBoolean ? '*' : ''
              }<br>Address: ${address}<br>Phone: 
         <a href="tel:${phoneNumber}" target="_blank">${phoneNumber}</a><br>${
                otherRoomsBoolean ? '*Different prices for different rooms' : ''
              }`
            : `via phone: <a href="tel:${phoneNumber}" target="_blank">${phoneNumber} </a> <br><br> Price: ${price} zl/hr ${
                otherRoomsBoolean ? '*' : ''
              }<br>Address: ${address}<br><a href="${website}" target="_blank">Visit Site</a><br>${
                otherRoomsBoolean ? '*Different prices for different rooms' : ''
              }`
        }`
      )
      .openPopup();
  }
}

const blackWire = new Marker(
  50.04289037288637,
  19.932131485544648,
  'Black Wire',
  1,
  'https://blackwire.pl/',
  '695 182 087',
  'Komandosów 21',
  40,
  1
);

const volumeUp = new Marker(
  50.064129572222605,
  19.975292037726305,
  'Volume Up',
  0,
  'http://volumeup.pl/',
  '531 869 969',
  'Fabryczna 17',
  35,
  1
);

const abyRoad = new Marker(
  50.07590540678023,
  19.931310345591605,
  'Aby Road',
  0,
  'http://salaprob.abyroad.pl/',
  '507 149 560',
  'Józefa Friedleina 3',
  30,
  0
);

const rockHouse = new Marker(
  50.05414911247483,
  19.95663325844223,
  'RockHouse - Gesia',
  0,
  'http://salkawkrakowie.pl',
  '503 733 619',
  'Gesia 8',
  30,
  0
);

const stakkato = new Marker(
  50.048372313555284,
  19.961476323262012,
  'Stakkato • Art Space',
  0,
  'https://www.facebook.com/stakkatoart/',
  '517 394 649',
  'Ślusarska 9',
  '??',
  0
);

const soundriseStudio = new Marker(
  50.0638498367577,
  19.945249936764423,
  'Soundrise Studio',
  0,
  'https://www.facebook.com/profile.php?id=100063765150221',
  '508 643 770',
  'Westerplatte 3',
  30,
  0
);

const bursztynowaKomnata = new Marker(
  50.06966324105351,
  19.933223368649045,
  'Bursztynowa Komnata',
  0,
  'https://salaprobkrakow.pl/',
  '787 328 802',
  'Władysława Spasowskiego 6A',
  40,
  0
);

const salkaNaMatecznym = new Marker(
  50.036694232754115,
  19.937843899654876,
  'Salka na Matecznym',
  0,
  'http://salkakrakow.com/en/music-room-cracow/',
  '664 642 091',
  'Rydlówka 5',
  20,
  0
);

const factoryOfSound = new Marker(
  50.04415680350703,
  19.947529536206616,
  'Factory Of Sound',
  1,
  `https://www.google.com/maps/reserve/v/default?m=I5K_H_10Uto&source=pa&gei=MnnJYtP7GZGvkwXbxpZw&sourceurl=https://www.google.com/maps/preview/place?authuser%3D0%26hl%3Den%26gl%3Dpl%26pb%3D!1m17!1s0x47165b4429cc5fa7:0xcf41459784d81ae2!3m12!1m3!1d1785.825355685396!2d19.94594226238143!3d50.04438869895966!2m3!1f0!2f0!3f0!3m2!1i1600!2i757!4f13.1!4m2!3d50.04423680353281!4d19.947436898946755!6sfactory%2Bof%2Bsound!12m4!2m3!1i360!2i120!4i8!13m57!2m2!1i203!2i100!3m2!2i4!5b1!6m6!1m2!1i86!2i86!1m2!1i408!2i240!7m42!1m3!1e1!2b0!3e3!1m3!1e2!2b1!3e2!1m3!1e2!2b0!3e3!1m3!1e8!2b0!3e3!1m3!1e10!2b0!3e3!1m3!1e10!2b1!3e2!1m3!1e9!2b1!3e2!1m3!1e10!2b0!3e3!1m3!1e10!2b1!3e2!1m3!1e10!2b0!3e4!2b1!4b1!9b0!14m5!1sKnnJYvC_H4fckgW6pJWwCA!4m1!2i5357!7e81!12e3!15m71!1m23!4e2!13m8!2b1!3b1!4b1!6i1!8b1!9b1!14b1!20b1!18m12!3b1!4b1!5b1!6b1!9b1!12b1!13b1!14b1!15b1!17b1!20b1!21b1!2b1!5m5!2b1!3b1!5b1!6b1!7b1!10m1!8e3!14m1!3b1!17b1!20m2!1e3!1e6!24b1!25b1!26b1!29b1!30m1!2b1!36b1!39m3!2m2!2i1!3i1!43b1!52b1!54m1!1b1!55b1!56m2!1b1!3b1!65m5!3m4!1m3!1m2!1i224!2i298!71b1!72m4!1m2!3b1!5b1!4b1!89b1!21m28!1m6!1m2!1i0!2i0!2m2!1i886!2i757!1m6!1m2!1i1550!2i0!2m2!1i1600!2i757!1m6!1m2!1i0!2i0!2m2!1i1600!2i20!1m6!1m2!1i0!2i737!2m2!1i1600!2i757!22m1!1e81!29m0!30m1!3b1!34m2!7b1!10b1!37i610!38sChBmYWN0b3J5IG9mIHNvdW5kkgEQcmVjb3JkaW5nX3N0dWRpbw%26q%3DSalki%2Bmuzyczne%2BKrak%25C3%25B3w%2BFactory%25E2%2580%25A6&hl=en-PL`,
  '530 112 222',
  'Kalwaryjska 6',
  30,
  0
);
