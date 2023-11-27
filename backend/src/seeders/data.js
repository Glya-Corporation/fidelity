const categories = [{ name: 'Platos de la Casa' }, { name: 'Arroces' }, { name: 'Broaster y Secos' }, { name: 'Ceviches' }, { name: 'Encebollados' }, { name: 'Mariscos' }, { name: 'Sopas' }, { name: 'Desayunos' }, { name: 'Cangrejadas' }];

const products = [
  {
    name: 'Plato de la Casa',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/plato-casa.jpg?raw=true',
    price: 21,
    description: 'Para dos o tres personas',
    categoryId: 1,
    container: 2
  },
  {
    name: 'Paella Mar y Tierra',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/Paella-Mar-y-Tierra.jpg?raw=true',
    price: 23,
    description: 'Plato para dos o más',
    categoryId: 1,
    container: 2
  },
  {
    name: 'Bandera Marinera',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/bandera-marinera.jpg?raw=true',
    price: 19,
    description: 'Plato para dos o más',
    categoryId: 1,
    container: 2
  },
  {
    name: 'Parrillada Mar y Tierra',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/Parrillada-Mar-y-Tierra.jpg?raw=true',
    price: 21,
    description: 'Plato para dos o más',
    categoryId: 1,
    container: 2
  },
  {
    name: 'Pollo, Carne, Chancho, Chorizo',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/Pollo-Carne-Chancho-Chorizo.jpg?raw=true',
    price: 11,
    description: 'Plato para dos o más',
    categoryId: 1,
    container: 2
  },
  {
    name: 'Chuleta a la Plancha',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/Chuleta-Plancha.jpg?raw=true',
    price: 4.75,
    description: 'Plato Completo',
    categoryId: 1,
    container: 2
  },
  {
    name: 'Carne a la Plancha',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/Carne-Plancha.jpg?raw=true',
    price: 4.75,
    description: 'Plato Completo',
    categoryId: 1,
    container: 2
  },
  {
    name: 'Carne Asada de Chancho',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/Carne-Asada-Chancho.jpg?raw=true',
    price: 4.75,
    description: 'Plato Completo',
    categoryId: 1,
    container: 2
  },
  {
    name: 'Carne Asada',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/Carne-Asada.jpg?raw=true',
    price: 4.75,
    description: 'Plato Completo',
    categoryId: 1,
    container: 2
  },
  {
    name: 'Pollo a la Plancha',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/pollo-plancha.jpg?raw=true',
    price: 4.75,
    description: 'Plato Completo',
    categoryId: 1,
    container: 2
  },
  {
    name: 'Churrasco',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/churrasco.jpg?raw=true',
    price: 6.5,
    description: 'Plato Completo',
    categoryId: 1,
    container: 2
  },
  {
    name: 'Lomo Salteado',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/lomo-salteado.jpg?raw=true',
    price: 5.5,
    description: 'Plato Completo',
    categoryId: 1,
    container: 2
  },
  {
    name: 'Carne Apanada',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/Carne-Apanada.jpg?raw=true',
    price: 6,
    description: 'Plato Completo',
    categoryId: 1,
    container: 2
  },
  {
    name: 'Bistec de Carne',
    price: 5.5,
    description: 'Plato Completo',
    categoryId: 1,
    container: 2
  },
  {
    name: 'Carne con Champiñones',
    price: 6.5,
    description: 'Plato Completo',
    categoryId: 1,
    container: 2
  },
  {
    name: 'Pollo con Champiñones',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/Pollo-Champi%C3%B1ones.jpg?raw=true',
    price: 6.5,
    description: 'Plato Completo',
    categoryId: 1,
    container: 2
  },
  {
    name: 'Arroz con Camarón',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/arroz-camaron.jpg?raw=true',
    price: 8.5,
    description: 'Plato Completo',
    categoryId: 2,
    container: 2
  },
  {
    name: 'Arroz con Concha',
    price: 7.5,
    description: 'Plato Completo',
    categoryId: 2,
    container: 2
  },
  {
    name: 'Arroz Mixto',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/Arroz-Mixto.jpg?raw=true',
    price: 9,
    description: 'Camarón y Concha',
    categoryId: 2,
    container: 2
  },
  {
    name: 'Arroz con Pulpo',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/Arroz-Pulpo.jpg?raw=true',
    price: 7.5,
    description: 'Plato Completo',
    categoryId: 2,
    container: 2
  },
  {
    name: 'Arroz Marinero',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/arroz-marinero.jpg?raw=true',
    price: 12,
    description: 'Plato Completo',
    categoryId: 2,
    container: 2
  },
  {
    name: 'Arroz Mixto Especial',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/Arroz-Mixto-Especial.jpg?raw=true',
    price: 11,
    description: 'Plato Completo',
    categoryId: 2,
    container: 2
  },
  {
    name: 'Arroz Marinero con Langostinos',
    price: 19,
    description: 'Plato Completo',
    categoryId: 2,
    container: 2
  },
  {
    name: 'Arroz con Calamar',
    price: 7.5,
    description: 'Plato Completo',
    categoryId: 2,
    container: 2
  },
  {
    name: 'Chaulafan',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/chaulafan.jpg?raw=true',
    price: 9,
    description: 'Plato Completo',
    categoryId: 2,
    container: 2
  },
  {
    name: 'Arroz con Pollo',
    price: 7,
    description: 'Plato Completo',
    categoryId: 2,
    container: 2
  },
  {
    name: 'Pollo Broaster',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/broaster.jpg?raw=true',
    price: 3.5,
    description: 'Plato Completo',
    categoryId: 3,
    container: 1
  },
  {
    name: 'Seco de Pollo',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/Seco-Pollo.jpg?raw=true',
    price: 3.5,
    description: 'Plato Completo',
    categoryId: 3,
    container: 1
  },
  {
    name: 'Seco de Carne',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/Seco-Carne.jpg?raw=true',
    price: 3.5,
    description: 'Plato Completo',
    categoryId: 3,
    container: 1
  },
  {
    name: 'Guata',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/Guata.jpg?raw=true',
    price: 3.5,
    description: 'Plato Completo',
    categoryId: 3,
    container: 1
  },
  {
    name: 'Mixto Pollo y Carne',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/Mixto-Pollo-Carne.jpg?raw=true',
    price: 4.75,
    description: 'Plato Completo',
    categoryId: 3,
    container: 2
  },
  {
    name: 'Mixto Pollo y Guata',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/Mixto-Pollo-Guata.jpg?raw=true',
    price: 4.75,
    description: 'Plato Completo',
    categoryId: 3,
    container: 2
  },
  {
    name: 'Mixto Carne y Guata',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/Mixto-Carne-Guata.jpg?raw=true',
    price: 4.75,
    description: 'Bandera Doble',
    categoryId: 3,
    container: 1
  },
  {
    name: 'Pollo, Carne y Guata',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/Pollo-Carne-Guata.jpg?raw=true',
    price: 6.25,
    description: 'Bandera Criolla',
    categoryId: 3,
    container: 2
  },
  {
    name: 'Broaster + Guata',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/Broaster-Guata.jpg?raw=true',
    price: 4.75,
    description: 'Plato Completo',
    categoryId: 3,
    container: 2
  },
  {
    name: 'Broaster + Carne',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/Broaster-Carne.jpg?raw=true',
    price: 4.75,
    description: 'Plato Completo',
    categoryId: 3,
    container: 2
  },
  {
    name: 'Ceviche de Camarón',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/cev-camaron.jpg?raw=true',
    price: 7,
    description: 'Incluye Cangíl y Tostado',
    categoryId: 4,
    container: 1
  },
  {
    name: 'Ceviche de Concha',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/cev-concha.jpg?raw=true',
    price: 7,
    description: 'Incluye Cangíl y Tostado',
    categoryId: 4,
    container: 1
  },
  {
    name: 'Ceviche Marinero',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/cev-marinero.jpg?raw=true',
    price: 9,
    description: 'Incluye Cangíl y Tostado',
    categoryId: 4,
    container: 1
  },
  {
    name: 'Ceviche Mixto',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/cev-mixto.jpg?raw=true',
    price: 8,
    description: 'Camarón, Concha y Calamar',
    categoryId: 4,
    container: 1
  },
  {
    name: 'Ceviche de Corvina',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/cev-corvina.jpg?raw=true',
    price: 6,
    description: 'Incluye Cangíl y Tostado',
    categoryId: 4,
    container: 1
  },
  {
    name: 'Ceviche Peruano',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/cev-peruano.jpg?raw=true',
    price: 9,
    description: 'Incluye Cangíl y Tostado',
    categoryId: 4,
    container: 1
  },
  {
    name: 'Ceviche de Pulpo',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/cev-pulpo.jpg?raw=true',
    price: 6,
    description: 'Incluye Cangíl y Tostado',
    categoryId: 4,
    container: 1
  },
  {
    name: 'Bandera Típica #1',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/Tipica-1.jpg?raw=true',
    price: 7.5,
    description: 'Guata + Encebollado + Cev. Camarón',
    categoryId: 4,
    container: 2
  },
  {
    name: 'Bandera Típica #2',
    price: 11.5,
    description: 'Guata + Encebollado + Cev. Camarón + Cev. Concha',
    categoryId: 4,
    container: 2
  },
  {
    name: 'Mar y Tierra con Encebollado',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/Mar-Tierra-Encebollado.jpg?raw=true',
    price: 5.5,
    description: 'Seco de Carne + Encebollado',
    categoryId: 4,
    container: 2
  },
  {
    name: 'Mar y Tierra con Ceviche',
    price: 6.5,
    description: 'Seco de Carne + Ceviche',
    categoryId: 4,
    container: 2
  },
  {
    name: 'Encebollado',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/encebollado.jpg?raw=true',
    price: 2.5,
    description: 'Incluye Cangil y Tostado',
    categoryId: 5,
    container: 1
  },
  {
    name: 'Encebollado con Camarón',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/encebollado-camaron.jpg?raw=true',
    price: 5.5,
    description: 'Incluye Cangil y Tostado',
    categoryId: 5,
    container: 1
  },
  {
    name: 'Encebollado con Concha',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/encebollado-concha.jpg?raw=true',
    price: 5.5,
    description: 'Incluye Cangil y Tostado',
    categoryId: 5,
    container: 1
  },
  {
    name: 'Encebollado Triple',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/encebollado-triple.jpg?raw=true',
    price: 7,
    description: 'Incluye Cangil y Tostado',
    categoryId: 5,
    container: 1
  },
  {
    name: 'Encebollado Marinero',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/encebollado-especial.jpg?raw=true',
    price: 9,
    description: 'Incluye Cangil y Tostado',
    categoryId: 5,
    container: 1
  },
  {
    name: 'Majarisco',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/majarisco.jpg?raw=true',
    price: 10.5,
    description: 'Plato Completo',
    categoryId: 6,
    container: 2
  },
  {
    name: 'Ensalada de Pollo',
    price: 5,
    description: 'Limón o Mayonesa',
    categoryId: 6,
    container: 1
  },
  {
    name: 'Ensalada de Camarón',
    price: 6.5,
    description: 'Limón y Mayonesa',
    categoryId: 6,
    container: 1
  },
  {
    name: 'Maríscos al Ajillo',
    price: 10.5,
    description: 'Plato Completo',
    categoryId: 6,
    container: 2
  },
  {
    name: 'Encocado de Maríscos',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/Encocado-Mariscos.jpg?raw=true',
    price: 10.5,
    description: 'Plato Completo',
    categoryId: 6,
    container: 2
  },
  {
    name: 'Sudado de Maríscos',
    price: 10.5,
    description: 'Plato Completo',
    categoryId: 6,
    container: 2
  },
  {
    name: 'Chicharrón de Maríscos',
    price: 10,
    description: 'Plato Completo',
    categoryId: 6,
    container: 2
  },
  {
    name: 'Chicharrón de Corvina',
    price: 6,
    description: 'Plato Completo',
    categoryId: 6,
    container: 2
  },
  {
    name: 'Libra de Camarones',
    price: 15.5,
    description: 'Arroz, Patacones y Ensalada',
    categoryId: 6,
    container: 2
  },
  {
    name: 'Camarones Apanados',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/Camaron-Apanado.jpg?raw=true',
    price: 8,
    description: 'Plato Completo',
    categoryId: 6,
    container: 2
  },
  {
    name: 'Camarones Reventados',
    price: 8,
    description: 'Plato Completo',
    categoryId: 6,
    container: 2
  },
  {
    name: 'Encocado de Camarón',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/Encocado-Camaron.jpg?raw=true',
    price: 8,
    description: 'Plato Completo',
    categoryId: 6,
    container: 2
  },
  {
    name: 'Sango de Camarón',
    price: 8,
    description: 'Plato Completo',
    categoryId: 6,
    container: 2
  },
  {
    name: 'Camarones al Ajillo',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/Camarones-Ajillo.jpg?raw=true',
    price: 8,
    description: 'Plato Completo',
    categoryId: 6,
    container: 2
  },
  {
    name: 'Tortilla de Camarón',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/Tortilla-Camaron.jpg?raw=true',
    price: 8.5,
    description: 'Plato Completo',
    categoryId: 6,
    container: 1
  },
  {
    name: 'Corvina Apanada',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/Corvina-Apanada.jpg?raw=true',
    price: 7.5,
    description: 'Plato Completo',
    categoryId: 6,
    container: 2
  },
  {
    name: 'Corvina Frita',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/Corvina-Frita.jpg?raw=true',
    price: 7.5,
    description: 'Plato Completo',
    categoryId: 6,
    container: 2
  },
  {
    name: 'Corvina al Vapor',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/Corvina-Vapor.jpg?raw=true',
    price: 7.5,
    description: 'Arroz, Verduras y Patacones',
    categoryId: 6,
    container: 2
  },
  {
    name: 'Corvina en Salsa',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/Corvina-Salsa-Mariscos.jpg?raw=true',
    price: 12.5,
    description: 'Salsa de Maríscos',
    categoryId: 6,
    container: 3
  },
  {
    name: 'Enrollado de Corvina',
    price: 10.5,
    description: 'Con Camarón',
    categoryId: 6,
    container: 2
  },
  {
    name: 'Langostinos al Ajillo',
    price: 12.5,
    description: 'Plato Completo',
    categoryId: 6,
    container: 2
  },
  {
    name: 'Langostinos Apanados',
    price: 12.5,
    description: 'Plato Completo',
    categoryId: 6,
    container: 2
  },
  {
    name: 'Langostinos a la Plancha',
    price: 12.5,
    description: 'Plato Completo',
    categoryId: 6,
    container: 2
  },
  {
    name: 'Conchas Asadas',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/Conchas-Asadas.jpg?raw=true',
    price: 10,
    description: 'Plato Completo',
    categoryId: 6,
    container: 2
  },
  {
    name: 'Pescado Frito',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/Pescado-Frito.jpg?raw=true',
    price: 9,
    description: 'Plato Completo',
    categoryId: 6,
    container: 2
  },
  {
    name: 'Encocado de Pescado',
    price: 9,
    description: 'Plato Completo',
    categoryId: 6,
    container: 2
  },
  {
    name: 'Tapado de Pescado',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/Tapado-Pescado.jpg?raw=true',
    price: 9,
    description: 'Plato Completo',
    categoryId: 6,
    container: 2
  },
  {
    name: 'Sudado de Pescado',
    price: 9,
    description: 'Plato Completo',
    categoryId: 6,
    container: 2
  },
  {
    name: 'Sudado de Pescado',
    price: 14,
    description: 'Con Camarón',
    categoryId: 6,
    container: 2
  },
  {
    name: 'Pescado Frito en Salsa',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/Pescado-Frito-Salsa-Mariscos.jpg?raw=true',
    price: 16,
    description: 'Salsa de Maríscos',
    categoryId: 6,
    container: 3
  },
  {
    name: 'Sudado de Pescado',
    price: 16,
    description: 'Con Maíscos',
    categoryId: 6,
    container: 2
  },
  {
    name: 'Pulpo a la Parrilla',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/Pulpo-Parrilla.jpg?raw=true',
    price: 9,
    description: 'Plato Completo',
    categoryId: 6,
    container: 2
  },
  {
    name: 'Pulpo a la Parrilla',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/Pulpo-Parrilla-Salsa-Mariscos.jpg?raw=true',
    price: 16,
    description: 'Salsa de Maríscos',
    categoryId: 6,
    container: 3
  },
  {
    name: 'Pulpo en Salsa de  Maríscos',
    price: 16,
    description: 'Plato Completo',
    categoryId: 6,
    container: 3
  },
  {
    name: 'Pulpo al Ajillo',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/Pulpo-Ajillo.jpg?raw=true',
    price: 9,
    description: 'Plato Completo',
    categoryId: 6,
    container: 2
  },
  {
    name: 'Sopa Marinera',
    price: 11,
    description: 'Plato Completo',
    categoryId: 7,
    container: 2
  },
  {
    name: 'Sopa de Camarón',
    price: 7,
    description: 'Plato Completo',
    categoryId: 7,
    container: 2
  },
  {
    name: 'Sopa de Cangrejo',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/sopa-cangrejo.jpg?raw=true',
    price: 6.5,
    description: 'Plato Completo',
    categoryId: 7,
    container: 1
  },
  {
    name: 'Chupé de Pescado',
    price: 7,
    description: 'Plato Completo',
    categoryId: 7,
    container: 2
  },
  {
    name: 'Chupé de Camarón',
    price: 7,
    description: 'Café o Leche',
    categoryId: 7,
    container: 2
  },
  {
    name: 'Parihuela',
    price: 11,
    description: 'Plato Completo',
    categoryId: 7,
    container: 2
  },
  {
    name: 'Cazuela de Maríscos',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/cazuela.jpg?raw=true',
    price: 8,
    description: 'Plato Completo',
    categoryId: 7,
    container: 2
  },
  {
    name: 'Cazuela de Camarón',
    price: 7,
    description: 'Plato Completo',
    categoryId: 7,
    container: 2
  },
  {
    name: 'Cazuela de Pescado',
    price: 7,
    description: 'Plato Completo',
    categoryId: 7,
    container: 2
  },
  {
    name: 'Cazuela Mixta',
    price: 8,
    description: 'Camarón y Concha',
    categoryId: 7,
    container: 2
  },
  {
    name: 'Tallarín Marinero',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/Tallarin-Marinero.jpg?raw=true',
    price: 8.5,
    description: 'Plato Completo',
    categoryId: 7,
    container: 2
  },
  {
    name: 'Tallarín con Camarón',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/Tallarin-Camaron.jpg?raw=true',
    price: 7.5,
    description: 'Plato Completo',
    categoryId: 7,
    container: 2
  },
  {
    name: 'Tallarín Especial',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/Tallarin-Especial.jpg?raw=true',
    price: 8.5,
    description: 'Plato Completo',
    categoryId: 7,
    container: 2
  },
  {
    name: 'Tallarín con Pollo',
    price: 6,
    description: 'Plato Completo',
    categoryId: 7,
    container: 2
  },
  {
    name: 'Tallarín con Carne',
    price: 6,
    description: 'Plato Completo',
    categoryId: 7,
    container: 2
  },
  {
    name: 'Chop Suey',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/Chop-Suey.jpg?raw=true',
    price: 9.5,
    description: 'Incluye Porción de Arroz',
    categoryId: 7,
    container: 2
  },
  {
    name: 'Tigrillo',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/Tigrillo.jpg?raw=true',
    price: 3.75,
    description: 'Café y Jugo del Seco de Carne',
    categoryId: 8,
    container: 1
  },
  {
    name: 'Tigrillo con Seco de Carne',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/Tigrillo-Seco-Carne.jpg?raw=true',
    price: 5.25,
    description: 'Incluye Café',
    categoryId: 8,
    container: 2
  },
  {
    name: 'Tigrillo con Seco de Pollo',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/Tigrillo-Seco-Pollo.jpg?raw=true',
    price: 5.5,
    description: 'Incluye Café',
    categoryId: 8,
    container: 2
  },
  {
    name: 'Tigrillo con Guata',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/Tigrillo-Guata.jpg?raw=true',
    price: 5.25,
    description: 'Incluye Café',
    categoryId: 8,
    container: 2
  },
  {
    name: 'Bolón de queso',
    price: 5.5,
    description: 'Bolón + Bistec + Huevo + café',
    categoryId: 8,
    container: 2
  },
  {
    name: 'Dos Huevo + Pan con Queso',
    price: 3.5,
    description: 'Café o Leche',
    categoryId: 8,
    container: 2
  },
  {
    name: 'Combo de Cangrejo',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/Combo-Cangrejo.jpg?raw=true',
    price: 20,
    description: '4 Cangrejos',
    categoryId: 9,
    container: 2
  },
  {
    name: 'Encocado de Cangrejo',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/Encocado-Cangrejo.jpg?raw=true',
    price: 7.5,
    description: '1 Cangrejo',
    categoryId: 9,
    container: 2
  },
  {
    name: 'Sudado de Cangrejo',
    price: 7.5,
    description: '1 Cangrejo',
    categoryId: 9,
    container: 2
  },
  {
    name: 'Cangrejo Solo',
    price: 5,
    description: 'Con Ensalada y Patacones',
    categoryId: 9,
    container: 1
  }
];

const pulpoCoin = products.map(element => ({ ...element, coinValue: Math.ceil(element.price * (element.price >= 19 ? 15 : 10)) }));

module.exports = { categories, pulpoCoin };
