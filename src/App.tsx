// ==========================================
// Imports
// ==========================================
import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';

// ==========================================
// App Component
// ==========================================
export default function App() {
  return <RouterProvider router={router} />;
}
