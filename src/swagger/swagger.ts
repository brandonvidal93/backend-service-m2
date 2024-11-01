import swaggerJSDoc, { Options } from "swagger-jsdoc";

const swaggerOptions: Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Backend Service API - Brandon Vidal",
      version: "1.0.0",
      description: "API para Catálogo de Productos"
    },
    servers: [
      {
        url: "http://localhost:3000/"
      }
    ]
  },
  apis: [
    "./src/routers/productRoutes.ts"
  ]
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

export default swaggerSpec;