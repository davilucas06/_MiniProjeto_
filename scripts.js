
let products = [];


function addProduct() {
    const name = prompt("Digite o nome do produto:");
    const price = parseFloat(prompt("Digite o preço do produto:"));
    const description = prompt("Digite a descrição do produto:");

    if (name && !isNaN(price) && description) {
        const product = { name, price, description };
        products.push(product);
        alert("Produto adicionado com sucesso!");
    } else {
        alert("Por favor, insira informações válidas para o produto.");
    }
}


function searchProduct() {
    const searchName = prompt("Digite o nome do produto que deseja buscar:");
    const foundProducts = products.filter(product => product.name.toLowerCase() === searchName.toLowerCase());

    if (foundProducts.length > 0) {
        foundProducts.forEach(product => {
            alert(`Nome: ${product.name}\nPreço: R$ ${product.price.toFixed(2)}\nDescrição: ${product.description}`);
        });
    } else {
        alert("Produto não encontrado.");
    }
}


function updateProduct() {
    const searchName = prompt("Digite o nome do produto que deseja atualizar:");
    const foundIndex = products.findIndex(product => product.name.toLowerCase() === searchName.toLowerCase());

    if (foundIndex !== -1) {
        const newName = prompt("Digite o novo nome do produto:");
        const newPrice = parseFloat(prompt("Digite o novo preço do produto:"));
        const newDescription = prompt("Digite a nova descrição do produto:");

        if (newName && !isNaN(newPrice) && newDescription) {
            products[foundIndex].name = newName;
            products[foundIndex].price = newPrice;
            products[foundIndex].description = newDescription;
            alert("Produto atualizado com sucesso!");
        } else {
            alert("Por favor, insira informações válidas para atualizar o produto.");
        }
    } else {
        alert("Produto não encontrado.");
    }
}


function displayAllProducts() {
    if (products.length === 0) {
        alert("Não há produtos cadastrados.");
    } else {
        let productList = "Lista de Produtos:\n";
        products.forEach(product => {
            productList += `Nome: ${product.name}, Preço: R$ ${product.price.toFixed(2)}, Descrição: ${product.description}\n`;
        });
        alert(productList);
    }
}

function deleteProduct() {
    const searchName = prompt("Digite o nome do produto que deseja remover:");
    const foundIndex = products.findIndex(product => product.name.toLowerCase() === searchName.toLowerCase());

    if (foundIndex !== -1) {
        products.splice(foundIndex, 1);
        alert("Produto removido com sucesso!");
    } else {
        alert("Produto não encontrado.");
    }
}


while (true) {
    const option = prompt("Escolha uma opção:\n1 - Adicionar Produto\n2 - Buscar Produto\n3 - Atualizar Produto\n4 - Visualizar Todos os Produtos\n5 - Remover Produto\n6 - Sair");

    switch (option) {
        case "1":
            addProduct();
            break;
        case "2":
            searchProduct();
            break;
        case "3":
            updateProduct();
            break;
        case "4":
            displayAllProducts();
            break;
        case "5":
            deleteProduct();
            break;
        case "6":
            alert("Saindo do Catálogo de Produtos.");
            break;
        default:
            alert("Opção inválida. Por favor, escolha uma opção válida.");
    }

    if (option === "6") {
        break;
    }
}
