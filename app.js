const levels = [
  {
    level: 1, family: "Basic research", title: "Basic principles observed", decision: "Is there a credible scientific basis?",
    definition: "Observations are documented and linked to a possible technology concept. Application remains speculative.",
    environment: ["Analytical or theoretical setting", "Peer or subject-matter review", "No integrated hardware or software expected"],
    documents: ["Research question and intended application", "Literature review and systematic check of existing public information to see whether an invention, idea, or technical feature is already known", "Record of observed principles", "Initial assumptions and uncertainty log", "Named technical owner and review route"],
    milestones: ["Independent review confirms the principle is plausible", "Critical unknowns are ranked", "A testable technology concept is framed"],
    pitfalls: ["Treating an interesting observation as a defined technology", "Skipping systematic check of existing public information to see whether an invention, idea, or technical feature is already known ", "Hiding uncertainty behind a precise maturity claim"],
    exit: "A documented principle, a credible application hypothesis and a defined path to formulate the technology concept."
  },
  {
    level: 2, family: "Basic research", title: "Technology concept formulated", decision: "Can the concept be tested?",
    definition: "A practical application is described and the main functions, assumptions and technical unknowns are made explicit.",
    environment: ["Analytical models and desktop studies", "Early simulations or calculations", "Expert review of feasibility assumptions"],
    documents: ["Technology concept description", "Candidate use cases and operating assumptions", "Functional model or system sketch", "Feasibility analysis", "Initial intellectual-property and regulatory scan"],
    milestones: ["Measurable proof-of-concept objectives are agreed", "Critical functions are identified", "Experimental method and acceptance criteria are approved"],
    pitfalls: ["Using market interest as evidence of technical feasibility", "Leaving success criteria qualitative", "Ignoring the larger system the concept must eventually enter"],
    exit: "A test plan that can show whether the concept's critical functions work analytically or experimentally."
  },
  {
    level: 3, family: "Proof of concept", title: "Critical function proved analytically or experimentally", decision: "Did the critical function work?",
    definition: "Analytical studies or experiments show that the concept's key functions can work. Components may still be separate and low fidelity.",
    environment: ["Controlled development or simulation", "Bench experiments for critical functions", "Data captured against explicit acceptance criteria"],
    documents: ["Approved proof-of-concept test plan", "Experiment configuration and materials", "Raw results and analysis", "Requirements trace to critical functions", "Updated risk and assumption log"],
    milestones: ["Critical functions meet stated thresholds", "Results are repeatable or independently reviewed", "Architecture for a component-level validation is selected"],
    pitfalls: ["Testing only the easiest function", "Changing acceptance criteria after seeing results", "Confusing a one-off result with repeatability"],
    exit: "Repeatable proof that the critical functions work and an agreed component configuration for development validation."
  },
  {
    level: 4, family: "Technology development", title: "Component validated in Dev", decision: "Do the components work together?",
    definition: "Basic components are integrated and validated in a controlled Dev environment. Fidelity is sufficient to expose important interfaces.",
    environment: ["Controlled development", "Integrated breadboard or low-fidelity component assembly", "Known inputs, loads and interfaces"],
    documents: ["Allocated requirements and interface definitions", "Development validation plan", "Configuration record for integrated components", "Test results with anomalies and dispositions", "Preliminary verification cross-reference"],
    milestones: ["Critical interfaces operate together", "Material failure modes have owners and treatments", "Representative-environment needs are defined"],
    pitfalls: ["Calling separately tested components an integrated validation", "Leaving configuration changes unrecorded", "Using development conditions that avoid the hardest interface"],
    exit: "An integrated component result and an approved plan for validation in a relevant environment."
  },
  {
    level: 5, family: "Testing", title: "Component validated in a relevant environment", decision: "Does the technology survive representative conditions?",
    definition: "The component is tested under conditions that materially represent the intended use, including important loads and interfaces.",
    environment: ["Relevant or high-fidelity simulated environment", "Representative loads, data, interfaces and constraints", "Controlled test with production-like boundary conditions"],
    documents: ["Relevant-environment definition and rationale", "Updated component design baseline", "Qualification-oriented Test Strategy and Plan", "Results mapped to requirements", "Failure analysis and residual-risk record"],
    milestones: ["Unit Testing, SIT, UAT and Regression Testing completed and signed off", "Representative conditions and defects documented & agreed", "Critical performance is demonstrated", "Prototype scope and system interfaces are baselined"],
    pitfalls: ["Calling a convenient environment relevant", "Omitting representative data or operational loads", "Advancing with unresolved interface failures"],
    exit: "Validated component performance in representative conditions and a controlled prototype baseline."
  },
  {
    level: 6, family: "System demonstration", title: "Prototype demonstrated in a relevant environment", decision: "Can a representative prototype perform as a system?",
    definition: "A representative model or prototype demonstrates the critical technology as part of a system under relevant conditions.",
    environment: ["High-fidelity relevant environment", "Representative prototype and external interfaces", "Operational scenarios with faults and recovery paths"],
    documents: ["Prototype design and configuration baseline", "System-level demonstration plan", "Interface-control documentation", "Performance, reliability and fault results", "Deployment-readiness assessment"],
    milestones: ["Prototype meets critical system requirements", "Integration and recovery risks are reduced", "Operational demonstration plan and owner are agreed"],
    pitfalls: ["Demonstrating a subsystem without the critical interfaces", "Treating functional performance as operational suitability", "Ignoring deployment, support or development evidence"],
    exit: "A representative prototype that performs in relevant conditions and is ready for operational-environment demonstration."
  },
  {
    level: 7, family: "Operational demonstration", title: "System prototype demonstrated operationally", decision: "Does the prototype work in the intended operation?",
    definition: "A system prototype is demonstrated in an operational environment with realistic users, procedures, interfaces and constraints.",
    environment: ["Operational environment", "Realistic users, data, procedures and support model", "End-to-end scenarios, abnormal cases and recovery"],
    documents: ["Operational demonstration plan and approvals", "Production-representative system baseline", "User, safety and security evidence", "End-to-end performance and incident record", "Operational support and training plan"],
    milestones: ["Operational scenarios meet acceptance criteria", "Material user and support findings are closed", "Final system qualification scope is approved"],
    pitfalls: ["Using friendly pilot conditions that remove operational friction", "Leaving support teams outside the demonstration", "Treating a successful demo as formal qualification"],
    exit: "Operational proof from a production-representative prototype and an agreed qualification plan."
  },
  {
    level: 8, family: "Qualification", title: "Actual system completed and qualified", decision: "Has the final system met its acceptance basis?",
    definition: "The actual system is complete and qualified through test and demonstration against its approved requirements and intended use.",
    environment: ["Qualification and acceptance environments", "Final or production-equivalent configuration", "Approved operational and compliance conditions"],
    documents: ["Final design and configuration baseline", "Verification and validation record", "Qualification and compliance evidence", "Operations, maintenance and recovery procedures", "Acceptance decision and residual-risk approval"],
    milestones: ["Qualification evidence is complete", "Known limitations and residual risks are accepted", "Operational deployment and monitoring are authorised"],
    pitfalls: ["Qualifying a configuration that differs from the release", "Closing tests without resolving anomalies", "Assuming qualification proves sustained operational performance"],
    exit: "An accepted, qualified system with controlled configuration, operational ownership and authority to deploy."
  },
  {
    level: 9, family: "Production Verification", title: "Actual system proven in operation", decision: "Does operational evidence sustain the maturity claim?",
    definition: "The actual system has performed successfully in its intended operational setting and the evidence is drawn from real use.",
    environment: ["Intended operational environment", "Real workload, users, interfaces and support arrangements", "Normal operations plus observed incidents and recovery"],
    documents: ["Operational performance and reliability record", "Incident, problem and recovery evidence", "Benefits or mission-outcome record", "Configuration and change history", "Lessons learned and continuous-improvement backlog"],
    milestones: ["Performance remains within accepted limits", "Operational ownership is sustained", "Evidence informs the next product or capability decision"],
    pitfalls: ["Declaring TRL 9 immediately after go-live", "Using availability alone as proof of effectiveness", "Losing the evidence trail after the project closes"],
    exit: "Sustained operational evidence, controlled change and a clear decision on optimisation, scaling or retirement."
  }
];

