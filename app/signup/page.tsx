"use client";
import { SignUp } from "@clerk/nextjs";
import React from "react";

function page() {
    return (
        <div className="flex items-center justify-center h-full">
            <SignUp routing="hash" />
        </div>
    );
}

export default page;