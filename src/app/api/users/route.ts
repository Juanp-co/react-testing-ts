import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json([
        {
            id:1, username: 'Juan'
        },
        {
            id:2, username: 'Juana'
        },
        {
            id:3, username: 'Ruth'
        },
    ])
}