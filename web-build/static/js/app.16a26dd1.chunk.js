(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{148:function(e,n,t){"use strict";t.d(n,"a",(function(){return fe}));var a=t(0),r=t.n(a),i=t(94),o=t(3),c=t(2),l=t(38),d=[{id:"cse",name:"Computer Science and Engineering"},{id:"dsai",name:"Data Science & Artificial Intelligence"},{id:"ee",name:"Electrical Engineering"},{id:"me",name:"Mechanical Engineering"}],m=t(26),u=t(39),s="#0095F6",f="#121212",g="#C0C0C0",M="#212121",A=o.a.create({container:{backgroundColor:M,marginBottom:18,borderStyle:"solid",borderRadius:10,elevation:6},innerContainer:{padding:15,flexDirection:"row",alignItems:"center"},deptName:{color:"#fff",textAlign:"center",fontSize:17,marginStart:10},circularView:{backgroundColor:f,padding:10,borderRadius:100,width:55,height:55,alignItems:"center",justifyContent:"center"},codeName:{color:s,textAlign:"center",fontSize:15,fontWeight:"bold",alignSelf:"center"}}),C=t(13),I=function(e){var n=e.department,t=Object(C.useNavigation)();return r.a.createElement(u.a,{style:A.container,onPress:function(){t.navigate("ChooseFractal",{deptID:n.id})}},r.a.createElement(c.a,{style:A.innerContainer},r.a.createElement(c.a,{style:A.circularView},r.a.createElement(m.a,{style:A.codeName},n.id.toUpperCase())),r.a.createElement(m.a,{style:A.deptName},n.name)))};function y(){return r.a.createElement(c.a,{style:E.container},r.a.createElement(l.a,{style:E.flatlist,data:d,renderItem:function(e){var n=e.item;return r.a.createElement(I,{department:n})},keyExtractor:function(e){return e.id}}))}var E=o.a.create({container:{alignItems:"center",backgroundColor:f,flex:1},flatlist:{marginTop:50,width:"90%"}}),b=t(126),P=t(203),h=[{id:"f12",name:"Fractals 1 & 2"},{id:"f34",name:"Fractals 3 & 4"},{id:"f56",name:"Fractals 5 & 6"}],p=o.a.create({container:{backgroundColor:M,marginBottom:18,borderStyle:"solid",borderRadius:10,elevation:6},innerContainer:{padding:15,flexDirection:"row",alignItems:"center"},fractalName:{color:"#fff",textAlign:"center",fontSize:17,marginStart:10},circularView:{backgroundColor:f,padding:10,borderRadius:100,width:55,height:55,alignItems:"center",justifyContent:"center"},codeName:{color:s,textAlign:"center",fontSize:15,fontWeight:"bold",alignSelf:"center"}}),S=function(e){var n=e.fractal,t=Object(C.useNavigation)(),a=Object(C.useRoute)().params.deptID;return r.a.createElement(u.a,{style:p.container,onPress:function(){t.navigate("ChooseDay",{fracID:n.id,deptID:a})}},r.a.createElement(c.a,{style:p.innerContainer},r.a.createElement(c.a,{style:p.circularView},r.a.createElement(m.a,{style:p.codeName},n.id.toUpperCase())),r.a.createElement(m.a,{style:p.fractalName},n.name)))};function k(){return r.a.createElement(c.a,{style:v.container},r.a.createElement(l.a,{style:v.flatlist,data:h,renderItem:function(e){var n=e.item;return r.a.createElement(S,{fractal:n})},keyExtractor:function(e){return e.id}}))}var v=o.a.create({container:{alignItems:"center",backgroundColor:f,flex:1},flatlist:{marginTop:50,width:"90%"}}),x=[{id:"mon",name:"Monday"},{id:"tue",name:"Tuesday"},{id:"wed",name:"Wednesday"},{id:"thu",name:"Thursday"},{id:"fri",name:"Friday"},{id:"sat",name:"Saturday"},{id:"sun",name:"Sunday"}],L=o.a.create({container:{backgroundColor:M,marginBottom:18,borderStyle:"solid",borderRadius:10,elevation:6},innerContainer:{padding:15,flexDirection:"row",alignItems:"center"},dayName:{color:"#fff",textAlign:"center",fontSize:17,marginStart:10},circularView:{backgroundColor:f,padding:10,borderRadius:100,width:55,height:55,alignItems:"center",justifyContent:"center"},codeName:{color:s,textAlign:"center",fontSize:15,fontWeight:"bold",alignSelf:"center"}}),w=function(e){var n=e.day,t=Object(C.useNavigation)(),a=Object(C.useRoute)(),i=a.params.deptID,o=a.params.fracID;return r.a.createElement(u.a,{style:L.container,onPress:function(){t.navigate("Schedule",{dayID:n.id,fracID:o,deptID:i})}},r.a.createElement(c.a,{style:L.innerContainer},r.a.createElement(c.a,{style:L.circularView},r.a.createElement(m.a,{style:L.codeName},n.id.toUpperCase())),r.a.createElement(m.a,{style:L.dayName},n.name)))};function D(){return r.a.createElement(c.a,{style:N.container},r.a.createElement(l.a,{style:N.flatlist,data:x,renderItem:function(e){var n=e.item;return r.a.createElement(w,{day:n})},keyExtractor:function(e){return e.id}}))}var N=o.a.create({container:{alignItems:"center",backgroundColor:f,flex:1},flatlist:{marginTop:40,width:"90%"}}),T=o.a.create({container:{backgroundColor:M,marginBottom:18,borderStyle:"solid",borderRadius:10,elevation:6},innerContainer:{padding:15,flexDirection:"column",alignItems:"flex-start"},fractalName:{color:"#fff",textAlign:"left",fontSize:17,marginVertical:8},codeName:{color:s,textAlign:"left",fontSize:15,fontWeight:"bold"},duration:{color:g,textAlign:"left"}}),j=function(e){var n=e.schedule;return r.a.createElement(u.a,{style:T.container},r.a.createElement(c.a,{style:T.innerContainer},r.a.createElement(m.a,{style:T.codeName},n.id),r.a.createElement(m.a,{style:T.fractalName},n.name),r.a.createElement(m.a,{style:T.duration},n.duration)))},R=[{id:"IC404",name:"Will be updated soon...",duration:"\u221e"}],z=[{id:"IC100",name:"Introduction to Programming",duration:"8:30 AM - 9:50 AM"},{id:"CA150",name:"Professional Communication Lab II - Presentation Skills",duration:"10:00 AM - 11:20 AM"}],F=[{id:"LA321",name:"Macroeconomics",duration:"11:30 AM - 12:50 PM"}],O=[{id:"IC100",name:"Introduction to Programming",duration:"8:30 AM - 9:50 AM"},{id:"CA150",name:"Professional Communication Lab II - Presentation Skills",duration:"11:30 AM - 12:50 PM"}],V=[{id:"LA321",name:"Macroeconomics",duration:"11:30 AM - 12:50 PM"}],W=[{id:"IC100 Tutorial",name:"Introduction to Programming",duration:"10:00 AM - 11:20 AM"}],B=[{id:"LA321",name:"Macroeconomics",duration:"11:30 AM - 12:50 PM"}],U=[{id:"IC100 Lab",name:"Introduction to Programming",duration:"9:30 AM - 1:30 PM"}],J=[{id:"IC100",name:"Introduction to Programming",duration:"8:30 AM - 9:50 AM"},{id:"CA150",name:"Professional Communication Lab II - Presentation Skills",duration:"10:00 AM - 11:20 AM"}],q=[{id:"LA321",name:"Macroeconomics",duration:"11:30 AM - 12:50 PM"}],G=[{id:"IC100",name:"Introduction to Programming",duration:"8:30 AM - 9:50 AM"},{id:"CA150",name:"Professional Communication Lab II - Presentation Skills",duration:"11:30 AM - 12:50 PM"}],H=[{id:"LA321",name:"Macroeconomics",duration:"11:30 AM - 12:50 PM"}],K=[{id:"IC100 Tutorial",name:"Introduction to Programming",duration:"10:00 AM - 11:20 AM"}],Q=[{id:"LA321",name:"Macroeconomics",duration:"11:30 AM - 12:50 PM"}],X=[{id:"IC100 Lab",name:"Introduction to Programming",duration:"9:30 AM - 1:30 PM"}],Y=[{id:"IC100",name:"Introduction to Programming",duration:"8:30 AM - 9:50 AM"},{id:"CA150",name:"Professional Communication Lab II - Presentation Skills",duration:"10:00 AM - 11:20 AM"}],Z=[{id:"EE103",name:"Circuits and Systems",duration:"10:00 AM - 11:20 AM"},{id:"LA321",name:"Macroeconomics",duration:"11:30 AM - 12:50 PM"}],$=[{id:"IC100",name:"Introduction to Programming",duration:"8:30 AM - 9:50 AM"},{id:"CA150",name:"Professional Communication Lab II - Presentation Skills",duration:"11:30 AM - 12:50 PM"}],_=[{id:"EE103",name:"Circuits and Systems",duration:"10:00 AM - 11:20 AM"},{id:"LA321",name:"Macroeconomics",duration:"11:30 AM - 12:50 PM"}],ee=[{id:"IC100 Tutorial",name:"Introduction to Programming",duration:"10:00 AM - 11:20 AM"},{id:"EE103",name:"Circuits and Systems",duration:"11:30 AM - 12:50 PM"}],ne=[{id:"LA321",name:"Macroeconomics",duration:"11:30 AM - 12:50 PM"}],te=[{id:"IC100 Lab",name:"Introduction to Programming",duration:"9:30 AM - 1:30 PM"}],ae=[{id:"IC100",name:"Introduction to Programming",duration:"8:30 AM - 9:50 AM"},{id:"CA150",name:"Professional Communication Lab II - Presentation Skills",duration:"10:00 AM - 11:20 AM"}],re=[{id:"ME111",name:"Thermodynamics",duration:"10:00 AM - 11:20 AM"},{id:"LA321",name:"Macroeconomics",duration:"11:30 AM - 12:50 PM"}],ie=[{id:"IC100",name:"Introduction to Programming",duration:"8:30 AM - 9:50 AM"},{id:"CA150",name:"Professional Communication Lab II - Presentation Skills",duration:"11:30 AM - 12:50 PM"}],oe=[{id:"ME111",name:"Thermodynamics",duration:"10:00 AM - 11:20 AM"},{id:"LA321",name:"Macroeconomics",duration:"11:30 AM - 12:50 PM"}],ce=[{id:"IC100 Tutorial",name:"Introduction to Programming",duration:"10:00 AM - 11:20 AM"}],le=[{id:"ME111",name:"Thermodynamics",duration:"10:00 AM - 11:20 AM"},{id:"LA321",name:"Macroeconomics",duration:"11:30 AM - 12:50 PM"}],de=[{id:"IC100 Lab",name:"Introduction to Programming",duration:"9:30 AM - 1:30 PM"}];function me(){var e=Object(C.useRoute)(),n=e.params.deptID,t=e.params.fracID,a=e.params.dayID;console.log(n),console.log(t),console.log(a);return r.a.createElement(c.a,{style:ue.container},r.a.createElement(l.a,{style:ue.flatlist,data:function(){if("cse"===n){if("f12"!==t)return R;if("mon"===a)return z;if("tue"===a)return F;if("wed"===a)return O;if("thu"===a)return V;if("fri"===a)return W;if("sat"===a)return B;if("sun"===a)return U}else if("dsai"===n){if("f12"!==t)return R;if("mon"===a)return J;if("tue"===a)return q;if("wed"===a)return G;if("thu"===a)return H;if("fri"===a)return K;if("sat"===a)return Q;if("sun"===a)return X}else if("ee"===n){if("f12"!==t)return R;if("mon"===a)return Y;if("tue"===a)return Z;if("wed"===a)return $;if("thu"===a)return _;if("fri"===a)return ee;if("sat"===a)return ne;if("sun"===a)return te}else if("me"===n){if("f12"!==t)return R;if("mon"===a)return ae;if("tue"===a)return re;if("wed"===a)return ie;if("thu"===a)return oe;if("fri"===a)return ce;if("sat"===a)return le;if("sun"===a)return de}}(),renderItem:function(e){var n=e.item;return r.a.createElement(j,{schedule:n})},keyExtractor:function(e){return e.id}}))}var ue=o.a.create({container:{alignItems:"center",backgroundColor:f,flex:1},flatlist:{marginTop:50,width:"90%"}}),se=Object(P.a)();function fe(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{barStyle:"light-content",backgroundColor:"#121212"}),r.a.createElement(c.a,{style:ge.container},r.a.createElement(b.a,null,r.a.createElement(se.Navigator,null,r.a.createElement(se.Screen,{component:function(){return r.a.createElement(y,null)},name:"ChooseDepartment",options:{title:"Schema",headerStyle:{backgroundColor:M},headerTitleStyle:{fontWeight:"bold",fontSize:24},headerTitleAlign:"center",headerTintColor:"#fff"}}),r.a.createElement(se.Screen,{component:function(){return r.a.createElement(k,null)},name:"ChooseFractal",options:{title:"Choose Fractal",headerStyle:{backgroundColor:M},headerTintColor:"#fff"}}),r.a.createElement(se.Screen,{component:function(){return r.a.createElement(D,null)},name:"ChooseDay",options:{title:"Choose Day",headerStyle:{backgroundColor:M},headerTintColor:"#fff"}}),r.a.createElement(se.Screen,{component:function(){return r.a.createElement(me,null)},name:"Schedule",options:{title:"Schedule",headerStyle:{backgroundColor:M},headerTintColor:"#fff"}})))))}var ge=o.a.create({container:{flex:1,backgroundColor:f}})},158:function(e,n,t){e.exports=t(199)}},[[158,1,2]]]);
//# sourceMappingURL=app.16a26dd1.chunk.js.map