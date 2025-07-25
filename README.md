# --TruEdge_OrchestrationShells---# TruEdge_OrchestrationShells™ — v1.0

Cockpit-grade orchestration shells for fusing overlays, diagnostics, and signal engines into unified scan/export-ready views.
# TruEdge™ Orchestration Map

## Signal Flow

1. `TruEdge_TradePlatform`
   → `LauncherShell.ts` (scan/export)
   → `FusionMaster.ts` (signal fusion)

2. `TruEdge_VisualSuite`
   → `ViewportSplitter.ts` → `CockpitView.ts`
   → `FusionMaster.ts` (overlay sync)

## Regime Sync

- All modules sync via `RegimeBridge.ts`
- Shared context for overlays, execution, diagnostics

## Deployment Grid

| Module                | Role                        | Sync Target         | Version Tag         |
|----------------------|-----------------------------|---------------------|---------------------|
| TradePlatform         | Execution + Journaling      | LauncherShell.ts    | `v1.1_ScanSync`     |
| VisualSuite           | Overlay + Pulse Logic       | FusionMaster.ts     | `v1.1_OverlaySync`  |
## 🔧 Shell Modules
| File | Purpose |
|------|---------|
| FusionMaster.ts | Central orchestrator for signals, risk, regime |
| LauncherShell.ts | Scan/export interface with drop routing |
| CockpitView.ts | HUD display for diagnostics and market state |
| RegimeBridge.ts | Shared regime sync across modules |

## 🧩 Integration Guide
- Plug overlays and diagnostics via `TruEdge_InputBridge.ts`
- Use toggle inputs for module control
- Visual separation via `ViewportSplitter.ts`

## 🧪 Version History
| Version | Changes |
|---------|---------|
| v1.0 | Initial shell deployment with toggle inputs and regime sync |

## 📝 License
MIT — remix, reuse, and build your legacy.
🔗 [Back to TruEdge™ Launchpad Index](https://github.com/TruEdge-systems/TruEdge_Launchpad/blob/main/README.md)
📎 View the full orchestration diagram: [Orchestration_Map.md](Orchestration_Map.md)
