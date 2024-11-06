const ramen = document.getElementById('product-ramen');
const tempura = document.getElementById('product-tempura');

ramen.addEventListener("click", () => {
    if(ramen.checked){
        document.getElementById('product-label-container1').style.borderBottom = "4px solid white";
        document.getElementById('product-label-container2').style.borderBottom = "none";
        console.log("ramen")
    }
})

tempura.addEventListener("click", () => {
    if(tempura.checked){
        document.getElementById('product-label-container1').style.borderBottom = "none";
        document.getElementById('product-label-container2').style.borderBottom = "4px solid white";
        console.log("tempura")
    }
})
