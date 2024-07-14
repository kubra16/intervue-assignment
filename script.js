document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector("#menu-button");
  const mobileMenu = document.querySelector("#mobile-menu");

  menuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const data = [
    {
      level: "Easy",
      category: "Data Structures & Algorithms",
      title: "Design a Free Food App",
      description:
        "We created this guide after speaking with our community of interviewers which includes over 100 current and former amazon engineers as well as our corpus of the mock interviews...",
      bgColor: "bg-blue-600",
    },
    {
      level: "Medium",
      category: "System Design",
      title: "Design a Scalable Messaging System",
      description:
        "This guide provides insights from experienced engineers and covers best practices for designing a scalable messaging system...",
      bgColor: "bg-yellow-500",
    },
    {
      level: "Hard",
      category: "Advanced Algorithms",
      title: "Optimizing Distributed Systems",
      description:
        "In this guide, we delve deep into the optimization strategies for distributed systems, sharing knowledge from top industry experts...",
      bgColor: "bg-green-500",
    },
    {
      level: "Easy",
      category: "Data Structures & Algorithms",
      title: "Design a Free Food App",
      description:
        "We created this guide after speaking with our community of interviewers which includes over 100 current and former amazon engineers as well as our corpus of the mock interviews...",
      bgColor: "bg-blue-600",
    },
    {
      level: "Medium",
      category: "System Design",
      title: "Design a Scalable Messaging System",
      description:
        "This guide provides insights from experienced engineers and covers best practices for designing a scalable messaging system...",
      bgColor: "bg-yellow-500",
    },
    {
      level: "Hard",
      category: "Advanced Algorithms",
      title: "Optimizing Distributed Systems",
      description:
        "In this guide, we delve deep into the optimization strategies for distributed systems, sharing knowledge from top industry experts...",
      bgColor: "bg-green-500",
    },
    {
      level: "Easy",
      category: "Data Structures & Algorithms",
      title: "Design a Free Food App",
      description:
        "We created this guide after speaking with our community of interviewers which includes over 100 current and former amazon engineers as well as our corpus of the mock interviews...",
      bgColor: "bg-blue-600",
    },
    {
      level: "Medium",
      category: "System Design",
      title: "Design a Scalable Messaging System",
      description:
        "This guide provides insights from experienced engineers and covers best practices for designing a scalable messaging system...",
      bgColor: "bg-yellow-500",
    },
    {
      level: "Hard",
      category: "Advanced Algorithms",
      title: "Optimizing Distributed Systems",
      description:
        "In this guide, we delve deep into the optimization strategies for distributed systems, sharing knowledge from top industry experts...",
      bgColor: "bg-green-500",
    },
    {
      level: "Easy",
      category: "Data Structures & Algorithms",
      title: "Design a Free Food App",
      description:
        "We created this guide after speaking with our community of interviewers which includes over 100 current and former amazon engineers as well as our corpus of the mock interviews...",
      bgColor: "bg-blue-600",
    },
    {
      level: "Medium",
      category: "System Design",
      title: "Design a Scalable Messaging System",
      description:
        "This guide provides insights from experienced engineers and covers best practices for designing a scalable messaging system...",
      bgColor: "bg-yellow-500",
    },
    {
      level: "Hard",
      category: "Advanced Algorithms",
      title: "Optimizing Distributed Systems",
      description:
        "In this guide, we delve deep into the optimization strategies for distributed systems, sharing knowledge from top industry experts...",
      bgColor: "bg-green-500",
    },
  ];

  const container = document.querySelector("#card-container");

  data.forEach((item) => {
    const card = document.createElement("div");
    card.className = "bg-white p-6 rounded-lg border ";
    card.innerHTML = `
                    <div class="flex flex-row items-center gap-4">
                        <h2 class="text-lg font-medium rounded text-white ${item.bgColor} px-2 py-1">${item.level}</h2>
                        <p class="text-gray-600">${item.category}</p>
                    </div>
                    <h3 class="mt-4 text-lg font-semibold text-gray-800">${item.title}</h3>
                    <p class="mt-2 text-gray-600">${item.description}</p>
                `;
    container.appendChild(card);
  });
});
