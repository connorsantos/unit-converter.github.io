var inch = document.querySelector('#inchInput');
var ft = document.querySelector('#feetInput');
var yds = document.querySelector('#yardInput');
var miles = document.querySelector('#milesInput');
var mili = document.querySelector('#miliInput');
var cm = document.querySelector('#centmInput');
var mt = document.querySelector('#meterInput');
var km = document.querySelector('#kilomInput');

document.getElementById('inchInput').addEventListener('input', function(e){
  let inch = e.target.value;
  ft.value = inch/12;
  yds.value = inch/36;
  miles.value = inch/63360;
  mili.value = inch/0.0393701;
  cm.value = inch/0.393701;
  mt.value = inch/39.3701;
  km.value = inch/39370.1;
})

document.getElementById('feetInput').addEventListener('input', function(e){
  let ft = e.target.value;
  inch.value = ft*12;
  yds.value = ft/3;
  miles.value = ft/5280;
  mili.value = ft/0.00328084;
  cm.value = ft/0.0328084;
  mt.value = ft/3.28084;
  km.value = ft/0.0328084;
})

document.getElementById('yardInput').addEventListener('input', function(e){
  let yds = e.target.value;
  inch.value = yds/0.0277778;
  ft.value = yds/0.333333;
  miles.value = yds/1760;
  mili.value = yds/0.00109361;
  cm.value = yds/0.0109361;
  mt.value = yds/1.09361;
  km.value = yds/1093.61;
})

document.getElementById('milesInput').addEventListener('input', function(e){
  let miles = e.target.value;
  inch.value = miles/1.57828e-5;
  ft.value = miles/0.000189394;
  yds.value = miles/0.000568182;
  mili.value = miles/6.21371e-7;
  cm.value = miles/6.21371e-6;
  mt.value = miles/0.000621371;
  km.value = miles/0.621371;
  })

  document.getElementById('miliInput').addEventListener('input', function(e){
    let mili = e.target.value;
    inch.value = mili/25.4;
    ft.value = mili/304.8;
    yds.value = mili/914.4;
    miles.value = mili/1.609e+6;
    cm.value = mili/10;
    mt.value = mili/1000;
    km.value = mili/1000000;
    })

  document.getElementById('centmInput').addEventListener('input', function(e){
    let cm = e.target.value;
    inch.value = cm/2.54;
    ft.value = cm/30.48;
    yds.value = cm/91.44;
    miles.value = cm/160934;
    mili.value = cm/0.1;
    mt.value = cm/100;
    km.value = cm/100000;
  })

  document.getElementById('meterInput').addEventListener('input', function(e){
    let mt = e.target.value;
    inch.value = mt/0.0254;
    ft.value = mt/0.3048;
    yds.value = mt/0.9144;
    miles.value = mt/1609.34;
    mili.value = mt/0.001;
    cm.value = mt/0.01;
    km.value = mt/1000;
  })

document.getElementById('kilomInput').addEventListener('input', function(e){
  let km = e.target.value;
  inch.value = km/2.54e-5;
  ft.value = km/0.0003048;
  yds.value = km/0.0009144;
  miles.value = km/1.60934;
  mili.value = km/1e-6;
  cm.value = km/1e-5;
  mt.value = km/0.001;
})

var micr = document.querySelector('#microsInput');
var sec = document.querySelector('#secInput');
var min = document.querySelector('#minInput');
var hrs = document.querySelector('#hourInput');
var days = document.querySelector('#dayInput');
var wks = document.querySelector('#weekInput');
var mths = document.querySelector('#montInput');
var yrs = document.querySelector('#yearInput');
var deca = document.querySelector('#decaInput');

document.getElementById('microsInput').addEventListener('input', function(e){
  let ms = e.target.value;
  sec.value = ms/1000000;
  min.value = ms/6e+7;
  hrs.value = ms/100000;
  days.value = ms/8.64e+10;
  wks.value = ms/6.048e+11;
  mths.value = ms/2.628e+12;
  yrs.value = ms/3.154e+13;
  deca.value = ms/3.154e+14;
})

