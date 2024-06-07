import "@styles/globals.css";

import { Nav, Provider } from "@components";

export const metadata = {
  title: "cue",
  description: "Explore and share elegant AI prompts",
  icons: {
    icon: "/images/favicon.ico",
  },
};
const Rootlayout = ({ children }) => {
  return (
    <html lang="en">
      {/* <Head>
      <link rel="shortcut icon" href="/images/favicon.ico" />
    </Head> */}
      <body>
      <link rel="icon" href="/images/favicon.ico" sizes="any" />
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>

          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default Rootlayout;
