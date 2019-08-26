const express = require('express');
const bodyParser = require('body-parser');
const cheerio = require('cheerio');
const request = require('request');
const path = require('path')
const js2xmlparser = require('js2xmlparser');
const fs = require('fs');
var port = process.env.PORT || 8080;


const app = express();

var col0 = 0 , col1 = 1,col2 = 2,col3 = 3,col4 = 4,col5 = 6,col6 = 7,col7 = 8,col8 = 9,col9 = 10 ,col10 = 11 , col11 = 12,col12 = 13,col13 = 14,col14 = 15 , col15 = 16,col16 = 17,col17 = 18,col18 = 19,col19 = 20 ,col20 = 21 , col21 = 22,col22 = 23 ;
app.use(express.static(path.resolve('src')));

app.use(bodyParser.json());
app.use(express.urlencoded({
    extended: true
}))

// app.get('/roundtrip.xml',function(req,res){
//     res.sendfile('../roundtrip.xml')
// })
app.get('/',function (req,res) {
    res.sendfile('src/index.html'); 
});
app.get('/indexxxxxx.html' , function (req , res) {
    res.sendfile('src/index.html');
});
app.all('/result', function (req, res) {
    var data_table = [];
    var startc = 28;
    var time = 27;
    var stand = 29;
    var pricec = 31;
    // const startprovice = JSON.stringify(req.body.startprovice);
    // fs.unlink('./src/roundtrip.xml', function (err) {
    //     if (err) throw err;
    //          console.log('File deleted!');
    //     });
    for(var g = 0 ; g<=data_table.length; ){
            data_table.pop();
            g++
        }  
    const startprovice = req.body.departcity;
    const endprovice = req.body.arrivecity;
    
    GetTable(startprovice, endprovice);
    

    function GetTable(startprovice, endprovice) {
        console.log(startprovice,endprovice)

        if(startprovice == "กรุงเทพมหานคร" && endprovice =="เชียงใหม่"){
            url = ('https://www.sombattour.com/th/schedule/%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF-%E0%B9%80%E0%B8%8A%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88');
            url2 = ('https://www2.nakhonchaiair.com/view/busroute-%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF-4-%E0%B9%80%E0%B8%8A%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88');
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF%20(%E0%B8%AB%E0%B8%A1%E0%B8%AD%E0%B8%8A%E0%B8%B4%E0%B8%95%202)/%E0%B9%80%E0%B8%8A%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B9%80%E0%B8%8A%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88%20(%E0%B8%81%E0%B8%A3%E0%B8%A1%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87)')
            totalrow = 10
            GetBKS_All();
            totaltable = 13; 
            skip = 6;
            Gprice = 617;
            Fprice = 823;
            endtable = 4;
            j = 9 ;
            GettableNakorn2();
            Column5();
        }else if (startprovice == "เชียงใหม่" && endprovice == "กรุงเทพมหานคร") {
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B9%80%E0%B8%8A%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B9%80%E0%B8%8A%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88%20(%E0%B8%81%E0%B8%A3%E0%B8%A1%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87)/%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF%20(%E0%B8%AB%E0%B8%A1%E0%B8%AD%E0%B8%8A%E0%B8%B4%E0%B8%95%202)')
            totalrow = 10;
            GetBKS_All();
        }else if (startprovice == "กรุงเทพมหานคร" && endprovice =="ภูเก็ต"){
            url = ('https://www.sombattour.com/th/schedule/%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF-%E0%B8%A0%E0%B8%B9%E0%B9%80%E0%B8%81%E0%B9%87%E0%B8%95');
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF%20(%E0%B8%AB%E0%B8%A1%E0%B8%AD%E0%B8%8A%E0%B8%B4%E0%B8%95%202)/%E0%B8%A0%E0%B8%B9%E0%B9%80%E0%B8%81%E0%B9%87%E0%B8%95/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%A0%E0%B8%B9%E0%B9%80%E0%B8%81%E0%B9%87%E0%B8%95')
            totalrow = 2
            j = 4;
            GetBKS_All();
            Column5();
        }else if (startprovice == "กรุงเทพมหานคร" && endprovice =="ระนอง"){
            url = ('https://www.sombattour.com/th/schedule/%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF-%E0%B8%A3%E0%B8%B0%E0%B8%99%E0%B8%AD%E0%B8%87');
            url3 =('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF%20(%E0%B8%96%E0%B8%99%E0%B8%99%E0%B8%9A%E0%B8%A3%E0%B8%A1%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%8A%E0%B8%99%E0%B8%99%E0%B8%B5)/%E0%B8%A3%E0%B8%B0%E0%B8%99%E0%B8%AD%E0%B8%87/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%A3%E0%B8%B0%E0%B8%99%E0%B8%AD%E0%B8%87')
            totalrow = 1
            GetBKS_All();
            j = 3 ; 
            Column5();
        }else if (startprovice == "กรุงเทพมหานคร" && endprovice =="ลำปาง"){
            url = ('https://www.sombattour.com/th/schedule/%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF-%E0%B8%A5%E0%B8%B3%E0%B8%9B%E0%B8%B2%E0%B8%87');
            url2=('https://www2.nakhonchaiair.com/view/busroute-%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF-5-%E0%B8%A5%E0%B8%B3%E0%B8%9B%E0%B8%B2%E0%B8%87');
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF%20(%E0%B8%AB%E0%B8%A1%E0%B8%AD%E0%B8%8A%E0%B8%B4%E0%B8%95%202)/%E0%B8%A5%E0%B8%B3%E0%B8%9B%E0%B8%B2%E0%B8%87/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%A5%E0%B8%B3%E0%B8%9B%E0%B8%B2%E0%B8%87')
            totalrow = 8
            totaltable = 4 
            GetBKS_All();
            endtable = 10; 
            Fprice = 711; 
            Gprice = 711; 
            GettableNakorn3();
            j = 2;
            Column5();
        }else if (startprovice == "กรุงเทพมหานคร" && endprovice =="แม่ฮ่องสอน"){
            url = ('https://www.sombattour.com/th/schedule/%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF-%E0%B9%81%E0%B8%A1%E0%B9%88%E0%B8%AE%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B8%AA%E0%B8%AD%E0%B8%99');
            j = 2;
            Column5();
        }else if (startprovice == "เชียงใหม่" && endprovice =="หัวหิน"){
            url = ('https://www.sombattour.com/th/schedule/%E0%B9%80%E0%B8%8A%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88-%E0%B8%AB%E0%B8%B1%E0%B8%A7%E0%B8%AB%E0%B8%B4%E0%B8%99');
            j = 2;
            Column4();
        }else if (startprovice == "กรุงเทพมหานคร" && endprovice =="พะเยา"){
            url = ('https://www.sombattour.com/th/schedule/%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF-%E0%B8%9E%E0%B8%B0%E0%B9%80%E0%B8%A2%E0%B8%B2');
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF%20(%E0%B8%AB%E0%B8%A1%E0%B8%AD%E0%B8%8A%E0%B8%B4%E0%B8%95%202)/%E0%B8%9E%E0%B8%B0%E0%B9%80%E0%B8%A2%E0%B8%B2/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%9E%E0%B8%B0%E0%B9%80%E0%B8%A2%E0%B8%B2')
            j = 3;
            Column5();
            GetBKS4();
        }else if (startprovice == "กรุงเทพมหานคร" && endprovice =="หัวหิน"){
            url = ('https://www.sombattour.com/th/schedule/%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF-%E0%B8%AB%E0%B8%B1%E0%B8%A7%E0%B8%AB%E0%B8%B4%E0%B8%99');
            j = 2;
            Column4();
        }else if (startprovice == "เชียงใหม่" && endprovice =="ขอนแก่น"){
            url = ('https://www.sombattour.com/th/schedule/%E0%B9%80%E0%B8%8A%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88-%E0%B8%82%E0%B8%AD%E0%B8%99%E0%B9%81%E0%B8%81%E0%B9%88%E0%B8%99');
            j = 2;
            Column4();
        }else if (startprovice == "กรุงเทพมหานคร" && endprovice =="เชียงของ"){
            url = ('https://www.sombattour.com/th/schedule/%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF-%E0%B9%80%E0%B8%8A%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B8%82%E0%B8%AD%E0%B8%87');
            j = 2;
            Column5();
        }else if (startprovice == "เชียงราย" && endprovice =="ขอนแก่น"){
            url = ('https://www.sombattour.com/th/schedule/%E0%B9%80%E0%B8%8A%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B8%A3%E0%B8%B2%E0%B8%A2-%E0%B8%82%E0%B8%AD%E0%B8%99%E0%B9%81%E0%B8%81%E0%B9%88%E0%B8%99');
            j = 2; 
            Column4();
        }else if (startprovice == "กรุงเทพมหานคร" && endprovice=="เชียงราย"){
            url2 = ('https://www2.nakhonchaiair.com/view/busroute-%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF-3-%E0%B9%80%E0%B8%8A%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B8%A3%E0%B8%B2%E0%B8%A2');
            url = ('https://www.sombattour.com/th/schedule/%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF-%E0%B9%80%E0%B8%8A%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B8%A3%E0%B8%B2%E0%B8%A2');
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF%20(%E0%B8%A3%E0%B8%B1%E0%B8%87%E0%B8%AA%E0%B8%B4%E0%B8%95)/%E0%B9%80%E0%B8%8A%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B8%A3%E0%B8%B2%E0%B8%A2/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B9%80%E0%B8%8A%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B8%A3%E0%B8%B2%E0%B8%A2');
            j = 13;
            totaltable = 4; 
            skip = 5;
            Gprice = 725; 
            Fprice = 725;
            endtable = 3;
                GetBKS4();
                GettableNakorn2();
                Column5();
        }else if (startprovice == "เชียงราย" && endprovice =="นครพนม"){
            url = ('https://www.sombattour.com/th/schedule/%E0%B9%80%E0%B8%8A%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B8%A3%E0%B8%B2%E0%B8%A2-%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%9E%E0%B8%99%E0%B8%A1');
            
            j = 3; 

            Column4();
        }else if (startprovice == "กรุงเทพมหานคร" && endprovice =="แม่สาย"){
            url = ('https://www.sombattour.com/th/schedule/%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF-%E0%B9%81%E0%B8%A1%E0%B9%88%E0%B8%AA%E0%B8%B2%E0%B8%A2');
            j =2 ;
            Column5();
        }else if (startprovice == "ภูเก็ต" && endprovice =="ขอนแก่น"){
            url = ('https://www.sombattour.com/th/schedule/%E0%B8%A0%E0%B8%B9%E0%B9%80%E0%B8%81%E0%B9%87%E0%B8%95-%E0%B8%82%E0%B8%AD%E0%B8%99%E0%B9%81%E0%B8%81%E0%B9%88%E0%B8%99');
            j = 2; 
            Column4();
        }else if (startprovice == "กรุงเทพมหานคร" && endprovice =="เชียงแสน"){
            url = ('https://www.sombattour.com/th/schedule/%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF-%E0%B9%80%E0%B8%8A%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B9%81%E0%B8%AA%E0%B8%99');
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF%20(%E0%B8%A3%E0%B8%B1%E0%B8%87%E0%B8%AA%E0%B8%B4%E0%B8%95)/%E0%B9%80%E0%B8%8A%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B8%A3%E0%B8%B2%E0%B8%A2/%E0%B9%80%E0%B8%8A%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B9%81%E0%B8%AA%E0%B8%99');
            j = 2 ;
            GetBKS();
            Column5();
        }else if (startprovice == "กรุงเทพมหานคร" && endprovice =="แพร่"){
            url =('https://www.sombattour.com/th/schedule/%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF-%E0%B9%81%E0%B8%9E%E0%B8%A3%E0%B9%88');
            url2 = ('https://www2.nakhonchaiair.com/view/busroute-%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF-6-%E0%B9%81%E0%B8%9E%E0%B8%A3%E0%B9%88');
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF%20(%E0%B8%AB%E0%B8%A1%E0%B8%AD%E0%B8%8A%E0%B8%B4%E0%B8%95%202)/%E0%B9%81%E0%B8%9E%E0%B8%A3%E0%B9%88/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B9%81%E0%B8%9E%E0%B8%A3%E0%B9%88')
            totalrow = 5
            GetBKS_All()
            totaltable = 4
            endtable = 9; 
            Fprice = 487; 
            Gprice = 487; 
            GettableNakorn3();
            j = 2 ;
            Column5();
        }else if (startprovice == "กรุงเทพมหานคร" && endprovice =="น่าน"){
            url = ('https://www.sombattour.com/th/schedule/%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF-%E0%B8%99%E0%B9%88%E0%B8%B2%E0%B8%99');
            url2 = ('https://www2.nakhonchaiair.com/view/busroute-%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF-2-%E0%B8%99%E0%B9%88%E0%B8%B2%E0%B8%99');
            url3 =('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF%20(%E0%B8%AB%E0%B8%A1%E0%B8%AD%E0%B8%8A%E0%B8%B4%E0%B8%95%202)/%E0%B8%99%E0%B9%88%E0%B8%B2%E0%B8%99/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%99%E0%B9%88%E0%B8%B2%E0%B8%99')
            totalrow = 2 
            j =2 ; 
            totaltable = 4;
            skip = 5; 
            endtable = 3;
            Fprice = 592;
            Gprice = 592;
            GetBKS_All();
            GettableNakorn2();
            Column5();
        }else if (startprovice == "กรุงเทพมหานคร" && endprovice =="ทุ่งช้าง"){
            url = ('https://www.sombattour.com/th/schedule/%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF-%E0%B8%97%E0%B8%B8%E0%B9%88%E0%B8%87%E0%B8%8A%E0%B9%89%E0%B8%B2%E0%B8%87');
            j =3 ;
            Column5();
        }else if (startprovice == "กรุงเทพมหานคร" && endprovice =="ขอนแก่น"){
            url = ('https://www.sombattour.com/th/schedule/%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF-%E0%B8%82%E0%B8%AD%E0%B8%99%E0%B9%81%E0%B8%81%E0%B9%88%E0%B8%99');
            url2 = ('https://www2.nakhonchaiair.com/view/busroute-%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF-1-%E0%B8%82%E0%B8%AD%E0%B8%99%E0%B9%81%E0%B8%81%E0%B9%88%E0%B8%99');
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF%20(%E0%B8%AB%E0%B8%A1%E0%B8%AD%E0%B8%8A%E0%B8%B4%E0%B8%95%202)/%E0%B8%82%E0%B8%AD%E0%B8%99%E0%B9%81%E0%B8%81%E0%B9%88%E0%B8%99/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%82%E0%B8%AD%E0%B8%99%E0%B9%81%E0%B8%81%E0%B9%88%E0%B8%99')
            totalrow = 1 
            j =2 ;
            totaltable = 36;
            skip = 6;
            Gprice = 397;
            Fprice = 529;
            endtable = 4;
            GetBKS_All();
            Column5();
            GettableNakorn();
        }else if (startprovice == "กรุงเทพมหานคร" && endprovice =="สุรินทร์"){
            url = ('https://www.sombattour.com/th/schedule/%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF-%E0%B8%AA%E0%B8%B8%E0%B8%A3%E0%B8%B4%E0%B8%99%E0%B8%97%E0%B8%A3%E0%B9%8C');
            url2 = ('https://www2.nakhonchaiair.com/view/busroute-%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF-11-%E0%B8%AA%E0%B8%B8%E0%B8%A3%E0%B8%B4%E0%B8%99%E0%B8%97%E0%B8%A3%E0%B9%8C');
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF%20(%E0%B8%AB%E0%B8%A1%E0%B8%AD%E0%B8%8A%E0%B8%B4%E0%B8%95%202)/%E0%B8%AA%E0%B8%B8%E0%B8%A3%E0%B8%B4%E0%B8%99%E0%B8%97%E0%B8%A3%E0%B9%8C/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%AA%E0%B8%B8%E0%B8%A3%E0%B8%B4%E0%B8%99%E0%B8%97%E0%B8%A3%E0%B9%8C')
            totalrow = 8
            GetBKS_All();
            totaltable = 12 ;
            endtable = 4;
            skip = 5;
            Gprice = 384;
            Fprice = 384;
            GettableNakorn2();
            j =3 ;
            Column5();
        }else if (startprovice == "กรุงเทพมหานคร" && endprovice =="ศรีสะเกษ") {
            url = ('https://www.sombattour.com/th/schedule/%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF-%E0%B8%A8%E0%B8%A3%E0%B8%B5%E0%B8%AA%E0%B8%B0%E0%B9%80%E0%B8%81%E0%B8%A9');
            url2 = ('https://www2.nakhonchaiair.com/view/busroute-%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF-10-%E0%B8%A8%E0%B8%A3%E0%B8%B5%E0%B8%AA%E0%B8%B0%E0%B9%80%E0%B8%81%E0%B8%A9');
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF%20(%E0%B8%AB%E0%B8%A1%E0%B8%AD%E0%B8%8A%E0%B8%B4%E0%B8%95%202)/%E0%B8%A8%E0%B8%A3%E0%B8%B5%E0%B8%AA%E0%B8%B0%E0%B9%80%E0%B8%81%E0%B8%A9/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%A8%E0%B8%A3%E0%B8%B5%E0%B8%AA%E0%B8%B0%E0%B9%80%E0%B8%81%E0%B8%A9')
            totalrow = 3
            GetBKS_All();
            totaltable = 10;
            skip = 6 ;
            endtable = 4;
            Gprice = 481;
            Fprice = 641;
            GettableNakorn4();
            j = 2 ; 
            Column5();
        }else if (startprovice == "กรุงเทพมหานคร" && endprovice =="มุกดาหาร") {
            url = ('https://www.sombattour.com/th/schedule/%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF-%E0%B8%A1%E0%B8%B8%E0%B8%81%E0%B8%94%E0%B8%B2%E0%B8%AB%E0%B8%B2%E0%B8%A3');
            url2 = ('https://www2.nakhonchaiair.com/view/busroute-%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF-23-%E0%B8%A1%E0%B8%B8%E0%B8%81%E0%B8%94%E0%B8%B2%E0%B8%AB%E0%B8%B2%E0%B8%A3');
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF%20(%E0%B8%AB%E0%B8%A1%E0%B8%AD%E0%B8%8A%E0%B8%B4%E0%B8%95%202)/%E0%B8%A1%E0%B8%B8%E0%B8%81%E0%B8%94%E0%B8%B2%E0%B8%AB%E0%B8%B2%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%A1%E0%B8%B8%E0%B8%81%E0%B8%94%E0%B8%B2%E0%B8%AB%E0%B8%B2%E0%B8%A3')
            totalrow = 6
            totaltable = 5 ;
            skip =5 ;
            endtable = 3;
            Gprice =584;
            Fprice = 584;
            GetBKS_All();
            GettableNakorn6();
            j = 2; 
            Column5();
        }else if (startprovice == "กรุงเทพมหานคร" && endprovice =="ศรีเชียงใหม่") {
            url = ('https://www.sombattour.com/th/schedule/%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF-%E0%B8%A8%E0%B8%A3%E0%B8%B5%E0%B9%80%E0%B8%8A%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88');
            j = 3;
            Column5();
        }else if (startprovice == "กรุงเทพมหานคร" && endprovice =="บุณฑริก"){
            url = ('https://www.sombattour.com/th/schedule/%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF-%E0%B8%9A%E0%B8%B8%E0%B8%93%E0%B8%91%E0%B8%A3%E0%B8%B4%E0%B8%81');
            j = 2; 
            Column5();
        }else if (startprovice == "กรุงเทพมหานคร" && endprovice =="อุบลราชธานี"){
            url = ('https://www.sombattour.com/th/schedule/%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF-%E0%B8%AD%E0%B8%B8%E0%B8%9A%E0%B8%A5%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%98%E0%B8%B2%E0%B8%99%E0%B8%B5');
            url2 = ('https://www2.nakhonchaiair.com/view/busroute-%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF-8-%E0%B8%AD%E0%B8%B8%E0%B8%9A%E0%B8%A5%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%98%E0%B8%B2%E0%B8%99%E0%B8%B5');
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF%20(%E0%B8%AB%E0%B8%A1%E0%B8%AD%E0%B8%8A%E0%B8%B4%E0%B8%95%202)/%E0%B8%AD%E0%B8%B8%E0%B8%9A%E0%B8%A5%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%98%E0%B8%B2%E0%B8%99%E0%B8%B5/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%AD%E0%B8%B8%E0%B8%9A%E0%B8%A5%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%98%E0%B8%B2%E0%B8%99%E0%B8%B5');
            totalrow = 3
            GetBKS_All();
            totaltable = 14;
            skip = 6;
            endtable = 4; 
            Fprice = 753; 
            Gprice = 565; 
            GettableNakorn2();
            j=2;
            Column5();
        }else if (startprovice == "กรุงเทพมหานคร" && endprovice =="สุราษฎร์ธานี"){
            url = ('https://www.sombattour.com/th/schedule/%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF-%E0%B8%AA%E0%B8%B8%E0%B8%A3%E0%B8%B2%E0%B8%A9%E0%B8%8E%E0%B8%A3%E0%B9%8C%E0%B8%98%E0%B8%B2%E0%B8%99%E0%B8%B5');
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF%20(%E0%B8%AB%E0%B8%A1%E0%B8%AD%E0%B8%8A%E0%B8%B4%E0%B8%95%202)/%E0%B8%AA%E0%B8%B8%E0%B8%A3%E0%B8%B2%E0%B8%A9%E0%B8%8E%E0%B8%A3%E0%B9%8C%E0%B8%98%E0%B8%B2%E0%B8%99%E0%B8%B5/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%AA%E0%B8%B8%E0%B8%A3%E0%B8%B2%E0%B8%A9%E0%B8%8E%E0%B8%A3%E0%B9%8C%E0%B8%98%E0%B8%B2%E0%B8%99%E0%B8%B5')
            totalrow = 3
            GetBKS_All();
            j = 3 ;
            Column5();
        }else if (startprovice == "กรุงเทพมหานคร" && endprovice =="เกาะสมุย"){
            url = ('https://www.sombattour.com/th/schedule/%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF-%E0%B9%80%E0%B8%81%E0%B8%B2%E0%B8%B0%E0%B8%AA%E0%B8%A1%E0%B8%B8%E0%B8%A2');
            j =3;
            Column4();
        }else if (startprovice == "กรุงเทพมหานคร" && endprovice =="อุตรดิตถ์"){
            url2 = ('https://www2.nakhonchaiair.com/view/busroute-%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF-7-%E0%B8%AD%E0%B8%B8%E0%B8%95%E0%B8%A3%E0%B8%94%E0%B8%B4%E0%B8%95%E0%B8%96%E0%B9%8C');
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF%20(%E0%B8%AB%E0%B8%A1%E0%B8%AD%E0%B8%8A%E0%B8%B4%E0%B8%95%202)/%E0%B8%AD%E0%B8%B8%E0%B8%95%E0%B8%A3%E0%B8%94%E0%B8%B4%E0%B8%95%E0%B8%96%E0%B9%8C/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%AD%E0%B8%B8%E0%B8%95%E0%B8%A3%E0%B8%94%E0%B8%B4%E0%B8%95%E0%B8%96%E0%B9%8C')
            totalrow = 4
            GetBKS_All();
            totaltable = 7
            endtable = 13; 
            Fprice = 422; 
            Gprice = 422; 
            GettableNakorn3();
        }else if (startprovice == "กรุงเทพมหานคร" && endprovice =="บุรีรัมย์"){
            url2 = ('https://www2.nakhonchaiair.com/view/busroute-%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF-12-%E0%B8%9A%E0%B8%B8%E0%B8%A3%E0%B8%B5%E0%B8%A3%E0%B8%B1%E0%B8%A1%E0%B8%A2%E0%B9%8C');
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF%20(%E0%B8%AB%E0%B8%A1%E0%B8%AD%E0%B8%8A%E0%B8%B4%E0%B8%95%202)/%E0%B8%9A%E0%B8%B8%E0%B8%A3%E0%B8%B5%E0%B8%A3%E0%B8%B1%E0%B8%A1%E0%B8%A2%E0%B9%8C/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%9A%E0%B8%B8%E0%B8%A3%E0%B8%B5%E0%B8%A3%E0%B8%B1%E0%B8%A1%E0%B8%A2%E0%B9%8C')
            totaltable = 15; 
            skip = 6; 
            endtable = 4;
            Fprice = 468;
            Gprice = 351;
            GettableNakorn5();
            GetBKS5();
        }else if (startprovice == "กรุงเทพมหานคร" && endprovice =="หนองคาย"){
            url2 = ('https://www2.nakhonchaiair.com/view/busroute-%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF-13-%E0%B8%AB%E0%B8%99%E0%B8%AD%E0%B8%87%E0%B8%84%E0%B8%B2%E0%B8%A2');
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF%20(%E0%B8%AB%E0%B8%A1%E0%B8%AD%E0%B8%8A%E0%B8%B4%E0%B8%95%202)/%E0%B8%AB%E0%B8%99%E0%B8%AD%E0%B8%87%E0%B8%84%E0%B8%B2%E0%B8%A2/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%AB%E0%B8%99%E0%B8%AD%E0%B8%87%E0%B8%84%E0%B8%B2%E0%B8%A2')
            totalrow = 2
            GetBKS_All()
            totaltable =5 ;
            skip = 6;
            endtable = 4;
            Gprice = 536;
            Fprice = 714;
            GettableNakorn2();
        }else if (startprovice == "กรุงเทพมหานคร" && endprovice =="อุดรธานี"){
            url2 = ('https://www2.nakhonchaiair.com/view/busroute-%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF-14-%E0%B8%AD%E0%B8%B8%E0%B8%94%E0%B8%A3%E0%B8%98%E0%B8%B2%E0%B8%99%E0%B8%B5');
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF%20(%E0%B8%AB%E0%B8%A1%E0%B8%AD%E0%B8%8A%E0%B8%B4%E0%B8%95%202)/%E0%B8%AD%E0%B8%B8%E0%B8%94%E0%B8%A3%E0%B8%98%E0%B8%B2%E0%B8%99%E0%B8%B5/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%AD%E0%B8%B8%E0%B8%94%E0%B8%A3%E0%B8%98%E0%B8%B2%E0%B8%99%E0%B8%B5')
            totalrow =2
            GetBKS_All();
            totaltable = 9 ; 
            skip = 6;
            endtable = 4; 
            Gprice = 494;
            Fprice = 658;
            GettableNakorn2();
        }else if (startprovice == "กรุงเทพมหานคร" && endprovice =="มหาสารคาม") {
            url2= ('https://www2.nakhonchaiair.com/view/busroute-%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF-15-%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%84%E0%B8%B2%E0%B8%A1');
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF%20(%E0%B8%AB%E0%B8%A1%E0%B8%AD%E0%B8%8A%E0%B8%B4%E0%B8%95%202)/%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%84%E0%B8%B2%E0%B8%A1/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%84%E0%B8%B2%E0%B8%A1')
            totalrow = 3
            totaltable =4 ;
            skip = 5 ;
            endtable = 3;
            Gprice = 418;
            Fprice = 418;
            GetBKS_All(); 
            GettableNakorn4();
        }else if (startprovice == "กรุงเทพมหานคร" && endprovice =="หนองบัวลำภู") {
            url2 = ('https://www2.nakhonchaiair.com/view/busroute-%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF-16-%E0%B8%AB%E0%B8%99%E0%B8%AD%E0%B8%87%E0%B8%9A%E0%B8%B1%E0%B8%A7%E0%B8%A5%E0%B8%B3%E0%B8%A0%E0%B8%B9');
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF%20(%E0%B8%AB%E0%B8%A1%E0%B8%AD%E0%B8%8A%E0%B8%B4%E0%B8%95%202)/%E0%B8%AB%E0%B8%99%E0%B8%AD%E0%B8%87%E0%B8%9A%E0%B8%B1%E0%B8%A7%E0%B8%A5%E0%B8%B3%E0%B8%A0%E0%B8%B9/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%AB%E0%B8%99%E0%B8%AD%E0%B8%87%E0%B8%9A%E0%B8%B1%E0%B8%A7%E0%B8%A5%E0%B8%B3%E0%B8%A0%E0%B8%B9')
            totalrow = 5
            GetBKS_All()
            totaltable = 4;
            skip = 5 ; 
            endtable = 3;
            Gprice = 473;
            Fprice = 473;
            GettableNakorn6();
        }else if (startprovice == "กรุงเทพมหานคร" && endprovice =="นครพนม"){
            url2=('https://www2.nakhonchaiair.com/view/busroute-%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF-17-%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%9E%E0%B8%99%E0%B8%A1');
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF%20(%E0%B8%AB%E0%B8%A1%E0%B8%AD%E0%B8%8A%E0%B8%B4%E0%B8%95%202)/%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%9E%E0%B8%99%E0%B8%A1/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%9E%E0%B8%99%E0%B8%A1')
            totalrow = 5
            totaltable = 5 ;
            skip = 5;
            endtable = 3;
            Fprice = 630;
            Gprice = 630;
            GetBKS_All();
            GettableNakorn7();
        }else if(startprovice == "กรุงเทพมหานคร" && endprovice =="สกลนคร"){
            url2=('https://www2.nakhonchaiair.com/view/busroute-%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF-20-%E0%B8%AA%E0%B8%81%E0%B8%A5%E0%B8%99%E0%B8%84%E0%B8%A3');
            url3=('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF%20(%E0%B8%AB%E0%B8%A1%E0%B8%AD%E0%B8%8A%E0%B8%B4%E0%B8%95%202)/%E0%B8%AA%E0%B8%81%E0%B8%A5%E0%B8%99%E0%B8%84%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%AA%E0%B8%81%E0%B8%A5%E0%B8%99%E0%B8%84%E0%B8%A3')
            totalrow = 8
            GetBKS_All();
            totaltable = 5;
            skip = 5 ;
            endtable = 3;
            Gprice = 522;
            Fprice = 522;
            GettableNakorn8();
        }else if (startprovice == "กรุงเทพมหานคร" && endprovice =="กาฬสินธุ์"){
            url2 =('https://www2.nakhonchaiair.com/view/busroute-%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF-21-%E0%B8%81%E0%B8%B2%E0%B8%AC%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B8%98%E0%B8%B8%E0%B9%8C');
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF%20(%E0%B8%AB%E0%B8%A1%E0%B8%AD%E0%B8%8A%E0%B8%B4%E0%B8%95%202)/%E0%B8%81%E0%B8%B2%E0%B8%AC%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B8%98%E0%B8%B8%E0%B9%8C/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%81%E0%B8%B2%E0%B8%AC%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B8%98%E0%B8%B8%E0%B9%8C')
            totalrow = 3
            totaltable = 10;
            skip = 5 ;
            endtable = 4;
            Gprice = 454;
            Fprice = 454;
            GetBKS_All();
            GettableNakorn6();
        }else if (startprovice == "กรุงเทพมหานคร" && endprovice =="ร้อยเอ็ด"){
            url2 = ('https://www2.nakhonchaiair.com/view/busroute-%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF-24-%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%A2%E0%B9%80%E0%B8%AD%E0%B9%87%E0%B8%94');
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF%20(%E0%B8%AB%E0%B8%A1%E0%B8%AD%E0%B8%8A%E0%B8%B4%E0%B8%95%202)/%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%A2%E0%B9%80%E0%B8%AD%E0%B9%87%E0%B8%94/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%A2%E0%B9%80%E0%B8%AD%E0%B9%87%E0%B8%94')
            totalrow = 1
            totaltable = 6 ; 
            skip = 5 ;
            endtable = 3 ; 
            Fprice = 452;
            Gprice = 452;
            GetBKS_All()
            GettableNakorn2();
        }else if (startprovice == "กรุงเทพมหานคร" && endprovice =="ยโสธร"){
            url2 = ('https://www2.nakhonchaiair.com/view/busroute-%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF-95-%E0%B8%A2%E0%B9%82%E0%B8%AA%E0%B8%98%E0%B8%A3,%20%E0%B8%AD%E0%B8%B3%E0%B8%99%E0%B8%B2%E0%B8%88%E0%B9%80%E0%B8%88%E0%B8%A3%E0%B8%B4%E0%B8%8D');
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF%20(%E0%B8%AB%E0%B8%A1%E0%B8%AD%E0%B8%8A%E0%B8%B4%E0%B8%95%202)/%E0%B8%A2%E0%B9%82%E0%B8%AA%E0%B8%98%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%A2%E0%B9%82%E0%B8%AA%E0%B8%98%E0%B8%A3')
            totalrow = 6
            totaltable = 4;
            skip = 5 ; 
            endtable = 4 ; 
            Gprice = 506;
            Fprice = 506;
            GetBKS_All();
            GettableNakorn9();
        }else if (startprovice == "อุบลราชธานี" && endprovice =="เชียงใหม่"){
            url2 = ('https://www2.nakhonchaiair.com/view/busroute-%E0%B8%AD%E0%B8%B8%E0%B8%9A%E0%B8%A5%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%98%E0%B8%B2%E0%B8%99%E0%B8%B5-25-%E0%B9%80%E0%B8%8A%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88');
            totaltable = 4 ;
            skip = 5 ; 
            endtable = 4 ;
            Gprice = 855;
            Fprice = 767;
            GettableNakorn10();
        }else if (startprovice == "อุบลราชธานี" && endprovice =="เชียงราย"){
            url2 = ('https://www2.nakhonchaiair.com/view/busroute-%E0%B8%AD%E0%B8%B8%E0%B8%9A%E0%B8%A5%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%98%E0%B8%B2%E0%B8%99%E0%B8%B5-27-%E0%B9%80%E0%B8%8A%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B8%A3%E0%B8%B2%E0%B8%A2');
            totaltable = 3;
            skip = 5;
            endtable = 4 ;
            Gprice = 949;
            Fprice = 949;
            GettableNakorn11();
        }else if(startprovice == "กรุงเทพมหานคร" && endprovice == "กระบี่"){
            url3 =('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF%20(%E0%B8%AB%E0%B8%A1%E0%B8%AD%E0%B8%8A%E0%B8%B4%E0%B8%95%202)/%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%B5%E0%B9%88/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%B5%E0%B9%88');
            GetBKS();
        }else if(startprovice == "กระบี่" && endprovice == "กรุงเทพมหานคร"){
            url3= ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%B5%E0%B9%88/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%B5%E0%B9%88/%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF%20(%E0%B8%AB%E0%B8%A1%E0%B8%AD%E0%B8%8A%E0%B8%B4%E0%B8%95%202');
            totalrow = 1;
            GetBKS_All();
        }else if(startprovice == "กระบี่" && endprovice == "ชุมพร"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%B5%E0%B9%88/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%B5%E0%B9%88/%E0%B8%8A%E0%B8%B8%E0%B8%A1%E0%B8%9E%E0%B8%A3/%E0%B8%88%E0%B8%B8%E0%B8%94%E0%B8%88%E0%B8%AD%E0%B8%94%E0%B8%9A%E0%B8%82%E0%B8%AA.%E0%B8%97%E0%B9%88%E0%B8%B2%E0%B9%81%E0%B8%8B%E0%B8%B0');
            totalrow = 2;
            GetBKS_All();
        }else if(startprovice == "กระบี่" && endprovice == "นครศรีธรรมราช"){
            url3 =('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%B5%E0%B9%88/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%B5%E0%B9%88/%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%A8%E0%B8%A3%E0%B8%B5%E0%B8%98%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%A3%E0%B8%B2%E0%B8%8A/%E0%B8%88%E0%B8%B8%E0%B8%94%E0%B8%88%E0%B8%AD%E0%B8%94%20%E0%B8%AD.%E0%B8%97%E0%B8%B8%E0%B9%88%E0%B8%87%E0%B9%83%E0%B8%AB%E0%B8%8D%E0%B9%88');
            totalrow = 2;
            GetBKS_All();
        }else if(startprovice == "กระบี่" && endprovice == "ประจวบคีรีขันธ์"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%B5%E0%B9%88/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%B5%E0%B9%88/%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%88%E0%B8%A7%E0%B8%9A%E0%B8%84%E0%B8%B5%E0%B8%A3%E0%B8%B5%E0%B8%82%E0%B8%B1%E0%B8%99%E0%B8%98%E0%B9%8C/%E0%B8%88%E0%B8%B8%E0%B8%94%E0%B8%88%E0%B8%AD%E0%B8%94%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%88%E0%B8%A7%E0%B8%9A%E0%B8%84%E0%B8%B5%E0%B8%A3%E0%B8%B5%E0%B8%82%E0%B8%B1%E0%B8%99%E0%B8%98%E0%B9%8C');
            totalrow = 2
            GetBKS_All();
        }else if(startprovice == "กระบี่" && endprovice == "สมุทรสงคราม"){
            url3 = ('https://timetables.busticket.in.th/บขส/กระบี่/สถานีขนส่งผู้โดยสาร%20จ.กระบี่/สมุทรสงคราม/จุดจอดแยกแม่กลอง')
            totalrow = 2 
            GetBKS_All();
        }else if(startprovice == "กระบี่" && endprovice == "สมุทรสาคร"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%B5%E0%B9%88/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%B5%E0%B9%88/%E0%B8%AA%E0%B8%A1%E0%B8%B8%E0%B8%97%E0%B8%A3%E0%B8%AA%E0%B8%B2%E0%B8%84%E0%B8%A3/%E0%B8%88%E0%B8%B8%E0%B8%94%E0%B8%88%E0%B8%AD%E0%B8%94%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%8A%E0%B8%B1%E0%B8%A2')
            totalrow = 2 
            GetBKS_All();
        }else if(startprovice == "กระบี่" && endprovice == "สุราษฎร์ธานี"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%B5%E0%B9%88/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%B5%E0%B9%88/%E0%B8%AA%E0%B8%B8%E0%B8%A3%E0%B8%B2%E0%B8%A9%E0%B8%8E%E0%B8%A3%E0%B9%8C%E0%B8%98%E0%B8%B2%E0%B8%99%E0%B8%B5/%E0%B8%AA%E0%B8%AB%E0%B8%81%E0%B8%A3%E0%B8%93%E0%B9%8C%E0%B8%AA%E0%B8%B8%E0%B8%A3%E0%B8%B2%E0%B8%A9%E0%B8%8E%E0%B8%A3%E0%B9%8C')
            totalrow = 2
            GetBKS_All();
        }else if(startprovice == "กระบี่" && endprovice == "เพชรบุรี"){
            url3= ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%B5%E0%B9%88/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%B5%E0%B9%88/%E0%B9%80%E0%B8%9E%E0%B8%8A%E0%B8%A3%E0%B8%9A%E0%B8%B8%E0%B8%A3%E0%B8%B5/%E0%B8%88%E0%B8%B8%E0%B8%94%E0%B8%88%E0%B8%AD%E0%B8%94%E0%B9%80%E0%B8%9E%E0%B8%8A%E0%B8%A3%E0%B8%9A%E0%B8%B8%E0%B8%A3%E0%B8%B5')
            totalrow = 2 ;
            GetBKS_All();
        }else if (startprovice == "กรุงเทพมหานคร" && endprovice == "กาญจนบุรี"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF%20(%E0%B8%AB%E0%B8%A1%E0%B8%AD%E0%B8%8A%E0%B8%B4%E0%B8%95%202)/%E0%B8%81%E0%B8%B2%E0%B8%8D%E0%B8%88%E0%B8%99%E0%B8%9A%E0%B8%B8%E0%B8%A3%E0%B8%B5/%E0%B8%88%E0%B8%B8%E0%B8%94%E0%B8%88%E0%B8%AD%E0%B8%94%20%E0%B8%AD.%E0%B8%AA%E0%B8%B1%E0%B8%87%E0%B8%82%E0%B8%A5%E0%B8%B0%E0%B8%9A%E0%B8%B8%E0%B8%A3%E0%B8%B5');
            totalrow = 1
            GetBKS_All();
        }else if (startprovice == "กรุงเทพมหานคร" && endprovice == "กำแพงเพชร"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF%20(%E0%B8%AB%E0%B8%A1%E0%B8%AD%E0%B8%8A%E0%B8%B4%E0%B8%95%202)/%E0%B8%81%E0%B8%B3%E0%B9%81%E0%B8%9E%E0%B8%87%E0%B9%80%E0%B8%9E%E0%B8%8A%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%81%E0%B8%B3%E0%B9%81%E0%B8%9E%E0%B8%87%E0%B9%80%E0%B8%9E%E0%B8%8A%E0%B8%A3');
            totalrow = 2
            GetBKS_All();
        }else if (startprovice == "กรุงเทพมหานคร" && endprovice == "จันทบุรี"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF%20(%E0%B9%80%E0%B8%AD%E0%B8%81%E0%B8%A1%E0%B8%B1%E0%B8%A2)/%E0%B8%88%E0%B8%B1%E0%B8%99%E0%B8%97%E0%B8%9A%E0%B8%B8%E0%B8%A3%E0%B8%B5/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%88%E0%B8%B1%E0%B8%99%E0%B8%97%E0%B8%9A%E0%B8%B8%E0%B8%A3%E0%B8%B5');
            totalrow = 2
            GetBKS_All();
        }else if (startprovice == "กรุงเทพมหานคร" && endprovice == "ชัยภูมิ"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF%20(%E0%B8%AB%E0%B8%A1%E0%B8%AD%E0%B8%8A%E0%B8%B4%E0%B8%95%202)/%E0%B8%8A%E0%B8%B1%E0%B8%A2%E0%B8%A0%E0%B8%B9%E0%B8%A1%E0%B8%B4/%E0%B8%88%E0%B8%B8%E0%B8%94%E0%B8%88%E0%B8%AD%E0%B8%94%20%E0%B8%AD.%E0%B8%AB%E0%B8%99%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%A3%E0%B8%B7%E0%B8%AD');
            totalrow = 5
            GetBKS_All();
        }else if (startprovice == "กรุงเทพมหานคร" && endprovice == "ชุมพร"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF%20(%E0%B8%AB%E0%B8%A1%E0%B8%AD%E0%B8%8A%E0%B8%B4%E0%B8%95%202)/%E0%B8%8A%E0%B8%B8%E0%B8%A1%E0%B8%9E%E0%B8%A3/%E0%B8%88%E0%B8%B8%E0%B8%94%E0%B8%88%E0%B8%AD%E0%B8%94%E0%B8%9A%E0%B8%82%E0%B8%AA.%E0%B8%97%E0%B9%88%E0%B8%B2%E0%B9%81%E0%B8%8B%E0%B8%B0');
            totalrow = 3
            GetBKS_All();
        }else if (startprovice == "กรุงเทพมหานคร" && endprovice == "ตรัง"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF%20(%E0%B8%AB%E0%B8%A1%E0%B8%AD%E0%B8%8A%E0%B8%B4%E0%B8%95%202)/%E0%B8%95%E0%B8%A3%E0%B8%B1%E0%B8%87/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%95%E0%B8%A3%E0%B8%B1%E0%B8%87');
            totalrow = 1
            GetBKS_All();
        }else if (startprovice == "กรุงเทพมหานคร" && endprovice == "ตราด"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF%20(%E0%B8%AB%E0%B8%A1%E0%B8%AD%E0%B8%8A%E0%B8%B4%E0%B8%95%202)/%E0%B8%95%E0%B8%A3%E0%B8%B2%E0%B8%94/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%95%E0%B8%A3%E0%B8%B2%E0%B8%94');
            totalrow = 3
            GetBKS_All();
        }else if (startprovice == "กรุงเทพมหานคร" && endprovice == "ตาก"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF%20(%E0%B8%AB%E0%B8%A1%E0%B8%AD%E0%B8%8A%E0%B8%B4%E0%B8%95%202)/%E0%B8%95%E0%B8%B2%E0%B8%81/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%95%E0%B8%B2%E0%B8%81');
            totalrow = 3
            GetBKS_All();
        }else if (startprovice == "กรุงเทพมหานคร" && endprovice == "นครนายก"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF%20(%E0%B8%AB%E0%B8%A1%E0%B8%AD%E0%B8%8A%E0%B8%B4%E0%B8%95%202)/%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%99%E0%B8%B2%E0%B8%A2%E0%B8%81/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%99%E0%B8%B2%E0%B8%A2%E0%B8%81');
            totalrow = 1
            GetBKS_All();
        }else if (startprovice == "กรุงเทพมหานคร" && endprovice == "นครราชสีมา"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF%20(%E0%B8%AB%E0%B8%A1%E0%B8%AD%E0%B8%8A%E0%B8%B4%E0%B8%95%202)/%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%AA%E0%B8%B5%E0%B8%A1%E0%B8%B2/%E0%B8%88%E0%B8%B8%E0%B8%94%E0%B8%88%E0%B8%AD%E0%B8%94%20%E0%B8%AD.%E0%B8%AA%E0%B8%B5%E0%B8%84%E0%B8%B4%E0%B9%89%E0%B8%A7');
            totalrow = 5
            GetBKS_All();
        }else if (startprovice == "กรุงเทพมหานคร" && endprovice == "นครศรีธรรมราช"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF%20(%E0%B8%96%E0%B8%99%E0%B8%99%E0%B8%9A%E0%B8%A3%E0%B8%A1%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%8A%E0%B8%99%E0%B8%99%E0%B8%B5)/%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%A8%E0%B8%A3%E0%B8%B5%E0%B8%98%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%A3%E0%B8%B2%E0%B8%8A/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%AD.%E0%B8%97%E0%B8%B8%E0%B9%88%E0%B8%87%E0%B8%AA%E0%B8%87');
            totalrow = 7
            GetBKS_All();
        }else if (startprovice == "กรุงเทพมหานคร" && endprovice == "นครสวรรค์"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF%20(%E0%B8%AB%E0%B8%A1%E0%B8%AD%E0%B8%8A%E0%B8%B4%E0%B8%95%202)/%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%AA%E0%B8%A7%E0%B8%A3%E0%B8%A3%E0%B8%84%E0%B9%8C/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%AA%E0%B8%A7%E0%B8%A3%E0%B8%A3%E0%B8%84%E0%B9%8C');
            totalrow = 7
            GetBKS_All();
        }else if (startprovice == "กรุงเทพมหานคร" && endprovice == "นราธิวาส"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF%20(%E0%B8%96%E0%B8%99%E0%B8%99%E0%B8%9A%E0%B8%A3%E0%B8%A1%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%8A%E0%B8%99%E0%B8%99%E0%B8%B5)/%E0%B8%99%E0%B8%A3%E0%B8%B2%E0%B8%98%E0%B8%B4%E0%B8%A7%E0%B8%B2%E0%B8%AA/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%99%E0%B8%A3%E0%B8%B2%E0%B8%98%E0%B8%B4%E0%B8%A7%E0%B8%B2%E0%B8%AA');
            totalrow = 3
            GetBKS_All();
        }else if (startprovice == "กรุงเทพมหานคร" && endprovice == "บึงกาฬ"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF%20(%E0%B8%AB%E0%B8%A1%E0%B8%AD%E0%B8%8A%E0%B8%B4%E0%B8%95%202)/%E0%B8%9A%E0%B8%B6%E0%B8%87%E0%B8%81%E0%B8%B2%E0%B8%AC/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%9A%E0%B8%B6%E0%B8%87%E0%B8%81%E0%B8%B2%E0%B8%AC');
            totalrow = 1
            GetBKS_All();
        }else if (startprovice == "กรุงเทพมหานคร" && endprovice == "ปทุมธานี"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF%20(%E0%B8%AB%E0%B8%A1%E0%B8%AD%E0%B8%8A%E0%B8%B4%E0%B8%95%202)/%E0%B8%9B%E0%B8%97%E0%B8%B8%E0%B8%A1%E0%B8%98%E0%B8%B2%E0%B8%99%E0%B8%B5/%E0%B8%88%E0%B8%B8%E0%B8%94%E0%B8%88%E0%B8%AD%E0%B8%94%E0%B8%99%E0%B8%A7%E0%B8%99%E0%B8%84%E0%B8%A3');
            totalrow = 13
            GetBKS_All();
        }else if (startprovice == "กรุงเทพมหานคร" && endprovice == "ประจวบคีรีขันธ์"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF%20(%E0%B8%AB%E0%B8%A1%E0%B8%AD%E0%B8%8A%E0%B8%B4%E0%B8%95%202)/%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%88%E0%B8%A7%E0%B8%9A%E0%B8%84%E0%B8%B5%E0%B8%A3%E0%B8%B5%E0%B8%82%E0%B8%B1%E0%B8%99%E0%B8%98%E0%B9%8C/%E0%B8%88%E0%B8%B8%E0%B8%94%E0%B8%88%E0%B8%AD%E0%B8%94%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%88%E0%B8%A7%E0%B8%9A%E0%B8%84%E0%B8%B5%E0%B8%A3%E0%B8%B5%E0%B8%82%E0%B8%B1%E0%B8%99%E0%B8%98%E0%B9%8C');
            totalrow = 3
            GetBKS_All();
        }else if (startprovice == "กรุงเทพมหานคร" && endprovice == "ปราจีนบุรี"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF%20(%E0%B8%AB%E0%B8%A1%E0%B8%AD%E0%B8%8A%E0%B8%B4%E0%B8%95%202)/%E0%B8%9B%E0%B8%A3%E0%B8%B2%E0%B8%88%E0%B8%B5%E0%B8%99%E0%B8%9A%E0%B8%B8%E0%B8%A3%E0%B8%B5/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%AD.%E0%B8%81%E0%B8%9A%E0%B8%B4%E0%B8%99%E0%B8%97%E0%B8%A3%E0%B9%8C%E0%B8%9A%E0%B8%B8%E0%B8%A3%E0%B8%B5');
            totalrow = 1
            GetBKS_All();
        }else if (startprovice == "กรุงเทพมหานคร" && endprovice == "ปัตตานี"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF%20(%E0%B8%96%E0%B8%99%E0%B8%99%E0%B8%9A%E0%B8%A3%E0%B8%A1%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%8A%E0%B8%99%E0%B8%99%E0%B8%B5)/%E0%B8%9B%E0%B8%B1%E0%B8%95%E0%B8%95%E0%B8%B2%E0%B8%99%E0%B8%B5/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%9B%E0%B8%B1%E0%B8%95%E0%B8%95%E0%B8%B2%E0%B8%99%E0%B8%B5');
            totalrow = 3
            GetBKS_All();
        }else if (startprovice == "กรุงเทพมหานคร" && endprovice == "พังงา"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF%20(%E0%B8%AB%E0%B8%A1%E0%B8%AD%E0%B8%8A%E0%B8%B4%E0%B8%95%202)/%E0%B8%9E%E0%B8%B1%E0%B8%87%E0%B8%87%E0%B8%B2/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%9E%E0%B8%B1%E0%B8%87%E0%B8%87%E0%B8%B2');
            totalrow = 2
            GetBKS_All();
        }else if (startprovice == "กรุงเทพมหานคร" && endprovice == "พัทลุง"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF%20(%E0%B8%AB%E0%B8%A1%E0%B8%AD%E0%B8%8A%E0%B8%B4%E0%B8%95%202)/%E0%B8%9E%E0%B8%B1%E0%B8%97%E0%B8%A5%E0%B8%B8%E0%B8%87/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%9E%E0%B8%B1%E0%B8%97%E0%B8%A5%E0%B8%B8%E0%B8%87');
            totalrow = 2
            GetBKS_All();
        }else if (startprovice == "กรุงเทพมหานคร" && endprovice == "พิจิตร"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF%20(%E0%B8%AB%E0%B8%A1%E0%B8%AD%E0%B8%8A%E0%B8%B4%E0%B8%95%202)/%E0%B8%9E%E0%B8%B4%E0%B8%88%E0%B8%B4%E0%B8%95%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%9E%E0%B8%B4%E0%B8%88%E0%B8%B4%E0%B8%95%E0%B8%A3');
            totalrow = 2
            GetBKS_All();
        }else if (startprovice == "กรุงเทพมหานคร" && endprovice == "พิษณุโลก"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF%20(%E0%B8%AB%E0%B8%A1%E0%B8%AD%E0%B8%8A%E0%B8%B4%E0%B8%95%202)/%E0%B8%9E%E0%B8%B4%E0%B8%A9%E0%B8%93%E0%B8%B8%E0%B9%82%E0%B8%A5%E0%B8%81/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88%20%E0%B8%9E%E0%B8%B4%E0%B8%A9%E0%B8%93%E0%B8%B8%E0%B9%82%E0%B8%A5%E0%B8%81');
            totalrow = 7
            GetBKS_All();
        }else if (startprovice == "กรุงเทพมหานคร" && endprovice == "ยะลา"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF%20(%E0%B8%96%E0%B8%99%E0%B8%99%E0%B8%9A%E0%B8%A3%E0%B8%A1%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%8A%E0%B8%99%E0%B8%99%E0%B8%B5)/%E0%B8%A2%E0%B8%B0%E0%B8%A5%E0%B8%B2/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%A2%E0%B8%B0%E0%B8%A5%E0%B8%B2');
            totalrow = 1
            GetBKS_All();
        }else if (startprovice == "กรุงเทพมหานคร" && endprovice == "ระยอง"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF%20(%E0%B8%AB%E0%B8%A1%E0%B8%AD%E0%B8%8A%E0%B8%B4%E0%B8%95%202)/%E0%B8%A3%E0%B8%B0%E0%B8%A2%E0%B8%AD%E0%B8%87/%E0%B8%97%E0%B9%88%E0%B8%B2%20%E0%B8%AD.%E0%B9%81%E0%B8%81%E0%B8%A5%E0%B8%87');
            totalrow = 2
            GetBKS_All();
        }else if (startprovice == "กรุงเทพมหานคร" && endprovice == "ลำพูน"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF%20(%E0%B8%AB%E0%B8%A1%E0%B8%AD%E0%B8%8A%E0%B8%B4%E0%B8%95%202)/%E0%B8%A5%E0%B8%B3%E0%B8%9E%E0%B8%B9%E0%B8%99/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%A5%E0%B8%B3%E0%B8%9E%E0%B8%B9%E0%B8%99');
            totalrow = 2
            GetBKS_All();
        }else if (startprovice == "กรุงเทพมหานคร" && endprovice == "สงขลา"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF%20(%E0%B8%96%E0%B8%99%E0%B8%99%E0%B8%9A%E0%B8%A3%E0%B8%A1%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%8A%E0%B8%99%E0%B8%99%E0%B8%B5)/%E0%B8%AA%E0%B8%87%E0%B8%82%E0%B8%A5%E0%B8%B2/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%AD.%E0%B8%AB%E0%B8%B2%E0%B8%94%E0%B9%83%E0%B8%AB%E0%B8%8D%E0%B9%88');
            totalrow = 3
            GetBKS_All();
        }else if (startprovice == "กรุงเทพมหานคร" && endprovice == "สตูล"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF%20(%E0%B8%AB%E0%B8%A1%E0%B8%AD%E0%B8%8A%E0%B8%B4%E0%B8%95%202)/%E0%B8%AA%E0%B8%95%E0%B8%B9%E0%B8%A5/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%AA%E0%B8%95%E0%B8%B9%E0%B8%A5');
            totalrow = 1
            GetBKS_All();
        }else if (startprovice == "กรุงเทพมหานคร" && endprovice == "สมุทรสงคราม"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF%20(%E0%B8%AB%E0%B8%A1%E0%B8%AD%E0%B8%8A%E0%B8%B4%E0%B8%95%202)/%E0%B8%AA%E0%B8%A1%E0%B8%B8%E0%B8%97%E0%B8%A3%E0%B8%AA%E0%B8%87%E0%B8%84%E0%B8%A3%E0%B8%B2%E0%B8%A1/%E0%B8%88%E0%B8%B8%E0%B8%94%E0%B8%88%E0%B8%AD%E0%B8%94%E0%B9%81%E0%B8%A2%E0%B8%81%E0%B9%81%E0%B8%A1%E0%B9%88%E0%B8%81%E0%B8%A5%E0%B8%AD%E0%B8%87');
            totalrow = 3
            GetBKS_All();
        }else if (startprovice == "กรุงเทพมหานคร" && endprovice == "สมุทรสาคร"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF%20(%E0%B8%AB%E0%B8%A1%E0%B8%AD%E0%B8%8A%E0%B8%B4%E0%B8%95%202)/%E0%B8%AA%E0%B8%A1%E0%B8%B8%E0%B8%97%E0%B8%A3%E0%B8%AA%E0%B8%B2%E0%B8%84%E0%B8%A3/%E0%B8%88%E0%B8%B8%E0%B8%94%E0%B8%88%E0%B8%AD%E0%B8%94%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%8A%E0%B8%B1%E0%B8%A2');
            totalrow = 3
            GetBKS_All();
        }else if (startprovice == "กรุงเทพมหานคร" && endprovice == "สระบุรี"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF%20(%E0%B8%AB%E0%B8%A1%E0%B8%AD%E0%B8%8A%E0%B8%B4%E0%B8%95%202)/%E0%B8%AA%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%B8%E0%B8%A3%E0%B8%B5/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%AA%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%B8%E0%B8%A3%E0%B8%B5');
            totalrow = 14
            GetBKS_All();
        }else if (startprovice == "กรุงเทพมหานคร" && endprovice == "สระแก้ว"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF%20(%E0%B8%AB%E0%B8%A1%E0%B8%AD%E0%B8%8A%E0%B8%B4%E0%B8%95%202)/%E0%B8%AA%E0%B8%A3%E0%B8%B0%E0%B9%81%E0%B8%81%E0%B9%89%E0%B8%A7/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%AA%E0%B8%A3%E0%B8%B0%E0%B9%81%E0%B8%81%E0%B9%89%E0%B8%A7');
            totalrow = 1
            GetBKS_All();
        }else if (startprovice == "กรุงเทพมหานคร" && endprovice == "สุโขทัย"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF%20(%E0%B8%AB%E0%B8%A1%E0%B8%AD%E0%B8%8A%E0%B8%B4%E0%B8%95%202)/%E0%B8%AA%E0%B8%B8%E0%B9%82%E0%B8%82%E0%B8%97%E0%B8%B1%E0%B8%A2/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%AA%E0%B8%B8%E0%B9%82%E0%B8%82%E0%B8%97%E0%B8%B1%E0%B8%A2');
            totalrow = 8
            GetBKS_All();
        }else if (startprovice == "กรุงเทพมหานคร" && endprovice == "อยุธยา"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF%20(%E0%B8%AB%E0%B8%A1%E0%B8%AD%E0%B8%8A%E0%B8%B4%E0%B8%95%202)/%E0%B8%AD%E0%B8%A2%E0%B8%B8%E0%B8%98%E0%B8%A2%E0%B8%B2/%E0%B8%97%E0%B9%88%E0%B8%B2%E0%B8%A7%E0%B8%B1%E0%B8%87%E0%B8%99%E0%B9%89%E0%B8%AD%E0%B8%A2');
            totalrow = 15
            GetBKS_All();
        }else if (startprovice == "กรุงเทพมหานคร" && endprovice == "อ่างทอง"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF%20(%E0%B8%AB%E0%B8%A1%E0%B8%AD%E0%B8%8A%E0%B8%B4%E0%B8%95%202)/%E0%B8%AD%E0%B9%88%E0%B8%B2%E0%B8%87%E0%B8%97%E0%B8%AD%E0%B8%87/%E0%B8%88%E0%B8%B8%E0%B8%94%E0%B8%88%E0%B8%AD%E0%B8%94%20%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B9%81%E0%B8%A2%E0%B8%81%E0%B8%AD%E0%B9%88%E0%B8%B2%E0%B8%87%E0%B8%97%E0%B8%AD%E0%B8%87');
            totalrow = 7
            GetBKS_All();
        }else if (startprovice == "กรุงเทพมหานคร" && endprovice == "อำนาจเจริญ"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF%20(%E0%B8%AB%E0%B8%A1%E0%B8%AD%E0%B8%8A%E0%B8%B4%E0%B8%95%202)/%E0%B8%AD%E0%B8%B3%E0%B8%99%E0%B8%B2%E0%B8%88%E0%B9%80%E0%B8%88%E0%B8%A3%E0%B8%B4%E0%B8%8D/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%AD%E0%B8%B3%E0%B8%99%E0%B8%B2%E0%B8%88%E0%B9%80%E0%B8%88%E0%B8%A3%E0%B8%B4%E0%B8%8D');
            totalrow = 1
            GetBKS_All();
        }else if (startprovice == "กรุงเทพมหานคร" && endprovice == "เพชรบุรี"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF%20(%E0%B8%AB%E0%B8%A1%E0%B8%AD%E0%B8%8A%E0%B8%B4%E0%B8%95%202)/%E0%B9%80%E0%B8%9E%E0%B8%8A%E0%B8%A3%E0%B8%9A%E0%B8%B8%E0%B8%A3%E0%B8%B5/%E0%B8%88%E0%B8%B8%E0%B8%94%E0%B8%88%E0%B8%AD%E0%B8%94%E0%B9%81%E0%B8%A2%E0%B8%81%E0%B8%A7%E0%B8%B1%E0%B8%87%E0%B8%A1%E0%B8%B0%E0%B8%99%E0%B8%B2%E0%B8%A7');
            totalrow = 2
            GetBKS_All();
        }else if (startprovice == "กรุงเทพมหานคร" && endprovice == "เพชรบูรณ์"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF%20(%E0%B8%AB%E0%B8%A1%E0%B8%AD%E0%B8%8A%E0%B8%B4%E0%B8%95%202)/%E0%B9%80%E0%B8%9E%E0%B8%8A%E0%B8%A3%E0%B8%9A%E0%B8%B9%E0%B8%A3%E0%B8%93%E0%B9%8C/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%AD.%E0%B8%AB%E0%B8%A5%E0%B9%88%E0%B8%A1%E0%B8%AA%E0%B8%B1%E0%B8%81');
            totalrow = 4
            GetBKS_All();
        }else if (startprovice == "กรุงเทพมหานคร" && endprovice == "เลย"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF%20(%E0%B8%AB%E0%B8%A1%E0%B8%AD%E0%B8%8A%E0%B8%B4%E0%B8%95%202)/%E0%B9%80%E0%B8%A5%E0%B8%A2/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%88%E0%B8%B1%E0%B8%87%E0%B8%AB%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B9%80%E0%B8%A5%E0%B8%A2');
            totalrow = 3
            GetBKS_All();
        }else if (startprovice == "กรุงเทพมหานคร" && endprovice == "เวียงจันทน์"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF%20(%E0%B8%AB%E0%B8%A1%E0%B8%AD%E0%B8%8A%E0%B8%B4%E0%B8%95%202)/%E0%B9%80%E0%B8%A7%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B8%88%E0%B8%B1%E0%B8%99%E0%B8%97%E0%B8%99%E0%B9%8C/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B9%80%E0%B8%A7%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B8%88%E0%B8%B1%E0%B8%99%E0%B8%97%E0%B8%99%E0%B9%8C');
            totalrow = 1
            GetBKS_All();
        }else if (startprovice == "กาฬสินธุ์" && endprovice == "กรุงเทพมหานคร"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%81%E0%B8%B2%E0%B8%AC%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B8%98%E0%B8%B8%E0%B9%8C/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%81%E0%B8%B2%E0%B8%AC%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B8%98%E0%B8%B8%E0%B9%8C/%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF%20(%E0%B8%AB%E0%B8%A1%E0%B8%AD%E0%B8%8A%E0%B8%B4%E0%B8%95%202)');
            totalrow = 3
            GetBKS_All();
        }else if (startprovice == "กาฬสินธุ์" && endprovice == "กาฬสินธุ์"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%81%E0%B8%B2%E0%B8%AC%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B8%98%E0%B8%B8%E0%B9%8C/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%81%E0%B8%B2%E0%B8%AC%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B8%98%E0%B8%B8%E0%B9%8C/%E0%B8%81%E0%B8%B2%E0%B8%AC%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B8%98%E0%B8%B8%E0%B9%8C/%E0%B8%88%E0%B8%B8%E0%B8%94%E0%B8%88%E0%B8%AD%E0%B8%94%20%E0%B8%AD.%E0%B9%80%E0%B8%82%E0%B8%B2%E0%B8%A7%E0%B8%87');
            totalrow = 1
            GetBKS_All();
        }else if (startprovice == "กาฬสินธุ์" && endprovice == "ขอนแก่น"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%81%E0%B8%B2%E0%B8%AC%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B8%98%E0%B8%B8%E0%B9%8C/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%81%E0%B8%B2%E0%B8%AC%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B8%98%E0%B8%B8%E0%B9%8C/%E0%B8%82%E0%B8%AD%E0%B8%99%E0%B9%81%E0%B8%81%E0%B9%88%E0%B8%99/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%AD.%E0%B8%9E%E0%B8%A5');
            totalrow = 3
            GetBKS_All();
        }else if (startprovice == "กาฬสินธุ์" && endprovice == "นครนายก"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%81%E0%B8%B2%E0%B8%AC%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B8%98%E0%B8%B8%E0%B9%8C/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%81%E0%B8%B2%E0%B8%AC%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B8%98%E0%B8%B8%E0%B9%8C/%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%99%E0%B8%B2%E0%B8%A2%E0%B8%81/%E0%B8%88%E0%B8%B8%E0%B8%94%E0%B8%88%E0%B8%AD%E0%B8%94%20%E0%B8%95.%E0%B8%AB%E0%B8%B4%E0%B8%99%E0%B8%81%E0%B8%AD%E0%B8%87');
            totalrow = 3
            GetBKS_All();
        }else if (startprovice == "กาฬสินธุ์" && endprovice == "นครพนม"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%81%E0%B8%B2%E0%B8%AC%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B8%98%E0%B8%B8%E0%B9%8C/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%81%E0%B8%B2%E0%B8%AC%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B8%98%E0%B8%B8%E0%B9%8C/%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%9E%E0%B8%99%E0%B8%A1/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%9E%E0%B8%99%E0%B8%A1');
            totalrow = 5
            GetBKS_All();
        }else if (startprovice == "กาฬสินธุ์" && endprovice == "นครราชสีมา"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%81%E0%B8%B2%E0%B8%AC%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B8%98%E0%B8%B8%E0%B9%8C/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%81%E0%B8%B2%E0%B8%AC%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B8%98%E0%B8%B8%E0%B9%8C/%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%AA%E0%B8%B5%E0%B8%A1%E0%B8%B2/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%AA%E0%B8%B5%E0%B8%A1%E0%B8%B2');
            totalrow = 3
            GetBKS_All();
        }else if (startprovice == "กาฬสินธุ์" && endprovice == "ปทุมธานี"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%81%E0%B8%B2%E0%B8%AC%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B8%98%E0%B8%B8%E0%B9%8C/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%81%E0%B8%B2%E0%B8%AC%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B8%98%E0%B8%B8%E0%B9%8C/%E0%B8%9B%E0%B8%97%E0%B8%B8%E0%B8%A1%E0%B8%98%E0%B8%B2%E0%B8%99%E0%B8%B5/%E0%B8%88%E0%B8%B8%E0%B8%94%E0%B8%88%E0%B8%AD%E0%B8%94%E0%B8%99%E0%B8%A7%E0%B8%99%E0%B8%84%E0%B8%A3');
            totalrow = 3
            GetBKS_All();
        }else if (startprovice == "กาฬสินธุ์" && endprovice == "มหาสารคาม"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%81%E0%B8%B2%E0%B8%AC%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B8%98%E0%B8%B8%E0%B9%8C/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%81%E0%B8%B2%E0%B8%AC%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B8%98%E0%B8%B8%E0%B9%8C/%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%84%E0%B8%B2%E0%B8%A1/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%84%E0%B8%B2%E0%B8%A1');
            totalrow = 3
            GetBKS_All();
        }else if (startprovice == "กาฬสินธุ์" && endprovice == "มุกดาหาร"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%81%E0%B8%B2%E0%B8%AC%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B8%98%E0%B8%B8%E0%B9%8C/%E0%B8%88%E0%B8%B8%E0%B8%94%E0%B8%88%E0%B8%AD%E0%B8%94%E0%B8%9A%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B8%9A%E0%B8%B1%E0%B8%A7%E0%B8%82%E0%B8%B2%E0%B8%A7/%E0%B8%A1%E0%B8%B8%E0%B8%81%E0%B8%94%E0%B8%B2%E0%B8%AB%E0%B8%B2%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%A1%E0%B8%B8%E0%B8%81%E0%B8%94%E0%B8%B2%E0%B8%AB%E0%B8%B2%E0%B8%A3');
            totalrow = 6
            GetBKS_All();
        }else if (startprovice == "กาฬสินธุ์" && endprovice == "ร้อยเอ็ด"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%81%E0%B8%B2%E0%B8%AC%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B8%98%E0%B8%B8%E0%B9%8C/%E0%B8%88%E0%B8%B8%E0%B8%94%E0%B8%88%E0%B8%AD%E0%B8%94%E0%B8%9A%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B8%9A%E0%B8%B1%E0%B8%A7%E0%B8%82%E0%B8%B2%E0%B8%A7/%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%A2%E0%B9%80%E0%B8%AD%E0%B9%87%E0%B8%94/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%AD.%E0%B9%82%E0%B8%9E%E0%B8%99%E0%B8%97%E0%B8%AD%E0%B8%87');
            totalrow = 2
            GetBKS_All();
        }else if (startprovice == "กาฬสินธุ์" && endprovice == "สกลนคร"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%81%E0%B8%B2%E0%B8%AC%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B8%98%E0%B8%B8%E0%B9%8C/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%81%E0%B8%B2%E0%B8%AC%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B8%98%E0%B8%B8%E0%B9%8C/%E0%B8%AA%E0%B8%81%E0%B8%A5%E0%B8%99%E0%B8%84%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%AA%E0%B8%81%E0%B8%A5%E0%B8%99%E0%B8%84%E0%B8%A3');
            totalrow = 8
            GetBKS_All();
        }else if (startprovice == "กาฬสินธุ์" && endprovice == "สระบุรี"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%81%E0%B8%B2%E0%B8%AC%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B8%98%E0%B8%B8%E0%B9%8C/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%81%E0%B8%B2%E0%B8%AC%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B8%98%E0%B8%B8%E0%B9%8C/%E0%B8%AA%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%B8%E0%B8%A3%E0%B8%B5/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%AA%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%B8%E0%B8%A3%E0%B8%B5');
            totalrow = 3
            GetBKS_All();
        }else if (startprovice == "กาฬสินธุ์" && endprovice == "หนองคาย"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%81%E0%B8%B2%E0%B8%AC%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B8%98%E0%B8%B8%E0%B9%8C/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%81%E0%B8%B2%E0%B8%AC%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B8%98%E0%B8%B8%E0%B9%8C/%E0%B8%AB%E0%B8%99%E0%B8%AD%E0%B8%87%E0%B8%84%E0%B8%B2%E0%B8%A2/%E0%B8%88%E0%B8%B8%E0%B8%94%E0%B8%88%E0%B8%AD%E0%B8%94%E0%B8%99%E0%B8%B2%E0%B8%9E%E0%B8%8A%E0%B8%B1%E0%B8%A2');
            totalrow = 2
            GetBKS_All();
        }else if (startprovice == "กาฬสินธุ์" && endprovice == "อยุธยา"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%81%E0%B8%B2%E0%B8%AC%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B8%98%E0%B8%B8%E0%B9%8C/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%81%E0%B8%B2%E0%B8%AC%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B8%98%E0%B8%B8%E0%B9%8C/%E0%B8%AD%E0%B8%A2%E0%B8%B8%E0%B8%98%E0%B8%A2%E0%B8%B2/%E0%B8%97%E0%B9%88%E0%B8%B2%E0%B8%A7%E0%B8%B1%E0%B8%87%E0%B8%99%E0%B9%89%E0%B8%AD%E0%B8%A2');
            totalrow = 3
            GetBKS_All();
        }else if (startprovice == "กาฬสินธุ์" && endprovice == "อุดรธานี"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%81%E0%B8%B2%E0%B8%AC%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B8%98%E0%B8%B8%E0%B9%8C/%E0%B8%88%E0%B8%B8%E0%B8%94%E0%B8%88%E0%B8%AD%E0%B8%94%E0%B8%A7%E0%B8%B1%E0%B8%87%E0%B8%AA%E0%B8%B2%E0%B8%A1%E0%B8%AB%E0%B8%A1%E0%B8%AD/%E0%B8%AD%E0%B8%B8%E0%B8%94%E0%B8%A3%E0%B8%98%E0%B8%B2%E0%B8%99%E0%B8%B5/%E0%B8%88%E0%B8%B8%E0%B8%94%E0%B8%88%E0%B8%AD%E0%B8%94%20%E0%B8%AD.%E0%B8%A8%E0%B8%A3%E0%B8%B5%E0%B8%98%E0%B8%B2%E0%B8%95%E0%B8%B8');
            totalrow = 1
            GetBKS_All();
        }else if (startprovice == "กำแพงเพชร" && endprovice == "กรุงเทพมหานคร"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%81%E0%B8%B3%E0%B9%81%E0%B8%9E%E0%B8%87%E0%B9%80%E0%B8%9E%E0%B8%8A%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%84%E0%B8%A5%E0%B8%AD%E0%B8%87%E0%B8%A5%E0%B8%B2%E0%B8%99/%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF%20(%E0%B8%AB%E0%B8%A1%E0%B8%AD%E0%B8%8A%E0%B8%B4%E0%B8%95%202)');
            totalrow = 5
            GetBKS_All();
        }else if (startprovice == "กำแพงเพชร" && endprovice == "ชัยนาท"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%81%E0%B8%B3%E0%B9%81%E0%B8%9E%E0%B8%87%E0%B9%80%E0%B8%9E%E0%B8%8A%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%84%E0%B8%A5%E0%B8%AD%E0%B8%87%E0%B8%A5%E0%B8%B2%E0%B8%99/%E0%B8%8A%E0%B8%B1%E0%B8%A2%E0%B8%99%E0%B8%B2%E0%B8%97/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%8A%E0%B8%B1%E0%B8%A2%E0%B8%99%E0%B8%B2%E0%B8%97');
            totalrow = 5
            GetBKS_All();
        }else if (startprovice == "กำแพงเพชร" && endprovice == "ตาก"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%81%E0%B8%B3%E0%B9%81%E0%B8%9E%E0%B8%87%E0%B9%80%E0%B8%9E%E0%B8%8A%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%81%E0%B8%B3%E0%B9%81%E0%B8%9E%E0%B8%87%E0%B9%80%E0%B8%9E%E0%B8%8A%E0%B8%A3/%E0%B8%95%E0%B8%B2%E0%B8%81/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%95%E0%B8%B2%E0%B8%81');
            totalrow = 3
            GetBKS_All();
        }else if (startprovice == "กำแพงเพชร" && endprovice == "ปทุมธานี"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%81%E0%B8%B3%E0%B9%81%E0%B8%9E%E0%B8%87%E0%B9%80%E0%B8%9E%E0%B8%8A%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%84%E0%B8%A5%E0%B8%AD%E0%B8%87%E0%B8%A5%E0%B8%B2%E0%B8%99/%E0%B8%9B%E0%B8%97%E0%B8%B8%E0%B8%A1%E0%B8%98%E0%B8%B2%E0%B8%99%E0%B8%B5/%E0%B8%88%E0%B8%B8%E0%B8%94%E0%B8%88%E0%B8%AD%E0%B8%94%E0%B8%99%E0%B8%A7%E0%B8%99%E0%B8%84%E0%B8%A3');
            totalrow = 5
            GetBKS_All();
        }else if (startprovice == "กำแพงเพชร" && endprovice == "ลำปาง"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%81%E0%B8%B3%E0%B9%81%E0%B8%9E%E0%B8%87%E0%B9%80%E0%B8%9E%E0%B8%8A%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%81%E0%B8%B3%E0%B9%81%E0%B8%9E%E0%B8%87%E0%B9%80%E0%B8%9E%E0%B8%8A%E0%B8%A3/%E0%B8%A5%E0%B8%B3%E0%B8%9B%E0%B8%B2%E0%B8%87/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%A5%E0%B8%B3%E0%B8%9B%E0%B8%B2%E0%B8%87');
            totalrow = 8
            GetBKS_All();
        }else if (startprovice == "กำแพงเพชร" && endprovice == "ลำพูน"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%81%E0%B8%B3%E0%B9%81%E0%B8%9E%E0%B8%87%E0%B9%80%E0%B8%9E%E0%B8%8A%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%81%E0%B8%B3%E0%B9%81%E0%B8%9E%E0%B8%87%E0%B9%80%E0%B8%9E%E0%B8%8A%E0%B8%A3/%E0%B8%A5%E0%B8%B3%E0%B8%9E%E0%B8%B9%E0%B8%99/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%A5%E0%B8%B3%E0%B8%9E%E0%B8%B9%E0%B8%99');
            totalrow = 2
            GetBKS_All();
        }else if (startprovice == "กำแพงเพชร" && endprovice == "สิงห์บุรี"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%81%E0%B8%B3%E0%B9%81%E0%B8%9E%E0%B8%87%E0%B9%80%E0%B8%9E%E0%B8%8A%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%84%E0%B8%A5%E0%B8%AD%E0%B8%87%E0%B8%A5%E0%B8%B2%E0%B8%99/%E0%B8%AA%E0%B8%B4%E0%B8%87%E0%B8%AB%E0%B9%8C%E0%B8%9A%E0%B8%B8%E0%B8%A3%E0%B8%B5/%E0%B8%AA%E0%B8%B5%E0%B9%88%E0%B9%81%E0%B8%A2%E0%B8%81%E0%B9%80%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%88.%E0%B8%AA%E0%B8%B4%E0%B8%87%E0%B8%AB%E0%B9%8C%E0%B8%9A%E0%B8%B8%E0%B8%A3%E0%B8%B5');
            totalrow = 5
            GetBKS_All();
        }else if (startprovice == "กำแพงเพชร" && endprovice == "สุโขทัย"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%81%E0%B8%B3%E0%B9%81%E0%B8%9E%E0%B8%87%E0%B9%80%E0%B8%9E%E0%B8%8A%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%81%E0%B8%B3%E0%B9%81%E0%B8%9E%E0%B8%87%E0%B9%80%E0%B8%9E%E0%B8%8A%E0%B8%A3/%E0%B8%AA%E0%B8%B8%E0%B9%82%E0%B8%82%E0%B8%97%E0%B8%B1%E0%B8%A2/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%AA%E0%B8%B8%E0%B9%82%E0%B8%82%E0%B8%97%E0%B8%B1%E0%B8%A2');
            totalrow = 8
            GetBKS_All();
        }else if (startprovice == "กำแพงเพชร" && endprovice == "อยุธยา"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%81%E0%B8%B3%E0%B9%81%E0%B8%9E%E0%B8%87%E0%B9%80%E0%B8%9E%E0%B8%8A%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%84%E0%B8%A5%E0%B8%AD%E0%B8%87%E0%B8%A5%E0%B8%B2%E0%B8%99/%E0%B8%AD%E0%B8%A2%E0%B8%B8%E0%B8%98%E0%B8%A2%E0%B8%B2/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%AD%E0%B8%A2%E0%B8%B8%E0%B8%98%E0%B8%A2%E0%B8%B2');
            totalrow = 5
            GetBKS_All();
        }else if (startprovice == "กำแพงเพชร" && endprovice == "อ่างทอง"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%81%E0%B8%B3%E0%B9%81%E0%B8%9E%E0%B8%87%E0%B9%80%E0%B8%9E%E0%B8%8A%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%84%E0%B8%A5%E0%B8%AD%E0%B8%87%E0%B8%A5%E0%B8%B2%E0%B8%99/%E0%B8%AD%E0%B9%88%E0%B8%B2%E0%B8%87%E0%B8%97%E0%B8%AD%E0%B8%87/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%AD%E0%B9%88%E0%B8%B2%E0%B8%87%E0%B8%97%E0%B8%AD%E0%B8%87%20(%E0%B8%88%E0%B8%B8%E0%B8%94%E0%B8%88%E0%B8%AD%E0%B8%94%E0%B8%A3%E0%B9%88%E0%B8%A1%E0%B9%84%E0%B8%97%E0%B8%A3)');
            totalrow = 5
            GetBKS_All();
        }else if (startprovice == "กำแพงเพชร" && endprovice == "อุตรดิตถ์"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%81%E0%B8%B3%E0%B9%81%E0%B8%9E%E0%B8%87%E0%B9%80%E0%B8%9E%E0%B8%8A%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%81%E0%B8%B3%E0%B9%81%E0%B8%9E%E0%B8%87%E0%B9%80%E0%B8%9E%E0%B8%8A%E0%B8%A3/%E0%B8%AD%E0%B8%B8%E0%B8%95%E0%B8%A3%E0%B8%94%E0%B8%B4%E0%B8%95%E0%B8%96%E0%B9%8C/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%AD%E0%B8%B8%E0%B8%95%E0%B8%A3%E0%B8%94%E0%B8%B4%E0%B8%95%E0%B8%96%E0%B9%8C');
            totalrow = 4
            GetBKS_All();
        }else if (startprovice == "กำแพงเพชร" && endprovice == "อุทัยธานี"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%81%E0%B8%B3%E0%B9%81%E0%B8%9E%E0%B8%87%E0%B9%80%E0%B8%9E%E0%B8%8A%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%84%E0%B8%A5%E0%B8%AD%E0%B8%87%E0%B8%A5%E0%B8%B2%E0%B8%99/%E0%B8%AD%E0%B8%B8%E0%B8%97%E0%B8%B1%E0%B8%A2%E0%B8%98%E0%B8%B2%E0%B8%99%E0%B8%B5/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%AD%E0%B8%B8%E0%B8%97%E0%B8%B1%E0%B8%A2%E0%B8%98%E0%B8%B2%E0%B8%99%E0%B8%B5');
            totalrow = 5
            GetBKS_All();
        }else if (startprovice == "กำแพงเพชร" && endprovice == "เชียงใหม่"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%81%E0%B8%B3%E0%B9%81%E0%B8%9E%E0%B8%87%E0%B9%80%E0%B8%9E%E0%B8%8A%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%81%E0%B8%B3%E0%B9%81%E0%B8%9E%E0%B8%87%E0%B9%80%E0%B8%9E%E0%B8%8A%E0%B8%A3/%E0%B9%80%E0%B8%8A%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B9%80%E0%B8%8A%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88%20(%E0%B8%81%E0%B8%A3%E0%B8%A1%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87)');
            totalrow = 10
            GetBKS_All();
        }else if (startprovice == "กำแพงเพชร" && endprovice == "แพร่"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%81%E0%B8%B3%E0%B9%81%E0%B8%9E%E0%B8%87%E0%B9%80%E0%B8%9E%E0%B8%8A%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%81%E0%B8%B3%E0%B9%81%E0%B8%9E%E0%B8%87%E0%B9%80%E0%B8%9E%E0%B8%8A%E0%B8%A3/%E0%B9%81%E0%B8%9E%E0%B8%A3%E0%B9%88/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B9%81%E0%B8%9E%E0%B8%A3%E0%B9%88');
            totalrow = 5
            GetBKS_All();
        }else if (startprovice == "ขอนแก่น" && endprovice == "กรุงเทพมหานคร"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%82%E0%B8%AD%E0%B8%99%E0%B9%81%E0%B8%81%E0%B9%88%E0%B8%99/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%82%E0%B8%AD%E0%B8%99%E0%B9%81%E0%B8%81%E0%B9%88%E0%B8%99/%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF%20(%E0%B8%AB%E0%B8%A1%E0%B8%AD%E0%B8%8A%E0%B8%B4%E0%B8%95%202)');
            totalrow = 1
            GetBKS_All();
        }else if (startprovice == "ขอนแก่น" && endprovice == "กาฬสินธุ์"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%82%E0%B8%AD%E0%B8%99%E0%B9%81%E0%B8%81%E0%B9%88%E0%B8%99/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%AD.%E0%B8%9E%E0%B8%A5/%E0%B8%81%E0%B8%B2%E0%B8%AC%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B8%98%E0%B8%B8%E0%B9%8C/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%81%E0%B8%B2%E0%B8%AC%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B8%98%E0%B8%B8%E0%B9%8C');
            totalrow = 3
            GetBKS_All();
        }else if (startprovice == "ขอนแก่น" && endprovice == "นครนายก"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%82%E0%B8%AD%E0%B8%99%E0%B9%81%E0%B8%81%E0%B9%88%E0%B8%99/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%82%E0%B8%AD%E0%B8%99%E0%B9%81%E0%B8%81%E0%B9%88%E0%B8%99/%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%99%E0%B8%B2%E0%B8%A2%E0%B8%81/%E0%B8%88%E0%B8%B8%E0%B8%94%E0%B8%88%E0%B8%AD%E0%B8%94%20%E0%B8%95.%E0%B8%AB%E0%B8%B4%E0%B8%99%E0%B8%81%E0%B8%AD%E0%B8%87');
            totalrow = 1
            GetBKS_All();
        }else if (startprovice == "ขอนแก่น" && endprovice == "นครพนม"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%82%E0%B8%AD%E0%B8%99%E0%B9%81%E0%B8%81%E0%B9%88%E0%B8%99/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%AD.%E0%B8%9E%E0%B8%A5/%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%9E%E0%B8%99%E0%B8%A1/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%9E%E0%B8%99%E0%B8%A1');
            totalrow = 5
            GetBKS_All();
        }else if (startprovice == "ขอนแก่น" && endprovice == "นครราชสีมา"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%82%E0%B8%AD%E0%B8%99%E0%B9%81%E0%B8%81%E0%B9%88%E0%B8%99/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%82%E0%B8%AD%E0%B8%99%E0%B9%81%E0%B8%81%E0%B9%88%E0%B8%99/%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%AA%E0%B8%B5%E0%B8%A1%E0%B8%B2/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%AA%E0%B8%B5%E0%B8%A1%E0%B8%B2');
            totalrow = 1
            GetBKS_All();
        }else if (startprovice == "ขอนแก่น" && endprovice == "บึงกาฬ"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%82%E0%B8%AD%E0%B8%99%E0%B9%81%E0%B8%81%E0%B9%88%E0%B8%99/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%82%E0%B8%AD%E0%B8%99%E0%B9%81%E0%B8%81%E0%B9%88%E0%B8%99/%E0%B8%9A%E0%B8%B6%E0%B8%87%E0%B8%81%E0%B8%B2%E0%B8%AC/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%9A%E0%B8%B6%E0%B8%87%E0%B8%81%E0%B8%B2%E0%B8%AC');
            totalrow = 1
            GetBKS_All();
        }else if (startprovice == "ขอนแก่น" && endprovice == "ปทุมธานี"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%82%E0%B8%AD%E0%B8%99%E0%B9%81%E0%B8%81%E0%B9%88%E0%B8%99/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%82%E0%B8%AD%E0%B8%99%E0%B9%81%E0%B8%81%E0%B9%88%E0%B8%99/%E0%B8%9B%E0%B8%97%E0%B8%B8%E0%B8%A1%E0%B8%98%E0%B8%B2%E0%B8%99%E0%B8%B5/%E0%B8%88%E0%B8%B8%E0%B8%94%E0%B8%88%E0%B8%AD%E0%B8%94%E0%B8%99%E0%B8%A7%E0%B8%99%E0%B8%84%E0%B8%A3');
            totalrow = 1
            GetBKS_All();
        }else if (startprovice == "ขอนแก่น" && endprovice == "มหาสารคาม"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%82%E0%B8%AD%E0%B8%99%E0%B9%81%E0%B8%81%E0%B9%88%E0%B8%99/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%AD.%E0%B8%9E%E0%B8%A5/%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%84%E0%B8%B2%E0%B8%A1/%E0%B8%88%E0%B8%B8%E0%B8%94%E0%B8%88%E0%B8%AD%E0%B8%94%20%E0%B8%AD.%E0%B8%A7%E0%B8%B2%E0%B8%9B%E0%B8%B5%E0%B8%9B%E0%B8%97%E0%B8%B8%E0%B8%A1');
            totalrow = 1
            GetBKS_All();
        }else if (startprovice == "ขอนแก่น" && endprovice == "ร้อยเอ็ด"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%82%E0%B8%AD%E0%B8%99%E0%B9%81%E0%B8%81%E0%B9%88%E0%B8%99/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%AD.%E0%B8%9E%E0%B8%A5/%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%A2%E0%B9%80%E0%B8%AD%E0%B9%87%E0%B8%94/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%A2%E0%B9%80%E0%B8%AD%E0%B9%87%E0%B8%94');
            totalrow = 1
            GetBKS_All();
        }else if (startprovice == "ขอนแก่น" && endprovice == "สกลนคร"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%82%E0%B8%AD%E0%B8%99%E0%B9%81%E0%B8%81%E0%B9%88%E0%B8%99/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%AD.%E0%B8%9E%E0%B8%A5/%E0%B8%AA%E0%B8%81%E0%B8%A5%E0%B8%99%E0%B8%84%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%AA%E0%B8%81%E0%B8%A5%E0%B8%99%E0%B8%84%E0%B8%A3');
            totalrow = 8
            GetBKS_All();
        }else if (startprovice == "ขอนแก่น" && endprovice == "สระบุรี"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%82%E0%B8%AD%E0%B8%99%E0%B9%81%E0%B8%81%E0%B9%88%E0%B8%99/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%82%E0%B8%AD%E0%B8%99%E0%B9%81%E0%B8%81%E0%B9%88%E0%B8%99/%E0%B8%AA%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%B8%E0%B8%A3%E0%B8%B5/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%AA%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%B8%E0%B8%A3%E0%B8%B5');
            totalrow = 1
            GetBKS_All();
        }else if (startprovice == "ขอนแก่น" && endprovice == "หนองคาย"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%82%E0%B8%AD%E0%B8%99%E0%B9%81%E0%B8%81%E0%B9%88%E0%B8%99/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%AD.%E0%B8%9E%E0%B8%A5/%E0%B8%AB%E0%B8%99%E0%B8%AD%E0%B8%87%E0%B8%84%E0%B8%B2%E0%B8%A2/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%AB%E0%B8%99%E0%B8%AD%E0%B8%87%E0%B8%84%E0%B8%B2%E0%B8%A2');
            totalrow = 2
            GetBKS_All();
        }else if (startprovice == "ขอนแก่น" && endprovice == "หนองบัวลำภู"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%82%E0%B8%AD%E0%B8%99%E0%B9%81%E0%B8%81%E0%B9%88%E0%B8%99/%E0%B8%88%E0%B8%B8%E0%B8%94%E0%B8%88%E0%B8%AD%E0%B8%94%E0%B8%A8%E0%B8%A3%E0%B8%B5%E0%B8%9A%E0%B8%B8%E0%B8%8D%E0%B9%80%E0%B8%A3%E0%B8%B7%E0%B8%AD%E0%B8%87/%E0%B8%AB%E0%B8%99%E0%B8%AD%E0%B8%87%E0%B8%9A%E0%B8%B1%E0%B8%A7%E0%B8%A5%E0%B8%B3%E0%B8%A0%E0%B8%B9/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%AB%E0%B8%99%E0%B8%AD%E0%B8%87%E0%B8%9A%E0%B8%B1%E0%B8%A7%E0%B8%A5%E0%B8%B3%E0%B8%A0%E0%B8%B9');
            totalrow = 5
            GetBKS_All();
        }else if (startprovice == "ขอนแก่น" && endprovice == "อยุธยา"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%82%E0%B8%AD%E0%B8%99%E0%B9%81%E0%B8%81%E0%B9%88%E0%B8%99/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%82%E0%B8%AD%E0%B8%99%E0%B9%81%E0%B8%81%E0%B9%88%E0%B8%99/%E0%B8%AD%E0%B8%A2%E0%B8%B8%E0%B8%98%E0%B8%A2%E0%B8%B2/%E0%B8%97%E0%B9%88%E0%B8%B2%E0%B8%A7%E0%B8%B1%E0%B8%87%E0%B8%99%E0%B9%89%E0%B8%AD%E0%B8%A2');
            totalrow = 1
            GetBKS_All();
        }else if (startprovice == "ขอนแก่น" && endprovice == "อุดรธานี"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%82%E0%B8%AD%E0%B8%99%E0%B9%81%E0%B8%81%E0%B9%88%E0%B8%99/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%82%E0%B8%AD%E0%B8%99%E0%B9%81%E0%B8%81%E0%B9%88%E0%B8%99/%E0%B8%AD%E0%B8%B8%E0%B8%94%E0%B8%A3%E0%B8%98%E0%B8%B2%E0%B8%99%E0%B8%B5/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%AD%E0%B8%B8%E0%B8%94%E0%B8%A3%E0%B8%98%E0%B8%B2%E0%B8%99%E0%B8%B5');
            totalrow = 2
            GetBKS_All();
        }else if (startprovice == "ขอนแก่น" && endprovice == "เลย"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%82%E0%B8%AD%E0%B8%99%E0%B9%81%E0%B8%81%E0%B9%88%E0%B8%99/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%AD.%E0%B8%8A%E0%B8%B8%E0%B8%A1%E0%B9%81%E0%B8%9E/%E0%B9%80%E0%B8%A5%E0%B8%A2/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%88%E0%B8%B1%E0%B8%87%E0%B8%AB%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B9%80%E0%B8%A5%E0%B8%A2');
            totalrow = 3
            GetBKS_All();
        }else if (startprovice == "จันทบุรี" && endprovice == "กรุงเทพมหานคร"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%88%E0%B8%B1%E0%B8%99%E0%B8%97%E0%B8%9A%E0%B8%B8%E0%B8%A3%E0%B8%B5/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%88%E0%B8%B1%E0%B8%99%E0%B8%97%E0%B8%9A%E0%B8%B8%E0%B8%A3%E0%B8%B5/%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF%20(%E0%B8%AB%E0%B8%A1%E0%B8%AD%E0%B8%8A%E0%B8%B4%E0%B8%95%202)');
            totalrow = 1
            GetBKS_All();
        }else if (startprovice == "จันทบุรี" && endprovice == "จันทบุรี"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%88%E0%B8%B1%E0%B8%99%E0%B8%97%E0%B8%9A%E0%B8%B8%E0%B8%A3%E0%B8%B5/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%88%E0%B8%B1%E0%B8%99%E0%B8%97%E0%B8%9A%E0%B8%B8%E0%B8%A3%E0%B8%B5/%E0%B8%88%E0%B8%B1%E0%B8%99%E0%B8%97%E0%B8%9A%E0%B8%B8%E0%B8%A3%E0%B8%B5/%E0%B8%88%E0%B8%B8%E0%B8%94%E0%B8%88%E0%B8%AD%E0%B8%94%20%E0%B9%81%E0%B8%A2%E0%B8%81%E0%B9%80%E0%B8%82%E0%B8%B2%E0%B8%94%E0%B8%B4%E0%B8%99');
            totalrow = 2
            GetBKS_All();
        }else if (startprovice == "จันทบุรี" && endprovice == "ตราด"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%88%E0%B8%B1%E0%B8%99%E0%B8%97%E0%B8%9A%E0%B8%B8%E0%B8%A3%E0%B8%B5/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%88%E0%B8%B1%E0%B8%99%E0%B8%97%E0%B8%9A%E0%B8%B8%E0%B8%A3%E0%B8%B5/%E0%B8%95%E0%B8%A3%E0%B8%B2%E0%B8%94/%E0%B8%88%E0%B8%B8%E0%B8%94%E0%B8%88%E0%B8%AD%E0%B8%94%E0%B8%97%E0%B9%88%E0%B8%B2%E0%B9%80%E0%B8%A3%E0%B8%B7%E0%B8%AD%E0%B8%AD%E0%B9%88%E0%B8%B2%E0%B8%A7%E0%B8%98%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%8A%E0%B8%B2%E0%B8%95%E0%B8%B4');
            totalrow = 1
            GetBKS_All();
        }else if (startprovice == "จันทบุรี" && endprovice == "ระยอง"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%88%E0%B8%B1%E0%B8%99%E0%B8%97%E0%B8%9A%E0%B8%B8%E0%B8%A3%E0%B8%B5/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%88%E0%B8%B1%E0%B8%99%E0%B8%97%E0%B8%9A%E0%B8%B8%E0%B8%A3%E0%B8%B5/%E0%B8%A3%E0%B8%B0%E0%B8%A2%E0%B8%AD%E0%B8%87/%E0%B8%97%E0%B9%88%E0%B8%B2%20%E0%B8%AD.%E0%B9%81%E0%B8%81%E0%B8%A5%E0%B8%87');
            totalrow = 2
            GetBKS_All();
        }else if (startprovice == "ชัยนาท" && endprovice == "กำแพงเพชร"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%8A%E0%B8%B1%E0%B8%A2%E0%B8%99%E0%B8%B2%E0%B8%97/%E0%B8%88%E0%B8%B8%E0%B8%94%E0%B8%88%E0%B8%AD%E0%B8%94%20%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B9%81%E0%B8%A2%E0%B8%81%E0%B9%80%E0%B8%82%E0%B9%89%E0%B8%B2%20%E0%B8%88.%E0%B8%8A%E0%B8%B1%E0%B8%A2%E0%B8%99%E0%B8%B2%E0%B8%97/%E0%B8%81%E0%B8%B3%E0%B9%81%E0%B8%9E%E0%B8%87%E0%B9%80%E0%B8%9E%E0%B8%8A%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%81%E0%B8%B3%E0%B9%81%E0%B8%9E%E0%B8%87%E0%B9%80%E0%B8%9E%E0%B8%8A%E0%B8%A3');
            totalrow = 2
            GetBKS_All();
        }else if (startprovice == "ชัยนาท" && endprovice == "ตาก"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%8A%E0%B8%B1%E0%B8%A2%E0%B8%99%E0%B8%B2%E0%B8%97/%E0%B8%88%E0%B8%B8%E0%B8%94%E0%B8%88%E0%B8%AD%E0%B8%94%20%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B9%81%E0%B8%A2%E0%B8%81%E0%B9%80%E0%B8%82%E0%B9%89%E0%B8%B2%20%E0%B8%88.%E0%B8%8A%E0%B8%B1%E0%B8%A2%E0%B8%99%E0%B8%B2%E0%B8%97/%E0%B8%95%E0%B8%B2%E0%B8%81/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%95%E0%B8%B2%E0%B8%81');
            totalrow = 3
            GetBKS_All();
        }else if (startprovice == "ชัยนาท" && endprovice == "พะเยา"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%8A%E0%B8%B1%E0%B8%A2%E0%B8%99%E0%B8%B2%E0%B8%97/%E0%B8%88%E0%B8%B8%E0%B8%94%E0%B8%88%E0%B8%AD%E0%B8%94%20%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B9%81%E0%B8%A2%E0%B8%81%E0%B9%80%E0%B8%82%E0%B9%89%E0%B8%B2%20%E0%B8%88.%E0%B8%8A%E0%B8%B1%E0%B8%A2%E0%B8%99%E0%B8%B2%E0%B8%97/%E0%B8%9E%E0%B8%B0%E0%B9%80%E0%B8%A2%E0%B8%B2/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%9E%E0%B8%B0%E0%B9%80%E0%B8%A2%E0%B8%B2');
            totalrow = 5
            GetBKS_All();
        }else if (startprovice == "ชัยนาท" && endprovice == "พิจิตร"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%8A%E0%B8%B1%E0%B8%A2%E0%B8%99%E0%B8%B2%E0%B8%97/%E0%B8%88%E0%B8%B8%E0%B8%94%E0%B8%88%E0%B8%AD%E0%B8%94%20%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B9%81%E0%B8%A2%E0%B8%81%E0%B9%80%E0%B8%82%E0%B9%89%E0%B8%B2%20%E0%B8%88.%E0%B8%8A%E0%B8%B1%E0%B8%A2%E0%B8%99%E0%B8%B2%E0%B8%97/%E0%B8%9E%E0%B8%B4%E0%B8%88%E0%B8%B4%E0%B8%95%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%A7%E0%B8%8A%E0%B8%B4%E0%B8%A3%E0%B8%9A%E0%B8%B2%E0%B8%A3%E0%B8%A1%E0%B8%B5%20(%E0%B8%9B%E0%B8%A5%E0%B8%A7%E0%B8%81%E0%B8%AA%E0%B8%B9%E0%B8%87)');
            totalrow = 3 
            GetBKS_All();
        }else if (startprovice == "ชัยนาท" && endprovice == "พิษณุโลก"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%8A%E0%B8%B1%E0%B8%A2%E0%B8%99%E0%B8%B2%E0%B8%97/%E0%B8%88%E0%B8%B8%E0%B8%94%E0%B8%88%E0%B8%AD%E0%B8%94%20%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B9%81%E0%B8%A2%E0%B8%81%E0%B9%80%E0%B8%82%E0%B9%89%E0%B8%B2%20%E0%B8%88.%E0%B8%8A%E0%B8%B1%E0%B8%A2%E0%B8%99%E0%B8%B2%E0%B8%97/%E0%B8%9E%E0%B8%B4%E0%B8%A9%E0%B8%93%E0%B8%B8%E0%B9%82%E0%B8%A5%E0%B8%81/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88%20%E0%B8%9E%E0%B8%B4%E0%B8%A9%E0%B8%93%E0%B8%B8%E0%B9%82%E0%B8%A5%E0%B8%81');
            totalrow = 7
            GetBKS_All();
        }else if (startprovice == "ชัยนาท" && endprovice == "ลำปาง"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%8A%E0%B8%B1%E0%B8%A2%E0%B8%99%E0%B8%B2%E0%B8%97/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%8A%E0%B8%B1%E0%B8%A2%E0%B8%99%E0%B8%B2%E0%B8%97/%E0%B8%A5%E0%B8%B3%E0%B8%9B%E0%B8%B2%E0%B8%87/%E0%B8%88%E0%B8%B8%E0%B8%94%E0%B8%88%E0%B8%AD%E0%B8%94%20%E0%B8%AD.%E0%B9%80%E0%B8%96%E0%B8%B4%E0%B8%99');
            totalrow = 7
            GetBKS_All();
        }else if (startprovice == "ชัยนาท" && endprovice == "ลำพูน"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%8A%E0%B8%B1%E0%B8%A2%E0%B8%99%E0%B8%B2%E0%B8%97/%E0%B8%88%E0%B8%B8%E0%B8%94%E0%B8%88%E0%B8%AD%E0%B8%94%20%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B9%81%E0%B8%A2%E0%B8%81%E0%B9%80%E0%B8%82%E0%B9%89%E0%B8%B2%20%E0%B8%88.%E0%B8%8A%E0%B8%B1%E0%B8%A2%E0%B8%99%E0%B8%B2%E0%B8%97/%E0%B8%A5%E0%B8%B3%E0%B8%9E%E0%B8%B9%E0%B8%99/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%A5%E0%B8%B3%E0%B8%9E%E0%B8%B9%E0%B8%99');
            totalrow = 2
            GetBKS_All();
        }else if (startprovice == "ชัยนาท" && endprovice == "สุโขทัย"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%8A%E0%B8%B1%E0%B8%A2%E0%B8%99%E0%B8%B2%E0%B8%97/%E0%B8%88%E0%B8%B8%E0%B8%94%E0%B8%88%E0%B8%AD%E0%B8%94%20%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B9%81%E0%B8%A2%E0%B8%81%E0%B9%80%E0%B8%82%E0%B9%89%E0%B8%B2%20%E0%B8%88.%E0%B8%8A%E0%B8%B1%E0%B8%A2%E0%B8%99%E0%B8%B2%E0%B8%97/%E0%B8%AA%E0%B8%B8%E0%B9%82%E0%B8%82%E0%B8%97%E0%B8%B1%E0%B8%A2/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%AA%E0%B8%B8%E0%B9%82%E0%B8%82%E0%B8%97%E0%B8%B1%E0%B8%A2');
            totalrow = 8
            GetBKS_All();
        }else if (startprovice == "ชัยนาท" && endprovice == "อุตรดิตถ์"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%8A%E0%B8%B1%E0%B8%A2%E0%B8%99%E0%B8%B2%E0%B8%97/%E0%B8%88%E0%B8%B8%E0%B8%94%E0%B8%88%E0%B8%AD%E0%B8%94%20%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B9%81%E0%B8%A2%E0%B8%81%E0%B9%80%E0%B8%82%E0%B9%89%E0%B8%B2%20%E0%B8%88.%E0%B8%8A%E0%B8%B1%E0%B8%A2%E0%B8%99%E0%B8%B2%E0%B8%97/%E0%B8%AD%E0%B8%B8%E0%B8%95%E0%B8%A3%E0%B8%94%E0%B8%B4%E0%B8%95%E0%B8%96%E0%B9%8C/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%AD%E0%B8%B8%E0%B8%95%E0%B8%A3%E0%B8%94%E0%B8%B4%E0%B8%95%E0%B8%96%E0%B9%8C');
            totalrow = 4
            GetBKS_All();
        }else if (startprovice == "ชัยนาท" && endprovice == "เชียงราย"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%8A%E0%B8%B1%E0%B8%A2%E0%B8%99%E0%B8%B2%E0%B8%97/%E0%B8%88%E0%B8%B8%E0%B8%94%E0%B8%88%E0%B8%AD%E0%B8%94%20%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B9%81%E0%B8%A2%E0%B8%81%E0%B9%80%E0%B8%82%E0%B9%89%E0%B8%B2%20%E0%B8%88.%E0%B8%8A%E0%B8%B1%E0%B8%A2%E0%B8%99%E0%B8%B2%E0%B8%97/%E0%B9%80%E0%B8%8A%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B8%A3%E0%B8%B2%E0%B8%A2/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B9%80%E0%B8%8A%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B8%A3%E0%B8%B2%E0%B8%A2');
            totalrow = 5
            GetBKS_All();
        }else if (startprovice == "ชัยนาท" && endprovice == "แพร่"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%8A%E0%B8%B1%E0%B8%A2%E0%B8%99%E0%B8%B2%E0%B8%97/%E0%B8%88%E0%B8%B8%E0%B8%94%E0%B8%88%E0%B8%AD%E0%B8%94%20%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B9%81%E0%B8%A2%E0%B8%81%E0%B9%80%E0%B8%82%E0%B9%89%E0%B8%B2%20%E0%B8%88.%E0%B8%8A%E0%B8%B1%E0%B8%A2%E0%B8%99%E0%B8%B2%E0%B8%97/%E0%B9%81%E0%B8%9E%E0%B8%A3%E0%B9%88/%E0%B8%88%E0%B8%B8%E0%B8%94%E0%B8%88%E0%B8%AD%E0%B8%94%E0%B8%A7%E0%B8%B1%E0%B8%87%E0%B8%8A%E0%B8%B4%E0%B9%89%E0%B8%99');
            totalrow = 1
            GetBKS_All();
        }else if (startprovice == "ชัยภูมิ" && endprovice == "กรุงเทพมหานคร"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%8A%E0%B8%B1%E0%B8%A2%E0%B8%A0%E0%B8%B9%E0%B8%A1%E0%B8%B4/%E0%B8%88%E0%B8%B8%E0%B8%94%E0%B8%88%E0%B8%AD%E0%B8%94%20%E0%B8%AD.%E0%B8%AB%E0%B8%99%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%A3%E0%B8%B7%E0%B8%AD/%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF%20(%E0%B8%AB%E0%B8%A1%E0%B8%AD%E0%B8%8A%E0%B8%B4%E0%B8%95%202)');
            totalrow = 5
            GetBKS_All();
        }else if (startprovice == "ชัยภูมิ" && endprovice == "หนองบัวลำภู"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%8A%E0%B8%B1%E0%B8%A2%E0%B8%A0%E0%B8%B9%E0%B8%A1%E0%B8%B4/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%8A%E0%B8%B1%E0%B8%A2%E0%B8%A0%E0%B8%B9%E0%B8%A1%E0%B8%B4/%E0%B8%AB%E0%B8%99%E0%B8%AD%E0%B8%87%E0%B8%9A%E0%B8%B1%E0%B8%A7%E0%B8%A5%E0%B8%B3%E0%B8%A0%E0%B8%B9/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%AB%E0%B8%99%E0%B8%AD%E0%B8%87%E0%B8%9A%E0%B8%B1%E0%B8%A7%E0%B8%A5%E0%B8%B3%E0%B8%A0%E0%B8%B9');
            totalrow = 5
            GetBKS_All();
        }else if (startprovice == "ชัยภูมิ" && endprovice == "เลย"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%8A%E0%B8%B1%E0%B8%A2%E0%B8%A0%E0%B8%B9%E0%B8%A1%E0%B8%B4/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%8A%E0%B8%B1%E0%B8%A2%E0%B8%A0%E0%B8%B9%E0%B8%A1%E0%B8%B4/%E0%B9%80%E0%B8%A5%E0%B8%A2/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%88%E0%B8%B1%E0%B8%87%E0%B8%AB%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B9%80%E0%B8%A5%E0%B8%A2');
            totalrow = 3
            GetBKS_All();
        }else if (startprovice == "ชุมพร" && endprovice == "กระบี่"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%8A%E0%B8%B8%E0%B8%A1%E0%B8%9E%E0%B8%A3/%E0%B8%88%E0%B8%B8%E0%B8%94%E0%B8%88%E0%B8%AD%E0%B8%94%E0%B8%AA%E0%B8%B5%E0%B9%88%E0%B9%81%E0%B8%A2%E0%B8%81%E0%B8%9B%E0%B8%90%E0%B8%A1%E0%B8%9E%E0%B8%A3/%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%B5%E0%B9%88/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%B5%E0%B9%88');
            totalrow = 3
            GetBKS_All();
        }else if (startprovice == "ชุมพร" && endprovice == "กรุงเทพมหานคร"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%8A%E0%B8%B8%E0%B8%A1%E0%B8%9E%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%87%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88/%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF%20(%E0%B8%AB%E0%B8%A1%E0%B8%AD%E0%B8%8A%E0%B8%B4%E0%B8%95%202)');
            totalrow = 3
            GetBKS_All();
        }else if (startprovice == "ชุมพร" && endprovice == "ตรัง"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%8A%E0%B8%B8%E0%B8%A1%E0%B8%9E%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%87%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88/%E0%B8%95%E0%B8%A3%E0%B8%B1%E0%B8%87/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%95%E0%B8%A3%E0%B8%B1%E0%B8%87');
            totalrow = 5
            GetBKS_All();
        }else if (startprovice == "ชุมพร" && endprovice == "นครศรีธรรมราช"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%8A%E0%B8%B8%E0%B8%A1%E0%B8%9E%E0%B8%A3/%E0%B8%88%E0%B8%B8%E0%B8%94%E0%B8%88%E0%B8%AD%E0%B8%94%E0%B8%9A%E0%B8%82%E0%B8%AA.%E0%B8%97%E0%B9%88%E0%B8%B2%E0%B9%81%E0%B8%8B%E0%B8%B0/%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%A8%E0%B8%A3%E0%B8%B5%E0%B8%98%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%A3%E0%B8%B2%E0%B8%8A/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%A8%E0%B8%A3%E0%B8%B5%E0%B8%98%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%A3%E0%B8%B2%E0%B8%8A');
            totalrow = 3
            GetBKS_All();
        }else if (startprovice == "ชุมพร" && endprovice == "นราธิวาส"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%8A%E0%B8%B8%E0%B8%A1%E0%B8%9E%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%87%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88/%E0%B8%99%E0%B8%A3%E0%B8%B2%E0%B8%98%E0%B8%B4%E0%B8%A7%E0%B8%B2%E0%B8%AA/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%99%E0%B8%A3%E0%B8%B2%E0%B8%98%E0%B8%B4%E0%B8%A7%E0%B8%B2%E0%B8%AA');
            totalrow = 1
            GetBKS_All();
        }else if (startprovice == "ชุมพร" && endprovice == "ปัตตานี"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%8A%E0%B8%B8%E0%B8%A1%E0%B8%9E%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%87%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88/%E0%B8%9B%E0%B8%B1%E0%B8%95%E0%B8%95%E0%B8%B2%E0%B8%99%E0%B8%B5/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%9B%E0%B8%B1%E0%B8%95%E0%B8%95%E0%B8%B2%E0%B8%99%E0%B8%B5');
            totalrow = 1
            GetBKS_All();
        }else if (startprovice == "ชุมพร" && endprovice == "พังงา"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%8A%E0%B8%B8%E0%B8%A1%E0%B8%9E%E0%B8%A3/%E0%B8%88%E0%B8%B8%E0%B8%94%E0%B8%88%E0%B8%AD%E0%B8%94%E0%B8%AA%E0%B8%B5%E0%B9%88%E0%B9%81%E0%B8%A2%E0%B8%81%E0%B8%9B%E0%B8%90%E0%B8%A1%E0%B8%9E%E0%B8%A3/%E0%B8%9E%E0%B8%B1%E0%B8%87%E0%B8%87%E0%B8%B2/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%9E%E0%B8%B1%E0%B8%87%E0%B8%87%E0%B8%B2');
            totalrow = 8
            GetBKS_All();
        }else if (startprovice == "ชุมพร" && endprovice == "พัทลุง"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%8A%E0%B8%B8%E0%B8%A1%E0%B8%9E%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%87%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88/%E0%B8%9E%E0%B8%B1%E0%B8%97%E0%B8%A5%E0%B8%B8%E0%B8%87/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%9E%E0%B8%B1%E0%B8%97%E0%B8%A5%E0%B8%B8%E0%B8%87');
            totalrow = 2
            GetBKS_All();
        }else if (startprovice == "ชุมพร" && endprovice == "ภูเก็ต"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%8A%E0%B8%B8%E0%B8%A1%E0%B8%9E%E0%B8%A3/%E0%B8%88%E0%B8%B8%E0%B8%94%E0%B8%88%E0%B8%AD%E0%B8%94%E0%B8%AA%E0%B8%B5%E0%B9%88%E0%B9%81%E0%B8%A2%E0%B8%81%E0%B8%9B%E0%B8%90%E0%B8%A1%E0%B8%9E%E0%B8%A3/%E0%B8%A0%E0%B8%B9%E0%B9%80%E0%B8%81%E0%B9%87%E0%B8%95/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%A0%E0%B8%B9%E0%B9%80%E0%B8%81%E0%B9%87%E0%B8%95');
            totalrow = 6
            GetBKS_All();
        }else if (startprovice == "ชุมพร" && endprovice == "ระนอง"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%8A%E0%B8%B8%E0%B8%A1%E0%B8%9E%E0%B8%A3/%E0%B8%88%E0%B8%B8%E0%B8%94%E0%B8%88%E0%B8%AD%E0%B8%94%E0%B8%AA%E0%B8%B5%E0%B9%88%E0%B9%81%E0%B8%A2%E0%B8%81%E0%B8%9B%E0%B8%90%E0%B8%A1%E0%B8%9E%E0%B8%A3/%E0%B8%A3%E0%B8%B0%E0%B8%99%E0%B8%AD%E0%B8%87/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%A3%E0%B8%B0%E0%B8%99%E0%B8%AD%E0%B8%87');
            totalrow = 1
            GetBKS_All();
        }else if (startprovice == "ชุมพร" && endprovice == "สงขลา"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%8A%E0%B8%B8%E0%B8%A1%E0%B8%9E%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%87%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88/%E0%B8%AA%E0%B8%87%E0%B8%82%E0%B8%A5%E0%B8%B2/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%AA%E0%B8%87%E0%B8%82%E0%B8%A5%E0%B8%B2');
            totalrow = 2
            GetBKS_All();
        }else if (startprovice == "ชุมพร" && endprovice == "สตูล"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%8A%E0%B8%B8%E0%B8%A1%E0%B8%9E%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%87%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88/%E0%B8%AA%E0%B8%95%E0%B8%B9%E0%B8%A5/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%AA%E0%B8%95%E0%B8%B9%E0%B8%A5');
            totalrow = 4
            GetBKS_All();
        }else if (startprovice == "ชุมพร" && endprovice == "สมุทรสงคราม"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%8A%E0%B8%B8%E0%B8%A1%E0%B8%9E%E0%B8%A3/%E0%B8%88%E0%B8%B8%E0%B8%94%E0%B8%88%E0%B8%AD%E0%B8%94%E0%B8%9A%E0%B8%82%E0%B8%AA.%E0%B8%97%E0%B9%88%E0%B8%B2%E0%B9%81%E0%B8%8B%E0%B8%B0/%E0%B8%AA%E0%B8%A1%E0%B8%B8%E0%B8%97%E0%B8%A3%E0%B8%AA%E0%B8%87%E0%B8%84%E0%B8%A3%E0%B8%B2%E0%B8%A1/%E0%B8%88%E0%B8%B8%E0%B8%94%E0%B8%88%E0%B8%AD%E0%B8%94%E0%B9%81%E0%B8%A2%E0%B8%81%E0%B9%81%E0%B8%A1%E0%B9%88%E0%B8%81%E0%B8%A5%E0%B8%AD%E0%B8%87');
            totalrow = 1
            GetBKS_All();
        }else if (startprovice == "ชุมพร" && endprovice == "สมุทรสาคร"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%8A%E0%B8%B8%E0%B8%A1%E0%B8%9E%E0%B8%A3/%E0%B8%88%E0%B8%B8%E0%B8%94%E0%B8%88%E0%B8%AD%E0%B8%94%E0%B8%9A%E0%B8%82%E0%B8%AA.%E0%B8%97%E0%B9%88%E0%B8%B2%E0%B9%81%E0%B8%8B%E0%B8%B0/%E0%B8%AA%E0%B8%A1%E0%B8%B8%E0%B8%97%E0%B8%A3%E0%B8%AA%E0%B8%B2%E0%B8%84%E0%B8%A3/%E0%B8%88%E0%B8%B8%E0%B8%94%E0%B8%88%E0%B8%AD%E0%B8%94%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%8A%E0%B8%B1%E0%B8%A2');
            totalrow = 1
            GetBKS_All();
        }else if (startprovice == "ชุมพร" && endprovice == "สุราษฎร์ธานี"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%8A%E0%B8%B8%E0%B8%A1%E0%B8%9E%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%87%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88/%E0%B8%AA%E0%B8%B8%E0%B8%A3%E0%B8%B2%E0%B8%A9%E0%B8%8E%E0%B8%A3%E0%B9%8C%E0%B8%98%E0%B8%B2%E0%B8%99%E0%B8%B5/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%AA%E0%B8%B8%E0%B8%A3%E0%B8%B2%E0%B8%A9%E0%B8%8E%E0%B8%A3%E0%B9%8C%E0%B8%98%E0%B8%B2%E0%B8%99%E0%B8%B5');
            totalrow = 8
            GetBKS_All();
        }else if (startprovice == "ชุมพร" && endprovice == "เพชรบุรี"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%8A%E0%B8%B8%E0%B8%A1%E0%B8%9E%E0%B8%A3/%E0%B8%88%E0%B8%B8%E0%B8%94%E0%B8%88%E0%B8%AD%E0%B8%94%E0%B8%9A%E0%B8%82%E0%B8%AA.%E0%B8%97%E0%B9%88%E0%B8%B2%E0%B9%81%E0%B8%8B%E0%B8%B0/%E0%B9%80%E0%B8%9E%E0%B8%8A%E0%B8%A3%E0%B8%9A%E0%B8%B8%E0%B8%A3%E0%B8%B5/%E0%B8%88%E0%B8%B8%E0%B8%94%E0%B8%88%E0%B8%AD%E0%B8%94%E0%B9%81%E0%B8%A2%E0%B8%81%E0%B8%A7%E0%B8%B1%E0%B8%87%E0%B8%A1%E0%B8%B0%E0%B8%99%E0%B8%B2%E0%B8%A7');
            totalrow = 1
            GetBKS_All();
        }else if (startprovice == "ตรัง" && endprovice == "กรุงเทพมหานคร"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%95%E0%B8%A3%E0%B8%B1%E0%B8%87/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%95%E0%B8%A3%E0%B8%B1%E0%B8%87/%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF%20(%E0%B8%AB%E0%B8%A1%E0%B8%AD%E0%B8%8A%E0%B8%B4%E0%B8%95%202)');
            totalrow = 1
            GetBKS_All();
        }else if (startprovice == "ตรัง" && endprovice == "ชุมพร"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%95%E0%B8%A3%E0%B8%B1%E0%B8%87/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%95%E0%B8%A3%E0%B8%B1%E0%B8%87/%E0%B8%8A%E0%B8%B8%E0%B8%A1%E0%B8%9E%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%87%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88');
            totalrow = 4
            GetBKS_All();
        }else if (startprovice == "ตรัง" && endprovice == "นครศรีธรรมราช"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%95%E0%B8%A3%E0%B8%B1%E0%B8%87/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%95%E0%B8%A3%E0%B8%B1%E0%B8%87/%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%A8%E0%B8%A3%E0%B8%B5%E0%B8%98%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%A3%E0%B8%B2%E0%B8%8A/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%AD.%E0%B8%97%E0%B8%B8%E0%B9%88%E0%B8%87%E0%B8%AA%E0%B8%87');
            totalrow = 4
            GetBKS_All();
        }else if (startprovice == "ตรัง" && endprovice == "ประจวบคีรีขันธ์"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%95%E0%B8%A3%E0%B8%B1%E0%B8%87/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%95%E0%B8%A3%E0%B8%B1%E0%B8%87/%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%88%E0%B8%A7%E0%B8%9A%E0%B8%84%E0%B8%B5%E0%B8%A3%E0%B8%B5%E0%B8%82%E0%B8%B1%E0%B8%99%E0%B8%98%E0%B9%8C/%E0%B8%88%E0%B8%B8%E0%B8%94%E0%B8%88%E0%B8%AD%E0%B8%94%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%88%E0%B8%A7%E0%B8%9A%E0%B8%84%E0%B8%B5%E0%B8%A3%E0%B8%B5%E0%B8%82%E0%B8%B1%E0%B8%99%E0%B8%98%E0%B9%8C');
            totalrow = 4
            GetBKS_All();
        }else if (startprovice == "ตรัง" && endprovice == "สตูล"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%95%E0%B8%A3%E0%B8%B1%E0%B8%87/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%95%E0%B8%A3%E0%B8%B1%E0%B8%87/%E0%B8%AA%E0%B8%95%E0%B8%B9%E0%B8%A5/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%AA%E0%B8%95%E0%B8%B9%E0%B8%A5');
            totalrow = 4
            GetBKS_All();
        }else if (startprovice == "ตรัง" && endprovice == "สมุทรสงคราม"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%95%E0%B8%A3%E0%B8%B1%E0%B8%87/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%95%E0%B8%A3%E0%B8%B1%E0%B8%87/%E0%B8%AA%E0%B8%A1%E0%B8%B8%E0%B8%97%E0%B8%A3%E0%B8%AA%E0%B8%87%E0%B8%84%E0%B8%A3%E0%B8%B2%E0%B8%A1/%E0%B8%88%E0%B8%B8%E0%B8%94%E0%B8%88%E0%B8%AD%E0%B8%94%E0%B9%81%E0%B8%A2%E0%B8%81%E0%B9%81%E0%B8%A1%E0%B9%88%E0%B8%81%E0%B8%A5%E0%B8%AD%E0%B8%87');
            totalrow = 4
            GetBKS_All();
        }else if (startprovice == "ตรัง" && endprovice == "สมุทรสาคร"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%95%E0%B8%A3%E0%B8%B1%E0%B8%87/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%95%E0%B8%A3%E0%B8%B1%E0%B8%87/%E0%B8%AA%E0%B8%A1%E0%B8%B8%E0%B8%97%E0%B8%A3%E0%B8%AA%E0%B8%B2%E0%B8%84%E0%B8%A3/%E0%B8%88%E0%B8%B8%E0%B8%94%E0%B8%88%E0%B8%AD%E0%B8%94%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%8A%E0%B8%B1%E0%B8%A2');
            totalrow = 4
            GetBKS_All();
        }else if (startprovice == "ตรัง" && endprovice == "สุราษฎร์ธานี"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%95%E0%B8%A3%E0%B8%B1%E0%B8%87/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%95%E0%B8%A3%E0%B8%B1%E0%B8%87/%E0%B8%AA%E0%B8%B8%E0%B8%A3%E0%B8%B2%E0%B8%A9%E0%B8%8E%E0%B8%A3%E0%B9%8C%E0%B8%98%E0%B8%B2%E0%B8%99%E0%B8%B5/%E0%B8%AA%E0%B8%AB%E0%B8%81%E0%B8%A3%E0%B8%93%E0%B9%8C%E0%B8%AA%E0%B8%B8%E0%B8%A3%E0%B8%B2%E0%B8%A9%E0%B8%8E%E0%B8%A3%E0%B9%8C');
            totalrow = 4
            GetBKS_All();
        }else if (startprovice == "ตรัง" && endprovice == "เพชรบุรี"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%95%E0%B8%A3%E0%B8%B1%E0%B8%87/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%95%E0%B8%A3%E0%B8%B1%E0%B8%87/%E0%B9%80%E0%B8%9E%E0%B8%8A%E0%B8%A3%E0%B8%9A%E0%B8%B8%E0%B8%A3%E0%B8%B5/%E0%B8%88%E0%B8%B8%E0%B8%94%E0%B8%88%E0%B8%AD%E0%B8%94%E0%B9%81%E0%B8%A2%E0%B8%81%E0%B8%A7%E0%B8%B1%E0%B8%87%E0%B8%A1%E0%B8%B0%E0%B8%99%E0%B8%B2%E0%B8%A7');
            totalrow = 4
            GetBKS_All();
        }else if (startprovice == "ตราด" && endprovice == "กรุงเทพมหานคร"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%95%E0%B8%A3%E0%B8%B2%E0%B8%94/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%95%E0%B8%A3%E0%B8%B2%E0%B8%94/%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF%20(%E0%B8%AB%E0%B8%A1%E0%B8%AD%E0%B8%8A%E0%B8%B4%E0%B8%95%202)');
            totalrow = 3
            GetBKS_All();
        }else if (startprovice == "ตราด" && endprovice == "จันทบุรี"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%95%E0%B8%A3%E0%B8%B2%E0%B8%94/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%95%E0%B8%A3%E0%B8%B2%E0%B8%94/%E0%B8%88%E0%B8%B1%E0%B8%99%E0%B8%97%E0%B8%9A%E0%B8%B8%E0%B8%A3%E0%B8%B5/%E0%B8%88%E0%B8%B8%E0%B8%94%E0%B8%88%E0%B8%AD%E0%B8%94%20%E0%B8%95%E0%B8%A5%E0%B8%B2%E0%B8%94%E0%B8%9E%E0%B8%A5%E0%B8%B1%E0%B8%9A%E0%B8%9E%E0%B8%A5%E0%B8%B2');
            totalrow = 3
            GetBKS_All();
        }else if (startprovice == "ตราด" && endprovice == "ระยอง"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%95%E0%B8%A3%E0%B8%B2%E0%B8%94/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%95%E0%B8%A3%E0%B8%B2%E0%B8%94/%E0%B8%A3%E0%B8%B0%E0%B8%A2%E0%B8%AD%E0%B8%87/%E0%B8%97%E0%B9%88%E0%B8%B2%20%E0%B8%AD.%E0%B9%81%E0%B8%81%E0%B8%A5%E0%B8%87');
            totalrow = 3
            GetBKS_All();
        }else if (startprovice == "ตาก" && endprovice == "กรุงเทพมหานคร"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%95%E0%B8%B2%E0%B8%81/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%AD%20.%E0%B9%81%E0%B8%A1%E0%B9%88%E0%B8%AA%E0%B8%AD%E0%B8%94/%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF%20(%E0%B8%AB%E0%B8%A1%E0%B8%AD%E0%B8%8A%E0%B8%B4%E0%B8%95%202)');
            totalrow = 4
            GetBKS_All();
        }else if (startprovice == "ตาก" && endprovice == "กำแพงเพชร"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%95%E0%B8%B2%E0%B8%81/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%AD%20.%E0%B9%81%E0%B8%A1%E0%B9%88%E0%B8%AA%E0%B8%AD%E0%B8%94/%E0%B8%81%E0%B8%B3%E0%B9%81%E0%B8%9E%E0%B8%87%E0%B9%80%E0%B8%9E%E0%B8%8A%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%81%E0%B8%B3%E0%B9%81%E0%B8%9E%E0%B8%87%E0%B9%80%E0%B8%9E%E0%B8%8A%E0%B8%A3');
            totalrow = 4
            GetBKS_All();
        }else if (startprovice == "ตาก" && endprovice == "ชัยนาท"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%95%E0%B8%B2%E0%B8%81/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%AD%20.%E0%B9%81%E0%B8%A1%E0%B9%88%E0%B8%AA%E0%B8%AD%E0%B8%94/%E0%B8%8A%E0%B8%B1%E0%B8%A2%E0%B8%99%E0%B8%B2%E0%B8%97/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%8A%E0%B8%B1%E0%B8%A2%E0%B8%99%E0%B8%B2%E0%B8%97');
            totalrow = 4
            GetBKS_All();
        }else if (startprovice == "ตาก" && endprovice == "นครสวรรค์"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%95%E0%B8%B2%E0%B8%81/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%AD%20.%E0%B9%81%E0%B8%A1%E0%B9%88%E0%B8%AA%E0%B8%AD%E0%B8%94/%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%AA%E0%B8%A7%E0%B8%A3%E0%B8%A3%E0%B8%84%E0%B9%8C/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%AA%E0%B8%A7%E0%B8%A3%E0%B8%A3%E0%B8%84%E0%B9%8C');
            totalrow = 4
            GetBKS_All();
        }else if (startprovice == "ตาก" && endprovice == "ปทุมธานี"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%95%E0%B8%B2%E0%B8%81/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%95%E0%B8%B2%E0%B8%81/%E0%B8%9B%E0%B8%97%E0%B8%B8%E0%B8%A1%E0%B8%98%E0%B8%B2%E0%B8%99%E0%B8%B5/%E0%B8%88%E0%B8%B8%E0%B8%94%E0%B8%88%E0%B8%AD%E0%B8%94%E0%B8%99%E0%B8%A7%E0%B8%99%E0%B8%84%E0%B8%A3');
            totalrow = 3
            GetBKS_All();
        }else if (startprovice == "ตาก" && endprovice == "ลำปาง"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%95%E0%B8%B2%E0%B8%81/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%95%E0%B8%B2%E0%B8%81/%E0%B8%A5%E0%B8%B3%E0%B8%9B%E0%B8%B2%E0%B8%87/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%A5%E0%B8%B3%E0%B8%9B%E0%B8%B2%E0%B8%87');
            totalrow = 8
            GetBKS_All();
        }else if (startprovice == "ตาก" && endprovice == "ลำพูน"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%95%E0%B8%B2%E0%B8%81/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%95%E0%B8%B2%E0%B8%81/%E0%B8%A5%E0%B8%B3%E0%B8%9E%E0%B8%B9%E0%B8%99/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%A5%E0%B8%B3%E0%B8%9E%E0%B8%B9%E0%B8%99');
            totalrow = 2
            GetBKS_All();
        }else if (startprovice == "ตาก" && endprovice == "สิงห์บุรี"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%95%E0%B8%B2%E0%B8%81/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%AD%20.%E0%B9%81%E0%B8%A1%E0%B9%88%E0%B8%AA%E0%B8%AD%E0%B8%94/%E0%B8%AA%E0%B8%B4%E0%B8%87%E0%B8%AB%E0%B9%8C%E0%B8%9A%E0%B8%B8%E0%B8%A3%E0%B8%B5/%E0%B8%88%E0%B8%B8%E0%B8%94%E0%B8%88%E0%B8%AD%E0%B8%94%20%E0%B8%AD%E0%B8%B4%E0%B8%99%E0%B8%97%E0%B8%A3%E0%B9%8C%E0%B8%9A%E0%B8%B8%E0%B8%A3%E0%B8%B5%202');
            totalrow = 4
            GetBKS_All();
        }else if (startprovice == "ตาก" && endprovice == "อยุธยา"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%95%E0%B8%B2%E0%B8%81/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%AD%20.%E0%B9%81%E0%B8%A1%E0%B9%88%E0%B8%AA%E0%B8%AD%E0%B8%94/%E0%B8%AD%E0%B8%A2%E0%B8%B8%E0%B8%98%E0%B8%A2%E0%B8%B2/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%AD%E0%B8%A2%E0%B8%B8%E0%B8%98%E0%B8%A2%E0%B8%B2');
            totalrow = 4
            GetBKS_All();
        }else if (startprovice == "ตาก" && endprovice == "อ่างทอง"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%95%E0%B8%B2%E0%B8%81/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%95%E0%B8%B2%E0%B8%81/%E0%B8%AD%E0%B9%88%E0%B8%B2%E0%B8%87%E0%B8%97%E0%B8%AD%E0%B8%87/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%AD%E0%B9%88%E0%B8%B2%E0%B8%87%E0%B8%97%E0%B8%AD%E0%B8%87%20(%E0%B8%88%E0%B8%B8%E0%B8%94%E0%B8%88%E0%B8%AD%E0%B8%94%E0%B8%A3%E0%B9%88%E0%B8%A1%E0%B9%84%E0%B8%97%E0%B8%A3)');
            totalrow = 3
            GetBKS_All();
        }else if (startprovice == "ตาก" && endprovice == "เชียงราย"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%95%E0%B8%B2%E0%B8%81/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%95%E0%B8%B2%E0%B8%81/%E0%B9%80%E0%B8%8A%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B8%A3%E0%B8%B2%E0%B8%A2/%E0%B9%80%E0%B8%82%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%99%E0%B8%A0%E0%B8%B9%E0%B8%A1%E0%B8%B4%E0%B8%9E%E0%B8%A5');
            totalrow = 3
            GetBKS_All();
        }else if (startprovice == "ตาก" && endprovice == "เชียงใหม่"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%95%E0%B8%B2%E0%B8%81/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%95%E0%B8%B2%E0%B8%81/%E0%B9%80%E0%B8%8A%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B9%80%E0%B8%8A%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88%20(%E0%B8%81%E0%B8%A3%E0%B8%A1%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87)');
            totalrow = 10
            GetBKS_All();
        }else if (startprovice == "ตาก" && endprovice == "แพร่"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%95%E0%B8%B2%E0%B8%81/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%95%E0%B8%B2%E0%B8%81/%E0%B9%81%E0%B8%9E%E0%B8%A3%E0%B9%88/%E0%B8%88%E0%B8%B8%E0%B8%94%E0%B8%88%E0%B8%AD%E0%B8%94%E0%B8%A7%E0%B8%B1%E0%B8%87%E0%B8%8A%E0%B8%B4%E0%B9%89%E0%B8%99');
            totalrow = 1
            GetBKS_All();
        }else if (startprovice == "นครนายก" && endprovice == "กรุงเทพมหานคร"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%99%E0%B8%B2%E0%B8%A2%E0%B8%81/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%99%E0%B8%B2%E0%B8%A2%E0%B8%81/%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF%20(%E0%B8%AB%E0%B8%A1%E0%B8%AD%E0%B8%8A%E0%B8%B4%E0%B8%95%202)');
            totalrow = 1
            GetBKS_All();
        }else if (startprovice == "นครนายก" && endprovice == "กาฬสินธุ์"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%99%E0%B8%B2%E0%B8%A2%E0%B8%81/%E0%B8%88%E0%B8%B8%E0%B8%94%E0%B8%88%E0%B8%AD%E0%B8%94%20%E0%B8%95.%E0%B8%AB%E0%B8%B4%E0%B8%99%E0%B8%81%E0%B8%AD%E0%B8%87/%E0%B8%81%E0%B8%B2%E0%B8%AC%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B8%98%E0%B8%B8%E0%B9%8C/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%81%E0%B8%B2%E0%B8%AC%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B8%98%E0%B8%B8%E0%B9%8C');
            totalrow = 3
            GetBKS_All();
        }else if (startprovice == "นครนายก" && endprovice == "ขอนแก่น"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%99%E0%B8%B2%E0%B8%A2%E0%B8%81/%E0%B8%88%E0%B8%B8%E0%B8%94%E0%B8%88%E0%B8%AD%E0%B8%94%20%E0%B8%95.%E0%B8%AB%E0%B8%B4%E0%B8%99%E0%B8%81%E0%B8%AD%E0%B8%87/%E0%B8%82%E0%B8%AD%E0%B8%99%E0%B9%81%E0%B8%81%E0%B9%88%E0%B8%99/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%82%E0%B8%AD%E0%B8%99%E0%B9%81%E0%B8%81%E0%B9%88%E0%B8%99');
            totalrow = 1
            GetBKS_All();
        }else if (startprovice == "นครนายก" && endprovice == "นครพนม"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%99%E0%B8%B2%E0%B8%A2%E0%B8%81/%E0%B8%88%E0%B8%B8%E0%B8%94%E0%B8%88%E0%B8%AD%E0%B8%94%20%E0%B8%95.%E0%B8%AB%E0%B8%B4%E0%B8%99%E0%B8%81%E0%B8%AD%E0%B8%87/%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%9E%E0%B8%99%E0%B8%A1/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%9E%E0%B8%99%E0%B8%A1');
            totalrow = 5
            GetBKS_All();
        }else if (startprovice == "นครนายก" && endprovice == "บึงกาฬ"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%99%E0%B8%B2%E0%B8%A2%E0%B8%81/%E0%B8%88%E0%B8%B8%E0%B8%94%E0%B8%88%E0%B8%AD%E0%B8%94%20%E0%B8%95.%E0%B8%AB%E0%B8%B4%E0%B8%99%E0%B8%81%E0%B8%AD%E0%B8%87/%E0%B8%9A%E0%B8%B6%E0%B8%87%E0%B8%81%E0%B8%B2%E0%B8%AC/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%9A%E0%B8%B6%E0%B8%87%E0%B8%81%E0%B8%B2%E0%B8%AC');
            totalrow = 1
            GetBKS_All();
        }else if (startprovice == "นครนายก" && endprovice == "บุรีรัมย์"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%99%E0%B8%B2%E0%B8%A2%E0%B8%81/%E0%B8%88%E0%B8%B8%E0%B8%94%E0%B8%88%E0%B8%AD%E0%B8%94%20%E0%B8%95.%E0%B8%AB%E0%B8%B4%E0%B8%99%E0%B8%81%E0%B8%AD%E0%B8%87/%E0%B8%9A%E0%B8%B8%E0%B8%A3%E0%B8%B5%E0%B8%A3%E0%B8%B1%E0%B8%A1%E0%B8%A2%E0%B9%8C/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%9A%E0%B8%B8%E0%B8%A3%E0%B8%B5%E0%B8%A3%E0%B8%B1%E0%B8%A1%E0%B8%A2%E0%B9%8C');
            totalrow = 6
            GetBKS_All();
        }else if (startprovice == "นครนายก" && endprovice == "มหาสารคาม"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%99%E0%B8%B2%E0%B8%A2%E0%B8%81/%E0%B8%88%E0%B8%B8%E0%B8%94%E0%B8%88%E0%B8%AD%E0%B8%94%20%E0%B8%95.%E0%B8%AB%E0%B8%B4%E0%B8%99%E0%B8%81%E0%B8%AD%E0%B8%87/%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%84%E0%B8%B2%E0%B8%A1/%E0%B8%88%E0%B8%B8%E0%B8%94%E0%B8%88%E0%B8%AD%E0%B8%94%20%E0%B8%AD.%E0%B8%A7%E0%B8%B2%E0%B8%9B%E0%B8%B5%E0%B8%9B%E0%B8%97%E0%B8%B8%E0%B8%A1');
            totalrow = 1
            GetBKS_All();
        }else if (startprovice == "นครนายก" && endprovice == "มุกดาหาร"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%99%E0%B8%B2%E0%B8%A2%E0%B8%81/%E0%B8%88%E0%B8%B8%E0%B8%94%E0%B8%88%E0%B8%AD%E0%B8%94%20%E0%B8%95.%E0%B8%AB%E0%B8%B4%E0%B8%99%E0%B8%81%E0%B8%AD%E0%B8%87/%E0%B8%A1%E0%B8%B8%E0%B8%81%E0%B8%94%E0%B8%B2%E0%B8%AB%E0%B8%B2%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%A1%E0%B8%B8%E0%B8%81%E0%B8%94%E0%B8%B2%E0%B8%AB%E0%B8%B2%E0%B8%A3');
            totalrow = 6
            GetBKS_All();
        }else if (startprovice == "นครนายก" && endprovice == "ยโสธร"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%99%E0%B8%B2%E0%B8%A2%E0%B8%81/%E0%B8%88%E0%B8%B8%E0%B8%94%E0%B8%88%E0%B8%AD%E0%B8%94%20%E0%B8%95.%E0%B8%AB%E0%B8%B4%E0%B8%99%E0%B8%81%E0%B8%AD%E0%B8%87/%E0%B8%A2%E0%B9%82%E0%B8%AA%E0%B8%98%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%A2%E0%B9%82%E0%B8%AA%E0%B8%98%E0%B8%A3');
            totalrow = 6
            GetBKS_All();
        }else if (startprovice == "นครนายก" && endprovice == "ร้อยเอ็ด"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%99%E0%B8%B2%E0%B8%A2%E0%B8%81/%E0%B8%88%E0%B8%B8%E0%B8%94%E0%B8%88%E0%B8%AD%E0%B8%94%20%E0%B8%95.%E0%B8%AB%E0%B8%B4%E0%B8%99%E0%B8%81%E0%B8%AD%E0%B8%87/%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%A2%E0%B9%80%E0%B8%AD%E0%B9%87%E0%B8%94/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%A2%E0%B9%80%E0%B8%AD%E0%B9%87%E0%B8%94');
            totalrow = 1
            GetBKS_All();
        }else if (startprovice == "นครนายก" && endprovice == "ศรีสะเกษ"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%99%E0%B8%B2%E0%B8%A2%E0%B8%81/%E0%B8%88%E0%B8%B8%E0%B8%94%E0%B8%88%E0%B8%AD%E0%B8%94%20%E0%B8%95.%E0%B8%AB%E0%B8%B4%E0%B8%99%E0%B8%81%E0%B8%AD%E0%B8%87/%E0%B8%A8%E0%B8%A3%E0%B8%B5%E0%B8%AA%E0%B8%B0%E0%B9%80%E0%B8%81%E0%B8%A9/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%A8%E0%B8%A3%E0%B8%B5%E0%B8%AA%E0%B8%B0%E0%B9%80%E0%B8%81%E0%B8%A9');
            totalrow = 3
            GetBKS_All();
        }else if (startprovice == "นครนายก" && endprovice == "สกลนคร"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%99%E0%B8%B2%E0%B8%A2%E0%B8%81/%E0%B8%88%E0%B8%B8%E0%B8%94%E0%B8%88%E0%B8%AD%E0%B8%94%20%E0%B8%95.%E0%B8%AB%E0%B8%B4%E0%B8%99%E0%B8%81%E0%B8%AD%E0%B8%87/%E0%B8%AA%E0%B8%81%E0%B8%A5%E0%B8%99%E0%B8%84%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%AA%E0%B8%81%E0%B8%A5%E0%B8%99%E0%B8%84%E0%B8%A3');
            totalrow = 8
            GetBKS_All();
        }else if (startprovice == "นครนายก" && endprovice == "สระแก้ว"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%99%E0%B8%B2%E0%B8%A2%E0%B8%81/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%99%E0%B8%B2%E0%B8%A2%E0%B8%81/%E0%B8%AA%E0%B8%A3%E0%B8%B0%E0%B9%81%E0%B8%81%E0%B9%89%E0%B8%A7/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%AA%E0%B8%A3%E0%B8%B0%E0%B9%81%E0%B8%81%E0%B9%89%E0%B8%A7');
            totalrow = 1
            GetBKS_All();
        }else if (startprovice == "นครนายก" && endprovice == "สุรินทร์"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%99%E0%B8%B2%E0%B8%A2%E0%B8%81/%E0%B8%88%E0%B8%B8%E0%B8%94%E0%B8%88%E0%B8%AD%E0%B8%94%20%E0%B8%95.%E0%B8%AB%E0%B8%B4%E0%B8%99%E0%B8%81%E0%B8%AD%E0%B8%87/%E0%B8%AA%E0%B8%B8%E0%B8%A3%E0%B8%B4%E0%B8%99%E0%B8%97%E0%B8%A3%E0%B9%8C/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%AA%E0%B8%B8%E0%B8%A3%E0%B8%B4%E0%B8%99%E0%B8%97%E0%B8%A3%E0%B9%8C');
            totalrow = 8
            GetBKS_All();
        }else if (startprovice == "นครนายก" && endprovice == "หนองคาย"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%99%E0%B8%B2%E0%B8%A2%E0%B8%81/%E0%B8%88%E0%B8%B8%E0%B8%94%E0%B8%88%E0%B8%AD%E0%B8%94%20%E0%B8%95.%E0%B8%AB%E0%B8%B4%E0%B8%99%E0%B8%81%E0%B8%AD%E0%B8%87/%E0%B8%AB%E0%B8%99%E0%B8%AD%E0%B8%87%E0%B8%84%E0%B8%B2%E0%B8%A2/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%AB%E0%B8%99%E0%B8%AD%E0%B8%87%E0%B8%84%E0%B8%B2%E0%B8%A2');
            totalrow = 2
            GetBKS_All();
        }else if (startprovice == "นครนายก" && endprovice == "หนองบัวลำภู"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%99%E0%B8%B2%E0%B8%A2%E0%B8%81/%E0%B8%88%E0%B8%B8%E0%B8%94%E0%B8%88%E0%B8%AD%E0%B8%94%20%E0%B8%95.%E0%B8%AB%E0%B8%B4%E0%B8%99%E0%B8%81%E0%B8%AD%E0%B8%87/%E0%B8%AB%E0%B8%99%E0%B8%AD%E0%B8%87%E0%B8%9A%E0%B8%B1%E0%B8%A7%E0%B8%A5%E0%B8%B3%E0%B8%A0%E0%B8%B9/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%AB%E0%B8%99%E0%B8%AD%E0%B8%87%E0%B8%9A%E0%B8%B1%E0%B8%A7%E0%B8%A5%E0%B8%B3%E0%B8%A0%E0%B8%B9');
            totalrow = 5
            GetBKS_All();
        }else if (startprovice == "นครนายก" && endprovice == "อำนาจเจริญ"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%99%E0%B8%B2%E0%B8%A2%E0%B8%81/%E0%B8%88%E0%B8%B8%E0%B8%94%E0%B8%88%E0%B8%AD%E0%B8%94%20%E0%B8%95.%E0%B8%AB%E0%B8%B4%E0%B8%99%E0%B8%81%E0%B8%AD%E0%B8%87/%E0%B8%AD%E0%B8%B3%E0%B8%99%E0%B8%B2%E0%B8%88%E0%B9%80%E0%B8%88%E0%B8%A3%E0%B8%B4%E0%B8%8D/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%AD%E0%B8%B3%E0%B8%99%E0%B8%B2%E0%B8%88%E0%B9%80%E0%B8%88%E0%B8%A3%E0%B8%B4%E0%B8%8D');
            totalrow = 1
            GetBKS_All();
        }else if (startprovice == "นครนายก" && endprovice == "อุดรธานี"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%99%E0%B8%B2%E0%B8%A2%E0%B8%81/%E0%B8%88%E0%B8%B8%E0%B8%94%E0%B8%88%E0%B8%AD%E0%B8%94%20%E0%B8%95.%E0%B8%AB%E0%B8%B4%E0%B8%99%E0%B8%81%E0%B8%AD%E0%B8%87/%E0%B8%AD%E0%B8%B8%E0%B8%94%E0%B8%A3%E0%B8%98%E0%B8%B2%E0%B8%99%E0%B8%B5/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%AD%E0%B8%B8%E0%B8%94%E0%B8%A3%E0%B8%98%E0%B8%B2%E0%B8%99%E0%B8%B5');
            totalrow = 2
            GetBKS_All();
        }else if (startprovice == "นครนายก" && endprovice == "อุบลราชธานี"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%99%E0%B8%B2%E0%B8%A2%E0%B8%81/%E0%B8%88%E0%B8%B8%E0%B8%94%E0%B8%88%E0%B8%AD%E0%B8%94%20%E0%B8%95.%E0%B8%AB%E0%B8%B4%E0%B8%99%E0%B8%81%E0%B8%AD%E0%B8%87/%E0%B8%AD%E0%B8%B8%E0%B8%9A%E0%B8%A5%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%98%E0%B8%B2%E0%B8%99%E0%B8%B5/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%AD%E0%B8%B8%E0%B8%9A%E0%B8%A5%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%98%E0%B8%B2%E0%B8%99%E0%B8%B5');
            totalrow = 3
            GetBKS_All();
        }else if (startprovice == "นครนายก" && endprovice == "เพชรบูรณ์"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%99%E0%B8%B2%E0%B8%A2%E0%B8%81/%E0%B8%88%E0%B8%B8%E0%B8%94%E0%B8%88%E0%B8%AD%E0%B8%94%20%E0%B8%95.%E0%B8%AB%E0%B8%B4%E0%B8%99%E0%B8%81%E0%B8%AD%E0%B8%87/%E0%B9%80%E0%B8%9E%E0%B8%8A%E0%B8%A3%E0%B8%9A%E0%B8%B9%E0%B8%A3%E0%B8%93%E0%B9%8C/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%AD.%E0%B8%AB%E0%B8%A5%E0%B9%88%E0%B8%A1%E0%B8%AA%E0%B8%B1%E0%B8%81');
            totalrow = 4
            GetBKS_All();
        }else if (startprovice == "นครนายก" && endprovice == "เลย"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%99%E0%B8%B2%E0%B8%A2%E0%B8%81/%E0%B8%88%E0%B8%B8%E0%B8%94%E0%B8%88%E0%B8%AD%E0%B8%94%20%E0%B8%95.%E0%B8%AB%E0%B8%B4%E0%B8%99%E0%B8%81%E0%B8%AD%E0%B8%87/%E0%B9%80%E0%B8%A5%E0%B8%A2/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%88%E0%B8%B1%E0%B8%87%E0%B8%AB%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B9%80%E0%B8%A5%E0%B8%A2');
            totalrow = 3
            GetBKS_All();
        }else if (startprovice == "นครพนม" && endprovice == "กรุงเทพมหานคร"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%9E%E0%B8%99%E0%B8%A1/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%AD.%E0%B8%98%E0%B8%B2%E0%B8%95%E0%B8%B8%E0%B8%9E%E0%B8%99%E0%B8%A1/%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF%20(%E0%B8%AB%E0%B8%A1%E0%B8%AD%E0%B8%8A%E0%B8%B4%E0%B8%95%202)');
            totalrow = 6
            GetBKS_All();
        }else if (startprovice == "นครพนม" && endprovice == "กาฬสินธุ์"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%9E%E0%B8%99%E0%B8%A1/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%9E%E0%B8%99%E0%B8%A1/%E0%B8%81%E0%B8%B2%E0%B8%AC%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B8%98%E0%B8%B8%E0%B9%8C/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%81%E0%B8%B2%E0%B8%AC%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B8%98%E0%B8%B8%E0%B9%8C');
            totalrow = 5
            GetBKS_All();
        }else if (startprovice == "นครพนม" && endprovice == "ขอนแก่น"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%9E%E0%B8%99%E0%B8%A1/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%9E%E0%B8%99%E0%B8%A1/%E0%B8%82%E0%B8%AD%E0%B8%99%E0%B9%81%E0%B8%81%E0%B9%88%E0%B8%99/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%AD.%E0%B8%9E%E0%B8%A5');
            totalrow = 5
            GetBKS_All();
        }else if (startprovice == "นครพนม" && endprovice == "นครนายก"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%9E%E0%B8%99%E0%B8%A1/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%9E%E0%B8%99%E0%B8%A1/%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%99%E0%B8%B2%E0%B8%A2%E0%B8%81/%E0%B8%88%E0%B8%B8%E0%B8%94%E0%B8%88%E0%B8%AD%E0%B8%94%20%E0%B8%95.%E0%B8%AB%E0%B8%B4%E0%B8%99%E0%B8%81%E0%B8%AD%E0%B8%87');
            totalrow = 5
            GetBKS_All();
        }else if (startprovice == "นครพนม" && endprovice == "นครราชสีมา"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%9E%E0%B8%99%E0%B8%A1/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%AD.%E0%B8%98%E0%B8%B2%E0%B8%95%E0%B8%B8%E0%B8%9E%E0%B8%99%E0%B8%A1/%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%AA%E0%B8%B5%E0%B8%A1%E0%B8%B2/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%AA%E0%B8%B5%E0%B8%A1%E0%B8%B2');
            totalrow = 6
            GetBKS_All();
        }else if (startprovice == "นครพนม" && endprovice == "มหาสารคาม"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%9E%E0%B8%99%E0%B8%A1/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%AD.%E0%B8%98%E0%B8%B2%E0%B8%95%E0%B8%B8%E0%B8%9E%E0%B8%99%E0%B8%A1/%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%84%E0%B8%B2%E0%B8%A1/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%84%E0%B8%B2%E0%B8%A1');
            totalrow = 6
            GetBKS_All();
        }else if (startprovice == "นครพนม" && endprovice == "มุกดาหาร"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%9E%E0%B8%99%E0%B8%A1/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%AD.%E0%B8%98%E0%B8%B2%E0%B8%95%E0%B8%B8%E0%B8%9E%E0%B8%99%E0%B8%A1/%E0%B8%A1%E0%B8%B8%E0%B8%81%E0%B8%94%E0%B8%B2%E0%B8%AB%E0%B8%B2%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%A1%E0%B8%B8%E0%B8%81%E0%B8%94%E0%B8%B2%E0%B8%AB%E0%B8%B2%E0%B8%A3');
            totalrow = 6
            GetBKS_All();
        }else if (startprovice == "นครพนม" && endprovice == "ยโสธร"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%9E%E0%B8%99%E0%B8%A1/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%AD.%E0%B8%98%E0%B8%B2%E0%B8%95%E0%B8%B8%E0%B8%9E%E0%B8%99%E0%B8%A1/%E0%B8%A2%E0%B9%82%E0%B8%AA%E0%B8%98%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%A2%E0%B9%82%E0%B8%AA%E0%B8%98%E0%B8%A3');
            totalrow = 6
            GetBKS_All();
        }else if (startprovice == "นครพนม" && endprovice == "ร้อยเอ็ด"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%9E%E0%B8%99%E0%B8%A1/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%AD.%E0%B8%98%E0%B8%B2%E0%B8%95%E0%B8%B8%E0%B8%9E%E0%B8%99%E0%B8%A1/%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%A2%E0%B9%80%E0%B8%AD%E0%B9%87%E0%B8%94/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%AD.%E0%B8%AA%E0%B8%B8%E0%B8%A7%E0%B8%A3%E0%B8%A3%E0%B8%93%E0%B8%A0%E0%B8%B9%E0%B8%A1%E0%B8%B4');
            totalrow = 6
            GetBKS_All();
        }else if (startprovice == "นครพนม" && endprovice == "สกลนคร"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%9E%E0%B8%99%E0%B8%A1/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%9E%E0%B8%99%E0%B8%A1/%E0%B8%AA%E0%B8%81%E0%B8%A5%E0%B8%99%E0%B8%84%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%AA%E0%B8%81%E0%B8%A5%E0%B8%99%E0%B8%84%E0%B8%A3');
            totalrow = 5
            GetBKS_All();
        }else if (startprovice == "นครพนม" && endprovice == "สระบุรี"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%9E%E0%B8%99%E0%B8%A1/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%9E%E0%B8%99%E0%B8%A1/%E0%B8%AA%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%B8%E0%B8%A3%E0%B8%B5/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%AA%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%B8%E0%B8%A3%E0%B8%B5');
            totalrow = 5
            GetBKS_All();
        }else if (startprovice == "นครพนม" && endprovice == "หนองคาย"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%9E%E0%B8%99%E0%B8%A1/%E0%B8%88%E0%B8%B8%E0%B8%94%E0%B8%88%E0%B8%AD%E0%B8%94%20%E0%B8%AD.%E0%B8%9A%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B9%81%E0%B8%9E%E0%B8%87/%E0%B8%AB%E0%B8%99%E0%B8%AD%E0%B8%87%E0%B8%84%E0%B8%B2%E0%B8%A2/%E0%B8%88%E0%B8%B8%E0%B8%94%E0%B8%88%E0%B8%AD%E0%B8%94%E0%B8%AB%E0%B8%99%E0%B8%AD%E0%B8%87%E0%B8%AB%E0%B8%B4%E0%B9%89%E0%B8%87');
            totalrow = 5
            GetBKS_All();
        }else if (startprovice == "นครพนม" && endprovice == "อยุธยา"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%9E%E0%B8%99%E0%B8%A1/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%9E%E0%B8%99%E0%B8%A1/%E0%B8%AD%E0%B8%A2%E0%B8%B8%E0%B8%98%E0%B8%A2%E0%B8%B2/%E0%B8%97%E0%B9%88%E0%B8%B2%E0%B8%A7%E0%B8%B1%E0%B8%87%E0%B8%99%E0%B9%89%E0%B8%AD%E0%B8%A2');
            totalrow = 5
            GetBKS_All();
        }else if (startprovice == "นครพนม" && endprovice == "อุดรธานี"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%9E%E0%B8%99%E0%B8%A1/%E0%B8%88%E0%B8%B8%E0%B8%94%E0%B8%88%E0%B8%AD%E0%B8%94%20%E0%B8%AD.%E0%B8%9A%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B9%81%E0%B8%9E%E0%B8%87/%E0%B8%AD%E0%B8%B8%E0%B8%94%E0%B8%A3%E0%B8%98%E0%B8%B2%E0%B8%99%E0%B8%B5/%E0%B8%88%E0%B8%B8%E0%B8%94%E0%B8%88%E0%B8%AD%E0%B8%94%20%E0%B8%AD.%E0%B8%A8%E0%B8%A3%E0%B8%B5%E0%B8%98%E0%B8%B2%E0%B8%95%E0%B8%B8');
            totalrow = 5
            GetBKS_All();
        }else if (startprovice == "นครราชสีมา" && endprovice == "กรุงเทพมหานคร"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%AA%E0%B8%B5%E0%B8%A1%E0%B8%B2/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%AA%E0%B8%B5%E0%B8%A1%E0%B8%B2/%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3/%E0%B8%97%E0%B9%88%E0%B8%B2%E0%B8%AD%E0%B8%B2%E0%B8%81%E0%B8%B2%E0%B8%A8%E0%B8%A2%E0%B8%B2%E0%B8%99%E0%B8%AA%E0%B8%B8%E0%B8%A7%E0%B8%A3%E0%B8%A3%E0%B8%93%E0%B8%A0%E0%B8%B9%E0%B8%A1%E0%B8%B4');
            totalrow = 1
            GetBKS_All();
        }else if (startprovice == "นครราชสีมา" && endprovice == "กาฬสินธุ์"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%AA%E0%B8%B5%E0%B8%A1%E0%B8%B2/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%AA%E0%B8%B5%E0%B8%A1%E0%B8%B2/%E0%B8%81%E0%B8%B2%E0%B8%AC%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B8%98%E0%B8%B8%E0%B9%8C/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%81%E0%B8%B2%E0%B8%AC%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B8%98%E0%B8%B8%E0%B9%8C');
            totalrow = 3
            GetBKS_All();
        }else if (startprovice == "นครราชสีมา" && endprovice == "ขอนแก่น"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%AA%E0%B8%B5%E0%B8%A1%E0%B8%B2/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%AA%E0%B8%B5%E0%B8%A1%E0%B8%B2/%E0%B8%82%E0%B8%AD%E0%B8%99%E0%B9%81%E0%B8%81%E0%B9%88%E0%B8%99/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%82%E0%B8%AD%E0%B8%99%E0%B9%81%E0%B8%81%E0%B9%88%E0%B8%99');
            totalrow = 1
            GetBKS_All();
        }else if (startprovice == "นครราชสีมา" && endprovice == "นครพนม"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%AA%E0%B8%B5%E0%B8%A1%E0%B8%B2/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%AA%E0%B8%B5%E0%B8%A1%E0%B8%B2/%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%9E%E0%B8%99%E0%B8%A1/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%9E%E0%B8%99%E0%B8%A1');
            totalrow = 5
            GetBKS_All();
        }else if (startprovice == "นครราชสีมา" && endprovice == "บึงกาฬ"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%AA%E0%B8%B5%E0%B8%A1%E0%B8%B2/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%AA%E0%B8%B5%E0%B8%A1%E0%B8%B2/%E0%B8%9A%E0%B8%B6%E0%B8%87%E0%B8%81%E0%B8%B2%E0%B8%AC/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%9A%E0%B8%B6%E0%B8%87%E0%B8%81%E0%B8%B2%E0%B8%AC');
            totalrow = 1
            GetBKS_All();
        }else if (startprovice == "นครราชสีมา" && endprovice == "บุรีรัมย์"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%AA%E0%B8%B5%E0%B8%A1%E0%B8%B2/%E0%B8%88%E0%B8%B8%E0%B8%94%E0%B8%88%E0%B8%AD%E0%B8%94%E0%B8%9B%E0%B8%B2%E0%B8%81%E0%B8%8A%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B8%9A%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B8%A1%E0%B8%94%E0%B8%97%E0%B8%B8%E0%B9%80%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%99/%E0%B8%9A%E0%B8%B8%E0%B8%A3%E0%B8%B5%E0%B8%A3%E0%B8%B1%E0%B8%A1%E0%B8%A2%E0%B9%8C/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%9A%E0%B8%B8%E0%B8%A3%E0%B8%B5%E0%B8%A3%E0%B8%B1%E0%B8%A1%E0%B8%A2%E0%B9%8C');
            totalrow = 6
            GetBKS_All();
        }else if (startprovice == "นครราชสีมา" && endprovice == "มหาสารคาม"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%AA%E0%B8%B5%E0%B8%A1%E0%B8%B2/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%AA%E0%B8%B5%E0%B8%A1%E0%B8%B2/%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%84%E0%B8%B2%E0%B8%A1/%E0%B8%88%E0%B8%B8%E0%B8%94%E0%B8%88%E0%B8%AD%E0%B8%94%20%E0%B8%AD.%E0%B8%A7%E0%B8%B2%E0%B8%9B%E0%B8%B5%E0%B8%9B%E0%B8%97%E0%B8%B8%E0%B8%A1');
            totalrow = 1
            GetBKS_All();
        }else if (startprovice == "นครราชสีมา" && endprovice == "มุกดาหาร"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%AA%E0%B8%B5%E0%B8%A1%E0%B8%B2/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%AA%E0%B8%B5%E0%B8%A1%E0%B8%B2/%E0%B8%A1%E0%B8%B8%E0%B8%81%E0%B8%94%E0%B8%B2%E0%B8%AB%E0%B8%B2%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%A1%E0%B8%B8%E0%B8%81%E0%B8%94%E0%B8%B2%E0%B8%AB%E0%B8%B2%E0%B8%A3');
            totalrow = 6
            GetBKS_All();
        }else if (startprovice == "นครราชสีมา" && endprovice == "ยโสธร"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%AA%E0%B8%B5%E0%B8%A1%E0%B8%B2/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%AA%E0%B8%B5%E0%B8%A1%E0%B8%B2/%E0%B8%A2%E0%B9%82%E0%B8%AA%E0%B8%98%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%A2%E0%B9%82%E0%B8%AA%E0%B8%98%E0%B8%A3');
            totalrow = 6
            GetBKS_All();
        }else if (startprovice == "นครราชสีมา" && endprovice == "ร้อยเอ็ด"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%AA%E0%B8%B5%E0%B8%A1%E0%B8%B2/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%AA%E0%B8%B5%E0%B8%A1%E0%B8%B2/%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%A2%E0%B9%80%E0%B8%AD%E0%B9%87%E0%B8%94/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%A2%E0%B9%80%E0%B8%AD%E0%B9%87%E0%B8%94');
            totalrow = 1
            GetBKS_All();
        }else if (startprovice == "นครราชสีมา" && endprovice == "ศรีสะเกษ"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%AA%E0%B8%B5%E0%B8%A1%E0%B8%B2/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%AA%E0%B8%B5%E0%B8%A1%E0%B8%B2/%E0%B8%A8%E0%B8%A3%E0%B8%B5%E0%B8%AA%E0%B8%B0%E0%B9%80%E0%B8%81%E0%B8%A9/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%A8%E0%B8%A3%E0%B8%B5%E0%B8%AA%E0%B8%B0%E0%B9%80%E0%B8%81%E0%B8%A9');
            totalrow = 3
            GetBKS_All();
        }else if (startprovice == "นครราชสีมา" && endprovice == "สกลนคร"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%AA%E0%B8%B5%E0%B8%A1%E0%B8%B2/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%AA%E0%B8%B5%E0%B8%A1%E0%B8%B2/%E0%B8%AA%E0%B8%81%E0%B8%A5%E0%B8%99%E0%B8%84%E0%B8%A3/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%AA%E0%B8%81%E0%B8%A5%E0%B8%99%E0%B8%84%E0%B8%A3');
            totalrow = 8
            GetBKS_All();
        }else if (startprovice == "นครราชสีมา" && endprovice == "สุรินทร์"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%AA%E0%B8%B5%E0%B8%A1%E0%B8%B2/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%AA%E0%B8%B5%E0%B8%A1%E0%B8%B2/%E0%B8%AA%E0%B8%B8%E0%B8%A3%E0%B8%B4%E0%B8%99%E0%B8%97%E0%B8%A3%E0%B9%8C/%E0%B8%AD.%E0%B8%A3%E0%B8%B1%E0%B8%95%E0%B8%99%E0%B8%9A%E0%B8%B8%E0%B8%A3%E0%B8%B5');
            totalrow = 3
            GetBKS_All();
        }else if (startprovice == "นครราชสีมา" && endprovice == "หนองคาย"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%AA%E0%B8%B5%E0%B8%A1%E0%B8%B2/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%AA%E0%B8%B5%E0%B8%A1%E0%B8%B2/%E0%B8%AB%E0%B8%99%E0%B8%AD%E0%B8%87%E0%B8%84%E0%B8%B2%E0%B8%A2/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%AB%E0%B8%99%E0%B8%AD%E0%B8%87%E0%B8%84%E0%B8%B2%E0%B8%A2');
            totalrow = 2
            GetBKS_All();
        }else if (startprovice == "นครราชสีมา" && endprovice == "หนองบัวลำภู"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%AA%E0%B8%B5%E0%B8%A1%E0%B8%B2/%E0%B8%88%E0%B8%B8%E0%B8%94%E0%B8%88%E0%B8%AD%E0%B8%94%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B8%AD%E0%B8%B2%E0%B8%AB%E0%B8%B2%E0%B8%A3%20199/%E0%B8%AB%E0%B8%99%E0%B8%AD%E0%B8%87%E0%B8%9A%E0%B8%B1%E0%B8%A7%E0%B8%A5%E0%B8%B3%E0%B8%A0%E0%B8%B9/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%AB%E0%B8%99%E0%B8%AD%E0%B8%87%E0%B8%9A%E0%B8%B1%E0%B8%A7%E0%B8%A5%E0%B8%B3%E0%B8%A0%E0%B8%B9');
            totalrow = 5
            GetBKS_All();
        }else if (startprovice == "นครราชสีมา" && endprovice == "อำนาจเจริญ"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%AA%E0%B8%B5%E0%B8%A1%E0%B8%B2/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%AA%E0%B8%B5%E0%B8%A1%E0%B8%B2/%E0%B8%AD%E0%B8%B3%E0%B8%99%E0%B8%B2%E0%B8%88%E0%B9%80%E0%B8%88%E0%B8%A3%E0%B8%B4%E0%B8%8D/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%AD%E0%B8%B3%E0%B8%99%E0%B8%B2%E0%B8%88%E0%B9%80%E0%B8%88%E0%B8%A3%E0%B8%B4%E0%B8%8D');
            totalrow = 1
            GetBKS_All();
        }else if (startprovice == "นครราชสีมา" && endprovice == "อุดรธานี"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%AA%E0%B8%B5%E0%B8%A1%E0%B8%B2/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%AA%E0%B8%B5%E0%B8%A1%E0%B8%B2/%E0%B8%AD%E0%B8%B8%E0%B8%94%E0%B8%A3%E0%B8%98%E0%B8%B2%E0%B8%99%E0%B8%B5/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%AD%E0%B8%B8%E0%B8%94%E0%B8%A3%E0%B8%98%E0%B8%B2%E0%B8%99%E0%B8%B5');
            totalrow = 2
            GetBKS_All();
        }else if (startprovice == "นครราชสีมา" && endprovice == "เลย"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%AA%E0%B8%B5%E0%B8%A1%E0%B8%B2/%E0%B8%88%E0%B8%B8%E0%B8%94%E0%B8%88%E0%B8%AD%E0%B8%94%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B8%AD%E0%B8%B2%E0%B8%AB%E0%B8%B2%E0%B8%A3%20199/%E0%B9%80%E0%B8%A5%E0%B8%A2/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%88%E0%B8%B1%E0%B8%87%E0%B8%AB%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B9%80%E0%B8%A5%E0%B8%A2');
            totalrow = 3
            GetBKS_All();
        }else if (startprovice == "นครราชสีมา" && endprovice == "เวียงจันทน์"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%AA%E0%B8%B5%E0%B8%A1%E0%B8%B2/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%AA%E0%B8%B5%E0%B8%A1%E0%B8%B2/%E0%B9%80%E0%B8%A7%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B8%88%E0%B8%B1%E0%B8%99%E0%B8%97%E0%B8%99%E0%B9%8C/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B9%80%E0%B8%A7%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B8%88%E0%B8%B1%E0%B8%99%E0%B8%97%E0%B8%99%E0%B9%8C');
            totalrow = 1
            GetBKS_All();
        }else if (startprovice == "นครศรีธรรมราช" && endprovice == "กระบี่"){
            url3 = ('https://timetables.busticket.in.th/%E0%B8%9A%E0%B8%82%E0%B8%AA/%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%A8%E0%B8%A3%E0%B8%B5%E0%B8%98%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%A3%E0%B8%B2%E0%B8%8A/%E0%B8%88%E0%B8%B8%E0%B8%94%E0%B8%88%E0%B8%AD%E0%B8%94%20%E0%B8%AD.%E0%B8%97%E0%B8%B8%E0%B9%88%E0%B8%87%E0%B9%83%E0%B8%AB%E0%B8%8D%E0%B9%88/%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%B5%E0%B9%88/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3%20%E0%B8%88.%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%B5%E0%B9%88');
            totalrow = 3
            GetBKS_All();
        }else if (startprovice == "นครศรีธรรมราช" && endprovice == "กรุงเทพมหานคร"){
            url3 = ('');
            totalrow = 
            GetBKS_All();
        }else if (startprovice == "นครศรีธรรมราช" && endprovice == "กรุงเทพมหานคร"){
            url3 = ('');
            totalrow = 
            GetBKS_All();
        }
        
        else {
            // fs.unlink('./src/roundtrip.xml', function (err) {
            //     if (err) throw err;
            //         console.log('File deleted!');
            //      });
            res.sendfile('./src/result2.html')
            console.log("ไม่มีเส้นทางนี้ หรือ เส้นทางนี้ถูกยกเลิกไปแล้ว");
            }
    }

    
    function Column5(){
        request(url,(error,response, html) => {
            if (!error && response.statusCode==200){
               let $ = cheerio.load(html);
                
                let checktr = $('tr').get().length;
                getstartend = $('tr').eq(1);
                        
                             startterminal = getstartend.find('td').eq(col0).text();
                             startterminal1 = getstartend.find('td').eq(col1).text();
                             endterminal = getstartend.find('td').eq(6).text();
                for(var r = 2; r<checktr-j ;){
                     gettable = $('tr').eq(r);
                     timeto = gettable.find('td').eq(col2).text();
                     timego = gettable.find('td').eq(col0).text();
                     timego2 = gettable.find('td').eq(col1).text(); 
                     standard = gettable.find('td').eq(col3).text();
                     price = gettable.find('td').eq(col4).text();
                     timego3 = gettable.find('td').eq(col5).text();
                     standard2 = gettable.find('td').eq(col7).text();
                     price2 = gettable.find('td').eq(col8).text();

                    if(startterminal.trim() == " "){
                        startterminal = "-";
                    }else if (timego.trim() == "-" || timego.trim() == ""){
                        timego = "ไม่ระบุ";
                    }else if (standard.trim() == "") {
                        standard = "ไม่ระบุ";
                    }else if(price.trim() == " "){
                        price = "-"
                    }else if (standard2.trim() == "" || standard2.trim() == " " || standard2.trim() == null){
                        standard2 ="-"
                    }
                    // console.log(standard.trim())
                    console.log(standard2.trim())
                    // console.log(timego)
                    
                    ResultTable = {
                        "company" : "สมบัติทัวร์",
                        "terminal" : startterminal.trim(),
                        "timeout" : timego.trim(),
                        "endterminal" : endterminal.trim(),
                        "timeto" : timeto.trim(),
                        "standard" :standard.trim(),
                        "price" :price.trim(),
                        
                    }
                    ResultTable1 = {
                        "company" : "สมบัติทัวร์",
                        "terminal" : startterminal1.trim(),
                        "timeout" :timego2.trim(),
                        "endterminal" : endterminal.trim(),
                        "timeto" : timeto.trim(),
                        "standard" :standard.trim(),
                        "price" :price.trim(),
                    }
                    r++;
                    data_table.push(ResultTable)
                    data_table.push(ResultTable1)
                }
                ShowTable(data_table);
            }
            });

    }
    function Column4(){

        request(url,(error,response, html) => {
            if (!error && response.statusCode==200){
               let $ = cheerio.load(html);
                let checktr = $('tr').get().length;

                     getstartend = $('tr').eq(1);
                    
                         startterminal = getstartend.find('td').eq(col0).text();
                         endterminal = getstartend.find('td').eq(5).text();
                     
                     
                     for(var r=2;r<checktr-j ;){
                        gettable = $('tr').eq(r);
                     timego = gettable.find('td').eq(col0).text();
                     timeto = gettable.find('td').eq(col1).text();
                     standard = gettable.find('td').eq(col2).text();
                     price = gettable.find('td').eq(col3).text();
                     timego2 = gettable.find('td').eq(col5-1).text();
                     timeto2 = gettable.find('td').eq(col6-1).text();
                     standard2 = gettable.find('td').eq(col7-1).text();
                     price2 = gettable.find('td').eq(col8-1).text();
                     if(startterminal.trim() == ""){
                        startterminal = "-";
                    }else if (timego.trim() == ""){
                        timego = "-";
                    }else if (standard.trim() == ""){
                        standard = "-";
                    }else if(price.trim() == ""){
                        price = "-"
                    }
                      ResultTable = {
                        "company" : "สมบัติทัวร์",
                        "terminal" : startterminal.trim(),
                        "timeout" : timego.trim(),
                        "endterminal" : endtermianal.trim(),
                        "timeto" : timeto.trim(),
                        "standard" :standard.trim(),
                        "price" :price.trim()
                        
                    }
                    //  ResultTable1 ={
                    //     "company" : "สมบัติทัวร์",
                    //     "terminal" : endterminal.trim(),
                    //     "timeout" : timego2.trim(),
                    //     "standard" : standard2.trim(),
                    //     "price" : price2.trim()
                    // };
                    r++;  
                    data_table.push(ResultTable)
                    // data_table.push(ResultTable1)
                }  
            }
            
             ShowTable(data_table)
            });
    }
    function GettableNakorn(){
        request(url2,(error,response, html) => {
            if (!error && response.statusCode==200){
                let $ = cheerio.load(html);
               
                let check = $ ('tr').get().length;
                
                 getterminal = $ ('tr').eq(1);
                 startterminal = getterminal.find('p').eq(2).text();
                 startterminal1 = getterminal.find('p').eq(4).text();
                 startterminal2 = getterminal.find('p').eq(6).text();
                for ( var count =2; count<totaltable;){
                    gettable = $ ('tr').eq(count);
                    timego = gettable.find('td').eq(col1).text();
                    timego2 = gettable.find('td').eq(col4+1).text();
                    timego3 = gettable.find('td').eq(col5).text();
                    timeto = gettable.find('td').eq(col2).text();
                    standard = gettable.find('td').eq(col3).text();
                    Tstandard = standard.split(" ");
                    
                    if(Tstandard[0].trim() == "First"){
                            price = Fprice;                    
                        }else{
                            price = Gprice;
                        }
                    var ResultTable = {
                        "company" : "นครชัยแอร์",
                        "terminal" : startterminal.trim(),
                        "timeout" : timego.trim(),
                        "endterminal" : endprovice,
                        "timeto" : timeto.trim(),
                        "standard" : standard.trim(),
                        "price" : price
                        
                    }
                    var ResultTable1 = {
                        "company" : "นครชัยแอร์",
                        "terminal" : startterminal1.trim(),
                        "timeout" : timego2.trim(),
                        "endterminal" : endprovice,
                        "timeto" : timeto.trim(),
                        "standard" : standard.trim(),
                        "price" : price
                    }
                    var ResultTable2 = {
                        "company" : "นครชัยแอร์",
                        "terminal" : startterminal2.trim(),
                        "timeout" : timego3.trim(),
                        "endterminal" : endprovice,
                        "timeto" : timeto.trim(),
                        "standard" : standard.trim(),
                        "price" : price
                    };
                    count++;
                    data_table.push(ResultTable)
                    data_table.push(ResultTable1)
                    data_table.push(ResultTable2)
                }
                ShowTable(data_table)
            }
        });
    }
    function GettableNakorn2(){ // ดึง 2 ตาราง 3 คอลัมน์
        request(url2,(error,response, html) => {
            if (!error && response.statusCode==200){
                let $ = cheerio.load(html);
               
                let check = $('tr').get().length;
                
                 getterminal = $('tr').eq(1);
                 startterminal = getterminal.find('p').eq(2).text();
                 startterminal1 = getterminal.find('p').eq(4).text();
                 startterminal2 = getterminal.find('p').eq(6).text();
                for ( var count =2; count<totaltable;){
                    // if(count == totaltable){
                    //     count = count + skip ;
                    //     getterminal = $ ('tr').eq(count-1);
                    //     startterminal = getterminal.find('p').eq(1).text();
                    //     startterminal1 = getterminal.find('p').eq(6).text();
                    //     startterminal2 = getterminal.find('p').eq(11).text();
                    // }
                    gettable = $ ('tr').eq(count);
                    timego = gettable.find('td').eq(col1).text();
                    standard = gettable.find('td').eq(col3).text();
                    timego2 = gettable.find('td').eq(col4+1).text();
                    timego3 = gettable.find('td').eq(col5).text();
                    timeto = gettable.find('td').eq(col2).text();

                    Tstandard = standard.split(" ");
                    
                    if(Tstandard[0].trim() == "First"){
                            price = Fprice;                    
                        }else{
                            price = Gprice;
                        }
                    if(startterminal.trim() == ""){
                        startterminal = "-";
                    }else if (timego.trim() == "-"){
                        timego = "ไม่ระบุ";
                    }else if (standard.trim() == ""){
                        standard = "-";
                    }
                    // }else if(price == " "){
                    //     price = "-"
                    // }
                    
                    ResultTable = {
                        "company" : "นครชัยแอร์",
                        "terminal" : startterminal.trim(),
                        "timeout" : timego.trim(),
                        "endterminal" : endprovice,
                        "timeto" : timeto.trim(),
                        "standard" : standard.trim(),
                        "price" : price
                        
                    }
                    ResultTable1 = {
                        "company" : "นครชัยแอร์",
                        "terminal" : startterminal1.trim(),
                        "timeout" : timego2.trim(),
                        "endterminal" : endprovice,
                        "timeto" : timeto.trim(),
                        "standard" : standard.trim(),
                        "price" : price
                    }
                    ResultTable2 = {
                        "company" : "นครชัยแอร์",
                        "terminal" : startterminal2.trim(),
                        "timeout" : timego3.trim(),
                        "endterminal" : endprovice,
                        "timeto" : timeto.trim(),
                        "standard" : standard.trim(),
                        "price" : price
                    };
                    count++;
                    data_table.push(ResultTable)
                    data_table.push(ResultTable1)
                    data_table.push(ResultTable2)
                }
                
                ShowTable(data_table)
                // return ResultTable;
            }
        });
        // return ResultTable;
    }
    function GettableNakorn3(){ //ดึง 3 คอลัมน์
        request(url2,(error,response, html) => {
            if (!error && response.statusCode==200){
                let $ = cheerio.load(html);
                let check = $('tr').get().length;
                 getterminal = $('tr').eq(1);
                 startterminal = getterminal.find('p').eq(2).text();
                 startterminal1 = getterminal.find('p').eq(4).text();
                 startterminal2 = getterminal.find('p').eq(6).text();
                for ( var count =2; count<totaltable;){
                    gettable = $ ('tr').eq(count);
                    timego = gettable.find('td').eq(col1).text();
                    timego2 = gettable.find('td').eq(col4+1).text();
                    timego3 = gettable.find('td').eq(col5).text();
                    timeto = gettable.find('td').eq(col2).text();
                    standard = gettable.find('td').eq(col3).text();
                    Tstandard = standard.split(" ");
                    
                    if(Tstandard[0].trim() == "First"){
                            price = Fprice;                    
                        }else{
                            price = Gprice;
                        }
                    var ResultTable = {
                        "company" : "นครชัยแอร์",
                         "terminal" : startterminal.trim(),
                        "timeout" : timego.trim(),
                        "endterminal" : endprovice,
                        "timeto" : timeto.trim(),
                        "standard" : standard.trim(),
                        "price" : price  
                    }
                    var ResultTable1 = {
                        "company" : "นครชัยแอร์",
                        "terminal" : startterminal1.trim(),
                       "timeout" : timego2.trim(),
                       "endterminal" : endprovice,
                       "timeto" : timeto.trim(),
                       "standard" : standard.trim(),
                       "price" : price
                    }
                    var ResultTable2 = {
                        "company" : "นครชัยแอร์",
                        "terminal" : startterminal2.trim(),
                       "timeout" : timego3.trim(),
                       "endterminal" : endprovice,
                       "timeto" : timeto.trim(),
                       "standard" : standard.trim(),
                       "price" : price
                    };
                    count++;
                    data_table.push(ResultTable)
                    data_table.push(ResultTable1)
                    data_table.push(ResultTable2)
                }
                ShowTable(data_table)
            }
        });
    }
    function GettableNakorn4(){ //ดึง 2 ตาราง ตารางแรก 3 คอลัมน์ ตารางที่ 2 2 คอลัมน์
        request(url2,(error,response, html) => {
            if (!error && response.statusCode==200){
                let $ = cheerio.load(html);
                let check = $('tr').get().length;
                 getterminal = $('tr').eq(1);
                 startterminal = getterminal.find('p').eq(2).text();
                 startterminal1 = getterminal.find('p').eq(4).text();
                 startterminal2 = getterminal.find('p').eq(6).text();
                 for ( var count =2; count<totaltable;){
                //  if(count == totaltable){
                //     count = count + skip ;
                //     getterminal = $ ('tr').eq(count-1);
                //     startterminal = getterminal.find('p').eq(1).text();
                //     startterminal1 = getterminal.find('p').eq(6).text();
                //     startterminal2 = getterminal.find('p').eq(11).text();
                // }
                    gettable = $ ('tr').eq(count);
                    timego = gettable.find('td').eq(col1).text();
                    timego2 = gettable.find('td').eq(col4+1).text();
                    timego3 = gettable.find('td').eq(col5).text();
                    timeto = gettable.find('td').eq(col2).text();
                    standard = gettable.find('td').eq(col3).text();
                    Tstandard = standard.split(" ");
                    
                    if(Tstandard[0].trim() == "First"){
                            price = Fprice;                    
                        }else{
                            price = Gprice;
                        }
                    var ResultTable = {
                        "company" : "นครชัยแอร์",
                         "terminal" : startterminal.trim(),
                        "timeout" : timego.trim(),
                        "endterminal" : endprovice,
                        "timeto" : timeto.trim(),
                        "standard" : standard.trim(),
                        "price" : price  
                    }
                    var ResultTable1 = {
                        "company" : "นครชัยแอร์",
                        "terminal" : startterminal1.trim(),
                       "timeout" : timego2.trim(),
                       "endterminal" : endprovice,
                       "timeto" : timeto.trim(),
                       "standard" : standard.trim(),
                       "price" : price
                    }
                    var ResultTable2 = {
                        "company" : "นครชัยแอร์",
                        "terminal" : startterminal2.trim(),
                       "timeout" : timego3.trim(),
                       "endterminal" : endprovice,
                       "timeto" : timeto.trim(),
                       "standard" : standard.trim(),
                       "price" : price
                    };
                    count++;
                    data_table.push(ResultTable)
                    data_table.push(ResultTable1)
                    data_table.push(ResultTable2)
                    // if(count >= totaltable){
                    //     ShowTable(ResultTable)
                    // }else{
                    //     ShowTable(ResultTable)
                    // }
                }
                ShowTable(data_table)
            }
        });
    }
    function GettableNakorn5(){ //ดึง 2 ตาราง ตารางแรก 3 คอลัมน์ ตารางที่ 2 2 คอลัมน์ เลื่อน tag p
        request(url2,(error,response, html) => {
            if (!error && response.statusCode==200){
                let $ = cheerio.load(html);
                let check = $('tr').get().length;
                 getterminal = $('tr').eq(1);
                 startterminal = getterminal.find('p').eq(2).text();
                 startterminal1 = getterminal.find('p').eq(4).text();
                 startterminal2 = getterminal.find('p').eq(6).text();
                 for ( var count =2; count<totaltable;){//check - endtable
                //  if(count == totaltable){
                //     count = count + skip ;
                //     getterminal = $ ('tr').eq(count-1);
                //     startterminal = getterminal.find('p').eq(0).text();
                //     startterminal1 = getterminal.find('p').eq(2).text();
                //     startterminal2 = getterminal.find('p').eq(11).text();
                // }
                    gettable = $ ('tr').eq(count);
                    timego = gettable.find('td').eq(col1).text();
                    timego2 = gettable.find('td').eq(col4+1).text();
                    timego3 = gettable.find('td').eq(col5).text();
                    timeto = gettable.find('td').eq(col2).text();
                    standard = gettable.find('td').eq(col3).text();
                    Tstandard = standard.split(" ");
                    
                    if(Tstandard[0].trim() == "First"){
                            price = Fprice;                    
                        }else{
                            price = Gprice;
                        }
                    var ResultTable = {
                        "company" : "นครชัยแอร์",
                         "terminal" : startterminal.trim(),
                        "timeout" : timego.trim(),
                        "endterminal" : endprovice,
                        "timeto"    : timeto.trim(),
                        "standard" : standard.trim(),
                        "price" : price  
                    }
                    var ResultTable1 = {
                        "company" : "นครชัยแอร์",
                        "terminal" : startterminal1.trim(),
                        "timeout" : timego2.trim(),
                        "endterminal" : endprovice,
                        "timeto"    : timeto.trim(),
                        "standard" : standard.trim(),
                        "price" : price
                    }
                    var ResultTable2 = {
                        "company" : "นครชัยแอร์",
                        "terminal" : startterminal2.trim(),
                       "timeout" : timego3.trim(),
                       "endterminal" : endprovice,
                       "timeto"    : timeto.trim(),
                       "standard" : standard.trim(),
                       "price" : price
                    };
                    count++;
                    data_table.push(ResultTable)
                    data_table.push(ResultTable1)
                    data_table.push(ResultTable2)
                    // if(count >= totaltable){
                    //     ShowTable(ResultTable)
                    // }else{
                    //     ShowTable(ResultTable)
                    // }
                }
                ShowTable(data_table)
            }
        });
    }
    function GettableNakorn6(){ //ดึง 2 ตาราง ตารางแรก 3 คอลัมน์ ตารางที่ 2 4 คอลัมน์
        request(url2,(error,response, html) => {
            if (!error && response.statusCode==200){
                let $ = cheerio.load(html);
                let check = $('tr').get().length;
                 getterminal = $('tr').eq(1);
                 startterminal = getterminal.find('p').eq(2).text();
                 startterminal1 = getterminal.find('p').eq(4).text();
                 startterminal2 = getterminal.find('p').eq(6).text();
                 for ( var count =2; count<totaltable;){
                //  if(count == totaltable){
                //     count = count + skip ;
                //     getterminal = $ ('tr').eq(count-1);
                //     startterminal = getterminal.find('p').eq(1).text();
                //     startterminal1 = getterminal.find('p').eq(6).text();
                //     startterminal2 = getterminal.find('p').eq(11).text();
                //     startterminal3 = getterminal.find('p').eq(16).text();
                // }
                    gettable = $ ('tr').eq(count);
                    timego = gettable.find('td').eq(col1).text();
                    timego2 = gettable.find('td').eq(col4+1).text();
                    timego3 = gettable.find('td').eq(col5).text();
                    timego4 = gettable.find('td').eq(col6).text();
                    timeto = gettable.find('td').eq(col2).text();
                    standard = gettable.find('td').eq(col3).text();
                    Tstandard = standard.split(" ");
                    
                    if(Tstandard[0].trim() == "First"){
                            price = Fprice;                    
                        }else{
                            price = Gprice;
                        }
                    var ResultTable = {
                        "company" : "นครชัยแอร์",
                         "terminal" : startterminal.trim(),
                        "timeout" : timego.trim(),
                        "endterminal" : endprovice,
                        "timeto" : timeto.trim(),
                        "standard" : standard.trim(),
                        "price" : price  
                    }
                    var ResultTable1 = {
                        "company" : "นครชัยแอร์",
                        "terminal" : startterminal1.trim(),
                       "timeout" : timego2.trim(),
                       "endterminal" : endprovice,
                       "timeto" : timeto.trim(),
                       "standard" : standard.trim(),
                       "price" : price
                    }
                    var ResultTable2 = {
                        "company" : "นครชัยแอร์",
                        "terminal" : startterminal2.trim(),
                       "timeout" : timego3.trim(),
                       "endterminal" : endprovice,
                       "timeto" : timeto.trim(),
                       "standard" : standard.trim(),
                       "price" : price
                    }
                    // var ResultTable3 = {
                    //     "company" : "นครชัยแอร์",
                    //     "terminal" : startterminal3.trim(),
                    //    "timeout" : timego4.trim(),
                    //    "endterminal" : endprovice,
                    //    "timeto" : timeto.trim(),
                    //    "standard" : standard.trim(),
                    //    "price" : price
                    // };
                    count++;
                    data_table.push(ResultTable)
                    data_table.push(ResultTable1)
                    data_table.push(ResultTable2)
                    // data_table.push(ResultTable3)
                    // if(count >= totaltable){
                    //     ShowTable(ResultTable)
                    // }else{
                    //     ShowTable(ResultTable)
                    // }
                }
                ShowTable(data_table)
            }
        });
    }
    function GettableNakorn7(){ //ดึง 2 ตาราง ตารางแรก 3 คอลัมน์ ตารางที่ 2 5 คอลัมน์
        request(url2,(error,response, html) => {
            if (!error && response.statusCode==200){
                let $ = cheerio.load(html);
                let check = $('tr').get().length;
                 getterminal = $('tr').eq(1);
                 startterminal = getterminal.find('p').eq(2).text();
                 startterminal1 = getterminal.find('p').eq(4).text();
                 startterminal2 = getterminal.find('p').eq(6).text();
                 for ( var count =2; count<totaltable;){
                //  if(count == totaltable){
                //     count = count + skip ;
                //     getterminal = $ ('tr').eq(count-1);
                //     startterminal = getterminal.find('p').eq(1).text();
                //     startterminal1 = getterminal.find('p').eq(6).text();
                //     startterminal2 = getterminal.find('p').eq(11).text();
                //     startterminal3 = getterminal.find('p').eq(16).text();
                //     startterminal4 = getterminal.find('p').eq(21).text();
                // }
                    gettable = $ ('tr').eq(count);
                    timego = gettable.find('td').eq(col1).text();
                    timego2 = gettable.find('td').eq(col4+1).text();
                    timego3 = gettable.find('td').eq(col5).text();
                    timego4 = gettable.find('td').eq(col6).text();
                    timego5 = gettable.find('td').eq(col7).text();
                    timeto = gettable.find('td').eq(col2).text();
                    standard = gettable.find('td').eq(col3).text();
                    Tstandard = standard.split(" ");
                    
                    if(Tstandard[0].trim() == "First"){
                            price = Fprice;                    
                        }else{
                            price = Gprice;
                        }
                    var ResultTable = {
                        "company" : "นครชัยแอร์",
                        "terminal" : startterminal.trim(),
                        "timeout" : timego.trim(),
                        "endterminal" : endprovice,
                        "timeto" : timeto.trim(),
                        "standard" : standard.trim(),
                        "price" : price  
                    }
                    var ResultTable1 = {
                        "company" : "นครชัยแอร์",
                        "terminal" : startterminal1.trim(),
                        "timeout" : timego2.trim(),
                        "endterminal" : endprovice,
                        "timeto" : timeto.trim(),
                        "standard" : standard.trim(),
                        "price" : price
                    }
                    var ResultTable2 = {
                        "company" : "นครชัยแอร์",
                        "terminal" : startterminal2.trim(),
                        "timeout" : timego3.trim(),
                        "endterminal" : endprovice,
                        "timeto" : timeto.trim(),
                        "standard" : standard.trim(),
                        "price" : price
                    }
                    // var ResultTable3 = {
                    //     "company" : "นครชัยแอร์",
                    //     "terminal" : startterminal3,
                    //     "timeout" : timego4.trim(),
                    //     "endterminal" : endprovice,
                    //     "timeto" : timeto.trim(),
                    //     "standard" : standard.trim(),
                    //     "price" : price
                    // }
                    // var ResultTable4 = {
                    //     "company" : "นครชัยแอร์",
                    //     "terminal" : startterminal4,
                    //     "timeout" : timego5.trim(),
                    //     "endterminal" : endprovice,
                    //     "timeto" : timeto.trim(),
                    //     "standard" : standard.trim(),
                    //     "price" : price
                    // };
                    count++;
                    data_table.push(ResultTable)
                    data_table.push(ResultTable1)
                    data_table.push(ResultTable2)
                    // data_table.push(ResultTable3)
                    // data_table.push(ResultTable4)
                    // if(count >= totaltable){
                    //     ShowTable(ResultTable)
                    // }else{
                    //     ShowTable(ResultTable)
                    // }
                }
                ShowTable(data_table)
            }
        });
    }
    function GettableNakorn8(){ //ดึง 2 ตาราง ตารางแรก 3 คอลัมน์ ตารางที่ 2 6 คอลัมน์
        request(url2,(error,response, html) => {
            if (!error && response.statusCode==200){
                let $ = cheerio.load(html);
                let check = $('tr').get().length;
                 getterminal = $('tr').eq(1);
                 startterminal = getterminal.find('p').eq(2).text();
                 startterminal1 = getterminal.find('p').eq(4).text();
                 startterminal2 = getterminal.find('p').eq(6).text();
                 for ( var count =2; count<totaltable;){
                //  if(count == totaltable){
                //     count = count + skip ;
                //     getterminal = $ ('tr').eq(count-1);
                //     startterminal = getterminal.find('p').eq(1).text();
                //     startterminal1 = getterminal.find('p').eq(7).text();
                //     startterminal2 = getterminal.find('p').eq(13).text();
                //     startterminal3 = getterminal.find('p').eq(18).text();
                //     startterminal4 = getterminal.find('p').eq(23).text();
                //     startterminal5 = getterminal.find('p').eq(28).text();
                // }
                    gettable = $ ('tr').eq(count);
                    timego = gettable.find('td').eq(col1).text();
                    timego2 = gettable.find('td').eq(col4+1).text();
                    timego3 = gettable.find('td').eq(col5).text();
                    timego4 = gettable.find('td').eq(col6).text();
                    timego5 = gettable.find('td').eq(col7).text();
                    timego6 = gettable.find('td').eq(col8).text();
                    timeto = gettable.find('td').eq(col2).text();
                    standard = gettable.find('td').eq(col3).text();
                    Tstandard = standard.split(" ");
                    
                    if(Tstandard[0].trim() == "First"){
                            price = Fprice;                    
                        }else{
                            price = Gprice;
                        }
                    var ResultTable = {
                        "company" : "นครชัยแอร์",
                         "terminal" : startterminal.trim(),
                        "timeout" : timego.trim(),
                        "endterminal" : endprovice,
                        "timeto" : timeto.trim(),
                        "standard" : standard.trim(),
                        "price" : price  
                    }
                    var ResultTable1 = {
                        "company" : "นครชัยแอร์",
                        "terminal" : startterminal1.trim(),
                       "timeout" : timego2.trim(),
                       "endterminal" : endprovice,
                       "timeto" : timeto.trim(),
                       "standard" : standard.trim(),
                       "price" : price
                    }
                    var ResultTable2 = {
                        "company" : "นครชัยแอร์",
                        "terminal" : startterminal2.trim(),
                       "timeout" : timego3.trim(),
                       "endterminal" : endprovice,
                       "timeto" : timeto.trim(),
                       "standard" : standard.trim(),
                       "price" : price
                    }
                    // var ResultTable3 = {
                    //     "company" : "นครชัยแอร์",
                    //     "terminal" : startterminal3,
                    //    "timeout" : timego4.trim(),
                    //    "endterminal" : endprovice,
                    //    "timeto" : timeto.trim(),
                    //    "standard" : standard.trim(),
                    //    "price" : price
                    // }
                    // var ResultTable4 = {
                    //     "company" : "นครชัยแอร์",
                    //     "terminal" : startterminal4,
                    //    "timeout" : timego5.trim(),
                    //    "endterminal" : endprovice,
                    //    "timeto" : timeto.trim(),
                    //    "standard" : standard.trim(),
                    //    "price" : price
                    // }
                    // var ResultTable5 = {
                    //     "company" : "นครชัยแอร์",
                    //     "terminal" : startterminal5,
                    //    "timeout" : timego6.trim(),
                    //    "endterminal" : endprovice,
                    //    "timeto" : timeto.trim(),
                    //    "standard" : standard.trim(),
                    //    "price" : price
                    // };
                    count++;
                    data_table.push(ResultTable)
                    data_table.push(ResultTable1)
                    data_table.push(ResultTable2)
                    // data_table.push(ResultTable3)
                    // data_table.push(ResultTable4)
                    // data_table.push(ResultTable5)
                    // if(count >= totaltable){
                    //     ShowTable(ResultTable)
                    // }else{
                    //     ShowTable(ResultTable)
                    // }
                }
                ShowTable(data_table)
            }
        });
    }
    function GettableNakorn9(){ // ดึง 2 ตาราง ตารางแรก 6 คอลัมน์ ตารางที่ 2 3 คอลัมน์
        request(url2,(error,response, html) => {
            if (!error && response.statusCode==200){
                let $ = cheerio.load(html);
               
                let check = $('tr').get().length;
                
                 getterminal = $('tr').eq(1);
                 startterminal = getterminal.find('p').eq(2).text();
                 startterminal1 = getterminal.find('p').eq(4).text();
                 startterminal2 = getterminal.find('p').eq(6).text();
                 startterminal3 = getterminal.find('p').eq(8).text();
                 startterminal4 = getterminal.find('p').eq(10).text();
                 startterminal5 = getterminal.find('p').eq(12).text();
                for ( var count =2; count<totaltable;){
                    // if(count == totaltable){
                    //     count = count + skip ;
                    //     getterminal = $ ('tr').eq(count-1);
                    //     startterminal = getterminal.find('p').eq(1).text();
                    //     startterminal1 = getterminal.find('p').eq(6).text();
                    //     startterminal2 = getterminal.find('p').eq(11).text();
                    // }
                    gettable = $ ('tr').eq(count);
                    timego = gettable.find('td').eq(col1).text();
                    timego2 = gettable.find('td').eq(col4+1).text();
                    timego3 = gettable.find('td').eq(col5).text();
                    timego4 = gettable.find('td').eq(col6).text();
                    timego5 = gettable.find('td').eq(col7).text();
                    timego6 = gettable.find('td').eq(col8).text();
                    timeto = gettable.find('td').eq(col2).text();
                    standard = gettable.find('td').eq(col3).text();
                   
                    Tstandard = standard.split(" ");
                    
                    if(Tstandard[0].trim() == "First"){
                            price = Fprice;                    
                        }else{
                            price = Gprice;
                        }
                    
                    var ResultTable = {
                        "company" : "นครชัยแอร์",
                         "terminal" : startterminal.trim(),
                        "timeout" : timego.trim(),
                        "endterminal" : endprovice,
                        "timeto" : timeto.trim(),
                        "standard" : standard.trim(),
                        "price" : price
                        
                    }
                    var ResultTable1 = {
                        "company" : "นครชัยแอร์",
                        "terminal" : startterminal1.trim(),
                       "timeout" : timego2.trim(),
                       "endterminal" : endprovice,
                       "timeto" : timeto.trim(),
                       "standard" : standard.trim(),
                       "price" : price
                    }
                    var ResultTable2 = {
                        "company" : "นครชัยแอร์",
                        "terminal" : startterminal2.trim(),
                       "timeout" : timego3.trim(),
                       "endterminal" : endprovice,
                       "timeto" : timeto.trim(),
                       "standard" : standard.trim(),
                       "price" : price
                    }
                    // var ResultTable3 = {
                    //     "company" : "นครชัยแอร์",
                    //     "terminal" : startterminal3,
                    //    "timeout" : timego4.trim(),
                    //    "endterminal" : endprovice,
                    //    "timeto" : timeto.trim(),
                    //    "standard" : standard.trim(),
                    //    "price" : price
                    // }
                    // var ResultTable4 = {
                    //     "company" : "นครชัยแอร์",
                    //     "terminal" : startterminal4,
                    //    "timeout" : timego5.trim(),
                    //    "endterminal" : endprovice,
                    //    "timeto" : timeto.trim(),
                    //    "standard" : standard.trim(),
                    //    "price" : price
                    // }
                    // var ResultTable5 = {
                    //     "company" : "นครชัยแอร์",
                    //     "terminal" : startterminal5,
                    //    "timeout" : timego6.trim(),
                    //    "endterminal" : endprovice,
                    //    "timeto" : timeto.trim(),
                    //    "standard" : standard.trim(),
                    //    "price" : price
                    // };
                    count++;
                    data_table.push(ResultTable)
                    data_table.push(ResultTable1)
                    data_table.push(ResultTable2)
                    // data_table.push(ResultTable3)
                    // data_table.push(ResultTable4)
                    // data_table.push(ResultTable5)
                    // if(count >= totaltable){
                    //    ShowTable(ResultTable)
                    // }else{
                    //     ShowTable(ResultTable)
                    // }
                    
                }
                ShowTable(data_table)
            }
        });
    }
    function GettableNakorn10(){ // ดึง 2 ตาราง ตารางแรก 15 คอลัมน์ ตารางที่ 2 15 คอลัมน์
        request(url2,(error,response, html) => {
            if (!error && response.statusCode==200){
                let $ = cheerio.load(html);
               
                let check = $('tr').get().length;
                
                 getterminal = $('tr').eq(1);
                 startterminal = getterminal.find('p').eq(1).text();
                 startterminal1 = getterminal.find('p').eq(6).text();
                 startterminal2 = getterminal.find('p').eq(11).text();
                 startterminal3 = getterminal.find('p').eq(16).text();
                 startterminal4 = getterminal.find('p').eq(21).text();
                 startterminal5 = getterminal.find('p').eq(26).text();
                 startterminal6 = getterminal.find('p').eq(31).text();
                 startterminal7 = getterminal.find('p').eq(36).text();
                 startterminal8 = getterminal.find('p').eq(41).text();
                 startterminal9 = getterminal.find('p').eq(46).text();
                 startterminal10 = getterminal.find('p').eq(51).text();
                 startterminal11 = getterminal.find('p').eq(56).text();
                 startterminal12 = getterminal.find('p').eq(61).text();
                 startterminal13 = getterminal.find('p').eq(66).text();
                 startterminal14 = getterminal.find('p').eq(72).text();
            
                for ( var count =2; count<totaltable;){
                    // if(count == totaltable){
                    //     count = count + skip ;
                    //     getterminal = $ ('tr').eq(count-1);
                    //     startterminal = getterminal.find('p').eq(1).text();
                    //     startterminal1 = getterminal.find('p').eq(6).text();
                    //     startterminal2 = getterminal.find('p').eq(11).text();
                    //     startterminal3 = getterminal.find('p').eq(16).text();
                    //     startterminal4 = getterminal.find('p').eq(21).text();
                    //     startterminal5 = getterminal.find('p').eq(26).text();
                    //     startterminal6 = getterminal.find('p').eq(31).text();
                    //     startterminal7 = getterminal.find('p').eq(36).text();
                    //     startterminal8 = getterminal.find('p').eq(41).text();
                    //     startterminal9 = getterminal.find('p').eq(46).text();
                    //     startterminal10 = getterminal.find('p').eq(51).text();
                    //     startterminal11 = getterminal.find('p').eq(56).text();
                    //     startterminal12 = getterminal.find('p').eq(61).text();
                    //     startterminal13 = getterminal.find('p').eq(66).text();
                    //     startterminal14 = getterminal.find('p').eq(71).text();
             
                    // }
                    gettable = $ ('tr').eq(count);
                    timego = gettable.find('td').eq(col1).text();
                    timego2 = gettable.find('td').eq(col4+1).text();
                    timego3 = gettable.find('td').eq(col5).text();
                    timego4 = gettable.find('td').eq(col6).text();
                    timego5 = gettable.find('td').eq(col7).text();
                    timego6 = gettable.find('td').eq(col8).text();
                    timego7 = gettable.find('td').eq(col9).text();
                    timego8 = gettable.find('td').eq(col10).text();
                    timego9 = gettable.find('td').eq(col11).text();
                    timego10 = gettable.find('td').eq(col12).text();
                    timego11 = gettable.find('td').eq(col13).text();
                    timego12 = gettable.find('td').eq(col14).text();
                    timego13 = gettable.find('td').eq(col15).text();
                    timego14 = gettable.find('td').eq(col16).text();
                    timego15 = gettable.find('td').eq(col17).text();
                    timeto = gettable.find('td').eq(col2).text();
                    standard = gettable.find('td').eq(col3).text();
                   
                    Tstandard = standard.split(" ");
                    
                    if(Tstandard[0].trim() == "First"){
                            price = Fprice;                    
                        }else{
                            price = Gprice;
                        }
                    
                    var ResultTable = {
                        "company" : "นครชัยแอร์",
                         "terminal" : startterminal.trim(),
                        "timeout" : timego.trim(),
                        "endterminal" : endprovice,
                        "timeto" : timeto.trim(),
                        "standard" : standard.trim(),
                        "price" : price
                        
                    }
                    var ResultTable1 = {
                        "company" : "นครชัยแอร์",
                        "terminal" : startterminal1.trim(),
                        "endterminal" : endprovice,
                       "timeout" : timego2.trim(),
                       "timeto" : timeto.trim(),
                       "standard" : standard.trim(),
                       "price" : price
                    }
                    var ResultTable2 = {
                        "company" : "นครชัยแอร์",
                        "terminal" : startterminal2.trim(),
                       "timeout" : timego3.trim(),
                       "endterminal" : endprovice,
                       "timeto" : timeto.trim(),
                       "standard" : standard.trim(),
                       "price" : price
                    }
                    var ResultTable3 = {
                        "company" : "นครชัยแอร์",
                        "terminal" : startterminal3,
                       "timeout" : timego4.trim(),
                       "endterminal" : endprovice,
                       "timeto" : timeto.trim(),
                       "standard" : standard.trim(),
                       "price" : price
                    }
                    var ResultTable4 = {
                        "company" : "นครชัยแอร์",
                        "terminal" : startterminal4,
                       "timeout" : timego5.trim(),
                       "endterminal" : endprovice,
                       "timeto" : timeto.trim(),
                       "standard" : standard.trim(),
                       "price" : price
                    }
                    var ResultTable5 = {
                        "company" : "นครชัยแอร์",
                        "terminal" : startterminal5,
                       "timeout" : timego6.trim(),
                       "endterminal" : endprovice,
                       "timeto" : timeto.trim(),
                       "standard" : standard.trim(),
                       "price" : price
                    }
                    var ResultTable6 = {
                        "company" : "นครชัยแอร์",
                        "terminal" : startterminal6,
                       "timeout" : timego7.trim(),
                       "endterminal" : endprovice,
                       "timeto" : timeto.trim(),
                       "standard" : standard.trim(),
                       "price" : price
                    }
                    var ResultTable7 = {
                        "company" : "นครชัยแอร์",
                        "terminal" : startterminal7,
                       "timeout" : timego8.trim(),
                       "endterminal" : endprovice,
                       "timeto" : timeto.trim(),
                       "standard" : standard.trim(),
                       "price" : price
                    }
                    var ResultTable8 = {
                        "company" : "นครชัยแอร์",
                        "terminal" : startterminal8,
                       "timeout" : timego9.trim(),
                       "endterminal" : endprovice,
                       "timeto" : timeto.trim(),
                       "standard" : standard.trim(),
                       "price" : price
                    }
                    var ResultTable9 = {
                        "company" : "นครชัยแอร์",
                        "terminal" : startterminal9,
                       "timeout" : timego10.trim(),
                       "endterminal" : endprovice,
                       "timeto" : timeto.trim(),
                       "standard" : standard.trim(),
                       "price" : price
                    }
                    var ResultTable10 = {
                        "company" : "นครชัยแอร์",
                        "terminal" : startterminal10,
                       "timeout" : timego11.trim(),
                       "endterminal" : endprovice,
                       "timeto" : timeto.trim(),
                       "standard" : standard.trim(),
                       "price" : price
                    }
                    var ResultTable11 = {
                        "company" : "นครชัยแอร์",
                        "terminal" : startterminal11,
                       "timeout" : timego12.trim(),
                       "endterminal" : endprovice,
                       "timeto" : timeto.trim(),
                       "standard" : standard.trim(),
                       "price" : price
                    }
                    var ResultTable12 = {
                        "company" : "นครชัยแอร์",
                        "terminal" : startterminal12,
                       "timeout" : timego13.trim(),
                       "endterminal" : endprovice,
                       "timeto" : timeto.trim(),
                       "standard" : standard.trim(),
                       "price" : price
                    }
                    var ResultTable13 = {
                        "company" : "นครชัยแอร์",
                        "terminal" : startterminal13,
                       "timeout" : timego14.trim(),
                       "endterminal" : endprovice,
                       "timeto" : timeto.trim(),
                       "standard" : standard.trim(),
                       "price" : price
                    }
                    var ResultTable14 = {
                        "company" : "นครชัยแอร์",
                        "terminal" : startterminal14,
                       "timeout" : timego15.trim(),
                       "endterminal" : endprovice,
                       "timeto" : timeto.trim(),
                       "standard" : standard.trim(),
                       "price" : price
                    };
                    count++;
                    data_table.push(ResultTable)
                    data_table.push(ResultTable1)
                    data_table.push(ResultTable2)
                    data_table.push(ResultTable3)
                    data_table.push(ResultTable4)
                    data_table.push(ResultTable5)
                    data_table.push(ResultTable6)
                    data_table.push(ResultTable7)
                    data_table.push(ResultTable8)
                    data_table.push(ResultTable9)
                    data_table.push(ResultTable10)
                    data_table.push(ResultTable11)
                    data_table.push(ResultTable12)
                    data_table.push(ResultTable13)
                    data_table.push(ResultTable14)
                }
                ShowTable(data_table)
            }
        });
    }
    function GettableNakorn11(){ // ดึง 2 ตาราง ตารางแรก 13 คอลัมน์ ตารางที่ 2 14 คอลัมน์ เลื่อน tag p
        request(url2,(error,response, html) => {
            if (!error && response.statusCode==200){
                let $ = cheerio.load(html);
               
                let check = $('tr').get().length;
                
                 getterminal = $('tr').eq(1);
                 startterminal = getterminal.find('p').eq(1).text();
                 startterminal1 = getterminal.find('p').eq(6).text();
                 startterminal2 = getterminal.find('p').eq(11).text();
                 startterminal3 = getterminal.find('p').eq(16).text();
                 startterminal4 = getterminal.find('p').eq(21).text();
                 startterminal5 = getterminal.find('p').eq(26).text();
                 startterminal6 = getterminal.find('p').eq(31).text();
                 startterminal7 = getterminal.find('p').eq(36).text();
                 startterminal8 = getterminal.find('p').eq(41).text();
                 startterminal9 = getterminal.find('p').eq(47).text();
                 startterminal10 = getterminal.find('p').eq(52).text();
                 startterminal11 = getterminal.find('p').eq(57).text();
                 startterminal12 = getterminal.find('p').eq(62).text();
                 startterminal13 = getterminal.find('p').eq(67).text();
                 startterminal14 = getterminal.find('p').eq(72).text();
            
                for ( var count =2; count<check - endtable;){
                    if(count == totaltable){
                        count = count + skip ;
                        getterminal = $ ('tr').eq(count-1);
                        startterminal = getterminal.find('p').eq(1).text();
                        startterminal1 = getterminal.find('p').eq(6).text();
                        startterminal2 = getterminal.find('p').eq(11).text();
                        startterminal3 = getterminal.find('p').eq(16).text();
                        startterminal4 = getterminal.find('p').eq(21).text();
                        startterminal5 = getterminal.find('p').eq(26).text();
                        startterminal6 = getterminal.find('p').eq(31).text();
                        startterminal7 = getterminal.find('p').eq(36).text();
                        startterminal8 = getterminal.find('p').eq(41).text();
                        startterminal9 = getterminal.find('p').eq(46).text();
                        startterminal10 = getterminal.find('p').eq(51).text();
                        startterminal11 = getterminal.find('p').eq(56).text();
                        startterminal12 = getterminal.find('p').eq(61).text();
                        startterminal13 = getterminal.find('p').eq(66).text();
                        startterminal14 = getterminal.find('p').eq(71).text();
             
                    }
                    gettable = $ ('tr').eq(count);
                    timego = gettable.find('td').eq(col1).text();
                    timego2 = gettable.find('td').eq(col4+1).text();
                    timego3 = gettable.find('td').eq(col5).text();
                    timego4 = gettable.find('td').eq(col6).text();
                    timego5 = gettable.find('td').eq(col7).text();
                    timego6 = gettable.find('td').eq(col8).text();
                    timego7 = gettable.find('td').eq(col9).text();
                    timego8 = gettable.find('td').eq(col10).text();
                    timego9 = gettable.find('td').eq(col11).text();
                    timego10 = gettable.find('td').eq(col12).text();
                    timego11 = gettable.find('td').eq(col13).text();
                    timego12 = gettable.find('td').eq(col14).text();
                    timego13 = gettable.find('td').eq(col15).text();
                    timego14 = gettable.find('td').eq(col16).text();
                    timego15 = gettable.find('td').eq(col17).text();
                    timeto = gettable.find('td').eq(col2).text();
                    standard = gettable.find('td').eq(col3).text();
                   
                    Tstandard = standard.split(" ");
                    
                    if(Tstandard[0].trim() == "First"){
                            price = Fprice;                    
                        }else{
                            price = Gprice;
                        }
                    
                    var ResultTable = {
                        "company" : "นครชัยแอร์",
                         "terminal" : startterminal.trim(),
                        "timeout" : timego.trim(),
                        "endterminal" : endprovice,
                        "timeto" : timeto.trim(),
                        "standard" : standard.trim(),
                        "price" : price
                        
                    }
                    var ResultTable1 = {
                        "company" : "นครชัยแอร์",
                        "terminal" : startterminal1.trim(),
                        "timeout" : timego2.trim(),
                        "endterminal" : endprovice,
                        "timeto" : timeto.trim(),
                        "standard" : standard.trim(),
                        "price" : price
                    }
                    var ResultTable2 = {
                        "company" : "นครชัยแอร์",
                        "terminal" : startterminal2.trim(),
                       "timeout" : timego3.trim(),
                       "endterminal" : endprovice,
                       "timeto" : timeto.trim(),
                       "standard" : standard.trim(),
                       "price" : price
                    }
                    var ResultTable3 = {
                        "company" : "นครชัยแอร์",
                        "terminal" : startterminal3,
                       "timeout" : timego4.trim(),
                       "endterminal" : endprovice,
                       "timeto" : timeto.trim(),
                       "standard" : standard.trim(),
                       "price" : price
                    }
                    var ResultTable4 = {
                        "company" : "นครชัยแอร์",
                        "terminal" : startterminal4,
                       "timeout" : timego5.trim(),
                       "endterminal" : endprovice,
                       "timeto" : timeto.trim(),
                       "standard" : standard.trim(),
                       "price" : price
                    }
                    var ResultTable5 = {
                        "company" : "นครชัยแอร์",
                        "terminal" : startterminal5,
                       "timeout" : timego6.trim(),
                       "endterminal" : endprovice,
                       "timeto" : timeto.trim(),
                       "standard" : standard.trim(),
                       "price" : price
                    }
                    var ResultTable6 = {
                        "company" : "นครชัยแอร์",
                        "terminal" : startterminal6,
                       "timeout" : timego7.trim(),
                       "endterminal" : endprovice,
                       "timeto" : timeto.trim(),
                       "standard" : standard.trim(),
                       "price" : price
                    }
                    var ResultTable7 = {
                        "company" : "นครชัยแอร์",
                        "terminal" : startterminal7,
                       "timeout" : timego8.trim(),
                       "endterminal" : endprovice,
                       "timeto" : timeto.trim(),
                       "standard" : standard.trim(),
                       "price" : price
                    }
                    var ResultTable8 = {
                        "company" : "นครชัยแอร์",
                        "terminal" : startterminal8,
                       "timeout" : timego9.trim(),
                       "endterminal" : endprovice,
                       "timeto" : timeto.trim(),
                       "standard" : standard.trim(),
                       "price" : price
                    }
                    var ResultTable9 = {
                        "company" : "นครชัยแอร์",
                        "terminal" : startterminal9,
                       "timeout" : timego10.trim(),
                       "endterminal" : endprovice,
                       "timeto" : timeto.trim(),
                       "standard" : standard.trim(),
                       "price" : price
                    }
                    var ResultTable10 = {
                        "company" : "นครชัยแอร์",
                        "terminal" : startterminal10,
                       "timeout" : timego11.trim(),
                       "endterminal" : endprovice,
                       "timeto" : timeto.trim(),
                       "standard" : standard.trim(),
                       "price" : price
                    }
                    var ResultTable11 = {
                        "company" : "นครชัยแอร์",
                        "terminal" : startterminal11,
                       "timeout" : timego12.trim(),
                       "endterminal" : endprovice,
                       "timeto" : timeto.trim(),
                       "standard" : standard.trim(),
                       "price" : price
                    }
                    var ResultTable12 = {
                        "company" : "นครชัยแอร์",
                        "terminal" : startterminal12,
                       "timeout" : timego13.trim(),
                       "endterminal" : endprovice,
                       "timeto" : timeto.trim(),
                       "standard" : standard.trim(),
                       "price" : price
                    }
                    var ResultTable13 = {
                        "company" : "นครชัยแอร์",
                        "terminal" : startterminal13,
                       "timeout" : timego14.trim(),
                       "endterminal" : endprovice,
                       "timeto" : timeto.trim(),
                       "standard" : standard.trim(),
                       "price" : price
                    }
                    var ResultTable14 = {
                        "company" : "นครชัยแอร์",
                        "terminal" : startterminal14,
                       "timeout" : timego15.trim(),
                       "endterminal" : endprovice,
                       "timeto" : timeto.trim(),
                       "standard" : standard.trim(),
                       "price" : price
                    };
                    count++;
                    data_table.push(ResultTable)
                    data_table.push(ResultTable1)
                    data_table.push(ResultTable2)
                    data_table.push(ResultTable3)
                    data_table.push(ResultTable4)
                    data_table.push(ResultTable5)
                    data_table.push(ResultTable6)
                    data_table.push(ResultTable7)
                    data_table.push(ResultTable8)
                    data_table.push(ResultTable9)
                    data_table.push(ResultTable10)
                    data_table.push(ResultTable11)
                    data_table.push(ResultTable12)
                    data_table.push(ResultTable13)
                    data_table.push(ResultTable14)
                    // if(count >=totaltable){
                    //     ShowTable(ResultTable)
                    // }else{
                    //     ShowTable(ResultTable)
                    // }
                }
                ShowTable(data_table)
            }
        });
    }
    function GettableNakorn12(){ // ดึง 2 ตาราง ตารางแรก 19 คอลัมน์ ตารางที่ 2 11 คอลัมน์
        request(url2,(error,response, html) => {
            if (!error && response.statusCode==200){
                let $ = cheerio.load(html);
               
                let check = $('tr').get().length;
                
                 getterminal = $('tr').eq(1);
                 startterminal = getterminal.find('p').eq(1).text();
                 startterminal1 = getterminal.find('p').eq(6).text();
                 startterminal2 = getterminal.find('p').eq(11).text();
                 startterminal3 = getterminal.find('p').eq(16).text();
                 startterminal4 = getterminal.find('p').eq(21).text();
                 startterminal5 = getterminal.find('p').eq(26).text();
                 startterminal6 = getterminal.find('p').eq(31).text();
                 startterminal7 = getterminal.find('p').eq(36).text();
                 startterminal8 = getterminal.find('p').eq(41).text();
                 startterminal9 = getterminal.find('p').eq(46).text();
                 startterminal10 = getterminal.find('p').eq(51).text();
                 startterminal11 = getterminal.find('p').eq(56).text();
                 startterminal12 = getterminal.find('p').eq(61).text();
                 startterminal13 = getterminal.find('p').eq(66).text();
                 startterminal14 = getterminal.find('p').eq(71).text();
                 startterminal15 = getterminal.find('p').eq(76).text();
                 startterminal16 = getterminal.find('p').eq(81).text();
                 startterminal17 = getterminal.find('p').eq(86).text();
                 startterminal18 = getterminal.find('p').eq(91).text();
            
                for ( var count =2; count<check - endtable;){
                    if(count == totaltable){
                        count = count + skip ;
                        getterminal = $ ('tr').eq(count-1);
                        startterminal = getterminal.find('p').eq(1).text();
                        startterminal1 = getterminal.find('p').eq(6).text();
                        startterminal2 = getterminal.find('p').eq(11).text();
                        startterminal3 = getterminal.find('p').eq(16).text();
                        startterminal4 = getterminal.find('p').eq(21).text();
                        startterminal5 = getterminal.find('p').eq(26).text();
                        startterminal6 = getterminal.find('p').eq(31).text();
                        startterminal7 = getterminal.find('p').eq(36).text();
                        startterminal8 = getterminal.find('p').eq(41).text();
                        startterminal9 = getterminal.find('p').eq(46).text();
                        startterminal10 = getterminal.find('p').eq(51).text();
                        startterminal11 = getterminal.find('p').eq(56).text();
                        startterminal12 = getterminal.find('p').eq(61).text();
                        startterminal13 = getterminal.find('p').eq(66).text();
                        startterminal14 = getterminal.find('p').eq(71).text();
             
                    }
                    gettable = $ ('tr').eq(count);
                    timego = gettable.find('td').eq(col1).text();
                    timego2 = gettable.find('td').eq(col4+1).text();
                    timego3 = gettable.find('td').eq(col5).text();
                    timego4 = gettable.find('td').eq(col6).text();
                    timego5 = gettable.find('td').eq(col7).text();
                    timego6 = gettable.find('td').eq(col8).text();
                    timego7 = gettable.find('td').eq(col9).text();
                    timego8 = gettable.find('td').eq(col10).text();
                    timego9 = gettable.find('td').eq(col11).text();
                    timego10 = gettable.find('td').eq(col12).text();
                    timego11 = gettable.find('td').eq(col13).text();
                    timego12 = gettable.find('td').eq(col14).text();
                    timego13 = gettable.find('td').eq(col15).text();
                    timego14 = gettable.find('td').eq(col16).text();
                    timego15 = gettable.find('td').eq(col17).text();
                    timeto = gettable.find('td').eq(col2).text();
                    standard = gettable.find('td').eq(col3).text();
                   
                    Tstandard = standard.split(" ");
                    
                    if(Tstandard[0].trim() == "First"){
                            price = Fprice;                    
                        }else{
                            price = Gprice;
                        }
                    
                    var ResultTable = {
                        "company" : "นครชัยแอร์",
                         "terminal" : startterminal.trim(),
                        "timeout" : timego.trim(),
                        "endterminal" : endprovice,
                        "timeto" : timeto.trim(),
                        "standard" : standard.trim(),
                        "price" : price
                        
                    }
                    var ResultTable1 = {
                        "company" : "นครชัยแอร์",
                        "terminal" : startterminal1.trim(),
                       "timeout" : timego2.trim(),
                       "endterminal" : endprovice,
                       "timeto" : timeto.trim(),
                       "standard" : standard.trim(),
                       "price" : price
                    }
                    var ResultTable2 = {
                        "company" : "นครชัยแอร์",
                        "terminal" : startterminal2.trim(),
                       "timeout" : timego3.trim(),
                       "endterminal" : endprovice,
                       "timeto" : timeto.trim(),
                       "standard" : standard.trim(),
                       "price" : price
                    }
                    var ResultTable3 = {
                        "company" : "นครชัยแอร์",
                        "terminal" : startterminal3,
                       "timeout" : timego4.trim(),
                       "endterminal" : endprovice,
                       "timeto" : timeto.trim(),
                       "standard" : standard.trim(),
                       "price" : price
                    }
                    var ResultTable4 = {
                        "company" : "นครชัยแอร์",
                        "terminal" : startterminal4,
                       "timeout" : timego5.trim(),
                       "endterminal" : endprovice,
                       "timeto" : timeto.trim(),
                       "standard" : standard.trim(),
                       "price" : price
                    }
                    var ResultTable5 = {
                        "company" : "นครชัยแอร์",
                        "terminal" : startterminal5,
                       "timeout" : timego6.trim(),
                       "endterminal" : endprovice,
                       "timeto" : timeto.trim(),
                       "standard" : standard.trim(),
                       "price" : price
                    }
                    var ResultTable6 = {
                        "company" : "นครชัยแอร์",
                        "terminal" : startterminal6,
                       "timeout" : timego7.trim(),
                       "endterminal" : endprovice,
                       "timeto" : timeto.trim(),
                       "standard" : standard.trim(),
                       "price" : price
                    }
                    var ResultTable7 = {
                        "company" : "นครชัยแอร์",
                        "terminal" : startterminal7,
                       "timeout" : timego8.trim(),
                       "endterminal" : endprovice,
                       "timeto" : timeto.trim(),
                       "standard" : standard.trim(),
                       "price" : price
                    }
                    var ResultTable8 = {
                        "company" : "นครชัยแอร์",
                        "terminal" : startterminal8,
                       "timeout" : timego9.trim(),
                       "endterminal" : endprovice,
                       "timeto" : timeto.trim(),
                       "standard" : standard.trim(),
                       "price" : price
                    }
                    var ResultTable9 = {
                        "company" : "นครชัยแอร์",
                        "terminal" : startterminal9,
                       "timeout" : timego10.trim(),
                       "endterminal" : endprovice,
                       "timeto" : timeto.trim(),
                       "standard" : standard.trim(),
                       "price" : price
                    }
                    var ResultTable10 = {
                        "company" : "นครชัยแอร์",
                        "terminal" : startterminal10,
                       "timeout" : timego11.trim(),
                       "endterminal" : endprovice,
                       "timeto" : timeto.trim(),
                       "standard" : standard.trim(),
                       "price" : price
                    }
                    var ResultTable11 = {
                        "company" : "นครชัยแอร์",
                        "terminal" : startterminal11,
                       "timeout" : timego12.trim(),
                       "endterminal" : endprovice,
                       "timeto" : timeto.trim(),
                       "standard" : standard.trim(),
                       "price" : price
                    }
                    var ResultTable12 = {
                        "company" : "นครชัยแอร์",
                        "terminal" : startterminal12,
                       "timeout" : timego13.trim(),
                       "endterminal" : endprovice,
                       "timeto" : timeto.trim(),
                       "standard" : standard.trim(),
                       "price" : price
                    }
                    var ResultTable13 = {
                        "company" : "นครชัยแอร์",
                        "terminal" : startterminal13,
                       "timeout" : timego14.trim(),
                       "endterminal" : endprovice,
                       "timeto" : timeto.trim(),
                       "standard" : standard.trim(),
                       "price" : price
                    }
                    var ResultTable14 = {
                        "company" : "นครชัยแอร์",
                        "terminal" : startterminal14,
                       "timeout" : timego15.trim(),
                       "endterminal" : endprovice,
                       "timeto" : timeto.trim(),
                       "standard" : standard.trim(),
                       "price" : price
                    }
                    count++;
                    data_table.push(ResultTable)
                    data_table.push(ResultTable1)
                    data_table.push(ResultTable2)
                    data_table.push(ResultTable3)
                    data_table.push(ResultTable4)
                    data_table.push(ResultTable5)
                    data_table.push(ResultTable6)
                    data_table.push(ResultTable7)
                    data_table.push(ResultTable8)
                    data_table.push(ResultTable9)
                    data_table.push(ResultTable10)
                    data_table.push(ResultTable11)
                    data_table.push(ResultTable12)
                    data_table.push(ResultTable13)
                    data_table.push(ResultTable14)
                }
                ShowTable(data_table)
            }
        });
    }
    function GetBKS(){ //สำหรับ 1 แถว
        request(url3,(error,response, html) => {
            if (!error && response.statusCode==200){
    
                let $ = cheerio.load(html);
                let check = $ ('div').eq(27).text();
                
                 getterminal = $ ('tr').eq(6);
                 startterminal = getterminal.find('span').eq(col4+1).text();
               
                    // gettable = $ ('tr').eq(6);
                    // timego = gettable.find('span').eq(col4+1).text();
                    // timeto = gettable.find('td').eq(col2).text();
                    // standard = gettable.find('td').eq(col3).text();
                    startterminal = $ ('div').eq(28).text();
                    timego = $ ('div').eq(27).text();
                    standard = $ ('div').eq(29).text();
                    price = $('div').eq(31).text();
                    var start = startterminal;
                    var begin = start.split("-");
                    var end = begin.pop()
                    var ResultTable = {
                        "company" : "บขส",
                        "terminal" : begin[0],
                        "endterminal" : end,
                        "timeout" : timego,
                        "timeto" : "ไม่ระบุ",
                        "standard" : standard,
                        "price" : price
                    };
                    data_table.push(ResultTable)
                    ShowTable(data_table)
            }   
        });
    }
    function GetBKS1(){// สำหรับ 2 แถว
        request(url3,(error,response, html) => {
            if (!error && response.statusCode==200){
    
                let $ = cheerio.load(html);
                let check = $ ('div').eq(27).text();
                
                 getterminal = $ ('tr').eq(6);
                 startterminal = getterminal.find('span').eq(col4+1).text();
               
                    // gettable = $ ('tr').eq(6);
                    // timego = gettable.find('span').eq(col4+1).text();
                    // timeto = gettable.find('td').eq(col2).text();
                    // standard = gettable.find('td').eq(col3).text();
                    startterminal = $ ('div').eq(28).text();
                    timego = $ ('div').eq(27).text();
                    standard = $ ('div').eq(29).text();
                    price = $('div').eq(31).text();
                    startterminal = startterminal.split("-");
                    end = startterminal.pop();
    
                    startterminal1 = $ ('div').eq(35).text();
                    timego1 = $ ('div').eq(34).text();
                    standard1 = $ ('div').eq(36).text();
                    price1 = $('div').eq(38).text();
                    startterminal1 = startterminal1.split("-");
                    end1 = startterminal1.pop();
                   
                    var ResultTable = {
                        "company" : "บขส",
                        "terminal" : startterminal[0],
                        "timeout" : timego,
                        "endterminal" : end,
                        "timeto" : "ไม่ระบุ",
                        "standard" : standard,
                        "price" : price
                    }
                    var ResultTable1 = {
                        "company" : "บขส",
                        "terminal" : startterminal1[0],
                        "timeout" : timego1,
                        "endterminal" : end1,
                        "timeto" : "ไม่ระบุ",
                        "standard" : standard1,
                        "price" : price1
                    };
                    data_table.push(ResultTable)
                    data_table.push(ResultTable1)
                    ShowTable(data_table)
            }   
        });
    }
    function GetBKS2(){// สำหรับ 3 แถว
        request(url3,(error,response, html) => {
            if (!error && response.statusCode==200){
    
                let $ = cheerio.load(html);
                let check = $ ('div').eq(27).text();
                
                 getterminal = $ ('tr').eq(6);
                 startterminal = getterminal.find('span').eq(col4+1).text();
                    // gettable = $ ('tr').eq(6);
                    // timego = gettable.find('span').eq(col4+1).text();
                    // timeto = gettable.find('td').eq(col2).text();
                    // standard = gettable.find('td').eq(col3).text();
               
                    startterminal = $ ('div').eq(28).text();
                    timego = $ ('div').eq(27).text();
                    standard = $ ('div').eq(29).text();
                    price = $('div').eq(31).text();
                    startterminal = startterminal.split("-");
                    end = startterminal.pop();

                    startterminal1 = $ ('div').eq(35).text();
                    timego1 = $ ('div').eq(34).text();
                    standard1 = $ ('div').eq(36).text();
                    price1 = $('div').eq(38).text();
                    startterminal1 = startterminal1.split("-");
                    end1 = startterminal1.pop()

                    startterminal2 = $ ('div').eq(42).text();
                    timego2 = $ ('div').eq(41).text();
                    standard2 = $ ('div').eq(43).text();
                    price2 = $('div').eq(45).text();
                    startterminal2 = startterminal2.split("-");
                    end2 = startterminal2.pop()

                    var ResultTable = {
                        "company" : "บขส",
                        "terminal" : startterminal[0],
                        "timeout" : timego,
                        "endterminal" : end,
                        "timeto" : "ไม่ระบุ",
                        "standard" : standard,
                        "price" : price
                    }
                    var ResultTable1 = {
                        "company" : "บขส",
                        "terminal" : startterminal1[0],
                        "timeout" : timego1,
                        "endterminal" : end1,
                        "timeto" : "ไม่ระบุ",
                        "standard" : standard1,
                        "price" : price1
                    }
                    var ResultTable2 = {
                        "company" : "บขส",
                        "terminal" : startterminal2[0],
                        "timeout" : timego2,
                        "endterminal" : end2,
                        "timeto" : "ไม่ระบุ",
                        "standard" : standard2,
                        "price" : price2
                    };
                    data_table.push(ResultTable)
                    data_table.push(ResultTable1)
                    data_table.push(ResultTable2)
                    ShowTable(data_table)
            }   
        });
    }
    function GetBKS3(){// สำหรับ 4 แถว
        request(url3,(error,response, html) => {
            if (!error && response.statusCode==200){
    
                let $ = cheerio.load(html);
                let check = $ ('div').eq(27).text();
                
                 getterminal = $ ('tr').eq(6);
                 startterminal = getterminal.find('span').eq(col4+1).text();
               
                    // gettable = $ ('tr').eq(6);
                    // timego = gettable.find('span').eq(col4+1).text();
                    // timeto = gettable.find('td').eq(col2).text();
                    // standard = gettable.find('td').eq(col3).text();
                    startterminal = $ ('div').eq(28).text();
                    timego = $ ('div').eq(27).text();
                    standard = $ ('div').eq(29).text();
                    price = $('div').eq(31).text();
                    startterminal = startterminal.split("-");
                    end = startterminal.pop();

                    startterminal1 = $ ('div').eq(35).text();
                    timego1 = $ ('div').eq(34).text();
                    standard1 = $ ('div').eq(36).text();
                    price1 = $('div').eq(38).text();
                    startterminal1 = startterminal1.split("-");
                    end1 = startterminal1.pop();

                    startterminal2 = $ ('div').eq(42).text();
                    timego2 = $ ('div').eq(41).text();
                    standard2 = $ ('div').eq(43).text();
                    price2 = $('div').eq(45).text();
                    startterminal2 = startterminal2.split("-");
                    end2 = startterminal2.pop();

                    startterminal3 = $ ('div').eq(49).text();
                    timego3 = $ ('div').eq(48).text();
                    standard3 = $ ('div').eq(50).text();
                    price3 = $('div').eq(52).text();
                    startterminal3 = startterminal3.split("-");
                    end3 = startterminal3.pop();
                    var ResultTable = {
                        "company" : "บขส",
                        "terminal" : startterminal[0],
                        "timeout" : timego,
                        "endterminal" : end,
                        "timeto" : "ไม่ระบุ",
                        "standard" : standard,
                        "price" : price
                    }
                    var ResultTable1 = {
                        "company" : "บขส",
                        "terminal" : startterminal1[0],
                        "timeout" : timego1,
                        "endterminal" : end1,
                        "timeto" : "ไม่ระบุ",
                        "standard" : standard1,
                        "price" : price1
                    }
                    var ResultTable2 = {
                        "company" : "บขส",
                        "terminal" : startterminal2[0],
                        "timeout" : timego2,
                        "endterminal" : end2,
                        "timeto" : "ไม่ระบุ",
                        "standard" : standard2,
                        "price" : price2
                    }
                    var ResultTable3 = {
                        "company" : "บขส",
                        "terminal" : startterminal3[0],
                        "timeout" : timego3,
                        "endterminal" : end3,
                        "timeto" : "ไม่ระบุ",
                        "standard" : standard3,
                        "price" : price3
                    };
                    data_table.push(ResultTable)
                    data_table.push(ResultTable1) 
                    data_table.push(ResultTable2)
                    data_table.push(ResultTable3)
                    ShowTable(data_table)
            }   
        });
    }
    function GetBKS4() { // สำหรับ 5 แถว

        request(url3, (error, response, html) => {
            if (!error && response.statusCode == 200) {

                let $ = cheerio.load(html);
                let check = $('div').eq(27).text();

                getterminal = $('tr').eq(6);
                startterminal = getterminal.find('span').eq(6).text();

                startterminal = $('div').eq(28).text();
                timego = $('div').eq(27).text();
                standard = $('div').eq(29).text();
                price = $('div').eq(31).text();
                startterminal = startterminal.split("-");
                end = startterminal.pop()

                startterminal1 = $('div').eq(35).text();
                timego1 = $('div').eq(34).text();
                standard1 = $('div').eq(36).text();
                price1 = $('div').eq(38).text();
                startterminal1 = startterminal1.split("-");
                end1 = startterminal1.pop()

                startterminal2 = $('div').eq(42).text();
                timego2 = $('div').eq(41).text();
                standard2 = $('div').eq(43).text();
                price2 = $('div').eq(45).text();
                startterminal2 = startterminal2.split("-");
                end2 = startterminal2.pop()

                startterminal3 = $('div').eq(49).text();
                timego3 = $('div').eq(48).text();
                standard3 = $('div').eq(50).text();
                price3 = $('div').eq(52).text();
                startterminal3 = startterminal3.split("-");
                end3 = startterminal3.pop()

                startterminal4 = $('div').eq(56).text();
                timego4 = $('div').eq(55).text();
                standard4 = $('div').eq(57).text();
                price4 = $('div').eq(59).text();
                startterminal4 = startterminal4.split("-");
                end4 = startterminal4.pop()
                ResultTable = {
                        "company": "บขส",
                        "terminal": startterminal[0],
                        "timeout": timego,
                        "endterminal" : end,
                        "timeto" : "ไม่ระบุ",
                        "standard": standard,
                        "price": price
                    }
                    ResultTable1 = {
                        "company": "บขส",
                        "terminal": startterminal1[0],
                        "timeout": timego1,
                        "endterminal" : end1,
                        "timeto" : "ไม่ระบุ",
                        "standard": standard1,
                        "price": price1
                    }
                    ResultTable2 = {
                        "company": "บขส",
                        "terminal": startterminal2[0],
                        "timeout": timego2,
                        "endterminal" : end2,
                        "timeto" : "ไม่ระบุ",
                        "standard": standard2,
                        "price": price2
                    }
                    ResultTable3 = {
                        "company": "บขส",
                        "terminal": startterminal3[0],
                        "timeout": timego3,
                        "endterminal" : end3,
                        "timeto" : "ไม่ระบุ",
                        "standard": standard3,
                        "price": price3
                    }        
                    ResultTable4 = {
                        "company": "บขส",
                        "terminal": startterminal4[0],
                        "timeout": timego4,
                        "endterminal" : end4,
                        "timeto" : "ไม่ระบุ",
                        "standard": standard4,
                        "price": price4
                    }        
                data_table.push(ResultTable)
                data_table.push(ResultTable1)
                data_table.push(ResultTable2)
                data_table.push(ResultTable3)
                data_table.push(ResultTable4)
                ShowTable(data_table);

            };
            // return this.ResultTable;
        });
        
    }
    function GetBKS5() { // สำหรับ 6 แถว

        request(url3, (error, response, html) => {
            if (!error && response.statusCode == 200) {

                let $ = cheerio.load(html);
                let check = $('div').eq(27).text();

                getterminal = $('tr').eq(6);
                startterminal = getterminal.find('span').eq(6).text();

                startterminal = $('div').eq(28).text();
                timego = $('div').eq(27).text();
                standard = $('div').eq(29).text();
                price = $('div').eq(31).text();
                startterminal = startterminal.split("-");
                end = startterminal.pop()

                startterminal1 = $('div').eq(35).text();
                timego1 = $('div').eq(34).text();
                standard1 = $('div').eq(36).text();
                price1 = $('div').eq(38).text();
                startterminal1 = startterminal1.split("-");
                end1 = startterminal1.pop()

                startterminal2 = $('div').eq(42).text();
                timego2 = $('div').eq(41).text();
                standard2 = $('div').eq(43).text();
                price2 = $('div').eq(45).text();
                startterminal2 = startterminal2.split("-");
                end2 = startterminal2.pop()

                startterminal3 = $('div').eq(49).text();
                timego3 = $('div').eq(48).text();
                standard3 = $('div').eq(50).text();
                price3 = $('div').eq(52).text();
                startterminal3 = startterminal3.split("-");
                end3 = startterminal3.pop()

                startterminal4 = $('div').eq(56).text();
                timego4 = $('div').eq(55).text();
                standard4 = $('div').eq(57).text();
                price4 = $('div').eq(59).text();
                startterminal4 = startterminal4.split("-");
                end4 = startterminal4.pop()

                startterminal5 = $('div').eq(63).text();
                timego5 = $('div').eq(62).text();
                standard5 = $('div').eq(64).text();
                price5 = $('div').eq(66).text();
                startterminal5 = startterminal5.split("-");
                end5 = startterminal5.pop()

                ResultTable = {
                        "company": "บขส",
                        "terminal": startterminal[0],
                        "timeout": timego,
                        "endterminal" : end,
                        "timeto" : "ไม่ระบุ",
                        "standard": standard,
                        "price": price
                    }
                    ResultTable1 = {
                        "company": "บขส",
                        "terminal": startterminal1[0],
                        "timeout": timego1,
                        "endterminal" : end1,
                        "timeto" : "ไม่ระบุ",
                        "standard": standard1,
                        "price": price1
                    }
                    ResultTable2 = {
                        "company": "บขส",
                        "terminal": startterminal2[0],
                        "timeout": timego2,
                        "endterminal" : end2,
                        "timeto" : "ไม่ระบุ",
                        "standard": standard2,
                        "price": price2
                    }
                    ResultTable3 = {
                        "company": "บขส",
                        "terminal": startterminal3[0],
                        "timeout": timego3,
                        "endterminal" : end3,
                        "timeto" : "ไม่ระบุ",
                        "standard": standard3,
                        "price": price3
                    }        
                    ResultTable4 = {
                        "company": "บขส",
                        "terminal": startterminal4[0],
                        "timeout": timego4,
                        "endterminal" : end4,
                        "timeto" : "ไม่ระบุ",
                        "standard": standard4,
                        "price": price4
                    }  
                    ResultTable5 = {
                        "company": "บขส",
                        "terminal": startterminal5[0],
                        "timeout": timego5,
                        "endterminal" : end5,
                        "timeto" : "ไม่ระบุ",
                        "standard": standard5,
                        "price": price5
                    }      
                data_table.push(ResultTable)
                data_table.push(ResultTable1)
                data_table.push(ResultTable2)
                data_table.push(ResultTable3)
                data_table.push(ResultTable4)
                data_table.push(ResultTable5)
                ShowTable(data_table);

            };
            // return this.ResultTable;
        });
        
    }
    function GetBKS_All(){
        request(url3,(error,response, html) => {
            if (!error && response.statusCode==200){
                
                let $ = cheerio.load(html);
                let check = $ ('div').eq(27).text();
                
                 getterminal = $ ('tr').eq(6);
                 startterminal = getterminal.find('span').eq(col4+1).text();
                    
                    for(i = 0 ; i < totalrow;){
                    startterminal = $ ('div').eq(startc).text();
                    timego = $ ('div').eq(time).text();
                    standard = $ ('div').eq(stand).text();
                    price = $('div').eq(pricec).text();
                    var start = startterminal;
                    var begin = start.split("-");
                    var end = begin.pop()
                    console.log(startc);
                    
                    var ResultTable = {
                        "company" : "บขส",
                        "terminal" : begin[0],
                        "endterminal" : end,
                        "timeout" : timego,
                        "timeto" : "ไม่ระบุ",
                        "standard" : standard,
                        "price" : price
                        }; 
                        data_table.push(ResultTable)
                        startc =startc + 7;
                        time =time + 7;
                        stand =stand + 7;
                        pricec =pricec + 7;
                        i++;
                    }
                    ShowTable(data_table)
            }   
        });
    }
    function ShowTable(data_table) {
        provice = {
            "start" : startprovice,
            "end" : endprovice
        };
        xml_provice = js2xmlparser.parse("provice" , provice);
                    fs.writeFileSync('./src/provice.xml' ,xml_provice,function (err){
                        if(err) throw err;
                        console.log('success')
                    })
        xml_roundtrip = js2xmlparser.parse("roundtrip", data_table);
                    fs.writeFileSync('./src/roundtrip.xml', xml_roundtrip, function (err) {
                        if (err) throw err;
                        console.log('Replaced!');
                    });
        
        
        
        // for (start = 1; start == 1; start++) {
        //     var tagtable = '<!DOCTYPE html><html><head><body><table border = "2"><tr><th>จุดขึ้นรถ</th><th>เวลารถออก</th><th>เวลารถออก</th><th>ราคา</th><th>บริษัท</th></tr>';
        //     var taghtml = tagtable;
        //     var tagrow = "";
        //     // res.write(tagtable);
        //     for (nrow = 0; nrow < ResultTable.length; nrow++) {
        //         var row = '<tr><td>' + ResultTable[nrow].terminal + '</td><td>' + ResultTable[nrow].timeout + '</td><td>' + ResultTable[nrow].standard + '</td><td>' + ResultTable[nrow].price + '</td><td><a href = "+"https://www.busticket.in.th/"+">' + ResultTable[nrow].company + '</a></td></tr>';
        //         tagrow += row;
        //         console.log(nrow)
        //     }
        // }
        // var endtag = '</table></body></head></html>';
        // res.send(taghtml+tagrow+endtag);
        //res.send(ResultTable)
        
    }
    // fs.writeFile('./src/roundtrip.xml', xml_roundtrip, function (err) {
    //     if (err) throw err;
    //     console.log('Replaced!');
    // });
    // res.sendfile('./src/result.html')
    function Success(){
        console.log("Show Success !!!")
    }
    
    res.sendfile('./src/result.html')
    
});
app.listen(port, () => {
    console.log('New Server work!!');
});
