Reflection
Please also provide an assignment reflection in your project README.md file.

Required
- 🎯 What requirements did you achieve?
- I was able to achieve the main requirements such as create a client using React and Express to create your server and using both GET and POST endpoints.
- I was able to build a React form for users to create posts and create multiple pages using React Router.
- I designed a database schema, and seeded the database with some realistic data.
- I also used SQL to retrieve posts from the database in my Express server.
- I was able to display posts using .map().
- 🎯 Were there any requirements or goals that you were unable to achieve?
I was unable to achieve stretch goals. I tried to create a delete route but I had some issues trying to get it to delete the data, so I didn't complete that. 
- 🎯 If so, what was it that you found difficult about these tasks?
I think I struggled first with the server. As I had 2 tables (users and recipes) and connected them with a foreign key which was user id. I had to research how to get the new data from the body to match the user id in the user table and the foreign key in the recipe table. After some googling I figured it out. I also had a category table which represented what kind of recipe it was, but that was starting to become complicated so I removed that and just added that entry to the recipe table. 



Could you please advise how I would go about creating a delete route. I don't know if it's because I have 2 tables, it was making it harder. I have commented out what I wrote but I think I'm missing something. Also I don't know if I used the dependency array correctly, I'm still not a 100% sure on that. 

I also learned a little about the useNavigate hook, which was quite interesting. I liked how after the user had submitted the form it navigated to the recipes. Also I wanted the navbar to look nice, so I was looking into Bootstrap. If I had more time then I would've liked to incorporate that into my app. 


- What useful external sources helped you complete the assignment (e.g Youtube tutorials)?
- https://dev.to/darkmavis1980/the-returning-clause-in-sql-11k2 - how to use return statement in sql
- https://www.youtube.com/watch?v=hbeMQ7jqyXM&ab_channel=CodeWithYousaf - React routes
- https://www.w3schools.com/mysql/default.asp - sql commands 


Submission Instructions

Please submit the server URL, client URL, your GitHub repository link and a screenshot of your Database Schema (and Query Editor, if it was used).

How to send your database schema:
In Supabase, select the project you have connected to this application.
In the menu, go to ‘Database’.
Then, go to ‘Schema Visualiser’.
Take a screenshot of the tables you’ve used and save it in your files.
On Moodle, in your submission, click the image icon and follow the instructions.



These are some SQL queries I used for testing 
```sql
INSERT INTO users (username, email)
VALUES ('Hannahc', 'hannah@gmail.com')


INSERT INTO recipes (recipe_name, minutes, ingredients, instructions, user_id, category_id)
VALUES ('Omlette', 15, 'Eggs, butter, cheese', 'Melt butter in a pan. Whisk eggs together in a bowl and pour into a pan. Cook the omelette for 2 to 3 minutes, or until the edges are cooked through and sprinkle cheese on top.', 1, 2 )

INSERT INTO recipes (recipe_name, minutes, ingredients, instructions, user_id, category_id)
VALUES ('Tomato bruschetta', 20, 'red onion, tomatoes, garlic cloves, fresh basil, balsamic vinegar, olive oil, crusty bread', 'Mix the onions, tomatoes, garlic and basil. Add the balsamic vinegar and oil and mix again. Let it chill. Slice the baguette loaf and toast them. Serve the mixture on the the bread', 1, 1 )

INSERT INTO recipes (recipe_name, minutes, ingredients, instructions, user_id, category_id)
VALUES ('Chocolate-Covered Strawberries', 15, 'chocolate chips, coconut oil, strawberries', 'Melt chocolate and oil in a double boiler. Dip the strawberries into the chocolate with a fork. Then place onto a baking sheet and let them cool in the fridge', 1, 3 )

INSERT INTO users (username, email)
VALUES ('testa', 'a@a.com')
RETURNING id;

SELECT users.username, categories.category_name, recipes.recipe_name, recipes.minutes, recipes.ingredients, recipes.instructions  FROM users
JOIN recipes ON recipes.user_id = users.id
JOIN categories ON recipes.category_id = categories.id

SELECT id FROM categories WHERE category_name = 'Dessert'

ALTER TABLE users
DROP COLUMN email;

DROP TABLE categories;

ALTER TABLE recipes
DROP COLUMN category_id;

ALTER TABLE recipes
ADD food_category VARCHAR(255);

UPDATE recipes
SET food_category = 'Dessert'
WHERE id = 13;

SELECT users.id, users.username, recipes.food_category, recipes.recipe_name, recipes.minutes, recipes.ingredients, recipes.instructions  FROM users
JOIN recipes ON recipes.user_id = users.id

DELETE FROM recipes WHERE id = 98
```