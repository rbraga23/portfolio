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
      formDescription: `The project consists of a web application built in React that offers a multi-step form for the enrollment and registration of students in higher education institutions. 
      The application is designed to provide an intuitive and organized experience, dividing the process into steps, 
      with real-time data validation, visual feedback of progress, and easy navigation between steps. 
      The project aims to simplify the enrollment process, improve administrative efficiency, 
      and offer a modern and attractive experience for users.`,
      drCashDescription: `The project is a financial dashboard developed in React, intended for employees to view all information related to the company's financial income and outcomes.
      The application offers an intuitive and customizable interface, allowing users to view data such as revenues, expenses, cash flow, and financial analysis in real-time.
      Using interactive charts and dynamic tables, the dashboard provides valuable insights for informed decision-making. Integrated with APIs of financial services,
      the project aims to improve the company's financial management, increase transparency, and facilitate access to essential information for employees.`,
      synkroDescription: `The project is an application developed in Ionic, designed to offer a mobile experience for employees to view not only the company's revenues and expenses but also the milestones and updates of associated schools.
      This application provides a centralized platform for tracking financial information and school developments in real-time, offering users a comprehensive view of the financial performance and important milestones achieved by schools.
      Integrating expense and revenue tracking features with school updates, such as events, academic achievements, and relevant news, the application allows effective and agile management of resources and activities of educational institutions.`,
      mkt4eduConexDescription: `The project consists of an API developed in Node.js, with the objective of integrating the data of a company's clients with the HubSpot CRM platform.
      The API offers endpoints for authentication, query, update, and synchronization of data between the company's database and the HubSpot CRM.
      In addition, security practices are implemented, such as authentication with JWT tokens, to ensure the protection of customer data during the integration process.
      The ultimate goal is to facilitate access and use of customer data by the sales and marketing team, enabling more effective and personalized management of customer relationships through the HubSpot CRM platform.`,
      mkt4eduIaDescription: `The project consists of developing a system using Python and the IBM Watson platform to create a binary machine learning model, with the objective of analyzing a list of customer leads and predicting which of them have the highest chance of converting into students.
      The application uses the scikit-learn library for data preprocessing, such as cleaning, normalization, and selection of relevant features, preparing the leads' data.
      Next, IBM Watson Machine Learning is used to train the model based on historical data of lead conversions into students.
      After training, the model is tested and validated with test datasets to ensure its accuracy and performance.
      Finally, the system provides an interface for the customer to submit new leads and receive predictions about which of them have the highest probability of conversion, assisting in prioritizing and optimizing marketing and sales efforts.
      The goal is to increase efficiency in lead conversion into students, providing predictive insights based on data analysis and machine learning.`,
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
      formDescription: `O projeto consiste em uma aplicação web construída em React que oferece um formulário de múltiplos 
        passos para inscrição e matrícula de alunos em instituições de ensino superior. A aplicação é projetada para proporcionar 
        uma experiência intuitiva e organizada, dividindo o processo em etapas, com validação de dados em tempo real, 
        feedback visual do progresso e navegação fácil entre os passos. O projeto visa simplificar o processo de inscrição, 
        melhorar a eficiência administrativa e oferecer uma experiência moderna e atraente para os usuários.`,
      drCashDescription: `O projeto é um dashboard financeiro desenvolvido em React, destinado aos colaboradores para visualizar todas as informações relacionadas às entradas e saídas financeiras da empresa. 
      A aplicação oferece uma interface intuitiva e personalizável, permitindo aos usuários visualizar dados como receitas, 
      despesas, fluxo de caixa e análises financeiras em tempo real. Utilizando gráficos interativos e tabelas dinâmicas, 
      o dashboard proporciona insights valiosos para tomadas de decisão informadas. Integrado com APIs de serviços financeiros, 
      o projeto visa melhorar a gestão financeira da empresa, aumentar a transparência e facilitar o acesso às informações essenciais para os colaboradores.`,
      synkroDescription: `O projeto é um aplicativo desenvolvido em Ionic, projetado para oferecer uma experiência móvel para os colaboradores visualizarem não apenas as receitas e despesas da empresa, 
      mas também os milestones e atualizações das escolas associadas. Este aplicativo proporciona uma plataforma centralizada para acompanhar informações financeiras e desenvolvimentos escolares em tempo real, 
      oferecendo aos usuários uma visão abrangente do desempenho financeiro e dos marcos importantes alcançados pelas escolas. 
      Integrando funcionalidades de acompanhamento de despesas e receitas com atualizações de escolas, como eventos, conquistas acadêmicas e notícias relevantes, 
      o aplicativo permite uma gestão eficaz e ágil dos recursos e das atividades das instituições de ensino.`,
      mkt4eduConexDescription: `O projeto consiste em uma API desenvolvida em Node.js, com o objetivo de integrar os dados dos clientes de uma empresa com a plataforma de CRM HubSpot. 
      A API oferece endpoints para autenticação, consulta, atualização e sincronização de dados entre o banco de dados da empresa e o HubSpot CRM.  
      Além disso, são implementadas práticas de segurança, como autenticação com tokens JWT, para garantir a proteção dos dados dos clientes durante o processo de integração. 
      O objetivo final é facilitar o acesso e a utilização dos dados dos clientes pela equipe de vendas e marketing, possibilitando uma gestão mais eficaz e personalizada 
      do relacionamento com o cliente através da plataforma HubSpot CRM.`,
      mkt4eduIaDescription: `O projeto consiste em desenvolver um sistema utilizando Python e a plataforma IBM Watson para criar um modelo de machine learning binário, 
      com o objetivo de analisar uma lista de leads do cliente e prever quais deles têm a maior chance de converter em alunos. 
      A aplicação utiliza a biblioteca scikit-learn para pré-processamento de dados, como limpeza, normalização e seleção de características relevantes, 
      preparando os dados dos leads. Em seguida, o IBM Watson Machine Learning é utilizado para treinar o modelo com base nos dados históricos de conversões de leads em alunos. 
      Após o treinamento, o modelo é testado e validado com conjuntos de dados de teste para garantir sua precisão e desempenho. 
      Por fim, o sistema fornece uma interface para que o cliente possa enviar novos leads e receber previsões sobre quais deles têm maior probabilidade de conversão, 
      auxiliando na priorização e otimização de esforços de marketing e vendas. O objetivo é aumentar a eficiência na conversão de leads em alunos, 
      proporcionando insights preditivos baseados em análise de dados e machine learning`,
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
