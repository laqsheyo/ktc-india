import { NextResponse } from "next/server";
import Razorpay from "razorpay";

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      amount,
      currency = "INR",
      receipt,
    } = body;

    if (!amount) {
      return NextResponse.json(
        { error: "Amount is required." },
        { status: 400 }
      );
    }

    const options = {
      amount: Number(amount) * 100, // Razorpay expects paise
      currency,
      receipt:
        receipt ||
        `receipt_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);

    return NextResponse.json(order);

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Unable to create Razorpay order.",
      },
      {
        status: 500,
      }
    );
  }
}