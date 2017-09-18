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

var gal = document.querySelector('#usgalInput');
var qt = document.querySelector('#usqrtInput');
var pt = document.querySelector('#uspInput');
var cup = document.querySelector('#uscupInput');
var oz = document.querySelector('#usoInput');
var tbl = document.querySelector('#ustblInput');
var tea = document.querySelector('#teaInput');
var cf = document.querySelector('#cfInput');
var ci = document.querySelector('#ciInput');
var cume = document.querySelector('#cmInput');
var lit = document.querySelector('#litInput');
var mm = document.querySelector('#mmlInput');

document.getElementById('usgalInput').addEventListener('input', function(e){
  let gal = e.target.value;
  qt.value = gal/.25;
  pt.value = gal/.125;
  cup.value = gal/0.01875;
  oz.value = gal/0.0078125;
  tbl.value = gal/0.00390625;
  tea.value = gal/0.00130208;
  cf.value = gal/7.48052;
  ci.value = gal/0.004329;
  cume.value = gal/264.172;
  lit.value = gal/0.264172;
  mm.value = gal/0.000264172;
})

document.getElementById('usqrtInput').addEventListener('input', function(e){
  let qt = e.target.value;
  gal.value = qt/4;
  pt.value = qt/0.5;
  cup.value = qt/0.25;
  oz.value = qt/0.03125;
  tbl.value = qt/0.015625;
  tea.value = qt/0.00520833;
  cf.value = qt/29.9221;
  ci.value = qt/0.017316;
  cume.value = qt/1056.69;
  lit.value = qt/1.05669;
  mm.value = qt/0.00105669;
})

document.getElementById('uspInput').addEventListener('input', function(e){
  let pt = e.target.value;
  gal.value = pt/8;
  qt.value = pt/2;
  cup.value = pt/0.5;
  oz.value = pt/0.0625;
  tbl.value = pt/0.03125;
  tea.value = pt/0.0104167;
  cf.value = pt/29.9221;
  ci.value = pt/0.017316;
  cume.value = pt/1056.69;
  lit.value = pt/1.05669;
  mm.value = pt/0.00105669;
})

document.getElementById('uscupInput').addEventListener('input', function(e){
  let cup = e.target.value;
  gal.value = cup/16;
  qt.value = cup/4;
  pt.value = cup/2;
  oz.value = cup/0.125;
  tbl.value = cup/0.0625;
  tea.value = cup/0.0208333;
  cf.value = cup/119.688;
  ci.value = cup/0.0692641;
  cume.value = cup/4226.75;
  lit.value = cup/4.22675;
  mm.value = cup/0.00422675;
})

document.getElementById('usoInput').addEventListener('input', function(e){
  let oz = e.target.value;
  gal.value = oz/128;
  qt.value = oz/32;
  pt.value = oz/16;
  cup.value = oz/8;
  tbl.value = oz/0.5;
  tea.value = oz/0.166667;
  cf.value = oz/957.506;
  ci.value = oz/0.554113;
  cume.value = oz/33814;
  lit.value = oz/33.814;
  mm.value = oz/0.033814;
})

document.getElementById('ustblInput').addEventListener('input', function(e){
  let tbl = e.target.value;
  gal.value = tbl/256;
  qt.value = tbl/64;
  pt.value = tbl/32;
  cup.value = tbl/16;
  oz.value = tbl/2;
  tea.value = tbl/0.333333;
  cf.value = tbl/1915.01;
  ci.value = tbl/1.10823;
  cume.value = tbl/67628;
  lit.value = tbl/67.628;
  mm.value = tbl/0.067628;
})

document.getElementById('teaInput').addEventListener('input', function(e){
  let tea = e.target.value;
  gal.value = tea/768;
  qt.value = tea/192;
  pt.value = tea/96;
  cup.value = tea/48;
  oz.value = tea/6;
  tbl.value = tea/3;
  cf.value = tea/5745.04;
  ci.value = tea/3.32468;
  cume.value = tea/202884;
  lit.value = tea/202.884;
  mm.value = tea/0.202884;
})

document.getElementById('cfInput').addEventListener('input', function(e){
  let cf = e.target.value;
  gal.value = cf/0.133681;
  qt.value = cf/0.0334201;
  pt.value = cf/0.0167101;
  cup.value = cf/0.00835503;
  oz.value = cf/0.00104438;
  tbl.value = cf/0.00052219;
  tea.value = cf/0.000174063;
  ci.value = cf/0.000578704;
  cume.value = cf/35.3147;
  lit.value = cf/0.0353147;
  mm.value = cf/3.53147e-5;
})

document.getElementById('ciInput').addEventListener('input', function(e){
  let ci = e.target.value;
  gal.value = ci/231;
  qt.value = ci/57.75;
  pt.value = ci/28.875;
  cup.value = ci/14.4375;
  oz.value = ci/1.80469;
  tbl.value = ci/0.902344;
  tea.value = ci/0.300781;
  cf.value = ci/1728;
  cume.value = ci/61023.7;
  lit.value = ci/61.0237;
  mm.value = ci/0.0610237;
})

document.getElementById('cmInput').addEventListener('input', function(e){
  let cm = e.target.value;
  gal.value = cm/0.00378541;
  qt.value = cm/0.000946353
  pt.value = cm/0.000473176;
  cup.value = cm/0.000236588 ;
  oz.value = cm/2.95735e-5;
  tbl.value = cm/1.47868e-5;
  tea.value = cm/4.92892e-6;
  cf.value = cm/0.0283168;
  ci.value = cm/1.63871e-5;
  lit.value = cm/0.001;
  mm.value = cm/1e-6;
})

document.getElementById('litInput').addEventListener('input', function(e){
  let lit = e.target.value;
  gal.value = lit/3.78541;
  qt.value = lit/0.946353;
  pt.value = lit/0.473176;
  cup.value = lit/0.236588;
  oz.value = lit/0.0295735;
  tbl.value = lit/0.0147868;
  tea.value = lit/0.00492892;
  cf.value = lit/28.3168;
  ci.value = lit/0.0163871;
  cume.value = lit/1000;
  mm.value = lit/0.001;
})

document.getElementById('mmlInput').addEventListener('input', function(e){
  let ml = e.target.value;
  gal.value = ml/3785.41;
  qt.value = ml/946.353;
  pt.value = ml/473.176;
  cup.value = ml/236.588;
  oz.value = ml/29.5735;
  tbl.value = ml/14.7868;
  tea.value = ml/4.92892;
  cf.value = ml/28316.8;
  ci.value = ml/16.3871;
  cume.value = ml/1000000;
  lit.value = ml/1000;
})
