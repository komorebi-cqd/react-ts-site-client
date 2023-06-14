
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from '@/components/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <h2>hello world</h2>
      }
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} fallbackElement={ <p>加载中......</p> }/>
  )
}

export default App