function filter(evt, column) {
	// Declare variables
	var input, filter, table, tr, td, i, txtValue;
	input = evt.target;
	filter = input.value.toUpperCase();
	table = evt.path[4];
	tr = table.getElementsByTagName("tr");

	// Loop through all table rows, and hide those who don't match the search query
	for (i = 2; i < tr.length; i++) {
		td = tr[i].getElementsByTagName("td")[column];
		if (td) {
			txtValue = td.textContent || td.innerText;
			if (txtValue.toUpperCase().indexOf(filter) > -1) {
				tr[i].style.display = "";
			} else {
				tr[i].style.display = "none";
			}
		}
	}
}

function goToMap(layer, featureID){
	var feature = layer._layers[featureID];
	if (feature.feature.geometry.type == 'Point' ) {
		map.setView(feature.getLatLng(), 16);
	} else {
		map.fitBounds(feature.getBounds());
	}

	document.getElementById('mapBtn').click();
	feature.openPopup();

	if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
		layer.bringToFront();
	};
}

tableHTML__JALAN_LN_25K = '<table id="_JALAN_LN_25K_table">';
tableHTML__JALAN_LN_25K += 	'<tr>';
tableHTML__JALAN_LN_25K += 		'<th>Mapa</th>';
tableHTML__JALAN_LN_25K += 		'<th>ARHRJL</th>';
tableHTML__JALAN_LN_25K += 		'<th>AUTRJL</th>';
tableHTML__JALAN_LN_25K += 		'<th>FCODE</th>';
tableHTML__JALAN_LN_25K += 		'<th>FGSRJL</th>';
tableHTML__JALAN_LN_25K += 		'<th>JARRJL</th>';
tableHTML__JALAN_LN_25K += 		'<th>JPARJL</th>';
tableHTML__JALAN_LN_25K += 		'<th>KLLRJL</th>';
tableHTML__JALAN_LN_25K += 		'<th>KLSRJL</th>';
tableHTML__JALAN_LN_25K += 		'<th>KONRJL</th>';
tableHTML__JALAN_LN_25K += 		'<th>LCODE</th>';
tableHTML__JALAN_LN_25K += 		'<th>LOCRJL</th>';
tableHTML__JALAN_LN_25K += 		'<th>MATRJL</th>';
tableHTML__JALAN_LN_25K += 		'<th>MEDRJL</th>';
tableHTML__JALAN_LN_25K += 		'<th>METADATA</th>';
tableHTML__JALAN_LN_25K += 		'<th>NAMRJL</th>';
tableHTML__JALAN_LN_25K += 		'<th>REMARK</th>';
tableHTML__JALAN_LN_25K += 		'<th>SHAPE_Leng</th>';
tableHTML__JALAN_LN_25K += 		'<th>SPCRJL</th>';
tableHTML__JALAN_LN_25K += 		'<th>SRS_ID</th>';
tableHTML__JALAN_LN_25K += 		'<th>STARJL</th>';
tableHTML__JALAN_LN_25K += 		'<th>TOLRJL</th>';
tableHTML__JALAN_LN_25K += 		'<th>UTKRJL</th>';
tableHTML__JALAN_LN_25K += 		'<th>WLYRJL</th>';
tableHTML__JALAN_LN_25K += 	'</tr>';
tableHTML__JALAN_LN_25K += 	'<tr>';
tableHTML__JALAN_LN_25K += 		'<td></td>';
tableHTML__JALAN_LN_25K += 		'<td><input type="text" onkeyup="filter(event, 1)" placeholder="Procurar ARHRJL"></td>';
tableHTML__JALAN_LN_25K += 		'<td><input type="text" onkeyup="filter(event, 2)" placeholder="Procurar AUTRJL"></td>';
tableHTML__JALAN_LN_25K += 		'<td><input type="text" onkeyup="filter(event, 3)" placeholder="Procurar FCODE"></td>';
tableHTML__JALAN_LN_25K += 		'<td><input type="text" onkeyup="filter(event, 4)" placeholder="Procurar FGSRJL"></td>';
tableHTML__JALAN_LN_25K += 		'<td><input type="text" onkeyup="filter(event, 5)" placeholder="Procurar JARRJL"></td>';
tableHTML__JALAN_LN_25K += 		'<td><input type="text" onkeyup="filter(event, 6)" placeholder="Procurar JPARJL"></td>';
tableHTML__JALAN_LN_25K += 		'<td><input type="text" onkeyup="filter(event, 7)" placeholder="Procurar KLLRJL"></td>';
tableHTML__JALAN_LN_25K += 		'<td><input type="text" onkeyup="filter(event, 8)" placeholder="Procurar KLSRJL"></td>';
tableHTML__JALAN_LN_25K += 		'<td><input type="text" onkeyup="filter(event, 9)" placeholder="Procurar KONRJL"></td>';
tableHTML__JALAN_LN_25K += 		'<td><input type="text" onkeyup="filter(event, 10)" placeholder="Procurar LCODE"></td>';
tableHTML__JALAN_LN_25K += 		'<td><input type="text" onkeyup="filter(event, 11)" placeholder="Procurar LOCRJL"></td>';
tableHTML__JALAN_LN_25K += 		'<td><input type="text" onkeyup="filter(event, 12)" placeholder="Procurar MATRJL"></td>';
tableHTML__JALAN_LN_25K += 		'<td><input type="text" onkeyup="filter(event, 13)" placeholder="Procurar MEDRJL"></td>';
tableHTML__JALAN_LN_25K += 		'<td><input type="text" onkeyup="filter(event, 14)" placeholder="Procurar METADATA"></td>';
tableHTML__JALAN_LN_25K += 		'<td><input type="text" onkeyup="filter(event, 15)" placeholder="Procurar NAMRJL"></td>';
tableHTML__JALAN_LN_25K += 		'<td><input type="text" onkeyup="filter(event, 16)" placeholder="Procurar REMARK"></td>';
tableHTML__JALAN_LN_25K += 		'<td><input type="text" onkeyup="filter(event, 17)" placeholder="Procurar SHAPE_Leng"></td>';
tableHTML__JALAN_LN_25K += 		'<td><input type="text" onkeyup="filter(event, 18)" placeholder="Procurar SPCRJL"></td>';
tableHTML__JALAN_LN_25K += 		'<td><input type="text" onkeyup="filter(event, 19)" placeholder="Procurar SRS_ID"></td>';
tableHTML__JALAN_LN_25K += 		'<td><input type="text" onkeyup="filter(event, 20)" placeholder="Procurar STARJL"></td>';
tableHTML__JALAN_LN_25K += 		'<td><input type="text" onkeyup="filter(event, 21)" placeholder="Procurar TOLRJL"></td>';
tableHTML__JALAN_LN_25K += 		'<td><input type="text" onkeyup="filter(event, 22)" placeholder="Procurar UTKRJL"></td>';
tableHTML__JALAN_LN_25K += 		'<td><input type="text" onkeyup="filter(event, 23)" placeholder="Procurar WLYRJL"></td>';
tableHTML__JALAN_LN_25K += 	'</tr>';

