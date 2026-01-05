// Libraries
import { useState } from "react";

// Components
import { Button } from "@components/ui/button";
import { Layout } from "@components/custom-ui/layout";
import { ModeToggle } from "@components/custom-ui/mode-toggle";
import { ThemeProvider } from "@components/custom-ui/theme-provider";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Layout>
        <div className="flex min-h-svh flex-col items-center justify-center">
          <Button
            variant="outline"
            onClick={() => setCount((count) => count + 1)}
          >
            count is {count}
          </Button>
          <ModeToggle />
        </div>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
