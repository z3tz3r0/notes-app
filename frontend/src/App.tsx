import { createBrowserRouter, RouterProvider } from "react-router";
import { ThemeProvider } from "./components/theme-provider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>App Layout</h1>,
    children: [{ index: true, element: <h1>Landing</h1> }],
  },
]);

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
