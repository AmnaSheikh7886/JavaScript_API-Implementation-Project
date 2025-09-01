const run1 = async () => {
  let response = await fetch("https://dummyjson.com/products/category/laptops");
  console.log(response.status);
  let data = await response.json();
  console.log(data.products[1].id);
  for (let i = 0; i < data.products.length; i++) {
    let div = document.createElement("div");
    div.className = "col-4";
    div.innerHTML = `<div class="card" >
      <img src="${data.products[i].thumbnail}" class="card-img-top img-fluid" alt="...">
      <div class="card-body">
        <div class="card-title text-center h5" >${data.products[i].title}</div>
        <p class="card-text ">${data.products[i].description}</p>
        <p><strong>Price: </strong>${data.products[i].price}$</p>
        <p><strong>Availability Status: </strong>${data.products[i].availabilityStatus}</p>
       <div class="row justify-content-center">
          
              <a href="#" class="btn btn-primary a " style="background-color: rgb(78, 76, 76)!important;color: antiquewhites;" >Buy Now</a>
          
       </div>
      </div>
    </div>`;
    document.getElementById("laptop").appendChild(div);
  }
}
const run2 = async () => {
  let response = await fetch("https://dummyjson.com/products/category/smartphones");
  console.log(response.status);
  let data = await response.json();
  console.log(data.products[1].id);
  for (let i = 0; i < data.products.length; i++) {
    let div = document.createElement("div");
    div.className = "col-4";
    div.innerHTML = `<div class="card" >
          <img src="${data.products[i].thumbnail}" class="card-img-top img-fluid" alt="...">
          <div class="card-body">
            <div class="card-title text-center h5" >${data.products[i].title}</div>
            <p class="card-text ">${data.products[i].description}</p>
            <p><strong>Price: </strong>${data.products[i].price}$</p>
            <p><strong>Availability Status: </strong>${data.products[i].availabilityStatus}</p>
           <div class="row justify-content-center">
              
                  <a href="#" class="btn btn-primary a" style="background-color: rgb(78, 76, 76)!important;color: antiquewhites;" >Buy Now</a>
              
           </div>
          </div>
        </div>`;
    document.getElementById("smartphones").appendChild(div);
  }
}
const run3 = async () => {
  let response = await fetch("https://dummyjson.com/products/category/beauty");
  console.log(response.status);
  let data = await response.json();
  console.log(data.products[1].id);
  for (let i = 0; i < data.products.length; i++) {
    let div = document.createElement("div");
    div.className = "col-4";
    div.innerHTML = `<div class="card" >
              <img src="${data.products[i].thumbnail}" class="card-img-top img-fluid" alt="...">
              <div class="card-body">
                <div class="card-title text-center h5" >${data.products[i].title}</div>
                <p class="card-text ">${data.products[i].description}</p>
                <p><strong>Price: </strong>${data.products[i].price}$</p>
                <p><strong>Availability Status: </strong>${data.products[i].availabilityStatus}</p>
               <div class="row justify-content-center">
                  
                      <a href="#" class="btn btn-primary a" style="background-color: rgb(78, 76, 76)!important;color: antiquewhites;" >Buy Now</a>
                  
               </div>
              </div>
            </div>`;
    document.getElementById("beauty").appendChild(div);
  }
}

