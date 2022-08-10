# KEHINDE BANKOLE TALENTQL TEST

A fun little web application that displays a list of users and their information and are stored in paginated tables

[See it Live](https://kehindeql.netlify.app)

# HOW IT WORKS

The project was built using HTML , CSS and TYPESCRIPT
Network requests are made using javascript's fetch API

on first load , a network request is made to get page 1 of users' data , the data returned has 5 user objects in an array and will be displayed in a table which has a 'prev' and 'next' button below it , and also below the table is a text which lets the user of the web application know the current page

the prev and next button button are used to access previous and next pages of data respectively , but if the current page the user is on is the first page , the prev button is disabled

# CODE IMPLEMENTATION

i have app.ts index.html and style.css in the src folder

the index.css files contains code which is used to style the web application

the index.html file contains the markup of the web application , although not all the mark up included because some of the data needs to be fetched dynamically. Every element has also been assigned an id attribute (if needed) in order for them to be accessible using typescript

the app.ts file , written in typescript contains logic and implementation details that drive the web application
i have the type of response expected defined at the top of the file , this will allow TS to help point out errors and help with auto complete

i have a function called **makeApiCall** with types defined as generics , the **makeApiCall** is an helper or utility which helps with making internet requests , the internet request is made asynchronously using the **fetch API** , which means this function returns a promise

i have a function called **getData** which is an asynchronous function and where the whole work is done , this function is responsible for painting the UI , making the requests and performing neccessary logic , in this function , the makeApiCall function is called with the await keyword which will help resolve the promise returned from makeApiCall function , this returned data is accesses and then used to build out our table by using the DOM

# LOGIC USED TO FETCH PAGES

a **GET** request is made to the given endpoint , NOTE : this endpoint  has a query param called page which can be used to fetch a next page (which is supposed to increase by 2)

now the data returned contains data for the current and next page , but after carefully studying the data returned and how it is returned , i discovered that the page params can by dynamically incremented by 1  , so this will give me result for current and next page but the next paga data of the previous api call will be first data given in a new api call

so i used a variable currentPage to store and control which current page i want , this variable is decremented or incremented as needed by the **prev** and **next** function and then used to make the api call for that particular page and since i am sure that the data i want will always have a key that corresponds to my currentpPage value , i just access that object using bracket notation

that data is then used to dynamically build a table on the UI by manipulating the innerHTML property of the table in the HTML 

the prev button is disabled when the current page we are on is the first page because after 0 we have -1 and thats not an ideal page