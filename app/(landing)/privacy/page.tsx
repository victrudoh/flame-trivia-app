"use client";

import React, { Suspense } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import TopSection from "@/components/topSection/page";
import MainContainer from "@/components/mainContainer/page";

const OneTopic = () => {
  const router = useRouter();

  const goBack = () => {
    // router.push("/auth/register");
    router.push("/auth/register");
  };

  return (
    <>
      {/* <div className="bg-brand-main py-8 text-brand-dark h-screen flex flex-col items-center justify-start text-lg font-geistsans gap-8"> */}
      <MainContainer>
        <TopSection>
          <div className="w-full flex items-center justify-start gap-8">
            <ArrowLeft
              className="bg-brand-white shadow-lg w-10 h-10 p-1 ml-4 rounded-full cursor-pointer hover:bg-brand-white/60 hover:text-brand-dark"
              onClick={goBack}
            />
            <span className="font-bold text-lg text-brand-white">
              Privacy Policy For Health9ja
            </span>
          </div>
        </TopSection>
        {/* bottom */}
        <div className="w-full rounded-xl bg-brand-white p-6 flex flex-col items-center justify-start gap-4 font-normal text-sm text-brand-grayish h-max ">
          <span className="max-w-[400px] pb-2 font-geistsans text-sm flex flex-col items-center justify-start">
            <span className="font-semibold text-sm my-2 w-full">
              Effective Date: 1st December, 2024
            </span>
            <h2 className="font-semibold text-sm mt-4 mb-2 w-full">
              Introduction
            </h2>
            <span>
              Welcome to <strong>Health9ja!</strong> This Privacy Policy
              explains how{" "}
              <strong>
                Digital Technocrats & FLAME-OF-HOPE CENTRE FOR POVERTY & DISEASE
                CONTROL
              </strong>{" "}
              (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) collects,
              uses, shares, and protects your information when you use our
              mobile application (the &quot;App&quot;) and related services.
              Your privacy is important to us, and we are committed to
              safeguarding your personal data.
            </span>
            <span className="my-2 w-full">
              By using Health9ja, you agree to the collection and use of
              information in accordance with this policy.
            </span>
            <hr className="w-full my-2" />
            <span className="my-2 flex flex-col gap-2">
              <h2 className="w-full font-semibold mb-1">
                1. Information We Collect{" "}
              </h2>
              <strong className="w-full mb-1">
                1.1. Information You Provide
              </strong>
              When you use the App, you may provide certain information,
              including but not limited to:
              <span>
                <strong>• Personal Information:</strong> Name, email address,
                age, gender, location, or any other information you voluntarily
                submit.
              </span>
              <span>
                <strong>• Health Information:</strong> Data related to HIV
                prevention, risk assessment, or related health metrics.{" "}
              </span>
              {/* ***** */}
              <strong className="w-full mt-2 mb-1">
                1.2. Automatically Collected Information
              </strong>
              We may automatically collect certain information about your device
              and usage of the App, including:
              <span>
                <strong>• Device Information: </strong>
                Device model, operating system, unique device identifiers, and
                mobile network information.
              </span>
              <span>
                <strong>• Log Information: </strong>IP address, app usage data,
                pages viewed, and other diagnostic data. • Location Data:
                Approximate or precise geolocation data (with your permission).{" "}
              </span>
            </span>
            <hr className="w-full my-2" />
            <span className="my-2 flex flex-col gap-2">
              <h2 className="w-full font-semibold mb-1">
                2. How We Use Your Information{" "}
              </h2>
              We use the collected information to:
              <span>• Provide, improve, and personalize the App.</span>
              <span>
                {" "}
                • Facilitate HIV prevention education and resources tailored to
                your needs.
              </span>
              <span>• Respond to user inquiries and provide support.</span>
              <span>• Analyze app usage and improve our services. </span>
              <span>
                • Send notifications and updates (you can opt out of
                non-essential communications).
              </span>
            </span>
            <hr className="w-full my-2" />
            <span className="my-2 flex flex-col gap-2">
              <h2 className="w-full font-semibold mb-1">
                3. How We Share Your Information
              </h2>
              We do not sell or rent your personal data. However, we may share
              information in the following situations:
              <span>
                • With Your Consent: When you explicitly agree to share your
                information.
              </span>
              <span>
                • Service Providers: With third-party vendors who assist in
                providing services (e.g., hosting, analytics).
              </span>
              <span>
                • Legal Requirements: If required by law or in response to a
                valid legal process.
              </span>
              <span>
                • To Protect Rights and Safety: When necessary to enforce our
                policies, protect the rights, privacy, safety, or property of
                users or others.
              </span>
            </span>
            <hr className="w-full my-2" />
            <span className="my-2 flex flex-col gap-2">
              <h2 className="w-full font-semibold mb-1">4. Data Security</h2>
              We implement appropriate technical and organizational measures to
              protect your personal data from unauthorized access, disclosure,
              alteration, or destruction. However, no system is completely
              secure, and we cannot guarantee the absolute security of your
              information.
            </span>
            <hr className="w-full my-2" />
            <span className="my-2 flex flex-col gap-2">
              <h2 className="w-full font-semibold mb-1">
                5. Your Rights and Choices
              </h2>
              You have certain rights regarding your personal information,
              including:
              <span>
                • Accessing, updating, or deleting your personal data.
              </span>
              <span>
                • Opting out of data collection for analytics or marketing.
              </span>
              <span>
                • Withdrawing consent for data processing (where applicable).
              </span>
              <span>
                To exercise these rights, please contact us at:
                flameofhopen@gmail.com.
              </span>
            </span>
            <hr className="w-full my-2" />
            <span className="my-2 flex flex-col gap-2">
              <h2 className="w-full font-semibold mb-1">
                {" "}
                6. Third-Party Services
              </h2>
              The App may contain links to third-party websites or services. We
              are not responsible for the privacy practices or content of these
              third-party services. Please review their privacy policies for
              more information.
            </span>
            <hr className="w-full my-2" />
            <span className="my-2 flex flex-col gap-2">
              <h2 className="w-full font-semibold mb-1">
                {" "}
                7. Children’s Privacy
              </h2>
              Our App is intended for users aged 14 and above. We do not
              knowingly collect personal information from children under 14. If
              we become aware of such data being collected, we will take steps
              to delete it.
            </span>
            <hr className="w-full my-2" />
            <span className="my-2 flex flex-col gap-2">
              <h2 className="w-full font-semibold mb-1">
                {" "}
                8. Changes to This Privacy Policy
              </h2>
              We may update this Privacy Policy from time to time. Any changes
              will be effective immediately upon posting the updated policy
              within the App. We encourage you to review this policy
              periodically.
            </span>
            <hr className="w-full my-2" />
            <span className="my-2 flex flex-col gap-2">
              <h2 className="w-full font-semibold mb-1"> 9. Contact Us</h2>
              If you have any questions about this Privacy Policy or our data
              practices, please contact us at:
              <strong>
                • FLAME-OF-HOPE CENTRE FOR POVERTY & DISEASE CONTROL
              </strong>
              <span>• Email: flameofhopen@gmail.com</span>
              <span>• Phone: +234-8034044418</span>
              <span>
                • Address: No. 42 Tafawa Balewa Street, Jos – Plateau state,
                Nigeria
              </span>
            </span>
            <hr className="w-full my-2" />
            <strong>
              By using Health9ja, you acknowledge that you have read and
              understood this Privacy Policy.
            </strong>
          </span>
        </div>
      </MainContainer>
    </>
  );
};

// export default OneTopic;

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OneTopic />
    </Suspense>
  );
}
