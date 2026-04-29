// ─── Image imports (Vite processes these for Vercel deployment) ───────────────
import imgEmpanadas        from '../assets/empanadas_argentinas.jpg'
import imgChoriTabla       from '../assets/chori_tabla.jpg'
import imgFriesNBacon      from '../assets/fries_n_bacon.jpg'
import imgPapasGajo        from '../assets/papas_gajo.jpg'
import imgFriesCheese      from '../assets/fries_cheese_bbq.jpg'
import imgBoneless         from '../assets/boneless.jpg'
import imgDedosQueso       from '../assets/dedos_queso.jpg'
import imgPapasBravas      from '../assets/papas_bravas.jpg'
import imgArosCebolla      from '../assets/aros_cebolla.jpg'
import imgChoripan         from '../assets/choripan.jpg'
import imgChoripan2        from '../assets/choripan2.jpg'
import imgChoripan3        from '../assets/choripan3.jpg'
import imgChoripan4        from '../assets/choripan4.jpg'
import imgChoripan5        from '../assets/choripan5.jpg'
import imgChoriTrad        from '../assets/chori_tradicional.jpg'
import imgChoriVeggie      from '../assets/chori_veggie.jpg'
import imgChoriHamburguesa from '../assets/chorihamburguesa.jpg'
import imgChoriMarinero    from '../assets/chori_marinero.jpg'
import imgAguaNatural      from '../assets/agua_natural.jpg'
import imgAguaMineral      from '../assets/agua_mineral.jpg'
import imgRefresco         from '../assets/refresco.png'
import imgLimonada         from '../assets/limonada.jpg'
import imgJugoNaranja      from '../assets/jugo_naranja.jpg'
import imgAguaJamaica      from '../assets/agua_jamaica.jpg'
import imgCerveza          from '../assets/cerveza.jpg'
import imgFernetCoca       from '../assets/fernet_coca.jpg'
import imgVinoTinto        from '../assets/vino_tinto.jpg'
import imgGinTonic         from '../assets/gin_tonic.jpg'
import imgMichelada        from '../assets/michelada.jpg'
import imgHamburguesa      from '../assets/hamburguesa.jpg'
import imgHambMexicana     from '../assets/hamburguesa_mexicana.jpg'
import imgHambSirloin      from '../assets/hamburguesa_sirloin.jpg'
import imgPizza            from '../assets/pizza.jpg'
import imgCafePostre       from '../assets/cafe_postre.jpg'
import imgChocotorta       from '../assets/chocotorta.jpg'
import imgCheesecake       from '../assets/cheesecake.jpg'
import imgLimonadaRosa     from '../assets/limonada_rosa.jpg'

// ─── Categories ───────────────────────────────────────────────────────────────
export const categories = [
  { id: 'entradas',     label: 'Entradas' },
  { id: 'choripanes',   label: 'Choripanes' },
  { id: 'bebidas',      label: 'Bebidas' },
  { id: 'cervezas',     label: 'Cervezas y Coctelería' },
  { id: 'hamburguesas', label: 'Hamburguesas / Chorihamburguesas' },
  { id: 'pizza',        label: 'Pizza' },
  { id: 'cafe',         label: 'Café y Postres' },
]

export const categoryColors = {
  entradas:     'bg-amber-900/80 text-amber-300',
  choripanes:   'bg-orange-900/80 text-orange-300',
  bebidas:      'bg-blue-900/80 text-blue-300',
  cervezas:     'bg-yellow-900/80 text-yellow-300',
  hamburguesas: 'bg-red-900/80 text-red-300',
  pizza:        'bg-green-900/80 text-green-300',
  cafe:         'bg-amber-950/80 text-amber-200',
}

export const categoryLabels = {
  entradas:     'Entradas',
  choripanes:   'Choripanes',
  bebidas:      'Bebidas',
  cervezas:     'Cervezas y Coctelería',
  hamburguesas: 'Hamburguesas',
  pizza:        'Pizza',
  cafe:         'Café y Postres',
}

