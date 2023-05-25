const Book = require('../model/bookStore');

exports.getAllBooks = async (req, res) => {
    try {
      const limitValue = req.query.limit || 2;
      const skipValue = req.query.skip || 0;
      const books = await Book.find().limit(limitValue).skip(skipValue);
      res.json(books);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  

  exports.getBook = async (req, res) => {
    try {
      const book = await Book.findById(req.params.id);
      if (!book) return res.status(404).json({ message: 'No book in store found' });
      res.status(200).json(book);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  

exports.createBook = async(req, res) => {
    const book = new Book({
        name: req.body.name,
        company: req.body.company,
        price: req.body.price,
        imageUrl: req.body.imageUrl,
        author: req.body.author,
        quantity: req.body.quantity
    })

    try{
        const newBook = await book.save();
        res.status(201).json(newBook);
    }catch(err){
        res.status(400).json({message: err.message});
    }
}

exports.updateBook = async (req, res) => {
    try {
      const book = await Book.findById(req.params.id);
      if (!book) return res.status(404).json({ message: 'Book not found' });
  
      book.name = req.body.name;
      book.company = req.body.company;
      book.price = req.body.price;
      book.imageUrl = req.body.imageUrl;
      book.author = req.body.author;
      book.quantity = req.body.quantity;
  
      const updatedBook = await book.save();
      res.status(200).json(updatedBook);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  

  exports.deleteBook = async (req, res) => {
    try {
      const book = await Book.findById(req.params.id);
      if (!book) return res.status(404).json({ message: 'Book not found' });
  
      await Book.deleteOne({ _id: req.params.id });
      res.status(200).json({ message: 'Book deleted successfully' });
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  };
  