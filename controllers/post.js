var Post = MODEL('post').model;

exports.install = function() {
    // Define Routes
    ROUTE('GET /api/posts', getAllPosts);
    ROUTE('GET /api/posts/{id}', getOnePost);
    ROUTE('POST /api/posts', createPost);
    ROUTE('PUT /api/posts/{id}', modifyPost);
    ROUTE('DELETE /api/posts/{id}', deletePost);
}

// Afficher tous les posts
function getAllPosts() {
    var self = this;
    Post.find({}).exec()
        .then((allPosts) => {
            self.status = 201;
            self.json(allPosts);
        }).catch((error) => {
            self.status = 400;
            self.json(error);
        });
}

// Afficher un post
function getOnePost() {
    var self = this;
    Post.findOne({ "_id": self.params.id }).exec()
        .then((postFind) => {
            self.status = 201;
            self.json(postFind);
        })
        .catch((error) => {
            self.status = 400;
            self.json(error);
        });
}

// Créer un post
function createPost() {
    var self = this;
    var newPost = new Post(self.body);
    newPost.save()
        .then(() => {
            self.status = 201;
            self.json("Post ajouté avec succès");
        })
        .catch((error) => {
            self.status = 400;
            self.json(error)
        });
}

// Modifier un post
function modifyPost() {
    var self = this;
    Post.findByIdAndUpdate({
        _id: self.params.id
    }, self.body)
        .then(() => {
            self.status = 201;
            self.json("Post modifié avec succès");
        })
        .catch((error) => {
            self.status = 400;
            self.json(error);
        });
}

// Supprimer un post
function deletePost() {
    var self = this;
    Post.findByIdAndDelete(self.params.id)
        .then(() => {
            self.status = 201;
            self.json("Post supprimé avec succès");
        })
        .catch((error) => {
            self.status = 400;
            self.json(error);
        });
}