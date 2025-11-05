"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrderById = exports.createOrder = void 0;
const server_1 = require("./_generated/server");
const values_1 = require("convex/values");
exports.createOrder = (0, server_1.mutation)({
    args: {
        name: values_1.v.string(),
        email: values_1.v.string(),
        phone: values_1.v.string(),
        address: values_1.v.string(),
        city: values_1.v.string(),
        country: values_1.v.string(),
        zip: values_1.v.string(),
        paymentMethod: values_1.v.string(),
        items: values_1.v.array(values_1.v.object({
            id: values_1.v.string(),
            name: values_1.v.string(),
            price: values_1.v.number(),
            quantity: values_1.v.number(),
            image: values_1.v.string(),
        })),
        subtotal: values_1.v.number(),
        shipping: values_1.v.number(),
        vat: values_1.v.number(),
        grandTotal: values_1.v.number(),
        createdAt: values_1.v.string(),
    },
    handler: async (ctx, args) => {
        const orderId = await ctx.db.insert("orders", {
            ...args,
            createdAt: new Date().toISOString(),
        });
        return orderId;
    },
});
exports.getOrderById = (0, server_1.query)({
    args: { orderId: values_1.v.id("orders") },
    handler: async (ctx, args) => {
        const order = await ctx.db.get(args.orderId);
        if (!order)
            throw new Error("Order not found");
        return order;
    },
});
