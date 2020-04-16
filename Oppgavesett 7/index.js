mapboxgl.accessToken = 'pk.eyJ1IjoiZmFnc2tvbGVzdHVkZW50aW5lIiwiYSI6ImNrOGE2c2UzdTBlbGUzbXFuazMydnN5NHUifQ.PYVGID6isSQ48N0OMdmt8A';

const knapper =document.querySelector ("#knapper")
const btnHome =document.querySelector ("#btnHome")

const map = new mapboxgl.Map({
    container: 'kart',
    style: 'mapbox://styles/mapbox/streets-v11',
    zoom: 12,
    center: [ 10.207396, 59.586563]
});

const changeMode = (evt)=> {
    const knapp =evt.target;
    const mode = knapp.dataset.mode;

    map.setStyle(mode)

}

const flyhjem = () => {
    map.flyTo({
        center:[10.267068, 59.563728],
        zoom: 16
    })
}

knapper.onclick = changeMode
btnHome.onclick = flyhjem

const addMarker =(sted) => {
    const marker = new mapboxgl.Marker()
    marker.setLngLat([sted.lng, sted.lat])
    marker.addTo(map)
    const minPopup = new mapboxgl.Popup()
    minPopup.setHTML (`
        <h2>${sted.navn}</h2>
        <p> ${sted.tekst}</p>
        <img src="./img ${sted.bilder}>
    
    `)
    marker.setPopup (minPopup)
    
}


const steder =[
    {
        navn: "Selvik skole", 
        tekst: "Løpebane for alle", 
        lng: 10.280386, 
        lat: 59.557835,
        // bilde: 
    },
    {
        navn: "Ute-aktiviteter", 
        tekst: "Ulike muligheter for aktiviteter slik som tennis,løpebane", 
        lng: 10.255735, 
        lat: 59.566205,
        // bilde: 
    },
    {
        navn: "Kverntangen", 
        tekst: "Ulike muligheter for aktiviteter slik som tennis,løpebane", 
        lng: 10.259626, 
        lat: 59.562826,
        // bilde: 
    },
    {
        navn: "Togstasjon", 
        tekst: "Toget som er mest forsinket", 
        lng: 10.204886, 
        lat: 59.585066,
        // bilde: 
    },
    {
        navn: "Meny", 
        tekst: "Ferske varer", 
        lng: 10.208170, 
        lat: 59.587730,
        // bilde: 
    },
    {
        navn: "Grunnane naturreservat", 
        tekst: "", 
        lng: 10.394220, 
        lat: 59.587238,
        // bilde:  
    },
    {
        navn: "Rema 1000", 
        tekst: "Dagligvare", 
        lng: 10.210429, 
        lat: 59.583667,
        // bilde: 
    },
    {
        navn: "Vinmonopol", 
        tekst: "Vin og øl med god service", 
        lng: 10.206710, 
        lat: 59.587749,
        // bilde: 
    }
]

const addMarkers =() => {
    for(const sted of steder){
        addMarker (sted)
    }
}

map.on("load", addMarkers)