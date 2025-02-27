/*
* This file sets up the Sanity Studio admin panel inside your Next.js app.
It uses NextStudio from next-sanity/studio to embed the Sanity CMS UI.
config is imported from sanity.config.ts to define settings for the admin panel.
When you visit /admin, this page renders the Sanity CMS interface.
* */


"use client";

import { NextStudio } from 'next-sanity/studio'
import config from "@/sanity.config";

export default function AdminPage() {
    return <NextStudio config = {config} />
}