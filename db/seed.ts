import { Category, Todo, User, db } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	// TODO
	await db.insert(User).values([
		{
			id:"userId1",
			email:"user1@mail.com",
			username:"user1"
		},
		{
			id:"userId2",
			email:"user2@mail.com",
			username:"user2"
		},
		{
			id:"userId3",
			email:"user3@mail.com",
			username:"user3"
		}
	])

	await db.insert(Category).values([
		{
			id:"catid1",
			label:"category1",
		},
		{
			id:"catid2",
			label:"category2",
		},
		{
			id:"catid3",
			label:"category3",
		},
	])

	await db.insert(Todo).values([
		{
			id:"todoId1",
			title:"title 1",
			description:"description 1",
			category_id:'catid1',
			user_id:'userId1'
		},
		{
			id:"todoId2",
			title:"title 2",
			description:"description 2",
			category_id:'catid2',
			user_id:'userId2'
		},
		{
			id:"todoId3",
			title:"title 3",
			description:"description 3",
			category_id:'catid3',
			user_id:'userId3'
		},
		
		{
			id:"todoId4",
			title:"title 4",
			description:"description 4",
			category_id:'catid1',
			user_id:'userId1'
		},
	])

}
