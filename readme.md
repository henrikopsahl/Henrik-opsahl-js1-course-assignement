# Introduction 

 In my first JavaScript assignment, I chose to use the PokeAPI to retrieve and display data about Pokémon on my web page. The focus of the assignment was on JavaScript, so I did not spend much time on CSS styling.

 # Index page 
 I decided to display the first 20 Pokémon in the Pokédex for my Pokémon list. Initially, I had only chosen 5 Pokémon, but it looked a bit empty, so I decided to include 20 Pokémon, even though the requirement was to display at least 3 different properties. I used the fetch method to retrieve data from the API and the json() method to return an array of Pokémon. The showPokemonList() function calls the getPokemonList() function and waits for the results using the await keyword. Then, I used the results to create HTML for each Pokémon.

I also included a loader that appears while we wait for the content to load.


 # Details page 
On this page, I retrieved some details on each Pokémon and displayed them on the details page. I included the name, abilities, height, and weight of each Pokémon.


 # Contact page

On the contact page, I created a simple HTML form and used JavaScript to validate it. If there is an error, a message appears under each section. If everything goes correctly, a success message pops up above the form.



 # Conclusion 
In conclusion, I created a simple web application that uses the PokeAPI to retrieve and display data about Pokémon on my web page. I also created a simple form that validates email and checks if the text length is sufficient. Every page has an error message if something goes wrong, and the contact page has a success message as well.


 