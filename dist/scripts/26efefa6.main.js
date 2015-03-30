function generateRankinWithSelectedItem(a){$($(".media")[0]);generateRankin(a.message)}function generateRankin(a){a=buildQuery(a),solrQueryRequest(a)}function buildQuery(a){for(var b=sanitizeQuery(a),c=b.split(" "),d="",e=0;e<c.length;e++)d+="message:"+c[e],e+1<c.length&&(d+=" OR ");return window.gTokens=c,d}function sanitizeQuery(a){var b=a.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g,""),c=b.replace(/\s{2,}/g," ");return c}function solrQueryRequest(a){$.ajax({url:"http://solr-ebarsallo29.rhcloud.com/collection1/select",data:{wt:"json",rows:20,q:a},success:solrQueryResponse,dataType:"jsonp",jsonp:"json.wrf"})}function solrQueryResponse(a){for(var b=a.response,c=[],d=0;d<b.docs.length;d++){b.docs[d].rankin=d+1;var e=getListMarkup(b.docs[d]);c.push(e)}populateRankingContentAndShow(c)}function getListMarkup(a){return markup='<div class="panel panel-default"><div class="item-ranking">'+a.rankin+'</div><div class="item-date">'+moment(new Date(a.created_time)).format("MMMM Do YYYY, h:mm:ss a")+'</div><div class="panel-body"><div class="media-left media-left"><a href="#"><img class="media-object" src="images/IPad.png" alt="..."></a></div><div class="media-body"><h4 class="media-heading">'+a.message+"</h4></div></div></div>",markup}function highlight(){$(".media-heading").wrapInTag({tag:"bold",color:"#E3AE24",words:window.gTokens})}function clearRankingContentAndHide(){var a=$($(".media")[0]);a.fadeOut(function(){this.empty()}.bind(a))}function populateRankingContentAndShow(a){var b=$($(".media")[0]);b.items=a,b.fadeOut(function(){this.empty();for(var b=0;b<this.items.length;b++)this.append(a[b]);highlight(),$(".media").linkify(),this.fadeIn()}.bind(b))}!function(a,b,c,d){a.Typeahead={source:{}},"function"!=typeof Object.preventExtensions&&(Object.preventExtensions=function(a){return a});var e={input:null,minLength:2,maxItem:8,dynamic:!1,delay:300,order:null,offset:!1,hint:!1,accent:!1,highlight:!0,list:!1,group:!1,groupMaxItem:!1,filter:!1,backdrop:!1,cache:!1,ttl:36e5,compression:!1,selector:{container:"typeahead-container",group:"typeahead-group",result:"typeahead-result",list:"typeahead-list",display:"typeahead-display",query:"typeahead-query",filter:"typeahead-filter",filterButton:"typeahead-filter-button",filterValue:"typeahead-filter-value",dropdown:"typeahead-dropdown",button:"typeahead-button",backdrop:"typeahead-backdrop",hint:"typeahead-hint"},display:"display",template:null,source:null,callback:{onInit:null,onResult:null,onMouseEnter:null,onMouseLeave:null,onClick:null,onSubmit:null},debug:!1},f={dynamic:[!0,!1],order:["asc","desc"],offset:[!0,!1],accent:[!0,!1],cache:[!0,!1],compression:[!0,!1],debug:[!0,!1]},g=".typeahead.input",h={from:"ãàáäâẽèéëêìíïîõòóöôùúüûñç",to:"aaaaaeeeeeiiiiooooouuuunc"},i=function(d,i){function j(){for(var b in i)if(i.hasOwnProperty(b))if("source"===b){"{}"===JSON.stringify(i[b])&&i.debug&&a.Debug.log({node:d.selector,"function":"extendOptions()",arguments:"{options.source: "+JSON.stringify(i[b])+"}",message:"ERROR - source.group.url or source.group.data is Required"});for(var g in i[b])i[b].hasOwnProperty(g)&&(i[b][g]instanceof Object&&"data"!==g||(g="group",i[b]={group:i[b]}),"data"in i[b][g]&&!i[b][g].data&&i.debug&&a.Debug.log({node:d.selector,"function":"extendOptions()",arguments:"{options.source}",message:"ERROR - source.group.data is defined but empty"}),i[b][g].url||i[b][g].data||i[b][g]instanceof Array||i.debug&&a.Debug.log({node:d.selector,"function":"extendOptions()",arguments:"{options.source}",message:"ERROR - source.group.url or source.group.data is Required"}))}else f[b]&&-1===c.inArray(i[b],f[b])&&(i.debug&&a.Debug.log({node:d.selector,"function":"extendOptions()",arguments:"{"+b+":"+JSON.stringify(i[b])+"}",message:"WARNING - Unsupported option: "+b}),delete i[b]);i.dynamic&&(i.cache=!1,i.compression=!1),i.cache&&(i.cache=function(){var b="undefined"!=typeof a.localStorage;if(b)try{localStorage.setItem("typeahead","typeahead"),localStorage.removeItem("typeahead")}catch(c){b=!1}return b}()),i=c.extend(!0,Object.preventExtensions(c.extend(!0,{},e)),i)}function k(){Q(i.callback.onInit,[d]),i.debug&&a.Debug.log({node:d.selector,"function":"delegateTypeahead()",arguments:JSON.stringify(i),message:"OK - Typeahead activated on "+d.selector}),v=d.closest("."+i.selector.container);var b=["focus"+g,"input"+g,"propertychange"+g,"keydown"+g,"dynamic"+g];c("html").on("click"+g,function(){o()}),v.on("click"+g,function(a){a.stopPropagation(),i.filter&&v.find("."+i.selector.dropdown.replace(" ",".")).hide()}),d.closest("form").on("submit",function(a){return Q(i.callback.onSubmit,[d,this,B,a])?!1:void 0}),d.on(b.join(" "),function(a){switch(a.type){case"keydown":a.keyCode&&~[9,13,27,38,39,40].indexOf(a.keyCode)&&n(a);break;case"focus":null===x&&(i.dynamic||p());break;case"input":case"propertychange":if(!x)return void(i.dynamic&&(w=c.trim(c(this).val()),P(function(){w.length>=i.minLength&&""!==w&&p()},i.delay)));case"dynamic":default:w=c.trim(c(this).val()),o(),w.length>=i.minLength&&""!==w&&(l(),m()),"dynamic"===a.type&&i.dynamic&&(x=!1,G=0)}})}function l(){if(""===w)return!1;B=null,u&&!i.source[u]&&(u=!1);var b,c,e=w,f=0,g=/\d/.test(i.groupMaxItem)&&i.groupMaxItem;i.accent&&(e=M(w));for(var h in z)if(z.hasOwnProperty(h)&&(!u||h===u)){g&&(c=0);for(var j in z[h])if(z[h].hasOwnProperty(j)){if((A.length>=i.maxItem||g&&c>=g)&&!i.callback.onResult)break;if(z[h][j].display=i.source[h]&&i.source[h].display?z[h][j][i.source[h].display]:z[h][j][i.display],b=z[h][j].display.toString()){if(i.accent&&(b=M(b)),-1!==b.toLowerCase().indexOf(e.toLowerCase())&&(!i.offset||0===b.toLowerCase().indexOf(e.toLowerCase()))){if(i.source[h].ignore&&~i.source[h].ignore.indexOf(b))continue;if(f++,i.callback.onResult&&(A.length>=i.maxItem||g&&c>=g))continue;z[h][j].group=h,A.push(z[h][j]),g&&c++}}else i.debug&&a.Debug.log({node:d.selector,"function":"search()",arguments:'{display: "'+i.display+'"}',message:'WARNING - unable to find display: "'+i.display+'" inside '+JSON.stringify(z[h][j])})}}if(a.Debug.print(),i.order&&A.sort(L("display","asc"===i.order,function(a){return a.toString().toUpperCase()})),i.group){var k=[];for(var h in z)for(var l in A)A[l].group===h&&k.push(A[l]);A=k}return Q(i.callback.onResult,[d,w,A,f]),!0}function m(){if(""===w||0===A.length)return!1;var a=c("<div/>",{"class":i.selector.result,html:c("<ul/>",{"class":i.selector.list,html:function(){for(var a in A)A.hasOwnProperty(a)&&!function(a,b){"string"!=typeof a.display&&(a.display+="");var e,f,g,h,j,k,l,m,n;i.group&&(e=a.group,"boolean"!=typeof i.group&&a[i.group]&&(e=a[i.group])),i.list&&(f=a.group,"boolean"!=typeof i.list&&a[i.list]&&(f=a[i.list])),i.group&&!c(b).find('li[data-search-group="'+e+'"]')[0]&&c(b).append(c("<li/>",{"class":i.selector.group,html:c("<a/>",{html:e}),"data-search-group":e})),j=a.display.toLowerCase(),l=w.toLowerCase(),i.accent&&(j=M(j),l=M(l)),i.highlight&&(j=O(j,l)),g=c("<li/>",{html:c("<a/>",{href:"javascript:;123","data-group":e,html:function(){n=a.group&&i.source[a.group].template||i.template,n?(k=i.source[a.group]&&i.source[a.group].display||i.display,h=n.replace(/\{\{([a-z0-9_\-]+)\}\}/gi,function(b,c){return c===k?j:a[c]||"null"})):h='<span class="'+i.selector.display+'">'+j+"</span>"+(f?"<small>"+f+"</small>":""),c(this).append(h)},click:function(b){b.preventDefault(),w=a.display,d.val(w).focus(),o(),B=a,Q(i.callback.onClick,[d,this,a,b])},mouseenter:function(b){c(this).closest("li").siblings("li.active").removeClass("active"),c(this).closest("li").addClass("active"),Q(i.callback.onMouseEnter,[d,this,a,b])},mouseleave:function(b){c(this).closest("li").removeClass("active"),Q(i.callback.onMouseLeave,[d,this,a,b])}})}),i.group?(m=c(b).find('a[data-group="'+e+'"]:last').closest("li"),m[0]||(m=c(b).find('li[data-search-group="'+e+'"]')),c(g).insertAfter(m)):c(b).append(g)}(A[a],this)}})});if(v.addClass("result").append(a),i.backdrop&&(C.container?C.container.show():(C.css=c.extend({opacity:.6,filter:"alpha(opacity=60)",position:"fixed",top:0,right:0,bottom:0,left:0,"z-index":1040,"background-color":"#000"},i.backdrop),C.container=c("<div/>",{"class":i.selector.backdrop,css:C.css,click:function(){o()}}).insertAfter(v)),v.addClass("backdrop").css({"z-index":C.css["z-index"]+1,position:"relative"})),i.hint){D.container||(D.css=c.extend({"border-color":"transparent",position:"absolute","z-index":1,"-webkit-text-fill-color":"silver",color:"silver","background-color":"transparent","user-select":"none","box-shadow":"none"},i.hint),D.container=d.clone(!0).attr({"class":i.selector.hint,readonly:!0,tabindex:-1}).removeAttr("id placeholder name").css(D.css).insertBefore(d),d.css({position:"relative","z-index":2,"background-color":"transparent"}).parent().css({position:"relative"}));var b,e="string"==typeof i.group&&A[0][i.group]||A[0].group;for(var f in A)if(A.hasOwnProperty(f)){if(A[f].group!==e){if(b)break;e=A[f].group}if(0===A[f].display.toLowerCase().indexOf(w.toLowerCase())){b=A[f].display;break}}b&&D.container.val(w+b.substring(w.length)).show()}return!0}function n(a){if(0===A.length&&13!==a.keyCode)return!1;var b=v.find("."+i.selector.result).find("li:not([data-search-group])"),e=b.siblings(".active");if(13===a.keyCode)b.filter(".active")[0]&&(a.preventDefault(),a.stopPropagation(),b.filter(".active").find("a").click()),o();else{if(a.preventDefault(),b.length>1&&e.removeClass("active"),40===a.keyCode)e[0]?e.next().addClass("active"):c(b[0]).toggleClass("active");else if(38===a.keyCode)e[0]?e.prev().addClass("active"):c(b[A.length-1]).toggleClass("active");else if(39===a.keyCode)return i.hint&&!e[0]&&d.val(D.container.val()),e[0]?e.find("a").click():b.filter(".active").find("a").click(),w=d.val(),o(),!0;if(i.group){var f=b.siblings(".active");f.attr("data-search-group")&&(f.removeClass("active"),40===a.keyCode?f.next().addClass("active"):38===a.keyCode&&f.prev().addClass("active"))}}return i.hint&&(b.filter(".active")[0]?D.container.hide():D.container.show()),d.val(b.filter(".active").find("."+i.selector.display).text()||w),!0}function o(){A=[],i.filter&&v.removeClass("filter").find("."+i.selector.dropdown.replace(" ",".")).hide(),i.hint&&(v.removeClass("hint"),D.container&&D.container.val("")),(i.backdrop||""===w)&&(v.removeClass("backdrop").removeAttr("style"),C.container&&C.container.hide()),v.removeClass("result").find("."+i.selector.result).remove(),Q(i.callback.onResult,[d,"",[],0])}function p(){if(x=!1,E=(new Date).getTime(),0===H)for(var b in i.source)i.source.hasOwnProperty(b)&&++H;var e;for(var f in i.source)if(i.source.hasOwnProperty(f))if(i.dynamic||!z[f]||0===z[f].length)if(i.cache&&(z[f]=localStorage.getItem(d.selector+":"+f),z[f]&&(i.compression&&(z[f]=T(z[f])),e=JSON.parse(z[f]),e&&e.data&&e.ttl&&e.ttl>(new Date).getTime())))i.debug&&a.Debug.log({node:d.selector,"function":"generate()",arguments:"{cache: true}",message:"OK - List: "+d.selector+":"+f+'" found in localStorage.'}),a.Debug.print(),z[f]=e.data,s();else{if(i.source[f].data||i.source[f].url||("string"==typeof i.source[f]||i.source[f]instanceof Array?i.source[f]={url:i.source[f]}:(i.debug&&a.Debug.log({node:d.selector,"function":"generate()",arguments:"{source: undefined}",message:'ERROR - Source for group "'+f+'" is undefined.'}),a.Debug.print())),z[f]=[],i.source[f].data&&i.source[f].data instanceof Array){for(var g in i.source[f].data)if(i.source[f].data.hasOwnProperty(g)){if(i.source[f].data[g]instanceof Object)break;var h={};h[i.display]=i.source[f].data[g],i.source[f].data[g]=h}if(z[f]=z[f].concat(i.source[f].data),!i.source[f].url){J(f),s();continue}}if(i.source[f].url){var j=i.source[f].url instanceof Array&&i.source[f].url[0]||i.source[f].url,k=i.source[f].url instanceof Array&&i.source[f].url[1]||null,l={};"object"==typeof j&&(l=c.extend(!0,{},j),j=JSON.stringify(j));var m=K.get(j);if(/https?:\/\//.test(j)&&!~j.indexOf(a.location.host)&&~j.indexOf("{callback}"))R.fetch(j.replace("{callback}",encodeURIComponent(F)),function(){});else{if("undefined"!=typeof m){if(m instanceof Array&&0===m.length){K.queue(j,f,k);continue}I(m,f,k),s();continue}if(K.set(j,[]),l&&l.data)for(var n in l.data)if("string"==typeof l.data[n]&&l.data[n].indexOf("{{query}}")>-1){l.data[n]=l.data[n].replace("{{query}}",encodeURIComponent(w));break}c.ajax(c.extend({async:!0,url:j,dataType:"json",ajaxGroup:f,ajaxPath:k,ajaxTimestamp:E},l)).done(function(a){return this.ajaxTimestamp!==E?!1:("function"==typeof this.process&&(a=this.process(a)),K.set(j,a),K.processQueue(j),void I(a,this.ajaxGroup,this.ajaxPath))}).fail(function(){i.debug&&a.Debug.log({node:d.selector,"function":"generate()",arguments:"{url: "+this.url+"}",message:"ERROR - Ajax request failed."})}).complete(function(){this.ajaxTimestamp===E&&s()})}}}else s()}function q(){function a(a){u=a,v.find("."+i.selector.filterValue).text(u||i.filter),v.find("."+i.selector.dropdown.replace(" ",".")).hide(),o(),l(),m(),d.focus()}return i.filter?void c("<span/>",{"class":i.selector.filter,html:function(){c(this).append(c("<button/>",{type:"button","class":i.selector.filterButton,html:"<span class='"+i.selector.filterValue+"'>"+i.filter+"</span> <span class='caret'></span>",click:function(a){a.stopPropagation();var b=v.find("."+i.selector.dropdown.replace(" ","."));b.is(":visible")?(v.removeClass("filter"),b.hide()):(v.addClass("filter"),b.show())}})),c(this).append(c("<ul/>",{"class":i.selector.dropdown,html:function(){for(var b in i.source)i.source.hasOwnProperty(b)&&!function(b,d){var e=c("<li/>",{html:c("<a/>",{href:"javascript:;",html:b,click:function(c){c.preventDefault(),a(b)}})});c(d).append(e)}(b,this);c(this).append(c("<li/>",{"class":"divider"})),c(this).append(c("<li/>",{html:c("<a/>",{href:"javascript:;",html:i.filter,click:function(b){b.preventDefault(),a()}})}))}}))}}).insertAfter(v.find("."+i.selector.query)):!1}function r(b){if(!b||!b.group)return i.debug&&a.Debug.log({node:d.selector,"function":"populate()",message:'ERROR - Empty data or Missing {data.group} parameter"'}),a.Debug.print(),!1;var c=b.group||"group",e=i.source[c].url instanceof Array?i.source[c].url[1]:null;I(b,c,e),s()}function s(){G++,G===H&&(x=!0,y=[],i.dynamic&&d.trigger("dynamic.typeahead.input"))}function t(){return v[0]?void c.each([i.selector.query,i.selector.button],function(b,c){v.find("."+c)[0]||i.debug&&a.Debug.log({node:d.selector,"function":"_validateHtml()",arguments:i.selector.query,message:'ERROR - Missing container with class: ".'+c+'"'})}):(i.debug&&a.Debug.log({node:d.selector,"function":"_validateHtml()",arguments:i.selector.container,message:'ERROR - Missing input parent container class: ".'+i.selector.container+'"'}),!1)}var u,v,w="",x=null,y=[],z=[],A=[],B=null,C={},D={},E=null,F="window.Typeahead.source['"+d.selector+"'].populate",G=0,H=0,I=function(a,b,c){var d=!0;if(c)for(var e=c.split("."),f=0;f<e.length;){if("undefined"==typeof a){d=!1;break}a=a[e[f++]]}if(d){for(var g in a)if(a.hasOwnProperty(g)){if(a[g]instanceof Object)break;var h={};h[i.display]=a[g],a[g]=h}z[b]=z[b].concat(a),J(b)}},J=function(a){if(!i.cache)return!1;var b={ttl:(new Date).getTime()+i.ttl,data:z[a]};b=JSON.stringify(b),i.compression&&(b=S(b)),localStorage.setItem(d.selector+":"+a,b)},K={_queue:[],get:function(a){return y[a]},set:function(a,b){y[a]=b},queue:function(a,b,c){this._queue.push({url:a,group:b,path:c})},processQueue:function(a){for(var b in this._queue)this._queue[b].url===a&&(I(y[a],this._queue[b].group,this._queue[b].path),s(),delete this._queue[b])}},L=function(a,b,c){var d=c?function(b){return c(b[a])}:function(b){return b[a]};return b=[-1,1][+!!b],function(a,c){return a=d(a),c=d(c),b*((a>c)-(c>a))}},M=function(a){if(!a||"string"!=typeof a)return!1;a=a.toLowerCase();for(var b=0,c=h.from.length;c>b;b++)a=a.replace(new RegExp(h.from.charAt(b),"g"),h.to.charAt(b));return a},N=function(a,b,c,d){return a.substring(0,b)+d+a.substring(b+c)},O=function(a,b){var c=a.indexOf(b);return a=a.substr(0>c-30?0:c-30,c+b.length+30)+"...",c=a.indexOf(b),-1===c?a:N(a,c,b.length,"<strong style='color:#E3AE24' >"+a.substr(c,b.length)+"</strong>")},P=function(){var a=0;return function(b,c){clearTimeout(a),a=setTimeout(b,c)}}(),Q=function(b,e){if(!b)return!1;var f;if("function"==typeof b)f=b;else if("string"==typeof b||b instanceof Array){f=a,"string"==typeof b&&(b=[b,[]]);for(var g=b[0].split("."),h=b[1],j=!0,k=0;k<g.length;){if("undefined"==typeof f){j=!1;break}f=f[g[k++]]}if(!j||"function"!=typeof f)return i.debug&&a.Debug.log({node:d.selector,"function":"_executeCallback()",arguments:JSON.stringify(b),message:'WARNING - Invalid callback function"'}),!1}return f.apply(this,c.merge(h||[],e?e:[])),!0},R={fetch:function(c,d){var e=encodeURIComponent(F);a[e]=this.evalJSONP(d),c=c.replace("="+F,"="+e);var f=b.createElement("SCRIPT");f.src=c,b.getElementsByTagName("HEAD")[0].appendChild(f)},evalJSONP:function(a){return function(b){var c=!1;if("string"==typeof b)try{c=JSON.parse(b)}catch(d){}else c=JSON.parse(JSON.stringify(b));if(!c)throw"JSONP call returned invalid or empty JSON";a(c)}}},S=function(a){for(var b,c={},d=(a+"").split(""),e=[],f=d[0],g=256,h=1;h<d.length;h++)b=d[h],null!=c[f+b]?f+=b:(e.push(f.length>1?c[f]:f.charCodeAt(0)),c[f+b]=g,g++,f=b);e.push(f.length>1?c[f]:f.charCodeAt(0));for(var h=0;h<e.length;h++)e[h]=String.fromCharCode(e[h]);return e.join("")},T=function(a){for(var b,c={},d=(a+"").split(""),e=d[0],f=e,g=[e],h=256,i=1;i<d.length;i++){var j=d[i].charCodeAt(0);b=256>j?d[i]:c[j]?c[j]:f+e,g.push(b),e=b.charAt(0),c[h]=f+e,h++,f=b}return g.join("")};return this.__construct=function(){j(),k(),q(),t(),a.Debug&&a.Debug.print()}(),{populate:r}};c.fn.typeahead=c.typeahead=function(a){return j.typeahead(this,a)};var j={typeahead:function(b,d){if(!d||!d.source)return a.Debug.log({node:b.selector,"function":"$.typeahead()",arguments:"",message:"Missing source option - Typeahead dropped"}),void a.Debug.print();if("function"==typeof b){if(!d.input)return a.Debug.log({node:b.selector,"function":"$.typeahead()",arguments:"",message:'Undefined property "options.input - Typeahead dropped'}),void a.Debug.print();if(b=c(d.input),!b[0]||b.length>1)return a.Debug.log({node:b.selector,"function":"$.typeahead()",arguments:JSON.stringify(d.input),message:"Unable to find jQuery input element OR more than 1 input is found - Typeahead dropped"}),void a.Debug.print()}else if("undefined"==typeof b[0]||b.length>1)return a.Debug.log({node:b.selector,"function":"$.typeahead()",arguments:'$("'+b.selector+'").typeahead()',message:"Unable to find jQuery input element OR more than 1 input is found - Typeahead dropped"}),void a.Debug.print();return a.Typeahead.source[b.selector]=new i(b,d)}};a.Debug={table:{},log:function(a){return a.message&&"string"==typeof a.message?void(this.table[a.message]=c.extend(Object.preventExtensions({node:"","function":"",arguments:""}),a)):!1},print:function(){return c.isEmptyObject(this.table)?!1:(console.group!==d||console.table!==d?(console.groupCollapsed("--- jQuery Typeahead Debug ---"),console.table?console.table(this.table):c.each(this.table,function(a,b){console.log(b.Name+": "+b["Execution Time"]+"ms")}),console.groupEnd()):console.log("Debug is not available on your current browser, try the most recent version of Chrome or Firefox."),void(this.table={}))}},Array.prototype.indexOf||(Array.prototype.indexOf=function(a){var b=this.length>>>0,c=Number(arguments[1])||0;for(c=0>c?Math.ceil(c):Math.floor(c),0>c&&(c+=b);b>c;c++)if(c in this&&this[c]===a)return c;return-1})}(window,document,window.jQuery),!function(a,b,c){"use strict";function d(a,b){this._defaults=e,this.element=a,this.setOptions(b),this.init()}var e={tagName:"a",newLine:"\n",target:"_blank",linkClass:null,linkClasses:[],linkAttributes:null};d.prototype={constructor:d,init:function(){1===this.element.nodeType?d.linkifyNode.call(this,this.element):this.element=d.linkify.call(this,this.element.toString())},setOptions:function(a){this.settings=d.extendSettings(a,this.settings)},toString:function(){return this.element.toString()}},d.extendSettings=function(a,b){var c;b=b||{};for(c in e)b[c]||(b[c]=e[c]);for(c in a)b[c]=a[c];return b},d.linkMatch=new RegExp(["(",'\\s|[^a-zA-Z0-9.\\+_\\/"\\>\\-]|^',")(?:","(","[a-zA-Z0-9\\+_\\-]+","(?:","\\.[a-zA-Z0-9\\+_\\-]+",")*@",")?(","http:\\/\\/|https:\\/\\/|ftp:\\/\\/",")?(","(?:(?:[a-z0-9][a-z0-9_%\\-_+]*\\.)+)",")(","(?:com|ca|co|edu|gov|net|org|dev|biz|cat|int|pro|tel|mil|aero|asia|coop|info|jobs|mobi|museum|name|post|travel|local|[a-z]{2})",")(","(?::\\d{1,5})",")?(","(?:","[\\/|\\?]","(?:","[\\-a-zA-Z0-9_%#*&+=~!?,;:.\\/]*",")*",")","[\\-\\/a-zA-Z0-9_%#*&+=~]","|","\\/?",")?",")(",'[^a-zA-Z0-9\\+_\\/"\\<\\-]|$',")"].join(""),"g"),d.emailLinkMatch=/(<[a-z]+ href=\")(http:\/\/)([a-zA-Z0-9\+_\-]+(?:\.[a-zA-Z0-9\+_\-]+)*@)/g,d.linkify=function(a,b){var c,e,f,g=[];this.constructor===d&&this.settings?(e=this.settings,b&&(e=d.extendSettings(b,e))):e=d.extendSettings(b),f=e.linkClass?e.linkClass.split(/\s+/):[],f.push.apply(f,e.linkClasses),a=a.replace(/</g,"&lt;").replace(/(\s)/g,"$1$1"),g.push("$1<"+e.tagName,'href="http://$2$4$5$6$7"'),g.push('class="linkified'+(f.length>0?" "+f.join(" "):"")+'"'),e.target&&g.push('target="'+e.target+'"');for(c in e.linkAttributes)g.push([c,'="',e.linkAttributes[c].replace(/\"/g,"&quot;").replace(/\$/g,"&#36;"),'"'].join(""));return g.push(">$2$3$4$5$6$7</"+e.tagName+">$8"),a=a.replace(d.linkMatch,g.join(" ")),a=a.replace(d.emailLinkMatch,"$1mailto:$3"),a=a.replace(/(\s){2}/g,"$1"),a=a.replace(/\n/g,e.newLine)},d.linkifyNode=function(a){var b,e,f,g,h;if(a&&"object"==typeof a&&1===a.nodeType&&"a"!==a.tagName.toLowerCase()&&!/[^\s]linkified[\s$]/.test(a.className)){for(b=[],g=d._dummyElement||c.createElement("div"),e=a.firstChild,f=a.childElementCount;e;){if(3===e.nodeType){for(;g.firstChild;)g.removeChild(g.firstChild);for(g.innerHTML=d.linkify.call(this,e.textContent||e.innerText||e.nodeValue),b.push.apply(b,g.childNodes);g.firstChild;)g.removeChild(g.firstChild)}else b.push(1===e.nodeType?d.linkifyNode(e):e);e=e.nextSibling}for(;a.firstChild;)a.removeChild(a.firstChild);for(h=0;h<b.length;h++)a.appendChild(b[h])}return a},d._dummyElement=c.createElement("div"),a.fn.linkify=function(b){return this.each(function(){var c;(c=a.data(this,"plugin-linkify"))?(c.setOptions(b),c.init()):a.data(this,"plugin-linkify",new d(this,b))})},a.fn.linkify.Constructor=d,a(b).on("load",function(){a("[data-linkify]").each(function(){var b,c=a(this),d=c.attr("data-linkify"),e={tagName:c.attr("data-linkify-tagname"),newLine:c.attr("data-linkify-newline"),target:c.attr("data-linkify-target"),linkClass:c.attr("data-linkify-linkclass")};for(var f in e)"undefined"==typeof e[f]&&delete e[f];b="this"===d?c:c.find(d),b.linkify(e)})}),a("body").on("click",".linkified",function(){var c=a(this),d=c.attr("href"),e=/^mailto:/i.test(d),f=c.attr("target");return e?b.location.href=d:b.open(d,f),!1})}(jQuery,window,document),$(document).ready(function(){$.fn.wrapInTag=function(a){var b=a.tag||"strong",c=a.color||"black",d=a.words||[],e=RegExp(d.join("|"),"gi"),f="<"+b+' style="color:'+c+'">$&</'+b+">";return this.html(function(){return $(this).text().replace(e,f)})},$.typeahead({input:"#q",minLength:3,dynamic:!0,order:"asc",group:!0,groupMaxItem:10,hint:!0,display:"message",selector:{filter:"input-group-btn",filterButton:"btn btn-default",dropdown:"dropdown-menu dropdown-menu-right",list:"dropdown-menu",hint:"form-control",highlight:!0},source:{Selling:{url:[{url:"http://solr-ebarsallo29.rhcloud.com/collection1/select",data:{wt:"json",rows:20,q:"message:{{query}}"},dataType:"jsonp",jsonp:"json.wrf",process:function(a){return a}},"response.docs"]}},callback:{onInit:null,onResult:null,onMouseEnter:null,onMouseLeave:null,onClick:function(){console.log("You Selected")},onSubmit:function(a,b,c){return""===a.val()?void $(".input-group").effect("shake",{},300):void(null===c?generateRankin(a.val()):generateRankinWithSelectedItem(c))}},debug:!0}),$("body").fadeIn(function(){$("#logTitlContain").effect("bounce",{direction:"up",distance:100,times:4},500,function(){$("#q").effect("highlight",{},1e3)})})});