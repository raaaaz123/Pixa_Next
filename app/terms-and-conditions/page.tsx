import React from 'react';

const TermsAndConditionsPage = () => {
  return (
    <div style={styles.container}>
      {/* Title */}
      <h1 style={styles.title}>Terms &amp; Conditions</h1>

      {/* Introduction */}
      <p style={styles.paragraph}>
        Welcome to Pixa AI! These terms and conditions outline the rules and regulations for the use of our custom merchandise purchasing platform, accessible via our mobile application and website.
      </p>
      <p style={styles.paragraph}>
        By accessing this platform, we assume you accept these terms and conditions. Do not continue to use Pixa AI if you do not agree to all of the terms and conditions stated on this page.
      </p>

      {/* Custom Merchandise Orders */}
      <h2 style={styles.subtitle}>1. Custom Merchandise Orders</h2>
      <p style={styles.paragraph}>
        1.1. Order Placement: Users may place orders for custom merchandise through the Pixa AI app. Each order constitutes an offer to purchase products in accordance with these terms.
      </p>
      <p style={styles.paragraph}>
        1.2. Customization: Users are responsible for providing accurate customization details (such as designs, sizes, colors, etc.) during the order process. Pixa AI is not responsible for errors made by the user in customization instructions.
      </p>
      <p style={styles.paragraph}>
        1.3. Approval: Users are required to approve final designs and specifications before production begins. Pixa AI will not proceed with production until approval is received.
      </p>

      {/* AI Avatar Generation */}
      <h2 style={styles.subtitle}>2. AI Avatar Generation</h2>
      <p style={styles.paragraph}>
        2.1. User Photos: Pixa AI allows users to generate AI avatars using their photos. We do not share your photos with any third parties. After the AI avatar generation process is complete, your photos will be securely deleted from our servers.
      </p>
      <p style={styles.paragraph}>
        2.2. Avatar Customization: Users can customize their AI avatars as part of the merchandise ordering process. Pixa AI is not responsible for any discrepancies resulting from the customization process.
      </p>

      {/* Payment */}
      <h2 style={styles.subtitle}>3. Payment</h2>
      <p style={styles.paragraph}>
        3.1. Payment Methods: Payments for orders must be made through the payment methods provided on the Pixa AI app.
      </p>
      <p style={styles.paragraph}>
        3.2. Authorization: By submitting an order, users authorize Pixa AI to charge the designated payment method for the total amount of the order, including any applicable taxes and fees.
      </p>

      {/* Shipping and Delivery */}
      <h2 style={styles.subtitle}>4. Shipping and Delivery</h2>
      <p style={styles.paragraph}>
        4.1. Shipping: Pixa AI will ship orders to the address provided by the user during the order process. It is the user's responsibility to ensure the accuracy of shipping information.
      </p>
      <p style={styles.paragraph}>
        4.2. Delivery Times: Estimated delivery times are provided for guidance only and are not guaranteed. Delays may occur due to factors beyond Pixa AI's control, such as shipping carrier delays or customs clearance processes.
      </p>

      {/* Returns and Refunds */}
      <h2 style={styles.subtitle}>5. Returns and Refunds</h2>
      <p style={styles.paragraph}>
        5.1. Return Policy: Pixa AI accepts returns and offers refunds or replacements for defective or incorrect merchandise. Users must notify Pixa AI of any issues with the merchandise within 7 days of delivery.
      </p>
      <p style={styles.paragraph}>
        5.2. Conditions: Returned merchandise must be in its original condition and packaging. Pixa AI reserves the right to refuse returns that do not meet these criteria.
      </p>

      {/* Intellectual Property */}
      <h2 style={styles.subtitle}>6. Intellectual Property</h2>
      <p style={styles.paragraph}>
        6.1. Ownership: Users retain ownership of any intellectual property rights (such as designs or logos) that they submit for customization. By submitting such content, users grant Pixa AI a non-exclusive, royalty-free license to use, reproduce, and modify the content for the purpose of fulfilling the user's order.
      </p>

      {/* Limitation of Liability */}
      <h2 style={styles.subtitle}>7. Limitation of Liability</h2>
      <p style={styles.paragraph}>
        7.1. Disclaimer: Pixa AI makes no representations or warranties of any kind, express or implied, regarding the quality, suitability, or accuracy of the custom merchandise offered through the platform.
      </p>
      <p style={styles.paragraph}>
        7.2. Limitation: In no event shall Pixa AI be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in any way connected with the use or inability to use the Pixa AI platform or the custom merchandise purchased through it.
      </p>

      {/* Governing Law */}
      <h2 style={styles.subtitle}>8. Governing Law</h2>
      <p style={styles.paragraph}>
        8.1. Jurisdiction: These terms and conditions shall be governed by and construed in accordance with the laws of Indian Legal Laws, without regard to its conflict of law provisions.
      </p>

      {/* Changes to Terms */}
      <h2 style={styles.subtitle}>9. Changes to Terms</h2>
      <p style={styles.paragraph}>
        9.1. Modification: Pixa AI reserves the right to modify these terms and conditions at any time. Users will be notified of any changes through the app or website. Continued use of the platform after such modifications constitutes acceptance of the revised terms.
      </p>
    </div>
  );
};

// Styles for the component
const styles = {
  container: {
    padding: '16px',
    maxWidth: '800px',
    margin: '0 auto',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold' as 'bold',
    textAlign: 'center' as 'center',
    marginBottom: '16px',
  },
  subtitle: {
    fontSize: '20px',
    fontWeight: 'bold' as 'bold',
    marginBottom: '8px',
  },
  paragraph: {
    marginBottom: '16px',
    lineHeight: '1.6',
  },
};

export default TermsAndConditionsPage;
