const Cart =  require('../model/cart');

exports.createCart = async(req, res) => {
    const cart = new Cart({
         userId: req.body.userId,
         bookId: req.body.bookId,
         name: req.body.name
        })
        try{
            const newCart = await cart.save();
            res.status(201).json(newCart);
        }catch(err){
        console.error(err);
    }
};

exports.deleteCart = async(req, res) => {
    try{
        const cart = await Cart.findById(req.params.id);
        if(!cart) return res.status(404).json({message: "Not found"});
        await Cart.deleteOne({ _id: req.params.id });
        res.status(200).json({message: "Cart deleted successfully"});
    }catch(err){
        res.status(404).json({message:err.message});
    }
};

