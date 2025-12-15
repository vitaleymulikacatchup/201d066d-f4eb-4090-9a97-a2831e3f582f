"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import HeroBillboardCarouselSplit from '@/components/sections/hero/HeroBillboardCarouselSplit';
import MediaAbout from '@/components/sections/about/MediaAbout';
import ProductCardFive from '@/components/sections/product/ProductCardFive';
import MetricCardSix from '@/components/sections/metrics/MetricCardSix';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterCard from '@/components/sections/footer/FooterCard';
import { Award, Users, Utensils, Star, Instagram, Facebook, Phone } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
      contentWidth="medium"
      sizing="mediumSizeExtraLargeSpacing"
      background="floatingGradient"
      cardStyle="layered-gradient"
      primaryButtonStyle="neon-glow-border"
      secondaryButtonStyle="outline"
      headingFontWeight="bold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleFullscreen
          navItems={[
            { name: "Home", id: "home" },
            { name: "Menu", id: "menu" },
            { name: "About", id: "about" },
            { name: "Reviews", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Ejovik"
          bottomLeftText="Restaurant & Bistro"
          bottomRightText="reservations@ejovik.com"
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroBillboardCarouselSplit
          title="Experience Culinary Excellence at Ejovik"
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765819009216-0gp4m80w.jpg",
              imageAlt: "Signature appetizer plating"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765819010267-26h7urce.jpg",
              imageAlt: "Chef's special main course"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765819011590-4ll82xws.jpg",
              imageAlt: "Artistic modern cuisine presentation"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765819013195-8itxx4cp.jpg",
              imageAlt: "Elegant dessert creation"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765819014142-cr792zio.jpg",
              imageAlt: "Professional gourmet plating"
            }
          ]}
          buttons={[
            { text: "Reserve a Table", href: "contact" },
            { text: "View Menu", href: "menu" }
          ]}
        />
      </div>
      
      <div id="about" data-section="about">
        <MediaAbout
          title="The Ejovik Story"
          description="At Ejovik, we believe dining is more than just food—it's an experience. For over a decade, we've been crafting memorable moments through innovative cuisine, impeccable service, and a warm ambiance that feels like home. Our chef-driven approach celebrates fresh, locally-sourced ingredients transformed into culinary masterpieces."
          tag="Our Heritage"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765819015419-905o25ps.jpg"
          imageAlt="Ejovik restaurant dining area"
          useInvertedBackground="noInvert"
          buttons={[
            { text: "Learn More", href: "#about" }
          ]}
        />
      </div>
      
      <div id="menu" data-section="menu">
        <ProductCardFive
          title="Our Menu"
          description="Discover our carefully curated selection of dishes prepared with passion and precision"
          tag="Seasonal Selection"
          products={[
            {
              id: "appetizer-1",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765819016430-4ufeervv.jpg",
              imageAlt: "Pan-seared scallops with citrus foam",
              button: { text: "Order", href: "contact" },
              isFavorited: false
            },
            {
              id: "main-1",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765819017406-dd555c2w.jpg",
              imageAlt: "Grilled branzino with herb butter",
              button: { text: "Order", href: "contact" },
              isFavorited: false
            },
            {
              id: "main-2",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765819018670-83ijkidx.jpg",
              imageAlt: "Fresh tagliatelle with truffle cream",
              button: { text: "Order", href: "contact" },
              isFavorited: false
            },
            {
              id: "main-3",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765819019956-mkx4tnb4.jpg",
              imageAlt: "Aged ribeye with roasted vegetables",
              button: { text: "Order", href: "contact" },
              isFavorited: false
            }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>
      
      <div id="metrics" data-section="metrics">
        <MetricCardSix
          title="Ejovik By The Numbers"
          description="Join thousands of satisfied diners who have experienced culinary excellence at our establishment"
          metrics={[
            {
              id: "1",
              value: "10+",
              tag: "Years",
              tagIcon: Award,
              title: "Of Excellence in Fine Dining"
            },
            {
              id: "2",
              value: "15K+",
              tag: "Guests",
              tagIcon: Users,
              title: "Satisfied Diners Annually"
            },
            {
              id: "3",
              value: "50+",
              tag: "Dishes",
              tagIcon: Utensils,
              title: "On Our Curated Menu"
            },
            {
              id: "4",
              value: "4.9★",
              tag: "Rating",
              tagIcon: Star,
              title: "Average Guest Rating"
            }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>
      
      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThirteen
          title="What Our Guests Say"
          description="Real experiences from people who have dined with us and fallen in love with our cuisine"
          testimonials={[
            {
              id: "1",
              name: "Margaret Sullivan",
              handle: "@margaret_dining",
              testimonial: "Ejovik exceeded all my expectations. The attention to detail in every dish and the impeccable service made our anniversary dinner truly unforgettable.",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765819021251-aljroogs.jpg"
            },
            {
              id: "2",
              name: "James Chen",
              handle: "@james.travels",
              testimonial: "The freshness of ingredients and innovative flavors kept surprising us throughout the entire meal. This is restaurant excellence at its finest.",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765819022331-pkxa0jaj.jpg"
            },
            {
              id: "3",
              name: "Victoria Rossi",
              handle: "@victoria_food",
              testimonial: "From the moment we walked in, we felt welcomed. The ambiance, service, and food created the perfect evening. Highly recommend!",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765819023369-tiw0oxks.jpg"
            },
            {
              id: "4",
              name: "David Park",
              handle: "@david_eats",
              testimonial: "Finally found a restaurant that truly understands culinary artistry. Every plate is a masterpiece. Worth every penny.",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765819024665-rdp8r9wi.jpg"
            },
            {
              id: "5",
              name: "Sophia Lambert",
              handle: "@sophia_taste",
              testimonial: "The chef's tasting menu was absolutely divine. Paired with their wine selections, it was a journey through flavors I'll never forget.",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765819025645-lat15z7s.jpg"
            },
            {
              id: "6",
              name: "Alessandro Rizzo",
              handle: "@ale_dines",
              testimonial: "Authentic, refined, and memorable. Ejovik represents everything I love about fine dining. Already planning my next visit.",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765819026685-is7u7jfq.jpg"
            }
          ]}
          showRating={true}
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Reserve Your Table"
          description="Join us for an unforgettable dining experience. Secure your reservation or reach out with any special requests."
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Your Full Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Email Address",
              required: true
            },
            {
              name: "phone",
              type: "tel",
              placeholder: "Phone Number",
              required: true
            },
            {
              name: "date",
              type: "date",
              placeholder: "Preferred Date",
              required: true
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Special requests, dietary restrictions, or occasion details...",
            rows: 4,
            required: false
          }}
          useInvertedBackground="noInvert"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765819027778-a35gw9g3.jpg"
          imageAlt="Ejovik restaurant warm ambiance"
          mediaPosition="right"
          buttonText="Reserve Now"
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterCard
          logoText="Ejovik"
          copyrightText="© 2024 Ejovik Restaurant. All rights reserved. | Fine Dining & Culinary Excellence"
          socialLinks={[
            {
              icon: Instagram,
              href: "https://instagram.com",
              ariaLabel: "Instagram"
            },
            {
              icon: Facebook,
              href: "https://facebook.com",
              ariaLabel: "Facebook"
            },
            {
              icon: Phone,
              href: "tel:+1234567890",
              ariaLabel: "Phone"
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}