const phaseGuidance = {
  research: {
    intro: "Prioritise the evidence that converts an idea into a reproducible technical claim.",
    steps: [
      ["Frame the critical claim", "State which function or principle must be true for the technology to proceed."],
      ["Make the experiment reviewable", "Define the method, baseline, acceptance threshold and data record before testing."],
      ["Reduce the largest uncertainty", "Run the test that can most credibly disprove the current assumption."],
      ["Set the next baseline", "Record the configuration and requirements that will enter the next maturity stage."]
    ]
  },
  prototyping: {
    intro: "Move from isolated proof towards integrated behaviour under representative conditions.",
    steps: [
      ["Freeze the tested configuration", "Record components, interfaces, software, data and test conditions."],
      ["Expose critical interfaces", "Integrate the elements most likely to fail when the technology enters a larger system."],
      ["Increase environmental fidelity", "Add representative loads, users, data, controls and failure scenarios."],
      ["Close or accept anomalies", "Give each material finding an owner, treatment and review decision."]
    ]
  },
  commercialisation: {
    intro: "Connect technical proof to qualification, repeatable delivery and sustained operational ownership.",
    steps: [
      ["Confirm the acceptance basis", "Identify the authority, standard, operational envelope and release configuration."],
      ["Prove repeatability", "Show that build, deployment, operation and recovery can be repeated under controlled processes."],
      ["Bring operations into the evidence", "Test support, security, training, monitoring and change with the owning teams."],
      ["Track performance after release", "Retain operational evidence long enough to support the TRL 9 judgement."]
    ]
  }
};

