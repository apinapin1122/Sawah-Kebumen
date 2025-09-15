var map = L.map('map', {});

// PAINEIS
map.createPane('pane_1').style.zIndex = 498;
map.createPane('pane_2').style.zIndex = 497;
map.createPane('pane_2').style.zIndex = 497;

var baseMaps = {};
var overlayMaps = {};

// CAMADAS BASE
var googleStreet = L.tileLayer('http://{s}.google.com/vt/lyrs=m,h&x={x}&y={y}&z={z}',{
	maxZoom: 20,
	subdomains:['mt0','mt1','mt2','mt3'],
	attribution: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2021 Google</a>'
});
googleStreet.addTo(map);
baseMaps["Google Street"] = googleStreet;

// CAMADAS VETORIAIS
var _JALAN_LN_25K = L.geoJSON(_JALAN_LN_25K_data, {
			pane: 'pane_1',
			style: {
						opacity: 1.0,
						fillOpacity: 1.0,
						weight: 1.3,
						color: 'rgba(223, 149, 45, 1.00)'
			},
			onEachFeature: function (feature, layer){
				layer.on({click: clickedFeature});
				layer.bindPopup(function (layer) {
					return '<h4>CAMADA: JALAN_LN_25K</h4><br/>'  +
							'<b>ARHRJL:</b>&ensp;' + feature.properties['ARHRJL'] + '<br/>' +
							'<b>AUTRJL:</b>&ensp;' + feature.properties['AUTRJL'] + '<br/>' +
							'<b>FCODE:</b>&ensp;' + feature.properties['FCODE'] + '<br/>' +
							'<b>FGSRJL:</b>&ensp;' + feature.properties['FGSRJL'] + '<br/>' +
							'<b>JARRJL:</b>&ensp;' + feature.properties['JARRJL'] + '<br/>' +
							'<b>JPARJL:</b>&ensp;' + feature.properties['JPARJL'] + '<br/>' +
							'<b>KLLRJL:</b>&ensp;' + feature.properties['KLLRJL'] + '<br/>' +
							'<b>KLSRJL:</b>&ensp;' + feature.properties['KLSRJL'] + '<br/>' +
							'<b>KONRJL:</b>&ensp;' + feature.properties['KONRJL'] + '<br/>' +
							'<b>LCODE:</b>&ensp;' + feature.properties['LCODE'] + '<br/>' +
							'<b>LOCRJL:</b>&ensp;' + feature.properties['LOCRJL'] + '<br/>' +
							'<b>MATRJL:</b>&ensp;' + feature.properties['MATRJL'] + '<br/>' +
							'<b>MEDRJL:</b>&ensp;' + feature.properties['MEDRJL'] + '<br/>' +
							'<b>METADATA:</b>&ensp;' + feature.properties['METADATA'] + '<br/>' +
							'<b>NAMRJL:</b>&ensp;' + feature.properties['NAMRJL'] + '<br/>' +
							'<b>REMARK:</b>&ensp;' + feature.properties['REMARK'] + '<br/>' +
							'<b>SHAPE_LENG:</b>&ensp;' + feature.properties['SHAPE_Leng'] + '<br/>' +
							'<b>SPCRJL:</b>&ensp;' + feature.properties['SPCRJL'] + '<br/>' +
							'<b>SRS_ID:</b>&ensp;' + feature.properties['SRS_ID'] + '<br/>' +
							'<b>STARJL:</b>&ensp;' + feature.properties['STARJL'] + '<br/>' +
							'<b>TOLRJL:</b>&ensp;' + feature.properties['TOLRJL'] + '<br/>' +
							'<b>UTKRJL:</b>&ensp;' + feature.properties['UTKRJL'] + '<br/>' +
							'<b>WLYRJL:</b>&ensp;' + feature.properties['WLYRJL'] + '<br/>' 
				});
			}
}).addTo(map);
overlayMaps['JALAN_LN_25K'] = _JALAN_LN_25K;

