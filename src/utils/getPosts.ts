import { getCollection } from 'astro:content';

export interface PostNode {
  slug: string;
  title: string;
  children?: PostNode[];
}

export async function getPosts() {
  const posts = await getCollection('blog');
  return posts.sort((a, b) => 
    a.data.pubDate.valueOf() - b.data.pubDate.valueOf()
  );
}

export function buildPostTree(posts: Awaited<ReturnType<typeof getPosts>>): PostNode[] {
  const tree: PostNode[] = [];
  const map = new Map<string, PostNode>();

  // 모든 포스트를 맵에 추가
  posts.forEach((post) => {
    const slug = post.slug;
    const node: PostNode = {
      slug,
      title: post.data.title,
      children: [],
    };
    map.set(slug, node);
  });

  // 트리 구조 생성
  posts.forEach((post) => {
    const slug = post.slug;
    const parts = slug.split('/');
    
    if (parts.length === 1) {
      // 루트 레벨
      tree.push(map.get(slug)!);
    } else {
      // 하위 레벨 - 부모 찾기
      const parentSlug = parts.slice(0, -1).join('/');
      const parent = map.get(parentSlug);
      if (parent) {
        parent.children = parent.children || [];
        parent.children.push(map.get(slug)!);
      } else {
        // 부모가 없으면 루트에 추가
        tree.push(map.get(slug)!);
      }
    }
  });

  return tree;
}

