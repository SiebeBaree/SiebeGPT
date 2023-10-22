import { drizzle, type PostgresJsDatabase } from "drizzle-orm/postgres-js";
import postgres from "postgres";

// eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-assignment
const client = postgres(process.env.DATABASE_URL!);
const db: PostgresJsDatabase = drizzle(client);

export default db;