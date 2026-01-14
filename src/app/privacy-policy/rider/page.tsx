export default function RiderPrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-[#0088B1] text-white py-8">
        <div className="mx-auto max-w-4xl px-6">
          <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-white/90">Mediversal Rider Application</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-4xl px-6 py-8">
        <div className="bg-white shadow-sm rounded-lg p-8">
          {/* Last Updated */}
          <div className="mb-8 pb-6 border-b border-gray-200">
            <p className="text-sm text-gray-500">
              <strong>Last updated:</strong> 14 January 2026
            </p>
          </div>

          {/* Introduction */}
          <div className="mb-8">
            <p className="text-gray-700 mb-4 leading-relaxed">
              Mediversal Healthcare Pvt. Ltd. (&quot;Mediversal&quot;,
              &quot;we&quot;, &quot;our&quot;, &quot;us&quot;) respects your
              privacy and is committed to safeguarding your personal
              information. This Privacy Policy explains how we collect, use,
              disclose, secure, and retain information when you use the
              Mediversal Rider mobile application.
            </p>
            <div className="bg-blue-50 border-l-4 border-[#0088B1] p-4 rounded">
              <p className="text-gray-700">
                <strong>Note:</strong> This app is intended only for authorized
                internal delivery riders engaged with Mediversal for medicine
                delivery and healthcare service fulfillment.
              </p>
            </div>
          </div>

          {/* Section 1 */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <span className="w-1.5 h-6 bg-[#0088B1] mr-3 rounded"></span>
              Information We Collect
            </h2>
            <div className="ml-5 space-y-2 text-gray-700">
              <p>• Personal details (name, mobile number, rider profile)</p>
              <p>• Order and delivery-related information</p>
              <p>• Revenue, earnings, and payout details</p>
              <p>• Device and application usage data</p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <span className="w-1.5 h-6 bg-[#0088B1] mr-3 rounded"></span>
              Location Information
            </h2>
            <p className="text-gray-700 mb-4 ml-5 leading-relaxed">
              The app collects foreground and background location data during
              active delivery operations to:
            </p>
            <div className="ml-5 space-y-2 text-gray-700 mb-4">
              <p>• Display customer pickup and delivery locations</p>
              <p>• Enable navigation and route optimization</p>
              <p>• Track delivery progress and confirm completion</p>
              <p>• Ensure safety, accountability, and fraud prevention</p>
            </div>
            <div className="ml-5 bg-amber-50 border-l-4 border-amber-400 p-4 rounded">
              <p className="text-gray-700 text-sm">
                Location data is collected only when required for delivery
                activities and is not used for advertising or marketing.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <span className="w-1.5 h-6 bg-[#0088B1] mr-3 rounded"></span>
              Use of Information
            </h2>
            <p className="text-gray-700 ml-5 leading-relaxed">
              Collected information is used solely for managing delivery
              operations, maintaining rider accounts, calculating earnings,
              improving service quality, and complying with legal obligations.
            </p>
          </section>

          {/* Section 4 */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <span className="w-1.5 h-6 bg-[#0088B1] mr-3 rounded"></span>
              Data Sharing
            </h2>
            <p className="text-gray-700 ml-5 leading-relaxed">
              Mediversal does not sell personal data. Information may be shared
              internally within Mediversal systems or with government and
              regulatory authorities when required by law.
            </p>
          </section>

          {/* Section 5 */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <span className="w-1.5 h-6 bg-[#0088B1] mr-3 rounded"></span>
              Data Security & Retention
            </h2>
            <p className="text-gray-700 ml-5 leading-relaxed">
              We implement appropriate technical and organizational measures to
              protect personal data. Information is retained only for as long as
              necessary to fulfill operational, legal, or regulatory
              requirements.
            </p>
          </section>

          {/* Section 6 */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <span className="w-1.5 h-6 bg-[#0088B1] mr-3 rounded"></span>
              Your Rights
            </h2>
            <p className="text-gray-700 ml-5 leading-relaxed">
              You may access, update, or request correction of your information
              and may request account deactivation through Mediversal support,
              subject to applicable laws.
            </p>
          </section>

          {/* Legal Compliance */}
          <div className="mb-8 bg-gray-50 p-5 rounded-lg border border-gray-200">
            <p className="text-sm text-gray-600 leading-relaxed">
              We process personal data in accordance with the{" "}
              <strong>Digital Personal Data Protection Act, 2023</strong>,
              applicable Indian laws, and industry best practices.
            </p>
          </div>

          {/* Contact Section */}
          <section className="pt-6 border-t border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <span className="w-1.5 h-6 bg-[#0088B1] mr-3 rounded"></span>
              Contact Us
            </h2>
            <div className="ml-5 bg-[#0088B1]/5 p-5 rounded-lg border border-[#0088B1]/20">
              <p className="text-gray-900 font-semibold mb-2">
                Mediversal Healthcare Pvt. Ltd.
              </p>
              <p className="text-gray-700">
                Email:{" "}
                <a
                  href="mailto:support@mediversal.com"
                  className="text-[#0088B1] hover:underline font-medium"
                >
                  support@mediversal.com
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-800 text-white py-6 mt-12">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm text-gray-300">
            © 2026 Mediversal Healthcare Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </main>
  );
}