const savedLevel = Number(localStorage.getItem("trl-current-level"));
const savedPhase = localStorage.getItem("trl-current-phase");
let currentLevel = Number.isInteger(savedLevel) && savedLevel >= 1 && savedLevel <= 9 ? savedLevel : 4;
let currentPhase = Object.hasOwn(phaseGuidance, savedPhase) ? savedPhase : "prototyping";
let evidenceState = {};
try {
  const savedEvidence = JSON.parse(localStorage.getItem("trl-evidence-state") || "{}");
  evidenceState = savedEvidence && typeof savedEvidence === "object" && !Array.isArray(savedEvidence) ? savedEvidence : {};
} catch {
  localStorage.removeItem("trl-evidence-state");
}

const $ = (selector) => document.querySelector(selector);
const rail = $("#trlRail");
const toast = $("#toast");

function evidenceKey(type, index) { return `trl${currentLevel}-${type}-${index}`; }

function createRail() {
  rail.innerHTML = levels.map(item => `
    <button class="trl-stop" type="button" role="radio" aria-checked="${item.level === currentLevel}" tabindex="${item.level === currentLevel ? 0 : -1}" data-level="${item.level}">
      <strong>${item.level}</strong><span>${item.family.replace("Technology ", "Tech ")}</span>
    </button>`).join("");
  rail.addEventListener("click", event => {
    const button = event.target.closest(".trl-stop");
    if (button) setLevel(Number(button.dataset.level));
  });
  rail.addEventListener("keydown", event => {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    const focusedLevel = Number(event.target.closest(".trl-stop")?.dataset.level) || currentLevel;
    const next = event.key === "Home" ? 1 : event.key === "End" ? 9 : Math.min(9, Math.max(1, focusedLevel + (event.key === "ArrowRight" ? 1 : -1)));
    setLevel(next, true);
  });
}

function renderChecklist(target, items, type) {
  target.innerHTML = items.map((item, index) => {
    const key = evidenceKey(type, index);
    return `<div class="check-row"><input id="${key}" type="checkbox" ${evidenceState[key] ? "checked" : ""}><label for="${key}">${item}</label><small>${type === "doc" ? "Evidence" : "Milestone"}</small></div>`;
  }).join("");
  target.querySelectorAll("input").forEach(input => input.addEventListener("change", () => {
    evidenceState[input.id] = input.checked;
    localStorage.setItem("trl-evidence-state", JSON.stringify(evidenceState));
    updateCompletion();
  }));
  target.querySelectorAll(".check-row").forEach(row => row.addEventListener("click", event => {
    if (event.target.closest("input, label")) return;
    const input = row.querySelector("input");
    input.checked = !input.checked;
    input.dispatchEvent(new Event("change", { bubbles: true }));
  }));
}

