// 导航链接
export interface NavLink {
  /** 站点图标 */
  noIcon?: boolean;
  icon?: string | { svg: string };
  /** 站点徽章 */
  badge?:
    | string
    | {
        text?: string;
        type?: "info" | "tip" | "warning" | "danger";
      };
  /** 站点名称 */
  title: string;
  /** 站点描述 */
  desc?: string;
  /** 站点链接 */
  link: string;
}

// 卡片
export interface Card {
  /** 站点图标 */
  icon?: string | { svg: string };
  /** 站点名称 */
  title: string;
  /** 站点名称 */
  desc?: string;
  /** 站点链接 */
  link: string;
  /** 站点链接 */
  label?: array;
}
