# TruEdge_DivergenceEngine

TruEdge_DivergenceEngine is a modular orchestration-grade signal engine for detecting and scoring market divergences across price, momentum, and volatility layers. Designed to plug directly into FusionMaster, it supports toggleable overlays, regime alignment, and scan-safe diagnostics.

## 🧩 Modules

- `SignalPack_*`: Modular detectors for divergence patterns (e.g. RSI vs Price, MACD vs Price)
- `ScoreMixer.ts`: Blends and prioritizes conflicting divergence signals
- `Overlay_Toggles.ts`: Controls cockpit overlay visibility and scan safety
- `Diag_ViewPort.ts`: Diagnostic interface for real-time signal feedback

## 🚀 Deployment

- Drop into FusionMaster using `SignalRouter` and `ToggleManager`
- Presets available from `TruEdge_DropVault/Divergence_Presets.json`
- Integrates with `TruEdge_CockpitView` for visualized overlay logic

## 🧭 Orchestration Hooks

- Sync regime inputs via `RegimeSync`
- Apply ML overrides through `MLOverrideHub`
- Use diagnostic routing via `DiagnosticControl`

## 📅 Version History

See `docs/version-log.md` for change logs, tuning updates, and orchestration notes.

## 📚 Integration Guide

Detailed signal routing, toggle maps, and shared input schemas available in `docs/integration-guide.md`.