var _lbs_clip = L.geoJSON(_lbs_clip_data, {
			pane: 'pane_2',
			style: function (feature) {
				if ( feature.properties["Jenis_Laha"] == 'Irigasi Non-Teknis') {
					return {
						opacity: 1.0,
						fillOpacity: 1.0,
						weight: 1.3,
						color: 'rgba(35, 35, 35, 1.00)',
						fillColor: 'rgba(226, 242, 83, 1.00)'
					}
				} else if ( feature.properties["Jenis_Laha"] == 'Irigasi Teknis') {
					return {
						opacity: 1.0,
						fillOpacity: 1.0,
						weight: 1.3,
						color: 'rgba(35, 35, 35, 1.00)',
						fillColor: 'rgba(226, 244, 59, 1.00)'
					}
				} else if ( feature.properties["Jenis_Laha"] == 'Pasang Surut') {
					return {
						opacity: 1.0,
						fillOpacity: 1.0,
						weight: 1.3,
						color: 'rgba(35, 35, 35, 1.00)',
						fillColor: 'rgba(63, 232, 44, 1.00)'
					}
				} else if ( feature.properties["Jenis_Laha"] == 'Rawa/Lebak') {
					return {
						opacity: 1.0,
						fillOpacity: 1.0,
						weight: 1.3,
						color: 'rgba(35, 35, 35, 1.00)',
						fillColor: 'rgba(20, 128, 39, 1.00)'
					}
				} else if ( feature.properties["Jenis_Laha"] == 'Tadah Hujan') {
					return {
						opacity: 1.0,
						fillOpacity: 1.0,
						weight: 1.3,
						color: 'rgba(35, 35, 35, 1.00)',
						fillColor: 'rgba(14, 214, 18, 1.00)'
					}
				} else {
					return {
						opacity: 1.0,
						fillOpacity: 1.0,
						weight: 1.3,
						color: 'rgba(35, 35, 35, 1.00)',
						fillColor: 'rgba(0, 68, 27, 1.00)'
					}
				}
			},
			onEachFeature: function (feature, layer){
				layer.on({click: clickedFeature});
				layer.bindPopup(function (layer) {
					return '<h4>CAMADA: lbs_clip</h4><br/>'  +
							'<b>CETAK_SAWA:</b>&ensp;' + feature.properties['Cetak_Sawa'] + '<br/>' +
							'<b>FID_KEC_IN:</b>&ensp;' + feature.properties['FID_Kec_in'] + '<br/>' +
							'<b>FID_PROVJA:</b>&ensp;' + feature.properties['FID_PROVJA'] + '<br/>' +
							'<b>JENIS_LAHA:</b>&ensp;' + feature.properties['Jenis_Laha'] + '<br/>' +
							'<b>LUAS_HA:</b>&ensp;' + feature.properties['Luas_Ha'] + '<br/>' +
							'<b>QNAME_2023:</b>&ensp;' + feature.properties['Qname_2023'] + '<br/>' +
							'<b>SHAPE_AREA:</b>&ensp;' + feature.properties['Shape_Area'] + '<br/>' +
							'<b>SHAPE_LENG:</b>&ensp;' + feature.properties['Shape_Leng'] + '<br/>' +
							'<b>WADMKK:</b>&ensp;' + feature.properties['WADMKK'] + '<br/>' +
							'<b>WADMPR:</b>&ensp;' + feature.properties['WADMPR'] + '<br/>' +
							'<b>WIADKK:</b>&ensp;' + feature.properties['WIADKK'] + '<br/>' +
							'<b>WIADPR:</b>&ensp;' + feature.properties['WIADPR'] + '<br/>' +
							'<b>IDKEC:</b>&ensp;' + feature.properties['idkec'] + '<br/>' +
							'<b>KDKEC:</b>&ensp;' + feature.properties['kdkec'] + '<br/>' +
							'<b>LBS_KEC_HA:</b>&ensp;' + feature.properties['lbs_kec_ha'] + '<br/>' +
							'<b>NMKEC:</b>&ensp;' + feature.properties['nmkec'] + '<br/>' 
				});
			}
}).addTo(map);
overlayMaps['lbs_clip'] = _lbs_clip;

var _LapakGIS_Batas_Kecamatan_2024 = L.geoJSON(_LapakGIS_Batas_Kecamatan_2024_data, {
			pane: 'pane_2',
			style: {
						opacity: 1.0,
						fillOpacity: 1.0,
						weight: 1.3,
						color: 'rgba(35, 35, 35, 1.00)',
						fillColor: 'rgba(42, 190, 244, 1.00)'
			},
			onEachFeature: function (feature, layer){
				layer.on({click: clickedFeature});
				layer.bindPopup(function (layer) {
					return '<h4>CAMADA: LapakGIS_Batas_Kecamatan_2024</h4><br/>'  +
							'<b>JMLH_PNDDK:</b>&ensp;' + feature.properties['JMLH_PNDDK'] + '<br/>' +
							'<b>KDCPUM:</b>&ensp;' + feature.properties['KDCPUM'] + '<br/>' +
							'<b>WADMKC:</b>&ensp;' + feature.properties['WADMKC'] + '<br/>' +
							'<b>WADMKK:</b>&ensp;' + feature.properties['WADMKK'] + '<br/>' +
							'<b>WADMPR:</b>&ensp;' + feature.properties['WADMPR'] + '<br/>' 
				});
			}
}).addTo(map);
overlayMaps['LapakGIS_Batas_Kecamatan_2024'] = _LapakGIS_Batas_Kecamatan_2024;

