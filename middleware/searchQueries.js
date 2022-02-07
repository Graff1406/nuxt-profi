export default function({ store, redirect, route }) {
  const queries = Object.entries(store.state.search).map(
    ([key, value]) => `${key}=${value}&`
  );
  // const routeWithSetQuery = { ...route, query: { ...route.query, queries } };
  // router.push(routeWithSetQuery);
  // redirect({ path: `/?${queries}` });
}
