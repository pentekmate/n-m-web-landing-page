
import { Suspense } from "react";

import Loading from "../_Components/Loading";


export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <Suspense fallback={<Loading></Loading>}>
                <body>{children}</body>
        </Suspense>
    </html>
  );
}
