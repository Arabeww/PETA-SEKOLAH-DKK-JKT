var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'Open Street Map',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_BatasJakartaa_1 = new ol.format.GeoJSON();
var features_BatasJakartaa_1 = format_BatasJakartaa_1.readFeatures(json_BatasJakartaa_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasJakartaa_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasJakartaa_1.addFeatures(features_BatasJakartaa_1);
var lyr_BatasJakartaa_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasJakartaa_1, 
                style: style_BatasJakartaa_1,
                popuplayertitle: 'Batas Jakartaa',
                interactive: true,
                title: '<img src="styles/legend/BatasJakartaa_1.png" /> Batas Jakartaa'
            });
var format_JalanDKIJakarta_2 = new ol.format.GeoJSON();
var features_JalanDKIJakarta_2 = format_JalanDKIJakarta_2.readFeatures(json_JalanDKIJakarta_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanDKIJakarta_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanDKIJakarta_2.addFeatures(features_JalanDKIJakarta_2);
var lyr_JalanDKIJakarta_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanDKIJakarta_2, 
                style: style_JalanDKIJakarta_2,
                popuplayertitle: 'Jalan DKI Jakarta',
                interactive: true,
                title: '<img src="styles/legend/JalanDKIJakarta_2.png" /> Jalan DKI Jakarta'
            });
var format_Radius200_3 = new ol.format.GeoJSON();
var features_Radius200_3 = format_Radius200_3.readFeatures(json_Radius200_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Radius200_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Radius200_3.addFeatures(features_Radius200_3);
var lyr_Radius200_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Radius200_3, 
                style: style_Radius200_3,
                popuplayertitle: 'Radius 200',
                interactive: true,
                title: '<img src="styles/legend/Radius200_3.png" /> Radius 200'
            });
var format_Radius100_4 = new ol.format.GeoJSON();
var features_Radius100_4 = format_Radius100_4.readFeatures(json_Radius100_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Radius100_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Radius100_4.addFeatures(features_Radius100_4);
var lyr_Radius100_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Radius100_4, 
                style: style_Radius100_4,
                popuplayertitle: 'Radius 100',
                interactive: true,
                title: '<img src="styles/legend/Radius100_4.png" /> Radius 100'
            });
var format_SungaiGabungann_5 = new ol.format.GeoJSON();
var features_SungaiGabungann_5 = format_SungaiGabungann_5.readFeatures(json_SungaiGabungann_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SungaiGabungann_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SungaiGabungann_5.addFeatures(features_SungaiGabungann_5);
var lyr_SungaiGabungann_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SungaiGabungann_5, 
                style: style_SungaiGabungann_5,
                popuplayertitle: 'SungaiGabungann',
                interactive: true,
                title: '<img src="styles/legend/SungaiGabungann_5.png" /> SungaiGabungann'
            });
var format_areabanjir_6 = new ol.format.GeoJSON();
var features_areabanjir_6 = format_areabanjir_6.readFeatures(json_areabanjir_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_areabanjir_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_areabanjir_6.addFeatures(features_areabanjir_6);
var lyr_areabanjir_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_areabanjir_6, 
                style: style_areabanjir_6,
                popuplayertitle: 'area banjir',
                interactive: true,
                title: '<img src="styles/legend/areabanjir_6.png" /> area banjir'
            });
var format_DaerahYangAmanDariBanjir_7 = new ol.format.GeoJSON();
var features_DaerahYangAmanDariBanjir_7 = format_DaerahYangAmanDariBanjir_7.readFeatures(json_DaerahYangAmanDariBanjir_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DaerahYangAmanDariBanjir_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DaerahYangAmanDariBanjir_7.addFeatures(features_DaerahYangAmanDariBanjir_7);
var lyr_DaerahYangAmanDariBanjir_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DaerahYangAmanDariBanjir_7, 
                style: style_DaerahYangAmanDariBanjir_7,
                popuplayertitle: 'Daerah Yang Aman Dari Banjir',
                interactive: true,
                title: '<img src="styles/legend/DaerahYangAmanDariBanjir_7.png" /> Daerah Yang Aman Dari Banjir'
            });
