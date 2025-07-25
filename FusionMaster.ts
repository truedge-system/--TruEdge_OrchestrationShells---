/**
 * ┌────────────────────────────────────────────────────────────┐
 * │                      TruEdge™ RealSuite                    │
 * │                  FusionMaster.ts — v1.1.0                 │
 * └────────────────────────────────────────────────────────────┘
 *
 * 🧠 Purpose:
 * Central orchestration shell coordinating signal engines,
 * diagnostic overlays, regime filters, and drop logic.
 *
 * 🔗 Dependencies:
 * - RegimeBridge.ts — shared context sync
 * - DropManager.ts — branded drop injection
 * - CockpitView.ts — HUD overlays and diagnostics
 * - SignalEngines/ — toggleable signal modules
 *
 * 🧩 Module Tags:
 * @OrchestrationShell
 * @RegimeAware
 * @DropEnabled
 * @CockpitSync
 *
 * 🛠️ Integration Notes:
 * - All modules routed through FusionMaster must declare:
 *   `@FusionReady` in their header block
 * - Regime sync is enforced via `RegimeBridge.getState()`
 * - Drops are injected via `DropManager.routeTo(this)`
 *
 * 📦 Export Safety:
 * - All overlays and diagnostics are toggle-safe
 * - Scan/export logic routed through `FusionMaster.export()`
 *
 * 🧬 Version Log:
 * - v1.1.0 — DocSync integration, DropVault routing
 * - v1.0.0 — Initial orchestration shell release
 *
 * 🔐 License:
 * MIT — remixable, orchestration-safe
 */
