import { menu,buttonsData } from "./database.js";

//HTML den gelenler
const menuArea= document.querySelector('#menu-area')
const buttonsArea= document.querySelector('#buttons-area')

//!Sayfanın yüklenme olayını izleme

//dom dan sonra yanına yazdığımız fonksiyonun parantezini yazarsak sayfa yüklemeden çağırır fakat  bir fonsiyonun içinde çağırırsak hata giderilmiş olur
document.addEventListener("DOMContentLoaded",()=>{
renderButtons('all')
renderMenuItems(menu)

});

//buton elementlerini html den js ye gönderdiğimiz için butonların id ve classına erişemeyiz fakat onun ana kapsyıcısına erişmek mümkün 
buttonsArea.addEventListener("click",searchCategory)



//!ekrana mebü itemlerini basar
function renderMenuItems(menuItems){
    // console.log(menuItems) >console yaz ve izle emin ol

    //dizideki her bir obje için bir elemanı temsil eden html oluştur ve bu html'i diziye aktar ve stringe çevir.

   let menuHtml = menuItems.map((item)=> ` 
   <a href="/productDetail.html?id=${item.id}" id="card" class="d-flex gap-3 card p-2 text-decoration-none d-grid d-md-grid text-dark ">
    <img class="rounded shadow " src="${item.img}" >
    <div>
        <div class="d-flex justify-content-between">
            <h5>${item.title}</h5>
            <p class="text-success fs-5">&#8378; ${item.price}</p>
        </div>
        
        <p class="lead">
        ${item.desc}
    </p>
    </div>

</a>
    `
    );

    //!yukarıda href e yönlendirme yaptık ?id=${item.id} ile
 
    // console.log(menuHtml) >console yazdırdık fakat elemanları bize dizi şeklinde tanımladı stringe çevirmek için .join('')kullanırız
   menuHtml= menuHtml.join(''); /* menu Html i güncelledik  */
 
//oluşturdğumuz html yi ekrana bas
menuArea.innerHTML= menuHtml

}


//!Tıklanılan butona göre ekrana o butonun kategorisine ait ürünleri listeleme
function searchCategory(e){
    const category =e.target.dataset.category
    //Tüm dizi elemanlarından yanlızca kategori değeri butonun kategori değeriyle eşleşenleri getir.
   const filtredMenu= menu.filter((item)=>item.category ===category);
   
   if(category ==='all'){
    renderMenuItems(menu)
   }else{
//filtrelenmiş diziyi ekrana basma        => //  renderMenuItems(filtredMenu ?? menu) bu şekilde de yazılabilirdi.
 renderMenuItems(filtredMenu)
   }

   //butonları güncelle
   renderButtons(category)
   


}




//!ekrana butonları basacak fonksiyon
function renderButtons(active){
        //eski butonları kaldırma 
        buttonsArea.innerHTML = ' '
        
       //yeni butonlar oluşturma
        buttonsData.forEach((btn)=>{
       
        //html butonu oluşturma
        const buttonEle =document.createElement('button')
        
        //butona class isimi verme
        buttonEle.className = 'btn btn-outline-dark filter-btn'

        //içerisindeki yazıyı değiştirme
        buttonEle.innerText = btn.text

        //hangi kategori olduğu bilgisini buton elementine ekleme
        buttonEle.dataset.category = btn.value

        //eğer ki aktif kategoriyle buton eşleşirse ona farklı class ver

        if(btn.value === active)
       {
    buttonEle.classList.add = ('bg-dark','text-line')
       }
        

        //html e gönderme
        buttonsArea.appendChild(buttonEle)
    })
}