// ─── Menu Items ───────────────────────────────────────────────────────────────
export const menuItems = [
  // ENTRADAS
  {
    id: 1, category: 'entradas',
    name: 'Empanadas Argentinas',
    description: 'Orden de tres — Mendocina (chorizo argentino con queso) o elote con queso',
    price: 95, image: imgEmpanadas,
  },
  {
    id: 2, category: 'entradas',
    name: 'Chori Tabla',
    description: 'Selección de chorizos argentinos a la plancha para compartir en mesa',
    price: 178, image: imgChoriTabla,
  },
  {
    id: 3, category: 'entradas',
    name: 'Fries N Bacon',
    description: 'Papa a la francesa con rábano a la plancha y tocino crujiente',
    price: 79, image: imgFriesNBacon,
  },
  {
    id: 4, category: 'entradas',
    name: 'Papas Gajo',
    description: 'Papas en gajo al horno con especias de la casa',
    price: 79, image: imgPapasGajo,
  },
  {
    id: 5, category: 'entradas',
    name: 'Fries Cheese BBQ',
    description: 'Papas a la francesa con queso fundido y salsa BBQ',
    price: 79, image: imgFriesCheese,
  },
  {
    id: 6, category: 'entradas',
    name: 'Boneless',
    description: 'Orden de boneless de pollo dorado bañados en salsa a elegir',
    price: 158, image: imgBoneless,
  },
  {
    id: 7, category: 'entradas',
    name: 'Dedos de Queso',
    description: 'Dedos de queso empanizados, crujientes por fuera y fundentes por dentro',
    price: 95, image: imgDedosQueso,
  },
  {
    id: 8, category: 'entradas',
    name: 'Papas Bravas',
    description: 'Papas al horno con salsa brava picante de la casa',
    price: 95, image: imgPapasBravas,
  },
  {
    id: 9, category: 'entradas',
    name: 'Aros de Cebolla',
    description: 'Aros de cebolla empanizados y crujientes, servidos con aderezo',
    price: 79, image: imgArosCebolla,
  },
  {
    id: 10, category: 'entradas',
    name: 'Papas a la Francesa',
    description: 'Papas fritas clásicas al corte, perfectamente doradas',
    price: 68, image: imgChoripan,
  },

  // CHORIPANES
  {
    id: 11, category: 'choripanes',
    name: 'Tradicional',
    description: 'Chorizo argentino, rábano y cebolla en pan artesanal tostado a la plancha',
    price: 75, image: imgChoriTrad,
  },
  {
    id: 12, category: 'choripanes',
    name: 'Con Queso',
    description: 'Chorizo argentino, queso mozzarella y cebolla en pan artesanal',
    price: 95, image: imgChoriTrad,
  },
  {
    id: 13, category: 'choripanes',
    name: 'Veggie',
    description: 'Chorizo argentino, queso boursin y cebolla al modo artesanal',
    price: 95, image: imgChoriVeggie,
  },
  {
    id: 14, category: 'choripanes',
    name: 'Mexicano',
    description: 'Chorizo argentino, pico de gallo, guacamole, cebolla, frijol y totopos',
    price: 105, image: imgChoripan,
  },
  {
    id: 15, category: 'choripanes',
    name: 'Norteño',
    description: 'Chorizo argentino, queso gouda y tequilita de arrachera',
    price: 95, image: imgChoriTrad,
  },
  {
    id: 16, category: 'choripanes',
    name: 'Hawaiano',
    description: 'Chorizo argentino, jamón, piña, salsa BBQ y queso provolone',
    price: 95, image: imgChoripan2,
  },
  {
    id: 17, category: 'choripanes',
    name: 'Ranchero',
    description: 'Chorizo argentino, cebolla, aguacate, chile, rábano, frijoles y jalapeño',
    price: 105, image: imgChoripan3,
  },
  {
    id: 18, category: 'choripanes',
    name: 'BBQ',
    description: 'Chorizo argentino, piña, jamón, salsa BBQ y aguacate',
    price: 115, image: imgChoripan4,
  },
  {
    id: 19, category: 'choripanes',
    name: 'Pulled Pork',
    description: 'Chorizo argentino, pulled pork, aguacate y cebolla caramelizada',
    price: 115, image: imgChoripan5,
  },
  {
    id: 20, category: 'choripanes',
    name: 'Choripanela',
    description: 'Chorizo argentino, queso panela, cebolla y jalapeño',
    price: 95, image: imgChoriVeggie,
  },

  // BEBIDAS
  {
    id: 21, category: 'bebidas',
    name: 'Agua Natural',
    description: 'Agua purificada fría 600 ml',
    price: 30, image: imgAguaNatural,
  },
  {
    id: 22, category: 'bebidas',
    name: 'Agua Mineral',
    description: 'Agua mineral con gas 600 ml',
    price: 35, image: imgAguaMineral,
  },
  {
    id: 23, category: 'bebidas',
    name: 'Refresco',
    description: 'Coca-Cola, Sprite o Fanta 355 ml bien fría',
    price: 35, image: imgRefresco,
  },
  {
    id: 24, category: 'bebidas',
    name: 'Limonada',
    description: 'Limonada natural con hielo y menta fresca',
    price: 45, image: imgLimonada,
  },
  {
    id: 25, category: 'bebidas',
    name: 'Jugo de Naranja',
    description: 'Jugo de naranja natural exprimido al momento',
    price: 45, image: imgJugoNaranja,
  },
  {
    id: 26, category: 'bebidas',
    name: 'Agua de Jamaica',
    description: 'Agua fresca de flor de jamaica bien fría',
    price: 40, image: imgAguaJamaica,
  },

  // CERVEZAS Y COCTELERÍA
  {
    id: 27, category: 'cervezas',
    name: 'Cerveza Clara',
    description: 'Cerveza fría 355 ml a elegir de la carta',
    price: 55, image: imgCerveza,
  },
  {
    id: 28, category: 'cervezas',
    name: 'Cerveza Oscura',
    description: 'Cerveza obscura importada 355 ml bien fría',
    price: 60, image: imgCerveza,
  },
  {
    id: 29, category: 'cervezas',
    name: 'Fernet con Coca',
    description: 'Fernet Branca con Coca-Cola, el clásico argentino',
    price: 85, image: imgFernetCoca,
  },
  {
    id: 30, category: 'cervezas',
    name: 'Sangría',
    description: 'Vino tinto con frutas frescas y especias de la casa',
    price: 95, image: imgVinoTinto,
  },
  {
    id: 31, category: 'cervezas',
    name: 'Gin Tonic',
    description: 'Gin premium con agua tónica, limón y hierbas frescas',
    price: 90, image: imgGinTonic,
  },
  {
    id: 32, category: 'cervezas',
    name: 'Michelada',
    description: 'Cerveza artesanal con limón, sal, chamoy y especias',
    price: 75, image: imgMichelada,
  },

  // HAMBURGUESAS / CHORIHAMBURGUESAS
  {
    id: 33, category: 'hamburguesas',
    name: 'Sirloin',
    description: 'Carne de sirloin, queso cheddar, jamón y verdura fresca',
    price: 145, image: imgHambSirloin,
  },
  {
    id: 34, category: 'hamburguesas',
    name: 'Chicken',
    description: 'Carne de pollo en tempura, queso cheddar y verdura',
    price: 145, image: imgHamburguesa,
  },
  {
    id: 35, category: 'hamburguesas',
    name: 'Marinera',
    description: 'Carne de sirloin, camarones al modo boursin y verdura fresca',
    price: 195, image: imgChoriMarinero,
  },
  {
    id: 36, category: 'hamburguesas',
    name: 'Hawaiana',
    description: 'Carne de sirloin, piña, salsa BBQ, cheddar, jamón y verdura',
    price: 145, image: imgHamburguesa,
  },
  {
    id: 37, category: 'hamburguesas',
    name: 'Mexicana',
    description: 'Carne de sirloin, pico de gallo, mozzarella, cebolla, rábano y verdura',
    price: 145, image: imgHambMexicana,
  },
  {
    id: 38, category: 'hamburguesas',
    name: 'BBQ',
    description: 'Carne de sirloin, arrachera, piña, jamón, salsa BBQ y queso gouda',
    price: 195, image: imgHamburguesa,
  },
  {
    id: 39, category: 'hamburguesas',
    name: 'Italiana',
    description: 'Carne de sirloin, queso mozzarella y hierbas finas italianas',
    price: 145, image: imgHamburguesa,
  },
  {
    id: 40, category: 'hamburguesas',
    name: 'Pulled Pork',
    description: 'Carne de sirloin, queso mozzarella, pulled pork y verdura',
    price: 145, image: imgHamburguesa,
  },
  {
    id: 41, category: 'hamburguesas',
    name: 'Ranchera',
    description: 'Carne de sirloin, aguacate, jalapeño, queso y verdura',
    price: 145, image: imgHamburguesa,
  },
  {
    id: 42, category: 'hamburguesas',
    name: 'Norteña',
    description: 'Carne de sirloin, queso arrachera, mozzarella, picante y verdura',
    price: 145, image: imgHambSirloin,
  },
  {
    id: 43, category: 'hamburguesas',
    name: 'Champión',
    description: 'Carne de sirloin, queso mozzarella, champiñones y queso gouda',
    price: 145, image: imgHamburguesa,
  },
  {
    id: 44, category: 'hamburguesas',
    name: 'Cheese Burger',
    description: 'Carne de sirloin, doble queso derretido, arrachera y barbacoa',
    price: 145, image: imgHamburguesa,
  },
  {
    id: 45, category: 'hamburguesas',
    name: 'Krispy Chicken',
    description: 'Boneless bañado en BBQ, queso, aguacate, cebolla y verdura',
    price: 145, image: imgHamburguesa,
  },
  {
    id: 46, category: 'hamburguesas',
    name: 'Argentina',
    description: 'Carne de sirloin, chimichurri casero, cebolla y verdura',
    price: 145, image: imgHambMexicana,
  },
  {
    id: 47, category: 'hamburguesas',
    name: 'Maple y Bacon',
    description: 'Carne de sirloin, maple, bacon crujiente, queso cheddar y verdura',
    price: 145, image: imgHamburguesa,
  },
  {
    id: 48, category: 'hamburguesas',
    name: 'Jalapeño Spicy',
    description: 'Carne de sirloin, salsa jalapeño, aguacate y queso cheddar',
    price: 145, image: imgHambSirloin,
  },
  {
    id: 49, category: 'hamburguesas',
    name: 'Chorihamburguesa Tradicional',
    description: 'Chorizo argentino, queso cheddar, cebolla caramelizada y verdura',
    price: 145, image: imgChoriHamburguesa,
  },
  {
    id: 50, category: 'hamburguesas',
    name: 'Chorihamburguesa BBQ',
    description: 'Chorizo argentino, salsa BBQ, queso gouda, piña y jamón',
    price: 165, image: imgChoriHamburguesa,
  },

  // PIZZA
  {
    id: 51, category: 'pizza',
    name: 'Pepperoni',
    description: 'Salsa pommarola, mozzarella y pepperoni premium',
    price: 219, image: imgPizza,
  },
  {
    id: 52, category: 'pizza',
    name: 'Española',
    description: 'Salsa pommarola, mozzarella, jamón serrano, aceituna y ajo',
    price: 219, image: imgPizza,
  },
  {
    id: 53, category: 'pizza',
    name: 'Argentina',
    description: 'Salsa pommarola, mozzarella y chorizo argentino selecto',
    price: 219, image: imgPizza,
  },
  {
    id: 54, category: 'pizza',
    name: 'Champiñón',
    description: 'Salsa pommarola, mozzarella, champiñones frescos y bacon',
    price: 219, image: imgPizza,
  },
  {
    id: 55, category: 'pizza',
    name: 'Ranchera',
    description: 'Salsa pommarola, mozzarella, queso brie, jalapeño y pollo',
    price: 219, image: imgPizza,
  },
  {
    id: 56, category: 'pizza',
    name: 'Margarita',
    description: 'Salsa pommarola, mozzarella, tomate fresco y albahaca',
    price: 159, image: imgPizza,
  },
  {
    id: 57, category: 'pizza',
    name: 'Carnes Frías',
    description: 'Salsa pommarola, mozzarella, chorizo argentino y carnes seleccionadas',
    price: 219, image: imgPizza,
  },
  {
    id: 58, category: 'pizza',
    name: 'Chicken',
    description: 'Salsa pommarola, mozzarella, pollo ahumado y piña',
    price: 219, image: imgPizza,
  },
  {
    id: 59, category: 'pizza',
    name: 'Bacon Americano',
    description: 'Salsa pommarola, mozzarella, bacon crujiente y cebolla morada',
    price: 219, image: imgPizza,
  },
  {
    id: 60, category: 'pizza',
    name: 'Pastor',
    description: 'Salsa pommarola, mozzarella y carne al pastor al estilo tlaxcalteca',
    price: 219, image: imgPizza,
  },

  // CAFÉ Y POSTRES
  {
    id: 61, category: 'cafe',
    name: 'Americano',
    description: 'Café americano caliente o frío, preparado al momento',
    price: 49, image: imgCafePostre,
  },
  {
    id: 62, category: 'cafe',
    name: 'Cappuccino',
    description: 'Café espresso con leche vaporizada y espuma cremosa',
    price: 59, image: imgCafePostre,
  },
  {
    id: 63, category: 'cafe',
    name: 'Latte',
    description: 'Café latte con leche cremosa al estilo italiano',
    price: 59, image: imgCafePostre,
  },
  {
    id: 64, category: 'cafe',
    name: 'Chocotorta',
    description: 'Postre argentino de galletitas con crema de queso y chocolate',
    price: 98, image: imgChocotorta,
  },
  {
    id: 65, category: 'cafe',
    name: 'Cheesecake',
    description: 'Cheesecake estilo New York con coulis de frutos rojos',
    price: 78, image: imgCheesecake,
  },
  {
    id: 66, category: 'cafe',
    name: 'Limonada Pastel',
    description: 'Limonada rosa con frambuesa y hielo, perfecta para el calor',
    price: 68, image: imgLimonadaRosa,
  },
  {
    id: 67, category: 'cafe',
    name: 'Empanada de Dulce',
    description: 'Empanada rellena de dulce de leche argentino',
    price: 38, image: imgEmpanadas,
  },
]
