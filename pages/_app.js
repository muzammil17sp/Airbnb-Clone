import "tailwindcss/tailwind.css";
import "../style/global.css";
import Router from "next/router"
import ProgressBar from "@badrap/bar-of-progress";
const progress = new ProgressBar({
  size: 4,
  color: "#FD5861",
  className: "z-20",
  delay: 60,
});
Router.events.on("routeChangeStart", progress.start)
Router.events.on("routeChangeComplete",progress.finish)
Router.events.on("routeChangeError",progress.finish)
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
