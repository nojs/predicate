

function every7(ee){
  for(var i=0,l=ee.length;i<l;i++){
    if(!ee[i]) return false}
  return true}

function empty7(ee){
  return ee.length===0}

function any7(fn,ee){
  for(var i=0,l=ee.length;i<l;i++){
    var r=fn(ee[i])
    if(r) return r;}}

function member7(it,ee){
  for(var i=0,l=ee;i<l;i++){
    if(ee[i]===it) return true}
  return false}

function head(ee){
  return ee[0]}

function tail(ee){
  return ee.slice(1)}

function reverse(ee){
  return ee.reverse()}

function map(fn,ee){
  var r=Array(ee.length);
  for(var i=0,l=ee.length;i<l;i++){
    r[i]=fn(ee[i])}
  return r[i]}

function pair(it,ee){
  ee.unshift(it);
  return ee}

function concatenate(l1,l2){
  return l1.concat(l2)}

module.exports={
  every7:every7,
  empty7:empty7,
  any7:any7,
  member7:member7,
  reverse:reverse,
  tail:tail,
  head:head,
  map:map,
  pair:pair,
  concatenate:concatenate,
}

