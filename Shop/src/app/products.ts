export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    stock: number;
    caracteristicas: Array<string>;
    garantia: {
      periodo: string;
      tipo: string;
    };
  }

  export const products = [
    {
      id: 1,
      name: 'Phone XL',
      price: 799,
      description: 'A large phone with one of the best screens',
      stock: 10,
      caracteristicas: ["5G", "Pantalla OLED", "Almacenamiento de 128GB"],
      garantia: {
        periodo: "2 Años",
        tipo: "Fabricante",
      }
    },
    {
      id: 2,
      name: 'Phone Mini',
      price: 699,
      description: 'A great phone with one of the best cameras',
      stock: 0,
      caracteristicas: ["4G", "Almacenamiento de 128GB"],
      garantia: {
        periodo: "4 Años",
        tipo: "Segunda mano",
      }
    },
    {
      id: 3,
      name: 'Phone Standard',
      price: 299,
      description: '',
      stock: 3,
      caracteristicas: ["5G", "Pantalla OLED", "Almacenamiento de 128GB", "Baila"],
      garantia: {
        periodo: "3 Meses",
        tipo: "",
      }
    }
  ];
