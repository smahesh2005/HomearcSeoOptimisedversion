import React from 'react';

const Reviews = () => {
  const [showForm, setShowForm] = React.useState(false);
  const [reviewOffset, setReviewOffset] = React.useState(0);
  const REVIEWS_VISIBLE = 3;
  const REVIEWS_STEP = 1;

  const allReviews = [
    { name: "Anish Kumar", text: "Amazing service! The plumber arrived in 30 minutes.", stars: "⭐⭐⭐⭐⭐", date: "2 days ago" },
    { name: "Priya Sharma", text: "Very professional cleaning. Highly recommend ArcHome.", stars: "⭐⭐⭐⭐⭐", date: "1 week ago" },
    { name: "Rahul Singh", text: "Great experience with the electrician. Fair pricing.", stars: "⭐⭐⭐⭐", date: "2 weeks ago" },
    { name: "Sneha Patel", text: "The painting work was flawless. Thank you!", stars: "⭐⭐⭐⭐⭐", date: "3 weeks ago" },
    { name: "Amit Verma", text: "Fast and reliable AC repair service.", stars: "⭐⭐⭐⭐", date: "1 month ago" },
    { name: "Neha Gupta", text: "Best platform for home maintenance.", stars: "⭐⭐⭐⭐⭐", date: "1 month ago" },
  ];

  const visibleReviews = React.useMemo(() => {
    if (!allReviews.length) return [];
    return Array.from({ length: REVIEWS_VISIBLE }, (_, idx) => allReviews[(reviewOffset + idx) % allReviews.length]);
  }, [allReviews, reviewOffset]);

  const reviewsPrev = () => {
    setReviewOffset((o) => (o - REVIEWS_STEP + allReviews.length) % allReviews.length);
  };

  const reviewsNext = () => {
    setReviewOffset((o) => (o + REVIEWS_STEP) % allReviews.length);
  };

  return (
    <div className="reviews-page container fade-in" style={{ padding: '4rem 2rem' }}>
      <header style={{ textAlign: 'center', marginBottom: '5rem' }}>
        <h1 className="section-title">Client Reviews</h1>
        <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.2rem', color: 'var(--text-muted)' }}>
          We take pride in our service quality. Here's what our community has to say.
        </p>
        {!showForm ? (
          <button className="btn-primary" style={{ marginTop: '2rem' }} onClick={() => setShowForm(true)}>
            Write a Review
          </button>
        ) : (
          <div className="glass-card fade-in" style={{ maxWidth: '600px', margin: '3rem auto', padding: '3rem', textAlign: 'left' }}>
            <h3 style={{ marginBottom: '2rem', textAlign: 'center' }}>Share Your Experience</h3>
            <form onSubmit={(e) => { e.preventDefault(); alert('Success! Your review is pending approval.'); setShowForm(false); }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontWeight: 600, fontSize: '0.9rem' }}>Your Name</label>
                  <input type="text" required style={{ padding: '0.8rem', borderRadius: '10px', border: '1px solid var(--border)', outline: 'none' }} placeholder="John Doe" />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontWeight: 600, fontSize: '0.9rem' }}>Rating</label>
                  <select required style={{ padding: '0.8rem', borderRadius: '10px', border: '1px solid var(--border)', outline: 'none' }}>
                    <option value="5">5 Stars</option>
                    <option value="4">4 Stars</option>
                    <option value="3">3 Stars</option>
                    <option value="2">2 Stars</option>
                    <option value="1">1 Star</option>
                  </select>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '2rem' }}>
                <label style={{ fontWeight: 600, fontSize: '0.9rem' }}>Your Feedback</label>
                <textarea required style={{ padding: '0.8rem', borderRadius: '10px', border: '1px solid var(--border)', outline: 'none', height: '120px', resize: 'none' }} placeholder="Tell us about the service..."></textarea>
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <button type="submit" className="btn-primary" style={{ flex: 1 }}>Submit Review</button>
                <button type="button" className="btn-secondary" onClick={() => setShowForm(false)}>Cancel</button>
              </div>
            </form>
          </div>
        )}
      </header>

      <div style={{ position: 'relative' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <button
            onClick={reviewsPrev}
            style={{
              padding: '0.5rem 1.5rem',
              background: 'var(--primary)',
              color: 'white',
              border: 'none',
              borderRadius: '20px',
              cursor: 'pointer',
              fontWeight: '600',
            }}
          >
            ← Previous
          </button>
          <span style={{ color: 'var(--text-muted)', fontWeight: '600' }}>
            Showing {visibleReviews.length} of {allReviews.length}
          </span>
          <button
            onClick={reviewsNext}
            style={{
              padding: '0.5rem 1.5rem',
              background: 'var(--primary)',
              color: 'white',
              border: 'none',
              borderRadius: '20px',
              cursor: 'pointer',
              fontWeight: '600',
            }}
          >
            Next →
          </button>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
          {visibleReviews.map((review, index) => (
          <div key={index} className="glass-card" style={{ padding: '2.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
              <div style={{ color: '#ffc107', fontSize: '1.1rem' }}>{review.stars}</div>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{review.date}</span>
            </div>
            <p style={{ fontStyle: 'italic', color: 'var(--secondary)', lineHeight: '1.7', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
              "{review.text}"
            </p>
            <p style={{ fontWeight: 700, color: 'var(--text-muted)' }}>- {review.name}</p>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
