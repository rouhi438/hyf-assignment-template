import { Footer } from "./Footer";
import { Header } from "./Header";

export function Layout({ children }) {
  return (
    <div className="app-layout">
      <Header />
      <main className="main-content">{children}</main>
      <Footer />
    </div>
  );
}