var format_ResikoBanjirTinggi_8 = new ol.format.GeoJSON();
var features_ResikoBanjirTinggi_8 = format_ResikoBanjirTinggi_8.readFeatures(json_ResikoBanjirTinggi_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResikoBanjirTinggi_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResikoBanjirTinggi_8.addFeatures(features_ResikoBanjirTinggi_8);
var lyr_ResikoBanjirTinggi_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResikoBanjirTinggi_8, 
                style: style_ResikoBanjirTinggi_8,
                popuplayertitle: 'Resiko Banjir Tinggi',
                interactive: true,
                title: '<img src="styles/legend/ResikoBanjirTinggi_8.png" /> Resiko Banjir Tinggi'
            });
var format_ResikoBanjirSedang_9 = new ol.format.GeoJSON();
var features_ResikoBanjirSedang_9 = format_ResikoBanjirSedang_9.readFeatures(json_ResikoBanjirSedang_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResikoBanjirSedang_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResikoBanjirSedang_9.addFeatures(features_ResikoBanjirSedang_9);
var lyr_ResikoBanjirSedang_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResikoBanjirSedang_9, 
                style: style_ResikoBanjirSedang_9,
                popuplayertitle: 'Resiko Banjir Sedang',
                interactive: true,
                title: '<img src="styles/legend/ResikoBanjirSedang_9.png" /> Resiko Banjir Sedang'
            });
var format_ResikoBanjirRendahh_10 = new ol.format.GeoJSON();
var features_ResikoBanjirRendahh_10 = format_ResikoBanjirRendahh_10.readFeatures(json_ResikoBanjirRendahh_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResikoBanjirRendahh_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResikoBanjirRendahh_10.addFeatures(features_ResikoBanjirRendahh_10);
var lyr_ResikoBanjirRendahh_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResikoBanjirRendahh_10, 
                style: style_ResikoBanjirRendahh_10,
                popuplayertitle: 'Resiko Banjir Rendahh',
                interactive: true,
                title: '<img src="styles/legend/ResikoBanjirRendahh_10.png" /> Resiko Banjir Rendahh'
            });
var format_SekolahAmanBanjir_11 = new ol.format.GeoJSON();
var features_SekolahAmanBanjir_11 = format_SekolahAmanBanjir_11.readFeatures(json_SekolahAmanBanjir_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SekolahAmanBanjir_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SekolahAmanBanjir_11.addFeatures(features_SekolahAmanBanjir_11);
var lyr_SekolahAmanBanjir_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SekolahAmanBanjir_11, 
                style: style_SekolahAmanBanjir_11,
                popuplayertitle: 'Sekolah Aman Banjir',
                interactive: true,
                title: '<img src="styles/legend/SekolahAmanBanjir_11.png" /> Sekolah Aman Banjir'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_BatasJakartaa_1.setVisible(true);lyr_JalanDKIJakarta_2.setVisible(true);lyr_Radius200_3.setVisible(true);lyr_Radius100_4.setVisible(true);lyr_SungaiGabungann_5.setVisible(true);lyr_areabanjir_6.setVisible(true);lyr_DaerahYangAmanDariBanjir_7.setVisible(true);lyr_ResikoBanjirTinggi_8.setVisible(true);lyr_ResikoBanjirSedang_9.setVisible(true);lyr_ResikoBanjirRendahh_10.setVisible(true);lyr_SekolahAmanBanjir_11.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_BatasJakartaa_1,lyr_JalanDKIJakarta_2,lyr_Radius200_3,lyr_Radius100_4,lyr_SungaiGabungann_5,lyr_areabanjir_6,lyr_DaerahYangAmanDariBanjir_7,lyr_ResikoBanjirTinggi_8,lyr_ResikoBanjirSedang_9,lyr_ResikoBanjirRendahh_10,lyr_SekolahAmanBanjir_11];
