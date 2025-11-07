export interface TOCItem {
  id: string;
  text: string;
  level: number;
  children?: TOCItem[];
}

export function generateTOC(content: string): TOCItem[] {
  const headings = content.match(/^#{1,6}\s+(.+)$/gm);
  if (!headings) return [];

  const toc: TOCItem[] = [];
  const stack: TOCItem[] = [];

  headings.forEach((heading) => {
    const level = heading.match(/^#+/)?.[0].length || 0;
    const text = heading.replace(/^#+\s+/, '').trim();
    const id = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-');

    const item: TOCItem = { id, text, level };

    // 스택에서 현재 레벨보다 낮은 항목들 제거
    while (stack.length > 0 && stack[stack.length - 1].level >= level) {
      stack.pop();
    }

    if (stack.length === 0) {
      toc.push(item);
    } else {
      const parent = stack[stack.length - 1];
      if (!parent.children) parent.children = [];
      parent.children.push(item);
    }

    stack.push(item);
  });

  return toc;
}

