
let productos = [
    { id: "1", name: "Mesa de paraíso", description: "Mesa de paraíso lustrada", stock: 10, image: 'https://i.ibb.co/9nrfFq9/mesa.jpg',category: 'mesa' },
    { id: "2", name: "Mesita de luz", description: "Mesa de luz color claro", stock: 10, image: 'https://i.ibb.co/F0ZkHXZ/mesita.jpg', category: 'mesa' },
    { id: "3", name: "Placard", description: "Vestidor color claro", stock: 10, image: 'https://i.ibb.co/7bhvsm1/placard.jpg', category: 'vestidor' },
    { id: "4", name: "Mueble televisión", description: "Mueble para television 160cm", stock: 10, image: 'https://i.ibb.co/6mDG3zX/tele.jpg', category: 'tv' },
    { id: "5", name: "Estantería", description: "Estanteria para zapatos color blanco", stock: 10, image: 'https://i.ibb.co/DVNJYHf/zapaaaatoss.png',category: 'estante' },     
];

export let mockFetch = (id) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(id ? productos.find(prod => prod.id === id) : productos)
        }, 1000)
    })
}