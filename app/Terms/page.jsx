import Image from "next/image";
import React from "react";
import Term from "../../public/terms.jpg";

const Terms = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-4">Terms and Conditions</h1>
          <p className="text-gray-600">Effective Date: January 2024</p>
        </div>

        {/* Image Section */}
        <div className="mb-10">
          <Image
            src={Term}
            alt="Terms and Conditions Image"
            className="lg:w-[70%] w-full mx-auto h-[35vh] rounded-lg"
            height={400}
          />
        </div>

        {/* Content Section */}
        <div className=" max-w-4xl mx-auto text-gray-700">
          <h2 className="py-2 font-extrabold text-3xl">Introduction</h2>
          <p>
            Welcome to [Your Adult Care Home Name]. These Terms and Conditions
            govern the services provided by us and outline the responsibilities
            of the care home and the residents (or their legal representatives).
            By signing our admission agreement or using our services, you agree
            to these terms.
          </p>

          <h2 className="py-2 font-extrabold text-3xl">Services Provided</h2>
          <p>We provide the following services to all residents:</p>
          <ul>
            <li>24/7 supervision and assistance.</li>
            <li>Personal care (e.g., bathing, grooming, dressing).</li>
            <li>Meal preparation and dietary accommodations.</li>
            <li>Medication management and administration.</li>
            <li>Social and recreational activities.</li>
            <li>Housekeeping and laundry services.</li>
          </ul>

          <h2 className="py-2 font-extrabold text-3xl">
            Resident Responsibilities
          </h2>
          <p>Residents and/or their legal representatives are expected to:</p>
          <ul>
            <li>Provide accurate medical and personal information.</li>
            <li>
              Notify us of any changes in health, medication, or care needs.
            </li>
            <li>
              Respect the privacy and rights of other residents and staff.
            </li>
            <li>Comply with all care home policies and procedures.</li>
          </ul>

          <h2 className="py-2 font-extrabold text-3xl">Fees and Payment</h2>
          <p>
            The cost of services is outlined in the admission agreement. Fees
            are payable monthly, in advance. Failure to pay may result in
            termination of services. Additional charges may apply for:
          </p>
          <ul>
            <li>Specialized medical equipment or services.</li>
            <li>Damage to property caused by the resident.</li>
            <li>
              Additional staff or care services beyond the standard agreement.
            </li>
          </ul>

          <h2 className="py-2 font-extrabold text-3xl">
            Admission and Discharge
          </h2>
          <p>Residents may be discharged under the following circumstances:</p>
          <ul>
            <li>Non-compliance with policies or terms of agreement.</li>
            <li>Medical needs exceed the care home’s capabilities.</li>
            <li>Non-payment of fees after repeated notices.</li>
          </ul>
          <p>
            Written notice of at least 30 days will be provided unless an
            immediate discharge is necessary for safety reasons.
          </p>

          <h2 className="py-2 font-extrabold text-3xl">Privacy Policy</h2>
          <p>
            All personal and medical information of residents is kept
            confidential in accordance with state and federal laws, including
            HIPAA. Information will only be shared with authorized individuals
            or entities.
          </p>

          <h2 className="py-2 font-extrabold text-3xl">
            Liability and Indemnity
          </h2>
          <p>
            While we take every precaution to ensure the safety and well-being
            of our residents, [Your Adult Care Home Name] is not liable for:
          </p>
          <ul>
            <li>
              Injuries or accidents caused by circumstances beyond our control.
            </li>
            <li>Loss of personal belongings unless due to staff negligence.</li>
            <li>Unauthorized actions of visitors or other residents.</li>
          </ul>

          <h2 className="py-2 font-extrabold text-3xl">
            Modifications to Terms
          </h2>
          <p>
            We reserve the right to modify these terms at any time. Updates will
            be communicated to residents or their legal representatives in
            writing. Continued use of our services constitutes acceptance of the
            revised terms.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
