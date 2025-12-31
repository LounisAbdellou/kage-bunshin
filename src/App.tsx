import { useState } from "react";
import { Button } from "./components/ui/button";
import { ThemeProvider } from "./components/theme-provider";
import { ModeToggle } from "./components/mode-toggle";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex min-h-svh flex-col items-center justify-center">
        <Button
          variant="outline"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </Button>
        <ModeToggle />
      </div>
    </ThemeProvider>
  );
}

export default App;
