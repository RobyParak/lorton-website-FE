<template>
  <q-page>
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-overlay">
        <div class="hero-content">
          <img 
            src="../assets/logos/lorton-logo.png" 
            alt="Lorton 10K Logo" 
            class="hero-logo q-mb-md"
          />
          <h1 class="text-h1 text-weight-bold text-white q-mb-md">
            Lorton 10K Race
          </h1>
          <p class="text-h4 text-white q-mb-lg">
            Fundraising for the Friends of Lorton School
          </p>
          <div class="sponsor-section q-mt-xl">
            <p class="text-h6 text-white q-mb-sm">Sponsored by</p>
            <img 
              src="../assets/logos/paramo-logo.png" 
              alt="Páramo Logo" 
              class="sponsor-logo"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Event Details Card -->
    <section class="details-section q-py-xl">
      <div class="container">
        <q-card class="event-card" elevated>
          <q-card-section class="text-center">
            <div class="text-h3 text-weight-bold text-primary q-mb-lg">
              Event Details
            </div>
            
            <div class="details-grid">
              <div class="detail-item">
                <q-icon name="event" size="48px" color="primary" class="q-mb-sm" />
                <div class="text-h6 text-weight-medium">Date</div>
                <div class="text-body1 text-grey-7">Saturday, 18th of April 2026</div>
              </div>

              <div class="detail-item">
                <q-icon name="schedule" size="48px" color="primary" class="q-mb-sm" />
                <div class="text-h6 text-weight-medium">Time</div>
                <div class="text-body1 text-grey-7">10:00 AM</div>
              </div>

              <div class="detail-item">
                <q-icon name="place" size="48px" color="primary" class="q-mb-sm" />
                <div class="text-h6 text-weight-medium">Location</div>
                <div class="text-body1 text-grey-7">Lorton Primary School</div>
              </div>

              <div class="detail-item">
                <q-icon name="info" size="48px" color="primary" class="q-mb-sm" />
                <div class="text-h6 text-weight-medium">Requirements</div>
                <div class="text-body1 text-grey-7">
                  Minimum age: 15<br>
                  All running abilities welcomed
                </div>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </section>

    <!-- Call to Action Section -->
    <section class="cta-section q-py-xl">
      <div class="container text-center">
        <q-btn
          unelevated
          size="xl"
          color="positive"
          label="Enter Race Now"
          icon="directions_run"
          class="cta-button q-mb-lg"
          href="https://www.eventsupnorth.co.uk"
          target="_blank"
          no-caps
        />
        
        <div class="social-text text-h6 text-grey-7 q-mt-lg">
          Follow us on 
          <span class="text-weight-bold text-primary">Facebook</span> and 
          <span class="text-weight-bold text-primary">Instagram</span> 
          for updates
        </div>
      </div>
    </section>

    <!-- Volunteer Section -->
    <section class="volunteer-section q-py-xl">
      <div class="container">
        <q-card flat bordered class="volunteer-card">
          <q-card-section class="text-center">
            <q-icon name="volunteer_activism" size="64px" color="secondary" class="q-mb-md" />
            <div class="text-h5 text-weight-medium q-mb-md">
              Volunteer with Us
            </div>
            <p class="text-body1 text-grey-8 q-mb-md">
              Anyone from the community interested in volunteering on the day with marshalling, 
              please contact Catherine Armstrong.
            </p>
            <q-btn
              flat
              color="secondary"
              label="catherine@terracefarm.co.uk"
              icon="email"
              href="mailto:catherine@terracefarm.co.uk"
              no-caps
              class="q-mt-sm"
            />
          </q-card-section>
        </q-card>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer q-py-md text-center">
      <div class="text-body2 text-grey-6">
        © 2026 Lorton 10K Race - Supporting Friends of Lorton School
      </div>
    </footer>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HomePage'
})
</script>

<style lang="scss" scoped>
// Hero Section
.hero-section {
  position: relative;
  height: 100vh;
  min-height: 600px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  background-image: 
    linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url('https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?w=1920&q=80');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-overlay {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(2px);
}

.hero-content {
  text-align: center;
  padding: 2rem;
  animation: fadeInUp 1s ease-out;
}

.hero-logo {
  max-width: 200px;
  height: auto;
  filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3));
}

.sponsor-section {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 1.5rem 3rem;
  display: inline-block;
}

.sponsor-logo {
  max-width: 180px;
  height: auto;
  filter: brightness(0) invert(1);
}

// Container
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

// Details Section
.details-section {
  background: linear-gradient(to bottom, #f5f5f5, #ffffff);
}

.event-card {
  border-radius: 24px;
  padding: 2rem;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
}

.details-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.detail-item {
  padding: 1.5rem;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
}

// CTA Section
.cta-section {
  background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="2" fill="white" opacity="0.1"/></svg>');
    animation: float 20s linear infinite;
  }
}

.cta-button {
  font-size: 1.25rem;
  padding: 1.5rem 3rem;
  border-radius: 50px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
  }
}

.social-text {
  position: relative;
  z-index: 1;
}

// Volunteer Section
.volunteer-section {
  background: #fafafa;
}

.volunteer-card {
  border-radius: 16px;
  max-width: 800px;
  margin: 0 auto;
}

// Footer
.footer {
  background: #263238;
  color: white;
}

// Animations
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes float {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-100px);
  }
}

// Responsive Design
@media (max-width: 768px) {
  .hero-section {
    height: 80vh;
    min-height: 500px;
  }
  
  .hero-content h1 {
    font-size: 2.5rem;
  }
  
  .hero-content p {
    font-size: 1.5rem;
  }
  
  .details-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .cta-button {
    font-size: 1rem;
    padding: 1rem 2rem;
  }
  
  .sponsor-section {
    padding: 1rem 2rem;
  }
}

@media (max-width: 480px) {
  .hero-logo {
    max-width: 150px;
  }
  
  .sponsor-logo {
    max-width: 140px;
  }
  
  .event-card {
    padding: 1rem;
  }
}
</style>
