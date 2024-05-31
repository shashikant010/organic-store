import dbConnect from "@/lib/dbConnect";
import { NextResponse } from "next/server";
export async function GET(request:Request){
    console.log("hello")
    await dbConnect()
    return Response.json({hello:"hello"})
}