// const steder =[
//     {
//         navn: "Aktivitet -sande", 
//         tekst: "Løpebane for alle", 
//         lng: 10.255735, 
//         lat: 59.566205 
//     },
//     {
//         navn: "Aktivitet -sande", 
//         tekst: "Tennisbane for alle", 
//         lng: 10.255735, 
//         lat: 59.566205 
//     }
// ]

// const addMarker =(sted) => {
//     const marker = new mapboxgl.Marker()
//     marker.setLngLat([sted.lng, sted.lat])
//     marker.addTo(map)
    
//     const minPopup = new mapboxgl.Popup()
//     minPopup.setHTML (`
//         <h2>${sted.navn}</h2>
//         <p> ${sted.tekst}</p>
    
//     `)
//     marker.setPopup (minPopup)
    
    
// }

// const addMarkers =() => {
//     for(const sted of steder){
//         addMarker (sted)
//     }
// }

// map.on("load", addMarkers)