//Type casting using the as keyword


function imprime(){
    let x="";
     x = document.getElementById("meuId");
    let input = x.querySelector('input["type="text"]') as HTMLInputElement;
    console.log(input.value);
}