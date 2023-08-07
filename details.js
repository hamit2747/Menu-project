import { menu } from "./database.js";
//hmtl de arayüzü göndereceğimiz yer
const outlet = document.querySelector('#outlet')

//URL'den parametre id parametresini alma 
const searchParams = new URLSearchParams(window.location.search)
// get edtodu aracılığıyla url'deki id parametresine eriştik
const paramid = searchParams.get('id')



//menü içerisinden id sini bildiğimiz elemana erişme

const product = menu.find((item)=> item.id === Number(paramid))

//bulduğumuz ürüne göre arayüzü ekrana basma 

outlet.innerHTML = `<a  href="/" class="text-decoration-none text-center text-dark   ">
<i  class="bi bi-house fs-1 text-center "> <span class=" rounded">Home</span> </i> 
</a>

<h1 class="text-center my-3 shadow-lg p-2 text-dark rounded">${product.title}</h1>
<div class="d-flex align-items-center justify-content-center">
<img   class="img-fluid rounded shadow-lg" src="${product.img}" style="max-width: 500px ; max-height: 450px;">
</div>

<h3 class="my-5 text-center"><span class="text-dark shadow-lg text-center align-items-center p-3 rounded">Ürünün Kategorisi : <span class="text-success text-uppercase">${product.category}</span></span> </h3>

<h3 class="my-5 text-center"><span class="text-dark shadow-lg text-center align-items-center p-3 rounded">Ürünün Fiyatı : <span class="text-success">${product.price} &#8378;</span> </span> </h3>
<p class="lead fs-3 shadow-lg p-3 text-center rounded">
${product.desc}
</p>`
