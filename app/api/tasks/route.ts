import { NextResponse } from "next/server"
import { auth } from "@clerk/nextjs/server";
import prisma from "@/app/utils/connect";

export async function POST(req: Request){
    try{
        const { userId } = auth();
        if(!userId){
            return NextResponse.json({error: "Unauthorized", status: 401})
        }
        
        const {title, description, date, completed, important} = await req.json();

        if(!title || !description || !date){
            return NextResponse.json({error: "Missing required fields", status: 400})
        }

        if(title.length < 3){
            return NextResponse.json({error: "Title must be at least 3 characters long", status: 400})
        }

        const task = await prisma.task.create({
            data: {
                title,
                description,
                date,
                isCompleted: completed,
                isImportant: important,
                userId,
            },
        });

        return NextResponse.json(task);

    }catch (error){
        console.error("Creating " + error)
        return NextResponse.json({ error:"Error creating task", status: 500});
    }
}

export async function GET(req: Request){
    try{
        
    }catch (error){
        console.error("Getting " + error)
        return NextResponse.json({ error:"Error creating task", status: 500});
    }
}

export async function PUT(req: Request){
    try{
        
    }catch (error){
        console.error("Updating " + error)
        return NextResponse.json({ error:"Error creating task", status: 500});
    }
}

export async function DELETE(req: Request){
    try{
        
    }catch (error){
        console.error("Deleting " + error)
        return NextResponse.json({ error:"Error creating task", status: 500});
    }
}