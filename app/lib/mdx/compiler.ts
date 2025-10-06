import { createCompiler, parseFrontmatter } from "@fumadocs/mdx-remote";

const compiler = createCompiler({
  development: true,
});

export default async function MDXCompiler(source: string) {
  const { frontmatter, content: mdxContent } = parseFrontmatter(source);

  // Compile the MDX content with fumadocs
  const compiled = await compiler.compile({
    source: mdxContent,
  });

  const MdxContent = compiled.body;

  return {
    MdxContent,
    frontmatter,
  };
}
