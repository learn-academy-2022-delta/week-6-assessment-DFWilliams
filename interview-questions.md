# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: This problem would be fixed by conducting a migration. In the migration you would add a column called cohort_id, which is the name of the foreign key, to the Student table. 

Researched answer: This problem can be fixed by conducting an active record migration. The migration call that could be used for this issue is add_foreign_key. Within terminal you would run a rails command - $ rails generate migration add_foreign_key_to_student. From there, a migration file will be generated within the app. In the migration file you would type add_foreign_key :students (the name of the model where the foreign key will be ), :cohort_id (which will be the name of the foreign key), :integer (which is the data type of the contents that will occupy this column)

2. Which RESTful routes must always be passed params? Why?

Your answer: The RESTful routes that require params are create, edit, show, and destroy. The create RESTful route needs params for validation measures. We give the entry required information, so if the user enters information in the form and it follows the required info held in the param the entry will be entered into the database. Params are needed in the edit, destroy and show RESTful routes in order to access a specific instance within the database. For instance, with edit you set params[:id] if you wanted to access the instance by the primary. 

Researched answer: The restful routes that are passed params are show, create, edit, update, and destroy. They need params in order to access instances within the database. 

3. Name three rails generator commands. What is created by each?

Your answer: 
    $ rails generate model - this rails command creates a model/table would follow it with column names and the data type that will occupy the column. 

    $ rails db:create - creates the database 

    $ rails generate resource - this rails command creates the Restful routes for your API

Researched answer: 
    $ rails new - this creates a Rails application, it gives you all of the code needed to run thr application 

    $ rails generate - can be used to create different genterators, all by using templates. when ran you will be given a list of generators to choose from. you can create models using this command 

    $ rails destroy - will do the opposite rails generate. Whatever was created from the rails generate command will be undone/removed by the rails destroy command

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students   Controller method: Student.all

action: "POST" location: /students  Controller method: Student.create

action: "GET" location: /students/new    Controller method: Student.new

action: "GET" location: /students/2      Controller method: Student.find(params[:id])

action: "GET" location: /students/2/edit Controller method: Student.find(params[:id])

action: "PATCH" location: /students/2  Controller method: Studen.find(params[:id]) , student.update 

action: "DELETE" location: /students/2  Controller method: student = Studen.find(params[:id]) , student.destroy 

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

    1. As a user I can see a the full list of to-do's on a landing page.
    2. As a user I can click on a button to create a new task
    3. As a user I can click hyper-linked tasks on the landing page to see individual tasks and their content on a separate page
    4. As a user I can press a button to take me back to the landing page 
    5. As a user I can click a button to edit/update individual tasks on the to do list 
    6. As a user I can edit information in a form
    7. As a user I can add a new task to the list by entering information in a form 
    8. As a user if i create a new task with the required information i am redirected to the landing page if the new task is valid
    9. As a user I can delete a task from the list 
    10. As a user if I delete a task I am redirected to the landing page if the post is valid 
     

