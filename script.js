// Predefined problems & solutions (25, expandable to 50+)
const problems = {
    "harassment": "Stay calm and try to move to a safe location immediately. Gather evidence if possible and report to authorities without delay.",
    "cyberbullying": "Block the harasser and save screenshots of the abuse. Report the incident to the cyber crime cell (Dial 1930) for legal action.",
    "stalking": "Avoid isolated places and always inform trusted friends or family about your movements. File a police complaint at the earliest opportunity.",
    "domestic violence": "Call the 181 Women Helpline and seek immediate police or NGO support. Move to a safe shelter if your safety is at risk.",
    "eve teasing": "Do not ignore such behavior—raise your voice and alert nearby people. Use helpline 1091 or report the offender to local police.",
    "workplace harassment": "Report the issue to your HR or the Internal Complaints Committee (ICC). If not resolved, approach women’s helpline or labor authorities.",
    "unequal pay": "Keep salary records and demand transparency in pay structures. If discrimination continues, seek legal advice under equal pay laws.",
    "child marriage": "Child marriage is illegal—contact Childline 1098 immediately. Protect the child and involve local authorities for legal action.",
    "dowry harassment": "File a complaint under the Dowry Prohibition Act. Seek support from women’s cells, NGOs, or helpline numbers for protection.",
    "acid attack threat": "Immediately inform police and request protection orders. Stay in safe areas and keep trusted contacts updated about threats.",
    "public transport safety": "Prefer GPS-enabled and verified cab services. Share your live location with trusted contacts during the journey.",
    "night travel safety": "Avoid deserted routes and always carry a safety app or alarm. Inform family/friends before starting your journey late at night.",
    "online blackmail": "Do not give in to blackmailers’ demands. Save all evidence and immediately file a complaint with the cyber crime cell (1930).",
    "social media trolling": "Block and report abusive accounts on the platform. If harassment persists, file an official complaint to the cyber police.",
    "sexual assault": "Seek medical assistance immediately and preserve any evidence. File an FIR with the police to ensure legal action against the offender.",
    "body shaming": "Do not internalize such comments—remember it is harassment. Report repeat offenders to authorities or mental health counselors.",
    "trafficking": "If you suspect trafficking, call helpline 1098 or 100. Provide details to police and NGOs that specialize in rescues and rehabilitation.",
    "discrimination at work": "Keep written proof of the discrimination and raise it with HR. If ignored, file a complaint under labor and anti-discrimination laws.",
    "unwanted touching": "Raise your voice immediately to alert others nearby. Report the incident to security or police to prevent future abuse.",
    "verbal abuse": "Stand firm and do not tolerate repeated verbal attacks. If it continues, report the offender to authorities or local women’s cells.",
    "blackmail with photos/videos": "Never agree to the blackmailer’s demands. Save the evidence and immediately approach the cyber crime division for help.",
    "forced marriage": "Contact police and dial 181 helpline for urgent intervention. Reach out to NGOs or women’s shelters for safety and legal protection.",
    "lack of education support": "Explore government scholarship programs and NGO initiatives. Seek financial aid or distance learning options to continue studies.",
    "health neglect": "Do not ignore symptoms—visit local government health centers. Enroll in women’s health schemes for free check-ups and medicines.",
    "financial dependency": "Join skill training or microfinance programs for women. Start small businesses or part-time jobs to achieve financial independence."
};

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("problemForm");
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const name = document.getElementById("name").value;
            const problem = document.getElementById("problem").value.toLowerCase();

            document.getElementById("profileSection").classList.remove("hidden");
            document.getElementById("welcomeText").innerText =
                `Hello ${name}, we care for your safety 💜`;
            document.getElementById("userProblem").innerText = problem;

            let solution = "We couldn’t find an exact match, but please reach out to the helpline (1091).";
            for (let key in problems) {
                if (problem.includes(key)) {
                    solution = problems[key];
                    break;
                }
            }
            document.getElementById("solution").innerText = solution;
        });
    }
});

// Chat simulation
function sendMessage() {
    const input = document.getElementById("chatInput");
    const msg = input.value.trim();
    if (msg === "") return;
    const chatBox = document.getElementById("chatBox");
    const p = document.createElement("p");
    p.innerText = "You: " + msg;
    chatBox.appendChild(p);

    // Simulated reply
    const reply = document.createElement("p");
    reply.innerText = "Support: Thank you for reaching out. Please check helpline 1091 for emergencies.";
    reply.style.background = "#d6f5d6";
    chatBox.appendChild(reply);

    input.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
}
