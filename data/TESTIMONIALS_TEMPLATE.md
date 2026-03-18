# How to add real testimonials

When a client gives you a review (WhatsApp, phone, Google), add it to `testimonials.json`:

```json
[
  {
    "id": 1,
    "name": "Client Name",
    "area": "Saibaba Colony",
    "city": "Coimbatore",
    "projectType": "Luxury Villa",
    "rating": 5,
    "text": "Their exact words here — do not paraphrase or edit.",
    "image": null,
    "imageAlt": "",
    "projectValue": "₹1.8 Cr",
    "completedYear": "2025"
  }
]
```

## Rules
- `text` must be the client's exact words — never rewrite or improve them
- `image` can be `null` if you don't have a photo — initials avatar will show instead
- Only add reviews you have explicit permission to publish
- Once you have 3+ reviews, swap the TrustSection back to the Testimonials carousel

## How to get reviews fast
Send this WhatsApp message to past clients:

> "Hi [Name], this is [Your Name] from Saanidhya Builders.
> We're launching our website and would love to feature your experience.
> Could you share 2–3 lines about working with us?
> Also, a Google review would mean a lot: [your GMB link]
> Thank you!"

## Where to get your Google Review link
Google Business Profile dashboard → Promote → Get more reviews → Copy link
Add it to `company.json` → `contact.googleReviewLink`
