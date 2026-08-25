import { epn, uni, wimix } from "../assets/images";
import {
    api,
    bank,
    contact,
    csharp,
    css,
    dashboard,
    dotnet,
    erp,
    git,
    github,
    html,
    javascript,
    laravel,
    linkedin,
    office,
    php,
    portfolio,
    postgresql,
    powerbi,
    python,
    react,
    rrhh,
    sqlserver,
    tailwindcss,
    uipath
} from "../assets/icons";

// Este archivo guarda solo lo que no depende del idioma: iconos, colores,
// enlaces y stack. Los textos viven en src/constants/locales y se enlazan
// con estos registros por su `id`.
export const profile = {
    name: "Harvey Vilchez",
    fullName: "Harvey Caleb Vilchez Tapia",
    email: "vilchezharvey747@outlook.com",
    github: "https://github.com/Kal-024",
    linkedin: "https://www.linkedin.com/in/harveyvilchez"
};

export const skills = [
    { imageUrl: csharp, name: "C#", typeKey: "backend" },
    { imageUrl: dotnet, name: ".NET", typeKey: "backend" },
    { imageUrl: php, name: "PHP", typeKey: "backend" },
    { imageUrl: laravel, name: "Laravel", typeKey: "backend" },
    { imageUrl: python, name: "Python", typeKey: "backend" },
    { imageUrl: api, name: "REST APIs", typeKey: "backend" },
    { imageUrl: sqlserver, name: "SQL Server", typeKey: "database" },
    { imageUrl: postgresql, name: "PostgreSQL", typeKey: "database" },
    { imageUrl: javascript, name: "JavaScript", typeKey: "frontend" },
    { imageUrl: html, name: "HTML", typeKey: "frontend" },
    { imageUrl: css, name: "CSS", typeKey: "frontend" },
    { imageUrl: react, name: "React", typeKey: "frontend" },
    { imageUrl: tailwindcss, name: "Tailwind CSS", typeKey: "frontend" },
    { imageUrl: powerbi, name: "Power BI", typeKey: "data" },
    { imageUrl: uipath, name: "UiPath (RPA)", typeKey: "automation" },
    { imageUrl: office, name: "Microsoft 365", typeKey: "productivity" },
    { imageUrl: git, name: "Git", typeKey: "versionControl" },
    { imageUrl: github, name: "GitHub", typeKey: "versionControl" }
];

// Orden cronológico: el puesto más antiguo primero, como lo dibuja la línea
// de tiempo de la página About.
export const experiences = [
    {
        id: "wimix",
        company_name: "WIMIX Solutions & Services",
        icon: wimix,
        iconBg: "#bfe3de"
    },
    {
        id: "epn",
        company_name: "Empresa Portuaria Nacional",
        icon: epn,
        iconBg: "#c7d7f5"
    }
];

export const education = [
    {
        id: "uni",
        icon: uni
    }
];

export const certifications = [
    {
        id: "uipath",
        iconUrl: uipath
    }
];

export const socialLinks = [
    {
        id: "contact",
        name: "Contact",
        iconUrl: contact,
        link: "/contact"
    },
    {
        id: "github",
        name: "GitHub",
        iconUrl: github,
        link: profile.github
    },
    {
        id: "linkedin",
        name: "LinkedIn",
        iconUrl: linkedin,
        link: profile.linkedin
    }
];

// Casos de trabajo profesional: el código es propiedad de cada empresa, por eso
// no hay repositorio público. `link` en null oculta el enlace en la tarjeta.
export const projects = [
    {
        id: "talent",
        iconUrl: rrhh,
        theme: "btn-back-blue",
        stack: [".NET", "C#", "SQL Server"],
        link: null
    },
    {
        id: "financial",
        iconUrl: bank,
        theme: "btn-back-yellow",
        stack: [".NET", "SQL Server", "T-SQL"],
        link: null
    },
    {
        id: "refactor",
        iconUrl: erp,
        theme: "btn-back-green",
        stack: [".NET", "SQL Server", "PostgreSQL"],
        link: null
    },
    {
        id: "powerbi",
        iconUrl: dashboard,
        theme: "btn-back-pink",
        stack: ["Power BI", "SQL"],
        link: null
    },
    {
        id: "portfolio",
        iconUrl: portfolio,
        theme: "btn-back-black",
        stack: ["React", "Three.js", "Tailwind CSS"],
        link: "https://github.com/Kal-024/Kal-024.github.io"
    }
];
