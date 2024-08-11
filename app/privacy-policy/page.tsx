import React from 'react';

export default function PrivacyPolicyPage() {
    return (
        <div style={styles.container}>
            {/* Header */}
            <div style={styles.headerLayout}>
                <h1 style={styles.headerTitle}>Privacy Policy</h1>
            </div>

            {/* Scrollable Content */}
            <div style={styles.scrollView}>
                <div style={styles.contentLayout}>
                    {/* Privacy Policy Text */}
                    <p style={styles.privacyPolicyText}>
                        Your privacy is important to us. It is Pixa’s policy to respect your privacy regarding any information we may collect from you across our app, website, and other sites we own and operate.
                        <br /><br />
                        We only ask for personal information when we truly need it to ensure the proper functioning of our app and to provide the best possible service to you. Information is collected by fair and lawful means, with your knowledge and consent. We make sure you are aware of why we’re collecting this information and how it will be used.
                        <br /><br />
                        We only retain the collected information for as long as necessary to fulfill your requests, such as generating your AI avatars. Once your avatars are generated, we delete the associated data. Any information stored is protected by commercially acceptable means to prevent loss, theft, unauthorized access, disclosure, copying, use, or modification.
                        <br /><br />
                        We do not share any personally identifying information publicly or with third parties, except when required by law or when it is necessary to fulfill your specific requests (e.g., order fulfillment). We do not share your data with third parties for marketing purposes.
                        <br /><br />
                        Our app and website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites and cannot accept responsibility or liability for their respective privacy policies.
                        <br /><br />
                        You are free to refuse our request for your personal information, with the understanding that this may limit the services we can provide to you.
                        <br /><br />
                        Your continued use of our app and website will be regarded as acceptance of our practices regarding privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to contact us.
                        <br /><br />
                        This policy is effective as of 9 August 2024.
                    </p>
                </div>
            </div>
        </div>
    );
}

const styles = {
    container: {
        backgroundColor: '#FFFFFF',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
    },
    headerLayout: {
        padding: '16px',
        backgroundColor: '#f5f5f5',  // Optional: You can choose a background color for the header
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerTitle: {
        fontSize: '20px',
        color: '#000000',
        fontWeight: 'bold',
    },
    scrollView: {
        padding: '16px',
        overflowY: 'auto',  // To enable scrolling
        flex: 1,
    },
    contentLayout: {
        display: 'flex',
        flexDirection: 'column',
    },
    privacyPolicyText: {
        fontSize: '16px',
        color: '#000000',
        lineHeight: '1.5',
    },
};