document.getElementById('secInput').addEventListener('input', function(e){
  let sec = e.target.value;
  micr.value = sec/1e-6;
  min.value = sec/60;
  hrs.value = sec/3600;
  days.value = sec/86400;
  wks.value = sec/604800;
  mths.value = sec/2.628e+6;
  yrs.value = sec/3.154e+7;
  deca.value = sec/3.154e+8;
})

document.getElementById('minInput').addEventListener('input', function(e){
  let min = e.target.value;
  micr.value = min/1.66667e-8;
  sec.value = min/0.0166667;
  hrs.value = min/60;
  days.value = min/1440;
  wks.value = min/10080;
  mths.value = min/43800;
  yrs.value = min/525600;
  deca.value = min/5.256e+6;
})

document.getElementById('hourInput').addEventListener('input', function(e){
  let hr = e.target.value;
  micr.value = hr/2.77778e-10;
  sec.value = hr/0.000277778;
  min.value = hr/0.0166667;
  days.value = hr/24;
  wks.value = hr/168;
  mths.value = hr/730.001;
  yrs.value = hr/8760;
  deca.value = hr/87600;
})

document.getElementById('dayInput').addEventListener('input', function(e){
  let day = e.target.value;
  micr.value = day/1.15741e-11;
  sec.value = day/1.15741e-5;
  min.value = day/0.000694444;
  hrs.value = day/0.0416667;
  wks.value = day/7;
  mths.value = day/30.4167;
  yrs.value = day/365;
  deca.value = day/3650;
})

document.getElementById('weekInput').addEventListener('input', function(e){
  let wk = e.target.value;
  micr.value = wk/1.65344e-12;
  sec.value = wk/1.65344e-6;
  min.value = wk/9.92063e-5;
  hrs.value = wk/0.00595238;
  days.value = wk/0.142857;
  mths.value = wk/4.34524;
  yrs.value = wk/52.1429;
  deca.value = wk/521.429;
})

document.getElementById('montInput').addEventListener('input', function(e){
  let mths = e.target.value;
  micr.value = mths/3.80517e-13;
  sec.value = mths/3.80517e-7;
  min.value = mths/2.2831e-5;
  hrs.value = mths/0.00136986;
  days.value = mths/0.0328767;
  wks.value = mths/0.230137;
  yrs.value = mths/12;
  deca.value = mths/120;
})

document.getElementById('yearInput').addEventListener('input', function(e){
  let yr = e.target.value;
  micr.value = yr/3.17098e-14;
  sec.value = yr/3.17098e-8;
  min.value = yr/1.90259e-6;
  hrs.value = yr/0.000114155;
  days.value = yr/0.00273973;
  wks.value = yr/0.0191781;
  mths.value = yr/0.0833334;
  deca.value = yr/10;
})

document.getElementById('decaInput').addEventListener('input', function(e){
  let dec = e.target.value;
  micr.value = dec/3.17098e-15;
  sec.value = dec/3.17098e-9;
  min.value = dec/1.90259e-7;
  hrs.value = dec/1.14155e-5;
  days.value = dec/0.000273973;
  wks.value = dec/0.00191781;
  mths.value = dec/0.00833334;
  yrs.value = dec/.01;
})

var cel = document.querySelector('#celInput');
var far = document.querySelector('#farInput');
var kel = document.querySelector('#kelInput');

document.getElementById('celInput').addEventListener('input', function(e){
  let cel = e.target.value;
  far.value = cel * 9/5 + 32;
  kel.value = cel + 273.15;
})

document.getElementById('farInput').addEventListener('input', function(e){
  let far = e.target.value;
  cel.value = (far-32) * (5/9);
  kel.value = (far-32) * 5/9 + 273.15;
})

document.getElementById('kelInput').addEventListener('input', function(e){
  let kel = e.target.value;
  far.value = 9/5 * (kel - 273.15) + 32;
  cel.value = kel-273.15;
})
