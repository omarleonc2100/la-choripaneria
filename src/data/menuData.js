export const categories = [
  { id: 'entradas', label: 'Entradas' },
  { id: 'choripanes', label: 'Choripanes' },
  { id: 'bebidas', label: 'Bebidas' },
  { id: 'cervezas', label: 'Cervezas y Coctelería' },
  { id: 'hamburguesas', label: 'Hamburguesas / Chorihamburguesas' },
  { id: 'pizza', label: 'Pizza' },
  { id: 'cafe', label: 'Café y Postres' },
]

export const categoryColors = {
  entradas: 'bg-amber-900/80 text-amber-300',
  choripanes: 'bg-orange-900/80 text-orange-300',
  bebidas: 'bg-blue-900/80 text-blue-300',
  cervezas: 'bg-yellow-900/80 text-yellow-300',
  hamburguesas: 'bg-red-900/80 text-red-300',
  pizza: 'bg-green-900/80 text-green-300',
  cafe: 'bg-amber-950/80 text-amber-200',
}

export const categoryLabels = {
  entradas: 'Entradas',
  choripanes: 'Choripanes',
  bebidas: 'Bebidas',
  cervezas: 'Cervezas y Coctelería',
  hamburguesas: 'Hamburguesas',
  pizza: 'Pizza',
  cafe: 'Café y Postres',
}

