import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      name: "Hi, I'm Rafael Braga",
      job: "FullStack Engineer",
      job2: "Cloud Architect",
      about: "About me",
      projects: "Projects",
      project: "Project",
      company: "Company",
      seeMyProjects: "See my projects",
      contact: "Contact",
      contactMe: "Contact me",
      brazilianFlag: "Brazilian Flag",
      usaFlag: "USA Flag",
      bragaImgAlt: "Picture of Rafael Braga",
      aboutText1: "I'm Rafael Braga, a",
      aboutText1_1: "and",
      aboutText1_2: "based in Minas Gerais, Brazil.",
      aboutText2:
        "I've been building stuff on the web for the last 9 years, working with clients across various countries and industries.",
      aboutText3:
        "I truly believe that programming languages are just tools. The solution lies in planning and execution. I learn quickly, and I don't mind learning and working with the technologies you love the most.",
      aboutText4:
        "My goal is to extract and build the best solution with the available resources.",
      message: "Message",
      send: "Send",
      technologies: "Technologies i already worked with",
      backend: "Backend",
      frontend: "Frontend",
      data: "Data",
      infrastructure: "Infrastructure & DevOps",
      mobile: "Mobile",
      machineLearning: "Machine Learning",
      description: "Description",
      type: "Type",
      noPublicLink: "No public link",
      Techstack: "Techstack",
      ulbraTitle: "Ulbra University",
      fmuTitle: "FMU University Center",
      audenTitle: "Auden College",
      registrationForm: "Registration Form",
      financialDashboard: "Financial Dashboard",
      hubspotIntegration: "Hubspot Integration",
      machineLearningModel: "Machine Learning Model",
      ulbraDescription:
        "This project was developed for the university I studied at. It is a registration form for the university's events. The project was developed using Next.js and NestJS.",
    },
  },
  pt: {
    translation: {
      name: "Olá, Eu sou Rafael Braga",
      job: "Desenvolvedor FullStack",
      job2: "Arquiteto Cloud",
      about: "Sobre mim",
      projects: "Projetos",
      project: "Projeto",
      company: "Empresa",
      seeMyProjects: "Meus projetos",
      contact: "Contato",
      contactMe: "Contate-me",
      brazilianFlag: "Bandeira do Brasil",
      usaFlag: "Bandeira dos EUA",
      bragaImgAlt: "Foto de Rafael Braga",
      aboutText1: "Meu nome é Rafael Braga, um",
      aboutText1_1: "e",
      aboutText1_2: "nascido e vivendo em Minas Gerais, Brasil.",
      aboutText2:
        "Tenho construído coisas na web nos últimos 9 anos, trabalhando com clientes de vários países e indústrias.",
      aboutText3:
        "Eu realmente acredito que as linguagens de programação são apenas ferramentas. A solução reside no planejamento e execução, aprendo rápido, não me importo de aprender e trabalhar com as tecnologias que você mais ama.",
      aboutText4:
        "Meu objetivo é extrair e construir a melhor solução com os recursos disponíveis.",
      message: "Mensagem",
      send: "Enviar",
      technologies: "Tecnologias que já trabalhei",
      backend: "Backend",
      frontend: "Frontend",
      data: "Dados",
      infrastructure: "Infraestrutura & DevOps",
      mobile: "Mobile",
      machineLearning: "Machine Learning",
      description: "Descrição",
      type: "Tipo",
      noPublicLink: "Sem link público",
      Techstack: "Tecnologias",
      ulbraTitle: "Universidade Ulbra",
      fmuTitle: "FMU",
      audenTitle: "Auden",
      registrationForm: "Formulário de inscrição",
      financialDashboard: "Dashboard Financeiro",
      hubspotIntegration: "Integração com Hubspot",
      machineLearningModel: "Modelo de Machine Learning",
      ulbraDescription:
        "Este projeto foi desenvolvido para a universidade em que estudei. É um formulário de inscrição para os eventos da universidade. O projeto foi desenvolvido usando Next.js e NestJS.",
    },
  },
};

export const browserLanguage = window.navigator.language.includes("pt")
  ? "pt-BR"
  : "en";

i18n.use(initReactI18next).init({
  resources,
  lng: window.localStorage.getItem("language") || browserLanguage,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
