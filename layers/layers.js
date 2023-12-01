var wms_layers = [];


        var lyr_GoogleStreets_0 = new ol.layer.Tile({
            'title': 'Google Streets',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_KabJombang_2 = new ol.format.GeoJSON();
var features_KabJombang_2 = format_KabJombang_2.readFeatures(json_KabJombang_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KabJombang_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KabJombang_2.addFeatures(features_KabJombang_2);
var lyr_KabJombang_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KabJombang_2, 
                style: style_KabJombang_2,
                interactive: true,
                title: '<img src="styles/legend/KabJombang_2.png" /> Kab. Jombang'
            });
var format_ADMINISTRASIDESA_AR_25K_3 = new ol.format.GeoJSON();
var features_ADMINISTRASIDESA_AR_25K_3 = format_ADMINISTRASIDESA_AR_25K_3.readFeatures(json_ADMINISTRASIDESA_AR_25K_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIDESA_AR_25K_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIDESA_AR_25K_3.addFeatures(features_ADMINISTRASIDESA_AR_25K_3);
var lyr_ADMINISTRASIDESA_AR_25K_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ADMINISTRASIDESA_AR_25K_3, 
                style: style_ADMINISTRASIDESA_AR_25K_3,
                interactive: true,
                title: '<img src="styles/legend/ADMINISTRASIDESA_AR_25K_3.png" /> ADMINISTRASIDESA_AR_25K'
            });
var format_JALAN_LN_25K_4 = new ol.format.GeoJSON();
var features_JALAN_LN_25K_4 = format_JALAN_LN_25K_4.readFeatures(json_JALAN_LN_25K_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALAN_LN_25K_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_LN_25K_4.addFeatures(features_JALAN_LN_25K_4);
var lyr_JALAN_LN_25K_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JALAN_LN_25K_4, 
                style: style_JALAN_LN_25K_4,
                interactive: true,
                title: '<img src="styles/legend/JALAN_LN_25K_4.png" /> JALAN_LN_25K'
            });
var format_RUMAHSAKIT_PT_25K_5 = new ol.format.GeoJSON();
var features_RUMAHSAKIT_PT_25K_5 = format_RUMAHSAKIT_PT_25K_5.readFeatures(json_RUMAHSAKIT_PT_25K_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RUMAHSAKIT_PT_25K_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RUMAHSAKIT_PT_25K_5.addFeatures(features_RUMAHSAKIT_PT_25K_5);
var lyr_RUMAHSAKIT_PT_25K_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RUMAHSAKIT_PT_25K_5, 
                style: style_RUMAHSAKIT_PT_25K_5,
                interactive: true,
                title: '<img src="styles/legend/RUMAHSAKIT_PT_25K_5.png" /> RUMAHSAKIT_PT_25K'
            });

lyr_GoogleStreets_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_KabJombang_2.setVisible(true);lyr_ADMINISTRASIDESA_AR_25K_3.setVisible(true);lyr_JALAN_LN_25K_4.setVisible(true);lyr_RUMAHSAKIT_PT_25K_5.setVisible(true);
var layersList = [lyr_GoogleStreets_0,lyr_GoogleSatellite_1,lyr_KabJombang_2,lyr_ADMINISTRASIDESA_AR_25K_3,lyr_JALAN_LN_25K_4,lyr_RUMAHSAKIT_PT_25K_5];
lyr_KabJombang_2.set('fieldAliases', {'ADM0_EN': 'ADM0_EN', 'date': 'date', 'validOn': 'validOn', 'PROVINCE': 'PROVINCE', 'Kabupaten': 'Kabupaten', 'PRV2': 'PRV2', });
lyr_ADMINISTRASIDESA_AR_25K_3.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_JALAN_LN_25K_4.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_RUMAHSAKIT_PT_25K_5.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'LCODE': 'LCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'TIPRST': 'TIPRST', 'JPLYRS': 'JPLYRS', 'ALAMAT': 'ALAMAT', });
lyr_KabJombang_2.set('fieldImages', {'ADM0_EN': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'PROVINCE': 'TextEdit', 'Kabupaten': 'TextEdit', 'PRV2': 'TextEdit', });
lyr_ADMINISTRASIDESA_AR_25K_3.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_JALAN_LN_25K_4.set('fieldImages', {'NAMRJL': 'TextEdit', 'KONRJL': 'TextEdit', 'MATRJL': 'TextEdit', 'FGSRJL': 'TextEdit', 'UTKRJL': 'TextEdit', 'TOLRJL': 'TextEdit', 'WLYRJL': 'TextEdit', 'AUTRJL': 'TextEdit', 'KLSRJL': 'TextEdit', 'SPCRJL': 'TextEdit', 'JPARJL': 'TextEdit', 'ARHRJL': 'TextEdit', 'STARJL': 'TextEdit', 'KLLRJL': 'TextEdit', 'MEDRJL': 'TextEdit', 'LOCRJL': 'TextEdit', 'JARRJL': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_RUMAHSAKIT_PT_25K_5.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'LCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'TIPRST': 'TextEdit', 'JPLYRS': 'TextEdit', 'ALAMAT': 'TextEdit', });
lyr_KabJombang_2.set('fieldLabels', {'ADM0_EN': 'no label', 'date': 'no label', 'validOn': 'no label', 'PROVINCE': 'no label', 'Kabupaten': 'no label', 'PRV2': 'no label', });
lyr_ADMINISTRASIDESA_AR_25K_3.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_JALAN_LN_25K_4.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_RUMAHSAKIT_PT_25K_5.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'LCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'TIPRST': 'no label', 'JPLYRS': 'no label', 'ALAMAT': 'no label', });
lyr_RUMAHSAKIT_PT_25K_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});