export const menuItems = [
  // ENTRADAS
  {
    id: 1, category: 'entradas',
    name: 'Empanadas Argentinas',
    description: 'Orden de tres — Mendocina (chorizo argentino con queso) o elote con queso',
    price: 95, image: '/empanadas_argentinas.jpg',
  },
  {
    id: 2, category: 'entradas',
    name: 'Chori Tabla',
    description: 'Selección de chorizos argentinos a la plancha para compartir en mesa',
    price: 178, image: '/chori_tabla.jpg',
  },
  {
    id: 3, category: 'entradas',
    name: 'Fries N Bacon',
    description: 'Papa a la francesa con rábano a la plancha y tocino crujiente',
    price: 79, image: '/fries_n_bacon.jpg',
  },
  {
    id: 4, category: 'entradas',
    name: 'Papas Gajo',
    description: 'Papas en gajo al horno con especias de la casa',
    price: 79, image: '/papas_gajo.jpg',
  },
  {
    id: 5, category: 'entradas',
    name: 'Fries Cheese BBQ',
    description: 'Papas a la francesa con queso fundido y salsa BBQ',
    price: 79, image: '/fries_cheese_bbq.jpg',
  },
  {
    id: 6, category: 'entradas',
    name: 'Boneless',
    description: 'Orden de boneless de pollo dorado bañados en salsa a elegir',
    price: 158, image: '/boneless.jpg',
  },
  {
    id: 7, category: 'entradas',
    name: 'Dedos de Queso',
    description: 'Dedos de queso empanizados, crujientes por fuera y fundentes por dentro',
    price: 95, image: '/dedos_queso.png',
  },
  {
    id: 8, category: 'entradas',
    name: 'Papas Bravas',
    description: 'Papas al horno con salsa brava picante de la casa',
    price: 95, image: '/papas_bravas.jpg',
  },
  {
    id: 9, category: 'entradas',
    name: 'Aros de Cebolla',
    description: 'Aros de cebolla empanizados y crujientes, servidos con aderezo',
    price: 79, image: '/aros_cebolla.png',
  },
  {
    id: 10, category: 'entradas',
    name: 'Papas a la Francesa',
    description: 'Papas fritas clásicas al corte, perfectamente doradas',
    price: 68, image: '/papizza.jpg',
  },

  // CHORIPANES
  {
    id: 11, category: 'choripanes',
    name: 'Tradicional',
    description: 'Chorizo argentino, rábano y cebolla en pan artesanal tostado a la plancha',
    price: 75, image: '/chori_tradicional.jpg',
  },
  {
    id: 12, category: 'choripanes',
    name: 'Con Queso',
    description: 'Chorizo argentino, queso mozzarella y cebolla en pan artesanal',
    price: 95, image: '/chori_tradicional.jpg',
  },
  {
    id: 13, category: 'choripanes',
    name: 'Veggie',
    description: 'Chorizo argentino, queso boursin y cebolla al modo artesanal',
    price: 95, image: '/chori_veggie.jpg',
  },
  {
    id: 14, category: 'choripanes',
    name: 'Mexicano',
    description: 'Chorizo argentino, pico de gallo, guacamole, cebolla, frijol y totopos',
    price: 105, image: '/choripan.jpg',
  },
  {
    id: 15, category: 'choripanes',
    name: 'Norteño',
    description: 'Chorizo argentino, queso gouda y tequilita de arrachera',
    price: 95, image: '/chori_tradicional.jpg',
  },
  {
    id: 16, category: 'choripanes',
    name: 'Hawaiano',
    description: 'Chorizo argentino, jamón, piña, salsa BBQ y queso provolone',
    price: 95, image: '/choripan2.jpg',
  },
  {
    id: 17, category: 'choripanes',
    name: 'Ranchero',
    description: 'Chorizo argentino, cebolla, aguacate, chile, rábano, frijoles y jalapeño',
    price: 105, image: '/choripan3.jpg',
  },
  {
    id: 18, category: 'choripanes',
    name: 'BBQ',
    description: 'Chorizo argentino, piña, jamón, salsa BBQ y aguacate',
    price: 115, image: '/choripan4.png',
  },
  {
    id: 19, category: 'choripanes',
    name: 'Pulled Pork',
    description: 'Chorizo argentino, pulled pork, aguacate y cebolla caramelizada',
    price: 115, image: '/choripan5.jpg',
  },
  {
    id: 20, category: 'choripanes',
    name: 'Choripanela',
    description: 'Chorizo argentino, queso panela, cebolla y jalapeño',
    price: 95, image: '/chori_veggie.jpg',
  },

  // BEBIDAS
  {
    id: 21, category: 'bebidas',
    name: 'Agua Natural',
    description: 'Agua purificada fría 600 ml',
    price: 30, image: '/agua_natural.png',
  },
  {
    id: 22, category: 'bebidas',
    name: 'Agua Mineral',
    description: 'Agua mineral con gas 600 ml',
    price: 35, image: '/agua_mineral.png',
  },
  {
    id: 23, category: 'bebidas',
    name: 'Refresco',
    description: 'Coca-Cola, Sprite o Fanta 355 ml bien fría',
    price: 35, image: '/refresco.png',
  },
  {
    id: 24, category: 'bebidas',
    name: 'Limonada',
    description: 'Limonada natural con hielo y menta fresca',
    price: 45, image: '/limonada.png',
  },
  {
    id: 25, category: 'bebidas',
    name: 'Jugo de Naranja',
    description: 'Jugo de naranja natural exprimido al momento',
    price: 45, image: '/jugo_naranja.png',
  },
  {
    id: 26, category: 'bebidas',
    name: 'Agua de Jamaica',
    description: 'Agua fresca de flor de jamaica bien fría',
    price: 40, image: '/agua_jamaica.png',
  },

  // CERVEZAS Y COCTELERÍA
  {
    id: 27, category: 'cervezas',
    name: 'Cerveza Clara',
    description: 'Cerveza fría 355 ml a elegir de la carta',
    price: 55, image: '/cerveza.jpg',
  },
  {
    id: 28, category: 'cervezas',
    name: 'Cerveza Oscura',
    description: 'Cerveza obscura importada 355 ml bien fría',
    price: 60, image: '/cerveza.jpg',
  },
  {
    id: 29, category: 'cervezas',
    name: 'Fernet con Coca',
    description: 'Fernet Branca con Coca-Cola, el clásico argentino',
    price: 85, image: '/fernet_coca.png',
  },
  {
    id: 30, category: 'cervezas',
    name: 'Sangría',
    description: 'Vino tinto con frutas frescas y especias de la casa',
    price: 95, image: '/vino_tinto.jpg',
  },
  {
    id: 31, category: 'cervezas',
    name: 'Gin Tonic',
    description: 'Gin premium con agua tónica, limón y hierbas frescas',
    price: 90, image: '/gin_tonic.png',
  },
  {
    id: 32, category: 'cervezas',
    name: 'Michelada',
    description: 'Cerveza artesanal con limón, sal, chamoy y especias',
    price: 75, image: '/michelada.png',
  },

  // HAMBURGUESAS / CHORIHAMBURGUESAS
  {
    id: 33, category: 'hamburguesas',
    name: 'Sirloin',
    description: 'Carne de sirloin, queso cheddar, jamón y verdura fresca',
    price: 145, image: '/hamburguesa_sirloin.jpg',
  },
  {
    id: 34, category: 'hamburguesas',
    name: 'Chicken',
    description: 'Carne de pollo en tempura, queso cheddar y verdura',
    price: 145, image: '/hamburguesa.jpg',
  },
  {
    id: 35, category: 'hamburguesas',
    name: 'Marinera',
    description: 'Carne de sirloin, camarones al modo boursin y verdura fresca',
    price: 195, image: '/chori_marinero.jpg',
  },
  {
    id: 36, category: 'hamburguesas',
    name: 'Hawaiana',
    description: 'Carne de sirloin, piña, salsa BBQ, cheddar, jamón y verdura',
    price: 145, image: '/hamburguesa.jpg',
  },
  {
    id: 37, category: 'hamburguesas',
    name: 'Mexicana',
    description: 'Carne de sirloin, pico de gallo, mozzarella, cebolla, rábano y verdura',
    price: 145, image: '/hamburguesa_mexicana.jpg',
  },
  {
    id: 38, category: 'hamburguesas',
    name: 'BBQ',
    description: 'Carne de sirloin, arrachera, piña, jamón, salsa BBQ y queso gouda',
    price: 195, image: '/hamburguesa.png',
  },
  {
    id: 39, category: 'hamburguesas',
    name: 'Italiana',
    description: 'Carne de sirloin, queso mozzarella y hierbas finas italianas',
    price: 145, image: '/hamburguesa.jpg',
  },
  {
    id: 40, category: 'hamburguesas',
    name: 'Pulled Pork',
    description: 'Carne de sirloin, queso mozzarella, pulled pork y verdura',
    price: 145, image: '/hamburguesa.png',
  },
  {
    id: 41, category: 'hamburguesas',
    name: 'Ranchera',
    description: 'Carne de sirloin, aguacate, jalapeño, queso y verdura',
    price: 145, image: '/hamburguesa.jpg',
  },
  {
    id: 42, category: 'hamburguesas',
    name: 'Norteña',
    description: 'Carne de sirloin, queso arrachera, mozzarella, picante y verdura',
    price: 145, image: '/hamburguesa_sirloin.jpg',
  },
  {
    id: 43, category: 'hamburguesas',
    name: 'Champión',
    description: 'Carne de sirloin, queso mozzarella, champiñones y queso gouda',
    price: 145, image: '/hamburguesa.png',
  },
  {
    id: 44, category: 'hamburguesas',
    name: 'Cheese Burger',
    description: 'Carne de sirloin, doble queso derretido, arrachera y barbacoa',
    price: 145, image: '/hamburguesa.jpg',
  },
  {
    id: 45, category: 'hamburguesas',
    name: 'Krispy Chicken',
    description: 'Boneless bañado en BBQ, queso, aguacate, cebolla y verdura',
    price: 145, image: '/hamburguesa.png',
  },
  {
    id: 46, category: 'hamburguesas',
    name: 'Argentina',
    description: 'Carne de sirloin, chimichurri casero, cebolla y verdura',
    price: 145, image: '/hamburguesa_mexicana.jpg',
  },
  {
    id: 47, category: 'hamburguesas',
    name: 'Maple y Bacon',
    description: 'Carne de sirloin, maple, bacon crujiente, queso cheddar y verdura',
    price: 145, image: '/hamburguesa.jpg',
  },
  {
    id: 48, category: 'hamburguesas',
    name: 'Jalapeño Spicy',
    description: 'Carne de sirloin, salsa jalapeño, aguacate y queso cheddar',
    price: 145, image: '/hamburguesa_sirloin.jpg',
  },
  {
    id: 49, category: 'hamburguesas',
    name: 'Chorihamburguesa Tradicional',
    description: 'Chorizo argentino, queso cheddar, cebolla caramelizada y verdura',
    price: 145, image: '/chorihamburguesa.jpg',
  },
  {
    id: 50, category: 'hamburguesas',
    name: 'Chorihamburguesa BBQ',
    description: 'Chorizo argentino, salsa BBQ, queso gouda, piña y jamón',
    price: 165, image: '/chorihamburguesa.jpg',
  },

  // PIZZA
  {
    id: 51, category: 'pizza',
    name: 'Pepperoni',
    description: 'Salsa pommarola, mozzarella y pepperoni premium',
    price: 219, image: '/pizza.jpg',
  },
  {
    id: 52, category: 'pizza',
    name: 'Española',
    description: 'Salsa pommarola, mozzarella, jamón serrano, aceituna y ajo',
    price: 219, image: '/pizza.jpg',
  },
  {
    id: 53, category: 'pizza',
    name: 'Argentina',
    description: 'Salsa pommarola, mozzarella y chorizo argentino selecto',
    price: 219, image: '/pizza.jpg',
  },
  {
    id: 54, category: 'pizza',
    name: 'Champiñón',
    description: 'Salsa pommarola, mozzarella, champiñones frescos y bacon',
    price: 219, image: '/pizza.jpg',
  },
  {
    id: 55, category: 'pizza',
    name: 'Ranchera',
    description: 'Salsa pommarola, mozzarella, queso brie, jalapeño y pollo',
    price: 219, image: '/pizza.jpg',
  },
  {
    id: 56, category: 'pizza',
    name: 'Margarita',
    description: 'Salsa pommarola, mozzarella, tomate fresco y albahaca',
    price: 159, image: '/pizza.jpg',
  },
  {
    id: 57, category: 'pizza',
    name: 'Carnes Frías',
    description: 'Salsa pommarola, mozzarella, chorizo argentino y carnes seleccionadas',
    price: 219, image: '/pizza.jpg',
  },
  {
    id: 58, category: 'pizza',
    name: 'Chicken',
    description: 'Salsa pommarola, mozzarella, pollo ahumado y piña',
    price: 219, image: '/pizza.jpg',
  },
  {
    id: 59, category: 'pizza',
    name: 'Bacon Americano',
    description: 'Salsa pommarola, mozzarella, bacon crujiente y cebolla morada',
    price: 219, image: '/pizza.jpg',
  },
  {
    id: 60, category: 'pizza',
    name: 'Pastor',
    description: 'Salsa pommarola, mozzarella y carne al pastor al estilo tlaxcalteca',
    price: 219, image: '/pizza.jpg',
  },

  // CAFÉ Y POSTRES
  {
    id: 61, category: 'cafe',
    name: 'Americano',
    description: 'Café americano caliente o frío, preparado al momento',
    price: 49, image: '/cafe_postre.jpg',
  },
  {
    id: 62, category: 'cafe',
    name: 'Cappuccino',
    description: 'Café espresso con leche vaporizada y espuma cremosa',
    price: 59, image: '/cafe_postre.jpg',
  },
  {
    id: 63, category: 'cafe',
    name: 'Latte',
    description: 'Café latte con leche cremosa al estilo italiano',
    price: 59, image: '/cafe_postre.jpg',
  },
  {
    id: 64, category: 'cafe',
    name: 'Chocotorta',
    description: 'Postre argentino de galletitas con crema de queso y chocolate',
    price: 98, image: '/chocotorta.png',
  },
  {
    id: 65, category: 'cafe',
    name: 'Cheesecake',
    description: 'Cheesecake estilo New York con coulis de frutos rojos',
    price: 78, image: '/cheesecake.png',
  },
  {
    id: 66, category: 'cafe',
    name: 'Limonada Pastel',
    description: 'Limonada rosa con frambuesa y hielo, perfecta para el calor',
    price: 68, image: '/limonada_rosa.jpg',
  },
  {
    id: 67, category: 'cafe',
    name: 'Empanada de Dulce',
    description: 'Empanada rellena de dulce de leche argentino',
    price: 38, image: '/empanadas_argentinas.jpg',
  },
]
