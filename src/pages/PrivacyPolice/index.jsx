/* eslint-disable react/no-unescaped-entities */
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

export function PrivacyPolice() {
  return (
    <>
      <Header />
      <section className="mx-4 flex max-w-[1200px] flex-col gap-4 px-4 py-12 text-justify sm:m-auto">
        <h1 className="text-center font-serif text-3xl font-medium">
          Privacy Policy
        </h1>
        <span className="text-center text-xs">Last Updated: 28/12/2023</span>
        <p className="mt-4">
          Chartify is committed to protecting your privacy. This Privacy Policy
          explains how we collect, use, disclose, and safeguard your information
          when you visit our application. By using our application, you consent
          you agree to our Privacy Policy.
        </p>
        <p>
          Chartify is not affiliated with Spotify or Spotify AB. Spotify is a
          registered trademark of Spotify AB. For more information, please visit
          the{" "}
          <a
            href="https://www.spotify.com/us/legal/privacy-policy/"
            className="text-indigo-400 hover:underline"
          >
            Spotify Privacy Policy
          </a>
          .
        </p>
        <h2 className="mt-4 text-center font-serif text-xl">
          Informations Collected
        </h2>
        <p>
          We do not collect and store any personal information about you. We
          only collect information from your Spotify account to provide you with
          the Chartify services. The information we collect is described below:
        </p>
        <ul className="flex list-inside list-disc flex-col gap-4">
          <li>
            <span className="font-bold">Spotify Authentication Data:</span> To
            provide the core functionality of the application, we request access
            to your Spotify account to retrieve information about your most
            played artists and songs.
          </li>
          <li>
            <span className="font-bold">Profile Information:</span> We may
            collect information from your Spotify profile, such as username and
            profile picture, to personalize your experience in the application.
          </li>
        </ul>
        <h2 className="mt-4 text-center font-serif text-xl">
          Use of Information
        </h2>
        <p>
          All data is retrieved from Spotify and displayed to you in real-time.
          We do not share your data with any third parties. We do not use your
          data for any other purpose than to provide you with the Chartify
          service.
        </p>
        <p>
          You can revoke Chartify's access to your Spotify account at any time
          by visiting your{" "}
          <a
            href="https://www.spotify.com/account/apps/"
            className="text-indigo-400 hover:underline"
          >
            Spotify's App Settings
          </a>{" "}
          and clicking on the "Remove Access" button.
        </p>
      </section>
      <Footer />
    </>
  );
}
