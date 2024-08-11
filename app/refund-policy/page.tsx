"use client";
import React from 'react';

const RefundCancellationPolicy = () => {
  return (
    <div className="container">
      {/* Header */}
      <div className="header">
        <h1 className="header-title">Refund & Cancellation Policy</h1>
      </div>

      {/* Scrollable Content */}
      <div className="content">
        <section className="section">
          <h2 className="section-title">PAYMENTS</h2>
          <p className="section-content">
            Our app accepts Debit Cards, Credit Cards, NetBanking, & Wallets for payments.
          </p>
        </section>

        <section className="section">
          <h2 className="section-title">SHIPPING</h2>
          <p className="section-content">
            We offer shipping to cities all over India. Customers usually receive their orders within 7-8 working days. The customer is responsible for any import duty that may be levied upon their order.
          </p>
          <p className="section-content">
            If you have any questions about the expected delivery period for your address, please contact us.
          </p>
        </section>

        <section className="section">
          <h2 className="section-title">RETURNS</h2>
          <p className="section-content">
            Our app offers a replacement guarantee only if the product received is damaged or defective. Please contact us within 3 days of receiving your order if you would like to have it replaced. We do not exchange products if the customer has ordered a wrong item.
          </p>
          <p className="section-content">
            Return/exchange will not be applicable if the product is disliked by the customer or if a wrong product was ordered. Replacements or refunds can be requested if the item is physically damaged, has missing parts, is different from its description, or is defective. Proof must be provided through an unboxing video.
          </p>
        </section>

        <section className="section">
          <h2 className="section-title">CANCELLATION OF ORDERS</h2>
          <p className="section-content">
            You may request to cancel your order for a refund within 2 hours of placing the order. All cancellation requests will be accepted within 2 hours, and we will initiate a refund to your original payment method, deducting a Rs. 60 processing fee.
          </p>
          <p className="section-content">
            Cancellations after 2 hours will not be accepted. If you placed an order without uploading a picture for a customized cover, we will email you for the picture. If no picture is provided within a week, the order will proceed without that particular cover, and no refund will be issued.
          </p>
        </section>
      </div>

      <style jsx>{`
        .container {
          padding: 16px;
          background-color: #ffffff;
          max-width: 800px;
          margin: 0 auto;
        }
        .header {
          padding: 16px 0;
          border-bottom: 1px solid #dddddd;
        }
        .header-title {
          font-size: 24px;
          font-weight: bold;
          color: #333333;
        }
        .content {
          margin-top: 16px;
        }
        .section {
          margin-bottom: 24px;
        }
        .section-title {
          font-size: 20px;
          font-weight: bold;
          color: #000000;
          margin-bottom: 8px;
        }
        .section-content {
          font-size: 16px;
          color: #333333;
          margin-bottom: 16px;
          line-height: 1.5;
        }
      `}</style>
    </div>
  );
};

export default RefundCancellationPolicy;
