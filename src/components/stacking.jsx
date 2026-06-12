import React, { useState, useRef, useEffect, useMemo } from 'react';
import ServiceCard from './servicecard';

const ServicesStackPanel = ({ row, index, scrollProgress, variant = 'compact' }) => {
  // Each panel's animation progress is determined by how much the NEXT panel has advanced.
  // We use the scrollProgress from the parent to derive the local progress for this panel.
  // Scale down and darken as the next card comes in.
  const progress = scrollProgress[index] || 0;

  // More aggressive scaling for smaller cards
  const dynamicScale = 1 - progress * 0.08;
  const dynamicBrightness = 1 - progress * 0.5;
  const dynamicOpacity = 1 - progress * 0.3;

  return (
    <div
      className="services-stack-panel"
      style={{
        zIndex: 100 + index,
        transform: `scale(${dynamicScale})`,
        filter: `brightness(${dynamicBrightness})`,
        opacity: dynamicOpacity,
        transition: 'transform 0.1s ease-out, filter 0.1s ease-out, opacity 0.1s ease-out',
      }}
      data-index={index}
    >
      <div className="services-stack-row">
        {row.map((service) => (
          <ServiceCard key={service.id} service={service} vertical variant={variant} />
        ))}
      </div>
    </div>
  );
}

const StackingServices = ({ services }) => {
  const [scrollProgress, setScrollProgress] = useState({});
  const stackRef = useRef(null);

  const stackRows = useMemo(() => {
    const rows = [];
    for (let i = 0; i < services.length; i += 3) {
      if (services.slice(i, i + 3).length > 0) {
        rows.push(services.slice(i, i + 3));
      }
    }
    return rows;
  }, [services]);

  useEffect(() => {
    const handleScroll = () => {
      if (!stackRef.current) return;
      const panels = stackRef.current.querySelectorAll('.services-stack-panel');
      const newProgress = {};
      const stickyTop = 110; // Match the sticky top in home.css
      const animationDistance = 350; // Distance over which the previous card scales down

      panels.forEach((panel, idx) => {
        const rect = panel.getBoundingClientRect();
        
        // We want to animate the PREVIOUS panel as THIS panel approaches stickyTop
        if (idx > 0) {
          const distanceToSticky = rect.top - stickyTop;
          // Progress of previous panel (idx-1) is 1 when THIS panel (idx) is at stickyTop
          // and 0 when THIS panel is 'animationDistance' away.
          const p = 1 - Math.max(0, Math.min(1, distanceToSticky / animationDistance));
          newProgress[idx - 1] = p;
        }
      });
      setScrollProgress(newProgress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [stackRows.length]);

  return (
    <section className="services-stack section-padding">
      <div className="container">
        <h2 className="section-title">Explore Our Services</h2>
        <p className="services-stack-subtitle" style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '3.5rem', maxWidth: '650px', marginLeft: 'auto', marginRight: 'auto', fontSize: '1.1rem' }}>
          Certified home services delivered to your doorstep. Experience the seamless stacking as you scroll.
        </p>

        <div className="services-stack-scroll" ref={stackRef}>
          {stackRows.map((row, index) => (
            <ServicesStackPanel 
              key={`stack-row-${index}`} 
              row={row} 
              index={index} 
              scrollProgress={scrollProgress}
              variant="compact"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StackingServices;