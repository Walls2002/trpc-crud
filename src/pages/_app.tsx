import { type AppType } from "next/app";

import { api } from "crud/utils/api";

import "crud/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default api.withTRPC(MyApp);
