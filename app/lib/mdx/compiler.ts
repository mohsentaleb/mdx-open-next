import { evaluate, type EvaluateOptions } from "next-mdx-remote-client/rsc";
// Define a type for frontmatter with reading time
type Scope = {
  readingTime: {
    text: string;
    minutes: number;
    time: number;
    words: number;
  };
};

type Article = {
  title: string;
  lastUpdate?: string;
};

export default async function MDXCompiler(source: string) {
  const options: EvaluateOptions<Scope> = {
    mdxOptions: {
      rehypePlugins: [],
      remarkPlugins: [],
      format: "mdx",
    },
    parseFrontmatter: true,
  };

  const { content, frontmatter } = await evaluate<Article, Scope>({
    source,
    options,
    components: {},
  });

  return {
    content,
    frontmatter,
  };
}
