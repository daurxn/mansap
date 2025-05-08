
const REQUIRED_AUTH_PATHS = ["/job-postings"];

export default defineNuxtRouteMiddleware((to) => {
  const token = useCookie("token");

  if (token.value && to?.path === "/auth") {
    return navigateTo("/");
  }

  if (!token.value && REQUIRED_AUTH_PATHS.includes(to.path)) {
    abortNavigation();
    return navigateTo("/auth");
  }
});
