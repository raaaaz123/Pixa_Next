import React from 'react';

const RefundAndCancellationPolicyPage: React.FC = () => {
  return (
    <div className="container mx-auto p-5">
      <h1 className="text-2xl font-bold mb-5">Refund and Cancellation Policy</h1>
      <div className="text-sm">
        <p className="mb-3">
          Welcome to Pixa Ai's Refund and Cancellation Policy. This policy outlines our guidelines regarding refunds and cancellations of custom merchandise orders.
        </p>
        <p className="mb-3">
          <strong>1. Refund Eligibility</strong>
          <br />
          Customers may be eligible for a refund under the following circumstances:
          <ul className="list-disc ml-6 mb-3">
            <li>Defective or incorrect merchandise received.</li>
            <li>Order cancellation before production begins and approval is received.</li>
          </ul>
        </p>
        <p className="mb-3">
          <strong>2. Refund Timeframes</strong>
          <br />
          Refunds will be processed within 2-5 business days upon approval of the refund request.
        </p>
        <p className="mb-3">
          <strong>3. Refund Request Process</strong>
          <br />
          Customers must submit a refund request by contacting our customer support team at rexatechin@gmail.com. Please provide your order number and reason for the refund request.
        </p>
        <p className="mb-3">
          <strong>4. Cancellation Procedures</strong>
          <br />
          Customers can cancel their order before production begins and approval is received. Once production has started, cancellations may not be possible.
        </p>
        <p className="mb-3">
          <strong>5. Fees and Requirements</strong>
          <br />
          Pixa Ai reserves the right to charge a cancellation fee if applicable. Returned merchandise must be in its original condition and packaging to qualify for a refund.
        </p>
        <p className="mb-3">
          <strong>6. Contact Us</strong>
          <br />
          If you have any questions about our Refund and Cancellation Policy, please contact us at rexatechin@gmail.com
        </p>
      </div>
    </div>
  );
};

export default RefundAndCancellationPolicyPage;
