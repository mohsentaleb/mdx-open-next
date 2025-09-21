import MDXCompiler from "./lib/mdx/compiler";

async function getSource() {
  return `
  ---
  title: 'Test MDX content'
  lastUpdate: 'Sep 2025'
  ---
  # Hello World!
  `;
}

export default async function Home() {
  const source = await getSource();
  const { content } = await MDXCompiler(source);

  return <div>{content}</div>;
}
