// utils/shouldHideHeader.ts
export const shouldHideHeader = (pathname: string): boolean => {
    const hiddenHeaderRoutes = ['/design', '/login', '/signup'];
    return hiddenHeaderRoutes.includes(pathname);
  };
  
  export const shouldHideBreadcrumbs = (pathname: string): boolean => {
    const hiddenBreadcrumbsRoutes = ['/', '/login', '/signup', '/design'];
    return hiddenBreadcrumbsRoutes.includes(pathname);
  };