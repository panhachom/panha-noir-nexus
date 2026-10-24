export interface WorkHighlightItem {
  name: string;
  detail: string;
  problem?: string;
  approach?: string;
}

export type WorkHighlightIcon =
  | 'bus'
  | 'sync'
  | 'payments'
  | 'mobile'
  | 'dashboard'
  | 'wallet'
  | 'ml';

export interface WorkHighlight {
  id: string;
  icon: WorkHighlightIcon;
  title: string;
  summary: string;
  items: WorkHighlightItem[];
  tech: string[];
}

export const workHighlights: WorkHighlight[] = [
  {
    id: 'transit-platform',
    icon: 'bus',
    title: 'Multi-Operator Transit Ticketing Platform',
    summary:
      'One booking model for bus, ferry, private taxi and train services on BookMe+.',
    items: [
      {
        name: 'Trip model',
        detail:
          'Direct and multi-leg trips with boarding, drop-off and transfer stops, vehicle types and seat layouts.',
      },
      {
        name: 'Rule-based pricing',
        detail:
          'Fares adjusted by nationality, age group and pick-up or drop-off distance, with managed currency rates.',
      },
      {
        name: 'Admin dashboard',
        detail:
          'Set up services, sell tickets on behalf of customers, and manage orders and reports.',
      },
      {
        name: 'App APIs',
        detail:
          'Endpoints for trip search, routes, seat layouts, availability and draft orders.',
      },
    ],
    tech: ['Ruby on Rails', 'PostgreSQL', 'Sidekiq', 'Redis', 'RSpec'],
  },
  {
    id: 'inventory-sync',
    icon: 'sync',
    title: 'Third-Party Inventory Synchronization',
    summary:
      'Keeps partner inventory consistent with BookMe+ across callback and polling providers.',
    items: [
      {
        name: 'Per-provider reconciliation',
        detail:
          'Routes, trips, availability and prices reconciled per integration, with operators selected per provider.',
      },
      {
        name: 'Callbacks and polling',
        detail:
          'Event-driven for providers with callbacks, hourly polling for the rest, plus on-demand sync.',
      },
      {
        name: 'Change review',
        detail:
          'New and discontinued trips go to an admin queue. Vehicle mismatches are resolved by matching or creating a vehicle.',
        problem:
          'Partner changes, such as new or discontinued trips and vehicle mismatches, need a decision before going live.',
        approach:
          'Queued them for admin review, resolving vehicles by matching an existing one or creating a new one.',
      },
      {
        name: 'Idempotent actions',
        detail: 'Create and ignore are safe under retries and double submits.',
        problem: 'Retries and double submits could create duplicate records.',
        approach: 'Made create and ignore idempotent, so repeating an action has no extra effect.',
      },
    ],
    tech: ['Ruby on Rails', 'Sidekiq', 'REST APIs', 'OAuth', 'RSpec'],
  },
  {
    id: 'payment-gateways',
    icon: 'payments',
    title: 'Banking & Wallet Payment Gateways',
    summary:
      'Gateway integrations for Cambodian banks and wallets, on a shared payment layer.',
    items: [
      {
        name: 'ABA PayWay pre-authorization',
        detail:
          'Hold funds for up to seven days, then complete or cancel. Signed, encrypted and idempotent.',
        problem:
          'Flexible cancellation required reserving funds without immediate capture.',
        approach:
          'Built pre-auth completion and cancellation, with capture in a unique background job.',
      },
      {
        name: 'ACLEDA',
        detail:
          'KHQR, card and deeplink payments with signed requests, a mini-app flow, and status reconciliation with admin correction.',
      },
      {
        name: 'Vattanac Bank',
        detail:
          'Hosted payment URL, deeplink and KHQR, an AES-encrypted mini-app flow with refunds, and status reconciliation.',
      },
      {
        name: 'True Money',
        detail:
          'Signed requests, webview and deeplink payment URLs, status checks and refunds.',
      },
    ],
    tech: ['Ruby on Rails', 'Sidekiq', 'KHQR', 'HMAC / RSA signing'],
  },
  {
    id: 'super-app-mini-apps',
    icon: 'mobile',
    title: 'Embedded Booking for Super Apps',
    summary:
      'BookMe+ and BookMeBus running as embedded mini-apps inside partner banking and wallet apps.',
    items: [
      {
        name: 'BookMe+ in Vattanac Bank',
        detail:
          'RSA-verified, AES-encrypted session handshake that finds or creates the customer by bank identity.',
        problem:
          'The mini-app has to trust the bank’s identity before opening a customer session.',
        approach:
          'Verified the RSA signature and decrypted the AES payload, then found or created the customer by bank identity.',
      },
      {
        name: 'BookMeBus in Vattanac Bank',
        detail: 'Mini-app entry URL and in-app payment through the bank’s gateway.',
      },
      {
        name: 'BookMeBus in True Money',
        detail: 'Auto-login from the wallet app and in-app payment with callbacks.',
      },
    ],
    tech: ['Flutter', 'WebView', 'Ruby on Rails', 'AES / RSA'],
  },
  {
    id: 'organizer-portal',
    icon: 'dashboard',
    title: 'Event Operations & Ticketing Portal',
    summary:
      'Organizer back office for running events: guests, crews and sales.',
    items: [
      {
        name: 'Guest management',
        detail: 'Search, filters, bulk import, CSV export and check-in with undo.',
      },
      {
        name: 'Crew and check-in',
        detail: 'Crews, roles, invites and check-in groups for door staff.',
      },
      {
        name: 'Tickets and stock',
        detail:
          'Ticket creation by event section, stock views with locked stock, and pass design.',
      },
      {
        name: 'Orders and reporting',
        detail: 'Order and payment lists with details, plus embedded reports.',
      },
    ],
    tech: ['Ruby on Rails', 'Stimulus', 'LitElement', 'Tailwind CSS', 'DaisyUI'],
  },
  {
    id: 'wallet-passes',
    icon: 'wallet',
    title: 'Automated Wallet Pass Issuance',
    summary: 'Per-ticket Google Wallet passes, issued through a signed API.',
    items: [
      {
        name: 'Event ticket classes',
        detail:
          'Created and updated through the Google Wallet API from event data, and attached to products in the admin.',
      },
      {
        name: 'Signed passes',
        detail:
          'An authenticated API mints an RS256-signed token per ticket with a QR barcode.',
        problem: 'Every ticket needs its own tamper-proof wallet pass.',
        approach:
          'Issued an RS256-signed token per ticket through an authenticated API, with a QR barcode.',
      },
    ],
    tech: ['Google Wallet API', 'Ruby on Rails', 'JWT (RS256)'],
  },
  {
    id: 'rice-disease-detection',
    icon: 'ml',
    title: 'Applied ML: Rice Disease Detection',
    summary:
      'End-to-end ML pipeline that classifies rice leaf diseases from images, for low-connectivity field use.',
    items: [
      {
        name: 'Model',
        detail: 'Transfer-learning CNN in PyTorch with 80% validation accuracy.',
      },
      {
        name: 'Serving',
        detail:
          'FastAPI inference service, plus on-device inference in a Flutter app for offline use.',
      },
    ],
    tech: ['PyTorch', 'FastAPI', 'Flutter', 'Python'],
  },
];