//Função que dá zoom sobre a feição clicada
function clickedFeature(e) {
	var feature = e.target;
	if (feature.feature.geometry.type == 'Point' ) {
		map.setView(feature.getLatLng(), 16);
	} else {
		map.fitBounds(feature.getBounds());
	}
}

// LEGENDA
var legend = L.control({position: 'topright'});
legend.onAdd = function (map) {
	var div = L.DomUtil.create('div', 'info legend');
	div.innerHTML = '<dl>';
	div.innerHTML += 	'<dt class="_JALAN_LN_25K_lgd"><svg class="legendIcon"><line x1="0" y1="9" x2="18" y2="9" stroke="rgba(223, 149, 45, 1.00)" stroke-width="3"></svg>JALAN_LN_25K</dt>';
	div.innerHTML += 	'<dt class="_lbs_clip_lgd">lbs_clip</dt>';
	div.innerHTML += 		'<dd class="_lbs_clip_lgd"><svg class="legendIcon"><rect width="18" height="18" stroke="rgba(35, 35, 35, 1.00)" stroke-width="3" fill="rgba(226, 242, 83, 1.00)"></svg>Irigasi Non-Teknis</dd>';
	div.innerHTML += 		'<dd class="_lbs_clip_lgd"><svg class="legendIcon"><rect width="18" height="18" stroke="rgba(35, 35, 35, 1.00)" stroke-width="3" fill="rgba(226, 244, 59, 1.00)"></svg>Irigasi Teknis</dd>';
	div.innerHTML += 		'<dd class="_lbs_clip_lgd"><svg class="legendIcon"><rect width="18" height="18" stroke="rgba(35, 35, 35, 1.00)" stroke-width="3" fill="rgba(63, 232, 44, 1.00)"></svg>Pasang Surut</dd>';
	div.innerHTML += 		'<dd class="_lbs_clip_lgd"><svg class="legendIcon"><rect width="18" height="18" stroke="rgba(35, 35, 35, 1.00)" stroke-width="3" fill="rgba(20, 128, 39, 1.00)"></svg>Rawa/Lebak</dd>';
	div.innerHTML += 		'<dd class="_lbs_clip_lgd"><svg class="legendIcon"><rect width="18" height="18" stroke="rgba(35, 35, 35, 1.00)" stroke-width="3" fill="rgba(14, 214, 18, 1.00)"></svg>Tadah Hujan</dd>';
	div.innerHTML += 		'<dd class="_lbs_clip_lgd"><svg class="legendIcon"><rect width="18" height="18" stroke="rgba(35, 35, 35, 1.00)" stroke-width="3" fill="rgba(0, 68, 27, 1.00)"></svg>-------</dd>';
	div.innerHTML += 	'<dt class="_LapakGIS_Batas_Kecamatan_2024_lgd"><svg class="legendIcon"><rect width="18" height="18" stroke="rgba(35, 35, 35, 1.00)" stroke-width="3" fill="rgba(42, 190, 244, 1.00)"></svg>LapakGIS_Batas_Kecamatan_2024</dt>';
	div.innerHTML += '</dl>';
	return div
}
legend.addTo(map);

//ESCALA
L.control.scale({
	maxWidth: 250,
	imperial: false
}).addTo(map);

// CONTROLE DE CAMADAS
L.control.layers(baseMaps, overlayMaps, {
	position: 'topright',
	collapsed: false,
	sortLayers: true
}).addTo(map);

function layerON (event){
	var className = event.name + '_lgd';
	var legendItems = document.getElementsByClassName(className);
	for (var i = 0; i < legendItems.length; i++) {
		legendItems[i].style.display = 'block';
	}
}

function layerOFF (event){
	var className = event.name + '_lgd';
	var legendItems = document.getElementsByClassName(className);
	for (var i = 0; i < legendItems.length; i++) {
		legendItems[i].style.display = 'none';
	}
}

map.on('overlayadd', layerON);
map.on('overlayremove', layerOFF);

// CALCULA A AREA QUE COBRE TODAS AS CAMADAS
var bounds = {xmin: 180, ymin: 90, xmax: -180, ymax: -90};
for (var layer in overlayMaps) {
	var layerBounds = overlayMaps[layer].getBounds();
	if (bounds.xmin > layerBounds.getSouthWest().lng) {bounds.xmin = layerBounds.getSouthWest().lng};
	if (bounds.ymin > layerBounds.getSouthWest().lat) {bounds.ymin = layerBounds.getSouthWest().lat};
	if (bounds.xmax < layerBounds.getNorthEast().lng) {bounds.xmax = layerBounds.getNorthEast().lng};
	if (bounds.ymax < layerBounds.getNorthEast().lat) {bounds.ymax = layerBounds.getNorthEast().lat};
}
map.fitBounds([
	[bounds.ymin, bounds.xmin],
	[bounds.ymax, bounds.xmax]
]);
