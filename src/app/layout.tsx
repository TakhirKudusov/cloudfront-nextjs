import type { Metadata } from "next";
import StyledComponentsRegistry from "@/lib/registry";
import GlobalStyles from "@/styles/global";
import Header from "@/UI kit/header";
import PageWrapper from "@/UI kit/pageWrapper";
import ParticlesBg from "@/UI kit/particlesBg";
import { Flip, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata: Metadata = {
  title: "Cloudfront",
  description: "Creative marketing agency",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <GlobalStyles />
          <Header />
          <PageWrapper>{children}</PageWrapper>
          <ToastContainer
            transition={Flip}
            autoClose={5_000}
            position="bottom-right"
            hideProgressBar={false}
            closeOnClick={true}
            pauseOnHover={true}
            draggable={true}
            theme="dark"
          />
          <ParticlesBg />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
