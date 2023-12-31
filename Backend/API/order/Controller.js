const nodemailer = require("nodemailer");
var Mailgen = require('mailgen');
const { connect } = require("mongoose");
require("dotenv").config(); //for mongourl
const Orders = require('./Model')


const placeorder = async (req, res) => {
    const { items, totalBill, customerAddress, customerContact,customerId, customerName, customerEmail } = req.body
    // res.json({
    //     message:"yahan tak chal raha"
    // })
    if (!items || !totalBill || !customerAddress || !customerContact || !customerId || !customerName || !customerEmail) {
        res.status(403).json({ message: "Invalid payload" })
    }
    else {
        try {
            await connect(process.env.MONGO_URL)
            const order = await Orders.create({ items, totalBill, customerAddress, customerContact,customerId, customerName, customerEmail })





            //                                 EMAIL 
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
                    user: process.env.NODEMAILER_EMAIL,
                    pass: process.env.NODEMAILER_PASSWORD
                }
            });

            //MAIL GEN SETUP

            var mailGenerator = new Mailgen({
                theme: 'default',
                product: {
                    // Appears in header & footer of e-mails
                    name: 'Mailgen Banoqabil',
                    link: 'https://mailgen.js/'
                }
            });
            await transporter.sendMail({
                from: process.env.NODEMAILER_EMAIL, // sender address
                to: customerEmail, // list of receivers
                subject: "Hello ✔", // Subject line
                text: "Hello world?", // plain text body
                html: mailGenerator.generate({
                    body: {
                        name: customerName,
                        intro: 'Thank You for ordering from our sweet little store, Your order will be delivered soon',
                        table: {
                            data: [
                                {
                                    name: customerName,
                                    email: customerEmail,
                                    TrackingId: order._id,
                                    Address: customerAddress,
                                    Contact: customerContact
                                }
                            ]
                        },
                        outro: 'Please make sure the above mentioned details are correcrt , incase any mistake , you can contact us.'
                    }
                }), // html body
            });



            //          Back
            res.status(201).json({
                message: "Order Place Successfully",
                TrackingId: order._id          //abhi yeh jo humny order diya uski id tracking id kehlati
            })
        }
        catch (error) {
            res.status(500).json({ message: error.message })
        }
    }
}
//All orders
const allOrders = async (req, res) => {
    try {
        await connect(process.env.MONGO_URL)
        const orders = await Orders.find()
        res.json({ orders })

    }

    catch (error) {
        res.json(500).json({ message: error.message })
    }

}
//kisi bhi ek order ko track krwana by id   ORDER BY ID
const trackOrder = async (req, res) => {
    const { _id } = req.body
    try {
        await connect(process.env.MONGO_URL)
        const order = await Orders.findOne({ _id })
        res.json({order})
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
}
module.exports = { placeorder, allOrders,trackOrder }

