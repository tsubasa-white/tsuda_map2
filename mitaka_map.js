var currentWindow = null;
var Center = {lat: 35.685976,lng:139.560085};
var map;
var a;
var markers1 = [];var markers2 = [];var markers3 = [];var markers4 = [];var markers5 = [];var markers6 = [];var markers7 = [];var markers8 = [];var markers9 = [];var markers10 = [];
var c1=0;var c2=0;var c3=0;var c4=0;var c5=0;var c6=0;var c7=0;var c8=0;var c9=0;var c10=0;
var cl1=0;var cl2=0;var cl3=0;var cl4=0;
var markers = [
       {
       name: '三鷹駅 ',
       lat: 35.702716,
        lng: 139.561029,
        ave:'77772',
 }, {
        name: '三鷹台駅',
      lat: 35.692245,
        lng:139.588921,
       ave:'71225',
 }, {
    　name: '井の頭公園駅',
      lat: 35.697512 ,
      lng: 139.582743,
      ave:'68191',
 }
]; 
//コンビニ
x1list = mitaka_conveni.results;
var place_conveni = [
    
]
for(let i=0;i<x1list.length;++i){
    x = mitaka_conveni.results[i].geometry.location;
    y = mitaka_conveni.results[i].name;
    x["name"]=y;
    place_conveni.push(x);
}

//薬局
x2list = mitaka_drugstore.results;
var place_drugstore = [

]
for(let i=0;i<x2list.length;++i){
    x = mitaka_drugstore.results[i].geometry.location;
    y = mitaka_drugstore.results[i].name;
    x["name"]=y;
    place_drugstore.push(x);
}

//病院
x3list = mitaka_hospital.results;
var place_hospital=[
    
]
for(let i=0;i<x3list.length;++i){
    x = mitaka_hospital.results[i].geometry.location;
    y = mitaka_hospital.results[i].name;
    x["name"]=y;
    place_hospital.push(x);
}

//スーパー
x4list =mitaka_supermarket.results;
var place_supermarket = [
    
]
for(let i=0;i<x4list.length;++i){
    x = mitaka_supermarket.results[i].geometry.location;
    y = mitaka_supermarket.results[i].name;
    x["name"]=y;
    place_supermarket.push(x);
}
//警察署
x5list = mitaka_police.results;
var place_police = [
    
]
for(let i=0;i<x5list.length;++i){
    x =mitaka_police.results[i].geometry.location;
    y = mitaka_police.results[i].name;
    x["name"]=y;
    place_police.push(x);
}

//郵便局
x6list = mitaka_postoffice.results;
var place_postoffice = [
    
]
for(let i=0;i<x6list.length;++i){
    x = mitaka_postoffice.results[i].geometry.location;
    y = mitaka_postoffice.results[i].name;
    x["name"]=y;
    place_postoffice.push(x);
}
//避難所
x7list = mitaka_hinanjo.results;
var place_hinanjo = [
    
]
for(let i=0;i<x7list.length;++i){
    x = mitaka_hinanjo.results[i].location;
    y = mitaka_hinanjo.results[i].name;
    x["name"]=y;
    place_hinanjo.push(x);
}

