import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    } = body;

    if (
      !razorpay_order_id ||
      !razorpay_payment_id ||
      !razorpay_signature
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Missing payment details.",
        },
        {
          status: 400,
        }
      );
    }

    const generatedSignature = crypto
      .createHmac(
        "sha256",
        process.env.RAZORPAY_KEY_SECRET!
      )
      .update(
        `${razorpay_order_id}|${razorpay_payment_id}`
      )
      .digest("hex");

    if (generatedSignature === razorpay_signature) {
      return NextResponse.json({
        success: true,
        message: "Payment verified successfully.",
      });
    }

    return NextResponse.json(
      {
        success: false,
        message: "Invalid payment signature.",
      },
      {
        status: 400,
      }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Verification failed.",
      },
      {
        status: 500,
      }
    );
  }
}