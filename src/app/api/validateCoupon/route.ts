// pages/api/validateCoupon.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    // Only allow POST requests
    if (req.method !== 'POST') {
        return new Response(JSON.stringify({ error: 'Method not allowed' }), {
            status: 405,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    const body = await req.json(); // Parse the incoming request body
    const couponKey = body.trimmedCouponKey;
    const secretKey = process.env.COUPON_KEY; // Environment variable for your secret key

    // Validate the coupon key
    if (couponKey === secretKey) {
        // If the coupon key is valid, return a response with status 200
        return new Response(JSON.stringify({ success: true }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } else {
        // If the coupon key is invalid, return a response with status 401
        return new Response(JSON.stringify({ success: false, error: 'Invalid coupon key' }), {
            status: 401,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}
