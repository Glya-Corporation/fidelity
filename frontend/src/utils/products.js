const products = [
  {
    id: 1,
    name: 'Plato de la Casa',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/plato-casa.jpg?raw=true',
    price: 21,
    description: 'Para dos o tres personas',
    category: 1,
    container: 2
  },
  {
    id: 2,
    name: 'Paella Mar y Tierra',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/Paella-Mar-y-Tierra.jpg?raw=true',
    price: 23,
    description: 'Plato para dos o más',
    category: 1,
    container: 2
  },
  {
    id: 3,
    name: 'Bandera Marinera',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/bandera-marinera.jpg?raw=true',
    price: 19,
    description: 'Plato para dos o más',
    category: 1,
    container: 2
  },
  {
    id: 4,
    name: 'Parrillada Mar y Tierra',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/Parrillada-Mar-y-Tierra.jpg?raw=true',
    price: 21,
    description: 'Plato para dos o más',
    category: 1,
    container: 2
  },
  {
    id: 5,
    name: 'Pollo, Carne, Chancho, Chorizo',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/Pollo-Carne-Chancho-Chorizo.jpg?raw=true',
    price: 11,
    description: 'Plato para dos o más',
    category: 1,
    container: 2
  },
  {
    id: 6,
    name: 'Chuleta a la Plancha',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/Chuleta-Plancha.jpg?raw=true',
    price: 4.75,
    description: 'Plato Completo',
    category: 1,
    container: 2
  },
  {
    id: 7,
    name: 'Carne a la Plancha',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/Carne-Plancha.jpg?raw=true',
    price: 4.75,
    description: 'Plato Completo',
    category: 1,
    container: 2
  },
  {
    id: 8,
    name: 'Carne Asada de Chancho',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/Carne-Asada-Chancho.jpg?raw=true',
    price: 4.75,
    description: 'Plato Completo',
    category: 1,
    container: 2
  },
  {
    id: 9,
    name: 'Carne Asada',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/Carne-Asada.jpg?raw=true',
    price: 4.75,
    description: 'Plato Completo',
    category: 1,
    container: 2
  },
  {
    id: 10,
    name: 'Pollo a la Plancha',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/pollo-plancha.jpg?raw=true',
    price: 4.75,
    description: 'Plato Completo',
    category: 1,
    container: 2
  },
  {
    id: 11,
    name: 'Churrasco',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/churrasco.jpg?raw=true',
    price: 6.5,
    description: 'Plato Completo',
    category: 1,
    container: 2
  },
  {
    id: 12,
    name: 'Lomo Salteado',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/lomo-salteado.jpg?raw=true',
    price: 5.5,
    description: 'Plato Completo',
    category: 1,
    container: 2
  },
  {
    id: 13,
    name: 'Carne Apanada',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/Carne-Apanada.jpg?raw=true',
    price: 6,
    description: 'Plato Completo',
    category: 1,
    container: 2
  },
  {
    id: 14,
    name: 'Bistec de Carne',
    img: null,
    price: 5.5,
    description: 'Plato Completo',
    category: 1,
    container: 2
  },
  {
    id: 15,
    name: 'Carne con Champiñones',
    img: null,
    price: 6.5,
    description: 'Plato Completo',
    category: 1,
    container: 2
  },
  {
    id: 16,
    name: 'Pollo con Champiñones',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/Pollo-Champi%C3%B1ones.jpg?raw=true',
    price: 6.5,
    description: 'Plato Completo',
    category: 1,
    container: 2
  },
  {
    id: 17,
    name: 'Arroz con Camarón',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/arroz-camaron.jpg?raw=true',
    price: 8.5,
    description: 'Plato Completo',
    category: 2,
    container: 2
  },
  {
    id: 18,
    name: 'Arroz con Concha',
    img: null,
    price: 7.5,
    description: 'Plato Completo',
    category: 2,
    container: 2
  },
  {
    id: 19,
    name: 'Arroz Mixto',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/Arroz-Mixto.jpg?raw=true',
    price: 9,
    description: 'Camarón y Concha',
    category: 2,
    container: 2
  },
  {
    id: 20,
    name: 'Arroz con Pulpo',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/Arroz-Pulpo.jpg?raw=true',
    price: 7.5,
    description: 'Plato Completo',
    category: 2,
    container: 2
  },
  {
    id: 21,
    name: 'Arroz Marinero',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/arroz-marinero.jpg?raw=true',
    price: 12,
    description: 'Plato Completo',
    category: 2,
    container: 2
  },
  {
    id: 22,
    name: 'Arroz Mixto Especial',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/Arroz-Mixto-Especial.jpg?raw=true',
    price: 11,
    description: 'Plato Completo',
    category: 2,
    container: 2
  },
  {
    id: 23,
    name: 'Arroz Marinero con Langostinos',
    img: null,
    price: 19,
    description: 'Plato Completo',
    category: 2,
    container: 2
  },
  {
    id: 24,
    name: 'Arroz con Calamar',
    img: null,
    price: 7.5,
    description: 'Plato Completo',
    category: 2,
    container: 2
  },
  {
    id: 25,
    name: 'Chaulafan',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/chaulafan.jpg?raw=true',
    price: 9,
    description: 'Plato Completo',
    category: 2,
    container: 2
  },
  {
    id: 26,
    name: 'Arroz con Pollo',
    img: null,
    price: 7,
    description: 'Plato Completo',
    category: 2,
    container: 2
  },
  {
    id: 27,
    name: 'Pollo Broaster',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/broaster.jpg?raw=true',
    price: 3.5,
    description: 'Plato Completo',
    category: 3,
    container: 1
  },
  {
    id: 28,
    name: 'Seco de Pollo',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/Seco-Pollo.jpg?raw=true',
    price: 3.5,
    description: 'Plato Completo',
    category: 3,
    container: 1
  },
  {
    id: 29,
    name: 'Seco de Carne',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/Seco-Carne.jpg?raw=true',
    price: 3.5,
    description: 'Plato Completo',
    category: 3,
    container: 1
  },
  {
    id: 30,
    name: 'Guata',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/Guata.jpg?raw=true',
    price: 3.5,
    description: 'Plato Completo',
    category: 3,
    container: 1
  },
  {
    id: 31,
    name: 'Mixto Pollo y Carne',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/Mixto-Pollo-Carne.jpg?raw=true',
    price: 4.75,
    description: 'Plato Completo',
    category: 3,
    container: 2
  },
  {
    id: 32,
    name: 'Mixto Pollo y Guata',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/Mixto-Pollo-Guata.jpg?raw=true',
    price: 4.75,
    description: 'Plato Completo',
    category: 3,
    container: 2
  },
  {
    id: 33,
    name: 'Mixto Carne y Guata',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/Mixto-Carne-Guata.jpg?raw=true',
    price: 4.75,
    description: 'Bandera Doble',
    category: 3,
    container: 1
  },
  {
    id: 34,
    name: 'Pollo, Carne y Guata',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/Pollo-Carne-Guata.jpg?raw=true',
    price: 6.25,
    description: 'Bandera Criolla',
    category: 3,
    container: 2
  },
  {
    id: 35,
    name: 'Broaster + Guata',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/Broaster-Guata.jpg?raw=true',
    price: 4.75,
    description: 'Plato Completo',
    category: 3,
    container: 2
  },
  {
    id: 36,
    name: 'Broaster + Carne',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/Broaster-Carne.jpg?raw=true',
    price: 4.75,
    description: 'Plato Completo',
    category: 3,
    container: 2
  },
  {
    id: 37,
    name: 'Ceviche de Camarón',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/cev-camaron.jpg?raw=true',
    price: 7,
    description: 'Incluye Cangíl y Tostado',
    category: 4,
    container: 1
  },
  {
    id: 38,
    name: 'Ceviche de Concha',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/cev-concha.jpg?raw=true',
    price: 7,
    description: 'Incluye Cangíl y Tostado',
    category: 4,
    container: 1
  },
  {
    id: 39,
    name: 'Ceviche Marinero',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/cev-marinero.jpg?raw=true',
    price: 9,
    description: 'Incluye Cangíl y Tostado',
    category: 4,
    container: 1
  },
  {
    id: 40,
    name: 'Ceviche Mixto',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/cev-mixto.jpg?raw=true',
    price: 8,
    description: 'Camarón, Concha y Calamar',
    category: 4,
    container: 1
  },
  {
    id: 41,
    name: 'Ceviche de Corvina',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/cev-corvina.jpg?raw=true',
    price: 6,
    description: 'Incluye Cangíl y Tostado',
    category: 4,
    container: 1
  },
  {
    id: 42,
    name: 'Ceviche Peruano',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/cev-peruano.jpg?raw=true',
    price: 9,
    description: 'Incluye Cangíl y Tostado',
    category: 4,
    container: 1
  },
  {
    id: 43,
    name: 'Ceviche de Pulpo',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/cev-pulpo.jpg?raw=true',
    price: 6,
    description: 'Incluye Cangíl y Tostado',
    category: 4,
    container: 1
  },
  {
    id: 44,
    name: 'Bandera Típica #1',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/Tipica-1.jpg?raw=true',
    price: 7.5,
    description: 'Guata + Encebollado + Cev. Camarón',
    category: 4,
    container: 2
  },
  {
    id: 45,
    name: 'Bandera Típica #2',
    img: null,
    price: 11.5,
    description: 'Guata + Encebollado + Cev. Camarón + Cev. Concha',
    category: 4,
    container: 2
  },
  {
    id: 46,
    name: 'Mar y Tierra con Encebollado',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/Mar-Tierra-Encebollado.jpg?raw=true',
    price: 5.5,
    description: 'Seco de Carne + Encebollado',
    category: 4,
    container: 2
  },
  {
    id: 47,
    name: 'Mar y Tierra con Ceviche',
    img: null,
    price: 6.5,
    description: 'Seco de Carne + Ceviche',
    category: 4,
    container: 2
  },
  {
    id: 48,
    name: 'Encebollado',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/encebollado.jpg?raw=true',
    price: 2.5,
    description: 'Incluye Cangil y Tostado',
    category: 5,
    container: 1
  },
  {
    id: 49,
    name: 'Encebollado con Camarón',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/encebollado-camaron.jpg?raw=true',
    price: 5.5,
    description: 'Incluye Cangil y Tostado',
    category: 5,
    container: 1
  },
  {
    id: 50,
    name: 'Encebollado con Concha',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/encebollado-concha.jpg?raw=true',
    price: 5.5,
    description: 'Incluye Cangil y Tostado',
    category: 5,
    container: 1
  },
  {
    id: 51,
    name: 'Encebollado Triple',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/encebollado-triple.jpg?raw=true',
    price: 7,
    description: 'Incluye Cangil y Tostado',
    category: 5,
    container: 1
  },
  {
    id: 52,
    name: 'Encebollado Marinero',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/encebollado-especial.jpg?raw=true',
    price: 9,
    description: 'Incluye Cangil y Tostado',
    category: 5,
    container: 1
  },
  {
    id: 53,
    name: 'Majarisco',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/majarisco.jpg?raw=true',
    price: 10.5,
    description: 'Plato Completo',
    category: 6,
    container: 2
  },
  {
    id: 54,
    name: 'Ensalada de Pollo',
    img: null,
    price: 5,
    description: 'Limón o Mayonesa',
    category: 6,
    container: 1
  },
  {
    id: 55,
    name: 'Ensalada de Camarón',
    img: null,
    price: 6.5,
    description: 'Limón y Mayonesa',
    category: 6,
    container: 1
  },
  {
    id: 56,
    name: 'Maríscos al Ajillo',
    img: null,
    price: 10.5,
    description: 'Plato Completo',
    category: 6,
    container: 2
  },
  {
    id: 57,
    name: 'Encocado de Maríscos',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/Encocado-Mariscos.jpg?raw=true',
    price: 10.5,
    description: 'Plato Completo',
    category: 6,
    container: 2
  },
  {
    id: 58,
    name: 'Sudado de Maríscos',
    img: null,
    price: 10.5,
    description: 'Plato Completo',
    category: 6,
    container: 2
  },
  {
    id: 59,
    name: 'Chicharrón de Maríscos',
    img: null,
    price: 10,
    description: 'Plato Completo',
    category: 6,
    container: 2
  },
  {
    id: 60,
    name: 'Chicharrón de Corvina',
    img: null,
    price: 6,
    description: 'Plato Completo',
    category: 6,
    container: 2
  },
  {
    id: 61,
    name: 'Libra de Camarones',
    img: null,
    price: 15.5,
    description: 'Arroz, Patacones y Ensalada',
    category: 6,
    container: 2
  },
  {
    id: 62,
    name: 'Camarones Apanados',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/Camaron-Apanado.jpg?raw=true',
    price: 8,
    description: 'Plato Completo',
    category: 6,
    container: 2
  },
  {
    id: 63,
    name: 'Camarones Reventados',
    img: null,
    price: 8,
    description: 'Plato Completo',
    category: 6,
    container: 2
  },
  {
    id: 64,
    name: 'Encocado de Camarón',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/Encocado-Camaron.jpg?raw=true',
    price: 8,
    description: 'Plato Completo',
    category: 6,
    container: 2
  },
  {
    id: 65,
    name: 'Sango de Camarón',
    img: null,
    price: 8,
    description: 'Plato Completo',
    category: 6,
    container: 2
  },
  {
    id: 66,
    name: 'Camarones al Ajillo',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/Camarones-Ajillo.jpg?raw=true',
    price: 8,
    description: 'Plato Completo',
    category: 6,
    container: 2
  },
  {
    id: 67,
    name: 'Tortilla de Camarón',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/Tortilla-Camaron.jpg?raw=true',
    price: 8.5,
    description: 'Plato Completo',
    category: 6,
    container: 1
  },
  {
    id: 68,
    name: 'Corvina Apanada',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/Corvina-Apanada.jpg?raw=true',
    price: 7.5,
    description: 'Plato Completo',
    category: 6,
    container: 2
  },
  {
    id: 69,
    name: 'Corvina Frita',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/Corvina-Frita.jpg?raw=true',
    price: 7.5,
    description: 'Plato Completo',
    category: 6,
    container: 2
  },
  {
    id: 70,
    name: 'Corvina al Vapor',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/Corvina-Vapor.jpg?raw=true',
    price: 7.5,
    description: 'Arroz, Verduras y Patacones',
    category: 6,
    container: 2
  },
  {
    id: 71,
    name: 'Corvina en Salsa',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/Corvina-Salsa-Mariscos.jpg?raw=true',
    price: 12.5,
    description: 'Salsa de Maríscos',
    category: 6,
    container: 3
  },
  {
    id: 72,
    name: 'Enrollado de Corvina',
    img: null,
    price: 10.5,
    description: 'Con Camarón',
    category: 6,
    container: 2
  },
  {
    id: 73,
    name: 'Langostinos al Ajillo',
    img: null,
    price: 12.5,
    description: 'Plato Completo',
    category: 6,
    container: 2
  },
  {
    id: 74,
    name: 'Langostinos Apanados',
    img: null,
    price: 12.5,
    description: 'Plato Completo',
    category: 6,
    container: 2
  },
  {
    id: 75,
    name: 'Langostinos a la Plancha',
    img: null,
    price: 12.5,
    description: 'Plato Completo',
    category: 6,
    container: 2
  },
  {
    id: 76,
    name: 'Conchas Asadas',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/Conchas-Asadas.jpg?raw=true',
    price: 10,
    description: 'Plato Completo',
    category: 6,
    container: 2
  },
  {
    id: 77,
    name: 'Pescado Frito',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/Pescado-Frito.jpg?raw=true',
    price: 9,
    description: 'Plato Completo',
    category: 6,
    container: 2
  },
  {
    id: 78,
    name: 'Encocado de Pescado',
    img: null,
    price: 9,
    description: 'Plato Completo',
    category: 6,
    container: 2
  },
  {
    id: 79,
    name: 'Tapado de Pescado',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/Tapado-Pescado.jpg?raw=true',
    price: 9,
    description: 'Plato Completo',
    category: 6,
    container: 2
  },
  {
    id: 80,
    name: 'Sudado de Pescado',
    img: null,
    price: 9,
    description: 'Plato Completo',
    category: 6,
    container: 2
  },
  {
    id: 81,
    name: 'Sudado de Pescado',
    img: null,
    price: 14,
    description: 'Con Camarón',
    category: 6,
    container: 2
  },
  {
    id: 82,
    name: 'Pescado Frito en Salsa',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/Pescado-Frito-Salsa-Mariscos.jpg?raw=true',
    price: 16,
    description: 'Salsa de Maríscos',
    category: 6,
    container: 3
  },
  {
    id: 83,
    name: 'Sudado de Pescado',
    img: null,
    price: 16,
    description: 'Con Maíscos',
    category: 6,
    container: 2
  },
  {
    id: 84,
    name: 'Pulpo a la Parrilla',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/Pulpo-Parrilla.jpg?raw=true',
    price: 9,
    description: 'Plato Completo',
    category: 6,
    container: 2
  },
  {
    id: 85,
    name: 'Pulpo a la Parrilla',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/Pulpo-Parrilla-Salsa-Mariscos.jpg?raw=true',
    price: 16,
    description: 'Salsa de Maríscos',
    category: 6,
    container: 3
  },
  {
    id: 86,
    name: 'Pulpo en Salsa de  Maríscos',
    img: null,
    price: 16,
    description: 'Plato Completo',
    category: 6,
    container: 3
  },
  {
    id: 87,
    name: 'Pulpo al Ajillo',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/Pulpo-Ajillo.jpg?raw=true',
    price: 9,
    description: 'Plato Completo',
    category: 6,
    container: 2
  },
  {
    id: 88,
    name: 'Sopa Marinera',
    img: null,
    price: 11,
    description: 'Plato Completo',
    category: 7,
    container: 2
  },
  {
    id: 89,
    name: 'Sopa de Camarón',
    img: null,
    price: 7,
    description: 'Plato Completo',
    category: 7,
    container: 2
  },
  {
    id: 90,
    name: 'Sopa de Cangrejo',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/sopa-cangrejo.jpg?raw=true',
    price: 6.5,
    description: 'Plato Completo',
    category: 7,
    container: 1
  },
  {
    id: 91,
    name: 'Chupé de Pescado',
    img: null,
    price: 7,
    description: 'Plato Completo',
    category: 7,
    container: 2
  },
  {
    id: 92,
    name: 'Chupé de Camarón',
    img: null,
    price: 7,
    description: 'Café o Leche',
    category: 7,
    container: 2
  },
  {
    id: 93,
    name: 'Parihuela',
    img: null,
    price: 11,
    description: 'Plato Completo',
    category: 7,
    container: 2
  },
  {
    id: 94,
    name: 'Cazuela de Maríscos',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/cazuela.jpg?raw=true',
    price: 8,
    description: 'Plato Completo',
    category: 7,
    container: 2
  },
  {
    id: 95,
    name: 'Cazuela de Camarón',
    img: null,
    price: 7,
    description: 'Plato Completo',
    category: 7,
    container: 2
  },
  {
    id: 96,
    name: 'Cazuela de Pescado',
    img: null,
    price: 7,
    description: 'Plato Completo',
    category: 7,
    container: 2
  },
  {
    id: 97,
    name: 'Cazuela Mixta',
    img: null,
    price: 8,
    description: 'Camarón y Concha',
    category: 7,
    container: 2
  },
  {
    id: 98,
    name: 'Tallarín Marinero',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/Tallarin-Marinero.jpg?raw=true',
    price: 8.5,
    description: 'Plato Completo',
    category: 7,
    container: 2
  },
  {
    id: 99,
    name: 'Tallarín con Camarón',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/Tallarin-Camaron.jpg?raw=true',
    price: 7.5,
    description: 'Plato Completo',
    category: 7,
    container: 2
  },
  {
    id: 100,
    name: 'Tallarín Especial',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/Tallarin-Especial.jpg?raw=true',
    price: 8.5,
    description: 'Plato Completo',
    category: 7,
    container: 2
  },
  {
    id: 101,
    name: 'Tallarín con Pollo',
    img: null,
    price: 6,
    description: 'Plato Completo',
    category: 7,
    container: 2
  },
  {
    id: 102,
    name: 'Tallarín con Carne',
    img: null,
    price: 6,
    description: 'Plato Completo',
    category: 7,
    container: 2
  },
  {
    id: 103,
    name: 'Chop Suey',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/Chop-Suey.jpg?raw=true',
    price: 9.5,
    description: 'Incluye Porción de Arroz',
    category: 7,
    container: 2
  },
  {
    id: 104,
    name: 'Tigrillo',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/Tigrillo.jpg?raw=true',
    price: 3.75,
    description: 'Café y Jugo del Seco de Carne',
    category: 8,
    container: 1
  },
  {
    id: 105,
    name: 'Tigrillo con Seco de Carne',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/Tigrillo-Seco-Carne.jpg?raw=true',
    price: 5.25,
    description: 'Incluye Café',
    category: 8,
    container: 2
  },
  {
    id: 106,
    name: 'Tigrillo con Seco de Pollo',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/Tigrillo-Seco-Pollo.jpg?raw=true',
    price: 5.5,
    description: 'Incluye Café',
    category: 8,
    container: 2
  },
  {
    id: 107,
    name: 'Tigrillo con Guata',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/Tigrillo-Guata.jpg?raw=true',
    price: 5.25,
    description: 'Incluye Café',
    category: 8,
    container: 2
  },
  {
    id: 108,
    name: 'Bolón de queso',
    img: null,
    price: 5.5,
    description: 'Bolón + Bistec + Huevo + café',
    category: 8,
    container: 2
  },
  {
    id: 109,
    name: 'Dos Huevo + Pan con Queso',
    img: null,
    price: 3.5,
    description: 'Café o Leche',
    category: 8,
    container: 2
  },
  {
    id: 110,
    name: 'Combo de Cangrejo',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/Combo-Cangrejo.jpg?raw=true',
    price: 20,
    description: '4 Cangrejos',
    category: 9,
    container: 2
  },
  {
    id: 111,
    name: 'Encocado de Cangrejo',
    img: 'https://github.com/Glya-Corporation/galery-p/blob/main/Encocado-Cangrejo.jpg?raw=true',
    price: 7.5,
    description: '1 Cangrejo',
    category: 9,
    container: 2
  },
  {
    id: 112,
    name: 'Sudado de Cangrejo',
    img: null,
    price: 7.5,
    description: '1 Cangrejo',
    category: 9,
    container: 2
  },
  {
    id: 113,
    name: 'Cangrejo Solo',
    img: null,
    price: 5,
    description: 'Con Ensalada y Patacones',
    category: 9,
    container: 1
  }
];

export default products;
