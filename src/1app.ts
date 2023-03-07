interface Product{
    id: number,
    name: string,
    price: number
};

function getProduct(id:any) : Product{
    return {
      id: id,
      name: `Awesome Gadget ${id}`,
      price: 99.5
    }
  }

  const product = getProduct(23);
console.log(` 1app;ts The product ${product.name} costs $${product.price}`);

const showProduct = (nome: string, preco:number)  => {
    console.log(`The product ${nome} costs R$ ${preco}.`);
  };

  showProduct(product.name,product.price)

// type annotatins


