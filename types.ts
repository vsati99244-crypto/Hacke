
export interface ContentItem {
  id: string;
  type: 'text' | 'image';
  title: string;
  payload: string;
  timestamp: number;
}

export enum ToolType {
  BLOG = 'blog',
  CAPTION = 'caption',
  CODE = 'code',
  IMAGE = 'image'
}
