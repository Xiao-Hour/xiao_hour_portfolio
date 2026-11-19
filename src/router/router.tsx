// ==========================================
// Imports
// ==========================================
import { createBrowserRouter } from 'react-router-dom';
import TopBarLayout from '../components/TopBarLayout';
import Home       from '../views/home/Home';
import About      from '../views/about/About';
import Projects   from '../views/project/Projects';
import Experience from '../views/experience/Experience';
import Contact    from '../views/contact/Contact';

// ==========================================
// 404 Fallback
// ==========================================
function NotFound() {
  return (
    <div
      className="min-h-[60vh] flex flex-col items-center justify-center gap-4 text-center px-6"
      style={{ color: 'var(--color-text-secondary)' }}
    >
      <span className="label-mono" style={{ color: 'var(--color-accent)' }}>404</span>
      <h1 className="text-4xl font-black" style={{ color: 'var(--color-text-primary)' }}>
        Page not found.
      </h1>
      <a
        href="/"
        className="label-mono underline transition-colors duration-200"
        style={{ color: 'var(--color-accent)' }}
      >
        Go home
      </a>
    </div>
  );
}

// ==========================================
// Router Configuration
// ==========================================
export const router = createBrowserRouter([
  {
    path: '/',
    element: <TopBarLayout />,
    children: [
      { index: true,           element: <Home /> },
      { path: 'projects',      element: <Projects /> },
      { path: 'about',         element: <About /> },
      { path: 'experience',    element: <Experience /> },
      { path: 'contact',       element: <Contact /> },
      { path: '*',             element: <NotFound /> },
    ],
  },
]);
