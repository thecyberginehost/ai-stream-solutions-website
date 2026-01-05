export default function CriticalCSS() {
  // Inline critical CSS to reduce render blocking
  return (
    <style
      id="critical-css"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{
        __html: `/* Critical CSS for above-the-fold content */
body {
  margin: 0;
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif;
}

.header {
  position: sticky;
  top: 0;
  z-index: 50;
  background-color: white;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.hero {
  background: linear-gradient(to bottom right, #1e293b, #0f172a);
  color: white;
  position: relative;
  overflow: hidden;
}

/* Add more critical styles as needed */`,
      }}
    />
  )
}
