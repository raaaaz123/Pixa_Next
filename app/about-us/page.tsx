import React from 'react';

export default function AboutUsPage() {
    return (
        <div style={styles.container}>
            <h1 style={styles.companyName}>Pixa Ai</h1>
            <hr style={styles.separator} />
            <h2 style={styles.heading}>About Us</h2>
            <p style={styles.content}>
                Welcome to Pixa Ai, your premier destination for online shopping in India. As a trusted name in the personalized gifts industry, Pixa offers a vast selection of unique products tailored just for you. Whether you're looking for custom mobile covers, trendy t-shirts, photo mugs, or key-chains, we've got you covered. Our collection also includes exquisite 3D-crystals, photo clocks, picture frames, and much more.
            </p>
            <p style={styles.content}>
                At Pixa, we pride ourselves on staying ahead of the curve by introducing innovative products like personalized AI avatar merchandise. Imagine gifting someone a t-shirt or a mug adorned with their very own AI-generated avatar – it's a gift that is as unique as it is memorable.
            </p>
            <p style={styles.content}>
                Since our inception in 2023, we have been dedicated to providing a superior shopping experience and unparalleled value to our customers. Our commitment to quality and customer satisfaction has made us a leader in the personalized gifts market.
            </p>
            <p style={styles.content}>
                Our mission is simple: to make every gift as special as the person receiving it. By blending technology with creativity, Pixa continues to push the boundaries of what's possible in the world of personalized gifts.
            </p>
        </div>
    );
}

const styles = {
    container: {
        padding: '16px',
        backgroundColor: '#FFFFFF',
        color: '#000000',
        fontFamily: 'Arial, sans-serif',
    },
    companyName: {
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '16px',
    },
    separator: {
        border: '0',
        height: '1px',
        background: 'linear-gradient(to right, #ff7e5f, #feb47b)',
        marginBottom: '16px',
    },
    heading: {
        fontSize: '20px',
        fontWeight: 'bold',
        marginBottom: '8px',
    },
    content: {
        fontSize: '16px',
        marginBottom: '16px',
        lineHeight: '1.6',
    },
};
