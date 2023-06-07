// PUBLIC FOLDER CONTAINS MAIN JS CODE THAT DECIDES THE FUNCTIONALITY 
// 1
const searchinput= document.getElementById("search")
const section = document.getElementById("section")
// 3
async function getmovies(searchtext){
    const data = await fetch(`https://api.tvmaze.com/search/shows?q=${searchtext}`);
    const movies = await data.json();
    console.log(movies);

    for(let movie of movies){
        // encluding searchtext value only not all movie's names by using new RegExp(`${what_to_include}(?!${not_to_include})`)
        // "i" means CASE insensitive(not sensetive)
        const extract = new RegExp(`^${searchtext}(?!${movie.show.name}),"i"`)
        
        if(movie.show.image!=null && extract){
            const div = document.createElement("div");
            div.innerHTML = `<h1>${movie.show.name}</h1>
            <p> Year:${movie.show.premiered}</p>`

            const image = document.createElement("img");
            image.setAttribute("src", movie.show.image.medium);
            
            div.append(image)
            section.append(div)
        }
    }

}
// 2
searchinput.addEventListener("keypress",(e)=>{
    if(e.key==="Enter"){
        searchtext=searchinput.value;
        getmovies(searchtext)
    }
    
})