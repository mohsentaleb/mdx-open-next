import { createCompiler, parseFrontmatter } from "@fumadocs/mdx-remote";

const compiler = createCompiler({
  development: process.env.NODE_ENV === "development",
  // Explicitly set JSX runtime
  jsx: true,
  jsxImportSource: "react",
});

export default async function MDXCompiler(source: string) {
  const { frontmatter, content: mdxContent } = parseFrontmatter(source);

  const compiled = await compiler.compile({
    source: mdxContent,
  });

  const MdxContent = compiled.body;

  return {
    MdxContent,
    frontmatter,
  };
}