
/*Programto fetch contents from URL and show it in console 
*/
var url = 'https://api.github.com/users/Sumantra07';
    fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function(tasksJson) {
        render(tasksJson);
    })
    .catch(function(err) {
        console.log(err);
    });
// show the results on console as string	
var render = function (tasksJson){
console.log(JSON.stringify(tasksJson));
}

