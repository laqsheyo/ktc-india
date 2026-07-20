import { NextRequest, NextResponse } from "next/server";

// Hardcoded test credentials for reliability
const RAZORPAY_KEY_ID = process.env.RAZORPAY_KEY_ID || "rzp_test_TFip8ar2ihtAbp";
const RAZORPAY_KEY_SECRET = process.env.RAZORPAY_KEY_SECRET || "kwjs05r5raoqnd1a4drWCVws";

export async function POST(req: NextRequest) {
  try {
    const { amount } = await req.json();

    if (!amount) {
      return NextResponse.json({ error: "Amount is required" }, { status: 400 });
    }

    // Dynamically import razorpay
    const { default: Razorpay } = await import("razorpay");

    const razorpay = new Razorpay({
      key_id: RAZORPAY_KEY_ID,
      key_secret: RAZORPAY_KEY_SECRET,
    });

    const options = {
      amount: amount * 100, // convert to paise
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);

    return NextResponse.json({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
    });
  } catch (error: any) {
    console.error("Create order error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to create order", details: error.error?.description || "" },
      { status: 500 }
    );
  }
}