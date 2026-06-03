import { useState, useMemo, useCallback } from "react";
import { NOTES_SYLLABUS } from "./JEENotesData";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, Cell, RadarChart, Radar, PolarGrid,
  PolarAngleAxis, Legend
} from "recharts";

// ============================================================
// QUESTION BANK  —  90 questions, 6 per chapter, 15 chapters
// ============================================================
const QUESTION_BANK = {
  Physics: {
    color: "#3b82f6",
    bg: "#eff6ff",
    border: "#bfdbfe",
    icon: "⚡",
    chapters: {
      "Kinematics & Laws of Motion": [
        {
          id: "p_k_1", type: "single",
          tag: "JEE Advanced 2019",
          text: "A ball is thrown vertically upward at 20 m/s from the top of a 40 m tower. Time to reach the ground is: (g = 10 m/s²)",
          options: ["A. 4 s", "B. 5 s", "C. 6 s", "D. 3 s"],
          answer: "A",
          explanation: "Taking downward as positive origin at top: 40 = −20t + 5t² → 5t² − 20t − 40 = 0 → t² − 4t − 8 = 0 → t = (4 + √48)/2 ≈ 4 s."
        },
        {
          id: "p_k_2", type: "multi",
          tag: "Conceptual",
          text: "A block of mass 2 kg on a surface (μₛ = 0.5, μₖ = 0.3). A horizontal force of 5 N is applied. (g = 10 m/s²). Which statements are correct?",
          options: [
            "A. The block will not move",
            "B. The friction force on the block is 5 N",
            "C. Normal force equals mg = 20 N",
            "D. If force were 12 N, the block would accelerate at 4 m/s²"
          ],
          answer: ["A", "B", "C"],
          explanation: "Max static friction = 0.5 × 20 = 10 N > 5 N, so block stays. Friction = 5 N (static, balances applied force). N = mg = 20 N. If 12 N applied: Net = 12 − 0.3×20 = 6 N → a = 3 m/s² (not 4), so D is wrong."
        },
        {
          id: "p_k_3", type: "integer",
          tag: "JEE Advanced 2020",
          text: "A projectile is launched at 30° with speed 20 m/s (g = 10 m/s²). The time of flight (in seconds) is:",
          answer: 2,
          explanation: "T = 2u sinθ / g = 2 × 20 × sin30° / 10 = 2 × 20 × 0.5 / 10 = 2 s."
        },
        {
          id: "p_k_4", type: "assertion",
          tag: "Conceptual",
          assertion: "A body can have acceleration even when its speed is constant.",
          reason: "Acceleration is a vector quantity; a change in direction of velocity (without change in magnitude) also constitutes acceleration.",
          answer: "A",
          explanation: "Both statements are TRUE and R correctly explains A. Uniform circular motion is the classic example: speed is constant but centripetal acceleration exists due to direction change."
        },
        {
          id: "p_k_5", type: "single",
          tag: "JEE Advanced 2016",
          text: "A rocket in gravity-free space has constant acceleration 2 m/s² with exhaust speed 500 m/s. Fuel consumption rate when instantaneous mass = 200 kg is:",
          options: ["A. 0.4 kg/s", "B. 0.8 kg/s", "C. 1.2 kg/s", "D. 0.5 kg/s"],
          answer: "B",
          explanation: "Thrust = v_ex × (dm/dt) = Ma → dm/dt = Ma / v_ex = 200 × 2 / 500 = 0.8 kg/s."
        },
        {
          id: "p_k_6", type: "single",
          tag: "Real World",
          text: "A fighter jet in level flight at 720 km/h suddenly pulls into a vertical circle. The minimum radius for pilot safety (max tolerable g-force = 7g, g = 10 m/s²) is approximately:",
          options: ["A. 200 m", "B. 400 m", "C. 600 m", "D. 1200 m"],
          answer: "C",
          explanation: "v = 720 km/h = 200 m/s. Maximum centripetal acceleration = 7g = 70 m/s². Minimum safe radius r_min = v²/a_max = 200²/70 = 40000/70 ≈ 571 m. Closest option is C (600 m)."
        }
      ],
      "Rotational Motion": [
        {
          id: "p_r_1", type: "single",
          tag: "JEE Advanced 2018",
          text: "A uniform solid cylinder (mass M, radius R) rolls without slipping. Moment of inertia about the contact line with the ground is:",
          options: ["A. MR²/2", "B. 3MR²/2", "C. 2MR²", "D. 5MR²/2"],
          answer: "B",
          explanation: "I_cm (solid cylinder) = MR²/2. By parallel axis theorem: I_contact = I_cm + Md² = MR²/2 + MR² = 3MR²/2."
        },
        {
          id: "p_r_2", type: "multi",
          tag: "Conceptual",
          text: "A disc of radius R rolls without slipping with centre velocity v. Which statements are correct about instantaneous velocities?",
          options: [
            "A. The topmost point has velocity 2v",
            "B. The bottommost (contact) point has zero velocity",
            "C. The centre has velocity v",
            "D. The leftmost point has the same speed as the centre"
          ],
          answer: ["A", "B", "C"],
          explanation: "In rolling without slipping: v_top = 2v ✓, v_bottom = 0 (instantaneous contact point at rest) ✓, v_centre = v ✓. The leftmost point has both horizontal (v) and vertical (v) components → speed = v√2 ≠ v, so D is INCORRECT."
        },
        {
          id: "p_r_3", type: "integer",
          tag: "JEE Advanced 2021",
          text: "A thin uniform rod of length 2 m (mass 1 kg) is pivoted at one end, released from horizontal. Its angular velocity (rad/s, nearest integer) when vertical is: (g = 10 m/s²)",
          answer: 4,
          explanation: "Energy conservation: Mg(L/2) = ½Iω². I = ML²/3 = 4/3 kg·m². ω² = 2Mg(L/2)/I = 2×10×1/(4/3) = 15. ω = √15 ≈ 3.87 ≈ 4 rad/s."
        },
        {
          id: "p_r_4", type: "assertion",
          tag: "Real World",
          assertion: "A spinning gyroscope resists changing its orientation, a property used in navigation systems.",
          reason: "A torque applied to a spinning gyroscope causes precession (change in axis direction) rather than tipping over, due to conservation of angular momentum.",
          answer: "A",
          explanation: "Both are true. R correctly explains A — gyroscopic rigidity arises because torque changes angular momentum direction (precession) instead of magnitude, keeping the axis stable."
        },
        {
          id: "p_r_5", type: "single",
          tag: "JEE Advanced 2019",
          text: "A particle of mass m moves in a circle of radius r. Its kinetic energy is E. Its angular momentum about the centre is:",
          options: ["A. √(2mEr²)", "B. √(mEr²)", "C. 2mEr", "D. mEr²"],
          answer: "A",
          explanation: "KE = ½mv² = E → mv² = 2E. L = mvr → L² = m²v²r² = m·(mv²)·r² = 2mEr². So L = √(2mEr²)."
        },
        {
          id: "p_r_6", type: "single",
          tag: "Real World",
          text: "A figure skater pulls in arms, reducing moment of inertia from 4 kg·m² to 1 kg·m². Initial angular velocity was 2 rad/s. The ratio KE_final / KE_initial is:",
          options: ["A. 4", "B. 1/4", "C. 2", "D. 16"],
          answer: "A",
          explanation: "Angular momentum L = Iω is conserved. New ω = (4×2)/1 = 8 rad/s. KE_i = ½(4)(4) = 8 J. KE_f = ½(1)(64) = 32 J. Ratio = 4. Energy increases (work done by skater pulling arms in)."
        }
      ],
      "Thermodynamics": [
        {
          id: "p_t_1", type: "single",
          tag: "JEE Advanced 2017",
          text: "One mole of ideal monoatomic gas undergoes an adiabatic process: temperature drops from 300 K to 200 K. Work done BY the gas is: (R = 8.314 J/mol·K)",
          options: ["A. +1247 J", "B. −1247 J", "C. +831 J", "D. −831 J"],
          answer: "A",
          explanation: "For adiabatic: W = −ΔU = −nCᵥΔT = −1×(3R/2)×(200−300) = (3/2)×8.314×100 = 1247 J. Positive → gas does work (expands and cools)."
        },
        {
          id: "p_t_2", type: "multi",
          tag: "JEE Advanced 2020",
          text: "A Carnot engine operates between 600 K (source) and 300 K (sink). Which statements are correct?",
          options: [
            "A. Efficiency = 50%",
            "B. For every 100 J absorbed, 50 J is rejected to sink",
            "C. COP of the reversed Carnot refrigerator between same temperatures = 1",
            "D. No real engine between these temperatures can exceed 50% efficiency"
          ],
          answer: ["A", "B", "C", "D"],
          explanation: "η = 1 − 300/600 = 50% ✓. Q_rejected = 50 J ✓. COP_refrigerator = T_L/(T_H − T_L) = 300/300 = 1 ✓. Carnot is the maximum possible efficiency ✓. All correct."
        },
        {
          id: "p_t_3", type: "integer",
          tag: "Conceptual",
          text: "An ideal gas undergoes an isothermal expansion from volume V to 4V at temperature T. The ratio of final pressure to initial pressure is (enter as integer denominator when ratio is written as 1/n):",
          answer: 4,
          explanation: "Isothermal: P₁V₁ = P₂V₂ → P₂/P₁ = V₁/V₂ = V/(4V) = 1/4. The denominator n = 4."
        },
        {
          id: "p_t_4", type: "assertion",
          tag: "Conceptual",
          assertion: "The entropy of the universe always increases in any irreversible process.",
          reason: "For irreversible processes, the total entropy change ΔS_total = ∫dQ/T.",
          answer: "C",
          explanation: "Assertion A is TRUE (Second Law of Thermodynamics). Reason R is FALSE: ΔS = ∫dQ/T applies only to reversible processes. For irreversible processes, ΔS_universe > ∫dQ/T."
        },
        {
          id: "p_t_5", type: "single",
          tag: "Real World",
          text: "A pressure cooker operates at ~2 atm (boiling point ≈ 393 K). A Carnot refrigerator extracting heat from this steam and rejecting to 0°C (273 K) ice would have COP:",
          options: ["A. 2.3", "B. 1.0", "C. 4.5", "D. 0.7"],
          answer: "A",
          explanation: "COP = T_L / (T_H − T_L) = 273 / (393 − 273) = 273 / 120 ≈ 2.275 ≈ 2.3."
        },
        {
          id: "p_t_6", type: "single",
          tag: "JEE Advanced 2015",
          text: "For isothermal expansion of 1 mol ideal gas from V to 2V at temperature T, work done BY the gas is:",
          options: ["A. RT ln 2", "B. 2RT", "C. RT/2", "D. −RT ln 2"],
          answer: "A",
          explanation: "W = nRT ln(V₂/V₁) = 1 × R × T × ln 2 = RT ln 2."
        }
      ],
      "Electrostatics": [
        {
          id: "p_e_1", type: "single",
          tag: "JEE Advanced 2018",
          text: "A solid conducting sphere of radius R has charge Q. The electric field at a distance r = 2R from the centre is:",
          options: ["A. kQ/4R²", "B. kQ/R²", "C. kQ/2R²", "D. Zero"],
          answer: "A",
          explanation: "Outside a conductor, E = kQ/r². At r = 2R: E = kQ/(2R)² = kQ/4R²."
        },
        {
          id: "p_e_2", type: "multi",
          tag: "Conceptual",
          text: "Two capacitors C₁ = 2 μF and C₂ = 3 μF are connected in series across 10 V. Which are correct?",
          options: [
            "A. Equivalent capacitance = 1.2 μF",
            "B. Both capacitors store the same charge",
            "C. Voltage across C₁ = 6 V",
            "D. Total energy stored = 60 μJ"
          ],
          answer: ["A", "B", "C", "D"],
          explanation: "C_eq = 2×3/(2+3) = 1.2 μF ✓. Series → same Q = C_eq × V = 12 μC ✓. V₁ = Q/C₁ = 12/2 = 6 V ✓. U = ½C_eq V² = ½×1.2×10⁻⁶×100 = 60 μJ ✓."
        },
        {
          id: "p_e_3", type: "integer",
          tag: "JEE Advanced 2021",
          text: "A charge Q is placed at the centre of a cube. The ratio of electric flux through one face to the total flux through the cube is 1/n. What is n?",
          answer: 6,
          explanation: "By Gauss's law, total flux = Q/ε₀. By symmetry, the charge at the centre distributes flux equally through all 6 faces. Flux per face = (Q/ε₀)/6 = total/6. So the ratio is 1/6, giving n = 6."
        },
        {
          id: "p_e_4", type: "assertion",
          tag: "Real World",
          assertion: "Lightning rods are sharpened to a point to maximise the electric field at the tip.",
          reason: "Surface charge density (and hence E field) is highest at regions of greatest curvature on a conductor.",
          answer: "A",
          explanation: "Both true and R correctly explains A. Sharp tip → very small radius of curvature → highest σ → highest E → corona discharge safely dissipates charge before dangerous lightning can strike."
        },
        {
          id: "p_e_5", type: "single",
          tag: "JEE Advanced 2022",
          text: "Two equal charges +q are placed at (0, +d) and (0, −d). The electric potential at point (x, 0) on the x-axis is:",
          options: [
            "A. kq/√(x²+d²) from each → total 2kq/√(x²+d²)",
            "B. 2kq/x",
            "C. kq/x",
            "D. Zero"
          ],
          answer: "A",
          explanation: "Each charge is at distance √(x²+d²) from the point. Potential is scalar → total V = kq/√(x²+d²) + kq/√(x²+d²) = 2kq/√(x²+d²)."
        },
        {
          id: "p_e_6", type: "single",
          tag: "Conceptual",
          text: "An electric dipole is placed in a uniform electric field with its moment at 90° to the field. The dipole experiences:",
          options: [
            "A. Zero force and maximum torque",
            "B. Maximum force and zero torque",
            "C. Zero force and zero torque",
            "D. Maximum force and maximum torque"
          ],
          answer: "A",
          explanation: "In a UNIFORM field, net force on a dipole = 0 always (equal and opposite forces). Torque τ = pE sinθ = pE sin90° = pE (maximum). So: zero force, maximum torque."
        }
      ],
      "Optics & Modern Physics": [
        {
          id: "p_o_1", type: "single",
          tag: "JEE Advanced 2020",
          text: "In Young's double slit experiment: slit separation = 0.5 mm, screen distance = 1 m, λ = 500 nm. Fringe width is:",
          options: ["A. 1.0 mm", "B. 0.5 mm", "C. 2.0 mm", "D. 0.25 mm"],
          answer: "A",
          explanation: "β = λD/d = 500×10⁻⁹ × 1 / (0.5×10⁻³) = 1×10⁻³ m = 1.0 mm."
        },
        {
          id: "p_o_2", type: "multi",
          tag: "JEE Advanced 2019",
          text: "In the photoelectric effect, which correctly describe the experimental observations?",
          options: [
            "A. Stopping potential depends on frequency, not intensity",
            "B. Maximum KE of photoelectrons = hf − φ",
            "C. Saturation current is proportional to light intensity",
            "D. Photoelectric effect occurs for any frequency if intensity is high enough"
          ],
          answer: ["A", "B", "C"],
          explanation: "D is WRONG — below threshold frequency, no emission regardless of intensity (disproves classical wave theory). A, B, C are correct observations confirming quantum nature of light."
        },
        {
          id: "p_o_3", type: "integer",
          tag: "JEE Advanced 2016",
          text: "The de Broglie wavelength of an electron accelerated through 150 V is approximately: (h=6.6×10⁻³⁴, m=9.1×10⁻³¹, e=1.6×10⁻¹⁹). Express in units of 0.1 nm (answer as integer):",
          answer: 1,
          explanation: "λ = h/√(2meV) = 6.6×10⁻³⁴/√(2×9.1×10⁻³¹×1.6×10⁻¹⁹×150) = 6.6×10⁻³⁴/√(4.37×10⁻²⁷) ≈ 6.6×10⁻³⁴/6.6×10⁻¹⁴ ≈ 1×10⁻¹⁰ m = 0.1 nm = 1 × 0.1 nm."
        },
        {
          id: "p_o_4", type: "assertion",
          tag: "Conceptual",
          assertion: "When light travels from a denser medium to a rarer medium, its frequency remains unchanged but wavelength increases.",
          reason: "Frequency is determined by the source; v = fλ and since v increases in rarer medium, λ must increase.",
          answer: "A",
          explanation: "Both statements are TRUE and R correctly explains A. Frequency is a property of the source and doesn't change at boundaries. Since v = c/n increases in rarer medium (smaller n), and v = fλ, wavelength λ increases."
        },
        {
          id: "p_o_5", type: "single",
          tag: "Real World",
          text: "Optical fibres (core n = 1.5, cladding n = 1.4) work via total internal reflection. The critical angle is approximately:",
          options: ["A. 69°", "B. 48°", "C. 56°", "D. 75°"],
          answer: "A",
          explanation: "sin θ_c = n_cladding/n_core = 1.4/1.5 = 0.933. θ_c = arcsin(0.933) ≈ 69°."
        },
        {
          id: "p_o_6", type: "single",
          tag: "JEE Advanced 2018",
          text: "In hydrogen atom, electron transitions from n = 4 to n = 2. This emission falls in which spectral series?",
          options: [
            "A. Lyman series (UV region)",
            "B. Balmer series (visible region)",
            "C. Paschen series (IR region)",
            "D. Brackett series (IR region)"
          ],
          answer: "B",
          explanation: "Balmer series: transitions to n = 2. n=4→2 gives Hβ line at ≈ 486 nm (blue-green visible light)."
        }
      ]
    }
  },
  Chemistry: {
    color: "#10b981",
    bg: "#f0fdf4",
    border: "#a7f3d0",
    icon: "🧪",
    chapters: {
      "Atomic Structure": [
        {
          id: "c_a_1", type: "single",
          tag: "JEE Advanced 2020",
          text: "The de Broglie condition in Bohr's model states that the circumference of the nth orbit equals n wavelengths. This means:",
          options: ["A. 2πrₙ = nλ", "B. πrₙ = nλ", "C. 2rₙ = nλ", "D. rₙ = nλ"],
          answer: "A",
          explanation: "Bohr quantisation: mvr = nℏ = nh/2π. de Broglie: λ = h/mv. Combining: 2πr = nλ. The orbit circumference equals an integer number of de Broglie wavelengths."
        },
        {
          id: "c_a_2", type: "multi",
          tag: "Conceptual",
          text: "For an electron in the 3d subshell of hydrogen, which are correct?",
          options: [
            "A. Principal quantum number n = 3",
            "B. Azimuthal quantum number l = 2",
            "C. Maximum value of |mₗ| = 2",
            "D. Number of radial nodes = 0"
          ],
          answer: ["A", "B", "C", "D"],
          explanation: "3d: n=3, l=2 ✓. mₗ ranges −2 to +2, so max |mₗ| = 2 ✓. Radial nodes = n − l − 1 = 3 − 2 − 1 = 0 ✓. All correct."
        },
        {
          id: "c_a_3", type: "integer",
          tag: "JEE Advanced 2022",
          text: "Total number of nodes (radial + angular) in a 4p orbital:",
          answer: 3,
          explanation: "Radial nodes = n − l − 1 = 4 − 1 − 1 = 2. Angular nodes = l = 1. Total = 2 + 1 = 3."
        },
        {
          id: "c_a_4", type: "assertion",
          tag: "Conceptual",
          assertion: "The probability density |ψ|² for s-orbitals is maximum at the nucleus (r = 0).",
          reason: "s-orbitals have zero angular momentum, so no centrifugal barrier prevents electrons from approaching the nucleus.",
          answer: "A",
          explanation: "Both statements are TRUE. |ψ|² for 1s is indeed maximum at r=0. Reason correctly identifies the physical basis — s electrons have l=0 and can penetrate to nucleus, important for nuclear effects like hyperfine splitting."
        },
        {
          id: "c_a_5", type: "single",
          tag: "JEE Advanced 2021",
          text: "Which electronic configuration violates Hund's rule?",
          options: [
            "A. 2p: ↑ ↑ ↑  (three p electrons, all parallel)",
            "B. 2p: ↑↓ ↑  _ (pairing before filling all orbitals)",
            "C. 2p: ↑ ↑ _  (two electrons in separate orbitals)",
            "D. 2p: ↑↓ ↑ ↑  (four electrons, one paired)"
          ],
          answer: "B",
          explanation: "Hund's rule: electrons occupy degenerate orbitals singly with parallel spins before pairing. Option B shows pairing before all three 2p orbitals are singly occupied — a violation."
        },
        {
          id: "c_a_6", type: "single",
          tag: "Real World",
          text: "MRI machines exploit spin properties of hydrogen nuclei (protons). The spin quantum number of a proton is ½. Number of orientations in an external magnetic field:",
          options: ["A. 2", "B. 1", "C. 3", "D. 4"],
          answer: "A",
          explanation: "Number of orientations = 2s + 1 = 2(½) + 1 = 2. These are mₛ = +½ (spin-up, α) and mₛ = −½ (spin-down, β). The energy difference between these states (at MRI field ~3 T) gives the NMR signal."
        }
      ],
      "Chemical Equilibrium": [
        {
          id: "c_e_1", type: "single",
          tag: "JEE Advanced 2018",
          text: "For N₂ + 3H₂ ⇌ 2NH₃, Kc = 6 × 10⁻² L²/mol² at 500°C (T = 773 K). Kp = Kc(RT)^Δn. Here Δn = 2−4 = −2 and RT ≈ 63.4 L·atm/mol. The value of Kp in atm⁻² is approximately:",
          options: ["A. 1.5 × 10⁻⁵", "B. 3.8 × 10⁻² ", "C. 2.4 × 10⁻³", "D. 1.2 × 10⁻⁴"],
          answer: "A",
          explanation: "Kp = Kc × (RT)^Δn = 6×10⁻² × (63.4)⁻² = 6×10⁻² / 4020 ≈ 1.49×10⁻⁵ atm⁻²."
        },
        {
          id: "c_e_2", type: "multi",
          tag: "Conceptual",
          text: "For an exothermic equilibrium reaction, which changes INCREASE product yield?",
          options: [
            "A. Decreasing temperature",
            "B. Adding inert gas at constant volume",
            "C. Increasing pressure when Δn_gas < 0",
            "D. Removing products continuously"
          ],
          answer: ["A", "C", "D"],
          explanation: "B: inert gas at constant volume doesn't change partial pressures → no effect. A: lower T favours exothermic reaction (Le Chatelier) ✓. C: higher P favours fewer moles of gas ✓. D: removal of products shifts equilibrium right ✓."
        },
        {
          id: "c_e_3", type: "integer",
          tag: "JEE Advanced 2019",
          text: "For PCl₅ ⇌ PCl₃ + Cl₂, degree of dissociation α = 0.5 at total pressure 1 atm. The value of Kp × 3 (in atm) is:",
          answer: 1,
          explanation: "Mole fractions: x(PCl₃) = x(Cl₂) = 0.5/1.5 = 1/3 each; x(PCl₅) = 0.5/1.5 = 1/3. Partial pressures = 1/3 atm each. Kp = P(PCl₃)×P(Cl₂)/P(PCl₅) = (1/3)(1/3)/(1/3) = 1/3 atm. Kp × 3 = 1."
        },
        {
          id: "c_e_4", type: "assertion",
          tag: "Conceptual",
          assertion: "A catalyst speeds up both forward and reverse reactions by the same factor, leaving the equilibrium constant unchanged.",
          reason: "A catalyst lowers the activation energy of both forward and reverse reactions equally.",
          answer: "A",
          explanation: "Both statements are TRUE and R correctly explains A. Since Kc = k_f/k_r, and a catalyst multiplies both rate constants by the same factor, Kc (and equilibrium position) is unaltered."
        },
        {
          id: "c_e_5", type: "single",
          tag: "Real World",
          text: "The Haber process (N₂ + 3H₂ ⇌ 2NH₃, exothermic) uses ~450°C despite equilibrium favouring products at lower temperatures. Why?",
          options: [
            "A. Lower temperature poisons the Fe catalyst",
            "B. Equilibrium yield is high but reaction rate is prohibitively slow at lower temperatures",
            "C. NH₃ decomposes at temperatures below 200°C",
            "D. N₂ triple bond cannot be broken below 400°C"
          ],
          answer: "B",
          explanation: "Classic industrial chemistry compromise: lower T gives higher Keq (more NH₃) but unacceptably slow rate even with catalyst. 450°C gives a kinetically practical rate with acceptable yield (~15%), then unreacted gases are recycled."
        },
        {
          id: "c_e_6", type: "single",
          tag: "JEE Advanced 2017",
          text: "When K = 1 for a reaction at 298 K, the standard Gibbs free energy change ΔG° is:",
          options: ["A. Positive", "B. Negative", "C. Zero", "D. Cannot be determined without ΔH°"],
          answer: "C",
          explanation: "ΔG° = −RT ln K. When K = 1, ln K = 0, so ΔG° = 0. Reactants and products have equal Gibbs energy under standard conditions."
        }
      ],
      "Electrochemistry": [
        {
          id: "c_ec_1", type: "single",
          tag: "JEE Advanced 2020",
          text: "For cell Zn|Zn²⁺||Cu²⁺|Cu, E°cell = 1.10 V. Using Nernst equation at 298 K, with [Zn²⁺] = 1 M, E_cell = 1.07 V. The [Cu²⁺] is: (0.0591/2 ≈ 0.0296 V per decade)",
          options: ["A. 0.1 M", "B. 0.01 M", "C. 0.001 M", "D. 10 M"],
          answer: "A",
          explanation: "E = E° − (0.0591/2) log([Zn²⁺]/[Cu²⁺]) → 1.07 = 1.10 − 0.0296 log(1/[Cu²⁺]) → 0.03/0.0296 ≈ 1 = log(1/[Cu²⁺]) → [Cu²⁺] = 0.1 M."
        },
        {
          id: "c_ec_2", type: "multi",
          tag: "Conceptual",
          text: "During electrolysis of aqueous CuSO₄ with active copper electrodes, which are correct?",
          options: [
            "A. Cu²⁺ ions are deposited at cathode",
            "B. Cu dissolves from anode",
            "C. Concentration of CuSO₄ remains essentially constant",
            "D. O₂ gas is evolved at the anode"
          ],
          answer: ["A", "B", "C"],
          explanation: "Active Cu anode dissolves (Cu → Cu²⁺ + 2e⁻) while Cu deposits at cathode — concentration stays constant. D is wrong: O₂ would evolve at an inert anode; here Cu dissolves preferentially (lower oxidation potential)."
        },
        {
          id: "c_ec_3", type: "integer",
          tag: "JEE Advanced 2021",
          text: "Grams of silver deposited when 96500 C (1 Faraday) of charge passes through AgNO₃ solution: (Ag = 108 g/mol)",
          answer: 108,
          explanation: "Ag⁺ + e⁻ → Ag. 1 Faraday = 1 mole of electrons → 1 mole Ag = 108 g."
        },
        {
          id: "c_ec_4", type: "assertion",
          tag: "Conceptual",
          assertion: "A galvanic cell converts chemical energy to electrical energy; an electrolytic cell does the reverse.",
          reason: "In a galvanic cell, ΔG < 0 (spontaneous); in an electrolytic cell, ΔG > 0 (non-spontaneous, requires external EMF).",
          answer: "A",
          explanation: "Both statements are TRUE and R correctly explains A. ΔG = −nFE: spontaneous reactions (ΔG < 0, E > 0) drive galvanic cells; non-spontaneous reactions need external voltage in electrolytic cells."
        },
        {
          id: "c_ec_5", type: "single",
          tag: "Real World",
          text: "Iron rusts faster in salt water than fresh water because:",
          options: [
            "A. Cl⁻ ions directly oxidise iron to FeCl₂",
            "B. Salt increases electrical conductivity of water, facilitating the electrochemical corrosion current",
            "C. Salt increases the reduction potential of O₂",
            "D. NaCl catalyses the direct reaction of Fe with H₂O"
          ],
          answer: "B",
          explanation: "Rusting is an electrochemical process (Fe anode, O₂/H₂O cathode). Salt ions increase the ionic conductivity of the electrolyte, allowing faster charge (ion) transport between anodic and cathodic sites, accelerating the corrosion current."
        },
        {
          id: "c_ec_6", type: "single",
          tag: "JEE Advanced 2018",
          text: "The standard electrode potential E° (in V) of a half-cell is related to standard Gibbs energy ΔG° by:",
          options: ["A. ΔG° = nFE°", "B. ΔG° = −nFE°", "C. ΔG° = RT/nF × E°", "D. ΔG° = −RT ln(E°/n)"],
          answer: "B",
          explanation: "ΔG° = −nFE°. For spontaneous cell: E° > 0 → ΔG° < 0. This is the fundamental link between thermodynamics and electrochemistry."
        }
      ],
      "Organic Mechanisms": [
        {
          id: "c_o_1", type: "single",
          tag: "JEE Advanced 2021",
          text: "(R)-2-bromobutane reacts with NaOH via SN2. The product is:",
          options: [
            "A. (R)-2-butanol (retention)",
            "B. (S)-2-butanol (inversion)",
            "C. Racemic 2-butanol",
            "D. 1-butene (elimination)"
          ],
          answer: "B",
          explanation: "SN2 proceeds by backside attack of OH⁻ → complete inversion of configuration (Walden inversion). (R) substrate → (S) product."
        },
        {
          id: "c_o_2", type: "multi",
          tag: "JEE Advanced 2020",
          text: "Which compounds readily undergo SN1 reaction?",
          options: [
            "A. (CH₃)₃CBr (tert-butyl bromide) in polar protic solvent",
            "B. CH₃Br (methyl bromide)",
            "C. (C₆H₅)₂CHBr (diphenylmethyl bromide)",
            "D. CH₃CH₂Br (ethyl bromide)"
          ],
          answer: ["A", "C"],
          explanation: "SN1 requires stable carbocation. (CH₃)₃C⁺ (tertiary) ✓. (C₆H₅)₂CH⁺ (benzylic, stabilised by resonance into 2 rings) ✓. CH₃⁺ (methyl) and CH₃CH₂⁺ (primary) are highly unstable → SN1 strongly disfavoured."
        },
        {
          id: "c_o_3", type: "integer",
          tag: "JEE Advanced 2019",
          text: "The number of distinct monochlorination products of naphthalene (C₁₀H₈) considering structural (constitutional) isomers only:",
          answer: 2,
          explanation: "Naphthalene has two types of positions by symmetry: α (C1, C4, C5, C8) and β (C2, C3, C6, C7). EAS gives 1-chloronaphthalene (α-substituted) and 2-chloronaphthalene (β-substituted) — just 2 distinct products."
        },
        {
          id: "c_o_4", type: "assertion",
          tag: "Conceptual",
          assertion: "In addition of HBr to propene, the major product is 2-bromopropane (not 1-bromopropane).",
          reason: "Markovnikov's rule: the proton adds to the carbon bearing more hydrogens, forming the more stable (secondary) carbocation intermediate.",
          answer: "A",
          explanation: "Both TRUE and correctly linked. The secondary carbocation (CH₃CH⁺CH₃) is more stable than primary (CH₃CH₂CH₂⁺), so Br⁻ attacks at C2, giving 2-bromopropane as major product."
        },
        {
          id: "c_o_5", type: "single",
          tag: "Real World",
          text: "Aspirin is synthesised from salicylic acid and acetic anhydride. The type of reaction at the −OH group of salicylic acid is:",
          options: [
            "A. Fischer esterification (acid catalysed)",
            "B. Nucleophilic acyl substitution (acylation)",
            "C. Aldol condensation",
            "D. Electrophilic aromatic substitution"
          ],
          answer: "B",
          explanation: "The phenolic −OH of salicylic acid acts as nucleophile, attacking the electrophilic carbonyl of acetic anhydride (an acyl activating group). Acetic acid departs as leaving group — this is nucleophilic acyl substitution."
        },
        {
          id: "c_o_6", type: "single",
          tag: "JEE Advanced 2019",
          text: "Ozonolysis (O₃, then Zn/H₂O — reductive workup) of 2-butene (CH₃CH=CHCH₃) gives:",
          options: [
            "A. Two molecules of CH₃CHO (acetaldehyde)",
            "B. CH₃CHO + CH₃COOH",
            "C. Two molecules of CH₃COOH (acetic acid)",
            "D. OHCCHO + 2CH₄"
          ],
          answer: "A",
          explanation: "Ozonolysis cleaves the C=C double bond. 2-butene → 2 × CH₃CHO. Reductive workup (Zn/H₂O) gives aldehydes (not acids). Oxidative workup (H₂O₂) would give carboxylic acids."
        }
      ],
      "Coordination Compounds": [
        {
          id: "c_c_1", type: "single",
          tag: "JEE Advanced 2018",
          text: "IUPAC name of the complex [Pt(NH₃)₂Cl₂] (the anticancer drug cisplatin) is:",
          options: [
            "A. Diamminedichloroplatinum(II)",
            "B. Dichlorodiammineplatinum(II)",
            "C. Dichloroplatinum(II) diamine",
            "D. Platinous chloride diamine"
          ],
          answer: "A",
          explanation: "IUPAC: ligands in alphabetical order → 'ammine' (A) before 'chloro' (C). Two of each → diammine, dichloro. Platinum(II) last. Full: diamminedichloroplatinum(II). The geometric prefix cis- is added to distinguish from trans-isomer."
        },
        {
          id: "c_c_2", type: "multi",
          tag: "JEE Advanced 2022",
          text: "In the complex [Fe(CN)₆]⁴⁻, which statements are correct?",
          options: [
            "A. Oxidation state of Fe is +2",
            "B. CN⁻ is a strong-field ligand causing d-orbital splitting",
            "C. The complex is diamagnetic (low-spin d⁶)",
            "D. Coordination number of Fe is 6"
          ],
          answer: ["A", "B", "C", "D"],
          explanation: "Complex charge −4 = Fe + 6(−1) → Fe = +2 ✓. CN⁻ is a strong π-acceptor (strong field) ✓. d⁶ Fe²⁺ with strong field → low spin: t₂g⁶eg⁰ → all paired → diamagnetic ✓. Six CN⁻ ligands → CN = 6 ✓. All correct."
        },
        {
          id: "c_c_3", type: "integer",
          tag: "JEE Advanced 2021",
          text: "Number of geometric isomers for the square planar complex [Pt(A)(B)(C)(D)] where A, B, C, D are all different monodentate ligands:",
          answer: 3,
          explanation: "For square planar MA BCDE with 4 different ligands, there are 3 geometric isomers based on which pairs are trans: (A trans B), (A trans C), or (A trans D) — the 4th arrangement is identical to one of these by rotation."
        },
        {
          id: "c_c_4", type: "assertion",
          tag: "Conceptual",
          assertion: "Chelate complexes are thermodynamically more stable than analogous complexes with monodentate ligands.",
          reason: "Chelation causes a large positive entropy change because replacement of several monodentate ligands by one polydentate ligand releases many free solvent/ligand molecules.",
          answer: "A",
          explanation: "Both TRUE and correctly linked. Replacing 6 NH₃ by 3 en (ethylenediamine) releases 6 NH₃ molecules → huge +ΔS → large negative ΔG = extra stability. This 'chelate effect' is primarily entropic."
        },
        {
          id: "c_c_5", type: "single",
          tag: "Real World",
          text: "CO poisoning is fatal because CO binds to the Fe²⁺ in haemoglobin. CO is lethal primarily because:",
          options: [
            "A. CO reduces Fe²⁺ to Fe⁰ permanently",
            "B. CO binds ~200–250× more strongly to Fe²⁺ than O₂",
            "C. CO reacts with the porphyrin ring, destroying it",
            "D. CO oxidises Fe²⁺ to Fe³⁺, forming methaemoglobin"
          ],
          answer: "B",
          explanation: "CO is a strong-field σ-donor and π-acceptor ligand that forms a very stable bond to haemoglobin Fe²⁺ (~240× stronger than O₂). This blocks O₂ transport. The CO-haemoglobin complex (carboxyhaemoglobin) is bright red."
        },
        {
          id: "c_c_6", type: "single",
          tag: "JEE Advanced 2017",
          text: "The hybridisation of Co in [Co(NH₃)₆]³⁺ and the geometry of the complex are:",
          options: [
            "A. d²sp³, octahedral (inner orbital)",
            "B. sp³d², octahedral (outer orbital)",
            "C. sp³, tetrahedral",
            "D. dsp², square planar"
          ],
          answer: "A",
          explanation: "Co³⁺ has d⁶ configuration. NH₃ is strong-field → low spin → two d-orbitals freed for hybridisation → d²sp³ (inner orbital complex). This gives octahedral geometry. Contrast with weak-field ligands → sp³d² (outer orbital)."
        }
      ]
    }
  },
  Mathematics: {
    color: "#f59e0b",
    bg: "#fffbeb",
    border: "#fde68a",
    icon: "📐",
    chapters: {
      "Calculus": [
        {
          id: "m_c_1", type: "single",
          tag: "JEE Advanced 2020",
          text: "The value of lim(x→0) (sin x / x)^(1/x²) is:",
          options: ["A. e^(−1/6)", "B. e^(1/6)", "C. e^(−1/3)", "D. 1"],
          answer: "A",
          explanation: "Let L = lim (sin x / x)^(1/x²). ln L = lim [ln(sin x / x)] / x². Using sin x = x − x³/6 + …, ln(sin x/x) ≈ ln(1 − x²/6 + …) ≈ −x²/6. So ln L = −1/6, hence L = e^(−1/6)."
        },
        {
          id: "m_c_2", type: "multi",
          tag: "Conceptual",
          text: "Which of the following improper integrals converge?",
          options: [
            "A. ∫₁^∞ (1/x²) dx",
            "B. ∫₁^∞ (1/x) dx",
            "C. ∫₀¹ (1/√x) dx",
            "D. ∫₀^∞ e^(−x) dx"
          ],
          answer: ["A", "C", "D"],
          explanation: "A: [−1/x]₁^∞ = 1 ✓ converges. B: [ln x]₁^∞ → ∞ diverges. C: [2√x]₀¹ = 2 ✓ converges. D: [−e^(−x)]₀^∞ = 1 ✓ converges."
        },
        {
          id: "m_c_3", type: "integer",
          tag: "JEE Advanced 2019",
          text: "Number of distinct real roots of f ′(x) = 0 where f(x) = x³ − 3x² + 3x − 1:",
          answer: 1,
          explanation: "f ′(x) = 3x² − 6x + 3 = 3(x − 1)². Discriminant = 0 → one repeated real root at x = 1. So exactly 1 distinct real root."
        },
        {
          id: "m_c_4", type: "assertion",
          tag: "Conceptual",
          assertion: "Every continuous function on a closed interval [a, b] attains both its maximum and minimum values.",
          reason: "A continuous function on a compact (closed and bounded) set is bounded and achieves its bounds.",
          answer: "A",
          explanation: "Both TRUE. This is the Extreme Value Theorem. R states the precise topological reason: [a, b] is compact, and continuous images of compact sets are compact, hence bounded and closed — so the bounds are attained."
        },
        {
          id: "m_c_5", type: "single",
          tag: "JEE Advanced 2018",
          text: "Area enclosed between y = x² and y = √x (for x ∈ [0, 1]) is:",
          options: ["A. 1/3", "B. 2/3", "C. 1/6", "D. 1/2"],
          answer: "A",
          explanation: "Area = ∫₀¹ (√x − x²) dx = [2x^(3/2)/3 − x³/3]₀¹ = 2/3 − 1/3 = 1/3."
        },
        {
          id: "m_c_6", type: "single",
          tag: "Real World",
          text: "A 5 m ladder leans against a wall. Its foot slides away at 1 m/s. When foot is 3 m from wall, speed at which top slides DOWN the wall is:",
          options: ["A. 3/4 m/s", "B. 4/3 m/s", "C. 3/5 m/s", "D. 5/3 m/s"],
          answer: "A",
          explanation: "x² + y² = 25. At x = 3: y = 4. Differentiating: 2x(dx/dt) + 2y(dy/dt) = 0 → 3(1) + 4(dy/dt) = 0 → dy/dt = −3/4 m/s. Speed of sliding down = 3/4 m/s."
        }
      ],
      "Differential Equations": [
        {
          id: "m_d_1", type: "single",
          tag: "JEE Advanced 2017",
          text: "General solution of dy/dx = (x² + y²) / (2xy) is:",
          options: ["A. y² − x² = Cx", "B. x² + y² = Cx", "C. y = x ln x + Cx", "D. xy = C"],
          answer: "A",
          explanation: "Homogeneous: y = vx → v + x dv/dx = (1 + v²)/(2v). So x dv/dx = (1 − v²)/(2v). Separating: 2v/(1−v²) dv = dx/x → −ln|1−v²| = ln x + C₁ → (1−v²)x = K → x² − y² = Cx. Equivalently y² − x² = C′x (absorbing sign into C)."
        },
        {
          id: "m_d_2", type: "multi",
          tag: "Conceptual",
          text: "Which of the following are first-order LINEAR differential equations?",
          options: [
            "A. dy/dx + P(x)y = Q(x)",
            "B. dy/dx = x² + y²",
            "C. d²y/dx² + 3y = 0",
            "D. dy/dx + y sin(x) = eˣ"
          ],
          answer: ["A", "D"],
          explanation: "Linear ODE: degree 1 in y and its derivatives. A is the standard form ✓. D has P = sin x, Q = eˣ ✓. B has y² (nonlinear). C is second-order."
        },
        {
          id: "m_d_3", type: "integer",
          tag: "JEE Advanced 2020",
          text: "The order plus degree of [1 + (dy/dx)²]^(3/2) = d²y/dx² after clearing radicals is:",
          answer: 4,
          explanation: "Cubing both sides: [1 + (dy/dx)²]³ = (d²y/dx²)². Order = 2 (highest derivative). Degree = 2 (power of d²y/dx² after clearing). Order + Degree = 2 + 2 = 4."
        },
        {
          id: "m_d_4", type: "assertion",
          tag: "Conceptual",
          assertion: "The family of all circles passing through the origin with centres on the x-axis is described by a first-order ODE.",
          reason: "A one-parameter family of curves gives rise to a first-order differential equation after eliminating the parameter by differentiation.",
          answer: "A",
          explanation: "Circles through origin with centre (a, 0): x² + y² − 2ax = 0. One parameter (a) → one differentiation to eliminate a → first-order ODE. Both TRUE and R correctly explains A."
        },
        {
          id: "m_d_5", type: "single",
          tag: "Real World",
          text: "Newton's law of cooling: dT/dt = −k(T − T_room). A body cools from 80°C to 60°C in 10 min with T_room = 20°C. How long to cool from 60°C to 40°C? (ln 1.5 ≈ 0.405, ln 2 ≈ 0.693)",
          options: ["A. ≈ 17 min", "B. ≈ 10 min", "C. ≈ 25 min", "D. ≈ 13 min"],
          answer: "A",
          explanation: "k = ln(60/40)/10 = ln(1.5)/10. Time for 60→40 (excess: 40→20): t = ln(40/20)/k = ln2/[ln1.5/10] = 10 ln 2/ln 1.5 ≈ 10×0.693/0.405 ≈ 17.1 min."
        },
        {
          id: "m_d_6", type: "single",
          tag: "JEE Advanced 2021",
          text: "The integrating factor of the linear ODE dy/dx − y/x = x² is:",
          options: ["A. 1/x", "B. x", "C. e^x", "D. 1/x²"],
          answer: "A",
          explanation: "Standard form: dy/dx + P(x)y = Q(x). Here P = −1/x. Integrating factor = e^(∫P dx) = e^(∫−1/x dx) = e^(−ln x) = 1/x."
        }
      ],
      "Matrices & Complex Numbers": [
        {
          id: "m_m_1", type: "single",
          tag: "JEE Advanced 2019",
          text: "If ω is a primitive cube root of unity (ω ≠ 1), then 1 + ω + ω² =",
          options: ["A. 0", "B. 1", "C. −1", "D. 3"],
          answer: "A",
          explanation: "ω satisfies ω³ = 1, so ω³ − 1 = (ω − 1)(ω² + ω + 1) = 0. Since ω ≠ 1, ω² + ω + 1 = 0 → 1 + ω + ω² = 0."
        },
        {
          id: "m_m_2", type: "multi",
          tag: "JEE Advanced 2022",
          text: "For a 3×3 matrix A with det(A) = 3, which are correct?",
          options: [
            "A. det(2A) = 24",
            "B. det(A⁻¹) = 1/3",
            "C. det(Aᵀ) = 3",
            "D. det(A²) = 9"
          ],
          answer: ["A", "B", "C", "D"],
          explanation: "det(kA) = k³ det(A) = 8×3 = 24 ✓. det(A⁻¹) = 1/det(A) = 1/3 ✓. det(Aᵀ) = det(A) = 3 ✓. det(A²) = [det A]² = 9 ✓. All correct."
        },
        {
          id: "m_m_3", type: "integer",
          tag: "JEE Advanced 2021",
          text: "Number of values of k for which the system x + y = 1, kx + y = k, x + ky = k² has infinitely many solutions:",
          answer: 1,
          explanation: "Δ = |1 1 0; k 1 0; 1 k −k²| ... For infinitely many solutions, all equations must be consistent and Δ = 0. Testing k=1: all equations become x+y=1 (identical). k=−1: inconsistent system. Only k=1 works → 1 value."
        },
        {
          id: "m_m_4", type: "assertion",
          tag: "Conceptual",
          assertion: "For any invertible matrix A, A·A⁻¹ = A⁻¹·A = I.",
          reason: "Matrix multiplication is always commutative.",
          answer: "C",
          explanation: "Assertion A is TRUE by definition of the inverse. Reason R is FALSE: matrix multiplication is generally NOT commutative (AB ≠ BA in general). A and A⁻¹ commute, but this is a special case, not the general rule."
        },
        {
          id: "m_m_5", type: "single",
          tag: "Real World",
          text: "Computer graphics: 2D rotation by θ counterclockwise uses matrix R(θ) = [[cosθ, −sinθ],[sinθ, cosθ]]. The combined transformation R(90°)·R(45°) is equivalent to rotation by:",
          options: ["A. 135°", "B. 45°", "C. 90°", "D. 180°"],
          answer: "A",
          explanation: "Rotation matrices compose by adding angles: R(α)·R(β) = R(α + β). So R(90°)·R(45°) = R(135°). This property (SO(2) is a commutative group) underlies all 2D graphics transformations."
        },
        {
          id: "m_m_6", type: "single",
          tag: "JEE Advanced 2018",
          text: "The modulus and argument of z = (1 + i)/(1 − i) are:",
          options: ["A. |z| = 1, arg(z) = π/2", "B. |z| = √2, arg(z) = π/4", "C. |z| = 1, arg(z) = π/4", "D. |z| = 2, arg(z) = π/2"],
          answer: "A",
          explanation: "z = (1+i)²/[(1−i)(1+i)] = (1+2i−1)/2 = 2i/2 = i. So |z| = |i| = 1, arg(z) = π/2."
        }
      ],
      "Probability": [
        {
          id: "m_p_1", type: "single",
          tag: "JEE Advanced 2019",
          text: "A fair die is rolled twice. Given that the sum is 7, the probability that the two numbers are different is:",
          options: ["A. 1", "B. 5/6", "C. 2/3", "D. 1/2"],
          answer: "A",
          explanation: "Sum = 7 outcomes: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1). All 6 pairs have distinct numbers (a number plus itself can't sum to 7 since 7 is odd). So P = 6/6 = 1."
        },
        {
          id: "m_p_2", type: "multi",
          tag: "Conceptual",
          text: "P(A) = 0.5, P(B) = 0.4, P(A ∩ B) = 0.2. Which are correct?",
          options: [
            "A. A and B are independent events",
            "B. P(A ∪ B) = 0.7",
            "C. P(A|B) = 0.5",
            "D. P(B|A) = 0.4"
          ],
          answer: ["A", "B", "C", "D"],
          explanation: "P(A)·P(B) = 0.5×0.4 = 0.2 = P(A∩B) → independent ✓. P(A∪B) = 0.5+0.4−0.2 = 0.7 ✓. P(A|B) = 0.2/0.4 = 0.5 = P(A) ✓. P(B|A) = 0.2/0.5 = 0.4 = P(B) ✓. (Last two confirm independence.)"
        },
        {
          id: "m_p_3", type: "integer",
          tag: "JEE Advanced 2020",
          text: "A bag has 4 red and 6 blue balls. Two drawn without replacement. Let p = P(both red). Value of 15p:",
          answer: 2,
          explanation: "P(both red) = (4/10)×(3/9) = 12/90 = 2/15. So 15p = 15 × 2/15 = 2."
        },
        {
          id: "m_p_4", type: "assertion",
          tag: "Conceptual",
          assertion: "If events A and B are mutually exclusive, then P(A|B) = 0.",
          reason: "Mutually exclusive means A ∩ B = ∅, so P(A ∩ B) = 0, and P(A|B) = P(A ∩ B)/P(B) = 0.",
          answer: "A",
          explanation: "Both TRUE and R correctly explains A. If A and B cannot occur simultaneously, knowing B occurred tells us A certainly did not occur."
        },
        {
          id: "m_p_5", type: "single",
          tag: "Real World",
          text: "A medical test has sensitivity 99% and specificity 95%. Disease prevalence = 1%. Using Bayes' theorem, probability a positive test means actual disease is approximately:",
          options: ["A. ≈ 17%", "B. ≈ 99%", "C. ≈ 50%", "D. ≈ 5%"],
          answer: "A",
          explanation: "P(disease | positive) = (0.99×0.01)/[(0.99×0.01)+(0.05×0.99)] = 0.0099/0.0594 ≈ 16.7%. This counterintuitive result (low prevalence → many false positives) is crucial in medical screening policy."
        },
        {
          id: "m_p_6", type: "single",
          tag: "JEE Advanced 2017",
          text: "In Binomial(n=6, p=1/3), mean and variance are respectively:",
          options: ["A. 2 and 4/3", "B. 3 and 2", "C. 2 and 2/3", "D. 6 and 4/3"],
          answer: "A",
          explanation: "Mean = np = 6×(1/3) = 2. Variance = np(1−p) = 6×(1/3)×(2/3) = 4/3."
        }
      ],
      "Conic Sections & Vectors": [
        {
          id: "m_v_1", type: "single",
          tag: "JEE Advanced 2021",
          text: "The equation of parabola with focus (2, 0) and directrix x = −2 is:",
          options: ["A. y² = 8x", "B. y² = 4x", "C. x² = 8y", "D. y² = 16x"],
          answer: "A",
          explanation: "Focus at (a, 0) = (2, 0) → a = 2. Standard parabola: y² = 4ax = 4(2)x = 8x."
        },
        {
          id: "m_v_2", type: "multi",
          tag: "Conceptual",
          text: "For a⃗ = (1, 2, 3) and b⃗ = (2, 1, −1), which are correct?",
          options: [
            "A. a⃗ · b⃗ = 1",
            "B. |a⃗ × b⃗|² + (a⃗ · b⃗)² = |a⃗|²|b⃗|²",
            "C. a⃗ and b⃗ are perpendicular",
            "D. |a⃗| = √14"
          ],
          answer: ["A", "B", "D"],
          explanation: "a⃗·b⃗ = 2+2−3 = 1 ✓. Lagrange identity: |a×b|²+(a·b)² = |a|²|b|² = 14×6 = 84 ✓. Not perpendicular (dot product = 1 ≠ 0) ✗. |a⃗| = √(1+4+9) = √14 ✓."
        },
        {
          id: "m_v_3", type: "integer",
          tag: "JEE Advanced 2019",
          text: "Number of tangents from point (1, 2) to ellipse x²/4 + y²/3 = 1 (check if point is inside or outside):",
          answer: 2,
          explanation: "Substitute (1,2): 1/4 + 4/3 = 0.25 + 1.33 = 1.58 > 1 → point is OUTSIDE the ellipse. From any external point, exactly 2 tangents can be drawn to an ellipse."
        },
        {
          id: "m_v_4", type: "assertion",
          tag: "Conceptual",
          assertion: "The angle θ between two lines with direction cosines (l₁, m₁, n₁) and (l₂, m₂, n₂) satisfies cos θ = |l₁l₂ + m₁m₂ + n₁n₂|.",
          reason: "Direction cosines satisfy l² + m² + n² = 1, so direction cosine vectors are unit vectors and their dot product gives cos θ directly.",
          answer: "A",
          explanation: "Both TRUE and correctly linked. Since direction cosine vectors are unit vectors (|v̂|=1), their dot product = cos(angle). The absolute value handles the two possible directions of a line."
        },
        {
          id: "m_v_5", type: "single",
          tag: "Real World",
          text: "A ball thrown horizontally with speed v₀ from a cliff. Taking x horizontal and y downward, the trajectory equation is:",
          options: ["A. y = gx²/(2v₀²)", "B. y = gx/v₀", "C. y = v₀x/g", "D. y = g²x/(2v₀²)"],
          answer: "A",
          explanation: "x = v₀t → t = x/v₀. y = ½gt² = ½g(x/v₀)² = gx²/(2v₀²). This confirms projectile motion follows a parabolic path — a conic section."
        },
        {
          id: "m_v_6", type: "single",
          tag: "JEE Advanced 2020",
          text: "Eccentricity of the hyperbola x²/9 − y²/16 = 1 is:",
          options: ["A. 5/3", "B. 4/3", "C. √7/3", "D. √25/4"],
          answer: "A",
          explanation: "a² = 9, b² = 16. For hyperbola: c² = a² + b² = 25 → c = 5. e = c/a = 5/3."
        }
      ]
    }
  }
};

