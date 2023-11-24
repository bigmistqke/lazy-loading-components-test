import { For, Suspense, VoidComponent, createResource, type Component } from 'solid-js';

const App: Component = () => {
  const [tabs] = createResource<VoidComponent[]>(() => Promise.all(["tab1", "tab2"].map(tab => import('./tabs/' + tab).then(module => module.default))))
  
  return (
    <Suspense>
      <For each={tabs()}>{
        (Tab) => <Tab/>
      }</For>
    </Suspense>
  );
};

export default App;
