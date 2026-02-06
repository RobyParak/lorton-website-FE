<template>
  <q-page>
    <!-- Hero Section with Clean Design -->
    <section class="hero-section">
      <div class="hero-content-wrapper">
        <div class="hero-content">
          <!-- Logo -->
          <img 
            src="../assets/logos/lorton-logo.png" 
            alt="Lorton 10K Logo" 
            class="hero-logo"
          />
          
          <!-- Title -->
          <h1 class="hero-title">Lorton 10K Race</h1>
          <p class="hero-subtitle">Fundraising for the Friends of Lorton School</p>

          <!-- Primary CTA -->
          <q-btn
            unelevated
            size="xl"
            color="primary"
            label="Register Now"
            icon-right="arrow_forward"
            class="cta-button"
            href="https://www.eventsupnorth.co.uk/event/1713"
            target="_blank"
            no-caps
          />
        </div>
      </div>
    </section>

    <!-- Event Details Section - Clean White Card -->
    <section class="details-section">
      <div class="container">
        <div class="details-card">
          <div class="details-grid">
            <div class="detail-item">
              <q-icon name="event" size="32px" color="primary" />
              <div class="detail-content">
                <div class="detail-label">Date</div>
                <div class="detail-value">Saturday, 18th April 2026</div>
              </div>
            </div>

            <div class="detail-item">
              <q-icon name="schedule" size="32px" color="primary" />
              <div class="detail-content">
                <div class="detail-label">Time</div>
                <div class="detail-value">10:00 AM</div>
              </div>
            </div>

            <div class="detail-item">
              <q-icon name="place" size="32px" color="primary" />
              <div class="detail-content">
                <div class="detail-label">Location</div>
                <div class="detail-value">Lorton Primary School</div>
              </div>
            </div>

            <div class="detail-item">
              <q-icon name="info" size="32px" color="primary" />
              <div class="detail-content">
                <div class="detail-label">Requirements</div>
                <div class="detail-value">Age 15+ • All abilities welcome</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer Section -->
    <section class="footer-section">
      <div class="container">
        <!-- Sponsor -->
        <div class="sponsor-wrapper">
          <span class="sponsor-label">Proudly sponsored by</span>
          <img 
            src="../assets/logos/paramo-logo.png" 
            alt="Páramo Logo" 
            class="sponsor-logo"
          />
        </div>

        <div class="footer-divider"></div>

        <!-- Volunteer & Social -->
        <div class="footer-info">
          <p class="footer-text">
            <q-icon name="volunteer_activism" size="18px" class="q-mr-xs" />
            Interested in volunteering? 
            <a href="mailto:catherine@terracefarm.co.uk" class="footer-link">Contact Catherine Armstrong</a>
          </p>
          <p class="footer-text">
            Follow us on <strong>Facebook</strong> and <strong>Instagram</strong> for updates
          </p>
        </div>

        <!-- Copyright -->
        <p class="copyright">
          © 2026 Lorton 10K Race • Supporting Friends of Lorton School
        </p>
      </div>
    </section>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HomePage'
})
</script>

<style lang="scss" scoped>
// Hero Section - Clean with subtle background
.hero-section {
  position: relative;
  min-height: 65vh;
  background: 
    linear-gradient(to bottom, rgba(255, 255, 255, 0.92), rgba(255, 255, 255, 0.96)),
    url('https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?w=1920&q=80');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #e0e0e0;
}

.hero-content-wrapper {
  width: 100%;
  max-width: 1200px;
  padding: 4rem 2rem;
}

.hero-content {
  text-align: center;
  animation: fadeIn 1s ease-out;
}

.hero-logo {
  max-width: 160px;
  height: auto;
  margin-bottom: 2rem;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0 0 0.5rem 0;
  letter-spacing: -0.02em;
  line-height: 1.1;
}

.hero-subtitle {
  font-size: 1.5rem;
  color: #666;
  margin: 0 0 3rem 0;
  font-weight: 400;
}

.cta-button {
  font-size: 1.25rem;
  padding: 1rem 3rem;
  border-radius: 8px;
  font-weight: 600;
  box-shadow: 0 4px 16px rgba(25, 118, 210, 0.3);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(25, 118, 210, 0.4);
  }
}

// Details Section - Clean Card Layout
.details-section {
  background: #fafafa;
  padding: 3rem 1rem;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1rem;
}

.details-card {
  background: white;
  border-radius: 12px;
  padding: 2.5rem;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
}

.details-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
}

.detail-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.detail-content {
  flex: 1;
}

.detail-label {
  font-size: 0.875rem;
  color: #999;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.25rem;
  font-weight: 600;
}

.detail-value {
  font-size: 1.125rem;
  color: #333;
  font-weight: 500;
  line-height: 1.4;
}

// Footer Section
.footer-section {
  background: white;
  padding: 2.5rem 1rem;
  border-top: 1px solid #e0e0e0;
}

.sponsor-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.sponsor-label {
  font-size: 0.875rem;
  color: #999;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 600;
}

.sponsor-logo {
  max-width: 140px;
  height: auto;
}

.footer-divider {
  height: 1px;
  background: #e0e0e0;
  margin: 2rem auto;
  max-width: 600px;
}

.footer-info {
  text-align: center;
  margin-bottom: 1.5rem;
}

.footer-text {
  font-size: 0.95rem;
  color: #666;
  margin: 0.5rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
}

.footer-link {
  color: #1976d2;
  text-decoration: none;
  font-weight: 600;
  
  &:hover {
    text-decoration: underline;
  }
}

.copyright {
  text-align: center;
  font-size: 0.875rem;
  color: #999;
  margin: 0;
}

// Animations
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

// Responsive Design
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.25rem;
    margin-bottom: 2rem;
  }
  
  .cta-button {
    font-size: 1.125rem;
    padding: 0.875rem 2rem;
  }
  
  .details-card {
    padding: 1.5rem;
  }
  
  .details-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .sponsor-wrapper {
    flex-direction: column;
    gap: 0.75rem;
  }
}

@media (max-width: 480px) {
  .hero-logo {
    max-width: 120px;
  }
  
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-subtitle {
    font-size: 1.125rem;
  }
  
  .cta-button {
    width: 100%;
    max-width: 320px;
  }
  
  .sponsor-logo {
    max-width: 120px;
  }
  
  .footer-text {
    flex-direction: column;
    gap: 0.25rem;
  }
}
</style>

