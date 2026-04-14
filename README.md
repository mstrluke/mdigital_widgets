# mdigitalcn widgets

47+ composed React widgets for the mdigitalcn ecosystem. Built on `@mdigitalcn/uikit`, Tailwind CSS v4, and `react-hook-form`.

Not published to npm — consumed via the [mdigitalcn CLI](https://github.com/mdigitalcn/cli).

## What's included

**Auth** — login form, register form, forgot password, reset password, OTP verify

**CRM** — contact card, lead card, activity feed, pipeline stage, deal card

**Dashboard** — KPI card, stats bar, revenue chart, user growth chart, activity chart

**Tables** — data table with filters, sortable columns, pagination, row actions

**Marketing** — hero section, feature grid, pricing table, testimonials, CTA banner

**Messaging** — chat list, message bubble, compose box, inbox item

**Settings** — profile form, password form, notification preferences, billing card

**Commerce** — product card, cart item, order summary, checkout form

## Add to your project

```bash
mdigitalcn widget list
mdigitalcn widget add login-form
mdigitalcn widget add kpi-card revenue-chart
mdigitalcn widget info contact-card
```

The CLI copies source files into your project and installs peer dependencies automatically.

## Peer dependencies

```json
{
  "@mdigitalcn/uikit": "^1.0.13",
  "react-hook-form": "^7.55.0",
  "@hookform/resolvers": "^5.0.0",
  "zod": "^3.0.0",
  "lucide-react": "^0.577.0"
}
```

## Development

```bash
pnpm install
pnpm storybook
```

## License

MIT
