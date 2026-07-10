export const GITHUB_REPO = 'hars-21/reqsh';
export const GITHUB_BRANCH = 'main';

export interface DocEntry {
  slug: string;
  title: string;
  githubPath: string;
}

export const docs: DocEntry[] = [
  {
    slug: '',
    title: 'Introduction',
    githubPath: 'docs/introduction.md',
  },
  {
    slug: 'install',
    title: 'Installation',
    githubPath: 'docs/install.md',
  },
  {
    slug: 'usage',
    title: 'Usage',
    githubPath: 'docs/usage.md',
  },
  {
    slug: 'commands',
    title: 'Commands',
    githubPath: 'docs/commands.md',
  },
  {
    slug: 'variables',
    title: 'Variables',
    githubPath: 'docs/variables.md',
  },
  {
    slug: 'changelog',
    title: 'Changelog',
    githubPath: 'CHANGELOG.md',
  },
];

export function getDocBySlug(slug: string): DocEntry | undefined {
  return docs.find((d) => d.slug === slug);
}

export function getDocIndex(slug: string): number {
  return docs.findIndex((d) => d.slug === slug);
}
