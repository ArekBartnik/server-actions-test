import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";

const client = createClient({ url: "file:./db/sqlite.db" });
const db = drizzle(client);

export { db };