function initMap(x) {
        map = new google.maps.Map(document.getElementById('map'), {
            zoom:  14,
            center: Center,
            styles: [{
            featureType:'poi.business',
            stylers: [
                { visibility: 'off' }
            ]
        },
        {
            featureType:'poi.medical',
            stylers: [
                { visibility: 'off' }
            ]
        },
        {
            featureType:'poi.school',
            stylers: [
                { visibility: 'off' }
            ]
        }]
        });
	map.data.loadGeoJson('mitakashi.geojson');//initmapの中で必ず定義する
	map.data.setStyle({
            //fillColor: 'red',
            strokeWeight: 0.5
            //noStroke();
         });
        
        var hanzai = new Array();
        if(x==0){
            map.data.loadGeoJson('mitakashi.geojson');
        };
    a=x;
    cl1++;
    if(cl1 %2 == 0){
        if(x==1){//total
            for (i = 0;i < mitaka_data.features.length;i++) {
                 hanzai[i] = mitaka_data.features[i].properties["mitakasi-3_TOTAL"];
            }
            for (i = 0;i < mitaka_data.features.length;i++) {                
                    var mydata = mitaka_data.features[i].geometry.coordinates[0][0];
                    //console.log(mydata[0][0]);
                    var arrCoords = new Array();
                    for (j = 0;j < mydata.length;j++) {
                        // 座標地をlatlng値に変換
                        var latlng = new google.maps.LatLng(mydata[j][1], mydata[j][0]);
                       // console.log(latlng);
                        // latlng値を配列に退避
                        arrCoords.push(latlng);
                    };
               if(20>hanzai[i]){
                    var poly = new google.maps.Polygon({
                        map: map,
                        paths: arrCoords,     //閉ループを示す座標列
                        strokeWeight: 5,       //ストローク幅(ピクセル単位)
                        strokeColor: "green",//ストロークの色(16進数形式)
                        fillColor: "green",  //塗りつぶしの色(16進数形式)
                    });
                }else if(40>hanzai[i] && hanzai[i]>=20){
                    var poly = new google.maps.Polygon({
                        map: map,
                        paths: arrCoords,     //閉ループを示す座標列
                        strokeWeight: 5,       //ストローク幅(ピクセル単位)
                        strokeColor: "yellow",//ストロークの色(16進数形式)
                        fillColor: "yellow",  //塗りつぶしの色(16進数形式)
                    }); 
                }else if(100>hanzai[i] && hanzai[i]>=40){
                    var poly = new google.maps.Polygon({
                        map: map,
                        paths: arrCoords,     //閉ループを示す座標列
                        strokeWeight: 5,       //ストローク幅(ピクセル単位)
                        //strokeColor: "#ffff00",//ストロークの色(16進数形式)
                        strokeColor: "orange",
                        //fillColor: "#ffff00",  //塗りつぶしの色(16進数形式)
                        fillColor: "orange",
                    }); 
                }else if(hanzai[i]>=100){
                    var poly = new google.maps.Polygon({
                        map: map,
                        paths: arrCoords,     //閉ループを示す座標列
                        strokeWeight: 5,       //ストローク幅(ピクセル単位)
                        strokeColor: "red",//ストロークの色(16進数形式)
                        fillColor: "red",  //塗りつぶしの色(16進数形式)
                   });
            };
        };
        }else if(x==0){
            map.data.loadGeoJson('./mitakashi.geojson');
        }
    }
    cl2++;
    if(cl2 %2 == 0){
        if(x==2){//sobo
            for (i = 0;i < mitaka_data.features.length;i++) {
             hanzai[i] = mitaka_data.features[i].properties["mitakasi-3_SOBO"];
            }
            //console.log(hanzai);
        
            for (i = 0;i < mitaka_data.features.length;i++) {                
                    var mydata = mitaka_data.features[i].geometry.coordinates[0][0];
                    //console.log(mydata[0][0]);
                    var arrCoords = new Array();
                    for (j = 0;j < mydata.length;j++) {
                        // 座標地をlatlng値に変換
                        var latlng = new google.maps.LatLng(mydata[j][1], mydata[j][0]);
                       // console.log(latlng);
                        // latlng値を配列に退避
                        arrCoords.push(latlng);
                    };
               if(0==hanzai[i]){
                    var poly = new google.maps.Polygon({
                        map: map,
                        paths: arrCoords,     //閉ループを示す座標列
                        strokeWeight: 5,       //ストローク幅(ピクセル単位)
                        strokeColor: "green",//ストロークの色(16進数形式)
                        fillColor: "green",  //塗りつぶしの色(16進数形式)
                    });
                }else if(1 == hanzai[i]){
                    var poly = new google.maps.Polygon({
                        map: map,
                        paths: arrCoords,     //閉ループを示す座標列
                        strokeWeight: 5,       //ストローク幅(ピクセル単位)
                        strokeColor: "yellow",//ストロークの色(16進数形式)
                        fillColor: "yellow",  //塗りつぶしの色(16進数形式)
                    }); 
                }else if(4>=hanzai[i] && hanzai[i]>=2){
                    var poly = new google.maps.Polygon({
                        map: map,
                        paths: arrCoords,     //閉ループを示す座標列
                        strokeWeight: 5,       //ストローク幅(ピクセル単位)
                        //strokeColor: "#ffff00",//ストロークの色(16進数形式)
                        strokeColor: "orange",
                        //fillColor: "#ffff00",  //塗りつぶしの色(16進数形式)
                        fillColor: "orange",
                    }); 
                }else if(hanzai[i]>=3){
                    var poly = new google.maps.Polygon({
                        map: map,
                        paths: arrCoords,     //閉ループを示す座標列
                        strokeWeight: 5,       //ストローク幅(ピクセル単位)
                        strokeColor: "red",//ストロークの色(16進数形式)
                        fillColor: "red",  //塗りつぶしの色(16進数形式)
                    });
                };
            };
         }else if(x==0){
            map.data.loadGeoJson('./mitakashi.geojson');
        }
    }
    cl3++;
    if(cl3 %2 ==0){
        if(x==3){//shinnyu
            for (i = 0;i < mitaka_data.features.length;i++) {
                hanzai[i] = mitaka_data.features[i].properties["mitakasi-3_SHINNYU"];
            }
            console.log(hanzai);
            for (i = 0;i < mitaka_data.features.length;i++) {                
                var mydata = mitaka_data.features[i].geometry.coordinates[0][0];
                    //console.log(mydata[0][0]);
                var arrCoords = new Array();
                for (j = 0;j < mydata.length;j++) {
                        // 座標地をlatlng値に変換
                        var latlng = new google.maps.LatLng(mydata[j][1], mydata[j][0]);
                       // console.log(latlng);
                        // latlng値を配列に退避
                        arrCoords.push(latlng);
                };
                if(0==hanzai[i]){
                    var poly = new google.maps.Polygon({
                        map: map,
                        paths: arrCoords,     //閉ループを示す座標列
                        strokeWeight: 5,       //ストローク幅(ピクセル単位)
                        strokeColor: "green",//ストロークの色(16進数形式)
                        fillColor: "green",  //塗りつぶしの色(16進数形式)
                    });
                }else if(1 == hanzai[i]){
                    var poly = new google.maps.Polygon({
                        map: map,
                        paths: arrCoords,     //閉ループを示す座標列
                        strokeWeight: 5,       //ストローク幅(ピクセル単位)
                        strokeColor: "yellow",//ストロークの色(16進数形式)
                        fillColor: "yellow",  //塗りつぶしの色(16進数形式)
                    }); 
                }else if(4>=hanzai[i] && hanzai[i]>=2){
                    var poly = new google.maps.Polygon({
                        map: map,
                        paths: arrCoords,     //閉ループを示す座標列
                        strokeWeight: 5,       //ストローク幅(ピクセル単位)
                        //strokeColor: "#ffff00",//ストロークの色(16進数形式)
                        strokeColor: "orange",
                        //fillColor: "#ffff00",  //塗りつぶしの色(16進数形式)
                        fillColor: "orange",
                    }); 
                }else if(hanzai[i]>=3){
                    var poly = new google.maps.Polygon({
                        map: map,
                        paths: arrCoords,     //閉ループを示す座標列
                        strokeWeight: 5,       //ストローク幅(ピクセル単位)
                        strokeColor: "red",//ストロークの色(16進数形式)
                        fillColor: "red",  //塗りつぶしの色(16進数形式)
                    });
                };
            };
           }else if(x==0){
                map.data.loadGeoJson('./mitakashi.geojson');
        }
    };
      cl4++;
    if(cl4 %2 ==0){
    if(x==10){
            map.data.loadGeoJson('./nami.geojson');
        }else if(x==0){
                map.data.loadGeoJson('./sumidaku.geojson');
        }
}
}
function Conveni() {
    c1++;
    if(c1 %2 !== 0){
        for(var i=0;i<place_conveni.length;i++){
            marker = new google.maps.Marker({
                position: {lat: place_conveni[i].lat, lng: place_conveni[i].lng},
                map: map,
                title: place_conveni[i].name,
                icon: {
                    url: './conveni.png',
                    scaledSize: new google.maps.Size(30,28)
                }
            });
            markers1.push(marker);
        }
    }else{
        for (var i = 0; i < markers1.length; i++){
            markers1[i].setMap(null);
        }
    }
}
function Drug() {
    c2++;
    if(c2 %2 !== 0){
        for(var i=0;i<place_drugstore.length;i++){
            marker = new google.maps.Marker({
                position: {lat: place_drugstore[i].lat, lng: place_drugstore[i].lng},
                map: map,
                title: place_drugstore[i].name,
                icon: {
                    url: './drugstore.png',
                    scaledSize: new google.maps.Size(30,30)
                }
            });
            markers2.push(marker);
        }
    }else{
        for(var i=0;i<markers2.length;i++){
            markers2[i].setMap(null);
        }
    }
}
function Super() {
    c3++;
    if(c3 %2 !== 0){
        for(var i=0;i<place_supermarket.length;i++){
            marker = new google.maps.Marker({
                position: {lat: place_supermarket[i].lat, lng: place_supermarket[i].lng},
                map: map,
                title: place_supermarket[i].name,
                icon: {
                    url: './supermarket.png',
                    scaledSize: new google.maps.Size(30,30)
                }
            });
            markers3.push(marker);
        }
    }else{
        for(var i=0;i<markers3.length;i++){
            markers3[i].setMap(null);
        }
    }
}
function Hospital() {
    c4++;
    if(c4 %2 !== 0){
        for(var i=0;i<place_hospital.length;i++){
            marker = new google.maps.Marker({
                position: {lat: place_hospital[i].lat, lng: place_hospital[i].lng},
                map: map,
                title: place_hospital[i].name,
                icon: {
                    url: './hospital.png',
                    scaledSize: new google.maps.Size(30,25)
                }
            });
            markers4.push(marker);
        }
    }else{
        for(var i=0;i<markers4.length;i++){
            markers4[i].setMap(null);
        }
    }
}
function Police() {
    c5++;
    if(c5 %2 !== 0){
        for(var i=0;i<place_police.length;i++){
            marker = new google.maps.Marker({
                position: {lat: place_police[i].lat, lng: place_police[i].lng},
                map: map,
                title: place_police[i].name,
                icon: {
                    url: './police.png',
                    scaledSize: new google.maps.Size(30,30)
                }
            });
            markers5.push(marker);
        }
    }else{
        for(var i=0;i<markers5.length;i++){
            markers5[i].setMap(null);
        }
    }
}
function Post() {
    c6++;
    if(c6 %2 !== 0){
        for(var i=0;i<place_postoffice.length;i++){
            marker = new google.maps.Marker({
                position: {lat: place_postoffice[i].lat, lng: place_postoffice[i].lng},
             map:map,
                title: place_postoffice[i].name,
                icon: {
                    url: './post_office.png',
                    scaledSize: new google.maps.Size(30,25)
                }
            });
            markers6.push(marker);
        }
    }else{
        for(var i=0;i<markers6.length;i++){
            markers6[i].setMap(null);
        }
    }
}
function Hinanjo() {
    c7++;
    if(c7 %2 !== 0){
        for(var i=0;i<place_hinanjo.length;i++){
            marker = new google.maps.Marker({
                position: {lat: place_hinanjo[i].lat, lng: place_hinanjo[i].lng},
                map: map,
                title: place_hinanjo[i].name,
                icon: {
                    url: './hinan2.png',
                    scaledSize: new google.maps.Size(30,25)
                }
            });
            markers7.push(marker);
        }
    }else{
        for(var i=0;i<markers7.length;i++){
            markers7[i].setMap(null);
        }
    }
}


