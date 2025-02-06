import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";

const stripe = new Stripe(process.env.NEXT_PUBLIC_SECRET_API_TOKEN as string);

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { products } = body;

        if (!products || !Array.isArray(products) || products.length === 0) {
            return NextResponse.json({ error: "Invalid or empty products array" }, { status: 400 });
        }

        // Map products to line items for Stripe
        const lineItems = products.map((item) => {
            if (!item.name || !item.price || !item.quantity) {
                throw new Error("Invalid product data. Each product requires name, price, and quantity.");
            }
            return {
                price_data: {
                    currency: "usd",
                    product_data: {
                        name: item.name,
                    },
                    unit_amount: item.price * 100, // Stripe expects amounts in cents
                },
                quantity: item.quantity,
            };
        });

        // Create Stripe Checkout session
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: lineItems,
            mode: "payment",
            success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/payment/success`,
            cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/payment/cancel`,
        });

        return NextResponse.json({ id: session.id }, { status: 200 });
    } catch (error) {
        console.error("Stripe checkout error:", error);
        return NextResponse.json({ error: "Failed to create checkout session", details: error }, { status: 500 });
    }
}
