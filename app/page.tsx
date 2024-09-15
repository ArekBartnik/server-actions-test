import { Button } from "@/components/ui/button";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { db } from "@/db";
import { users as usersTable } from "@/db/schema";
import { faker } from "@faker-js/faker";
import { revalidatePath } from "next/cache";

async function getUsers() {
	return await db.select().from(usersTable).all();
}

export default async function Home() {
	const users = await getUsers();

	async function addUser() {
		"use server";
		await db.insert(usersTable).values({ name: faker.person.fullName() });
		revalidatePath("/");
	}
	return (
		<main className="container mx-auto max-w-screen-md flex flex-col gap-8 items-center p-8">
			<div className="flex gap-8">
				<form action={addUser}>
					<Button type="submit">Click me (form)</Button>
				</form>
				<Button onClick={addUser}>Click me (onClick)</Button>
			</div>

			<Table>
				<TableHeader>
					<TableRow>
						<TableHead>Id</TableHead>
						<TableHead>Name</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{users.map((user) => (
						<TableRow key={user.id}>
							<TableCell className="w-10">{user.id}</TableCell>

							<TableCell>{user.name}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</main>
	);
}