function render() {
  const item = levels[currentLevel - 1];
  const target = currentLevel < 9 ? currentLevel + 1 : 9;
  $("#levelNumber").textContent = item.level;
  $("#stageFamily").textContent = item.family;
  $("#levelTitle").textContent = item.title;
  $("#levelDefinition").textContent = item.definition;
  $("#nextDecision").textContent = item.decision;
  $("#environmentSummary").textContent = `Evidence should come from a ${item.environment[0].toLowerCase()}.`;
  $("#environmentRecord").innerHTML = `<strong>${item.environment[0]}</strong><p>The environment should make the important assumptions visible.</p><ul>${item.environment.slice(1).map(text => `<li>${text}</li>`).join("")}</ul>`;
  renderChecklist($("#documentationList"), item.documents, "doc");
  renderChecklist($("#milestoneList"), item.milestones, "milestone");
  $("#pitfallList").innerHTML = item.pitfalls.map(text => `<li>${text}</li>`).join("");
  $("#targetLevel").textContent = target;
  $("#mapTitle").innerHTML = currentLevel === 9 ? "Sustain TRL <span id=\"targetLevel\">9</span>" : `Route to TRL <span id="targetLevel">${target}</span>`;
  $("#mapIntro").textContent = phaseGuidance[currentPhase].intro;
  const levelSpecificDetails = [
    `Review ${item.documents[0].toLowerCase()} and ${item.documents[1].toLowerCase()} against the TRL ${currentLevel} claim.`,
    `Close the next unchecked record or milestone, starting with ${item.documents[2].toLowerCase()}.`,
    `Use ${item.environment[0].toLowerCase()} and demonstrate that ${item.milestones[0].toLowerCase()}.`,
    `Ask the accepting authority whether the evidence supports this gate: ${item.exit}`
  ];
  $("#nextSteps").innerHTML = phaseGuidance[currentPhase].steps.map(([title, phaseDetail], index) => `<li><strong>${title}</strong><span>${levelSpecificDetails[index]} ${phaseDetail}</span></li>`).join("");
  $("#exitEvidence").textContent = item.exit;
  document.querySelectorAll(".trl-stop").forEach(button => {
    button.setAttribute("aria-checked", button.dataset.level == currentLevel);
    button.tabIndex = button.dataset.level == currentLevel ? 0 : -1;
    const levelItem = levels[Number(button.dataset.level) - 1];
    const expected = levelItem.documents.length + levelItem.milestones.length;
    const completed = Object.entries(evidenceState).filter(([key, value]) => key.startsWith(`trl${button.dataset.level}-`) && value).length;
    button.dataset.complete = completed === expected;
  });
  document.querySelectorAll("#phaseSelector button").forEach(button => button.setAttribute("aria-pressed", button.dataset.phase === currentPhase));
  updateCompletion();
}

function updateCompletion() {
  const inputs = [...document.querySelectorAll(".checklist input")];
  const complete = inputs.filter(input => input.checked).length;
  const percent = inputs.length ? Math.round(complete / inputs.length * 100) : 0;
  $("#completionValue").textContent = `${percent}%`;
  $("#completionBar").style.transform = `scaleX(${percent / 100})`;
  document.querySelector(`[data-level="${currentLevel}"]`).dataset.complete = percent === 100;
}

function setLevel(level, focus = false) {
  currentLevel = level;
  localStorage.setItem("trl-current-level", level);
  render();
  const selected = document.querySelector(`[data-level="${level}"]`);
  selected.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  if (focus) selected.focus();
}

document.querySelector("#phaseSelector").addEventListener("click", event => {
  const button = event.target.closest("button[data-phase]");
  if (!button) return;
  currentPhase = button.dataset.phase;
  localStorage.setItem("trl-current-phase", currentPhase);
  render();
});

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 2300);
}

$("#resetButton").addEventListener("click", () => {
  if (!window.confirm("Clear all saved evidence checks for every TRL?")) return;
  evidenceState = {};
  localStorage.removeItem("trl-evidence-state");
  render();
  showToast("Evidence checks cleared");
});

$("#copyButton").addEventListener("click", async () => {
  const item = levels[currentLevel - 1];
  const missing = [...document.querySelectorAll(".checklist input:not(:checked)")].map(input => input.nextElementSibling.textContent);
  const summary = [`TRL ${currentLevel}: ${item.title}`, `Phase: ${currentPhase}`, `Next decision: ${item.decision}`, "", "Evidence gaps:", ...(missing.length ? missing.map(text => `- ${text}`) : ["- No unchecked items"]), "", `Exit evidence: ${item.exit}`].join("\n");
  try { await navigator.clipboard.writeText(summary); showToast("Project summary copied"); }
  catch { showToast("Copy unavailable. Use Print review instead."); }
});

$("#printButton").addEventListener("click", () => window.print());

createRail();
render();
