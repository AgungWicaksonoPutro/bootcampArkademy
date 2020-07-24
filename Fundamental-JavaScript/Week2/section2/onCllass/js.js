const getDataPost = () => {
    const ajax = new XMLHttpRequest();
    const url = "https://jsonplaceholder.typicode.com/posts"
    ajax.open("GET", url)
    ajax.send();
    ajax.onload = function(){
        const result = JSON.parse(ajax.responseText)
        console.log(result)
    }
}

getDataPost()