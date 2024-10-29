import "reflect-metadata";
import { DataSource } from "typeorm";
import { Product } from "./entities/Product";

export const AppDataSource = new DataSource({
  type        : "sqlite", // Tipo de base datos
  database    : "database.sqlite", // nombre de base datos
  synchronize : true, // sincronización activa
  logging     : false, // Sin inicio de sesión en la BD
  entities    : [Product], // Se agregan las Entidades creadas
  migrations  : [],
  subscribers : []
});