var _JALAN_LN_25K_IDs = Object.keys(_JALAN_LN_25K._layers);
for (var i=0; i < _JALAN_LN_25K_IDs.length; i++){
	var feature = _JALAN_LN_25K._layers[_JALAN_LN_25K_IDs[i]].feature;
	tableHTML__JALAN_LN_25K += '<tr>';
	tableHTML__JALAN_LN_25K += 	'<td onclick="goToMap(_JALAN_LN_25K, ' + _JALAN_LN_25K_IDs[i] + ')"><img src="javascript/icon.png" width="32px" height="32px"/></td>';
	tableHTML__JALAN_LN_25K += 	'<td>' + feature.properties['ARHRJL'] + '</td>';
	tableHTML__JALAN_LN_25K += 	'<td>' + feature.properties['AUTRJL'] + '</td>';
	tableHTML__JALAN_LN_25K += 	'<td>' + feature.properties['FCODE'] + '</td>';
	tableHTML__JALAN_LN_25K += 	'<td>' + feature.properties['FGSRJL'] + '</td>';
	tableHTML__JALAN_LN_25K += 	'<td>' + feature.properties['JARRJL'] + '</td>';
	tableHTML__JALAN_LN_25K += 	'<td>' + feature.properties['JPARJL'] + '</td>';
	tableHTML__JALAN_LN_25K += 	'<td>' + feature.properties['KLLRJL'] + '</td>';
	tableHTML__JALAN_LN_25K += 	'<td>' + feature.properties['KLSRJL'] + '</td>';
	tableHTML__JALAN_LN_25K += 	'<td>' + feature.properties['KONRJL'] + '</td>';
	tableHTML__JALAN_LN_25K += 	'<td>' + feature.properties['LCODE'] + '</td>';
	tableHTML__JALAN_LN_25K += 	'<td>' + feature.properties['LOCRJL'] + '</td>';
	tableHTML__JALAN_LN_25K += 	'<td>' + feature.properties['MATRJL'] + '</td>';
	tableHTML__JALAN_LN_25K += 	'<td>' + feature.properties['MEDRJL'] + '</td>';
	tableHTML__JALAN_LN_25K += 	'<td>' + feature.properties['METADATA'] + '</td>';
	tableHTML__JALAN_LN_25K += 	'<td>' + feature.properties['NAMRJL'] + '</td>';
	tableHTML__JALAN_LN_25K += 	'<td>' + feature.properties['REMARK'] + '</td>';
	tableHTML__JALAN_LN_25K += 	'<td>' + feature.properties['SHAPE_Leng'] + '</td>';
	tableHTML__JALAN_LN_25K += 	'<td>' + feature.properties['SPCRJL'] + '</td>';
	tableHTML__JALAN_LN_25K += 	'<td>' + feature.properties['SRS_ID'] + '</td>';
	tableHTML__JALAN_LN_25K += 	'<td>' + feature.properties['STARJL'] + '</td>';
	tableHTML__JALAN_LN_25K += 	'<td>' + feature.properties['TOLRJL'] + '</td>';
	tableHTML__JALAN_LN_25K += 	'<td>' + feature.properties['UTKRJL'] + '</td>';
	tableHTML__JALAN_LN_25K += 	'<td>' + feature.properties['WLYRJL'] + '</td>';
	tableHTML__JALAN_LN_25K += '</tr>';
}

