parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"JXbL":[function(require,module,exports) {
module.exports="/countries.4cf8c5d1.csv";
},{}],"knfB":[function(require,module,exports) {
var t={top:0,right:20,bottom:30,left:20},e=500-t.left-t.right,a=400-t.top-t.bottom,c=d3.select("#chart").append("svg").attr("width",e+t.left+t.right).attr("height",a+t.top+t.bottom).append("g").attr("transform","translate("+t.left+","+t.top+")"),n=d3.scaleLinear().domain([0,8e4]).range([0,e]),r=d3.scaleLinear().domain([30,85]).range([a,0]),i=d3.scaleOrdinal().range(["#b3e2cd","#fdcdac","#cbd5e8","#f4cae4","#e6f5c9","#fff2ae"]);function l(t){console.log("Data is",t),c.selectAll("circle").data(t).enter().append("circle").attr("r",4).attr("cx",function(t){return n(t.gdp_per_capita)}).attr("cy",function(t){return r(t.life_expectancy)}).attr("fill",function(t){return i(t.continent)}).on("mouseover",function(t){d3.select(this).attr("fill","black"),d3.select("#name").text(t.country),d3.select("#life").text(t.life_expectancy),d3.select("#GDP").text(t.gdp_per_capita),d3.select("#info").style("display","block")}).on("mouseout",function(t){d3.select("#info").style("display","none"),d3.select(this).attr("fill",i(t.continent))});var l=d3.axisLeft(r).tickSize(-e).ticks(5);c.append("g").attr("class","axis y-axis").call(l).lower(),d3.select(".y-axis .domain").remove();var s=d3.axisBottom(n).ticks(7);c.append("g").attr("class","axis x-axis").attr("transform","translate(0,"+a+")").call(s)}d3.csv(require("./countries.csv")).then(l);
},{"./countries.csv":"JXbL"}]},{},["knfB"], null)
//# sourceMappingURL=/graph.cf76cfb2.map