// ┌────────────────────────────────────────────┐
// │ TruEdge FusionMaster.ts                    │
// └────────────────────────────────────────────┘
// © TruEdge Systems — All rights reserved
// Author: Cedrick Hendrix
// Version: 1.0
// Description: Central orchestration shell for signal fusion,
//              regime sync, and cockpit coordination.

input showTrendOverlay = yes;
input showVolatilityOverlay = no;
input showDiagnosticsHUD = yes;
input regimeSource = "Auto"; // Options: "Auto", "Manual", "DropOverride"

def regimeState = if regimeSource == "Auto" then RegimeBridge() else
                  if regimeSource == "Manual" then manualRegimeInput else
                  DropManager_RegimeOverride();

#region ─── Overlay Coordination ──────────────────────────────

def trendSignal = if showTrendOverlay then TruEdge_TrendOverlay_v2_1() else Double.NaN;
def volatilitySignal = if showVolatilityOverlay then TruEdge_VolatilityOverlay_v1_8() else Double.NaN;

#endregion

#region ─── Diagnostic Feedback ───────────────────────────────

def diagnosticsHUD = if showDiagnosticsHUD then CockpitView_Diagnostics() else Double.NaN;
def patternScore = PatternScoreEngine(regimeState);

#endregion

#region ─── Fusion Output ─────────────────────────────────────

plot FusionPulse = if !IsNaN(trendSignal) and !IsNaN(patternScore) then
                   (trendSignal + patternScore) / 2 else Double.NaN;

FusionPulse.SetPaintingStrategy(PaintingStrategy.LINE);
FusionPulse.SetLineWeight(2);
FusionPulse.SetDefaultColor(Color.CYAN);

#endregion