const run4 = async () => {
  let response = await fetch("https://dummyjson.com/products/category/fragrances");
  console.log(response.status);
  let data = await response.json();
  console.log(data.products[1].id);
  for (let i = 0; i < data.products.length; i++) {
    let div = document.createElement("div");
    div.className = "col-4";
    div.innerHTML = `<div class="card" >
              <img src="${data.products[i].thumbnail}" class="card-img-top img-fluid" alt="...">
              <div class="card-body">
                <div class="card-title text-center h5" >${data.products[i].title}</div>
                <p class="card-text ">${data.products[i].description}</p>
                <p><strong>Price: </strong>${data.products[i].price}$</p>
                <p><strong>Availability Status: </strong>${data.products[i].availabilityStatus}</p>
               <div class="row justify-content-center">
                  
                      <a href="#" class="btn btn-primary a" style="background-color: rgb(78, 76, 76)!important;color: antiquewhites;" >Buy Now</a>
                  
               </div>
              </div>
            </div>`;
    document.getElementById("fragrances").appendChild(div);
  }
}
const run5 = async () => {
  let response = await fetch("https://dummyjson.com/products/category/furniture");
  console.log(response.status);
  let data = await response.json();
  console.log(data.products[1].id);
  for (let i = 0; i < data.products.length; i++) {
    let div = document.createElement("div");
    div.className = "col-4";
    div.innerHTML = `<div class="card" >
                  <img src="${data.products[i].thumbnail}" class="card-img-top img-fluid" alt="...">
                  <div class="card-body">
                    <div class="card-title text-center h5" >${data.products[i].title}</div>
                    <p class="card-text ">${data.products[i].description}</p>
                    <p><strong>Price: </strong>${data.products[i].price}$</p>
                    <p><strong>Availability Status: </strong>${data.products[i].availabilityStatus}</p>
                   <div class="row justify-content-center">
                      
                          <a href="#" class="btn btn-primary a" style="background-color: rgb(78, 76, 76)!important;color: antiquewhites;" >Buy Now</a>
                      
                   </div>
                  </div>
                </div>`;
    document.getElementById("furni").appendChild(div);
  }
}
const run6 = async () => {
  let response = await fetch("https://dummyjson.com/products/category/groceries");
  console.log(response.status);
  let data = await response.json();
  console.log(data.products[1].id);
  for (let i = 0; i < data.products.length; i++) {
    let div = document.createElement("div");
    div.className = "col-4";
    div.innerHTML = `<div class="card" >
                    <img src="${data.products[i].thumbnail}" class="card-img-top img-fluid" alt="...">
                    <div class="card-body">
                      <div class="card-title text-center h5" >${data.products[i].title}</div>
                      <p class="card-text ">${data.products[i].description}</p>
                      <p><strong>Price: </strong>${data.products[i].price}$</p>
                      <p><strong>Availability Status: </strong>${data.products[i].availabilityStatus}</p>
                     <div class="row justify-content-center">
                        
                            <a href="#" class="btn btn-primary a" style="background-color: rgb(78, 76, 76)!important;color: antiquewhites;" >Buy Now</a>
                        
                     </div>
                    </div>
                  </div>`;
    document.getElementById("gro").appendChild(div);
  }
}
const run7 = async () => {
  let response = await fetch("https://dummyjson.com/products/category/kitchen-accessories");
  console.log(response.status);
  let data = await response.json();
  console.log(data.products[1].id);
  for (let i = 0; i < data.products.length; i++) {
    let div = document.createElement("div");
    div.className = "col-4";
    div.innerHTML = `<div class="card" >
                      <img src="${data.products[i].thumbnail}" class="card-img-top img-fluid" alt="...">
                      <div class="card-body">
                        <div class="card-title text-center h5" >${data.products[i].title}</div>
                        <p class="card-text ">${data.products[i].description}</p>
                        <p><strong>Price: </strong>${data.products[i].price}$</p>
                        <p><strong>Availability Status: </strong>${data.products[i].availabilityStatus}</p>
                       <div class="row justify-content-center">
                          
                              <a href="#" class="btn btn-primary a" style="background-color: rgb(78, 76, 76)!important;color: antiquewhites;" >Buy Now</a>
                          
                       </div>
                      </div>
                    </div>`;
    document.getElementById("k-a").appendChild(div);
  }
}
const run8 = async () => {
  let response = await fetch("https://dummyjson.com/products/category/mens-shirts");
  console.log(response.status);
  let data = await response.json();
  console.log(data.products[1].id);
  for (let i = 0; i < data.products.length; i++) {
    let div = document.createElement("div");
    div.className = "col-4";
    div.innerHTML = `<div class="card" >
                        <img src="${data.products[i].thumbnail}" class="card-img-top img-fluid" alt="...">
                        <div class="card-body">
                          <div class="card-title text-center h5" >${data.products[i].title}</div>
                          <p class="card-text ">${data.products[i].description}</p>
                          <p><strong>Price: </strong>${data.products[i].price}$</p>
                          <p><strong>Availability Status: </strong>${data.products[i].availabilityStatus}</p>
                         <div class="row justify-content-center">
                            
                                <a href="#" class="btn btn-primary a" style="background-color: rgb(78, 76, 76)!important;color: antiquewhites;" >Buy Now</a>
                            
                         </div>
                        </div>
                      </div>`;
    document.getElementById("m-s").appendChild(div);
  }
}
const run9 = async () => {
  let response = await fetch("https://dummyjson.com/products/category/mens-watches");
  console.log(response.status);
  let data = await response.json();
  console.log(data.products[1].id);
  for (let i = 0; i < data.products.length; i++) {
    let div = document.createElement("div");
    div.className = "col-4";
    div.innerHTML = `<div class="card" >
                          <img src="${data.products[i].thumbnail}" class="card-img-top img-fluid" alt="...">
                          <div class="card-body">
                            <div class="card-title text-center h5" >${data.products[i].title}</div>
                            <p class="card-text ">${data.products[i].description}</p>
                            <p><strong>Price: </strong>${data.products[i].price}$</p>
                            <p><strong>Availability Status: </strong>${data.products[i].availabilityStatus}</p>
                           <div class="row justify-content-center">
                              
                                  <a href="#" class="btn btn-primary a" style="background-color: rgb(78, 76, 76)!important;color: antiquewhites;" >Buy Now</a>
                              
                           </div>
                          </div>
                        </div>`;
    document.getElementById("m-w").appendChild(div);
  }
}
const run10 = async () => {
  let response = await fetch("https://dummyjson.com/products/category/motorcycle");
  console.log(response.status);
  let data = await response.json();
  console.log(data.products[1].id);
  for (let i = 0; i < data.products.length; i++) {
    let div = document.createElement("div");
    div.className = "col-4";
    div.innerHTML = `<div class="card" >
                            <img src="${data.products[i].thumbnail}" class="card-img-top img-fluid" alt="...">
                            <div class="card-body">
                              <div class="card-title text-center h5" >${data.products[i].title}</div>
                              <p class="card-text ">${data.products[i].description}</p>
                              <p><strong>Price: </strong>${data.products[i].price}$</p>
                              <p><strong>Availability Status: </strong>${data.products[i].availabilityStatus}</p>
                             <div class="row justify-content-center">
                                
                                    <a href="#" class="btn btn-primary a" style="background-color: rgb(78, 76, 76)!important;color: antiquewhites;" >Buy Now</a>
                                
                             </div>
                            </div>
                          </div>`;
    document.getElementById("motorcycle").appendChild(div);
  }
}
const run11 = async () => {
  let response = await fetch("https://dummyjson.com/products/category/skin-care");
  console.log(response.status);
  let data = await response.json();
  console.log(data.products[1].id);
  for (let i = 0; i < data.products.length; i++) {
    let div = document.createElement("div");
    div.className = "col-4";
    div.innerHTML = `<div class="card" >
                            <img src="${data.products[i].thumbnail}" class="card-img-top img-fluid" alt="...">
                            <div class="card-body">
                              <div class="card-title text-center h5" >${data.products[i].title}</div>
                              <p class="card-text ">${data.products[i].description}</p>
                              <p><strong>Price: </strong>${data.products[i].price}$</p>
                              <p><strong>Availability Status: </strong>${data.products[i].availabilityStatus}</p>
                             <div class="row justify-content-center">
                                
                                    <a href="#" class="btn btn-primary a" style="background-color: rgb(78, 76, 76)!important;color: antiquewhites;" >Buy Now</a>
                                
                             </div>
                            </div>
                          </div>`;
    document.getElementById("s-c").appendChild(div);
  }
}
const run12 = async () => {
  let response = await fetch("https://dummyjson.com/products/category/sports-accessories");
  console.log(response.status);
  let data = await response.json();
  console.log(data.products[1].id);
  for (let i = 0; i < data.products.length; i++) {
    let div = document.createElement("div");
    div.className = "col-4";
    div.innerHTML = `<div class="card" >
                            <img src="${data.products[i].thumbnail}" class="card-img-top img-fluid" alt="...">
                            <div class="card-body">
                              <div class="card-title text-center h5" >${data.products[i].title}</div>
                              <p class="card-text ">${data.products[i].description}</p>
                              <p><strong>Price: </strong>${data.products[i].price}$</p>
                              <p><strong>Availability Status: </strong>${data.products[i].availabilityStatus}</p>
                             <div class="row justify-content-center">
                                
                                    <a href="#" class="btn btn-primary a" style="background-color: rgb(78, 76, 76)!important;color: antiquewhites;" >Buy Now</a>
                                
                             </div>
                            </div>
                          </div>`;
    document.getElementById("s-a").appendChild(div);
  }
}
const run13 = async () => {
  let response = await fetch("https://dummyjson.com/products/category/sunglasses");
  console.log(response.status);
  let data = await response.json();
  console.log(data.products[1].id);
  for (let i = 0; i < data.products.length; i++) {
    let div = document.createElement("div");
    div.className = "col-4";
    div.innerHTML = `<div class="card" >
                            <img src="${data.products[i].thumbnail}" class="card-img-top img-fluid" alt="...">
                            <div class="card-body">
                              <div class="card-title text-center h5" >${data.products[i].title}</div>
                              <p class="card-text ">${data.products[i].description}</p>
                              <p><strong>Price: </strong>${data.products[i].price}$</p>
                              <p><strong>Availability Status: </strong>${data.products[i].availabilityStatus}</p>
                             <div class="row justify-content-center">
                                
                                    <a href="#" class="btn btn-primary a" style="background-color: rgb(78, 76, 76)!important;color: antiquewhites;" >Buy Now</a>
                                
                             </div>
                            </div>
                          </div>`;
    document.getElementById("s-g").appendChild(div);
  }
}
const run14 = async () => {
  let response = await fetch("https://dummyjson.com/products/category/tops");
  console.log(response.status);
  let data = await response.json();
  console.log(data.products[1].id);
  for (let i = 0; i < data.products.length; i++) {
    let div = document.createElement("div");
    div.className = "col-4";
    div.innerHTML = `<div class="card" >
                            <img src="${data.products[i].thumbnail}" class="card-img-top img-fluid" alt="...">
                            <div class="card-body">
                              <div class="card-title text-center h5" >${data.products[i].title}</div>
                              <p class="card-text ">${data.products[i].description}</p>
                              <p><strong>Price: </strong>${data.products[i].price}$</p>
                              <p><strong>Availability Status: </strong>${data.products[i].availabilityStatus}</p>
                             <div class="row justify-content-center">
                                
                                    <a href="#" class="btn btn-primary a" style="background-color: rgb(78, 76, 76)!important;color: antiquewhites;" >Buy Now</a>
                                
                             </div>
                            </div>
                          </div>`;
    document.getElementById("tops").appendChild(div);
  }
}
const run15 = async () => {
  let response = await fetch("https://dummyjson.com/products/category/vehicle");
  console.log(response.status);
  let data = await response.json();
  console.log(data.products[1].id);
  for (let i = 0; i < data.products.length; i++) {
    let div = document.createElement("div");
    div.className = "col-4";
    div.innerHTML = `<div class="card" >
                            <img src="${data.products[i].thumbnail}" class="card-img-top img-fluid" alt="...">
                            <div class="card-body">
                              <div class="card-title text-center h5" >${data.products[i].title}</div>
                              <p class="card-text ">${data.products[i].description}</p>
                              <p><strong>Price: </strong>${data.products[i].price}$</p>
                              <p><strong>Availability Status: </strong>${data.products[i].availabilityStatus}</p>
                             <div class="row justify-content-center">
                                
                                    <a href="#" class="btn btn-primary a" style="background-color: rgb(78, 76, 76)!important;color: antiquewhites;" >Buy Now</a>
                                
                             </div>
                            </div>
                          </div>`;
    document.getElementById("vehicle").appendChild(div);
  }
}
const run16 = async () => {
  let response = await fetch("https://dummyjson.com/products/category/womens-bags");
  console.log(response.status);
  let data = await response.json();
  console.log(data.products[1].id);
  for (let i = 0; i < data.products.length; i++) {
    let div = document.createElement("div");
    div.className = "col-4";
    div.innerHTML = `<div class="card" >
                            <img src="${data.products[i].thumbnail}" class="card-img-top img-fluid" alt="...">
                            <div class="card-body">
                              <div class="card-title text-center h5" >${data.products[i].title}</div>
                              <p class="card-text ">${data.products[i].description}</p>
                              <p><strong>Price: </strong>${data.products[i].price}$</p>
                              <p><strong>Availability Status: </strong>${data.products[i].availabilityStatus}</p>
                             <div class="row justify-content-center">
                                
                                    <a href="#" class="btn btn-primary a" style="background-color: rgb(78, 76, 76)!important;color: antiquewhites;" >Buy Now</a>
                                
                             </div>
                            </div>
                          </div>`;
    document.getElementById("w-b").appendChild(div);
  }
}
const run17 = async () => {
  let response = await fetch("https://dummyjson.com/products/category/womens-dresses");
  console.log(response.status);
  let data = await response.json();
  console.log(data.products[1].id);
  for (let i = 0; i < data.products.length; i++) {
    let div = document.createElement("div");
    div.className = "col-4";
    div.innerHTML = `<div class="card" >
                            <img src="${data.products[i].thumbnail}" class="card-img-top img-fluid" alt="...">
                            <div class="card-body">
                              <div class="card-title text-center h5" >${data.products[i].title}</div>
                              <p class="card-text ">${data.products[i].description}</p>
                              <p><strong>Price: </strong>${data.products[i].price}$</p>
                              <p><strong>Availability Status: </strong>${data.products[i].availabilityStatus}</p>
                             <div class="row justify-content-center">
                                
                                    <a href="#" class="btn btn-primary a" style="background-color: rgb(78, 76, 76)!important;color: antiquewhites;" >Buy Now</a>
                                
                             </div>
                            </div>
                          </div>`;
    document.getElementById("w-d").appendChild(div);
  }
}
const run18 = async () => {
  let response = await fetch("https://dummyjson.com/products/category/womens-jewellery");
  console.log(response.status);
  let data = await response.json();
  console.log(data.products[1].id);
  for (let i = 0; i < data.products.length; i++) {
    let div = document.createElement("div");
    div.className = "col-4";
    div.innerHTML = `<div class="card" >
                            <img src="${data.products[i].thumbnail}" class="card-img-top img-fluid" alt="...">
                            <div class="card-body">
                              <div class="card-title text-center h5" >${data.products[i].title}</div>
                              <p class="card-text ">${data.products[i].description}</p>
                              <p><strong>Price: </strong>${data.products[i].price}$</p>
                              <p><strong>Availability Status: </strong>${data.products[i].availabilityStatus}</p>
                             <div class="row justify-content-center">
                                
                                    <a href="#" class="btn btn-primary a" style="background-color: rgb(78, 76, 76)!important;color: antiquewhites;" >Buy Now</a>
                                
                             </div>
                            </div>
                          </div>`;
    document.getElementById("w-j").appendChild(div);
  }
}
const run19 = async () => {
  let response = await fetch("https://dummyjson.com/products/category/womens-shoes");
  console.log(response.status);
  let data = await response.json();
  console.log(data.products[1].id);
  for (let i = 0; i < data.products.length; i++) {
    let div = document.createElement("div");
    div.className = "col-4";
    div.innerHTML = `<div class="card" >
                            <img src="${data.products[i].thumbnail}" class="card-img-top img-fluid" alt="...">
                            <div class="card-body">
                              <div class="card-title text-center h5" >${data.products[i].title}</div>
                              <p class="card-text ">${data.products[i].description}</p>
                              <p><strong>Price: </strong>${data.products[i].price}$</p>
                              <p><strong>Availability Status: </strong>${data.products[i].availabilityStatus}</p>
                             <div class="row justify-content-center">
                                
                                    <a href="#" class="btn btn-primary a" style="background-color: rgb(78, 76, 76)!important;color: antiquewhites;" >Buy Now</a>
                                
                             </div>
                            </div>
                          </div>`;
    document.getElementById("w-s").appendChild(div);
  }
}
const run20 = async () => {
  let response = await fetch("https://dummyjson.com/products/category/womens-watches");
  console.log(response.status);
  let data = await response.json();
  console.log(data.products[1].id);
  for (let i = 0; i < data.products.length; i++) {
    let div = document.createElement("div");
    div.className = "col-4";
    div.innerHTML = `<div class="card" >
                            <img src="${data.products[i].thumbnail}" class="card-img-top img-fluid" alt="...">
                            <div class="card-body">
                              <div class="card-title text-center h5" >${data.products[i].title}</div>
                              <p class="card-text ">${data.products[i].description}</p>
                              <p><strong>Price: </strong>${data.products[i].price}$</p>
                              <p><strong>Availability Status: </strong>${data.products[i].availabilityStatus}</p>
                             <div class="row justify-content-center">
                                
                                    <a href="#" class="btn btn-primary a" style="background-color: rgb(78, 76, 76)!important;color: antiquewhites;" >Buy Now</a>
                                
                             </div>
                            </div>
                          </div>`;
    document.getElementById("w-w").appendChild(div);
  }
}
const run = async () => {
  await Promise.all([run1(), run2(), run3(), run4(), run5(), run6(), run7(), run8(), run9(), run10(),run11(), run12(), run13(), run14(), run15(), run16(), run17(), run18(), run19(), run20()]);
}
run();