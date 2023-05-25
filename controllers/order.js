const Order = require('../model/order');


exports.getAllOrders = async(req, res) => {
    try{
        const limitValue = req.query.limit || 2;
        const skipValue = req.query.skip || 0;
        const order = new Order.find().limit(limitValue).skip(skipValue);
        res.json(order);
    } catch(err){
        res.status(500).json({message: err.message});
    }
}



exports.createOrder = async(req,res) => {
    const order = new Order({
        userId: req.body.userId,
        BookId: req.body.BookId,
        totalPrice: req.body.totalPrice,
        quantity: req.body.quantity
    })

    try{
        const newOrder = await order.save();
        res.status(201).json(newOrder);
    }catch(err){
        res.status(400).json({message: err.message});
    }
}