// ============================================================
// HELPERS
// ============================================================
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pickQuestions(chapterQs) {
  const shuffled = shuffle(chapterQs);
  const count = 3 + Math.floor(Math.random() * 3); // 3, 4, or 5
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

function isCorrect(q, answer) {
  if (answer === undefined || answer === null || answer === "") return false;
  if (q.type === "multi") {
    if (!Array.isArray(answer) || answer.length === 0) return false;
    const sorted = (arr) => [...arr].sort().join(",");
    return sorted(answer) === sorted(q.answer);
  }
  if (q.type === "integer") {
    return parseInt(answer, 10) === q.answer;
  }
  return answer === q.answer;
}

function clarityColor(score) {
  if (score === null || score === undefined) return "#94a3b8";
  if (score >= 70) return "#22c55e";
  if (score >= 40) return "#f59e0b";
  return "#ef4444";
}

function clarityLabel(score) {
  if (score === null || score === undefined) return "Not attempted";
  if (score >= 70) return "Strong";
  if (score >= 40) return "Developing";
  return "Needs Work";
}

// ============================================================
// AR OPTIONS
// ============================================================
const AR_OPTIONS = [
  "A. Both A and R are true; R is the correct explanation of A",
  "B. Both A and R are true; R is NOT the correct explanation of A",
  "C. A is true; R is false",
  "D. A is false; R is true (or both false)"
];

// ============================================================
// COMPONENTS
// ============================================================

function TagBadge({ tag }) {
  const isPY = tag?.includes("JEE");
  const isRW = tag?.includes("Real World");
  return (
    <span style={{
      display: "inline-block",
      padding: "2px 8px",
      borderRadius: 20,
      fontSize: 11,
      fontWeight: 600,
      background: isPY ? "#dbeafe" : isRW ? "#d1fae5" : "#f3f4f6",
      color: isPY ? "#1d4ed8" : isRW ? "#065f46" : "#6b7280",
      marginBottom: 8
    }}>
      {isPY ? "📅 " : isRW ? "🌍 " : "💡 "}{tag || "Conceptual"}
    </span>
  );
}

function QuestionCard({ q, index, answer, onAnswer, submitted }) {
  const correct = submitted ? isCorrect(q, answer) : null;

  const cardBorder = submitted
    ? correct ? "2px solid #22c55e" : "2px solid #ef4444"
    : "2px solid #e2e8f0";

  return (
    <div style={{
      background: "#fff",
      border: cardBorder,
      borderRadius: 16,
      padding: "24px",
      marginBottom: 20,
      boxShadow: "0 2px 8px rgba(0,0,0,0.06)"
    }}>
      <div style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 12 }}>
        <div style={{
          minWidth: 32, height: 32, borderRadius: "50%",
          background: submitted ? (correct ? "#22c55e" : "#ef4444") : "#3b82f6",
          color: "#fff", fontWeight: 700, fontSize: 14,
          display: "flex", alignItems: "center", justifyContent: "center"
        }}>
          {index + 1}
        </div>
        <div style={{ flex: 1 }}>
          <TagBadge tag={q.tag} />
          <div style={{ marginBottom: 4 }}>
            <span style={{
              fontSize: 11, fontWeight: 600, letterSpacing: 1,
              color: "#6b7280", background: "#f1f5f9", padding: "2px 8px", borderRadius: 4
            }}>
              {q.type === "single" ? "MCQ (Single Correct)" :
               q.type === "multi" ? "MCQ (Multiple Correct)" :
               q.type === "integer" ? "Integer Type" : "Assertion-Reasoning"}
            </span>
          </div>
          <p style={{ margin: "8px 0 16px", fontSize: 15, lineHeight: 1.6, color: "#1e293b", fontWeight: 500 }}>
            {q.text}
          </p>

          {/* Assertion-Reasoning display */}
          {q.type === "assertion" && (
            <div style={{ marginBottom: 16 }}>
              <div style={{ background: "#f8fafc", borderLeft: "4px solid #3b82f6", padding: "10px 14px", marginBottom: 8, borderRadius: "0 8px 8px 0" }}>
                <span style={{ fontWeight: 700, color: "#3b82f6" }}>Assertion (A): </span>
                <span style={{ color: "#334155" }}>{q.assertion}</span>
              </div>
              <div style={{ background: "#f8fafc", borderLeft: "4px solid #8b5cf6", padding: "10px 14px", borderRadius: "0 8px 8px 0" }}>
                <span style={{ fontWeight: 700, color: "#8b5cf6" }}>Reason (R): </span>
                <span style={{ color: "#334155" }}>{q.reason}</span>
              </div>
            </div>
          )}

          {/* Single MCQ / AR options */}
          {(q.type === "single" || q.type === "assertion") && (
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {(q.type === "assertion" ? AR_OPTIONS : q.options).map((opt, i) => {
                const letter = String.fromCharCode(65 + i);
                const isSelected = answer === letter;
                const isCorrectOpt = submitted && letter === q.answer;
                const isWrongSel = submitted && isSelected && letter !== q.answer;

                return (
                  <button
                    key={i}
                    onClick={() => !submitted && onAnswer(letter)}
                    style={{
                      padding: "12px 16px",
                      borderRadius: 10,
                      border: isCorrectOpt ? "2px solid #22c55e" :
                              isWrongSel ? "2px solid #ef4444" :
                              isSelected ? "2px solid #3b82f6" : "2px solid #e2e8f0",
                      background: isCorrectOpt ? "#f0fdf4" : isWrongSel ? "#fef2f2" :
                                  isSelected ? "#eff6ff" : "#fafafa",
                      textAlign: "left", cursor: submitted ? "default" : "pointer",
                      fontSize: 14, color: "#1e293b", lineHeight: 1.5,
                      transition: "all 0.15s"
                    }}
                  >
                    {opt}
                    {isCorrectOpt && submitted && <span style={{ float: "right" }}>✅</span>}
                    {isWrongSel && <span style={{ float: "right" }}>❌</span>}
                  </button>
                );
              })}
            </div>
          )}

          {/* Multi-correct */}
          {q.type === "multi" && (
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {q.options.map((opt, i) => {
                const letter = String.fromCharCode(65 + i);
                const isSelected = Array.isArray(answer) && answer.includes(letter);
                const isCorrectOpt = submitted && q.answer.includes(letter);
                const isWrongSel = submitted && isSelected && !q.answer.includes(letter);

                return (
                  <button
                    key={i}
                    onClick={() => {
                      if (submitted) return;
                      const cur = Array.isArray(answer) ? answer : [];
                      const next = cur.includes(letter) ? cur.filter(l => l !== letter) : [...cur, letter];
                      onAnswer(next);
                    }}
                    style={{
                      padding: "12px 16px",
                      borderRadius: 10,
                      border: isCorrectOpt ? "2px solid #22c55e" :
                              isWrongSel ? "2px solid #ef4444" :
                              isSelected ? "2px solid #8b5cf6" : "2px solid #e2e8f0",
                      background: isCorrectOpt ? "#f0fdf4" : isWrongSel ? "#fef2f2" :
                                  isSelected ? "#f5f3ff" : "#fafafa",
                      textAlign: "left", cursor: submitted ? "default" : "pointer",
                      fontSize: 14, color: "#1e293b", lineHeight: 1.5,
                      display: "flex", alignItems: "center", gap: 10
                    }}
                  >
                    <span style={{
                      width: 20, height: 20, borderRadius: 4, flexShrink: 0,
                      border: isCorrectOpt ? "2px solid #22c55e" : isWrongSel ? "2px solid #ef4444" :
                              isSelected ? "2px solid #8b5cf6" : "2px solid #cbd5e1",
                      background: isSelected ? (submitted ? (isCorrectOpt ? "#22c55e" : "#ef4444") : "#8b5cf6") : "#fff",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "#fff", fontSize: 12, fontWeight: 700
                    }}>
                      {isSelected ? "✓" : ""}
                    </span>
                    <span style={{ flex: 1 }}>{opt}</span>
                  </button>
                );
              })}
              {!submitted && (
                <p style={{ fontSize: 12, color: "#94a3b8", marginTop: 4 }}>
                  ☑ Select all correct options
                </p>
              )}
            </div>
          )}

          {/* Integer type */}
          {q.type === "integer" && (
            <div>
              <input
                type="number"
                value={answer !== undefined ? answer : ""}
                onChange={e => !submitted && onAnswer(e.target.value)}
                disabled={submitted}
                placeholder="Enter integer answer (0–99)"
                style={{
                  padding: "12px 16px", borderRadius: 10, fontSize: 18, fontWeight: 700,
                  width: 200, border: submitted
                    ? (correct ? "2px solid #22c55e" : "2px solid #ef4444")
                    : "2px solid #3b82f6",
                  background: submitted ? (correct ? "#f0fdf4" : "#fef2f2") : "#fff",
                  outline: "none", color: "#1e293b"
                }}
              />
              {submitted && (
                <span style={{
                  marginLeft: 12, fontSize: 14, fontWeight: 600,
                  color: correct ? "#22c55e" : "#ef4444"
                }}>
                  {correct ? "✅ Correct!" : `❌ Answer: ${q.answer}`}
                </span>
              )}
            </div>
          )}

          {/* Explanation */}
          {submitted && (
            <div style={{
              marginTop: 16, padding: "14px 16px", borderRadius: 10,
              background: "#f8fafc", borderLeft: "4px solid #64748b"
            }}>
              <p style={{ margin: 0, fontSize: 13, color: "#475569", lineHeight: 1.7 }}>
                <strong>📖 Explanation: </strong>{q.explanation}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ============================================================
// SCORE RING
// ============================================================
function ScoreRing({ score, size = 80, strokeWidth = 8 }) {
  const r = (size - strokeWidth) / 2;
  const circ = 2 * Math.PI * r;
  const dash = score !== null ? (score / 100) * circ : 0;
  const color = clarityColor(score);
  const cx = size / 2;
  return (
    <svg width={size} height={size}>
      {/* Background track */}
      <circle cx={cx} cy={cx} r={r} fill="none" stroke="#e2e8f0" strokeWidth={strokeWidth} />
      {/* Progress arc — starts at top (rotate -90°) */}
      <circle
        cx={cx} cy={cx} r={r} fill="none"
        stroke={color} strokeWidth={strokeWidth}
        strokeDasharray={`${dash} ${circ}`}
        strokeLinecap="round"
        transform={`rotate(-90 ${cx} ${cx})`}
        style={{ transition: "stroke-dasharray 0.6s ease" }}
      />
      {/* Centre label */}
      <text
        x={cx} y={cx}
        textAnchor="middle" dominantBaseline="central"
        fontSize={size / 5} fontWeight="700" fill={color}
      >
        {score !== null ? `${Math.round(score)}%` : "—"}
      </text>
    </svg>
  );
}

// ============================================================
// NOTES — SVG MIND MAP (generated on the fly)
// ============================================================
function MindMap({ concept, subjectColor }) {
  const W = 700, H = 420, cx = W / 2, cy = H / 2;
  const branches = concept.branches || [];
  // 6 branch angles, spread around center
  const angles = [0, 60, 120, 180, 240, 300];
  const palette = ["#3b82f6","#10b981","#f59e0b","#ef4444","#8b5cf6","#ec4899"];
  const R = 155; // branch end radius
  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", fontFamily: "'Inter',sans-serif" }}>
      {/* background */}
      <rect width={W} height={H} fill="#fafafa" rx="12" />
      {/* branches */}
      {angles.map((deg, i) => {
        const rad = (deg * Math.PI) / 180;
        const bx = cx + R * Math.cos(rad);
        const by = cy + R * Math.sin(rad);
        const mx = cx + (R * 0.52) * Math.cos(rad);
        const my = cy + (R * 0.52) * Math.sin(rad);
        const col = palette[i % palette.length];
        const label = branches[i] || "";
        // wrap label at 18 chars
        const lines = label.match(/.{1,18}(\s|$)/g) || [label];
        return (
          <g key={i}>
            <line x1={cx} y1={cy} x2={bx} y2={by} stroke={col} strokeWidth="2.5" strokeDasharray="5,3" opacity="0.6" />
            <ellipse cx={bx} cy={by} rx="58" ry="24" fill={col} opacity="0.15" stroke={col} strokeWidth="1.5" />
            {lines.map((ln, li) => (
              <text key={li} x={bx} y={by - (lines.length - 1) * 7 + li * 14}
                textAnchor="middle" dominantBaseline="middle"
                fontSize="10.5" fontWeight="600" fill={col}>
                {ln.trim()}
              </text>
            ))}
          </g>
        );
      })}
      {/* center node */}
      <ellipse cx={cx} cy={cy} rx="68" ry="32" fill={subjectColor} />
      <text x={cx} y={cy - 6} textAnchor="middle" dominantBaseline="middle"
        fontSize="12" fontWeight="800" fill="#fff">
        {concept.name.length > 18 ? concept.name.slice(0, 18) + "…" : concept.name}
      </text>
      <text x={cx} y={cy + 10} textAnchor="middle" dominantBaseline="middle" fontSize="9" fill="#fff" opacity="0.85">
        Quick Revision
      </text>
    </svg>
  );
}

// ============================================================
// NOTES — REFERENCE SHEET PAGE 2
// ============================================================
function RefSheet({ concept, subjectColor, chapterName }) {
  const col = subjectColor;
  return (
    <div style={{ padding: "20px 24px", background: "#fff", borderRadius: 12, border: "1px solid #e2e8f0" }}>
      {/* Key Formulas */}
      <div style={{ marginBottom: 16 }}>
        <div style={{ fontSize: 13, fontWeight: 800, color: col, marginBottom: 8, letterSpacing: 0.3 }}>
          📐 KEY FORMULAS
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
          {(concept.formulas || []).map((f, i) => (
            <div key={i} style={{
              background: "#f8fafc", border: `1.5px solid ${col}22`,
              borderLeft: `4px solid ${col}`, borderRadius: 8,
              padding: "8px 12px", fontSize: 13, fontWeight: 700,
              color: "#1e293b", fontFamily: "monospace"
            }}>
              {f}
            </div>
          ))}
        </div>
      </div>

      {/* Trick for revision */}
      <div style={{ marginBottom: 16 }}>
        <div style={{ fontSize: 13, fontWeight: 800, color: "#f59e0b", marginBottom: 8, letterSpacing: 0.3 }}>
          💡 REVISION TRICK / MNEMONIC
        </div>
        <div style={{
          background: "#fffbeb", border: "1.5px solid #fde68a", borderRadius: 8,
          padding: "10px 14px", fontSize: 13, color: "#92400e", lineHeight: 1.6
        }}>
          {concept.t || "Remember the key formula and its conditions."}
        </div>
      </div>

      {/* Common mistake */}
      <div style={{ marginBottom: 16 }}>
        <div style={{ fontSize: 13, fontWeight: 800, color: "#ef4444", marginBottom: 8, letterSpacing: 0.3 }}>
          ⚠️ COMMON MISTAKE TO AVOID
        </div>
        <div style={{
          background: "#fef2f2", border: "1.5px solid #fecaca", borderRadius: 8,
          padding: "10px 14px", fontSize: 13, color: "#991b1b", lineHeight: 1.6
        }}>
          ❌ {concept.m || "Watch your sign conventions and units."}
        </div>
      </div>

      {/* Memory anchor */}
      <div>
        <div style={{ fontSize: 13, fontWeight: 800, color: "#8b5cf6", marginBottom: 8, letterSpacing: 0.3 }}>
          🧠 IF YOU REMEMBER ONE THING...
        </div>
        <div style={{
          background: "#faf5ff", border: "1.5px solid #ddd6fe", borderRadius: 8,
          padding: "10px 14px", fontSize: 13, color: "#6d28d9", fontWeight: 600, lineHeight: 1.6
        }}>
          {(concept.formulas || [])[0] || concept.name}
        </div>
      </div>
    </div>
  );
}

// ============================================================
// NOTES — PAGE 3: MEMORY ANCHORS + JEE TIPS
// ============================================================
function MemoryPage({ concept, subjectColor, chapterName }) {
  const col = subjectColor;
  // Build 5 bullet points from formulas + trick
  const bullets = [
    ...(concept.formulas || []).slice(0, 3),
    concept.t ? "💡 " + concept.t : null,
    concept.m ? "⚠️ Avoid: " + concept.m : null,
  ].filter(Boolean).slice(0, 5);

  return (
    <div style={{ padding: "20px 24px", background: "#fff", borderRadius: 12, border: "1px solid #e2e8f0" }}>
      <div style={{ fontSize: 13, fontWeight: 800, color: col, marginBottom: 12, letterSpacing: 0.3 }}>
        ⚡ 60-SECOND REVISION — {concept.name.toUpperCase()}
      </div>
      <ol style={{ paddingLeft: 20, margin: 0 }}>
        {bullets.map((b, i) => (
          <li key={i} style={{
            fontSize: 13, color: "#1e293b", lineHeight: 1.7, marginBottom: 6,
            borderBottom: i < bullets.length - 1 ? "1px dashed #e2e8f0" : "none",
            paddingBottom: 6
          }}>
            {b}
          </li>
        ))}
      </ol>

      {/* JEE Tip banner */}
      <div style={{
        marginTop: 18, background: `linear-gradient(135deg, ${col}15, ${col}05)`,
        border: `1.5px solid ${col}40`, borderRadius: 10, padding: "12px 16px"
      }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: col, marginBottom: 4 }}>
          🎯 JEE ADVANCED STRATEGY
        </div>
        <div style={{ fontSize: 12, color: "#475569", lineHeight: 1.6 }}>
          For <strong>{concept.name}</strong>: Check all conditions before applying formulas.
          Integer type questions often test edge cases. Multi-correct answers may involve
          this concept combined with <em>{chapterName}</em> fundamentals.
        </div>
      </div>

      {/* Formula Flash Cards */}
      <div style={{ marginTop: 14 }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: "#64748b", marginBottom: 8 }}>
          📇 FORMULA FLASH CARDS
        </div>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {(concept.formulas || []).map((f, i) => (
            <div key={i} style={{
              background: i === 0 ? col : "#f1f5f9",
              color: i === 0 ? "#fff" : "#1e293b",
              borderRadius: 20, padding: "4px 12px",
              fontSize: 12, fontWeight: 700, fontFamily: "monospace"
            }}>
              {f}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ============================================================
// NOTES PAGE — Chapter browser + Concept viewer
// ============================================================
function NotesPage() {
  const subjects = Object.keys(NOTES_SYLLABUS);
  const [noteSubject, setNoteSubject] = useState(subjects[0]);
  const [noteChapterIdx, setNoteChapterIdx] = useState(0);
  const [activeConcept, setActiveConcept] = useState(null);
  const [viewPage, setViewPage] = useState(1); // 1=mindmap, 2=refsheet, 3=memory
  const [selected, setSelected] = useState(new Set());

  const subjectData = NOTES_SYLLABUS[noteSubject];
  const chapters = subjectData.chapters;
  const chapter = chapters[noteChapterIdx];
  const col = subjectData.color;

  const toggleSelect = (cName) => {
    setSelected(prev => {
      const n = new Set(prev);
      n.has(cName) ? n.delete(cName) : n.add(cName);
      return n;
    });
  };

  const handlePrint = () => {
    if (!activeConcept) return;
    window.print();
  };

  return (
    <div style={{ minHeight: "100vh", background: "#f8fafc", fontFamily: "'Inter',system-ui,sans-serif" }}>
      {/* Print-only styles */}
      <style>{`
        @media print {
          body > * { display: none !important; }
          #notes-print-area { display: block !important; }
          .no-print { display: none !important; }
          @page { margin: 15mm; size: A4; }
        }
        #notes-print-area { display: none; }
      `}</style>

      {/* Print area (hidden on screen) */}
      {activeConcept && (
        <div id="notes-print-area">
          <div style={{ marginBottom: 24 }}>
            <div style={{ fontSize: 18, fontWeight: 800, color: col, marginBottom: 4 }}>
              {noteSubject} · {chapter.name}
            </div>
            <div style={{ fontSize: 24, fontWeight: 900, color: "#1e293b", marginBottom: 16 }}>
              {activeConcept.name}
            </div>
            <MindMap concept={activeConcept} subjectColor={col} />
          </div>
          <div style={{ pageBreakBefore: "always" }}>
            <RefSheet concept={activeConcept} subjectColor={col} chapterName={chapter.name} />
          </div>
          <div style={{ pageBreakBefore: "always" }}>
            <MemoryPage concept={activeConcept} subjectColor={col} chapterName={chapter.name} />
          </div>
        </div>
      )}

      {/* Header */}
      <div style={{ background: `linear-gradient(135deg, #1e3a5f 0%, ${col} 100%)`, padding: "24px 32px", color: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ margin: 0, fontSize: 22, fontWeight: 800 }}>📖 Concept Notes & Mind Maps</h2>
          <p style={{ margin: "4px 0 0", opacity: 0.85, fontSize: 14 }}>
            Click any concept → view 3-page notes → print as PDF
          </p>
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "24px 20px", display: "flex", gap: 20 }}>
        {/* LEFT — Chapter Browser */}
        <div className="no-print" style={{ width: 260, flexShrink: 0 }}>
          {/* Subject tabs */}
          <div style={{ display: "flex", gap: 6, marginBottom: 14 }}>
            {subjects.map(s => (
              <button key={s} onClick={() => { setNoteSubject(s); setNoteChapterIdx(0); setActiveConcept(null); }}
                style={{
                  flex: 1, padding: "7px 4px", borderRadius: 8, border: "none", cursor: "pointer",
                  background: noteSubject === s ? NOTES_SYLLABUS[s].color : "#e2e8f0",
                  color: noteSubject === s ? "#fff" : "#64748b",
                  fontSize: 11, fontWeight: 700
                }}>
                {NOTES_SYLLABUS[s].icon} {s.slice(0, 4)}
              </button>
            ))}
          </div>

          {/* Chapter list */}
          <div style={{ background: "#fff", borderRadius: 12, boxShadow: "0 2px 8px rgba(0,0,0,0.06)", overflow: "hidden" }}>
            {chapters.map((ch, i) => (
              <button key={i} onClick={() => { setNoteChapterIdx(i); setActiveConcept(null); }}
                style={{
                  display: "block", width: "100%", textAlign: "left",
                  padding: "10px 14px", border: "none", borderBottom: "1px solid #f1f5f9",
                  cursor: "pointer", fontSize: 12, fontWeight: 600,
                  background: noteChapterIdx === i ? `${col}15` : "#fff",
                  color: noteChapterIdx === i ? col : "#374151",
                  borderLeft: noteChapterIdx === i ? `3px solid ${col}` : "3px solid transparent"
                }}>
                {ch.name}
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT — Concept grid + Viewer */}
        <div style={{ flex: 1, minWidth: 0 }}>
          {/* Concept grid */}
          <div className="no-print" style={{ marginBottom: 16 }}>
            <div style={{ fontSize: 15, fontWeight: 800, color: "#1e293b", marginBottom: 10 }}>
              {chapter.name}
              <span style={{ marginLeft: 8, fontSize: 11, color: "#94a3b8", fontWeight: 400 }}>
                {chapter.concepts.length} concepts
              </span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(170px,1fr))", gap: 10 }}>
              {chapter.concepts.map((c, ci) => (
                <button key={ci}
                  onClick={() => { setActiveConcept(c); setViewPage(1); }}
                  style={{
                    textAlign: "left", padding: "12px 14px", borderRadius: 10, border: "none", cursor: "pointer",
                    background: activeConcept?.name === c.name ? col : "#fff",
                    color: activeConcept?.name === c.name ? "#fff" : "#1e293b",
                    boxShadow: activeConcept?.name === c.name
                      ? `0 4px 14px ${col}50`
                      : "0 2px 6px rgba(0,0,0,0.06)",
                    fontSize: 13, fontWeight: 700,
                    borderLeft: activeConcept?.name === c.name ? "none" : `3px solid ${col}`,
                    transition: "all 0.2s"
                  }}>
                  {c.name}
                  {(c.formulas || []).length > 0 && (
                    <div style={{
                      fontSize: 10, marginTop: 4, opacity: 0.75,
                      color: activeConcept?.name === c.name ? "#fff" : "#64748b",
                      fontFamily: "monospace"
                    }}>
                      {c.formulas[0]}
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Concept viewer */}
          {activeConcept ? (
            <div>
              {/* Page tabs */}
              <div className="no-print" style={{ display: "flex", gap: 8, marginBottom: 14, alignItems: "center" }}>
                {[
                  { n: 1, label: "🗺 Mind Map" },
                  { n: 2, label: "📋 Reference Sheet" },
                  { n: 3, label: "⚡ Memory Page" }
                ].map(({ n, label }) => (
                  <button key={n} onClick={() => setViewPage(n)}
                    style={{
                      padding: "7px 16px", borderRadius: 20, border: "none", cursor: "pointer",
                      background: viewPage === n ? col : "#e2e8f0",
                      color: viewPage === n ? "#fff" : "#64748b",
                      fontSize: 13, fontWeight: 700
                    }}>
                    {label}
                  </button>
                ))}
                <div style={{ flex: 1 }} />
                <button onClick={handlePrint}
                  style={{
                    padding: "7px 18px", borderRadius: 20,
                    background: "#1e293b", color: "#fff",
                    border: "none", cursor: "pointer", fontSize: 13, fontWeight: 700
                  }}>
                  🖨 Print All 3 Pages
                </button>
              </div>

              {/* Concept header */}
              <div style={{
                background: col, color: "#fff", borderRadius: "12px 12px 0 0",
                padding: "14px 20px", display: "flex", alignItems: "center", gap: 12
              }}>
                <div>
                  <div style={{ fontSize: 11, opacity: 0.85 }}>{noteSubject} · {chapter.name}</div>
                  <div style={{ fontSize: 18, fontWeight: 800 }}>{activeConcept.name}</div>
                </div>
                <div style={{ marginLeft: "auto", fontSize: 11, opacity: 0.8 }}>
                  Page {viewPage} of 3
                </div>
              </div>

              {/* Page content */}
              <div style={{ border: `2px solid ${col}`, borderTop: "none", borderRadius: "0 0 12px 12px", overflow: "hidden" }}>
                {viewPage === 1 && (
                  <div style={{ padding: 20, background: "#fff" }}>
                    <MindMap concept={activeConcept} subjectColor={col} />
                    <div style={{ marginTop: 12, fontSize: 11, color: "#94a3b8", textAlign: "center" }}>
                      Page 1 of 3 — Concept Mind Map
                    </div>
                  </div>
                )}
                {viewPage === 2 && (
                  <RefSheet concept={activeConcept} subjectColor={col} chapterName={chapter.name} />
                )}
                {viewPage === 3 && (
                  <MemoryPage concept={activeConcept} subjectColor={col} chapterName={chapter.name} />
                )}
              </div>
            </div>
          ) : (
            <div style={{
              textAlign: "center", padding: "60px 20px",
              background: "#fff", borderRadius: 16, boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
              color: "#94a3b8"
            }}>
              <div style={{ fontSize: 48, marginBottom: 12 }}>📖</div>
              <div style={{ fontSize: 16, fontWeight: 600 }}>Select a concept to view notes</div>
              <div style={{ fontSize: 13, marginTop: 4 }}>
                Mind map · Reference sheet · Memory anchors — all 3 pages ready to print
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ============================================================
// MAIN APP
// ============================================================
export default function App() {
  const [activeTab, setActiveTab] = useState("quiz"); // quiz | notes
  const [page, setPage] = useState("home"); // home | quiz | results
  const [subject, setSubject] = useState("Physics");
  const [chapter, setChapter] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  // history: { "Physics::Kinematics & Laws of Motion": [{ score, total, pct }] }
  const [history, setHistory] = useState({});

  const startQuiz = useCallback((subj, chap) => {
    const qs = QUESTION_BANK[subj].chapters[chap];
    setSubject(subj);
    setChapter(chap);
    setQuestions(pickQuestions(qs));
    setAnswers({});
    setSubmitted(false);
    setPage("quiz");
  }, []);

  const handleSubmit = useCallback(() => {
    let correct = 0;
    questions.forEach(q => {
      if (isCorrect(q, answers[q.id])) correct++;
    });
    const total = questions.length;
    const pct = Math.round((correct / total) * 100);
    const key = `${subject}::${chapter}`;
    setHistory(h => ({
      ...h,
      [key]: [...(h[key] || []), { correct, total, pct }]
    }));
    setSubmitted(true);
  }, [questions, answers, subject, chapter]);

  const getChapterScore = useCallback((subj, chap) => {
    const key = `${subj}::${chap}`;
    const attempts = history[key];
    if (!attempts || attempts.length === 0) return null;
    const avg = attempts.reduce((s, a) => s + a.pct, 0) / attempts.length;
    return Math.round(avg);
  }, [history]);

  const overallScore = useMemo(() => {
    let total = 0, count = 0;
    Object.keys(QUESTION_BANK).forEach(subj => {
      Object.keys(QUESTION_BANK[subj].chapters).forEach(chap => {
        const s = getChapterScore(subj, chap);
        if (s !== null) { total += s; count++; }
      });
    });
    return count > 0 ? Math.round(total / count) : null;
  }, [getChapterScore]);

  const totalAttempted = useMemo(() => {
    return Object.keys(history).filter(k => history[k]?.length > 0).length;
  }, [history]);

  const dashData = useMemo(() => {
    const data = [];
    Object.keys(QUESTION_BANK).forEach(subj => {
      Object.keys(QUESTION_BANK[subj].chapters).forEach(chap => {
        const score = getChapterScore(subj, chap);
        if (score !== null) {
          data.push({ name: chap.length > 18 ? chap.slice(0, 18) + "…" : chap, score, subject: subj });
        }
      });
    });
    return data;
  }, [getChapterScore]);

  // ---- NOTES TAB ----
  if (activeTab === "notes") return <NotesPage />;

  // ---- HOME PAGE ----
  if (page === "home") {
    const subjectData = Object.keys(QUESTION_BANK).map(subj => {
      const chapters = Object.keys(QUESTION_BANK[subj].chapters);
      const scores = chapters.map(c => getChapterScore(subj, c)).filter(s => s !== null);
      const avg = scores.length > 0 ? Math.round(scores.reduce((a,b) => a+b, 0) / scores.length) : null;
      return { name: subj, avg, attempted: scores.length, total: chapters.length, ...QUESTION_BANK[subj] };
    });

    return (
      <div style={{ minHeight: "100vh", background: "#f8fafc", fontFamily: "'Inter', system-ui, sans-serif" }}>
        {/* Header */}
        <div style={{
          background: "linear-gradient(135deg, #1e3a5f 0%, #1d4ed8 100%)",
          padding: "32px 32px 28px", color: "#fff"
        }}>
          <div style={{ maxWidth: 960, margin: "0 auto" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12, marginBottom: 8 }}>
              <h1 style={{ margin: 0, fontSize: 28, fontWeight: 800, letterSpacing: -0.5 }}>
                ⚛️ JEE Advanced Prep
              </h1>
              {/* Tab switcher */}
              <div style={{ display: "flex", background: "rgba(255,255,255,0.15)", borderRadius: 12, padding: 4, gap: 4 }}>
                {[{ id: "quiz", label: "🎯 Quiz Practice" }, { id: "notes", label: "📖 Concept Notes" }].map(t => (
                  <button key={t.id} onClick={() => setActiveTab(t.id)}
                    style={{
                      padding: "8px 18px", borderRadius: 8, border: "none", cursor: "pointer",
                      background: activeTab === t.id ? "#fff" : "transparent",
                      color: activeTab === t.id ? "#1e3a5f" : "#fff",
                      fontSize: 13, fontWeight: 700, transition: "all 0.2s"
                    }}>
                    {t.label}
                  </button>
                ))}
              </div>
            </div>
            <p style={{ margin: "4px 0 24px", opacity: 0.85, fontSize: 15 }}>
              Concept clarity practice — Physics · Chemistry · Mathematics
            </p>
            <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
              <div style={{ background: "rgba(255,255,255,0.15)", borderRadius: 14, padding: "14px 20px", minWidth: 140 }}>
                <div style={{ fontSize: 28, fontWeight: 800 }}>{overallScore !== null ? `${overallScore}%` : "—"}</div>
                <div style={{ fontSize: 12, opacity: 0.85, marginTop: 2 }}>Overall Clarity</div>
              </div>
              <div style={{ background: "rgba(255,255,255,0.15)", borderRadius: 14, padding: "14px 20px", minWidth: 140 }}>
                <div style={{ fontSize: 28, fontWeight: 800 }}>{totalAttempted}</div>
                <div style={{ fontSize: 12, opacity: 0.85, marginTop: 2 }}>Chapters Attempted</div>
              </div>
              <div style={{ background: "rgba(255,255,255,0.15)", borderRadius: 14, padding: "14px 20px", minWidth: 140 }}>
                <div style={{ fontSize: 28, fontWeight: 800 }}>15</div>
                <div style={{ fontSize: 12, opacity: 0.85, marginTop: 2 }}>Total Chapters</div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ maxWidth: 960, margin: "0 auto", padding: "32px 24px" }}>
          {/* Dashboard chart */}
          {dashData.length > 0 && (
            <div style={{ background: "#fff", borderRadius: 16, padding: 24, marginBottom: 32, boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
              <h2 style={{ margin: "0 0 20px", fontSize: 18, fontWeight: 700, color: "#1e293b" }}>
                📊 Chapter Clarity Dashboard
              </h2>
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={dashData} margin={{ top: 5, right: 10, left: -20, bottom: 60 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                  <XAxis dataKey="name" tick={{ fontSize: 11 }} angle={-40} textAnchor="end" interval={0} />
                  <YAxis domain={[0, 100]} tick={{ fontSize: 12 }} />
                  <Tooltip
                    formatter={(val) => [`${val}%`, "Clarity"]}
                    contentStyle={{ borderRadius: 10, border: "none", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
                  />
                  <Bar dataKey="score" radius={[6, 6, 0, 0]}>
                    {dashData.map((entry, idx) => (
                      <Cell key={idx} fill={clarityColor(entry.score)} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
              <div style={{ display: "flex", gap: 16, marginTop: 12, flexWrap: "wrap" }}>
                {[["Strong (≥70%)", "#22c55e"], ["Developing (40-69%)", "#f59e0b"], ["Needs Work (<40%)", "#ef4444"]].map(([label, color]) => (
                  <div key={label} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "#64748b" }}>
                    <span style={{ width: 12, height: 12, borderRadius: 3, background: color, display: "inline-block" }} />
                    {label}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Subject tabs */}
          <div style={{ display: "flex", gap: 12, marginBottom: 24, flexWrap: "wrap" }}>
            {Object.keys(QUESTION_BANK).map(subj => (
              <button
                key={subj}
                onClick={() => setSubject(subj)}
                style={{
                  padding: "10px 22px", borderRadius: 30, fontWeight: 700, fontSize: 15,
                  border: "2px solid " + (subject === subj ? QUESTION_BANK[subj].color : "#e2e8f0"),
                  background: subject === subj ? QUESTION_BANK[subj].color : "#fff",
                  color: subject === subj ? "#fff" : "#64748b",
                  cursor: "pointer", transition: "all 0.2s"
                }}
              >
                {QUESTION_BANK[subj].icon} {subj}
              </button>
            ))}
          </div>

          {/* Chapter grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
            {Object.keys(QUESTION_BANK[subject].chapters).map(chap => {
              const score = getChapterScore(subject, chap);
              const attempts = history[`${subject}::${chap}`]?.length || 0;
              return (
                <div
                  key={chap}
                  onClick={() => startQuiz(subject, chap)}
                  style={{
                    background: "#fff",
                    border: "2px solid " + QUESTION_BANK[subject].border,
                    borderRadius: 16, padding: "20px",
                    cursor: "pointer", transition: "all 0.2s",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.12)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.05)";
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <div style={{ flex: 1 }}>
                      <h3 style={{ margin: "0 0 8px", fontSize: 15, fontWeight: 700, color: "#1e293b" }}>
                        {chap}
                      </h3>
                      <div style={{ fontSize: 12, color: "#64748b" }}>
                        {attempts === 0 ? "Not yet attempted" : `${attempts} attempt${attempts > 1 ? "s" : ""}`}
                      </div>
                      <div style={{
                        marginTop: 8, display: "inline-block",
                        padding: "3px 10px", borderRadius: 20, fontSize: 12, fontWeight: 600,
                        background: score === null ? "#f1f5f9" : score >= 70 ? "#dcfce7" : score >= 40 ? "#fef9c3" : "#fee2e2",
                        color: score === null ? "#94a3b8" : score >= 70 ? "#166534" : score >= 40 ? "#92400e" : "#991b1b"
                      }}>
                        {clarityLabel(score)}
                      </div>
                    </div>
                    <div style={{ marginLeft: 12 }}>
                      <ScoreRing score={score} size={70} strokeWidth={7} />
                    </div>
                  </div>
                  <div style={{
                    marginTop: 14, padding: "8px 14px",
                    background: QUESTION_BANK[subject].bg,
                    borderRadius: 10, fontSize: 13,
                    color: QUESTION_BANK[subject].color, fontWeight: 600,
                    display: "flex", alignItems: "center", justifyContent: "center", gap: 6
                  }}>
                    ▶ Start Practice (3–5 questions)
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // ---- QUIZ PAGE ----
  if (page === "quiz") {
    const subjData = QUESTION_BANK[subject];
    const answered = Object.keys(answers).filter(id => {
      const a = answers[id];
      return a !== undefined && a !== null && a !== "" && !(Array.isArray(a) && a.length === 0);
    }).length;
    const allAnswered = answered === questions.length;

    return (
      <div style={{ minHeight: "100vh", background: "#f8fafc", fontFamily: "'Inter', system-ui, sans-serif" }}>
        {/* Quiz header */}
        <div style={{
          background: "#fff", borderBottom: "1px solid #e2e8f0",
          padding: "16px 24px", position: "sticky", top: 0, zIndex: 100,
          boxShadow: "0 2px 8px rgba(0,0,0,0.06)"
        }}>
          <div style={{ maxWidth: 760, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div>
              <button
                onClick={() => setPage("home")}
                style={{
                  background: "none", border: "none", cursor: "pointer",
                  color: subjData.color, fontWeight: 600, fontSize: 14, padding: 0,
                  display: "flex", alignItems: "center", gap: 4
                }}
              >
                ← Back
              </button>
              <div style={{ fontWeight: 800, fontSize: 17, color: "#1e293b", marginTop: 4 }}>
                {subjData.icon} {chapter}
              </div>
              <div style={{ fontSize: 13, color: "#64748b" }}>
                {subject} · {questions.length} questions · JEE Advanced Level
              </div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{
                fontSize: 13, color: "#64748b",
                padding: "6px 14px", background: "#f8fafc", borderRadius: 20, border: "1px solid #e2e8f0"
              }}>
                {answered}/{questions.length} answered
              </div>
            </div>
          </div>
        </div>

        <div style={{ maxWidth: 760, margin: "0 auto", padding: "32px 24px" }}>
          {/* Multi-correct notice */}
          <div style={{ background: "#eff6ff", border: "1px solid #bfdbfe", borderRadius: 10, padding: "10px 16px", marginBottom: 24, fontSize: 13, color: "#1d4ed8" }}>
            ℹ️ <strong>Question types:</strong> Single MCQ (select one) · Multiple correct (select all that apply) · Integer (type a number) · Assertion-Reasoning (choose A/B/C/D)
          </div>

          {questions.map((q, i) => (
            <QuestionCard
              key={q.id}
              q={q}
              index={i}
              answer={answers[q.id]}
              onAnswer={(val) => setAnswers(a => ({ ...a, [q.id]: val }))}
              submitted={submitted}
            />
          ))}

          {/* Submit / Next */}
          <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 8 }}>
            {!submitted ? (
              <button
                onClick={handleSubmit}
                disabled={!allAnswered}
                style={{
                  padding: "14px 40px", borderRadius: 12, fontWeight: 700, fontSize: 16,
                  background: allAnswered ? subjData.color : "#e2e8f0",
                  color: allAnswered ? "#fff" : "#94a3b8",
                  border: "none", cursor: allAnswered ? "pointer" : "default",
                  transition: "all 0.2s", boxShadow: allAnswered ? "0 4px 12px rgba(0,0,0,0.15)" : "none"
                }}
              >
                Submit Answers
              </button>
            ) : (
              <>
                <button
                  onClick={() => startQuiz(subject, chapter)}
                  style={{
                    padding: "14px 32px", borderRadius: 12, fontWeight: 700, fontSize: 15,
                    background: subjData.color, color: "#fff",
                    border: "none", cursor: "pointer", boxShadow: "0 4px 12px rgba(0,0,0,0.15)"
                  }}
                >
                  🔄 Retry (New Questions)
                </button>
                <button
                  onClick={() => setPage("home")}
                  style={{
                    padding: "14px 32px", borderRadius: 12, fontWeight: 700, fontSize: 15,
                    background: "#fff", color: "#1e293b",
                    border: "2px solid #e2e8f0", cursor: "pointer"
                  }}
                >
                  ← All Chapters
                </button>
              </>
            )}
          </div>

          {/* Score summary after submit */}
          {submitted && (() => {
            const correctCount = questions.filter(q => isCorrect(q, answers[q.id])).length;
            const pct = Math.round((correctCount / questions.length) * 100);
            const attempts = history[`${subject}::${chapter}`] || [];
            const avgPct = attempts.length > 0
              ? Math.round(attempts.reduce((s, a) => s + a.pct, 0) / attempts.length)
              : pct;
            return (
              <div style={{
                marginTop: 32, background: "#fff", borderRadius: 20,
                padding: "28px 32px", boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                textAlign: "center", border: `2px solid ${clarityColor(pct)}`
              }}>
                <div style={{ fontSize: 48 }}>
                  {pct >= 70 ? "🏆" : pct >= 40 ? "📈" : "💪"}
                </div>
                <div style={{ fontSize: 36, fontWeight: 800, color: clarityColor(pct), marginTop: 8 }}>
                  {correctCount}/{questions.length}
                </div>
                <div style={{ fontSize: 16, color: "#64748b", marginBottom: 8 }}>
                  This session: <strong style={{ color: clarityColor(pct) }}>{pct}%</strong>
                </div>
                <div style={{ fontSize: 14, color: "#94a3b8" }}>
                  Chapter clarity avg (all attempts): {avgPct}%
                </div>
                <div style={{
                  marginTop: 12, padding: "8px 20px", borderRadius: 20,
                  background: pct >= 70 ? "#dcfce7" : pct >= 40 ? "#fef9c3" : "#fee2e2",
                  color: pct >= 70 ? "#166534" : pct >= 40 ? "#92400e" : "#991b1b",
                  display: "inline-block", fontWeight: 700, fontSize: 14
                }}>
                  {pct >= 70 ? "✨ Excellent concept clarity!" : pct >= 40 ? "👍 Developing — keep practising!" : "🔁 Revisit the chapter and retry"}
                </div>
              </div>
            );
          })()}
        </div>
      </div>
    );
  }

  return null;
}
