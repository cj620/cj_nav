/*
 * @Description:社交媒体图标组件
 * @Date: 2021-05-07 00:06:35
 * @LastEditTime: 2021-10-07 18:29:30
 * @FilePath: \WarblerHomepage\src\components\SocialContact\index.ts
 */
export interface SocialContactProps {
  icon: string;
  title: string;
  targetUrl: string;
}

export type SocialContactList = SocialContactProps[];

export const initData: SocialContactList = [
  {
    icon: '&#xe61a;',
    title: 'github',
    targetUrl: 'https://github.com/cj620',
  },
  {
    icon: '&#xe60b;',
    title: 'gitee',
    targetUrl: 'https://gitee.com/cj6209577',
  },
  {
    icon: '&#xe603;',
    title: '掘金',
    targetUrl: 'https://juejin.cn/post/6963945204965441550',
  },
  {
    icon: ' &#xe640;',
    title: '我的博客',
    targetUrl: 'https://cj6209577.gitee.io/my-blog/',
  },
];