tableHTML__JALAN_LN_25K += '</table>';
document.getElementById('_JALAN_LN_25K_tab').innerHTML = tableHTML__JALAN_LN_25K;

tableHTML__lbs_clip = '<table id="_lbs_clip_table">';
tableHTML__lbs_clip += 	'<tr>';
tableHTML__lbs_clip += 		'<th>Mapa</th>';
tableHTML__lbs_clip += 		'<th>Cetak_Sawa</th>';
tableHTML__lbs_clip += 		'<th>FID_Kec_in</th>';
tableHTML__lbs_clip += 		'<th>FID_PROVJA</th>';
tableHTML__lbs_clip += 		'<th>Jenis_Laha</th>';
tableHTML__lbs_clip += 		'<th>Luas_Ha</th>';
tableHTML__lbs_clip += 		'<th>Qname_2023</th>';
tableHTML__lbs_clip += 		'<th>Shape_Area</th>';
tableHTML__lbs_clip += 		'<th>Shape_Leng</th>';
tableHTML__lbs_clip += 		'<th>WADMKK</th>';
tableHTML__lbs_clip += 		'<th>WADMPR</th>';
tableHTML__lbs_clip += 		'<th>WIADKK</th>';
tableHTML__lbs_clip += 		'<th>WIADPR</th>';
tableHTML__lbs_clip += 		'<th>idkec</th>';
tableHTML__lbs_clip += 		'<th>kdkec</th>';
tableHTML__lbs_clip += 		'<th>lbs_kec_ha</th>';
tableHTML__lbs_clip += 		'<th>nmkec</th>';
tableHTML__lbs_clip += 	'</tr>';
tableHTML__lbs_clip += 	'<tr>';
tableHTML__lbs_clip += 		'<td></td>';
tableHTML__lbs_clip += 		'<td><input type="text" onkeyup="filter(event, 1)" placeholder="Procurar Cetak_Sawa"></td>';
tableHTML__lbs_clip += 		'<td><input type="text" onkeyup="filter(event, 2)" placeholder="Procurar FID_Kec_in"></td>';
tableHTML__lbs_clip += 		'<td><input type="text" onkeyup="filter(event, 3)" placeholder="Procurar FID_PROVJA"></td>';
tableHTML__lbs_clip += 		'<td><input type="text" onkeyup="filter(event, 4)" placeholder="Procurar Jenis_Laha"></td>';
tableHTML__lbs_clip += 		'<td><input type="text" onkeyup="filter(event, 5)" placeholder="Procurar Luas_Ha"></td>';
tableHTML__lbs_clip += 		'<td><input type="text" onkeyup="filter(event, 6)" placeholder="Procurar Qname_2023"></td>';
tableHTML__lbs_clip += 		'<td><input type="text" onkeyup="filter(event, 7)" placeholder="Procurar Shape_Area"></td>';
tableHTML__lbs_clip += 		'<td><input type="text" onkeyup="filter(event, 8)" placeholder="Procurar Shape_Leng"></td>';
tableHTML__lbs_clip += 		'<td><input type="text" onkeyup="filter(event, 9)" placeholder="Procurar WADMKK"></td>';
tableHTML__lbs_clip += 		'<td><input type="text" onkeyup="filter(event, 10)" placeholder="Procurar WADMPR"></td>';
tableHTML__lbs_clip += 		'<td><input type="text" onkeyup="filter(event, 11)" placeholder="Procurar WIADKK"></td>';
tableHTML__lbs_clip += 		'<td><input type="text" onkeyup="filter(event, 12)" placeholder="Procurar WIADPR"></td>';
tableHTML__lbs_clip += 		'<td><input type="text" onkeyup="filter(event, 13)" placeholder="Procurar idkec"></td>';
tableHTML__lbs_clip += 		'<td><input type="text" onkeyup="filter(event, 14)" placeholder="Procurar kdkec"></td>';
tableHTML__lbs_clip += 		'<td><input type="text" onkeyup="filter(event, 15)" placeholder="Procurar lbs_kec_ha"></td>';
tableHTML__lbs_clip += 		'<td><input type="text" onkeyup="filter(event, 16)" placeholder="Procurar nmkec"></td>';
tableHTML__lbs_clip += 	'</tr>';