function createMarker(name,latlng,icons,map,ave,marker){
    var infoWindow = new google.maps.InfoWindow({
        content: name+'<br>家賃相場 : '+ave+'円',
    }); //情報ウィンドウ生成
  /*
    var marker = new google.maps.Marker({
        position: latlng,
        icon:{
            url:icons,
            scaledSize : new google.maps.Size(60, 36)},
       　   map: map});//マーカーを作成
           */
    google.maps.event.addListener(marker, 'click', function() {//地図上のmarkerがクリックされると｛｝内の処理を実行
        if (currentWindow) {
            currentWindow.close();
            
    }     
        infoWindow.open(map,marker); //マーカーに情報ウィンドウを表示
        currentWindow = infoWindow;
        map.panTo(latlng); //地図の中心
});
}

function six(){
     c8++;
    if(c8 %2 !== 0){
      for(var i=0;i<markers.length;i++){
        var name = markers[i].name;
        var ave = markers[i].ave;
        var latlng = new google.maps.LatLng(markers[i].lat,markers[i].lng);
         if(ave<70000){
             var icons ='./train1.png';
             var marker = new google.maps.Marker({
        position: latlng,
        icon:{
            url:icons,
            scaledSize : new google.maps.Size(60, 36)},
       　   map: map});
             createMarker(name,latlng,icons,map,ave,marker);
             markers8.push(marker);
         }
};
}else{
        for(var i=0;i<markers8.length;i++){
            markers8[i].setMap(null);
        }
    }
}
    
