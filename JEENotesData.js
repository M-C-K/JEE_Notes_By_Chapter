// JEE Notes — syllabus structure + 3 key formulas per concept (content rendered on-the-fly)
export const NOTES_SYLLABUS = {
  Physics: {
    color: "#3b82f6", bg: "#eff6ff", icon: "⚡",
    chapters: [
      { name: "Physics & Measurement", concepts: [
        { name: "Dimensional Analysis", f: ["[MLT⁻²]=Force", "[ML²T⁻²]=Energy", "[ML⁻¹T⁻²]=Pressure"], t: "h(Planck)=[ML²T⁻¹]=angular momentum dim", m: "sin/exp args must be dimensionless" },
        { name: "Error Analysis", f: ["Abs error=|aᵢ-ā|", "Rel error=Δa/a", "%error in aⁿ = n×%error in a"], t: "Mul/Div→add % errors; Add/Sub→add absolute errors", m: "Never add % errors when adding quantities" },
        { name: "Scalars & Vectors", f: ["A·B=ABcosθ (scalar)", "A×B=ABsinθ n̂ (vector)", "R²=A²+B²+2ABcosθ"], t: "Dot→scalar(work); Cross→vector(torque)", m: "Vector equations need direction; scalar equations don't" },
        { name: "Motion Graphs", f: ["slope of s-t = v", "slope of v-t = a", "area under v-t = s"], t: "Curved s-t → acceleration exists; straight → constant velocity", m: "Can't read position from v-t without integrating" },
      ]},
      { name: "Kinematics", concepts: [
        { name: "Equations of Motion", f: ["v=u+at", "s=ut+½at²", "v²=u²+2as"], t: "SUVAT: 5 vars; any 3 known → solve. sₙ=u+a(2n-1)/2 for nth second", m: "Define +ve direction first; deceleration gets negative sign" },
        { name: "Projectile Motion", f: ["T=2usinθ/g", "R=u²sin2θ/g", "H=u²sin²θ/2g"], t: "At apex: vy=0, vx=ucosθ unchanged. Max R at 45°. θ & (90°-θ) same R", m: "Never apply SUVAT along inclined direction — use x/y components" },
        { name: "Relative Motion", f: ["v_AB=v_A−v_B", "Min time across river: boat⊥bank", "Min drift: sinα=v_river/v_boat"], t: "Subtract reference frame velocity from all objects", m: "Min time ≠ min drift — different angles" },
        { name: "Circular Kinematics", f: ["v=rω", "ac=v²/r=rω²", "T=2π/ω"], t: "Angular eqns mirror linear: replace s→θ, v→ω, a→α", m: "Centripetal acc points to CENTER, not outward" },
      ]},
      { name: "Laws of Motion", concepts: [
        { name: "Newton's Three Laws", f: ["F=ma", "p=mv", "J=FΔt=Δp"], t: "3rd law: action-reaction on DIFFERENT bodies — cannot cancel", m: "Always draw FBD before writing equations" },
        { name: "Friction", f: ["fs(max)=μsN", "fk=μkN", "tanθ_repose=μs"], t: "Static friction is self-adjusting up to μsN. μs>μk always", m: "N=mgcosθ on incline, NOT mg" },
        { name: "Connected Bodies", f: ["Atwood: a=(m₁-m₂)g/(m₁+m₂)", "T=2m₁m₂g/(m₁+m₂)", "Incline: a=g(sinθ−μcosθ)"], t: "Use SYSTEM for acceleration; individual body FBD for tension", m: "Tension ≠ weight of hanging mass (only true at equilibrium)" },
        { name: "Pseudo Force", f: ["F_pseudo=−ma_frame", "Lift going up: W'=m(g+a)", "Banking: v²=rg tanθ"], t: "Pseudo force opposes frame's acceleration. Used only in non-inertial frames", m: "Never add pseudo force in inertial (ground) frame" },
      ]},
      { name: "Work, Energy & Power", concepts: [
        { name: "Work-Energy Theorem", f: ["W=Fd cosθ", "W_net=ΔKE=½mv²−½mu²", "W_spring=½kx²"], t: "WET: fastest way to find speed — avoids finding acceleration", m: "WET requires NET work, not just applied force work" },
        { name: "Conservative Forces", f: ["F=−dU/dx", "U_gravity=mgh", "U_spring=½kx²"], t: "Conservative forces: work path-independent. Total E conserved when no friction", m: "Don't conserve mechanical energy when friction acts" },
        { name: "Collisions", f: ["e=(v₂−v₁)/(u₁−u₂)", "Inelastic: m₁u₁+m₂u₂=(m₁+m₂)v", "KE loss=½μu_rel²(1−e²)"], t: "e=1 elastic (KE conserved); e=0 perfectly inelastic; 0<e<1 inelastic", m: "Momentum always conserved; KE only in elastic collision" },
        { name: "Power", f: ["P=W/t=Fv cosθ", "P_max from battery=ε²/4r", "η=P_out/P_in"], t: "Max speed when driving force = resistive force (a=0)", m: "Max power ≠ max speed; max efficiency ≠ max power" },
      ]},
      { name: "Rotational Motion", concepts: [
        { name: "Moment of Inertia", f: ["Ring: MR²", "Disc: MR²/2", "Solid sphere: 2MR²/5"], t: "PAT: I=Icm+Md² (always add). Perpendicular axis: Iz=Ix+Iy (flat lamina only)", m: "Perpendicular axis theorem invalid for 3D objects" },
        { name: "Torque & Angular Momentum", f: ["τ=rF sinθ=Iα", "L=Iω", "τ=dL/dt"], t: "Torque = force × perpendicular distance. If τ_net=0 → L conserved", m: "Torque is a vector; direction via right-hand rule" },
        { name: "Rolling Motion", f: ["v_cm=Rω (no slip)", "KE=½mv²(1+k²/R²)", "a=g sinθ/(1+k²/R²)"], t: "v_top=2v, v_bottom=0. Solid cylinder wins race over hollow (lower k²/R²)", m: "Friction in rolling without slipping does NO work" },
        { name: "Conservation of L", f: ["I₁ω₁=I₂ω₂", "KE_rot=L²/2I", "L=mvr (circular)"], t: "Skater pulls arms: I↓ → ω↑. KE changes even though L constant (internal forces)", m: "L conserved only when external torque is zero" },
      ]},
      { name: "Gravitation", concepts: [
        { name: "Newton's Law", f: ["F=Gm₁m₂/r²", "g=GM/R²", "g at depth: g'=g(1−d/R)"], t: "g decreases with both height AND depth. At centre g=0", m: "G is universal constant; g varies with location" },
        { name: "Gravitational Potential", f: ["V=−GM/r", "E=−GM/r²", "V_inside shell=−GM/R=const"], t: "V is always negative. Inside uniform shell: E=0 but V≠0", m: "Field inside shell is zero, but potential is non-zero constant" },
        { name: "Satellites", f: ["v_orbit=√(GM/r)", "T=2π√(r³/GM)", "v_escape=√(2GM/R)"], t: "v_escape=√2 × v_orbit at surface. Orbital speed independent of satellite mass", m: "Geostationary orbit is only above equator at one specific height" },
        { name: "Kepler's Laws", f: ["T²∝a³", "v_p×r_p=v_a×r_a", "T²=4π²a³/GM"], t: "Kepler's 2nd = angular momentum conservation. Fastest at perihelion (closest)", m: "Use semi-major axis a for ellipse, not radius r" },
      ]},
      { name: "Properties of Solids & Liquids", concepts: [
        { name: "Elasticity", f: ["Y=stress/strain=(F/A)/(ΔL/L)", "B=−P/(ΔV/V)", "Elastic PE=½×stress×strain×V"], t: "Steel more elastic than rubber (higher Y = restores shape faster)", m: "Hooke's law only valid in elastic region, up to proportional limit" },
        { name: "Fluid Statics", f: ["P=ρgh", "Upthrust=ρ_f×g×V_s", "F₁/A₁=F₂/A₂ (Pascal)"], t: "Upthrust = weight of fluid DISPLACED (not weight of object)", m: "Upthrust ≠ object weight (only equal when floating)" },
        { name: "Bernoulli & Continuity", f: ["A₁v₁=A₂v₂", "P+½ρv²+ρgh=const", "v_efflux=√(2gh)"], t: "Faster flow → LOWER pressure (venturi). Torricelli: efflux speed = free-fall from height h", m: "Bernoulli valid only for ideal (non-viscous, incompressible) fluid" },
        { name: "Surface Tension", f: ["P_bubble=4T/r", "P_drop=2T/r", "h=2T cosθ/ρgr (capillary)"], t: "Bubble has TWO surfaces → 4T/r. Drop has ONE surface → 2T/r", m: "Using 2T/r for soap bubble (must be 4T/r)" },
      ]},
      { name: "Thermodynamics", concepts: [
        { name: "First Law", f: ["ΔU=Q−W", "W=PΔV (isobaric)", "W=nRT ln(V₂/V₁) (isothermal)"], t: "Isothermal: ΔU=0 → Q=W. Isochoric: W=0 → Q=ΔU", m: "Sign: Q added TO system; W done BY system" },
        { name: "Thermodynamic Processes", f: ["Isothermal: PV=const", "Adiabatic: PVγ=const", "γ=Cp/Cv=(f+2)/f"], t: "Monatomic γ=5/3; Diatomic γ=7/5. Adiabatic slope on PV diagram = γ × isothermal", m: "Adiabatic ≠ isothermal: adiabatic has Q=0, temperature changes" },
        { name: "Second Law & Entropy", f: ["ΔS=Q_rev/T", "ΔS_universe≥0", "ΔS_isothermal=nR ln(V₂/V₁)"], t: "Entropy of universe always increases (irreversible). Reversible: ΔS_universe=0", m: "System entropy CAN decrease (surroundings must increase more)" },
        { name: "Carnot Engine", f: ["η=1−T_C/T_H", "W=Q_H−Q_C", "COP_ref=T_C/(T_H−T_C)"], t: "ALWAYS use Kelvin. Carnot gives MAXIMUM efficiency for given temperatures", m: "Using Celsius in efficiency formula — must use Kelvin" },
      ]},
      { name: "Kinetic Theory of Gases", concepts: [
        { name: "Ideal Gas Law", f: ["PV=nRT", "PV=NkT", "k_B=1.38×10⁻²³ J/K"], t: "n = moles (use R); N = molecules (use k). ALWAYS use Kelvin", m: "Confusing n (moles) with N (number of molecules)" },
        { name: "Kinetic Theory", f: ["v_rms=√(3RT/M)", "v_avg=√(8RT/πM)", "KE=(3/2)nRT"], t: "Speed order: v_mp < v_avg < v_rms. KE depends ONLY on temperature", m: "Heavier gas does NOT have higher KE — KE depends on T only" },
        { name: "Degrees of Freedom", f: ["Cv=(f/2)R", "Cp=Cv+R", "γ=(f+2)/f"], t: "Monoatomic f=3,γ=5/3. Diatomic f=5,γ=7/5. Cp−Cv=R always", m: "Using f=6 for diatomic at room temp (vibrational modes frozen)" },
        { name: "Speed Distribution", f: ["v_mp=√(2RT/M)", "Ratio: 1:1.13:1.22 (mp:avg:rms)", "v∝√T, v∝1/√M"], t: "Higher T: all speeds increase, distribution broadens and shifts right", m: "v_mp is NOT the speed of most molecules — it's the peak of distribution" },
      ]},
      { name: "Oscillations & Waves", concepts: [
        { name: "Simple Harmonic Motion", f: ["x=A sin(ωt+φ)", "v=ω√(A²−x²)", "a=−ω²x"], t: "SHM: a∝−x. v max at mean (x=0); a max at extreme (x=±A). Pendulum T independent of mass", m: "Pendulum period DOES NOT depend on mass or amplitude (small angle)" },
        { name: "Energy in SHM", f: ["KE=½mω²(A²−x²)", "PE=½mω²x²", "E_total=½mω²A²=½kA²"], t: "Total energy ∝ A². Double amplitude → 4× energy. KE+PE=const always", m: "Energy is NOT zero at mean position — KE is maximum there" },
        { name: "Wave Equation", f: ["v=fλ=ω/k", "v_string=√(T/μ)", "v_sound=√(γRT/M)"], t: "Wave speed depends on MEDIUM not frequency. Sound faster in solids > liquids > gases", m: "Louder sound does NOT travel faster — speed is independent of amplitude" },
        { name: "Standing Waves & Beats", f: ["f_n=nv/2L (string/open)", "f_n=(2n−1)v/4L (closed)", "f_beat=|f₁−f₂|"], t: "Closed pipe: ODD harmonics only. Open pipe/string: all harmonics", m: "Closed pipe can produce even harmonics — FALSE, only odd" },
      ]},
      { name: "Electrostatics", concepts: [
        { name: "Coulomb's Law & E-Field", f: ["F=kq₁q₂/r²", "E=kq/r²", "k=9×10⁹ Nm²/C²"], t: "Field outside shell = point charge. Field inside shell = 0. Add E as VECTORS", m: "Treating E as scalar in superposition — must add as vectors" },
        { name: "Electric Potential", f: ["V=kq/r (scalar)", "E=−dV/dr", "W=q(V₁−V₂)"], t: "Potential is SCALAR — just add algebraically. E points from high V to low V", m: "E=0 where V=0 is WRONG — E=0 where dV/dr=0" },
        { name: "Gauss's Law", f: ["∮E·dA=Q_enc/ε₀", "Sphere: E=Q/4πε₀r²", "Plane: E=σ/2ε₀"], t: "Use only with HIGH symmetry. Inside conductor: E=0 always", m: "Including charges outside Gaussian surface in Q_enc" },
        { name: "Capacitors", f: ["C=ε₀A/d", "U=½CV²=Q²/2C", "C_dielectric=κC"], t: "Series: same Q, voltages add. Parallel: same V, charges add. Inserting dielectric: C increases", m: "Using 1/C for parallel (that's series formula)" },
      ]},
      { name: "Current Electricity", concepts: [
        { name: "Ohm's Law & Resistance", f: ["V=IR", "R=ρL/A", "R=R₀(1+αΔT)"], t: "Series: same I, voltages add. Parallel: same V, currents add", m: "Resistivity ρ is material property; resistance R depends on shape too" },
        { name: "Kirchhoff's Laws", f: ["KCL: ΣI=0 at node", "KVL: ΣV=0 in loop", "V_terminal=ε−Ir"], t: "KCL = charge conservation; KVL = energy conservation. Short circuit I = ε/r", m: "Ignoring internal resistance when finding terminal voltage" },
        { name: "Wheatstone Bridge", f: ["P/Q=R/S (balanced)", "l₁/l₂=ε₁/ε₂ (potentiometer)", "No current through G at balance"], t: "Potentiometer: no current from cell — accurate EMF measurement", m: "Confusing potentiometer (measures EMF) with voltmeter (measures terminal V)" },
        { name: "Electric Power", f: ["P=VI=I²R=V²/R", "H=I²Rt", "P_max=ε²/4r"], t: "Max power transfer when R_load = internal resistance r", m: "Which P formula to use: I²R if series (I constant); V²/R if parallel (V constant)" },
      ]},
      { name: "Magnetic Effects & Magnetism", concepts: [
        { name: "Biot-Savart Law", f: ["B_wire=μ₀I/2πr", "B_loop=μ₀I/2R", "B_solenoid=μ₀nI"], t: "Right-hand rule: curl fingers in current direction, thumb = B. B ∝ 1/r for wire", m: "Using Biot-Savart for symmetric cases (use Ampere's law instead)" },
        { name: "Ampere's Law", f: ["∮B·dl=μ₀I_enc", "B_toroid=μ₀NI/2πr", "Solenoid: B=0 outside"], t: "Use only with HIGH symmetry (like Gauss's law for E)", m: "Including currents outside Amperian loop in I_enc" },
        { name: "Force on Charges", f: ["F=qvB sinθ", "r=mv/qB", "F/L=μ₀I₁I₂/2πd"], t: "Magnetic force does NO work (F⊥v). Parallel currents attract, antiparallel repel", m: "Thinking magnetic force does work — impossible since F⊥v" },
        { name: "Magnetic Properties", f: ["B=μ₀(H+M)", "M=χH", "μ_r=1+χ"], t: "Dia: χ<0 (repelled). Para: χ>0 (weakly attracted). Ferro: very large χ. Above Curie T → paramagnetic", m: "Thinking all metals are ferromagnetic (only Fe, Co, Ni)" },
      ]},
      { name: "Electromagnetic Induction & AC", concepts: [
        { name: "Faraday & Lenz", f: ["ε=−dΦ/dt", "Φ=BA cosθ", "ε=BvL (motional)"], t: "Lenz: induced current OPPOSES the change. Must do work to generate EMF", m: "Wrong direction for induced current — always opposes change in flux" },
        { name: "Inductance", f: ["L_solenoid=μ₀n²Al", "U=½LI²", "ε=−L dI/dt"], t: "Inductor opposes change in current. Energy U=½LI² stored in magnetic field", m: "Current in inductor CANNOT change instantaneously" },
        { name: "AC Circuits", f: ["X_L=ωL", "X_C=1/ωC", "Z=√(R²+(X_L−X_C)²)"], t: "ELI the ICE man: V leads I in L; I leads V in C. Power only in resistor", m: "Adding voltages in LCR algebraically — use phasor/vector addition" },
        { name: "Resonance", f: ["ω₀=1/√(LC)", "Q=ω₀L/R", "cosφ=R/Z"], t: "At resonance: Z=R(minimum), I=maximum, power factor=1. Higher Q = sharper", m: "Z=0 at resonance is WRONG — Z_min = R" },
      ]},
      { name: "Electromagnetic Waves", concepts: [
        { name: "Maxwell's Equations", f: ["c=1/√(μ₀ε₀)=3×10⁸", "I_d=ε₀dΦ_E/dt", "c=E₀/B₀"], t: "Displacement current = changing E field, not actual charge flow. Maxwell completed Ampere's law", m: "Thinking displacement current is actual charge movement" },
        { name: "EM Wave Properties", f: ["c=E₀/B₀", "I=½ε₀E₀²c", "p=U/c (momentum)"], t: "E, B, propagation direction are mutually perpendicular. EM waves carry momentum", m: "EM waves need medium — FALSE, they travel in vacuum" },
        { name: "EM Spectrum", f: ["E=hf=hc/λ", "c=3×10⁸ m/s", "Visible: 400−700 nm"], t: "Order: Radio→Micro→IR→Visible→UV→X-ray→Gamma (increasing energy). VIBGYOR: 400nm(V) to 700nm(R)", m: "Gamma and X-rays differ in source, not nature (both EM waves)" },
        { name: "Radiation & Intensity", f: ["I=P/A ∝1/r²", "P_rad=I/c (absorbed)", "P_rad=2I/c (reflected)"], t: "Double radiation pressure when perfectly reflected. I ∝ 1/r² (inverse square)", m: "Radiation pressure when reflected = I/c (WRONG — it's 2I/c)" },
      ]},
      { name: "Optics", concepts: [
        { name: "Reflection & Mirrors", f: ["1/f=1/v+1/u", "m=−v/u", "f=R/2"], t: "Concave: real inverted image beyond F; virtual erect inside F. Convex: always virtual erect diminished", m: "Using R instead of R/2 for focal length" },
        { name: "Refraction & Lenses", f: ["n₁ sinθ₁=n₂ sinθ₂", "sinθ_c=n₂/n₁", "P=P₁+P₂ (contact)"], t: "TIR only from denser→rarer medium. Add POWERS (not focal lengths) for lenses in contact", m: "TIR from rarer to denser — impossible" },
        { name: "YDSE", f: ["β=λD/d", "y_n=nλD/d (bright)", "Δ=yd/D (path diff)"], t: "β=λD/d: wider fringes with larger λ or D or smaller d. Central fringe always bright", m: "Fringe width is NOT equal for different colours in white light YDSE" },
        { name: "Diffraction & Polarization", f: ["a sinθ=nλ (minima)", "I=I₀cos²θ (Malus)", "tanθ_B=n (Brewster)"], t: "Single slit: narrower slit → wider diffraction. At Brewster angle: reflected light fully polarized", m: "a sinθ=nλ gives MINIMA not maxima for single slit" },
      ]},
      { name: "Dual Nature of Matter", concepts: [
        { name: "Photoelectric Effect", f: ["KE_max=hν−φ", "φ=hν₀", "eV₀=KE_max"], t: "Intensity → more electrons (NOT more KE). KE depends only on frequency", m: "Higher intensity gives higher KE — FALSE, higher frequency does" },
        { name: "de Broglie Wavelength", f: ["λ=h/mv", "λ=h/√(2meV)", "λ=12.27/√V Å (electron)"], t: "λ=12.27/√V Å for electron through V volts — memorize! Heavier → shorter λ", m: "Macroscopic objects have no wavelength — FALSE, just immeasurably small" },
        { name: "Photons", f: ["E=hf=hc/λ", "p=h/λ=E/c", "E(eV)=1240/λ(nm)"], t: "E(eV)=1240/λ(nm) — memorize! Compton shift: wavelength INCREASES after scattering", m: "Photon has rest mass — FALSE, zero rest mass but non-zero momentum" },
        { name: "Wave-Particle Duality", f: ["ΔxΔp≥ℏ/2", "p=ℏk", "E=ℏω"], t: "Both wave AND particle — which shows depends on experiment. Davisson-Germer confirmed electron diffraction", m: "Electron is either wave or particle — it is both simultaneously" },
      ]},
      { name: "Atoms & Nuclei", concepts: [
        { name: "Bohr's Model", f: ["E_n=−13.6/n² eV", "r_n=n²×0.529 Å", "L=nℏ"], t: "Energy is NEGATIVE (bound). H-like ions: E_n=−13.6Z²/n². Ionization energy from ground = 13.6 eV", m: "Bohr model works only for H-like (single electron) atoms" },
        { name: "Hydrogen Spectrum", f: ["1/λ=R(1/n₁²−1/n₂²)", "R=1.097×10⁷ m⁻¹", "Lyman:n₁=1, Balmer:n₁=2"], t: "Lyman(UV), Balmer(visible), Paschen(IR). Longest λ: adjacent transition. Shortest: n₂→∞", m: "Using n₂<n₁ in Rydberg formula — always n₂>n₁ for emission" },
        { name: "Nuclear Binding Energy", f: ["BE=Δm×c²", "1 amu=931.5 MeV", "BE/A≈8 MeV (stable)"], t: "Fe-56 most stable (highest BE/A). Fusion: light nuclei combine. Fission: heavy splits. Both release energy", m: "Forgetting 1 amu = 931.5 MeV conversion" },
        { name: "Radioactive Decay", f: ["N=N₀e^(−λt)", "T½=0.693/λ", "τ=1/λ=1.44×T½"], t: "After n half-lives: N=N₀/2ⁿ. Mean life τ > half-life T½. Activity A=λN", m: "Confusing half-life (T½) with mean life (τ=1.44T½)" },
      ]},
      { name: "Electronic Devices", concepts: [
        { name: "p-n Junction & Diodes", f: ["V_knee≈0.7V (Si)", "I=I₀(e^(eV/kT)−1)", "Zener at V_Z (reverse)"], t: "Forward bias: P to +ve terminal. Zener works in REVERSE breakdown. Depletion layer = insulator", m: "Zener diode is damaged in breakdown — FALSE, it's designed for this" },
        { name: "Transistors", f: ["IE=IB+IC", "β=IC/IB (50−400)", "α=β/(1+β)≈1"], t: "NPN: small IB controls large IC. Active region = amplification. Saturation = switch ON", m: "IE=IC (WRONG — IE=IB+IC; base current is small but non-zero)" },
        { name: "Logic Gates", f: ["NAND=NOT(AND)", "NOR=NOT(OR)", "De Morgan: (AB)'=A'+B'"], t: "NAND and NOR are universal gates — any circuit can be built from NAND alone", m: "AND output is 1 when any input is 1 — FALSE, ALL inputs must be 1" },
        { name: "Rectifiers", f: ["V_dc(half)=V_m/π", "V_dc(full)=2V_m/π", "Ripple: half=1.21, full=0.48"], t: "Full-wave gives 2× DC output of half-wave. Larger capacitor → less ripple → smoother DC", m: "Half-wave and full-wave give same DC output — FALSE, full-wave is double" },
      ]},
    ]
  },

  Chemistry: {
    color: "#10b981", bg: "#f0fdf4", icon: "🧪",
    chapters: [
      { name: "Some Basic Concepts", concepts: [
        { name: "Mole Concept", f: ["1 mol=6.022×10²³ particles", "Moles=mass/molar mass", "At STP: 1 mol gas=22.4 L"], t: "Mole is just a counting unit (like dozen=12). Avogadro number connects mass↔particles", m: "Using 22.4L at non-STP conditions" },
        { name: "Stoichiometry", f: ["Mole ratio from balanced equation", "Limiting reagent: least moles÷coeff", "% yield=actual/theoretical×100"], t: "Find limiting reagent first — it determines theoretical yield", m: "Forgetting to balance equation before stoichiometry calculations" },
        { name: "Concentration Units", f: ["Molarity M=n/V(L)", "Molality m=n/kg(solvent)", "Normality N=M×n-factor"], t: "Molarity changes with temperature (volume changes). Molality doesn't change with temperature", m: "Dividing by solution mass instead of solvent mass for molality" },
        { name: "% Composition", f: ["% element=(n×at.mass/mol.mass)×100", "Empirical formula: simplest ratio", "Mol formula=n×empirical formula"], t: "Empirical formula from % composition → molecular formula needs molar mass", m: "Confusing empirical formula (simplest ratio) with molecular formula" },
      ]},
      { name: "Atomic Structure", concepts: [
        { name: "Bohr Model", f: ["E_n=−13.6/n² eV (H)", "r_n=0.529n² Å", "v_n=2.18×10⁶/n m/s"], t: "Energy negative → bound state. Ionization energy of H = 13.6 eV (from n=1)", m: "Applying Bohr model to multi-electron atoms (only valid for H-like)" },
        { name: "Quantum Numbers", f: ["n=1,2,3... (shell)", "l=0 to n-1 (subshell)", "m_l=−l to +l, m_s=±½"], t: "s(l=0), p(l=1), d(l=2), f(l=3). Max electrons in subshell = 2(2l+1)", m: "l can equal n (WRONG — l ranges from 0 to n-1)" },
        { name: "Electronic Configuration", f: ["Aufbau: fill lowest E first", "Hund: max multiplicity", "Pauli: no two e⁻ same 4 QN"], t: "Fill order: 1s,2s,2p,3s,3p,4s,3d,4p... (n+l rule). Cr=[Ar]3d⁵4s¹; Cu=[Ar]3d¹⁰4s¹ (exceptions)", m: "Filling 3d before 4s (4s fills first, but 3d electrons removed first in ions)" },
        { name: "Atomic Spectra", f: ["E=hν=hc/λ", "ΔE=E₂−E₁=hν", "1/λ=R(1/n₁²−1/n₂²)"], t: "Line spectrum is unique fingerprint of each element. Emission: excited→ground. Absorption: ground→excited", m: "Continuous spectrum from atoms — FALSE, atoms give line spectra" },
      ]},
      { name: "Chemical Bonding", concepts: [
        { name: "Lewis & VSEPR", f: ["Lone pairs repel > bond pairs", "Bond angle: LP-LP>LP-BP>BP-BP", "Octet rule (exceptions: BCl₃, PCl₅, SF₆)"], t: "VSEPR shape: count electron pairs, not atoms. H₂O: 4 pairs (2 lone) → bent 104.5°", m: "Thinking shape is determined by bond pairs only (lone pairs affect shape)" },
        { name: "Hybridization", f: ["sp: linear 180°", "sp²: trigonal 120°", "sp³: tetrahedral 109.5°"], t: "Count: σ bonds + lone pairs on central atom = hybridization. sp³d for 5 groups, sp³d² for 6", m: "Including π bonds in hybridization count (only σ bonds and lone pairs)" },
        { name: "Molecular Orbital Theory", f: ["BMO: bonding (lower E)", "ABMO: antibonding (higher E)", "Bond order=(bonding−antibonding e⁻)/2"], t: "B₂ and O₂ are paramagnetic (unpaired e⁻ in MOs). Higher bond order = shorter, stronger bond", m: "Thinking O₂ is diamagnetic (it has 2 unpaired electrons in π* MOs)" },
        { name: "Bond Parameters", f: ["Bond order∝bond energy∝1/bond length", "Dipole μ=q×d", "EN difference > 1.7 → ionic"], t: "Triple bond > double > single: energy and order, but length is opposite. EN: F>O>N>Cl", m: "More bonds = longer bond length (WRONG: more bonds = shorter and stronger)" },
      ]},
      { name: "Chemical Thermodynamics", concepts: [
        { name: "Enthalpy & Hess's Law", f: ["ΔH=H_products−H_reactants", "ΔH_rxn=ΣΔH_f(products)−ΣΔH_f(reactants)", "ΔH=ΔU+ΔngRT"], t: "Hess's law: ΔH independent of path. ΔH_combustion always negative (exothermic)", m: "Forgetting Δng in ΔH=ΔU+ΔngRT for reactions with gases" },
        { name: "Entropy & Gibbs Energy", f: ["ΔG=ΔH−TΔS", "ΔG<0: spontaneous", "ΔG=0: equilibrium"], t: "Spontaneous if ΔG<0. At equilibrium ΔG=0. High T favors TΔS term (entropy-driven reactions)", m: "ΔG<0 means fast reaction — FALSE, thermodynamics says nothing about rate" },
        { name: "Standard Values", f: ["ΔG°=−RT ln K", "ΔG°=−nFE°_cell", "ΔS°=ΣS°(products)−ΣS°(reactants)"], t: "K>1 → ΔG°<0 → spontaneous. E°_cell>0 → spontaneous. All three connected", m: "ΔG° for elements in standard state is zero (ΔHf° is zero, not ΔG°)" },
        { name: "Born-Haber Cycle", f: ["ΔH_lattice=−ΔH_f−ΔH_sub−IE−½BE+EA", "Lattice energy: Madelung constant", "Higher lattice energy → higher melting point"], t: "Born-Haber cycle applies Hess's law to ionic compounds. Lattice energy always negative (exothermic)", m: "Confusing electron affinity (EA, exothermic) with ionization energy (endothermic)" },
      ]},
      { name: "Chemical & Ionic Equilibrium", concepts: [
        { name: "Equilibrium Constants", f: ["Kc=[products]/[reactants]", "Kp=Kc(RT)^Δn", "Q>K: reverse; Q<K: forward"], t: "K depends only on temperature. Kp=Kc when Δng=0. Large K → reaction goes nearly to completion", m: "K changes when concentration changes — FALSE, only temperature changes K" },
        { name: "Le Chatelier's Principle", f: ["Add reactant→forward", "Increase P→fewer moles side", "Increase T→endothermic direction"], t: "Catalyst: speeds up both directions equally — does NOT shift equilibrium", m: "Catalyst shifts equilibrium position — FALSE, catalyst only changes rate" },
        { name: "Acids, Bases & pH", f: ["pH=−log[H⁺]", "pH+pOH=14 (25°C)", "Ka×Kb=Kw=10⁻¹⁴"], t: "Strong acid: fully dissociated [H⁺]=C. Weak acid: [H⁺]=√(Ka×C). pH<7 acidic, >7 basic", m: "pH of 0.1M HCl = 1 (not 0); pH = −log(0.1) = 1" },
        { name: "Buffer & Ksp", f: ["pH=pKa+log([A⁻]/[HA])", "Ksp=[M^n+]^a[X^m-]^b", "Solubility s: from Ksp"], t: "Buffer works best when pH≈pKa. Common ion effect: decreases solubility (Ksp unchanged)", m: "Ksp changes with common ion addition — FALSE, only solubility changes" },
      ]},
      { name: "Electrochemistry", concepts: [
        { name: "Oxidation States", f: ["O usually −2 (except peroxides −1)", "H usually +1 (except metal hydrides −1)", "Balancing: electrons gained=lost"], t: "In oxidation: lose electrons (LEO). In reduction: gain electrons (GER). OIL RIG mnemonic", m: "Oxidation increases electron count — WRONG, oxidation LOSES electrons" },
        { name: "Electrochemical Cells", f: ["E°_cell=E°_cathode−E°_anode", "ΔG°=−nFE°_cell", "Spontaneous: E°_cell>0"], t: "ANODE = oxidation (anions migrate here). CATHODE = reduction. Salt bridge maintains electrical neutrality", m: "Anode is always positive — TRUE in electrolytic, but NEGATIVE in galvanic cell" },
        { name: "Nernst Equation", f: ["E=E°−(RT/nF)lnQ", "E=E°−(0.059/n)log Q (25°C)", "At equil: E=0, Q=K"], t: "Nernst equation: E changes with concentration. Concentration cell: E driven by concentration difference", m: "Nernst equation requires Kelvin — but 0.059/n uses log₁₀ at 25°C" },
        { name: "Faraday's Laws", f: ["W=M×Q/nF=MIt/nF", "F=96500 C/mol", "Q=It (charge=current×time)"], t: "1 Faraday = charge of 1 mole of electrons. Deposited mass ∝ current × time", m: "Using charge in mC instead of C in Faraday's law calculations" },
      ]},
      { name: "Chemical Kinetics", concepts: [
        { name: "Rate Law & Order", f: ["Rate=k[A]^m[B]^n", "Units of k: (mol/L)^(1−n)s⁻¹", "Half-life 1st order: t½=0.693/k"], t: "Order determined by experiment, NOT from balanced equation. Zero order: rate independent of [A]", m: "Reading order from stoichiometric coefficients — must be determined experimentally" },
        { name: "Integrated Rate Laws", f: ["0th order: [A]=[A₀]−kt", "1st order: ln[A]=ln[A₀]−kt", "2nd order: 1/[A]=1/[A₀]+kt"], t: "1st order: half-life constant (t½=0.693/k). 2nd order: t½ depends on initial concentration", m: "1st order half-life depends on concentration — FALSE, it's constant" },
        { name: "Arrhenius Equation", f: ["k=Ae^(−Ea/RT)", "ln(k₂/k₁)=(Ea/R)(1/T₁−1/T₂)", "Rule of thumb: 10°C rise → rate doubles"], t: "Higher Ea: more sensitive to temperature change. Catalyst lowers Ea (not ΔH)", m: "Catalyst changes ΔH of reaction — FALSE, only changes activation energy Ea" },
        { name: "Mechanisms & Catalysis", f: ["Rate = rate of slow (RDS) step", "Homogeneous: same phase as reactant", "Heterogeneous: different phase"], t: "Rate determining step (slowest step) controls overall rate. Catalyst provides alternate lower-Ea pathway", m: "Catalyst is consumed in reaction — FALSE, it's regenerated" },
      ]},
      { name: "Solutions", concepts: [
        { name: "Colligative Properties", f: ["ΔTb=Kb×m×i", "ΔTf=Kf×m×i", "π=MRT×i (osmotic)"], t: "Colligative properties depend on NUMBER of solute particles, not nature. i=van't Hoff factor", m: "Using molarity instead of molality for boiling point elevation/freezing point depression" },
        { name: "Raoult's Law", f: ["p_A=x_A×p°_A", "p_total=p_A+p_B", "Relative VP lowering=(p°−p)/p°=x_B"], t: "Ideal solution follows Raoult's law. Positive deviation: A-B < A-A,B-B interactions (e.g., ethanol-water)", m: "Raoult's law applies to all solutions — only to ideal solutions" },
        { name: "Osmotic Pressure", f: ["π=MRT", "π=iMRT (electrolyte)", "Osmosis: solvent moves to higher concentration"], t: "Reverse osmosis: apply pressure > π to push solvent from concentrated to dilute side", m: "Osmosis: solute moves across membrane — FALSE, only SOLVENT moves" },
        { name: "Henry's Law", f: ["p=K_H×x (gas in liquid)", "Solubility∝pressure (gases)", "Henry's K depends on temperature"], t: "Henry's law: gas solubility increases with pressure. Soda bottle: CO₂ dissolves at high P", m: "Henry's law applies to solids in liquids — only to gas dissolution" },
      ]},
      { name: "Classification & Periodicity", concepts: [
        { name: "Periodic Table", f: ["Period: same n (principal QN)", "Group: same valence e⁻ config", "Blocks: s,p,d,f"], t: "s-block: Groups 1,2. p-block: Groups 13-18. d-block: Groups 3-12. f-block: lanthanides/actinides", m: "Noble gases are unreactive because they have 8 electrons — the reason is complete octet/duplet" },
        { name: "Atomic Radius & IE", f: ["Atomic radius↑ down group, ↓ across period", "IE₁↑ across period, ↓ down group", "IE: N>O due to half-filled 2p stability"], t: "Ionization energy anomaly: Be>B (2s²>2p¹) and N>O (half-filled 2p⁵). Memorize these!", m: "IE always increases left to right — two exceptions: Be>B and N>O" },
        { name: "EN & Electron Affinity", f: ["EN: F>O>N>Cl>Br>C>H", "EA: Cl>F (due to small size of F)", "EN increases: left→right, bottom→top"], t: "F most electronegative. Cl has higher EA than F (F too small: e-e repulsion). Noble gases: EA≈0", m: "F has highest EA — FALSE, Cl has higher EA than F" },
        { name: "Periodic Trends in Properties", f: ["Acidic character of oxides: increases left→right", "Basic character: decreases left→right", "Metallic: decreases left→right, increases top→bottom"], t: "Non-metal oxides: acidic. Metal oxides: basic. Amphoteric oxides: Al₂O₃, ZnO, SnO, PbO", m: "All metal oxides are basic — Al₂O₃, ZnO are amphoteric" },
      ]},
      { name: "p-Block Elements", concepts: [
        { name: "Groups 13-14", f: ["B: sp² (planar), Lewis acid", "Al: amphoteric oxide Al₂O₃", "C: sp³(diamond), sp²(graphite)"], t: "BCl₃: incomplete octet (Lewis acid). SiO₂: giant covalent. Graphite: conductors (delocalized π)", m: "Graphite is a non-conductor because it's covalent — FALSE, it conducts due to delocalized electrons" },
        { name: "Group 15 (N family)", f: ["N: +1 to +5, −3 OS", "HNO₃: conc→passivates Fe/Al", "PCl₅: sp³d hybridization"], t: "N₂: triple bond (very stable). NO₂: brown gas. NH₃: pyramidal, lone pair donor. PCl₅: trigonal bipyramidal", m: "Concentrated HNO₃ dissolves Fe — FALSE, it passivates (forms oxide layer)" },
        { name: "Group 16-17 (O, Halogens)", f: ["H₂SO₄ conc: dehydrating agent", "HOCl<HOClO<HOClO₂<HOClO₃ (acid strength)", "F only −1 OS (most electronegative)"], t: "Acid strength of oxyacids: more O → stronger acid. F₂ most reactive halogen. HF: weak acid (H-bonding)", m: "HF is a strong acid — FALSE, it's weak due to strong H-F bond" },
        { name: "Noble Gases", f: ["XeF₂: sp³d, linear", "XeF₄: sp³d², square planar", "XeO₃: sp³, pyramidal"], t: "Noble gases form compounds only with F and O (highest electronegative elements). Kr and lighter: no stable compounds", m: "All noble gases are completely unreactive — Xe forms stable compounds" },
      ]},
      { name: "d & f Block Elements", concepts: [
        { name: "d-Block General Properties", f: ["Variable oxidation states", "Coloured ions (d-d transitions)", "Paramagnetic (unpaired d e⁻)"], t: "Variable OS due to similar energies of (n-1)d and ns electrons. Most stable OS for Mn=+2, for Fe=+3 or +2", m: "d-block elements always lose d electrons first — they lose ns electrons first" },
        { name: "Important Compounds", f: ["KMnO₄: MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺", "K₂Cr₂O₇: acidic oxidizing agent", "CrO₄²⁻ (yellow) ⇌ Cr₂O₇²⁻ (orange) at low pH"], t: "KMnO₄ in acid: Mn goes +7 to +2 (gains 5e⁻). In neutral/basic: Mn goes to +4 (MnO₂)", m: "KMnO₄ acts same in acidic and basic medium — different products form" },
        { name: "Lanthanides & Actinides", f: ["Lanthanide contraction: size ↓ across La series", "Actinides: radioactive", "4f filling in lanthanides"], t: "Lanthanide contraction: 4f electrons poor shielding → 5d/6s energies similar to 4d/5s. Explains Zr≈Hf size", m: "Lanthanides show wide variation in properties — FALSE, they are very similar" },
        { name: "Catalytic Properties", f: ["Surface adsorption: H₂, O₂ on Pt", "Variable OS helps catalysis", "Finely divided state: higher surface area"], t: "Fe catalyst in Haber process, Pt in Ostwald process, V₂O₅ in Contact process. Variable OS is key", m: "Noble metals (Pt, Pd) are poor catalysts — they are excellent catalysts for oxidation" },
      ]},
      { name: "Coordination Compounds", concepts: [
        { name: "Nomenclature", f: ["[Co(NH₃)₆]Cl₃: hexaamminecobalt(III) chloride", "Cation before anion", "Ligands alphabetical, then metal"], t: "Name ligands alphabetically (ignoring di,tri prefixes). Anionic ligands end in -o (Cl⁻=chlorido, CN⁻=cyanido)", m: "Naming metal first in complex name — ligands come before metal" },
        { name: "VBT & CFT", f: ["Inner orbital: (n-1)d used → low spin", "Outer orbital: nd used → high spin", "CFSE=−0.4Δ×t₂g + 0.6Δ×eg"], t: "Strong field ligands (CN⁻,CO): low spin, inner orbital. Weak field (Cl⁻,F⁻): high spin, outer orbital", m: "All octahedral complexes are low spin — depends on ligand field strength" },
        { name: "Isomerism", f: ["Structural: ionisation, linkage, solvate", "Stereoisomers: geometric + optical", "cis-[Pt(NH₃)₂Cl₂]: anticancer drug"], t: "Square planar: shows geometric (cis/trans) isomerism. Octahedral: fac/mer isomers for MA₃B₃", m: "Tetrahedral complexes show geometric isomerism — FALSE, they don't" },
        { name: "Stability & EAN Rule", f: ["EAN=Z−OS+2×ligands", "Stable if EAN=36,54,86 (noble gas)", "Stability ∝ chelation (ring formation)"], t: "Chelate effect: chelating ligands form more stable complexes than monodentate. EDTA is hexadentate", m: "More ligands always means more stable complex — chelation matters more" },
      ]},
      { name: "Organic Chemistry Basics", concepts: [
        { name: "Electronic Effects", f: ["Inductive: σ bond, decreases with distance", "+M (resonance): lone pair donation", "−M: withdrawing by resonance"], t: "-I effect: F>Cl>Br>I>OH>OR>NH₂. +M: NH₂, OH, OR, halogens. −M: NO₂, CHO, COOH, CN", m: "Halogens are only electron withdrawing — they are -I but +M (both effects)" },
        { name: "Hyperconjugation", f: ["α-H atoms donate into π*/vacant orbital", "Stability: 3°>2°>1° carbocations", "More α-H → more hyperconjugation"], t: "Hyperconjugation stabilizes carbocations and alkyl-substituted alkenes. No bonds electrons — special name", m: "Hyperconjugation is weak — it significantly stabilizes carbocations and alkenes" },
        { name: "Reaction Intermediates", f: ["Carbocation: sp², planar, empty p", "Carbanion: sp³, lone pair", "Radical: sp², one unpaired e⁻"], t: "Stability of carbocations: 3°>2°>1°>CH₃⁺ (hyperconjugation+inductive). Carbanion: opposite trend", m: "Tertiary carbocation is least stable — it is MOST stable" },
        { name: "Acidity & Basicity", f: ["pKa of CH₄≈50, NH₃≈38, H₂O≈15.7", "Phenol pKa≈10, RCOOH pKa≈5", "More stable conjugate base → stronger acid"], t: "Resonance stabilization of conjugate base → stronger acid. Phenol > alcohol (phenoxide resonance-stabilized)", m: "All carboxylic acids have same acidity — electron-withdrawing groups increase acidity" },
      ]},
      { name: "Isomerism", concepts: [
        { name: "Constitutional Isomers", f: ["Chain isomers: diff carbon skeleton", "Position isomers: diff position of group", "Functional group isomers: diff functional group"], t: "Alcohol/ether, aldehyde/ketone, carboxylic acid/ester are functional group isomers", m: "Stereoisomers have different structural formulas — FALSE, same molecular formula AND connectivity" },
        { name: "Conformational Analysis", f: ["Ethane: staggered (more stable) vs eclipsed", "Cyclohexane: chair (most stable)", "Anti vs gauche for butane"], t: "Staggered conformation: minimum torsional strain. Chair cyclohexane: equatorial positions preferred for large groups", m: "Eclipsed conformation is stable — it has maximum torsional strain" },
        { name: "Geometric Isomerism", f: ["cis: same groups same side", "trans: same groups opposite sides", "Requires restricted rotation + different groups on each C"], t: "cis-2-butene is less stable than trans (steric strain). Maleic acid (cis) loses H₂O; fumaric (trans) doesn't", m: "cis is always less stable than trans — true for alkenes, but ring systems can differ" },
        { name: "Optical Isomerism", f: ["Chiral centre: 4 different groups", "R/S: priority by atomic number", "D/L: reference to glyceraldehyde"], t: "Plane polarized light rotated by chiral molecules. Enantiomers: non-superimposable mirror images. Racemic: no rotation", m: "All chiral molecules are optically active — racemic mixture is chiral but optically inactive" },
      ]},
      { name: "Hydrocarbons", concepts: [
        { name: "Alkanes", f: ["Free radical halogenation: Cl₂/hν", "Reactivity: F₂>Cl₂>Br₂ (selectivity reverse)", "Combustion: CₙH₂ₙ₊₂+(3n+1)/2 O₂→nCO₂+(n+1)H₂O"], t: "Halogenation selectivity: F₂ least selective (Br₂ most selective→attacks 3° C preferentially)", m: "Iodine reacts with alkanes under normal conditions — FALSE, too slow (endothermic)" },
        { name: "Alkenes", f: ["Markovnikov: H adds to C with more H", "Anti-Markovnikov: HBr + peroxide", "Ozonolysis: O₃ then Zn/H₂O → aldehydes/ketones"], t: "Markovnikov rule explained by carbocation stability. Anti-Markovnikov via radical mechanism", m: "All electrophilic additions follow Markovnikov — anti-Markovnikov occurs with peroxides for HBr" },
        { name: "Alkynes & Arenes", f: ["Terminal alkynes: acidic (pKa≈25)", "Benzene: 6π delocalized electrons", "EAS: −NO₂ at high T, −SO₃H reversible"], t: "Terminal alkyne C-H is acidic (sp carbon). Benzene: resonance stabilized, prefers substitution over addition", m: "Benzene undergoes addition reactions readily — it prefers SUBSTITUTION to preserve aromaticity" },
        { name: "Aromaticity & EAS", f: ["Aromatic: planar, cyclic, (4n+2)π Hückel", "Activating groups: o/p directors", "Deactivating (except halogens): m directors"], t: "Hückel rule: 4n+2 π electrons. OH, NH₂: strong activators (o,p). NO₂, CHO: deactivators (meta). Halogens: deactivate but o/p direct", m: "All deactivating groups are meta directors — halogens deactivate but direct o/p" },
      ]},
      { name: "Haloalkanes & Haloarenes", concepts: [
        { name: "SN1 vs SN2", f: ["SN2: backside attack, inversion", "SN1: carbocation, racemization", "SN2 rate=k[RX][Nu⁻]"], t: "SN2: primary alkyl halides, strong nucleophile, polar aprotic solvent. SN1: tertiary, weak Nu, polar protic", m: "Tertiary alkyl halide undergoes SN2 easily — 3° is too hindered for SN2, goes SN1" },
        { name: "E1 vs E2", f: ["E2: bimolecular, anti-periplanar H", "E1: unimolecular via carbocation", "Zaitsev: more substituted alkene preferred"], t: "E2: strong bulky base, anti arrangement required. E1: weak base or heat. Zaitsev rule: eliminate towards more substituted C", m: "E1 and E2 give same product — E1 may give mixture; E2 is stereospecific" },
        { name: "Grignard Reagents", f: ["RMgX in dry ether", "Reacts with CO₂→RCOOH", "Aldehyde→2° alcohol, ketone→3° alcohol"], t: "Grignard is strong nucleophile AND strong base. Must use dry conditions (reacts with water). Destroys protic groups", m: "Grignard with HCHO gives 2° alcohol — HCHO gives 1° alcohol (RCHOH)" },
        { name: "Haloarenes", f: ["C-X bond stronger in ArX (partial double bond)", "EAS: halogens o/p directors but deactivating", "Nucleophilic aromatic substitution: electron-withdrawing groups ortho/para"], t: "Aryl halides don't undergo SN1/SN2 easily (resonance stabilizes C-X). React with Mg in dry ether though", m: "Haloarenes react easily with NaOH — requires harsh conditions (300°C, 300 atm)" },
      ]},
      { name: "Oxygen-containing Compounds", concepts: [
        { name: "Alcohols & Phenols", f: ["Lucas test: 3°<2min, 2°<5min, 1°→no reaction", "Phenol: Ka≈10⁻¹⁰ (acidic)", "Phenol+FeCl₃: violet colour"], t: "Phenol more acidic than alcohol (phenoxide resonance-stabilized). Phenol undergoes EAS: OH is o/p director", m: "Phenol is neutral like alcohol — phenol is weakly acidic (pKa≈10)" },
        { name: "Carbonyl Compounds", f: ["Nu attack on C=O (carbonyl)", "Aldehydes more reactive than ketones", "Aldol: β-hydroxy carbonyl product"], t: "Nucleophilic addition to C=O: Nu attacks + (carbonyl C). Aldol needs α-H. Aldehyde: oxidized easily; ketone: not", m: "Ketones don't undergo Cannizzaro reaction — only aldehydes without α-H do" },
        { name: "Carboxylic Acids", f: ["pKa≈4-5 (RCOOH)", "EWG increases acidity", "Acid derivatives reactivity: anhydride>acyl Cl>ester>amide"], t: "Acyl chloride most reactive (Cl good leaving group). Amide least reactive (N lone pair donates into C=O)", m: "All carboxylic acid derivatives hydrolyze at same rate — acyl chloride >> ester >> amide" },
        { name: "Ethers & Epoxides", f: ["Williamson synthesis: RO⁻+R'X→ROR'", "Epoxide: ring opening under acid or base", "Acid: attack at more substituted C"], t: "Epoxide: under acid → Markovnikov opening (Nu attacks more substituted C). Under base: less hindered C", m: "Ether cleavage with HI: always cleaves at same position — depends on which C is more substituted" },
      ]},
      { name: "Nitrogen-containing Compounds", concepts: [
        { name: "Amines", f: ["Basicity: 2°>1°>3°>ArNH₂ (aqueous)", "Amine+HNO₂: 1°→diazonium, 2°→nitrosamine, 3°→NR", "Hinsberg test: separates 1°,2°,3°"], t: "Aniline less basic than aliphatic (lone pair in resonance with ring). Tertiary less basic than secondary in aqueous (steric/solvation)", m: "Basicity order: 3°>2°>1° (gas phase), but in water 2°>1°>3° for aliphatic amines" },
        { name: "Diazonium Salts", f: ["ArNH₂+HNO₂+HCl (0-5°C)→ArN₂⁺Cl⁻", "Coupling: +phenol/aniline→azo dye", "Sandmeyer: replace N₂⁺ with Cl,Br,CN,OH"], t: "Diazonium: unstable, kept at 0-5°C. Sandmeyer reaction replaces diazonium with many groups", m: "Diazonium salt is stable at room temperature — decomposes, must keep cold" },
        { name: "Nitro Compounds", f: ["ArNO₂+Fe/HCl or H₂/Pd→ArNH₂", "NO₂ is m-director (deactivating)", "Electrophilic substitution harder with NO₂"], t: "Reduction of nitrobenzene: Fe/HCl → aniline. Nitro group: strongly electron-withdrawing (−I and −M)", m: "Reduction of nitrobenzene gives phenol — it gives aniline (ArNH₂)" },
        { name: "Amides & Biomolecules", f: ["Amide: RCONHᵣ (least reactive carbonyl)", "Peptide bond: amide linkage", "Hofmann degradation: RCONH₂→RNH₂"], t: "Hofmann degradation: amide → amine with loss of CO (carbon decreases by 1). Peptide bond formation = condensation", m: "Amide bond is same as ester bond — amide has N (more resonance, less reactive than ester)" },
      ]},
      { name: "Biomolecules", concepts: [
        { name: "Carbohydrates", f: ["Monosaccharide: Cx(H₂O)y", "Glucose: C₆H₁₂O₆, aldohexose", "Starch: α-glycosidic bonds; Cellulose: β"], t: "Reducing sugar: has free aldehyde/ketone (gives Tollens/Fehling). Sucrose: non-reducing (no free group)", m: "All carbohydrates are reducing sugars — sucrose and some disaccharides are non-reducing" },
        { name: "Proteins & Amino Acids", f: ["20 amino acids: α-amino acids", "Zwitterion: NH₃⁺-CHR-COO⁻", "Primary structure: sequence of AA"], t: "At isoelectric point (pI): net charge zero, minimum solubility. Denaturation: 3° structure disrupted", m: "Denaturation breaks peptide bonds — it breaks only non-covalent interactions (3° structure)" },
        { name: "Enzymes & Vitamins", f: ["Enzyme: biological catalyst (protein)", "Lock and key / induced fit model", "Vitamins: A,D,E,K fat soluble; B,C water soluble"], t: "Enzymes: highly specific, lower activation energy. Inhibitors: competitive (reversible) or non-competitive (irreversible)", m: "All vitamins are water-soluble — A,D,E,K are fat-soluble (overdose is more dangerous)" },
        { name: "Nucleic Acids", f: ["DNA: A-T (2H bonds), G-C (3H bonds)", "RNA: uracil instead of thymine", "Nucleotide: base+sugar+phosphate"], t: "DNA double helix: antiparallel strands. A pairs with T (not G). G-C has 3 H-bonds (stronger)", m: "RNA has thymine — RNA has uracil (U). Thymine is only in DNA" },
      ]},
    ]
  },

  Mathematics: {
    color: "#8b5cf6", bg: "#faf5ff", icon: "📐",
    chapters: [
      { name: "Sets, Relations & Functions", concepts: [
        { name: "Set Operations", f: ["A∪B, A∩B, A-B, A'", "n(A∪B)=n(A)+n(B)−n(A∩B)", "De Morgan: (A∪B)'=A'∩B'"], t: "Venn diagram is the fastest approach for 3-set problems. n(A∪B∪C) formula has 7 terms", m: "De Morgan: (A∩B)' = A'∪B' (NOT A'∩B')" },
        { name: "Relations", f: ["Reflexive: (a,a)∈R for all a", "Symmetric: (a,b)∈R→(b,a)∈R", "Equivalence: reflexive+symmetric+transitive"], t: "Equivalence relation divides set into disjoint equivalence classes. Check all 3 properties for equivalence", m: "Symmetric relation is also reflexive — they are independent properties" },
        { name: "Types of Functions", f: ["Injective(one-one): f(a)=f(b)→a=b", "Surjective(onto): range=codomain", "Bijective: both injective and surjective"], t: "For bijection to exist: domain and codomain must have same cardinality. Inverse exists only for bijections", m: "Every function has an inverse — only bijections have inverses" },
        { name: "Composition & Inverse", f: ["(fog)(x)=f(g(x))", "f⁻¹ exists iff f is bijective", "f(f⁻¹(x))=x"], t: "fog ≠ gof in general. If f and g both bijective → fog is bijective. Domain of fog: subset where g(x) ∈ domain of f", m: "fog = gof always — order matters in composition" },
      ]},
      { name: "Complex Numbers", concepts: [
        { name: "Argand Plane & Polar Form", f: ["|z|=√(a²+b²)", "arg(z)=tan⁻¹(b/a)", "z=r(cosθ+i sinθ)=re^(iθ)"], t: "Multiply complex numbers: multiply moduli, add arguments. |z₁z₂|=|z₁||z₂|, arg(z₁z₂)=arg(z₁)+arg(z₂)", m: "arg(z) is always between 0 and 2π — principal argument is (−π,π]" },
        { name: "De Moivre's Theorem", f: ["(cosθ+i sinθ)ⁿ=cos nθ+i sin nθ", "nth roots of unity: e^(2πik/n)", "Sum of all nth roots = 0"], t: "Cube roots of unity: ω³=1, 1+ω+ω²=0. Use to simplify high powers of complex numbers", m: "Sum of nth roots of unity ≠ 0 — it IS zero for n>1" },
        { name: "Quadratic Equations", f: ["x=(-b±√(b²-4ac))/2a", "Sum of roots=−b/a, Product=c/a", "Discriminant D=b²−4ac"], t: "D>0: two real roots. D=0: equal roots. D<0: complex roots. Form equation: x²−(sum)x+(product)=0", m: "Complex roots can appear alone — always in conjugate pairs for real coefficients" },
        { name: "Properties of Complex Numbers", f: ["z·z̄=|z|²", "|z₁+z₂|≤|z₁|+|z₂| (triangle)", "Re(z)=(z+z̄)/2, Im(z)=(z−z̄)/2i"], t: "Triangle inequality: |z₁+z₂|≤|z₁|+|z₂|. Equality when arg(z₁)=arg(z₂) (same direction)", m: "z+z̄ gives 2Re(z) not |z| — |z|=√(z·z̄)" },
      ]},
      { name: "Matrices & Determinants", concepts: [
        { name: "Matrix Operations", f: ["(AB)ᵀ=BᵀAᵀ", "(AB)⁻¹=B⁻¹A⁻¹", "AA⁻¹=I (if A invertible)"], t: "Transpose reverses order in products. Matrix multiplication is NOT commutative. Only square matrices can be invertible", m: "AB = BA for matrices — FALSE, matrix multiplication is not commutative" },
        { name: "Determinants", f: ["|AB|=|A||B|", "|Aᵀ|=|A|", "|A⁻¹|=1/|A|"], t: "Det = 0 → matrix is singular (no inverse). Swap two rows: det changes sign. Multiply row by k: det multiplies by k", m: "|A+B|=|A|+|B| — FALSE, determinant is not additive" },
        { name: "Inverse & Adjoint", f: ["A⁻¹=adj(A)/|A|", "adj(A)=Cᵀ (transpose of cofactor matrix)", "A·adj(A)=|A|·I"], t: "Cofactor: Cᵢⱼ=(−1)^(i+j)×minor. Adjoint = transpose of cofactor matrix. A⁻¹ exists only if |A|≠0", m: "Cofactor matrix = adjoint — adjoint is the TRANSPOSE of cofactor matrix" },
        { name: "Cramer's Rule", f: ["x=D_x/D, y=D_y/D, z=D_z/D", "D≠0: unique solution", "D=0: infinite or no solution"], t: "Replace respective column with constants to get D_x, D_y, D_z. Works only when D≠0", m: "D=0 always means no solution — D=0 can mean infinitely many solutions (consistent equations)" },
      ]},
      { name: "Sequences & Series", concepts: [
        { name: "AP", f: ["aₙ=a+(n−1)d", "S_n=n/2[2a+(n−1)d]", "S_n=n/2(a+l)"], t: "If a,b,c in AP: 2b=a+c. Arithmetic mean between a,b: AM=(a+b)/2. Sum of n odd numbers = n²", m: "AP can only increase — AP can decrease if common difference d<0" },
        { name: "GP", f: ["aₙ=arⁿ⁻¹", "S_n=a(rⁿ−1)/(r−1)", "S_∞=a/(1−r) if |r|<1"], t: "If a,b,c in GP: b²=ac. GM between a,b: GM=√(ab). Sum to infinity valid only if |r|<1", m: "S∞ for |r|>1 is defined — S∞ only exists (converges) for |r|<1" },
        { name: "AGP & Special Series", f: ["AGP term: (a+(n-1)d)rⁿ⁻¹", "Σn=n(n+1)/2", "Σn²=n(n+1)(2n+1)/6"], t: "Σn³=[n(n+1)/2]²=(Σn)². AGP: multiply by r and subtract (standard trick)", m: "Σn² = (Σn)² — WRONG. Σn²=n(n+1)(2n+1)/6, but Σn³=(Σn)²" },
        { name: "AM-GM-HM Inequality", f: ["AM≥GM≥HM", "AM=(a+b)/2, GM=√(ab), HM=2ab/(a+b)", "Equality when a=b"], t: "AM-GM: a+b ≥ 2√(ab). Use for optimization: find min of sum when product given (or vice versa)", m: "AM-GM works for negative numbers — AM≥GM only for positive numbers" },
      ]},
      { name: "Permutations & Combinations", concepts: [
        { name: "Fundamental Principle", f: ["Multiplication: m×n ways for sequential", "Addition: m+n ways for alternatives", "nPr=n!/(n-r)!"], t: "Multiplication principle: AND (sequential events). Addition principle: OR (alternative events)", m: "nPr = nCr — nPr = nCr × r! (permutation counts order)" },
        { name: "Combinations", f: ["nCr=n!/r!(n-r)!", "nCr=nC(n-r)", "nCr+nC(r-1)=n+1Cr (Pascal)"], t: "nCr = nC(n-r): choosing r same as leaving n-r. Total subsets of n elements = 2ⁿ", m: "nC0 = 0 — nC0 = 1 (choosing nothing from n)" },
        { name: "Circular Arrangements", f: ["Circular: (n-1)! arrangements", "Necklace: (n-1)!/2 (flip identical)", "Restricted: fix the restricted element first"], t: "Circular: fix one element, arrange rest. Necklace: also divide by 2 (clockwise=anticlockwise)", m: "Circular arrangements same as linear — circular has (n-1)! not n!" },
        { name: "Distribution Problems", f: ["n identical into r distinct groups: n+r-1Cr-1", "n distinct into r distinct groups: rⁿ", "Derangements: D_n=n!Σ(−1)^k/k!"], t: "Identical items: stars and bars method. Distinct items: each item has r choices. Derangement: no item in own position", m: "Distributing n identical balls into r boxes same as distinct — identical uses combinations formula" },
      ]},
      { name: "Mathematical Induction", concepts: [
        { name: "PMI Steps", f: ["Step 1: Verify P(1) true", "Step 2: Assume P(k) true", "Step 3: Prove P(k+1) true"], t: "Key: in step 3, use P(k) assumption to prove P(k+1). Induction proves for ALL n, not just tested values", m: "Proving P(1) alone is sufficient — must prove the inductive step too" },
        { name: "Divisibility Proofs", f: ["Show n | f(k+1)-f(k)+f(k)", "Factor the expression using P(k)", "7ⁿ−1 divisible by 6"], t: "Write P(k+1) in terms of P(k): add/subtract to use induction hypothesis. Divisibility: show expression = multiple", m: "Induction proves P(n) for all integers — only proves for n≥1 (or stated base case)" },
        { name: "Inequality Proofs", f: ["Prove P(k+1) from P(k)", "2ⁿ>n² for n≥5", "n!>2ⁿ for n≥4"], t: "For inequalities: use P(k) assumption and show the increase from k to k+1 maintains inequality", m: "If P(k) true and P(1) true, we're done — must explicitly prove P(k)→P(k+1)" },
        { name: "Strong Induction", f: ["Assume P(1),P(2),...,P(k) all true", "Prove P(k+1)", "Used for recursive sequences"], t: "Strong induction: assume ALL previous cases, not just P(k). Useful for Fibonacci-type sequences", m: "Strong and weak induction prove different things — they prove the same statements" },
      ]},
      { name: "Binomial Theorem", concepts: [
        { name: "General Term", f: ["T(r+1)=nCr × aⁿ⁻ʳ × bʳ", "(1+x)ⁿ=ΣnCr xʳ", "Sum of coefficients: put x=1"], t: "T(r+1) is the (r+1)th term. For coefficient of xᵏ: find r from exponent equation", m: "T_r is the rth term — T_r = T_(r-1+1), so use T(r+1)=nCr aⁿ⁻ʳbʳ" },
        { name: "Middle Term", f: ["n even: middle term = T(n/2+1)", "n odd: two middle terms T((n+1)/2) and T((n+3)/2)", "Greatest coefficient: middle term (binomial coefficients)"], t: "Middle term has largest binomial coefficient. For (a+b)ⁿ with n even: only one middle term", m: "There's always one middle term — for odd n, there are TWO middle terms" },
        { name: "Special Binomials", f: ["(1+x)ⁿ≈1+nx (|x|<<1)", "C₀+C₁+C₂+...=2ⁿ", "C₀−C₁+C₂−...=0"], t: "Binomial approximation: (1+x)ⁿ≈1+nx for small x. Alternating sum of coefficients = 0", m: "C₀²+C₁²+...=2ⁿ — WRONG. ΣCr² = C(2n,n) (not 2ⁿ)" },
        { name: "Multinomial & Pascal", f: ["Pascal: nCr+nC(r-1)=n+1Cr", "nC0=nCn=1", "Catalan number: C(2n,n)/(n+1)"], t: "Pascal's triangle: each entry = sum of two above. nCr = nC(n-r) (symmetry). Use to find patterns in coefficients", m: "nCr + nCr = 2·nCr = (n+1)Cr — WRONG. nCr + nC(r-1) = (n+1)Cr" },
      ]},
      { name: "Limits, Continuity & Differentiability", concepts: [
        { name: "Standard Limits", f: ["lim(sin x/x)=1 as x→0", "lim((1+1/n)ⁿ)=e", "lim((aˣ-1)/x)=ln a as x→0"], t: "L'Hôpital: use only for 0/0 or ∞/∞ forms. Sandwich theorem: if f≤g≤h and f,h→L then g→L", m: "lim(sin x/x)=1 for x in degrees — only valid when x is in RADIANS" },
        { name: "Continuity", f: ["f continuous at a: lim f(x)=f(a)", "LHL=RHL=f(a) (all three equal)", "Discontinuity types: removable, jump, infinite"], t: "Differentiability → continuity, but continuity does NOT imply differentiability. |x| is continuous but not differentiable at 0", m: "Continuous function is always differentiable — |x| at x=0 is a counterexample" },
        { name: "L'Hôpital's Rule", f: ["lim f(x)/g(x)=lim f'(x)/g'(x) (0/0 or ∞/∞)", "Convert 0×∞ to 0/0 or ∞/∞", "1^∞: take log first"], t: "Always check if limit is 0/0 or ∞/∞ before applying L'Hôpital. Apply repeatedly if needed", m: "L'Hôpital works for all indeterminate forms directly — 0×∞, 1^∞, 0⁰ need conversion first" },
        { name: "Differentiability", f: ["f'(a)=lim[f(a+h)-f(a)]/h", "LHD=RHD for differentiability", "Chain rule: d/dx[f(g(x))]=f'(g(x))·g'(x)"], t: "Check differentiability at corner/cusp/break points. If f has corner (|x|), LHD≠RHD → not differentiable", m: "If LHL=RHL at a point, function is differentiable there — need to check f'(a) separately" },
      ]},
      { name: "Applications of Derivatives", concepts: [
        { name: "Tangent & Normal", f: ["Slope of tangent=dy/dx at point", "Normal slope=−1/(dy/dx)", "Tangent eqn: y−y₁=m(x−x₁)"], t: "Normal is perpendicular to tangent: m₁×m₂=−1. Angle of tangent with x-axis: tanθ = dy/dx", m: "Normal has same slope as tangent — normal slope = −1/(tangent slope)" },
        { name: "Monotonicity", f: ["f'(x)>0: increasing", "f'(x)<0: decreasing", "f'(x)=0: critical point (check further)"], t: "Critical point + f'' test: f''>0 → local min; f''<0 → local max; f''=0 → inconclusive (use sign change of f')", m: "f'(a)=0 implies local extremum — could be a point of inflection (e.g., x³ at x=0)" },
        { name: "Maxima & Minima", f: ["Local max: f'=0, f''<0", "Local min: f'=0, f''>0", "Global: compare all local + boundary values"], t: "For closed interval [a,b]: check critical points AND endpoints. Use AM-GM for optimization without calculus", m: "Local maximum is always the global maximum — must check all critical points and boundaries" },
        { name: "Mean Value Theorems", f: ["Rolle's: f(a)=f(b)→∃c: f'(c)=0", "LMVT: f'(c)=(f(b)-f(a))/(b-a)", "LMVT: instantaneous rate = average rate"], t: "Rolle's theorem: needs f(a)=f(b) + continuity + differentiability. LMVT: find c where tangent slope = chord slope", m: "MVT applies to all functions — needs continuity on [a,b] and differentiability on (a,b)" },
      ]},
      { name: "Integral Calculus", concepts: [
        { name: "Standard Integrals", f: ["∫xⁿdx=xⁿ⁺¹/(n+1)+C", "∫sin x dx=−cos x+C", "∫eˣdx=eˣ+C"], t: "∫1/(a²+x²)dx = (1/a)tan⁻¹(x/a). ∫1/√(a²-x²)dx = sin⁻¹(x/a). Memorize these families", m: "∫(1/x)dx = x⁰/0 — WRONG. ∫(1/x)dx = ln|x|+C" },
        { name: "Substitution Method", f: ["Let u=g(x), du=g'(x)dx", "∫f(g(x))g'(x)dx=∫f(u)du", "∫tan x dx=−ln|cos x|+C"], t: "Look for derivative of inner function already present. ∫f'(x)/f(x)dx = ln|f(x)|+C", m: "Can always substitute without ensuring g'(x) is present — substitution works only if the derivative factor exists" },
        { name: "Integration by Parts", f: ["∫u dv = uv − ∫v du", "ILATE: Inverse trig, Log, Algebraic, Trig, Exponential", "∫eˣ(f(x)+f'(x))dx=eˣf(x)+C"], t: "ILATE: choose u as whichever comes first. ∫eˣ[f(x)+f'(x)]dx = eˣf(x)+C (standard result)", m: "ILATE order is rigid — it's a guideline; choose u that simplifies when differentiated" },
        { name: "Partial Fractions", f: ["(px+q)/(ax²+bx+c): split into A/(x-r₁)+B/(x-r₂)", "Irreducible quadratic: (Ax+B)/(x²+bx+c)", "Repeated factor: A/(x-r)+B/(x-r)²"], t: "Partial fractions only when degree of numerator < denominator. If not, do polynomial division first", m: "Partial fractions can be used when degree(num) ≥ degree(den) directly — must divide first" },
      ]},
      { name: "Definite Integrals & Area", concepts: [
        { name: "Properties of Definite Integrals", f: ["∫ₐᵇf(x)dx=−∫ᵦᵃf(x)dx", "∫₀ᵃf(x)dx=∫₀ᵃf(a-x)dx", "∫₋ₐᵃf(x)dx=2∫₀ᵃf(x)dx if f even, 0 if odd"], t: "King's property: ∫₀ᵃf(x)dx=∫₀ᵃf(a-x)dx — powerful tool for JEE. Even function: symmetric about y-axis", m: "∫₋ₐᵃf(x)dx=2∫₀ᵃf(x)dx always — only for EVEN functions; zero for ODD functions" },
        { name: "Newton-Leibniz Formula", f: ["d/dx[∫_a^g(x) f(t)dt] = f(g(x))·g'(x)", "∫ₐᵇf(x)dx=[F(x)]ₐᵇ=F(b)−F(a)", "Fundamental theorem: differentiation and integration are inverse"], t: "Newton-Leibniz: differentiate under integral sign using chain rule when limit contains x", m: "d/dx[∫ₐˣf(t)dt] = f(a) — WRONG. It equals f(x) (upper limit substituted)" },
        { name: "Area Under Curves", f: ["Area=∫ₐᵇ|f(x)|dx", "Area between curves=∫ₐᵇ|f(x)−g(x)|dx", "Modulus: split at zeros of f(x)"], t: "For area, use |f(x)| — area is always positive. Find intersection points for limits of area between curves", m: "Area = ∫f(x)dx directly — negative values of f would give negative area; must use |f(x)|" },
        { name: "Definite Integral Limits", f: ["lim(n→∞) Σf(r/n)·(1/n)=∫₀¹f(x)dx", "Gamma function: Γ(n)=(n-1)!", "∫₀^(π/2)sinⁿx dx=(Wallis formula)"], t: "Riemann sum to definite integral: identify 1/n=dx, r/n=x, limits 0 to 1. Useful for series sum evaluation", m: "Summation limit always goes 0 to 1 — depends on how the sum is written" },
      ]},
      { name: "Differential Equations", concepts: [
        { name: "Order & Degree", f: ["Order: highest derivative", "Degree: power of highest derivative (after clearing radicals)", "General solution: order = number of arbitrary constants"], t: "Degree defined only when equation is polynomial in derivatives. If √(dy/dx) appears: square both sides first", m: "Order = degree — completely different: order is the type of derivative, degree is its power" },
        { name: "Variable Separable", f: ["dy/dx=f(x)g(y)→dy/g(y)=f(x)dx", "Integrate both sides", "Apply initial conditions to find C"], t: "Separate x and dx to one side, y and dy to other. Most common type in JEE. Don't forget +C", m: "Variable separable works for all first-order ODEs — only for separable form dy/dx=f(x)g(y)" },
        { name: "Linear First Order", f: ["dy/dx+P(x)y=Q(x)", "IF=e^(∫Pdx)", "Solution: y·IF=∫Q·IF dx+C"], t: "Integrating factor (IF) = e^(∫Pdx). Multiply entire equation by IF. Left side becomes d/dx(y·IF)", m: "IF=e^∫P(x)dx always — if equation has y·f(x), make sure it's in standard form first" },
        { name: "Homogeneous Equations", f: ["dy/dx=f(y/x)→put y=vx", "Bernoulli: dy/dx+Py=Qyⁿ→divide by yⁿ", "Exact: Mdx+Ndy=0 if ∂M/∂y=∂N/∂x"], t: "Homogeneous ODE: f(λx,λy)=λⁿf(x,y). Substitute y=vx to reduce to variable separable", m: "All first-order ODEs are exact — only if ∂M/∂y = ∂N/∂x" },
      ]},
      { name: "Straight Lines", concepts: [
        { name: "Equations of Lines", f: ["Slope-intercept: y=mx+c", "Point-slope: y−y₁=m(x−x₁)", "Intercept form: x/a+y/b=1"], t: "Normal form: x cosα + y sinα = p (p = perpendicular distance from origin). General: ax+by+c=0", m: "Slope of vertical line is 0 — vertical line has UNDEFINED (infinite) slope" },
        { name: "Distance Formulas", f: ["Point to line: |ax₁+by₁+c|/√(a²+b²)", "Distance between parallel: |c₁−c₂|/√(a²+b²)", "Foot of perpendicular: formula"], t: "Always use absolute value for distance (positive). Parallel lines ax+by+c₁=0 and ax+by+c₂=0 have same a,b", m: "Distance from point to line = (ax₁+by₁+c)/√(a²+b²) without modulus — must take |·|" },
        { name: "Angle Between Lines", f: ["tan θ=|(m₁-m₂)/(1+m₁m₂)|", "Parallel: m₁=m₂", "Perpendicular: m₁m₂=−1"], t: "For perpendicular lines: product of slopes = −1. If m is undefined (vertical) and other line is horizontal: perpendicular", m: "Two lines with m₁=m₂ are always the same line — parallel lines also have equal slopes" },
        { name: "Concurrent Lines", f: ["Three lines concurrent: |a b c; d e f; g h i|=0 (determinant)", "Locus: eliminate parameter", "Family of lines: L₁+λL₂=0"], t: "Family of lines through intersection of L₁=0 and L₂=0: L₁+λL₂=0 for any λ. Determine λ from additional condition", m: "Family of lines L₁+λL₂=0 includes L₂=0 — actually L₁=0 and L₂=0 are included for λ=0,∞" },
      ]},
      { name: "Circles & Conic Sections", concepts: [
        { name: "Circle", f: ["(x-h)²+(y-k)²=r²", "General: x²+y²+2gx+2fy+c=0", "Centre(−g,−f), r=√(g²+f²−c)"], t: "Tangent to circle at point (x₁,y₁): xx₁+yy₁+g(x+x₁)+f(y+y₁)+c=0 (T=0)", m: "Circle can have negative radius — if g²+f²−c<0, no real circle exists" },
        { name: "Parabola", f: ["y²=4ax: focus(a,0), directrix x=−a", "Parametric: (at²,2at)", "Tangent: ty=x+at²"], t: "4 standard parabolas: y²=4ax (opens right), y²=−4ax (left), x²=4ay (up), x²=−4ay (down). Latus rectum=4a", m: "Focus is at origin for y²=4ax — focus is at (a,0), vertex at origin" },
        { name: "Ellipse & Hyperbola", f: ["Ellipse: x²/a²+y²/b²=1 (a>b), e=c/a<1", "Hyperbola: x²/a²−y²/b²=1, e=c/a>1", "c²=a²−b² (ellipse), c²=a²+b² (hyperbola)"], t: "Ellipse: sum of focal distances = 2a. Hyperbola: difference = 2a. Rectangular hyperbola: xy=c² (e=√2)", m: "For ellipse b>a always — only when major axis is along y-axis" },
        { name: "Tangent & Normal to Conics", f: ["Tangent at (x₁,y₁): T=0 (replace x²→xx₁, y²→yy₁)", "Chord of contact: T=0 for external point", "Normal: perpendicular to tangent at point"], t: "T=0 trick works for all conics: replace x²→xx₁, xy→(xy₁+x₁y)/2, y²→yy₁, x→(x+x₁)/2", m: "Chord of contact passes through the point — it passes through the POLE of that point" },
      ]},
      { name: "Vector Algebra", concepts: [
        { name: "Vector Operations", f: ["a+b: triangle/parallelogram law", "|a+b|²=|a|²+|b|²+2a·b", "Unit vector: â=a/|a|"], t: "Vector addition is commutative and associative. |a−b|=|a−b| (compute using dot product)", m: "a−b = b−a for vectors — FALSE, vector subtraction is NOT commutative" },
        { name: "Dot Product", f: ["a·b=|a||b|cosθ", "a·b=a₁b₁+a₂b₂+a₃b₃", "Projection of a on b: (a·b)/|b|"], t: "a·b=0 iff perpendicular (or one is zero vector). Dot product is commutative: a·b=b·a", m: "a·a=|a| — WRONG. a·a=|a|²" },
        { name: "Cross Product", f: ["a×b=|a||b|sinθ n̂", "|a×b|=area of parallelogram", "a×b=−b×a"], t: "Cross product gives vector perpendicular to both. i×j=k, j×k=i, k×i=j (cyclic). a×a=0", m: "Cross product is commutative — a×b = −b×a (anti-commutative)" },
        { name: "Triple Products", f: ["Scalar triple: [a,b,c]=a·(b×c)=volume of parallelepiped", "Vector triple: a×(b×c)=(a·c)b−(a·b)c", "[a,b,c]=0 iff coplanar"], t: "Scalar triple product = ±volume of parallelepiped. Zero iff vectors coplanar. BAC-CAB rule for vector triple product", m: "a×(b×c)=(a×b)×c — NOT generally true (cross product is not associative)" },
      ]},
      { name: "3D Geometry", concepts: [
        { name: "Direction Cosines & Ratios", f: ["l²+m²+n²=1 (DCs)", "DC: cosα,cosβ,cosγ", "Angle: cosθ=l₁l₂+m₁m₂+n₁n₂"], t: "DCs are unique; DRs are proportional (many sets). Convert DRs (a,b,c) to DCs: divide by √(a²+b²+c²)", m: "Direction cosines and direction ratios are the same — DCs must satisfy l²+m²+n²=1; DRs need not" },
        { name: "Line in 3D", f: ["(x−x₁)/a=(y−y₁)/b=(z−z₁)/c", "Parametric: r=a+λb", "Skew lines: neither intersect nor parallel"], t: "Skew lines: not in same plane. Distance between skew lines = |(a₂−a₁)·(b₁×b₂)|/|b₁×b₂|", m: "All non-parallel lines in 3D intersect — lines can be skew (non-intersecting, non-parallel)" },
        { name: "Plane in 3D", f: ["r·n̂=d (normal form)", "ax+by+cz=d (Cartesian)", "Normal vector: (a,b,c)"], t: "Angle between line and plane: sinθ=|b·n|/(|b||n|). Point to plane distance: |ax₁+by₁+cz₁−d|/√(a²+b²+c²)", m: "Distance formula for point to plane: no absolute value needed — must take absolute value" },
        { name: "Angles & Distances", f: ["Angle between planes: cosθ=|n₁·n₂|/(|n₁||n₂|)", "Dist point to plane: |ax₁+by₁+cz₁+d|/√(a²+b²+c²)", "Image of point: formula"], t: "Two planes parallel if normals parallel (n₁=λn₂). Perpendicular if n₁·n₂=0. Angle between lines: use DCs", m: "Perpendicular planes have parallel normal vectors — WRONG, perpendicular planes have perpendicular normals" },
      ]},
      { name: "Statistics", concepts: [
        { name: "Measures of Central Tendency", f: ["Mean x̄=Σxᵢ/n", "Median: middle value (sorted)", "Mode: most frequent value"], t: "Mean: affected by outliers. Median: not affected by outliers. For symmetric distribution: mean=median=mode", m: "Mean is always the best measure — median better for skewed data or outliers" },
        { name: "Variance & SD", f: ["σ²=Σ(xᵢ−x̄)²/n", "σ²=Σxᵢ²/n − x̄²", "CV=σ/x̄×100 (coefficient of variation)"], t: "Variance = E(X²)−[E(X)]². Adding constant to all values: mean changes, variance unchanged", m: "Variance changes when same constant added to all data — variance is UNCHANGED" },
        { name: "Correlation & Regression", f: ["r = Σ(xᵢ-x̄)(yᵢ-ȳ)/√[Σ(xᵢ-x̄)²·Σ(yᵢ-ȳ)²]", "−1≤r≤1", "r=0: no linear correlation"], t: "r=1: perfect positive. r=−1: perfect negative. r=0: no linear correlation (could have non-linear). r² = coefficient of determination", m: "r=0 means no relationship — only no LINEAR relationship; non-linear relationship may exist" },
        { name: "Probability Distributions", f: ["E(X)=ΣxᵢP(xᵢ)", "Var(X)=E(X²)−[E(X)]²", "Binomial: E=np, Var=npq"], t: "Binomial: n trials, p success prob, q=1-p. E=np, Var=npq. Normal: mean=median=mode", m: "Binomial variance = np — WRONG. Binomial variance = npq (= np(1−p))" },
      ]},
      { name: "Probability", concepts: [
        { name: "Classical & Conditional", f: ["P(A)=favourable/total", "P(A|B)=P(A∩B)/P(B)", "P(A∩B)=P(A)·P(B|A)"], t: "Conditional probability: restrict sample space to B. Independent events: P(A∩B)=P(A)·P(B)", m: "Mutually exclusive events are independent — WRONG. If ME then P(A∩B)=0 ≠ P(A)P(B) (unless one has P=0)" },
        { name: "Bayes' Theorem", f: ["P(Aᵢ|B)=P(B|Aᵢ)P(Aᵢ)/ΣP(B|Aⱼ)P(Aⱼ)", "Law of total probability: P(B)=ΣP(B|Aᵢ)P(Aᵢ)", "Prior × likelihood = posterior"], t: "Bayes: update probability after new evidence. Requires mutually exclusive, exhaustive partition of sample space", m: "Bayes' theorem requires equal prior probabilities — priors can be any values summing to 1" },
        { name: "Binomial Distribution", f: ["P(X=r)=nCr pʳ qⁿ⁻ʳ", "E(X)=np, Var=npq", "Mode: (n+1)p if not integer"], t: "Binomial: n independent trials, each with probability p of success. Works only for discrete data with two outcomes", m: "Binomial mean > variance always — mean=np, variance=npq; since q<1, mean>variance (true but limited)" },
        { name: "Geometric & Poisson", f: ["Geometric: P(X=k)=(1-p)^(k-1)·p", "E(geometric)=1/p", "Poisson: P(X=k)=e^(−λ)λᵏ/k!"], t: "Geometric distribution: 'waiting time' for first success. Poisson: rare events with known average rate λ", m: "Geometric and binomial are the same — binomial has fixed n trials; geometric doesn't" },
      ]},
      { name: "Trigonometry", concepts: [
        { name: "Compound Angles", f: ["sin(A±B)=sinAcosB±cosAsinB", "cos(A±B)=cosAcosB∓sinAsinB", "tan(A±B)=(tanA±tanB)/(1∓tanAtanB)"], t: "Double angle: sin2A=2sinAcosA, cos2A=cos²A−sin²A=1−2sin²A=2cos²A−1. Memorize all forms of cos2A", m: "sin(A+B)=sinA+sinB — WRONG. Must use expansion formula" },
        { name: "Product-to-Sum", f: ["sinAcosB=½[sin(A+B)+sin(A-B)]", "2sinAcosB=sin(A+B)+sin(A-B)", "sinC+sinD=2sin((C+D)/2)cos((C-D)/2)"], t: "Sum-to-product: convert sums to products for integration/simplification. These are frequently tested in JEE", m: "sinA+sinB = 2sin(A+B/2)cos(A-B/2) — note the arguments are (A+B)/2 and (A-B)/2" },
        { name: "Trigonometric Equations", f: ["sinθ=sinα → θ=nπ+(−1)ⁿα", "cosθ=cosα → θ=2nπ±α", "tanθ=tanα → θ=nπ+α"], t: "Always find general solution first, then apply range. sin: (−1)ⁿ pattern. cos and tan: simpler ±α pattern", m: "sinθ=sinα → θ=2nπ+α — WRONG for sin. The general solution is θ=nπ+(−1)ⁿα" },
        { name: "Inverse Trig Functions", f: ["sin⁻¹(sinx)=x only if x∈[−π/2,π/2]", "sin⁻¹x+cos⁻¹x=π/2", "tan⁻¹x+cot⁻¹x=π/2"], t: "Domain: sin⁻¹,cos⁻¹,tan⁻¹. Range of sin⁻¹: [−π/2,π/2]. Range of cos⁻¹: [0,π]. Range of tan⁻¹: (−π/2,π/2)", m: "sin⁻¹(sin(2π))=2π — WRONG. sin⁻¹(sin x) ≠ x outside [−π/2,π/2]" },
      ]},
    ]
  }
};