var _lbs_clip_IDs = Object.keys(_lbs_clip._layers);
for (var i=0; i < _lbs_clip_IDs.length; i++){
	var feature = _lbs_clip._layers[_lbs_clip_IDs[i]].feature;
	tableHTML__lbs_clip += '<tr>';
	tableHTML__lbs_clip += 	'<td onclick="goToMap(_lbs_clip, ' + _lbs_clip_IDs[i] + ')"><img src="javascript/icon.png" width="32px" height="32px"/></td>';
	tableHTML__lbs_clip += 	'<td>' + feature.properties['Cetak_Sawa'] + '</td>';
	tableHTML__lbs_clip += 	'<td>' + feature.properties['FID_Kec_in'] + '</td>';
	tableHTML__lbs_clip += 	'<td>' + feature.properties['FID_PROVJA'] + '</td>';
	tableHTML__lbs_clip += 	'<td>' + feature.properties['Jenis_Laha'] + '</td>';
	tableHTML__lbs_clip += 	'<td>' + feature.properties['Luas_Ha'] + '</td>';
	tableHTML__lbs_clip += 	'<td>' + feature.properties['Qname_2023'] + '</td>';
	tableHTML__lbs_clip += 	'<td>' + feature.properties['Shape_Area'] + '</td>';
	tableHTML__lbs_clip += 	'<td>' + feature.properties['Shape_Leng'] + '</td>';
	tableHTML__lbs_clip += 	'<td>' + feature.properties['WADMKK'] + '</td>';
	tableHTML__lbs_clip += 	'<td>' + feature.properties['WADMPR'] + '</td>';
	tableHTML__lbs_clip += 	'<td>' + feature.properties['WIADKK'] + '</td>';
	tableHTML__lbs_clip += 	'<td>' + feature.properties['WIADPR'] + '</td>';
	tableHTML__lbs_clip += 	'<td>' + feature.properties['idkec'] + '</td>';
	tableHTML__lbs_clip += 	'<td>' + feature.properties['kdkec'] + '</td>';
	tableHTML__lbs_clip += 	'<td>' + feature.properties['lbs_kec_ha'] + '</td>';
	tableHTML__lbs_clip += 	'<td>' + feature.properties['nmkec'] + '</td>';
	tableHTML__lbs_clip += '</tr>';
}

