/*
* Defines the Sanity configuration for your project.
Specifies:
projectId and dataset (your Sanity project details).
title (displayed in the Sanity Studio UI).
apiVersion (to ensure API stability).
basePath: "/admin" (this means the admin panel is at /admin in your Next.js app).
plugins: [structureTool()] (adds structure management tools).
schema: { types: schemas } (links to your content schemas).
* */


import { defineConfig } from 'sanity';

import { structureTool } from "sanity/structure";

import schemas from "@/sanity/schemas";

const config = defineConfig({
    projectId: "g7sdq85u",
    dataset: "production",
    // title: "Domus Ektari",
    // apiVersion: "2025-02-23",
    basePath: "/admin",
    plugins: [structureTool()],
    schema: { types: schemas }
});

export default config;