function seven(){
    c9++;
    if(c9 %2 !==0){
    for(var i=0;i<markers.length;i++){
     var name = markers[i].name;
     var ave = markers[i].ave;
     var latlng = new google.maps.LatLng(markers[i].lat,markers[i].lng);
          if((ave>=70000)&&(ave<80000)){ 
            var icons ='./train2.png';
            var marker = new google.maps.Marker({
            position: latlng,
            icon:{
            url:icons,
            scaledSize : new google.maps.Size(60, 36)},
       　   map: map});
            createMarker(name,latlng,icons,map,ave,marker);
            markers9.push(marker);
        }else{
            var icons ='./train3.png';
        };
    }
}else{
        for(var i=0;i<markers9.length;i++){
            markers9[i].setMap(null);
        }
    }
}
function all2(){
    c9++;
    if(c9 %2 !==0){
     for(var i=0;i<markers.length;i++){
     var name = markers[i].name;
     var ave = markers[i].ave;
     var latlng = new google.maps.LatLng(markers[i].lat,markers[i].lng);
          if(ave<70000){
            var icons ='./train1.png';
              var marker = new google.maps.Marker({
            position: latlng,
            icon:{
            url:icons,
            scaledSize : new google.maps.Size(60, 36)},
       　   map: map});
              createMarker(name,latlng,icons,map,ave,marker);
              markers10.push(marker);
        }else if(ave<80000){
            var icons ='./train2.png';
            var marker = new google.maps.Marker({
            position: latlng,
            icon:{
            url:icons,
            scaledSize : new google.maps.Size(60, 36)},
       　   map: map});
            createMarker(name,latlng,icons,map,ave,marker);
            markers10.push(marker);
        }else if(ave<90000){
            var icons ='./train3.png';
            var marker = new google.maps.Marker({
            position: latlng,
            icon:{
            url:icons,
            scaledSize : new google.maps.Size(60, 36)},
       　   map: map});
            createMarker(name,latlng,icons,map,ave,marker);
            markers10.push(marker);
        }else {
            var icons ='./train4.png';
            var marker = new google.maps.Marker({
            position: latlng,
            icon:{
            url:icons,
            scaledSize : new google.maps.Size(60, 36)},
       　   map: map});
            createMarker(name,latlng,icons,map,ave,marker);
            markers10.push(marker);
        }
};
    }else{
        for(var i=0;i<markers10.length;i++){
            markers10[i].setMap(null);
        }
    }
}
