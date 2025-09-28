import React from "react";
import fs from 'fs';
import path from 'path';
import { MDXRemote } from 'next-mdx-remote/rsc';

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  
  try {
    const filePath = path.join(process.cwd(), 'app/articles/content', `${slug}.mdx`);
    console.log(filePath)
    const source = fs.readFileSync(filePath, 'utf8');
    
    return <MDXRemote source={source} />;
  } catch {
    return 'Article not found'
  }
}

export function generateStaticParams() {
  return [{ slug: "welcome" }];
}

export const dynamicParams = false;