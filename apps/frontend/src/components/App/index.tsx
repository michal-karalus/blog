import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Home from '../Home';
import PostDetails from '../PostDetails';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 30 * (60 * 1000), // 30 mins
      cacheTime: 60 * (60 * 1000), // 60 mins
    },
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'post/:id',
    element: <PostDetails />,
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
