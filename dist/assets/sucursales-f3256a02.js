import{h as c,i,r as d,o,g as l,m as _,v as h,e,b as p,w as m,F as f,j as v,t as n,k as y}from"./index-68dcfe08.js";import{a as b}from"./axios-4a70c6fc.js";const g=e("h1",null,"Sucursales",-1),k=e("thead",null,[e("tr",null,[e("th",null,"Nombre"),e("th",null,"Dirección"),e("th",null,"Teléfono")])],-1),x={key:0},D=e("td",{colspan:"4"},"No se encontraron sucursales",-1),N=[D],F={__name:"sucursales",setup(w){const a=c([]);return i(async()=>{try{const t=await b.get("http://localhost/sucursales");a.value=t.data.data}catch(t){console.log(t)}}),(t,r)=>{const u=d("v-table");return o(),l("div",null,[g,_(e("input",{type:"text","onUpdate:modelValue":r[0]||(r[0]=s=>t.filtro=s),placeholder:"Filtrar sucursales"},null,512),[[h,t.filtro]]),p(u,{class:"sucursales-table"},{default:m(()=>[k,e("tbody",null,[(o(!0),l(f,null,v(a.value,s=>(o(),l("tr",{key:s.id},[e("td",null,n(s.nombre),1),e("td",null,n(s.direccion),1),e("td",null,n(s.telefono),1)]))),128)),a.value.length===0?(o(),l("tr",x,N)):y("",!0)])]),_:1})])}}};export{F as default};
