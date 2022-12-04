import {NextFunction, Request, Response} from "express";
import {BookController} from "../controller/BookController";
import {UserController} from "../controller/UserController";

class Routes {
    private bookController: BookController;
    private userController: UserController;

    constructor() {
        this.bookController = new BookController();
        this.userController = new UserController();

    }

    public routes(app): void {

        app.route('/')
            .get((request: Request, response: Response) => {
                response.status(200)
                    .send({
                        message: "GET request successfully."
                    });
            });

        /***
         *
         * @swagger
         *     tags:
         *       - name: pets
         *         description: Everything about your Pets
         *         externalDocs:
         *           url: http://docs.my-api.com/pet-operations.htm
         *       - name: store
         *         description: Access to Petstore orders
         *         externalDocs:
         *           url: http://docs.my-api.com/store-orders.htm
         *
         *
         */
        /**
         * @swagger
         * /books/allBooksbysection/{userId}:
         *   get:
         *     summary: Récupère les livres de toutes les sections d'un utilisateur.
         *     description: Récupère les livres de toutes les sections d'un utilisateur..
         *     parameters:
         *       - in: path
         *         name: userId
         *         required: true
         *         description: l'identifiant de l'utilisateur liée aux livres des sections.
         *         schema:
         *           type: integer
         *     responses:
         *       200:
         *         description: A list of users.
         *         content:
         *           application/json:
         *             schema:
         *               type: object
         *               properties:
         *                 data:
         *                   type: array
         *                   items:
         *                     type: object
         *                     $ref: '#/components/schemas/BooksInSection'
         */
        app.route("/books/allBooksbysection/:userId").get((request: Request, response: Response, next: NextFunction) => this.bookController.AllBooksBySection(request, response, next));

        /**
         * @swagger
         * /books/allBooksbyAuthor/{userId}:
         *   get:
         *     summary: Récupère les livres de tous les auteurs liées à un utilisateur".
         *     description: Récupère les livres de tous les auteurs liées à un utilisateur.
         *     parameters:
         *       - in: path
         *         name: userId
         *         required: true
         *         description: l'identifiant de l'utilisateur liée aux livres des auteurs.
         *         schema:
         *           type: integer
         *     responses:
         *       200:
         *         description: La liste des livres par auteurs.
         *         content:
         *           application/json:
         *             schema:
         *               type: object
         *               properties:
         *                 data:
         *                   type: array
         *                   items:
         *                     type: object
         *                     $ref: '#/components/schemas/BooksByAuthors'
         */
        app.route("/books/allBooksbyAuthor/:userId").get((request: Request, response: Response, next: NextFunction) => this.bookController.AllBooksByAuthors(request, response, next))

        /**
         * @swagger
         * /books/book/{isbn}:
         *   get:
         *     summary: Récupère un livre par son isbn.
         *     description: Récupère un livre par son isbn.
         *     parameters:
         *       - in: path
         *         name: isbn
         *         required: true
         *         description: l'isbn du livre.
         *         schema:
         *           type: integer
         *     responses:
         *       200:
         *         description: La liste des livres par auteurs.
         *         content:
         *           application/json:
         *             schema:
         *               type: object
         *               properties:
         *                 Livre:
         *                   type: object
         *                   $ref: '#/components/schemas/BooksByAuthors'
         */
        app.route("/books/book/:isbn").get((request: Request, response: Response, next: NextFunction) => this.bookController.bookByIsbn(request, response, next))


        /**
         * @swagger
         * /books/allBooksByGenre/{userId}:
         *   get:
         *     summary: Récupère les livres de toutes les categories liées à un utilisateur.
         *     description: Récupère les livres de toutes les categories liées à un utilisateur.
         *     parameters:
         *       - in: path
         *         name: userId
         *         required: true
         *         description: l'identifiant de l'utilisateur liée aux livres des auteurs.
         *         schema:
         *           type: integer
         *     responses:
         *       200:
         *         description: La liste des livres par categories.
         *         content:
         *           application/json:
         *             schema:
         *               type: object
         *               properties:
         *                 data:
         *                   type: array
         *                   items:
         *                     type: object
         *                     $ref: '#/components/schemas/BooksInGenre'
         */
        app.route("/books/allBooksByGenre/:userId").get((request: Request, response: Response, next: NextFunction) => this.bookController.AllBooksByCategories(request, response, next))

        /**
         * @swagger
         * /books/book:
         *     post:
         *       summary: Enregistre un livre dans l'application.
         *       requestBody:
         *         description: Enregistre un livre dans l'application.
         *         required: true
         *         content:
         *           application/json:
         *             schema:
         *               $ref: '#/components/schemas/Book'
         *           text/plain:
         *             schema:
         *               type: string
         *       responses:
         *         '201':
         *           description: Created
         *   */
        app.route("/books/book").post((request: Request, response: Response, next: NextFunction) => this.bookController.addBook(request, response, next))

        /**
         * @swagger
         * /books/keeper:
         *     put:
         *       summary: Modifier une section pour un livre et un utilisateur.
         *       requestBody:
         *         description: Modifier une section pour un livre et un utilisateur.
         *         required: true
         *         content:
         *           application/json:
         *             schema:
         *               $ref: '#/components/schemas/Keeper'
         *           text/plain:
         *             schema:
         *               type: string
         *       responses:
         *         '201':
         *           description: Created
         *   */
        app.route("/books/keeper").put((request: Request, response: Response, next: NextFunction) => this.bookController.modifierSectionPourLivre(request, response, next))


        /**
         * @swagger
         * /books/book/{isbn}/{userId}:
         *   get:
         *     summary: Récupère un livres avec ces sections ajoutés.
         *     description: Récupère un livres avec ces sections ajoutés.
         *     parameters:
         *       - in: path
         *         name: userId
         *         required: true
         *         description: l'identifiant de l'utilisateur liée au livre voulue
         *         schema:
         *           type: integer
         *       - in: path
         *         name: isbn
         *         required: true
         *         description: l'identifiant ddu livre.
         *         schema:
         *           type: integer
         *     responses:
         *       200:
         *         description: La liste des livres par categories.
         *         content:
         *           application/json:
         *             schema:
         *               type: object
         *               properties:
         *                 data:
         *                   type: array
         *                   items:
         *                     type: object
         *                     $ref: '#/components/schemas/BooksInGenre'
         */

        app.route("/books/book/:isbn/:userId").get((request: Request, response: Response, next: NextFunction) => this.bookController.addedSectionsOfOneBook(request, response, next))


        /**
         * @swagger
         * /users/registerUser:
         *     post:
         *       summary: Enregistre un utilisateur dans l'application.
         *       requestBody:
         *         description: Enregistre un utilisateur dans l'application.
         *         required: true
         *         content:
         *           application/json:
         *             schema:
         *               $ref: '#/components/schemas/User'
         *           text/plain:
         *             schema:
         *               type: string
         *       responses:
         *         '201':
         *           description: Created
         *   */
        app.route("/users/registerUser").post((request: Request, response: Response, next: NextFunction) => this.userController.registerUser(request, response, next))

        /**
         * @swagger
         * /users/getUser/{pseudonyme}/{password}:
         *   get:
         *     summary: Récupère un utilisateur par son pseudo et son password.
         *     description: Récupère un utilisateur par son pseudo et son password.
         *     parameters:
         *       - in: path
         *         name: pseudonyme
         *         required: true
         *         description: le pseudo de l'utilisateur.
         *         schema:
         *           type: string
         *       - in: path
         *         name: password
         *         required: true
         *         description: le mot de passe de l'utilisateur.
         *         schema:
         *           type: string
         *     responses:
         *       200:
         *         description: L'utilisateur.
         *         content:
         *           application/json:
         *             schema:
         *               type: object
         *               properties:
         *                 Utilisateur:
         *                   type: object
         *                   $ref: '#/components/schemas/User'
         */
        app.route("/users/getUser/:pseudonyme/:password").get((request: Request, response: Response, next: NextFunction) => this.userController.getUserByPseudonyme(request, response, next))


        /**
         * @swagger
         * /users/{userId}/sections:
         *   get:
         *     summary: Récupère la liste des sections ajoutées par l'utilisateur.
         *     description: Récupère la liste des sections ajoutées par l'utilisateur.
         *     parameters:
         *       - in: path
         *         name: userId
         *         required: true
         *         description: l'id de l'utilisateur.
         *         schema:
         *           type: string
         *     responses:
         *       200:
         *         description: L'utilisateur.
         *         content:
         *           application/json:
         *             schema:
         *               type: object
         *               properties:
         *                 Utilisateur:
         *                   type: object
         *                   $ref: '#/components/schemas/User'
         */
        app.route("/users/:userId/sections").get((request: Request, response: Response, next: NextFunction) => this.userController.getSectionsOfUser(request, response, next))


    }
}

export {Routes};
