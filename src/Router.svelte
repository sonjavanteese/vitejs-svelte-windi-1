
<script context="module">
  let _routes = {};
  let props = {};
  const LoadRoute = async(path) => {
    const current = getRoute(path);
    component = (await current.component()).default;
    props = getProps(path, current.segments);
  };
  const getRouteSegments = routes =>
    Object.entries(routes).map(([path, component]) => ({
      path,
      component,
      segments: path
        .replace(/^\/+|\/+$/g, '')
        .split('/')
        .map(segment => ({
          name: segment.replace(':', ''),
          variable: segment.startsWith(':')
        }))
    }));
  const getRoute = path => {
    const segments = path.replace(/^\/+|\/+$/g, '').split('/');
    return _routes.find(route => {
      if(route.segments.length !== segments.length) return false;
      return segments.every((s, i) =>
        route.segments[i].name === s ||
        route.segments[i].variable
      );
    });
  };
  const getProps = (path, routeSegments) => {
    let props = {};
    const segments = path.replace(/^\/+|\/+$/g, '').split('/');
    segments.map((s, i) =>
      routeSegments[i].variable &&
      (props[routeSegments[i].name] = s)
    );
    return props;
  };
  export const navigate = path => {
    window.history.pushState(null, null, path);
    LoadRoute(path);
  };
  window.onpopstate = () => LoadRoute(location.pathname);
</script>

<script>
  import {onMount} from "svelte";
  let component;
  export let routes = {};
  onMount(() => {
    _routes = getRouteSegments(routes);
    LoadRoute(location.pathname);
  });
</script>

<svelte:component this={component} {...props}/>
