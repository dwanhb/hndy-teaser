import { useState } from 'react'
import { Wrench, Menu, X, Shield, Clock, Star, Users, CheckCircle } from 'lucide-react'
import './App.css'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showCustomerWaitlist, setShowCustomerWaitlist] = useState(false)
  const [showProviderWaitlist, setShowProviderWaitlist] = useState(false)
  const [customerEmail, setCustomerEmail] = useState('')
  const [providerEmail, setProviderEmail] = useState('')
  const [customerSubmitted, setCustomerSubmitted] = useState(false)
  const [providerSubmitted, setProviderSubmitted] = useState(false)

  const handleCustomerSubmit = (e) => {
    e.preventDefault()
    setCustomerSubmitted(true)
    setTimeout(() => {
      setShowCustomerWaitlist(false)
      setCustomerSubmitted(false)
      setCustomerEmail('')
    }, 2000)
  }

  const handleProviderSubmit = (e) => {
    e.preventDefault()
    setProviderSubmitted(true)
    setTimeout(() => {
      setShowProviderWaitlist(false)
      setProviderSubmitted(false)
      setProviderEmail('')
    }, 2000)
  }

  return (
    <div className="teaser-app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-brand">
            <Wrench size={28} color="#3B82F6" />
            <span>HNDY</span>
          </div>

          <div className="nav-desktop">
            <a href="#features">Features</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#for-providers">For Providers</a>
            <button onClick={() => setShowCustomerWaitlist(true)} className="nav-cta">
              Join Waitlist
            </button>
          </div>

          <button className="nav-mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="nav-mobile-menu">
            <a href="#features" onClick={() => setMobileMenuOpen(false)}>Features</a>
            <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)}>How It Works</a>
            <a href="#for-providers" onClick={() => setMobileMenuOpen(false)}>For Providers</a>
            <button onClick={() => { setShowCustomerWaitlist(true); setMobileMenuOpen(false); }} className="nav-cta">
              Join Waitlist
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Find Trusted Service Providers<br /><span className="gradient-text">In Minutes, Not Days</span></h1>
          <p>HNDY connects you with verified professionals in the Philippines. From plumbing to HVAC, get instant matches powered by AI.</p>
          <div className="hero-buttons">
            <button onClick={() => setShowCustomerWaitlist(true)} className="btn-primary">I Need a Service</button>
            <button onClick={() => setShowProviderWaitlist(true)} className="btn-secondary">I'm a Provider</button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="section-container">
          <h2>Why Choose HNDY?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon"><Shield size={32} color="#3B82F6" /></div>
              <h3>Verified Pros</h3>
              <p>All providers are background-checked and certified</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><Clock size={32} color="#10B981" /></div>
              <h3>Instant Matching</h3>
              <p>AI-powered matching finds the right pro in seconds</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><Star size={32} color="#F59E0B" /></div>
              <h3>Top Rated</h3>
              <p>Only 4.5+ star rated professionals on our platform</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><Users size={32} color="#8B5CF6" /></div>
              <h3>Local Experts</h3>
              <p>Filipino professionals who understand your needs</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="how-it-works">
        <div className="section-container">
          <h2>How It Works</h2>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-emoji">💬</div>
              <div className="step-number">1</div>
              <h3>Describe Your Problem</h3>
              <p>Tell our AI what you need help with in plain language</p>
            </div>
            <div className="step-card">
              <div className="step-emoji">🎯</div>
              <div className="step-number">2</div>
              <h3>Get Matched</h3>
              <p>Instantly receive top-rated providers based on your needs</p>
            </div>
            <div className="step-card">
              <div className="step-emoji">✅</div>
              <div className="step-number">3</div>
              <h3>Book & Relax</h3>
              <p>Schedule a time and let the professional handle the rest</p>
            </div>
          </div>
        </div>
      </section>

      {/* For Providers */}
      <section id="for-providers" className="for-providers">
        <div className="section-container">
          <div className="provider-content">
            <div className="provider-text">
              <h2>Grow Your Business with HNDY</h2>
              <p className="provider-subtitle">Join hundreds of verified professionals earning more by connecting with customers who need your expertise.</p>
              <div className="benefits-list">
                <div className="benefit-item">
                  <CheckCircle size={24} color="#10B981" />
                  <span>Get more bookings with AI-powered matching</span>
                </div>
                <div className="benefit-item">
                  <CheckCircle size={24} color="#10B981" />
                  <span>Build your reputation with verified reviews</span>
                </div>
                <div className="benefit-item">
                  <CheckCircle size={24} color="#10B981" />
                  <span>Manage your schedule and availability easily</span>
                </div>
                <div className="benefit-item">
                  <CheckCircle size={24} color="#10B981" />
                  <span>Create discount vouchers to attract new customers</span>
                </div>
              </div>
              <button onClick={() => setShowProviderWaitlist(true)} className="btn-primary">Join as a Provider</button>
            </div>
            <div className="provider-visual">
              <div className="provider-emoji">👨‍🔧👩‍🔧</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <Wrench size={28} />
            <span>HNDY</span>
          </div>
          <p>Connecting customers with trusted service providers across the Philippines</p>
          <p className="footer-copyright">© 2024 HNDY. All rights reserved.</p>
        </div>
      </footer>

      {/* Customer Waitlist Modal */}
      {showCustomerWaitlist && (
        <div className="modal-overlay" onClick={() => setShowCustomerWaitlist(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Join the Waitlist</h2>
              <button onClick={() => setShowCustomerWaitlist(false)} className="modal-close">
                <X size={24} />
              </button>
            </div>
            {!customerSubmitted ? (
              <form onSubmit={handleCustomerSubmit}>
                <p className="modal-description">Be the first to know when HNDY launches. Get early access and exclusive offers!</p>
                <input
                  type="email"
                  required
                  value={customerEmail}
                  onChange={(e) => setCustomerEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="modal-input"
                />
                <button type="submit" className="modal-submit">Join Waitlist</button>
              </form>
            ) : (
              <div className="modal-success">
                <CheckCircle size={64} color="#10B981" />
                <h3>You're on the list!</h3>
                <p>We'll notify you when we launch.</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Provider Waitlist Modal */}
      {showProviderWaitlist && (
        <div className="modal-overlay" onClick={() => setShowProviderWaitlist(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Join as a Provider</h2>
              <button onClick={() => setShowProviderWaitlist(false)} className="modal-close">
                <X size={24} />
              </button>
            </div>
            {!providerSubmitted ? (
              <form onSubmit={handleProviderSubmit}>
                <p className="modal-description">Start growing your business with HNDY. Join our network of verified professionals!</p>
                <input
                  type="email"
                  required
                  value={providerEmail}
                  onChange={(e) => setProviderEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="modal-input"
                />
                <button type="submit" className="modal-submit">Join as Provider</button>
              </form>
            ) : (
              <div className="modal-success">
                <CheckCircle size={64} color="#10B981" />
                <h3>Welcome aboard!</h3>
                <p>We'll be in touch soon with next steps.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default App
