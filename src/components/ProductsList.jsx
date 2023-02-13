
let productos = [
  {
      id: "1",
      producto: "Pan blanco",
      marca: "Bimbo artesano",
      descripcion: "Pan blanco, Bimbo artesano, 500g",
      precio: 556,
      cantidad: 1,
      imagen: "multimedia/pan-blanco-bimbo-artesano-500g.webp",
      categoria: "despensa"
  },
  {
      id: "2",
      producto: "Queso feteado",
      marca: "SanCor Dambo",
      descripcion: "Queso feteado, SanCor dambo, 200g",
      precio: 548,
      cantidad: 1,
      imagen: "multimedia/queso-feteado-sancor-danbo-200g.webp",
      categoria: "heladera"
  },
  {
      id: "3",
      producto: "Jamon cocido feteado",
      marca: "Paladini",
      descripcion: "Jamon cocido feteado, Paladini, 200g",
      precio: 498,
      cantidad: 1,
      imagen: "multimedia/jamón-cocido-paladini-feteado-fetas-finas-200g.webp",
      categoria: "heladera"
  },
  {
      id: "4",
      producto: "Gaseosa",
      marca: "Coca Cola sabor original",
      descripcion: "Gaseosa, Coca Cola sabor original, 2.25lts",
      precio: 431,
      cantidad: 1,
      imagen: "/multimedia/gaseosa-coca-cola-sabor-original-2.25lts.webp",
      categoria: "bebida"
      
  },
  {
      id: "5",
      producto: "Papas fritas bolsa",
      marca: "Lays clasicas",
      descripcion: "Papas fritas bolsa, Lays clasicas, 249g",
      precio: 596,
      cantidad: 1,
      imagen: "/multimedia/papas-fritas-lays-clasicas-bolsa-249g.webp",
      categoria: "despensa"
  },
  {
      id: "6",
      producto: "Atun en aceite lomitos",
      marca: "La Campagnola",
      descripcion: "Atun en aceite, La Campagnola lomitos, 170g",
      precio: 568,
      cantidad: 1,
      imagen: "/multimedia/atun-en-aceite-la-campagnola-lomitos-170g.webp",
      categoria: "despensa"
  },
  {
      id: "7",
      producto: "Vino tinto malbec",
      marca: "El Enemigo",
      descripcion: "Vino tinto malbec, El Enemigo, 750cc",
      precio: 5285,
      cantidad: 1,
      imagen: "/multimedia/vino-tinto-malbec-el-enemigo-750cc.webp",
      categoria: "bebida"
  },
  {
      id: "8",
      producto: "Aceite de oliva extra virgen",
      marca: "Oliva Ilustre",
      descripcion: "Aceite de oliva, Oliva Ilustre extra virgen, 2l",
      precio: 3760,
      cantidad: 1,
      imagen: "/multimedia/aceite-de-oliva-ilustre-extra-virgen-2l.webp",
      categoria: "despensa"
  },
  {
      id: "9",
      producto: "Mayonesa",
      marca: "Hellmanns",
      descripcion: "Mayonesa, Hellmanns regular doy pack, 475g",
      precio: 267,
      cantidad: 1,
      imagen: "/multimedia/mayonesa-hellmanns-regular-doy-pack-475g.webp",
      categoria: "heladera"
  }
]

export const traerProductos = (id) => {
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            res( id ? productos.find(producto => producto.id === id) : productos)
        }, 1000)
    })
}