lyr_BatasJakartaa_1.set('fieldAliases', {'KAB_NAME': 'KAB_NAME', });
lyr_JalanDKIJakarta_2.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'NAMRJL_2': 'NAMRJL_2', 'KONRJL_2': 'KONRJL_2', 'MATRJL_2': 'MATRJL_2', 'FGSRJL_2': 'FGSRJL_2', 'UTKRJL_2': 'UTKRJL_2', 'TOLRJL_2': 'TOLRJL_2', 'WLYRJL_2': 'WLYRJL_2', 'AUTRJL_2': 'AUTRJL_2', 'KLSRJL_2': 'KLSRJL_2', 'SPCRJL_2': 'SPCRJL_2', 'JPARJL_2': 'JPARJL_2', 'ARHRJL_2': 'ARHRJL_2', 'STARJL_2': 'STARJL_2', 'KLLRJL_2': 'KLLRJL_2', 'MEDRJL_2': 'MEDRJL_2', 'LOCRJL_2': 'LOCRJL_2', 'JARRJL_2': 'JARRJL_2', 'FCODE_2': 'FCODE_2', 'REMARK_2': 'REMARK_2', 'SRS_ID_2': 'SRS_ID_2', 'LCODE_2': 'LCODE_2', 'METADATA_2': 'METADATA_2', 'SHAPE_Le_1': 'SHAPE_Le_1', 'NAMRJL_3': 'NAMRJL_3', 'KONRJL_3': 'KONRJL_3', 'MATRJL_3': 'MATRJL_3', 'FGSRJL_3': 'FGSRJL_3', 'UTKRJL_3': 'UTKRJL_3', 'TOLRJL_3': 'TOLRJL_3', 'WLYRJL_3': 'WLYRJL_3', 'AUTRJL_3': 'AUTRJL_3', 'KLSRJL_3': 'KLSRJL_3', 'SPCRJL_3': 'SPCRJL_3', 'JPARJL_3': 'JPARJL_3', 'ARHRJL_3': 'ARHRJL_3', 'STARJL_3': 'STARJL_3', 'KLLRJL_3': 'KLLRJL_3', 'MEDRJL_3': 'MEDRJL_3', 'LOCRJL_3': 'LOCRJL_3', 'JARRJL_3': 'JARRJL_3', 'FCODE_3': 'FCODE_3', 'REMARK_3': 'REMARK_3', 'SRS_ID_3': 'SRS_ID_3', 'LCODE_3': 'LCODE_3', 'METADATA_3': 'METADATA_3', 'SHAPE_Le_2': 'SHAPE_Le_2', 'NAMRJL_4': 'NAMRJL_4', 'KONRJL_4': 'KONRJL_4', 'MATRJL_4': 'MATRJL_4', 'FGSRJL_4': 'FGSRJL_4', 'UTKRJL_4': 'UTKRJL_4', 'TOLRJL_4': 'TOLRJL_4', 'WLYRJL_4': 'WLYRJL_4', 'AUTRJL_4': 'AUTRJL_4', 'KLSRJL_4': 'KLSRJL_4', 'SPCRJL_4': 'SPCRJL_4', 'JPARJL_4': 'JPARJL_4', 'ARHRJL_4': 'ARHRJL_4', 'STARJL_4': 'STARJL_4', 'KLLRJL_4': 'KLLRJL_4', 'MEDRJL_4': 'MEDRJL_4', 'LOCRJL_4': 'LOCRJL_4', 'JARRJL_4': 'JARRJL_4', 'FCODE_4': 'FCODE_4', 'REMARK_4': 'REMARK_4', 'SRS_ID_4': 'SRS_ID_4', 'LCODE_4': 'LCODE_4', 'METADATA_4': 'METADATA_4', 'SHAPE_Le_3': 'SHAPE_Le_3', 'NAMRJL_5': 'NAMRJL_5', 'KONRJL_5': 'KONRJL_5', 'MATRJL_5': 'MATRJL_5', 'FGSRJL_5': 'FGSRJL_5', 'UTKRJL_5': 'UTKRJL_5', 'TOLRJL_5': 'TOLRJL_5', 'WLYRJL_5': 'WLYRJL_5', 'AUTRJL_5': 'AUTRJL_5', 'KLSRJL_5': 'KLSRJL_5', 'SPCRJL_5': 'SPCRJL_5', 'JPARJL_5': 'JPARJL_5', 'ARHRJL_5': 'ARHRJL_5', 'STARJL_5': 'STARJL_5', 'KLLRJL_5': 'KLLRJL_5', 'MEDRJL_5': 'MEDRJL_5', 'LOCRJL_5': 'LOCRJL_5', 'JARRJL_5': 'JARRJL_5', 'FCODE_5': 'FCODE_5', 'REMARK_5': 'REMARK_5', 'SRS_ID_5': 'SRS_ID_5', 'LCODE_5': 'LCODE_5', 'METADATA_5': 'METADATA_5', 'SHAPE_Le_4': 'SHAPE_Le_4', });
lyr_Radius200_3.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', 'layer': 'layer', 'path': 'path', });
lyr_Radius100_4.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', 'layer': 'layer', 'path': 'path', });
lyr_SungaiGabungann_5.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', 'layer': 'layer', 'path': 'path', });
lyr_areabanjir_6.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_DaerahYangAmanDariBanjir_7.set('fieldAliases', {'KAB_NAME': 'KAB_NAME', });
lyr_ResikoBanjirTinggi_8.set('fieldAliases', {'addr_full': 'addr_full', 'name': 'name', 'type': 'type', 'type_id': 'type_id', 'name_id': 'name_id', 'operator': 'operator', 'SDT': 'SDT', 'SDN': 'SDN', 'Alamat': 'Alamat', 'KAB_NAME': 'KAB_NAME', 'fid': 'fid', 'DN': 'DN', 'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', 'layer': 'layer', 'path': 'path', });
lyr_ResikoBanjirSedang_9.set('fieldAliases', {'addr_full': 'addr_full', 'name': 'name', 'type': 'type', 'type_id': 'type_id', 'name_id': 'name_id', 'operator': 'operator', 'SDT': 'SDT', 'SDN': 'SDN', 'Alamat': 'Alamat', 'KAB_NAME': 'KAB_NAME', 'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', 'layer': 'layer', 'path': 'path', });
lyr_ResikoBanjirRendahh_10.set('fieldAliases', {'addr_full': 'addr_full', 'name': 'name', 'type': 'type', 'type_id': 'type_id', 'name_id': 'name_id', 'operator': 'operator', 'SDT': 'SDT', 'SDN': 'SDN', 'Alamat': 'Alamat', 'KAB_NAME': 'KAB_NAME', 'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', 'layer': 'layer', 'path': 'path', });
lyr_SekolahAmanBanjir_11.set('fieldAliases', {'addr_full': 'addr_full', 'name': 'name', 'type': 'type', 'type_id': 'type_id', 'name_id': 'name_id', 'operator': 'operator', 'SDT': 'SDT', 'SDN': 'SDN', 'Alamat': 'Alamat', 'KAB_NAME': 'KAB_NAME', });
lyr_BatasJakartaa_1.set('fieldImages', {'KAB_NAME': 'TextEdit', });
lyr_JalanDKIJakarta_2.set('fieldImages', {'NAMRJL': '', 'KONRJL': '', 'MATRJL': '', 'FGSRJL': '', 'UTKRJL': '', 'TOLRJL': '', 'WLYRJL': '', 'AUTRJL': '', 'KLSRJL': '', 'SPCRJL': '', 'JPARJL': '', 'ARHRJL': '', 'STARJL': '', 'KLLRJL': '', 'MEDRJL': '', 'LOCRJL': '', 'JARRJL': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', 'NAMRJL_2': '', 'KONRJL_2': '', 'MATRJL_2': '', 'FGSRJL_2': '', 'UTKRJL_2': '', 'TOLRJL_2': '', 'WLYRJL_2': '', 'AUTRJL_2': '', 'KLSRJL_2': '', 'SPCRJL_2': '', 'JPARJL_2': '', 'ARHRJL_2': '', 'STARJL_2': '', 'KLLRJL_2': '', 'MEDRJL_2': '', 'LOCRJL_2': '', 'JARRJL_2': '', 'FCODE_2': '', 'REMARK_2': '', 'SRS_ID_2': '', 'LCODE_2': '', 'METADATA_2': '', 'SHAPE_Le_1': '', 'NAMRJL_3': '', 'KONRJL_3': '', 'MATRJL_3': '', 'FGSRJL_3': '', 'UTKRJL_3': '', 'TOLRJL_3': '', 'WLYRJL_3': '', 'AUTRJL_3': '', 'KLSRJL_3': '', 'SPCRJL_3': '', 'JPARJL_3': '', 'ARHRJL_3': '', 'STARJL_3': '', 'KLLRJL_3': '', 'MEDRJL_3': '', 'LOCRJL_3': '', 'JARRJL_3': '', 'FCODE_3': '', 'REMARK_3': '', 'SRS_ID_3': '', 'LCODE_3': '', 'METADATA_3': '', 'SHAPE_Le_2': '', 'NAMRJL_4': '', 'KONRJL_4': '', 'MATRJL_4': '', 'FGSRJL_4': '', 'UTKRJL_4': '', 'TOLRJL_4': '', 'WLYRJL_4': '', 'AUTRJL_4': '', 'KLSRJL_4': '', 'SPCRJL_4': '', 'JPARJL_4': '', 'ARHRJL_4': '', 'STARJL_4': '', 'KLLRJL_4': '', 'MEDRJL_4': '', 'LOCRJL_4': '', 'JARRJL_4': '', 'FCODE_4': '', 'REMARK_4': '', 'SRS_ID_4': '', 'LCODE_4': '', 'METADATA_4': '', 'SHAPE_Le_3': '', 'NAMRJL_5': '', 'KONRJL_5': '', 'MATRJL_5': '', 'FGSRJL_5': '', 'UTKRJL_5': '', 'TOLRJL_5': '', 'WLYRJL_5': '', 'AUTRJL_5': '', 'KLSRJL_5': '', 'SPCRJL_5': '', 'JPARJL_5': '', 'ARHRJL_5': '', 'STARJL_5': '', 'KLLRJL_5': '', 'MEDRJL_5': '', 'LOCRJL_5': '', 'JARRJL_5': '', 'FCODE_5': '', 'REMARK_5': '', 'SRS_ID_5': '', 'LCODE_5': '', 'METADATA_5': '', 'SHAPE_Le_4': '', });
lyr_Radius200_3.set('fieldImages', {'NAMOBJ': 'TextEdit', 'TIPSNG': 'Range', 'KLSSNG': 'Range', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'NAMWS': 'TextEdit', 'NAMDAS': 'TextEdit', 'STATUS': 'TextEdit', 'WMAX': 'TextEdit', 'DBTMAX': 'TextEdit', 'SLPRT': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Radius100_4.set('fieldImages', {'NAMOBJ': 'TextEdit', 'TIPSNG': 'Range', 'KLSSNG': 'Range', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'NAMWS': 'TextEdit', 'NAMDAS': 'TextEdit', 'STATUS': 'TextEdit', 'WMAX': 'TextEdit', 'DBTMAX': 'TextEdit', 'SLPRT': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_SungaiGabungann_5.set('fieldImages', {'NAMOBJ': '', 'TIPSNG': '', 'KLSSNG': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'NAMWS': '', 'NAMDAS': '', 'STATUS': '', 'WMAX': '', 'DBTMAX': '', 'SLPRT': '', 'SHAPE_Leng': '', 'layer': '', 'path': '', });
lyr_areabanjir_6.set('fieldImages', {'fid': 'TextEdit', 'DN': 'TextEdit', });
lyr_DaerahYangAmanDariBanjir_7.set('fieldImages', {'KAB_NAME': 'TextEdit', });
lyr_ResikoBanjirTinggi_8.set('fieldImages', {'addr_full': '', 'name': '', 'type': '', 'type_id': '', 'name_id': '', 'operator': '', 'SDT': '', 'SDN': '', 'Alamat': '', 'KAB_NAME': '', 'fid': '', 'DN': '', 'NAMOBJ': '', 'TIPSNG': '', 'KLSSNG': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'NAMWS': '', 'NAMDAS': '', 'STATUS': '', 'WMAX': '', 'DBTMAX': '', 'SLPRT': '', 'SHAPE_Leng': '', 'layer': '', 'path': '', });
lyr_ResikoBanjirSedang_9.set('fieldImages', {'addr_full': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', 'type_id': 'TextEdit', 'name_id': 'TextEdit', 'operator': 'TextEdit', 'SDT': 'TextEdit', 'SDN': 'TextEdit', 'Alamat': 'TextEdit', 'KAB_NAME': 'TextEdit', 'NAMOBJ': 'TextEdit', 'TIPSNG': 'Range', 'KLSSNG': 'Range', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'NAMWS': 'TextEdit', 'NAMDAS': 'TextEdit', 'STATUS': 'TextEdit', 'WMAX': 'TextEdit', 'DBTMAX': 'TextEdit', 'SLPRT': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_ResikoBanjirRendahh_10.set('fieldImages', {'addr_full': '', 'name': '', 'type': '', 'type_id': '', 'name_id': '', 'operator': '', 'SDT': '', 'SDN': '', 'Alamat': '', 'KAB_NAME': '', 'NAMOBJ': '', 'TIPSNG': '', 'KLSSNG': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'NAMWS': '', 'NAMDAS': '', 'STATUS': '', 'WMAX': '', 'DBTMAX': '', 'SLPRT': '', 'SHAPE_Leng': '', 'layer': '', 'path': '', });
lyr_SekolahAmanBanjir_11.set('fieldImages', {'addr_full': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', 'type_id': 'TextEdit', 'name_id': 'TextEdit', 'operator': 'TextEdit', 'SDT': 'TextEdit', 'SDN': 'TextEdit', 'Alamat': 'TextEdit', 'KAB_NAME': 'TextEdit', });
lyr_BatasJakartaa_1.set('fieldLabels', {'KAB_NAME': 'no label', });
lyr_JalanDKIJakarta_2.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'NAMRJL_2': 'no label', 'KONRJL_2': 'no label', 'MATRJL_2': 'no label', 'FGSRJL_2': 'no label', 'UTKRJL_2': 'no label', 'TOLRJL_2': 'no label', 'WLYRJL_2': 'no label', 'AUTRJL_2': 'no label', 'KLSRJL_2': 'no label', 'SPCRJL_2': 'no label', 'JPARJL_2': 'no label', 'ARHRJL_2': 'no label', 'STARJL_2': 'no label', 'KLLRJL_2': 'no label', 'MEDRJL_2': 'no label', 'LOCRJL_2': 'no label', 'JARRJL_2': 'no label', 'FCODE_2': 'no label', 'REMARK_2': 'no label', 'SRS_ID_2': 'no label', 'LCODE_2': 'no label', 'METADATA_2': 'no label', 'SHAPE_Le_1': 'no label', 'NAMRJL_3': 'no label', 'KONRJL_3': 'no label', 'MATRJL_3': 'no label', 'FGSRJL_3': 'no label', 'UTKRJL_3': 'no label', 'TOLRJL_3': 'no label', 'WLYRJL_3': 'no label', 'AUTRJL_3': 'no label', 'KLSRJL_3': 'no label', 'SPCRJL_3': 'no label', 'JPARJL_3': 'no label', 'ARHRJL_3': 'no label', 'STARJL_3': 'no label', 'KLLRJL_3': 'no label', 'MEDRJL_3': 'no label', 'LOCRJL_3': 'no label', 'JARRJL_3': 'no label', 'FCODE_3': 'no label', 'REMARK_3': 'no label', 'SRS_ID_3': 'no label', 'LCODE_3': 'no label', 'METADATA_3': 'no label', 'SHAPE_Le_2': 'no label', 'NAMRJL_4': 'no label', 'KONRJL_4': 'no label', 'MATRJL_4': 'no label', 'FGSRJL_4': 'no label', 'UTKRJL_4': 'no label', 'TOLRJL_4': 'no label', 'WLYRJL_4': 'no label', 'AUTRJL_4': 'no label', 'KLSRJL_4': 'no label', 'SPCRJL_4': 'no label', 'JPARJL_4': 'no label', 'ARHRJL_4': 'no label', 'STARJL_4': 'no label', 'KLLRJL_4': 'no label', 'MEDRJL_4': 'no label', 'LOCRJL_4': 'no label', 'JARRJL_4': 'no label', 'FCODE_4': 'no label', 'REMARK_4': 'no label', 'SRS_ID_4': 'no label', 'LCODE_4': 'no label', 'METADATA_4': 'no label', 'SHAPE_Le_3': 'no label', 'NAMRJL_5': 'no label', 'KONRJL_5': 'no label', 'MATRJL_5': 'no label', 'FGSRJL_5': 'no label', 'UTKRJL_5': 'no label', 'TOLRJL_5': 'no label', 'WLYRJL_5': 'no label', 'AUTRJL_5': 'no label', 'KLSRJL_5': 'no label', 'SPCRJL_5': 'no label', 'JPARJL_5': 'no label', 'ARHRJL_5': 'no label', 'STARJL_5': 'no label', 'KLLRJL_5': 'no label', 'MEDRJL_5': 'no label', 'LOCRJL_5': 'no label', 'JARRJL_5': 'no label', 'FCODE_5': 'no label', 'REMARK_5': 'no label', 'SRS_ID_5': 'no label', 'LCODE_5': 'no label', 'METADATA_5': 'no label', 'SHAPE_Le_4': 'no label', });
lyr_Radius200_3.set('fieldLabels', {'NAMOBJ': 'no label', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'STATUS': 'no label', 'WMAX': 'no label', 'DBTMAX': 'no label', 'SLPRT': 'no label', 'SHAPE_Leng': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Radius100_4.set('fieldLabels', {'NAMOBJ': 'no label', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'STATUS': 'no label', 'WMAX': 'no label', 'DBTMAX': 'no label', 'SLPRT': 'no label', 'SHAPE_Leng': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_SungaiGabungann_5.set('fieldLabels', {'NAMOBJ': 'no label', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'STATUS': 'no label', 'WMAX': 'no label', 'DBTMAX': 'no label', 'SLPRT': 'no label', 'SHAPE_Leng': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_areabanjir_6.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', });
lyr_DaerahYangAmanDariBanjir_7.set('fieldLabels', {'KAB_NAME': 'no label', });
lyr_ResikoBanjirTinggi_8.set('fieldLabels', {'addr_full': 'no label', 'name': 'no label', 'type': 'no label', 'type_id': 'inline label - visible with data', 'name_id': 'no label', 'operator': 'no label', 'SDT': 'no label', 'SDN': 'no label', 'Alamat': 'no label', 'KAB_NAME': 'no label', 'fid': 'no label', 'DN': 'no label', 'NAMOBJ': 'no label', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'STATUS': 'no label', 'WMAX': 'no label', 'DBTMAX': 'no label', 'SLPRT': 'no label', 'SHAPE_Leng': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_ResikoBanjirSedang_9.set('fieldLabels', {'addr_full': 'no label', 'name': 'no label', 'type': 'no label', 'type_id': 'inline label - visible with data', 'name_id': 'no label', 'operator': 'no label', 'SDT': 'no label', 'SDN': 'no label', 'Alamat': 'no label', 'KAB_NAME': 'no label', 'NAMOBJ': 'no label', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'STATUS': 'no label', 'WMAX': 'no label', 'DBTMAX': 'no label', 'SLPRT': 'no label', 'SHAPE_Leng': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_ResikoBanjirRendahh_10.set('fieldLabels', {'addr_full': 'no label', 'name': 'no label', 'type': 'no label', 'type_id': 'inline label - visible with data', 'name_id': 'no label', 'operator': 'no label', 'SDT': 'no label', 'SDN': 'no label', 'Alamat': 'no label', 'KAB_NAME': 'no label', 'NAMOBJ': 'no label', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'STATUS': 'no label', 'WMAX': 'no label', 'DBTMAX': 'no label', 'SLPRT': 'no label', 'SHAPE_Leng': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_SekolahAmanBanjir_11.set('fieldLabels', {'addr_full': 'no label', 'name': 'no label', 'type': 'no label', 'type_id': 'no label', 'name_id': 'no label', 'operator': 'no label', 'SDT': 'no label', 'SDN': 'no label', 'Alamat': 'no label', 'KAB_NAME': 'no label', });
lyr_SekolahAmanBanjir_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});