(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{148:function(e,t,n){"use strict";n.d(t,"a",(function(){return de}));var a=n(0),r=n.n(a),i=n(94),o=n(3),c=n(2),l=n(38),d=[{id:"cse",name:"Computer Science and Engineering"},{id:"dsai",name:"Data Science & Artificial Intelligence"},{id:"ee",name:"Electrical Engineering"},{id:"me",name:"Mechanical Engineering"}],m=n(26),u=n(39),s="#0095F6",f="#121212",g="#C0C0C0",M="#212121",A=o.a.create({container:{backgroundColor:M,marginBottom:18,borderStyle:"solid",borderRadius:10,elevation:6},innerContainer:{padding:15,flexDirection:"row",alignItems:"center"},deptName:{color:"#fff",textAlign:"center",fontSize:17,marginStart:10},circularView:{backgroundColor:f,padding:10,borderRadius:100,width:55,height:55,alignItems:"center",justifyContent:"center"},codeName:{color:s,textAlign:"center",fontSize:15,fontWeight:"bold",alignSelf:"center"}}),C=n(13),y=function(e){var t=e.department,n=Object(C.useNavigation)();return r.a.createElement(u.a,{style:A.container,onPress:function(){n.navigate("ChooseFractal",{deptID:t.id})}},r.a.createElement(c.a,{style:A.innerContainer},r.a.createElement(c.a,{style:A.circularView},r.a.createElement(m.a,{style:A.codeName},t.id.toUpperCase())),r.a.createElement(m.a,{style:A.deptName},t.name)))};function I(){return r.a.createElement(c.a,{style:E.container},r.a.createElement(l.a,{style:E.flatlist,data:d,renderItem:function(e){var t=e.item;return r.a.createElement(y,{department:t})},keyExtractor:function(e){return e.id}}))}var E=o.a.create({container:{alignItems:"center",backgroundColor:f,flex:1},flatlist:{marginTop:50,width:"90%"}}),h=n(126),b=n(203),p=[{id:"f12",name:"Fractals 1 & 2"},{id:"f34",name:"Fractals 3 & 4"},{id:"f56",name:"Fractals 5 & 6"}],S=o.a.create({container:{backgroundColor:M,marginBottom:18,borderStyle:"solid",borderRadius:10,elevation:6},innerContainer:{padding:15,flexDirection:"row",alignItems:"center"},fractalName:{color:"#fff",textAlign:"center",fontSize:17,marginStart:10},circularView:{backgroundColor:f,padding:10,borderRadius:100,width:55,height:55,alignItems:"center",justifyContent:"center"},codeName:{color:s,textAlign:"center",fontSize:15,fontWeight:"bold",alignSelf:"center"}}),P=function(e){var t=e.fractal,n=Object(C.useNavigation)(),a=Object(C.useRoute)().params.deptID;return r.a.createElement(u.a,{style:S.container,onPress:function(){n.navigate("ChooseDay",{fracID:t.id,deptID:a})}},r.a.createElement(c.a,{style:S.innerContainer},r.a.createElement(c.a,{style:S.circularView},r.a.createElement(m.a,{style:S.codeName},t.id.toUpperCase())),r.a.createElement(m.a,{style:S.fractalName},t.name)))};function k(){return r.a.createElement(c.a,{style:v.container},r.a.createElement(l.a,{style:v.flatlist,data:p,renderItem:function(e){var t=e.item;return r.a.createElement(P,{fractal:t})},keyExtractor:function(e){return e.id}}))}var v=o.a.create({container:{alignItems:"center",backgroundColor:f,flex:1},flatlist:{marginTop:50,width:"90%"}}),x=[{id:"mon",name:"Monday"},{id:"tue",name:"Tuesday"},{id:"wed",name:"Wednesday"},{id:"thu",name:"Thursday"},{id:"fri",name:"Friday"},{id:"sat",name:"Saturday"}],w=o.a.create({container:{backgroundColor:M,marginBottom:18,borderStyle:"solid",borderRadius:10,elevation:6},innerContainer:{padding:15,flexDirection:"row",alignItems:"center"},dayName:{color:"#fff",textAlign:"center",fontSize:17,marginStart:10},circularView:{backgroundColor:f,padding:10,borderRadius:100,width:55,height:55,alignItems:"center",justifyContent:"center"},codeName:{color:s,textAlign:"center",fontSize:15,fontWeight:"bold",alignSelf:"center"}}),D=function(e){var t=e.day,n=Object(C.useNavigation)(),a=Object(C.useRoute)(),i=a.params.deptID,o=a.params.fracID;return r.a.createElement(u.a,{style:w.container,onPress:function(){n.navigate("Schedule",{dayID:t.id,fracID:o,deptID:i})}},r.a.createElement(c.a,{style:w.innerContainer},r.a.createElement(c.a,{style:w.circularView},r.a.createElement(m.a,{style:w.codeName},t.id.toUpperCase())),r.a.createElement(m.a,{style:w.dayName},t.name)))};function L(){return r.a.createElement(c.a,{style:N.container},r.a.createElement(l.a,{style:N.flatlist,data:x,renderItem:function(e){var t=e.item;return r.a.createElement(D,{day:t})},keyExtractor:function(e){return e.id}}))}var N=o.a.create({container:{alignItems:"center",backgroundColor:f,flex:1},flatlist:{marginTop:50,width:"90%"}}),T=o.a.create({container:{backgroundColor:M,marginBottom:18,borderStyle:"solid",borderRadius:10,elevation:6},innerContainer:{padding:15,flexDirection:"column",alignItems:"flex-start"},fractalName:{color:"#fff",textAlign:"left",fontSize:17,marginVertical:8},codeName:{color:s,textAlign:"left",fontSize:15,fontWeight:"bold"},duration:{color:g,textAlign:"left"}}),j=function(e){var t=e.schedule;return r.a.createElement(u.a,{style:T.container},r.a.createElement(c.a,{style:T.innerContainer},r.a.createElement(m.a,{style:T.codeName},t.id),r.a.createElement(m.a,{style:T.fractalName},t.name),r.a.createElement(m.a,{style:T.duration},t.duration)))},R=[{id:"IC404",name:"Will be updated soon...",duration:"\u221e"}],z=[{id:"IC100",name:"Introduction to Programming",duration:"8:30 AM - 9:50 AM"},{id:"CA150",name:"Professional Communication Lab II - Presentation Skills",duration:"10:00 AM - 11:20 AM"}],F=[{id:"LA321",name:"Macroeconomics",duration:"11:30 AM - 12:50 PM"}],O=[{id:"IC100",name:"Introduction to Programming",duration:"8:30 AM - 9:50 AM"},{id:"CA150",name:"Professional Communication Lab II - Presentation Skills",duration:"11:30 AM - 12:50 PM"}],V=[{id:"LA321",name:"Macroeconomics",duration:"11:30 AM - 12:50 PM"}],W=[{id:"IC100 Tutorial",name:"Introduction to Programming",duration:"10:00 AM - 11:20 AM"}],B=[{id:"LA321",name:"Macroeconomics",duration:"11:30 AM - 12:50 PM"}],U=[{id:"IC100",name:"Introduction to Programming",duration:"8:30 AM - 9:50 AM"},{id:"CA150",name:"Professional Communication Lab II - Presentation Skills",duration:"10:00 AM - 11:20 AM"}],J=[{id:"LA321",name:"Macroeconomics",duration:"11:30 AM - 12:50 PM"}],q=[{id:"IC100",name:"Introduction to Programming",duration:"8:30 AM - 9:50 AM"},{id:"CA150",name:"Professional Communication Lab II - Presentation Skills",duration:"11:30 AM - 12:50 PM"}],G=[{id:"LA321",name:"Macroeconomics",duration:"11:30 AM - 12:50 PM"}],H=[{id:"IC100 Tutorial",name:"Introduction to Programming",duration:"10:00 AM - 11:20 AM"}],K=[{id:"LA321",name:"Macroeconomics",duration:"11:30 AM - 12:50 PM"}],Q=[{id:"IC100",name:"Introduction to Programming",duration:"8:30 AM - 9:50 AM"},{id:"CA150",name:"Professional Communication Lab II - Presentation Skills",duration:"10:00 AM - 11:20 AM"}],X=[{id:"EE103",name:"Circuits and Systems",duration:"10:00 AM - 11:20 AM"},{id:"LA321",name:"Macroeconomics",duration:"11:30 AM - 12:50 PM"}],Y=[{id:"IC100",name:"Introduction to Programming",duration:"8:30 AM - 9:50 AM"},{id:"CA150",name:"Professional Communication Lab II - Presentation Skills",duration:"11:30 AM - 12:50 PM"}],Z=[{id:"EE103",name:"Circuits and Systems",duration:"10:00 AM - 11:20 AM"},{id:"LA321",name:"Macroeconomics",duration:"11:30 AM - 12:50 PM"}],$=[{id:"IC100 Tutorial",name:"Circuits and Systems",duration:"10:00 AM - 11:20 AM"}],_=[{id:"EE103",name:"Circuits and Systems",duration:"10:00 AM - 11:20 AM"},{id:"LA321",name:"Macroeconomics",duration:"11:30 AM - 12:50 PM"}],ee=[{id:"IC100",name:"Introduction to Programming",duration:"8:30 AM - 9:50 AM"},{id:"CA150",name:"Professional Communication Lab II - Presentation Skills",duration:"10:00 AM - 11:20 AM"}],te=[{id:"ME111",name:"Thermodynamics",duration:"10:00 AM - 11:20 AM"},{id:"LA321",name:"Macroeconomics",duration:"11:30 AM - 12:50 PM"}],ne=[{id:"IC100",name:"Introduction to Programming",duration:"8:30 AM - 9:50 AM"},{id:"CA150",name:"Professional Communication Lab II - Presentation Skills",duration:"11:30 AM - 12:50 PM"}],ae=[{id:"ME111",name:"Thermodynamics",duration:"10:00 AM - 11:20 AM"},{id:"LA321",name:"Macroeconomics",duration:"11:30 AM - 12:50 PM"}],re=[{id:"IC100 Tutorial",name:"Circuits and Systems",duration:"10:00 AM - 11:20 AM"}],ie=[{id:"ME111",name:"Thermodynamics",duration:"10:00 AM - 11:20 AM"},{id:"LA321",name:"Macroeconomics",duration:"11:30 AM - 12:50 PM"}];function oe(){var e=Object(C.useRoute)(),t=e.params.deptID,n=e.params.fracID,a=e.params.dayID;console.log(t),console.log(n),console.log(a);return r.a.createElement(c.a,{style:ce.container},r.a.createElement(l.a,{style:ce.flatlist,data:function(){if("cse"===t){if("f12"!==n)return R;if("mon"===a)return z;if("tue"===a)return F;if("wed"===a)return O;if("thu"===a)return V;if("fri"===a)return W;if("sat"===a)return B}else if("dsai"===t){if("f12"!==n)return R;if("mon"===a)return U;if("tue"===a)return J;if("wed"===a)return q;if("thu"===a)return G;if("fri"===a)return H;if("sat"===a)return K}else if("ee"===t){if("f12"!==n)return R;if("mon"===a)return Q;if("tue"===a)return X;if("wed"===a)return Y;if("thu"===a)return Z;if("fri"===a)return $;if("sat"===a)return _}else if("me"===t){if("f12"!==n)return R;if("mon"===a)return ee;if("tue"===a)return te;if("wed"===a)return ne;if("thu"===a)return ae;if("fri"===a)return re;if("sat"===a)return ie}}(),renderItem:function(e){var t=e.item;return r.a.createElement(j,{schedule:t})},keyExtractor:function(e){return e.id}}))}var ce=o.a.create({container:{alignItems:"center",backgroundColor:f,flex:1},flatlist:{marginTop:50,width:"90%"}}),le=Object(b.a)();function de(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{barStyle:"light-content",backgroundColor:"#121212"}),r.a.createElement(c.a,{style:me.container},r.a.createElement(h.a,null,r.a.createElement(le.Navigator,null,r.a.createElement(le.Screen,{component:function(){return r.a.createElement(I,null)},name:"ChooseDepartment",options:{title:"Schema",headerStyle:{backgroundColor:M},headerTitleStyle:{fontWeight:"bold",fontSize:24},headerTitleAlign:"center",headerTintColor:"#fff"}}),r.a.createElement(le.Screen,{component:function(){return r.a.createElement(k,null)},name:"ChooseFractal",options:{title:"Choose Fractal",headerStyle:{backgroundColor:M},headerTintColor:"#fff"}}),r.a.createElement(le.Screen,{component:function(){return r.a.createElement(L,null)},name:"ChooseDay",options:{title:"Choose Day",headerStyle:{backgroundColor:M},headerTintColor:"#fff"}}),r.a.createElement(le.Screen,{component:function(){return r.a.createElement(oe,null)},name:"Schedule",options:{title:"Schedule",headerStyle:{backgroundColor:M},headerTintColor:"#fff"}})))))}var me=o.a.create({container:{flex:1,backgroundColor:f}})},158:function(e,t,n){e.exports=n(199)}},[[158,1,2]]]);
//# sourceMappingURL=app.957b2bb4.chunk.js.map