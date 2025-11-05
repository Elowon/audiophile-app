"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("convex/server");
const values_1 = require("convex/values");
exports.default = (0, server_1.defineSchema)({
    orders: (0, server_1.defineTable)({
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
    }),
});
