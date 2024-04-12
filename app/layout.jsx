import "@styles/globals.css";

export const metadata = {
  title: "cue",
  description: "Explore and share elegant AI prompts",
};
const Rootlayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default Rootlayout;
