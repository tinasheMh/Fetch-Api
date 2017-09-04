
document.getElementById('getText').addEventListener('click',getText);

document.getElementById('getUsers').addEventListener('click',getUsers);

document.getElementById('getPosts').addEventListener('click',getPosts);

document.getElementById('getPhotos').addEventListener('click',getPhotos);

function getText(){
    // fetch('sample.txt').then(function(res){
    //     return res.text();
    // })
    // .then(function(data){
    //     console.log(data);
    // })

    fetch('sample.txt')
    .then((res)=> res.text())
    .then((data)=> {
        document.getElementById('output').innerHTML = data;
    })
    .catch((err)=> console.log(err))
}

function getUsers(){
    fetch('users.json')
    .then((res)=> res.json())
    .then((data)=> {
        let output = '<h2 class="display-4 mb-3">Users</h2>';
        data.forEach(function(user){
            output += `
                <ul class="list-group mb-3">
                    <li class="list-group-item">ID: ${user.id}</li>
                    <li class="list-group-item">Name: ${user.name}</li>
                    <li class="list-group-item">Email: ${user.email}</li>
                </ul>       
            `;
        });
        document.getElementById('output').innerHTML = output;
    }) 
}

function getPosts(){
    fetch('http://jsonplaceholder.typicode.com/posts')
    .then((res)=> res.json())
    .then((data)=> {
        let output = '<h2 class="display-4 mb-3">Posts</h2>';
        data.forEach(function(post){
            output += `
                <div class="card card-body mb-4">
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                </div>       
            `;
        });
        document.getElementById('output').innerHTML = output;
    }) 
}

function getPhotos(){
    fetch('http://www.splashbase.co/api/v1/images/latest')
    .then((res)=> res.json())
    .then((data)=> {
        let output = '<h2 class="display-4 mb-3">Photos</h2>';
        data.images.forEach(function(image){
            output += `
                <div class="card card-body mb-3">
                    <div class="container">
                        <h5 class="mb-2">${image.id}</h5>
                    </div> 
                    <a href="${image.large_url}"> 
                        <figure>
                            <img id="myImg" src="${image.large_url}" alt="Smiley face" height="150" style="width:100%">
                        </figure>
                    </a>  
                </div>     
            `;
        });
        document.getElementById('photoOutput').innerHTML = output;
        
    }) .catch((err)=> console.log(err))
}
