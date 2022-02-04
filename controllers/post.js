exports.install = function() {
    // Define Routes
    ROUTE('GET /api/posts', getAllPosts);
    ROUTE('GET /api/posts/{id}', getOnePost);
    ROUTE('POST /api/posts', createPost);
    ROUTE('PUT /api/posts/{id}', modifyPost);
    ROUTE('DELETE /api/posts/{id}', deletePost);
}

function getAllPosts() {
    var self = this;
    self.json("Je suis dans la fonction qui permet récupérer tous les posts");
}

function getOnePost() {
    var self = this;
    self.json("Je suis dans la fonction qui permet d'afficher un post");
}

function createPost() {
    var self = this;
    self.json("Je suis dans la fonction qui permet de créer un post");
}

function modifyPost() {
    var self = this;
    self.json("Je suis dans la fonction qui permet de modifier un post");
}

function deletePost() {
    var self = this;
    self.json("Je suis dans la fonction qui permet de supprimer un post");
}