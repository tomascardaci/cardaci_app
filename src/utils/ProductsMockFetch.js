let products = [
    {id: '0', name:'Fender Stratocaster', stock:'4', price:'price', img:'https://picsum.photos/500', category:'guitarras', description:'Su madera de aliso tiene una densidad media y proporciona un sonido equilibrado, rico en armónicos, con agudos y graves suaves'},
    {id: '1', name:'Fender Jaguar', stock:'3', price:'price', img:'https://picsum.photos/500', category:'guitarras', description:'description'}, 
    {id: '2', name:'Guitarra Acustica', stock:'2', price:'price', img:'https://picsum.photos/500', category:'guitarras', description:'description'}, 
    {id: '3', name:'Bajo', stock:'3', price:'price', img:'https://picsum.photos/500', category:'bajos', description:'description'}, 
    {id: '4', name:'Bajo', stock:'2', price:'price', img:'https://picsum.photos/500', category:'bajos', description:'description'}, 
    {id: '5', name:'Bateria Parker', stock:'2', price:'price', img:'https://picsum.photos/500', category:'baterias', description:'description'}, 
    {id: '6', name:'name', stock:'5', price:'price', img:'https://picsum.photos/500', category:'microfonos', description:'description'}, 
    {id: '7', name:'name', stock:'6', price:'price', img:'https://picsum.photos/500', category:'microfonos', description:'description'}, 
    {id: '8', name:'name', stock:'8', price:'price', img:'https://picsum.photos/500', category:'placas', description:'description'}, 
    {id: '9', name:'name', stock:'3', price:'price', img:'https://picsum.photos/500', category:'placas', description:'description'},     
]

export let ProductsMockFetch = (id) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(id ? products.find(prod => prod.id === id) : products)
        }, 1000)
    })
}