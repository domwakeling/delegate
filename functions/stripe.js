const stripe = require("stripe")(process.env.STRIPE_SECRET);

const rootUrl = "https://delegate-site.netlify.app/"

exports.handler = async (event, context) => {

    console.log(event)
    console.log(context)

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [
            {
                price_data: {
                    currency: "gbp",
                    product_data: {
                        name: "coffee",
                    },
                    unit_amount: 200,
                },
                quantity: 1,
            },
        ],
        mode: "payment",
        success_url: `${rootUrl}payment/success`,
        cancel_url: `${rootUrl}payment/cancel`,
    });

    return {
        statusCode: 303,
        body: "User created",
        headers: {
            Location: session.url
        },
    };
};