tableHTML__lbs_clip += '</table>';
document.getElementById('_lbs_clip_tab').innerHTML = tableHTML__lbs_clip;

tableHTML__LapakGIS_Batas_Kecamatan_2024 = '<table id="_LapakGIS_Batas_Kecamatan_2024_table">';
tableHTML__LapakGIS_Batas_Kecamatan_2024 += 	'<tr>';
tableHTML__LapakGIS_Batas_Kecamatan_2024 += 		'<th>Mapa</th>';
tableHTML__LapakGIS_Batas_Kecamatan_2024 += 		'<th>JMLH_PNDDK</th>';
tableHTML__LapakGIS_Batas_Kecamatan_2024 += 		'<th>KDCPUM</th>';
tableHTML__LapakGIS_Batas_Kecamatan_2024 += 		'<th>WADMKC</th>';
tableHTML__LapakGIS_Batas_Kecamatan_2024 += 		'<th>WADMKK</th>';
tableHTML__LapakGIS_Batas_Kecamatan_2024 += 		'<th>WADMPR</th>';
tableHTML__LapakGIS_Batas_Kecamatan_2024 += 	'</tr>';
tableHTML__LapakGIS_Batas_Kecamatan_2024 += 	'<tr>';
tableHTML__LapakGIS_Batas_Kecamatan_2024 += 		'<td></td>';
tableHTML__LapakGIS_Batas_Kecamatan_2024 += 		'<td><input type="text" onkeyup="filter(event, 1)" placeholder="Procurar JMLH_PNDDK"></td>';
tableHTML__LapakGIS_Batas_Kecamatan_2024 += 		'<td><input type="text" onkeyup="filter(event, 2)" placeholder="Procurar KDCPUM"></td>';
tableHTML__LapakGIS_Batas_Kecamatan_2024 += 		'<td><input type="text" onkeyup="filter(event, 3)" placeholder="Procurar WADMKC"></td>';
tableHTML__LapakGIS_Batas_Kecamatan_2024 += 		'<td><input type="text" onkeyup="filter(event, 4)" placeholder="Procurar WADMKK"></td>';
tableHTML__LapakGIS_Batas_Kecamatan_2024 += 		'<td><input type="text" onkeyup="filter(event, 5)" placeholder="Procurar WADMPR"></td>';
tableHTML__LapakGIS_Batas_Kecamatan_2024 += 	'</tr>';

var _LapakGIS_Batas_Kecamatan_2024_IDs = Object.keys(_LapakGIS_Batas_Kecamatan_2024._layers);
for (var i=0; i < _LapakGIS_Batas_Kecamatan_2024_IDs.length; i++){
	var feature = _LapakGIS_Batas_Kecamatan_2024._layers[_LapakGIS_Batas_Kecamatan_2024_IDs[i]].feature;
	tableHTML__LapakGIS_Batas_Kecamatan_2024 += '<tr>';
	tableHTML__LapakGIS_Batas_Kecamatan_2024 += 	'<td onclick="goToMap(_LapakGIS_Batas_Kecamatan_2024, ' + _LapakGIS_Batas_Kecamatan_2024_IDs[i] + ')"><img src="javascript/icon.png" width="32px" height="32px"/></td>';
	tableHTML__LapakGIS_Batas_Kecamatan_2024 += 	'<td>' + feature.properties['JMLH_PNDDK'] + '</td>';
	tableHTML__LapakGIS_Batas_Kecamatan_2024 += 	'<td>' + feature.properties['KDCPUM'] + '</td>';
	tableHTML__LapakGIS_Batas_Kecamatan_2024 += 	'<td>' + feature.properties['WADMKC'] + '</td>';
	tableHTML__LapakGIS_Batas_Kecamatan_2024 += 	'<td>' + feature.properties['WADMKK'] + '</td>';
	tableHTML__LapakGIS_Batas_Kecamatan_2024 += 	'<td>' + feature.properties['WADMPR'] + '</td>';
	tableHTML__LapakGIS_Batas_Kecamatan_2024 += '</tr>';
}

tableHTML__LapakGIS_Batas_Kecamatan_2024 += '</table>';
document.getElementById('_LapakGIS_Batas_Kecamatan_2024_tab').innerHTML = tableHTML__LapakGIS_Batas_Kecamatan_2024;

