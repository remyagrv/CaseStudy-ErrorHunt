const express = require('express'); 
const booksRouter = express.Router();
// const books = require('../data/books');
const bookdata = require('../model/BookModel');

function bookroute(nav) {
    //router to render books page
booksRouter.get('/',function(req,res){

    bookdata.find() 
    .then(function (books) {

    res.render('books',{
        nav,
        books
    });

    })
})



//router to render addbook page
booksRouter.get('/addbook',function(req,res){
    res.render('addbook',{
        nav
    });

});




//router to add book
booksRouter.post('/add', function (req, res) {

        var item={
            title:req.body.title,
            author:req.body.author,
            image:req.body.image,
            about:req.body.about
        }
        console.log(item)  ;
        const book = new bookdata(item);
        book.save();
        res.redirect('/books');

    })



//router for singlebook
booksRouter.get('/:id',function(req,res){
    const id = req.params.id;
    bookdata.findOne({ _id: id })
            .then(function (book) {
                res.render('book', {
                    nav,
                    book
                })

            })
    
});




//router to delete book
booksRouter.post('/delete', function (req, res) {

    const id = req.body.id;  

    bookdata.findOneAndDelete({ _id: id })
        .then(function () {

            res.redirect('/books')

        })  
})



//router to edit book
booksRouter.post('/edit', function (req, res) {

    bookdata.findById(req.body.id, function(err, data){
        if (err) {
            throw err;
        }
        else {
            res.render('editbook', {nav,data})
        }
    })
});



//router to update book
booksRouter.post('/update', function (req, res) {
// made modifications for retaining the image in updation, if no changes is made in image.
    //bookdata.findByIdAndUpdate(req.body.id, { $set: req.body }, function (err, data) {
        bookdata.findOne({_id:req.body.id})
        .then(function(book)
        {if(req.body.image!=""){
            book.image = req.body.image;
        }
        book.title = req.body.title;
        book.title = req.body.author;
        book.about = req.body.about;

        book.save(function (err){
            if (err) {
                res.json({ status: "Failed" });
            }
            
            else {
                res.redirect("/books")
            }
    
        })  
    })
    })
return booksRouter;

}








module.exports = bookroute;