import{_ as b,r as d,a as c,b as f,i as x,w as i,e as a,g as y,j as g,p as P,h as I,d as w}from"./index-a0c1ea82.js";import{a as A}from"./axios-4a70c6fc.js";const S=t=>(P("data-v-8a6daa81"),t=t(),I(),t),q=S(()=>w("h2",null,"Actualizar Producto",-1)),N={__name:"Productos_Alterar",setup(t){const l=d(""),r=d(""),u=d(""),n=d(0),_=async()=>{const p={producto:r.value,categoria:u.value,existencias:n.value};try{const e=await A.put(`http://localhost/productosa/${l.value}`,p);console.log(p),l.value="",r.value="",u.value="",n.value=0}catch{console.error()}};return(p,e)=>{const s=c("v-text-field"),m=c("v-btn"),v=c("v-form"),V=c("v-container");return f(),x(V,null,{default:i(()=>[q,a(v,{onSubmit:g(_,["prevent"])},{default:i(()=>[a(s,{modelValue:l.value,"onUpdate:modelValue":e[0]||(e[0]=o=>l.value=o),label:"Ingresa el ID",required:"",type:"number"},null,8,["modelValue"]),a(s,{modelValue:r.value,"onUpdate:modelValue":e[1]||(e[1]=o=>r.value=o),label:"Nombre del Producto",required:""},null,8,["modelValue"]),a(s,{modelValue:u.value,"onUpdate:modelValue":e[2]||(e[2]=o=>u.value=o),type:"number",label:"Categoría",required:""},null,8,["modelValue"]),a(s,{modelValue:n.value,"onUpdate:modelValue":e[3]||(e[3]=o=>n.value=o),label:"Existencias",type:"number",required:""},null,8,["modelValue"]),a(m,{type:"submit",color:"primary"},{default:i(()=>[y("Actualizar")]),_:1})]),_:1},8,["onSubmit"])]),_:1})}}},z=b(N,[["__scopeId","data-v-8a6daa81"]]);export{z as default};