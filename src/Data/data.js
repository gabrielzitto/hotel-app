import room1 from "../assets/img/jpeg/details-1.jpeg";
import room2 from "../assets/img/jpeg/details-2.jpeg";
import room3 from "../assets/img/jpeg/details-3.jpeg";
import room4 from "../assets/img/jpeg/details-4.jpeg";
import img1 from "../assets/img/jpeg/room-1.jpeg";
import img2 from "../assets/img/jpeg/room-2.jpeg";
import img3 from "../assets/img/jpeg/room-3.jpeg";
import img4 from "../assets/img/jpeg/room-4.jpeg";
import img5 from "../assets/img/jpeg/room-5.jpeg";
import img6 from "../assets/img/jpeg/room-6.jpeg";
import img7 from "../assets/img/jpeg/room-7.jpeg";
import img8 from "../assets/img/jpeg/room-8.jpeg";
import img9 from "../assets/img/jpeg/room-9.jpeg";
import img10 from "../assets/img/jpeg/room-10.jpeg";
import img11 from "../assets/img/jpeg/room-11.jpeg";
import img12 from "../assets/img/jpeg/room-12.jpeg";

const data = [
  {
    sys: {
      id: "1",
    },
    fields: {
      name: "econômico",
      slug: "solteiro-economy",
      type: "solteiro",
      price: 100,
      size: 200,
      capacity: 1,
      pets: false,
      breakfast: false,
      featured: false,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor, leo at fringilla blandit, sapien quam ornare urna, iaculis placerat massa eros vitae elit. Aliquam cursus faucibus elit quis rutrum. Pellentesque viverra placerat dui, id egestas libero ultricies sed. Ut gravida odio non libero suscipit, sit amet accumsan tellus sollicitudin. Etiam quis lorem tellus. Aliquam fermentum, lacus eu dapibus pretium, ipsum odio congue diam, at vulputate mi massa rutrum diam. Suspendisse malesuada viverra quam, sit amet mollis metus aliquet ac. Suspendisse pharetra mattis suscipit.",
      extras: [
          "Colchões luxuosos de espuma de memória",
          "Grandes toalhas de spa absorventes",
          "Produtos de higiene de alta qualidade e naturais",
          "Cesta de lanches gourmet cortesia",
          "Medidas de segurança de alto nível",
          "Wi-Fi de alta velocidade",
          "Móveis ergonomicamente projetados",
          ],
      images: [
        {
          fields: {
            file: {
              url: img1,
            },
          },
        },
        {
          fields: {
            file: {
              url: room2,
            },
          },
        },
        {
          fields: {
            file: {
              url: room3,
            },
          },
        },
        {
          fields: {
            file: {
              url: room4,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "2",
    },
    fields: {
      name: "solteiro basic",
      slug: "solteiro-basic",
      type: "solteiro",
      price: 150,
      size: 250,
      capacity: 1,
      pets: false,
      breakfast: false,
      featured: false,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor, leo at fringilla blandit, sapien quam ornare urna, iaculis placerat massa eros vitae elit. Aliquam cursus faucibus elit quis rutrum. Pellentesque viverra placerat dui, id egestas libero ultricies sed. Ut gravida odio non libero suscipit, sit amet accumsan tellus sollicitudin. Etiam quis lorem tellus. Aliquam fermentum, lacus eu dapibus pretium, ipsum odio congue diam, at vulputate mi massa rutrum diam. Suspendisse malesuada viverra quam, sit amet mollis metus aliquet ac. Suspendisse pharetra mattis suscipit.",
        extras: [
          "Colchões luxuosos de espuma de memória",
          "Grandes toalhas de spa absorventes",
          "Produtos de higiene de alta qualidade e naturais",
          "Cesta de lanches gourmet cortesia",
          "Medidas de segurança de alto nível",
          "Wi-Fi de alta velocidade",
          "Móveis ergonomicamente projetados",
          ],
      images: [
        {
          fields: {
            file: {
              url: img2,
            },
          },
        },
        {
          fields: {
            file: {
              url: room2,
            },
          },
        },
        {
          fields: {
            file: {
              url: room3,
            },
          },
        },
        {
          fields: {
            file: {
              url: room4,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "3",
    },
    fields: {
      name: "solteiro standard",
      slug: "solteiro-standard",
      type: "solteiro",
      price: 250,
      size: 300,
      capacity: 1,
      pets: true,
      breakfast: false,
      featured: false,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor, leo at fringilla blandit, sapien quam ornare urna, iaculis placerat massa eros vitae elit. Aliquam cursus faucibus elit quis rutrum. Pellentesque viverra placerat dui, id egestas libero ultricies sed. Ut gravida odio non libero suscipit, sit amet accumsan tellus sollicitudin. Etiam quis lorem tellus. Aliquam fermentum, lacus eu dapibus pretium, ipsum odio congue diam, at vulputate mi massa rutrum diam. Suspendisse malesuada viverra quam, sit amet mollis metus aliquet ac. Suspendisse pharetra mattis suscipit.",
      extras: [
          "Colchões luxuosos de espuma de memória",
          "Grandes toalhas de spa absorventes",
          "Produtos de higiene de alta qualidade e naturais",
          "Cesta de lanches gourmet cortesia",
          "Medidas de segurança de alto nível",
          "Wi-Fi de alta velocidade",
          "Móveis ergonomicamente projetados",
          ],
      images: [
        {
          fields: {
            file: {
              url: img3,
            },
          },
        },
        {
          fields: {
            file: {
              url: room2,
            },
          },
        },
        {
          fields: {
            file: {
              url: room3,
            },
          },
        },
        {
          fields: {
            file: {
              url: room4,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "4",
    },
    fields: {
      name: "solteiro deluxe",
      slug: "solteiro-deluxe",
      type: "solteiro",
      price: 300,
      size: 400,
      capacity: 1,
      pets: true,
      breakfast: true,
      featured: false,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor, leo at fringilla blandit, sapien quam ornare urna, iaculis placerat massa eros vitae elit. Aliquam cursus faucibus elit quis rutrum. Pellentesque viverra placerat dui, id egestas libero ultricies sed. Ut gravida odio non libero suscipit, sit amet accumsan tellus sollicitudin. Etiam quis lorem tellus. Aliquam fermentum, lacus eu dapibus pretium, ipsum odio congue diam, at vulputate mi massa rutrum diam. Suspendisse malesuada viverra quam, sit amet mollis metus aliquet ac. Suspendisse pharetra mattis suscipit.",
      extras: [
          "Colchões luxuosos de espuma de memória",
          "Grandes toalhas de spa absorventes",
          "Produtos de higiene de alta qualidade e naturais",
          "Cesta de lanches gourmet cortesia",
          "Medidas de segurança de alto nível",
          "Wi-Fi de alta velocidade",
          "Móveis ergonomicamente projetados",
          ],
      images: [
        {
          fields: {
            file: {
              url: img4,
            },
          },
        },
        {
          fields: {
            file: {
              url: room2,
            },
          },
        },
        {
          fields: {
            file: {
              url: room3,
            },
          },
        },
        {
          fields: {
            file: {
              url: room4,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "5",
    },
    fields: {
      name: "double economy",
      slug: "double-economy",
      type: "double",
      price: 200,
      size: 300,
      capacity: 2,
      pets: false,
      breakfast: false,
      featured: false,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor, leo at fringilla blandit, sapien quam ornare urna, iaculis placerat massa eros vitae elit. Aliquam cursus faucibus elit quis rutrum. Pellentesque viverra placerat dui, id egestas libero ultricies sed. Ut gravida odio non libero suscipit, sit amet accumsan tellus sollicitudin. Etiam quis lorem tellus. Aliquam fermentum, lacus eu dapibus pretium, ipsum odio congue diam, at vulputate mi massa rutrum diam. Suspendisse malesuada viverra quam, sit amet mollis metus aliquet ac. Suspendisse pharetra mattis suscipit.",
      extras: [
          "Colchões luxuosos de espuma de memória",
          "Grandes toalhas de spa absorventes",
          "Produtos de higiene de alta qualidade e naturais",
          "Cesta de lanches gourmet cortesia",
          "Medidas de segurança de alto nível",
          "Wi-Fi de alta velocidade",
          "Móveis ergonomicamente projetados",
          ],
      images: [
        {
          fields: {
            file: {
              url: img5,
            },
          },
        },
        {
          fields: {
            file: {
              url: room2,
            },
          },
        },
        {
          fields: {
            file: {
              url: room3,
            },
          },
        },
        {
          fields: {
            file: {
              url: room4,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "6",
    },
    fields: {
      name: "double basic",
      slug: "double-basic",
      type: "double",
      price: 250,
      size: 350,
      capacity: 2,
      pets: false,
      breakfast: false,
      featured: false,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor, leo at fringilla blandit, sapien quam ornare urna, iaculis placerat massa eros vitae elit. Aliquam cursus faucibus elit quis rutrum. Pellentesque viverra placerat dui, id egestas libero ultricies sed. Ut gravida odio non libero suscipit, sit amet accumsan tellus sollicitudin. Etiam quis lorem tellus. Aliquam fermentum, lacus eu dapibus pretium, ipsum odio congue diam, at vulputate mi massa rutrum diam. Suspendisse malesuada viverra quam, sit amet mollis metus aliquet ac. Suspendisse pharetra mattis suscipit.",
      extras: [
          "Colchões luxuosos de espuma de memória",
          "Grandes toalhas de spa absorventes",
          "Produtos de higiene de alta qualidade e naturais",
          "Cesta de lanches gourmet cortesia",
          "Medidas de segurança de alto nível",
          "Wi-Fi de alta velocidade",
          "Móveis ergonomicamente projetados",
          ],
      images: [
        {
          fields: {
            file: {
              url: img6,
            },
          },
        },
        {
          fields: {
            file: {
              url: room2,
            },
          },
        },
        {
          fields: {
            file: {
              url: room3,
            },
          },
        },
        {
          fields: {
            file: {
              url: room4,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "7",
    },
    fields: {
      name: "double standard",
      slug: "double-standard",
      type: "double",
      price: 300,
      size: 400,
      capacity: 2,
      pets: true,
      breakfast: false,
      featured: false,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor, leo at fringilla blandit, sapien quam ornare urna, iaculis placerat massa eros vitae elit. Aliquam cursus faucibus elit quis rutrum. Pellentesque viverra placerat dui, id egestas libero ultricies sed. Ut gravida odio non libero suscipit, sit amet accumsan tellus sollicitudin. Etiam quis lorem tellus. Aliquam fermentum, lacus eu dapibus pretium, ipsum odio congue diam, at vulputate mi massa rutrum diam. Suspendisse malesuada viverra quam, sit amet mollis metus aliquet ac. Suspendisse pharetra mattis suscipit.",
      extras: [
          "Colchões luxuosos de espuma de memória",
          "Grandes toalhas de spa absorventes",
          "Produtos de higiene de alta qualidade e naturais",
          "Cesta de lanches gourmet cortesia",
          "Medidas de segurança de alto nível",
          "Wi-Fi de alta velocidade",
          "Móveis ergonomicamente projetados",
          ],
      images: [
        {
          fields: {
            file: {
              url: img7,
            },
          },
        },
        {
          fields: {
            file: {
              url: room2,
            },
          },
        },
        {
          fields: {
            file: {
              url: room3,
            },
          },
        },
        {
          fields: {
            file: {
              url: room4,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "8",
    },
    fields: {
      name: "double deluxe",
      slug: "double-deluxe",
      type: "double",
      price: 400,
      size: 500,
      capacity: 2,
      pets: true,
      breakfast: true,
      featured: true,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor, leo at fringilla blandit, sapien quam ornare urna, iaculis placerat massa eros vitae elit. Aliquam cursus faucibus elit quis rutrum. Pellentesque viverra placerat dui, id egestas libero ultricies sed. Ut gravida odio non libero suscipit, sit amet accumsan tellus sollicitudin. Etiam quis lorem tellus. Aliquam fermentum, lacus eu dapibus pretium, ipsum odio congue diam, at vulputate mi massa rutrum diam. Suspendisse malesuada viverra quam, sit amet mollis metus aliquet ac. Suspendisse pharetra mattis suscipit.",
      extras: [
          "Colchões luxuosos de espuma de memória",
          "Grandes toalhas de spa absorventes",
          "Produtos de higiene de alta qualidade e naturais",
          "Cesta de lanches gourmet cortesia",
          "Medidas de segurança de alto nível",
          "Wi-Fi de alta velocidade",
          "Móveis ergonomicamente projetados",
          ],
      images: [
        {
          fields: {
            file: {
              url: img8,
            },
          },
        },
        {
          fields: {
            file: {
              url: room2,
            },
          },
        },
        {
          fields: {
            file: {
              url: room3,
            },
          },
        },
        {
          fields: {
            file: {
              url: room4,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "9",
    },
    fields: {
      name: "Família economy",
      slug: "Família-economy",
      type: "Família",
      price: 300,
      size: 500,
      capacity: 3,
      pets: false,
      breakfast: false,
      featured: false,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor, leo at fringilla blandit, sapien quam ornare urna, iaculis placerat massa eros vitae elit. Aliquam cursus faucibus elit quis rutrum. Pellentesque viverra placerat dui, id egestas libero ultricies sed. Ut gravida odio non libero suscipit, sit amet accumsan tellus sollicitudin. Etiam quis lorem tellus. Aliquam fermentum, lacus eu dapibus pretium, ipsum odio congue diam, at vulputate mi massa rutrum diam. Suspendisse malesuada viverra quam, sit amet mollis metus aliquet ac. Suspendisse pharetra mattis suscipit.",
      extras: [
          "Colchões luxuosos de espuma de memória",
          "Grandes toalhas de spa absorventes",
          "Produtos de higiene de alta qualidade e naturais",
          "Cesta de lanches gourmet cortesia",
          "Medidas de segurança de alto nível",
          "Wi-Fi de alta velocidade",
          "Móveis ergonomicamente projetados",
          ],
      images: [
        {
          fields: {
            file: {
              url: img9,
            },
          },
        },
        {
          fields: {
            file: {
              url: room2,
            },
          },
        },
        {
          fields: {
            file: {
              url: room3,
            },
          },
        },
        {
          fields: {
            file: {
              url: room4,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "10",
    },
    fields: {
      name: "Família basic",
      slug: "Família-basic",
      type: "Família",
      price: 350,
      size: 550,
      capacity: 4,
      pets: false,
      breakfast: false,
      featured: false,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor, leo at fringilla blandit, sapien quam ornare urna, iaculis placerat massa eros vitae elit. Aliquam cursus faucibus elit quis rutrum. Pellentesque viverra placerat dui, id egestas libero ultricies sed. Ut gravida odio non libero suscipit, sit amet accumsan tellus sollicitudin. Etiam quis lorem tellus. Aliquam fermentum, lacus eu dapibus pretium, ipsum odio congue diam, at vulputate mi massa rutrum diam. Suspendisse malesuada viverra quam, sit amet mollis metus aliquet ac. Suspendisse pharetra mattis suscipit.",
      extras: [
          "Colchões luxuosos de espuma de memória",
          "Grandes toalhas de spa absorventes",
          "Produtos de higiene de alta qualidade e naturais",
          "Cesta de lanches gourmet cortesia",
          "Medidas de segurança de alto nível",
          "Wi-Fi de alta velocidade",
          "Móveis ergonomicamente projetados",
          ],
      images: [
        {
          fields: {
            file: {
              url: img10,
            },
          },
        },
        {
          fields: {
            file: {
              url: room2,
            },
          },
        },
        {
          fields: {
            file: {
              url: room3,
            },
          },
        },
        {
          fields: {
            file: {
              url: room4,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "11",
    },
    fields: {
      name: "Família standard",
      slug: "Família-standard",
      type: "Família",
      price: 400,
      size: 600,
      capacity: 5,
      pets: true,
      breakfast: false,
      featured: false,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor, leo at fringilla blandit, sapien quam ornare urna, iaculis placerat massa eros vitae elit. Aliquam cursus faucibus elit quis rutrum. Pellentesque viverra placerat dui, id egestas libero ultricies sed. Ut gravida odio non libero suscipit, sit amet accumsan tellus sollicitudin. Etiam quis lorem tellus. Aliquam fermentum, lacus eu dapibus pretium, ipsum odio congue diam, at vulputate mi massa rutrum diam. Suspendisse malesuada viverra quam, sit amet mollis metus aliquet ac. Suspendisse pharetra mattis suscipit.",
      extras: [
          "Colchões luxuosos de espuma de memória",
          "Grandes toalhas de spa absorventes",
          "Produtos de higiene de alta qualidade e naturais",
          "Cesta de lanches gourmet cortesia",
          "Medidas de segurança de alto nível",
          "Wi-Fi de alta velocidade",
          "Móveis ergonomicamente projetados",
          ],
      images: [
        {
          fields: {
            file: {
              url: img11,
            },
          },
        },
        {
          fields: {
            file: {
              url: room2,
            },
          },
        },
        {
          fields: {
            file: {
              url: room3,
            },
          },
        },
        {
          fields: {
            file: {
              url: room4,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "12",
    },
    fields: {
      name: "Família deluxe",
      slug: "Família-deluxe",
      type: "Família",
      price: 500,
      size: 700,
      capacity: 6,
      pets: true,
      breakfast: true,
      featured: true,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor, leo at fringilla blandit, sapien quam ornare urna, iaculis placerat massa eros vitae elit. Aliquam cursus faucibus elit quis rutrum. Pellentesque viverra placerat dui, id egestas libero ultricies sed. Ut gravida odio non libero suscipit, sit amet accumsan tellus sollicitudin. Etiam quis lorem tellus. Aliquam fermentum, lacus eu dapibus pretium, ipsum odio congue diam, at vulputate mi massa rutrum diam. Suspendisse malesuada viverra quam, sit amet mollis metus aliquet ac. Suspendisse pharetra mattis suscipit.",
      extras: [
          "Colchões luxuosos de espuma de memória",
          "Grandes toalhas de spa absorventes",
          "Produtos de higiene de alta qualidade e naturais",
          "Cesta de lanches gourmet cortesia",
          "Medidas de segurança de alto nível",
          "Wi-Fi de alta velocidade",
          "Móveis ergonomicamente projetados",
          ],
      images: [
        {
          fields: {
            file: {
              url: img12,
            },
          },
        },
        {
          fields: {
            file: {
              url: room2,
            },
          },
        },
        {
          fields: {
            file: {
              url: room3,
            },
          },
        },
        {
          fields: {
            file: {
              url: room4,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "13",
    },
    fields: {
      name: "presidencial",
      slug: "presidencial-room",
      type: "presidencial",
      price: 600,
      size: 1000,
      capacity: 10,
      pets: true,
      breakfast: true,
      featured: true,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor, leo at fringilla blandit, sapien quam ornare urna, iaculis placerat massa eros vitae elit. Aliquam cursus faucibus elit quis rutrum. Pellentesque viverra placerat dui, id egestas libero ultricies sed. Ut gravida odio non libero suscipit, sit amet accumsan tellus sollicitudin. Etiam quis lorem tellus. Aliquam fermentum, lacus eu dapibus pretium, ipsum odio congue diam, at vulputate mi massa rutrum diam. Suspendisse malesuada viverra quam, sit amet mollis metus aliquet ac. Suspendisse pharetra mattis suscipit.",
      extras: [
          "Colchões luxuosos de espuma de memória",
          "Grandes toalhas de spa absorventes",
          "Produtos de higiene de alta qualidade e naturais",
          "Cesta de lanches gourmet cortesia",
          "Medidas de segurança de alto nível",
          "Wi-Fi de alta velocidade",
          "Móveis ergonomicamente projetados",
          ],
      images: [
        {
          fields: {
            file: {
              url: room1,
            },
          },
        },
        {
          fields: {
            file: {
              url: room2,
            },
          },
        },
        {
          fields: {
            file: {
              url: room3,
            },
          },
        },
        {
          fields: {
            file: {
              url: room4,
            },
          },
        },
      ],
    },
  },
];

export default data;
