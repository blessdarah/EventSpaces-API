import Knex from "knex";
import knexConfig from "../../knexfile-config";

// @ts-ignore
const knexInstance = Knex(knexConfig.development);

export default knexInstance;
