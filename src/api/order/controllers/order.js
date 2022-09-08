'use strict';

/**
 * order controller
 */

const { createCoreController } = require('@strapi/strapi').factories;
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

module.exports = createCoreController('api::order.order',({strapi})=>({
    
    async create(ctx,next){
        const {amount, shippingAddresss , city, state,  pin , token  , items} = ctx.request.body
        console.log(process.env.STRIPE_SECRET_KEY);
        console.log(ctx);
        await stripe.charges.create({
            amount:amount*100,
            currency:"INR",
            source:token,
            description:`description of charge of ${amount*100} `
        })

        const order= await strapi.db.query('api::order.order').create({
            data:{
                shippingAddresss,
                city,
                state,
                pin,
                amount,
                user,
                items
            }
        })
        return  order ? order : "Error occoured"
    }

}));
