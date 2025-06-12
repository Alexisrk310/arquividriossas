// app/data/navbarData.ts

const routeDropdown = [
  {
    title: "Servicios",
    sections: [
      {
        title: "Servicios",
        items: [
          "Ventanas",
          "Puertas",
          "Instalación",
          "Vidrio templado",
          "Vitrinas",
        ],
        route: [
            { title: "Ventanas", href: "#" },
            { title: "Puertas", href: "#" },
            { title: "Instalación", href: "#" },
            { title: "Vidrio templado", href: "#" },
            { title: "Vitrinas", href: "#" },
        ],
      },
      {
        title: "",
        items: ["Divisiones de baño", "Fachada", "Servicios de mantenimiento", "Balcones", "Mucho más!"],
        route: [
            { title: "Divisiones de baño", href: "#" },
            { title: "Fachada", href: "#" },
            { title: "Servicios de mantenimiento", href: "#" },
            { title: "Balcones", href: "#" },
            { title: "Mucho mas!", href: "#" },
        ],
      },
    ],
    footer: "Selecciona un servicio para más información.",
  },
  {
    title: "Materiales",
    sections: [
      {
        title: "",
        items: ["Vidrio","Alumminio"],
        route:[
            { title: "Vidrio", href: "#" },
            { title: "Aluminio", href: "#" },
        ]
      },
     {
        title: "Materiales",
        items: ["Madera"],
        route: [
            { title: "Madera", href: "#" },
          
        ],
      },
    ],
  },
];

const route = [
  {
    title: "Conócenos",
    href: "#",
  },
  {
    title: "Contáctanos",
    href: "#",
  },
];

export { route, routeDropdown };
