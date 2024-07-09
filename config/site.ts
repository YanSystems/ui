export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "abyan.dev",
  description: "Multi-purpose web client for Yan systems.",
  navItems: [
    {
      label: "Learn",
      href: "/learn",
      wip: true,
    },
    {
      label: "Teams",
      href: "/teams",
      wip: false,
    },
    {
      label: "Docs",
      href: "/docs",
      wip: false,
    },
  ],
  navMenuItems: [
    {
      label: "Learn",
      href: "/learn",
      wip: true,
    },
    {
      label: "Teams",
      href: "/teams",
      wip: false,
    },
    {
      label: "Docs",
      href: "/docs",
      wip: false,
    },
    {
      label: "Logout",
      href: "/logout",
      wip: false,
    }
  ],
  links: {
    github: "https://github.com/YanSystems",
    docs: "/docs",
  },
};
